import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
import { createClient } from '@supabase/supabase-js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');
const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!dryRun && (!supabaseUrl || !serviceRoleKey)) {
  throw new Error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the shell before importing content.');
}

const supabase = dryRun ? null : createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function source(relativePath) {
  return readFile(path.join(root, relativePath), 'utf8');
}

function dataLiteral(text, marker, delimiter) {
  const markerIndex = text.indexOf(marker);
  if (markerIndex < 0) throw new Error(`Could not find ${marker} in legacy content.`);

  const start = text.indexOf(delimiter, markerIndex + marker.length);
  if (start < 0) throw new Error(`Could not find ${delimiter} after ${marker}.`);

  const closing = delimiter === '{' ? '}' : ']';
  let depth = 0;
  let quote = '';
  let escaped = false;
  for (let index = start; index < text.length; index += 1) {
    const character = text[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === quote) quote = '';
      continue;
    }
    if (character === '"' || character === "'" || character === '`') quote = character;
    else if (character === delimiter) depth += 1;
    else if (character === closing && --depth === 0) {
      return vm.runInNewContext(`(${text.slice(start, index + 1)})`, Object.create(null), { timeout: 1000 });
    }
  }
  throw new Error(`Unclosed ${delimiter} data literal after ${marker}.`);
}

function moduleValue(text, expression) {
  const context = Object.create(null);
  vm.runInNewContext(`${text}\nglobalThis.exportedContent = ${expression};`, context, { timeout: 3000 });
  return context.exportedContent;
}

function yearEightQuestions(html) {
  const marker = 'const QUESTIONS=';
  const start = html.indexOf(marker);
  const arrayStart = html.indexOf('[', html.indexOf(':', start));
  if (start < 0 || arrayStart < 0) throw new Error('Could not find Year 8 question data.');
  return dataLiteral(html.slice(start), 'const QUESTIONS=', '[');
}

function itemsFromQuestions(questions, hints = {}) {
  return Object.entries(questions).map(([number, prompt], index) => ({
    prompt,
    hint: hints[prompt] ?? null,
    response_type: 'text',
    field_config: [],
    sort_order: index,
  }));
}

function guidedFields(fields) {
  return fields.map(([key, label, type, options]) => ({
    key,
    label,
    type,
    initial: options ?? '',
    options: type === 'select' && options ? options.split('|') : [],
  }));
}

function questionSections(sectionTitle, questionItems, instructions = null, status = 'open') {
  return [{
    title: sectionTitle,
    instructions,
    status,
    items: questionItems,
  }];
}

async function expectQuery(query) {
  if (!supabase) throw new Error('Database access is disabled during a dry run.');
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

const indexHtml = await source('dist/index.html');
const encodedMarker = 'const encodedActivities=';
const encodedStart = indexHtml.indexOf(encodedMarker) + encodedMarker.length;
const encodedEnd = indexHtml.indexOf(';const activities=', encodedStart);
if (encodedStart < encodedMarker.length || encodedEnd < 0) {
  throw new Error('Could not locate embedded legacy activities in dist/index.html.');
}
const embedded = JSON.parse(indexHtml.slice(encodedStart, encodedEnd));
const activityHtml = Object.fromEntries(
  Object.entries(embedded).map(([key, value]) => [key, Buffer.from(value, 'base64').toString('utf8')]),
);

const frenchY7Questions = dataLiteral(activityHtml.y7, 'const questions=', '{');
const frenchY7English = dataLiteral(activityHtml.y7, 'const questionEnglish=', '{');
const spanishY7Questions = dataLiteral(activityHtml.s7, 'const questions=', '{');
const frenchY8Questions = yearEightQuestions(activityHtml.y8);
const spanishY8Questions = yearEightQuestions(activityHtml.s8);
const frenchY9 = moduleValue(await source('dist/y9-french.js'), 'YEAR_NINE_FRENCH.groups');
const frenchGcseThemes = moduleValue(await source('dist/y10-conversation.js'), 'Y10_CONVERSATION_THEMES');
const ibFrenchTopics = moduleValue(await source('dist/ib-french-topics.js'), 'IB_FRENCH_TOPICS');
const spanishTopics = moduleValue(await source('dist/spanish-igcse-questions.js'), 'SPANISH_IGCSE_TOPICS');

const languageRows = dryRun
  ? [{ id: 'fr', code: 'fr' }, { id: 'es', code: 'es' }]
  : await expectQuery(supabase.from('languages').select('id, code'));
const yearRows = dryRun
  ? Array.from({ length: 7 }, (_, index) => ({ id: `Year ${index + 7}`, name: `Year ${index + 7}` }))
  : await expectQuery(supabase.from('year_groups').select('id, name'));
const languages = new Map(languageRows.map(row => [row.code, row.id]));
const years = new Map(yearRows.map(row => [row.name, row.id]));

for (const required of ['fr', 'es']) {
  if (!languages.has(required)) throw new Error(`Seed language ${required} is missing; apply the migration first.`);
}
for (let year = 7; year <= 13; year += 1) {
  if (!years.has(`Year ${year}`)) throw new Error(`Year ${year} is missing; apply the migration first.`);
}

const assessments = [
  {
    key: 'fr-year-7-term-1-questions-orales',
    language: 'fr',
    year: 7,
    term: 'Term 1',
    title: 'Questions orales',
    subtitle: 'Je me présente · Personal information',
    sections: questionSections(
      'Questions orales',
      itemsFromQuestions(frenchY7Questions, frenchY7English).map(item => ({
        ...item,
        hint: item.prompt === frenchY7Questions['8']
          ? 'Optional question in the original activity; it can be included from the practice settings.'
          : item.hint,
      })),
      'Practise introducing yourself and answering personal-information questions.',
    ),
  },
  {
    key: 'fr-year-8-start-of-year-revision',
    language: 'fr',
    year: 8,
    term: 'Start of Year',
    title: 'Start of Year Revision',
    subtitle: 'Questions essentielles',
    sections: questionSections('Questions essentielles', itemsFromQuestions(frenchY8Questions)),
  },
  {
    key: 'fr-year-9-revision-questions-orales',
    language: 'fr',
    year: 9,
    term: 'Revision',
    title: 'Questions orales',
    subtitle: 'Self, family and friends',
    sections: questionSections('Questions orales', frenchY9.map((group, index) => ({
      prompt: group.question,
      hint: 'Answer-building fields: ' + group.fields.map(([, label]) => label).join('; '),
      response_type: 'guided_fields',
      field_config: guidedFields(group.fields),
      sort_order: index,
    }))),
  },
  {
    key: 'es-year-7-term-1-preguntas-orales',
    language: 'es',
    year: 7,
    term: 'Term 1',
    title: 'Preguntas orales',
    subtitle: 'Personal information',
    sections: questionSections('Preguntas orales', itemsFromQuestions(spanishY7Questions)),
  },
  {
    key: 'es-year-8-repaso-preguntas-basicas',
    language: 'es',
    year: 8,
    term: 'Repaso',
    title: 'Preguntas Básicas',
    subtitle: 'All extension items included',
    sections: questionSections('Preguntas Básicas', itemsFromQuestions(spanishY8Questions)),
  },
  {
    key: 'fr-year-10-gcse-speaking-tasks',
    language: 'fr',
    year: 10,
    term: 'GCSE',
    title: 'Speaking tasks',
    subtitle: 'General Conversation',
    sections: [
      { title: 'Read Aloud', instructions: null, status: 'coming_soon', items: [] },
      { title: 'Photo Task', instructions: null, status: 'coming_soon', items: [] },
      { title: 'Role Plays', instructions: null, status: 'coming_soon', items: [] },
      {
        title: 'General Conversation',
        instructions: null,
        status: 'open',
        items: [{
          prompt: 'Choose a General Conversation theme.',
          hint: null,
          response_type: 'navigation',
          field_config: [],
          sort_order: 0,
        }],
      },
    ],
  },
  {
    key: 'fr-year-10-general-conversation',
    language: 'fr',
    year: 10,
    term: 'GCSE',
    title: 'General Conversation',
    subtitle: 'Choose a theme',
    sections: frenchGcseThemes.map((theme, index) => ({
      title: theme.title,
      instructions: null,
      status: 'open',
      items: theme.questions.map((question, itemIndex) => ({
        prompt: question.text,
        hint: question.topic,
        response_type: 'text',
        field_config: [],
        sort_order: itemIndex,
      })),
      sort_order: index,
    })),
  },
  {
    key: 'fr-year-12-ib-french-b-topics',
    language: 'fr',
    year: 12,
    term: 'IB French B',
    title: 'Choisis un thème',
    subtitle: 'IB French B',
    sections: ibFrenchTopics.flatMap((topic, topicIndex) => topic.subtopics.map((subtopic, subtopicIndex) => ({
      title: `${topic.title} · ${subtopic.title}`,
      instructions: topic.question,
      status: subtopic.activity ? 'open' : 'coming_soon',
      items: [{
        prompt: subtopic.title,
        hint: subtopic.activityLabel ?? null,
        response_type: subtopic.activity ? 'guided_activity' : 'text',
        field_config: [],
        sort_order: 0,
      }],
      sort_order: topicIndex * 10 + subtopicIndex,
    }))),
  },
  {
    key: 'es-year-10-igcse-speaking-topics',
    language: 'es',
    year: 10,
    term: 'IGCSE',
    title: 'Speaking topics',
    subtitle: 'Topics A–E',
    sections: spanishTopics.flatMap((topic, topicIndex) => topic.subtopics.map((subtopic, subtopicIndex) => ({
      title: `${topic.code} · ${topic.title} — ${subtopic.code} · ${subtopic.title}`,
      instructions: null,
      status: 'open',
      items: subtopic.questions.map((question, itemIndex) => ({
        prompt: question.text,
        hint: question.hint ?? null,
        response_type: subtopic.code === 'A1' ? 'guided_activity' : 'text',
        field_config: [],
        sort_order: itemIndex,
      })),
      sort_order: topicIndex * 10 + subtopicIndex,
    }))),
  },
];

const labels = {
  fr: [
    { key: 'summary_title', value: 'Bilan' },
    { key: 'download', value: 'Télécharger' },
    { key: 'student_name', value: 'Nom et prénom' },
    { key: 'coming_soon', value: 'Coming soon' },
  ],
  es: [
    { key: 'summary_title', value: 'Mis respuestas' },
    { key: 'download', value: 'Descargar' },
    { key: 'student_name', value: 'Nombre y apellido' },
    { key: 'coming_soon', value: 'Coming soon' },
  ],
};

const plannedSectionCount = assessments.reduce((sum, assessment) => sum + assessment.sections.length, 0);
const plannedItemCount = assessments.reduce(
  (sum, assessment) => sum + assessment.sections.reduce((sectionSum, section) => sectionSum + section.items.length, 0),
  0,
);
const labelCount = Object.values(labels).reduce((sum, languageLabels) => sum + languageLabels.length, 0);
if (dryRun) {
  console.log(`Dry run: ${languageRows.length} languages, ${yearRows.length} year groups, ${assessments.length} assessments, ${plannedSectionCount} sections, ${plannedItemCount} prompts, and ${labelCount} UI labels.`);
  process.exit(0);
}

let sectionCount = 0;
let itemCount = 0;
for (const assessment of assessments) {
  const row = {
    legacy_key: assessment.key,
    language_id: languages.get(assessment.language),
    year_group_id: years.get(`Year ${assessment.year}`),
    term: assessment.term,
    title: assessment.title,
    subtitle: assessment.subtitle,
    status: 'draft',
  };
  const existing = await expectQuery(
    supabase.from('assessments').select('id').eq('legacy_key', assessment.key).maybeSingle(),
  );
  const assessmentRow = existing
    ? await expectQuery(supabase.from('assessments').update(row).eq('id', existing.id).select('id').single())
    : await expectQuery(supabase.from('assessments').insert(row).select('id').single());

  if (existing) {
    await expectQuery(supabase.from('assessment_sections').delete().eq('assessment_id', assessmentRow.id));
  }

  for (const [sectionIndex, section] of assessment.sections.entries()) {
    const createdSection = await expectQuery(supabase.from('assessment_sections').insert({
      assessment_id: assessmentRow.id,
      title: section.title,
      instructions: section.instructions,
      status: section.status,
      sort_order: section.sort_order ?? sectionIndex,
    }).select('id').single());
    sectionCount += 1;
    if (section.items.length) {
      await expectQuery(supabase.from('assessment_items').insert(section.items.map((item, index) => ({
        section_id: createdSection.id,
        prompt: item.prompt,
        hint: item.hint,
        response_type: item.response_type,
        field_config: item.field_config,
        sort_order: item.sort_order ?? index,
      }))));
      itemCount += section.items.length;
    }
  }
  await expectQuery(supabase.from('assessments')
    .update({ status: 'published' })
    .eq('id', assessmentRow.id));
}

for (const [code, languageLabels] of Object.entries(labels)) {
  await expectQuery(supabase.from('ui_labels').upsert(
    languageLabels.map(label => ({ language_id: languages.get(code), ...label })),
    { onConflict: 'language_id,key' },
  ));
}

console.log(`Imported ${languageRows.length} languages, ${yearRows.length} year groups, ${assessments.length} assessments, ${sectionCount} sections, ${itemCount} prompts, and ${labelCount} UI labels.`);
