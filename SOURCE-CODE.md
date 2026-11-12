# Complete project text files

Each heading gives the exact path in the ZIP. Binary assets are included as original files and listed in FILES.md. The Sites-only manifest is excluded as explained in README.md.

## `.gitignore`

```text
node_modules/
```

## `dist/assets/fiche/font-license.txt`

```text
Format: https://www.debian.org/doc/packaging-manuals/copyright-format/1.0/
Upstream-Name: DejaVu fonts
Upstream-Author: Stepan Roh <src@users.sourceforge.net> (original author),
                  see /usr/share/doc/fonts-dejavu-core/AUTHORS for full list
Source: https://dejavu-fonts.github.io/

Files: *
Copyright: Copyright (c) 2003 by Bitstream, Inc. All Rights Reserved. 
 Bitstream Vera is a trademark of Bitstream, Inc.
 DejaVu changes are in public domain.
License: bitstream-vera
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of the fonts accompanying this license ("Fonts") and associated
 documentation files (the "Font Software"), to reproduce and distribute the
 Font Software, including without limitation the rights to use, copy, merge,
 publish, distribute, and/or sell copies of the Font Software, and to permit
 persons to whom the Font Software is furnished to do so, subject to the
 following conditions:
 .
 The above copyright and trademark notices and this permission notice shall
 be included in all copies of one or more of the Font Software typefaces.
 .
 The Font Software may be modified, altered, or added to, and in particular
 the designs of glyphs or characters in the Fonts may be modified and
 additional glyphs or characters may be added to the Fonts, only if the fonts
 are renamed to names not containing either the words "Bitstream" or the word
 "Vera".
 .
 This License becomes null and void to the extent applicable to Fonts or Font
 Software that has been modified and is distributed under the "Bitstream
 Vera" names.
 .
 The Font Software may be sold as part of a larger software package but no
 copy of one or more of the Font Software typefaces may be sold by itself.
 .
 THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT,
 TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL BITSTREAM OR THE GNOME
 FOUNDATION BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING
 ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF
 THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE
 FONT SOFTWARE.
 .
 Except as contained in this notice, the names of Gnome, the Gnome
 Foundation, and Bitstream Inc., shall not be used in advertising or
 otherwise to promote the sale, use or other dealings in this Font Software
 without prior written authorization from the Gnome Foundation or Bitstream
 Inc., respectively. For further information, contact: fonts at gnome dot
 org.

Files: debian/*
Copyright: (C) 2005-2006 Peter Cernak <pce@users.sourceforge.net> 
           (C) 2006-2011 Davide Viti <zinosat@tiscali.it>
           (C) 2011-2013 Christian Perrier <bubulle@debian.org>
           (C) 2013 Fabian Greffrath <fabian+debian@greffrath.com>
License: GPL-2+
 This program is free software; you can redistribute it
 and/or modify it under the terms of the GNU General Public
 License as published by the Free Software Foundation; either
 version 2 of the License, or (at your option) any later
 version.
 .
 This program is distributed in the hope that it will be
 useful, but WITHOUT ANY WARRANTY; without even the implied
 warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 PURPOSE.  See the GNU General Public License for more
 details.
 .
 You should have received a copy of the GNU General Public
 License along with this package; if not, write to the Free
 Software Foundation, Inc., 51 Franklin St, Fifth Floor,
 Boston, MA  02110-1301 USA
 .
 On Debian systems, the full text of the GNU General Public
 License version 2 can be found in the file
 /usr/share/common-licenses/GPL-2'.
```

## `dist/assets/level-up.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="124" height="36" viewBox="0 0 124 36">
  <title>Level Up</title>
  <rect width="124" height="36" rx="9" fill="#102a46"/>
  <path d="M11 27h7v-5h6v-5h7v-7m-5 0h5v5" fill="none" stroke="#ffcf64" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="41" y="23" fill="#fff8e4" font-family="system-ui, sans-serif" font-size="14" font-weight="750" letter-spacing=".5">LEVEL UP</text>
</svg>
```

## `dist/ib-french-topics.js`

```javascript
const IB_FRENCH_TOPICS = [
  {
    title: 'Identités',
    question: 'Qui suis-je ? Comment suis-je perçu(e) par les autres ?',
    subtopics: [
      { title: 'Styles de vie, sous-cultures, valeurs et croyances', activity: 'y12', activityLabel: 'Styles de vie' },
      { title: 'Santé et bien-être' },
      { title: 'Langue et identité' },
    ],
  },
  {
    title: 'Expériences',
    question: 'Comment nos expériences nous façonnent-elles ?',
    subtopics: [
      { title: 'Loisirs et vacances' },
      { title: 'Migration et récits de vie' },
      { title: 'Rites de passage, coutumes et traditions' },
    ],
  },
  {
    title: 'Ingéniosité humaine',
    question: 'Comment la créativité et l’innovation influencent-elles notre monde ?',
    subtopics: [
      { title: 'Technologie et innovation scientifique' },
      { title: 'Communication et médias' },
      { title: 'Divertissement et expression artistique' },
    ],
  },
  {
    title: 'Organisation sociale',
    question: 'Comment les gens vivent-ils ensemble en société ?',
    subtopics: [
      { title: 'Communauté et engagement social' },
      { title: 'Éducation et travail' },
      { title: 'Relations sociales' },
    ],
  },
  {
    title: 'Partage de la planète',
    question: 'Quels défis mondiaux devons-nous relever ensemble ?',
    subtopics: [
      { title: 'Paix et conflits' },
      { title: 'Droits de l’homme, égalité et justice sociale' },
      { title: 'Environnement, mondialisation et durabilité' },
    ],
  },
];

function showIbFrenchTopics(topic) {
  const heading = document.getElementById('ib-french-heading');
  const question = document.getElementById('ib-french-question');
  const back = document.getElementById('ib-french-back');
  const grid = document.getElementById('ib-french-grid');
  heading.textContent = topic ? topic.title : 'Choisis un thème';
  question.textContent = topic?.question ?? '';
  question.hidden = !topic;
  back.textContent = topic ? '← Thèmes' : '← Cours';
  back.onclick = () => topic ? showIbFrenchTopics() : show('years');

  const items = topic ? topic.subtopics : IB_FRENCH_TOPICS;
  grid.replaceChildren(...items.map(item => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tile assessment';
    const title = document.createElement('strong');
    title.textContent = item.title;
    button.append(title);
    if (!topic) {
      button.onclick = () => showIbFrenchTopics(item);
    } else {
      const status = document.createElement('span');
      status.className = 'tag';
      status.textContent = item.activity ? item.activityLabel + ' →' : 'À venir';
      button.append(status);
      button.disabled = !item.activity;
      if (item.activity) button.onclick = () => openAssessment(item.activity);
    }
    return button;
  }));

  show('ib-french-topics');
  heading.focus({preventScroll: true});
}
```

## `dist/index.html`

```html
<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"/><meta content="width=device-width,initial-scale=1" name="viewport"/><title>Warwick Academy MFL Department | Atelier Oral</title><style>
:root{font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#17314d;background:#f4f7fb}*{box-sizing:border-box}body{margin:0}header{background:#17314d;color:white;padding:22px max(18px,calc((100vw - 1000px)/2))}header h1{font-size:27px;margin:0}header p{margin:5px 0 0;color:#d4e2f0}.wrap{max-width:1000px;margin:28px auto;padding:0 18px}.eyebrow{color:#62758c;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:700}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:15px;margin-top:20px}.tile{background:white;border:1px solid #d4e0eb;border-radius:16px;padding:25px;text-align:left;cursor:pointer;color:#17314d;font:inherit;box-shadow:0 2px 8px #1930470a}.tile:hover:not(:disabled){border-color:#3984c1;box-shadow:0 4px 16px #1930471a}.tile strong{display:block;font-size:21px;margin:8px 0}.tile small{display:block;color:#60758b;line-height:1.5}.tile .flag{font-size:34px}.tile:disabled{opacity:.55;cursor:not-allowed}.back{border:0;background:transparent;color:#215f98;cursor:pointer;font:inherit;font-weight:650;padding:8px 0;margin-bottom:18px}.crumb{color:#5e748c;font-size:13px;margin-bottom:14px}.assessment{display:flex;align-items:center;justify-content:space-between;gap:15px}.tag{background:#e8f2fa;color:#225a87;border-radius:30px;padding:5px 10px;font-size:12px}.note{margin-top:24px;color:#63768a;font-size:13px}.hidden{display:none}iframe{display:block;width:100%;height:calc(100vh - 130px);min-height:780px;border:0;background:white;border-radius:14px}.practicebar{display:flex;gap:16px;align-items:center;flex-wrap:wrap;justify-content:space-between;margin-bottom:12px}.practicebar h2{margin:0;font-size:19px}@media(max-width:550px){iframe{min-height:720px;height:calc(100vh - 170px)}header h1{font-size:22px}}

#home .tile .flag{font-size:clamp(68px,11vw,108px);line-height:1.1;display:block;margin:8px auto 16px}#home .tile{min-height:210px;justify-content:center}
#home .tile{text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:250px;transition:transform .15s,box-shadow .15s}
#home .tile:hover{transform:translateY(-3px)}#home .tile strong{font-size:26px;margin:12px 0 6px}
#home .tile small{max-width:230px}.flag{display:flex!important;width:152px;height:96px;overflow:hidden;border-radius:10px;box-shadow:0 3px 15px #102b4c2c;border:1px solid #e4e8ec;margin:6px auto 12px!important}
.flag-fr i{flex:1}.flag-fr i:nth-child(1){background:#002395}.flag-fr i:nth-child(2){background:white}.flag-fr i:nth-child(3){background:#ed2939}
.flag-es{flex-direction:column}.flag-es i:nth-child(1),.flag-es i:nth-child(3){height:25%;background:#aa151b}.flag-es i:nth-child(2){height:50%;background:#f1bf00}

:root{--navy:#102a46;--blue:#244e79;--red:#d64d55;--cream:#f7f9fd}body{min-height:100vh;min-height:100dvh;background:var(--cream);color:var(--navy)}.school-header{padding:0;background:#102a46}.school-header::after{content:'';display:block;height:6px;box-sizing:content-box;background:#8ac6ed;border-bottom:6px solid #0a2039}.header-inner{max-width:1100px;margin:auto;min-height:92px;display:flex;align-items:center;gap:15px;padding:13px 24px}.brand-mark{width:59px;height:59px;border:2px solid #f6e7c8;border-radius:13px;display:grid;place-items:center;color:#fff5dd;font-size:24px;font-weight:900;letter-spacing:-3px;flex-shrink:0}.school-name{display:flex;flex-direction:column;gap:2px}.school-name strong{font-size:19px;letter-spacing:.1px}.school-name span{font-size:13px;color:#d7e4f4}.header-right{margin-left:auto;text-align:right;font-size:23px;font-weight:300;letter-spacing:1px}.header-right b{color:#ffb2b6}.header-right small{display:block;font-size:11px;letter-spacing:1.4px;color:#bcd1e8;margin-top:4px}body>.wrap{max-width:none}.wrap{padding:28px 24px 70px}.hero{display:grid;grid-template-columns:1.1fr .9fr;min-height:330px;border-radius:26px;background:linear-gradient(115deg,#173657 0%,#1d527b 65%,#276c92 100%);color:white;overflow:hidden;position:relative;box-shadow:0 16px 36px #1736571a}.hero:before{content:'';position:absolute;width:380px;height:380px;border:1px solid #ffffff24;border-radius:50%;right:-75px;top:-120px}.hero-copy{padding:48px 45px;position:relative;z-index:1}.hero .eyebrow{color:#f8bdc3;letter-spacing:2px;font-size:12px}.hero h1{font-size:clamp(35px,5vw,60px);line-height:1.05;letter-spacing:-1.5px;margin:15px 0}.hero h1 em{font-style:normal;color:#ffbac0}.hero p{font-size:16px;line-height:1.55;color:#dbe8f5;max-width:420px}.hero-tag{display:inline-block;background:#ffffff22;border:1px solid #ffffff44;border-radius:40px;padding:10px 16px;font-size:13px;margin-top:10px}.hero-art{position:relative;min-height:300px}.hero-mic{position:absolute;left:39%;top:24%;font-size:105px;filter:drop-shadow(0 15px 14px #0b253a88);transform:rotate(-12deg)}.bubble{position:absolute;background:white;color:#183856;padding:15px 21px;border-radius:20px;font-weight:800;font-size:21px;box-shadow:0 12px 20px #092a4666}.bubble-a{left:7%;top:16%;transform:rotate(-8deg)}.bubble-b{right:7%;bottom:21%;transform:rotate(7deg)}.hero-stars{position:absolute;right:10%;top:17%;font-size:28px;color:#ffc6a2}.section-head{display:flex;align-items:end;justify-content:space-between;gap:12px;margin-top:35px}.section-head h2{margin:6px 0 18px;font-size:28px}.section-head p{color:#66798e}.language-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.language-tile{border:1px solid #dce6ef;border-radius:21px;background:white;padding:24px;display:flex;align-items:center;text-align:left;gap:21px;min-height:145px;box-shadow:0 8px 24px #1537540b;transition:transform .15s,box-shadow .15s}.language-tile:hover,.year-tile:hover{transform:translateY(-4px);box-shadow:0 16px 32px #1537541d}.language-tile strong{display:block;font-size:25px}.language-tile small{display:block;color:#697c90;margin-top:6px}.tile-arrow{margin-left:auto;font-size:27px;color:#37678e}.big-flag{width:94px!important;height:64px!important;border-radius:9px!important;overflow:hidden;box-shadow:0 5px 15px #122a4120;flex-shrink:0}.big-flag i{display:block}.flag-fr{display:flex!important}.flag-fr i{width:33.333%;height:100%}.flag-fr i:nth-child(1){background:#17439a}.flag-fr i:nth-child(2){background:#fff}.flag-fr i:nth-child(3){background:#ed2939}.flag-es{display:flex!important;flex-direction:column}.flag-es i{width:100%;height:25%}.flag-es i:nth-child(1),.flag-es i:nth-child(3){background:#aa151b}.flag-es i:nth-child(2){height:50%;background:#f1bf00}.grid#yearGrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:22px}.year-tile{border:1px solid #dce6ef;border-radius:20px;padding:0;text-align:left;background:white;overflow:hidden;transition:transform .15s,box-shadow .15s;box-shadow:0 8px 24px #1537540b}.year-art{height:137px;display:grid;place-items:center;font-size:72px;background:linear-gradient(140deg,#d8edff,#a9c9e5);position:relative}.year-photo{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover}.year-7 .year-photo,.year-9 .year-photo{object-position:center 30%}.year-10 .year-photo,.year-11 .year-photo,.year-13 .year-photo{object-position:center 38%}.year-label{display:block;padding:17px 18px 21px}.year-label strong{display:block;font-size:23px}.year-label small{display:block;color:#6b7c8b;margin-top:5px}.year-arrow{float:right;margin:-48px 18px 0 0;color:#6a8194;font-size:22px}.back{background:#e9f0f7;border:0;border-radius:12px;padding:11px 15px;margin-bottom:15px}.eyebrow{font-weight:800;letter-spacing:1.6px;font-size:11px;color:#bf4554}#years h2,#assessments h2{font-size:30px}#activity{border:1px solid #dae5ef;border-radius:18px;box-shadow:0 10px 25px #15375414}button:focus-visible{outline:3px solid #ef7076;outline-offset:3px}@media(max-width:700px){.header-inner{min-height:76px;padding:10px 15px}.brand-mark{width:45px;height:45px;font-size:19px}.school-name strong{font-size:15px}.school-name span{font-size:11px}.header-right{font-size:16px}.header-right small{display:none}.wrap{padding:18px 13px}.hero{grid-template-columns:1fr}.hero-copy{padding:30px 25px}.hero-art{min-height:145px}.hero-mic{font-size:65px;top:0;left:45%}.bubble{font-size:14px;padding:9px 12px}.bubble-a{top:10px;left:10%}.bubble-b{bottom:25px}.language-grid{grid-template-columns:1fr}.language-tile{min-height:110px;padding:17px}.big-flag{width:76px!important;height:51px!important}.grid#yearGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.year-art{height:105px;font-size:53px}.year-label{padding:13px}.year-label strong{font-size:20px}.year-label small{font-size:11px}.year-arrow{margin:-42px 10px 0 0}}
.header-inner{display:flex;align-items:center;justify-content:space-between;gap:22px}.school-brand{min-width:0}.school-logo{display:block;width:382px;max-width:100%;height:auto}.school-strapline{margin-top:8px;color:#e4edf6;font-size:14px;letter-spacing:.035em}.school-department{font-size:16px;color:#e4edf6;white-space:nowrap}@media(max-width:600px){.header-inner{align-items:flex-start;flex-direction:column;gap:10px}.school-logo{width:300px}.school-strapline{font-size:12px}.school-department{font-size:13px}}body.practice-fullscreen{display:flex;flex-direction:column;height:100dvh;overflow:hidden}
body.practice-fullscreen>.school-header{flex:none}
body.practice-fullscreen .header-inner{min-height:0;padding-block:8px}
body.practice-fullscreen .school-logo{width:220px}
body.practice-fullscreen .school-strapline{margin-top:4px;font-size:12px}
body.practice-fullscreen>.wrap{flex:1;min-height:0;width:100%;max-width:none;margin:0;padding:0}
body.practice-fullscreen #practice{display:flex;flex-direction:column;height:100%}
body.practice-fullscreen .practicebar{gap:8px;margin:0;padding:6px 14px;border-bottom:1px solid #dae5ef}
body.practice-fullscreen .practicebar .back{margin:0}
body.practice-fullscreen #activity{flex:1;height:auto;min-height:0;border:0;border-radius:0;box-shadow:none}
.speaking-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
.speaking-grid.task-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.speaking-grid .tag{flex-shrink:0}
body.home-screen{display:flex;flex-direction:column;min-height:100vh;min-height:100dvh}
body.home-screen>.wrap{display:flex;flex:1;width:100%;max-width:none;margin:0;padding:0}
#home{
  background-color:#173657;
  background-image:linear-gradient(180deg,#102a4612 15%,#102a46a6 48%,#102a4633 90%),url('assets/warwick-academy-aerial.webp');
  background-position:center;
  background-size:cover;
  color:white;
  flex:1;
  min-width:0;
  padding:clamp(18px,4vw,48px)
}
#home:not(.hidden){display:flex;flex-direction:column;align-items:center;justify-content:center}
#home h2{margin:0 0 20px;text-align:center;text-shadow:0 2px 8px #102a46}
#home .language-grid{max-width:760px;width:100%}
#home .language-tile{min-height:108px}
.year-8 .year-photo{object-position:center 32%}
@media(max-width:580px){#home{background-position:45% center}#home .language-grid{gap:10px}#home .language-tile{min-height:92px}}
.spanish-igcse-questions{max-width:760px;padding:16px 24px 16px 48px;border:1px solid #d4e0eb;border-radius:14px;background:white;line-height:1.6}
.spanish-igcse-questions li{padding:8px 0}
.spanish-igcse-questions li+li{border-top:1px solid #e6edf4}
.spanish-igcse-questions small{display:block;color:#52687b}
.bilan-form{margin-top:24px;padding:16px;border:1px solid #d4e0eb;border-radius:14px;background:#fff}
.bilan-form h3{margin:0 0 10px}
.bilan-controls{display:flex;align-items:end;gap:10px;flex-wrap:wrap}
.bilan-controls label{display:grid;gap:4px;flex:1;min-width:min(100%,230px);max-width:350px;font-weight:650}
.bilan-controls input,.bilan-controls button{padding:9px 12px;border:1px solid #9db3c8;border-radius:8px;font:inherit}
.bilan-controls input{width:100%}
.bilan-controls button{background:#17314d;color:#fff;cursor:pointer}
.bilan-controls button:disabled{opacity:.65;cursor:wait}
.bilan-form [role="status"]{margin:8px 0 0;font-size:14px}
.bilan-form [role="status"]:empty{display:none}
@media(max-width:900px){.speaking-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:580px){.speaking-grid,.speaking-grid.task-grid{grid-template-columns:1fr}}
</style></head><body class="home-screen"><header class="school-header"><div class="header-inner"><div class="school-brand"><img class="school-logo" src="assets/warwick-academy-logo.png" alt="Warwick Academy"><div class="school-strapline" lang="en">So much more than a place to learn</div></div><span class="school-department">MFL Department</span></div></header><main class="wrap"><section id="home" aria-labelledby="language-heading"><h2 id="language-heading">Choose your language</h2><div class="language-grid"><button class="language-tile french-tile" onclick="chooseLanguage('French')"><span class="big-flag flag flag-fr" aria-label="French flag"><i></i><i></i><i></i></span><span><strong lang="fr">Français</strong><small>French</small></span><span class="tile-arrow">→</span></button><button class="language-tile spanish-tile" onclick="chooseLanguage('Spanish')"><span class="big-flag flag flag-es" aria-label="Spanish flag"><i></i><i></i><i></i></span><span><strong lang="es">Español</strong><small>Spanish</small></span><span class="tile-arrow">→</span></button></div></section><section class="hidden" id="years"><button class="back" onclick="show('home')">← Languages</button><div class="eyebrow" id="yearLanguage"></div><h2>Choose your year group</h2><div class="grid" id="yearGrid"></div></section><section class="hidden" id="assessments"><button class="back" onclick="show('years')">← Year groups</button><div class="eyebrow" id="assessmentTrail"></div><h2>Choose your assessment</h2><div class="grid" id="assessmentGrid"></div><p class="note" id="assessmentNote" hidden>No practice activities available.</p></section><section class="hidden" id="y10-tasks">
  <button class="back" onclick="show('years')">← Year groups</button>
  <div class="eyebrow">GCSE French</div>
  <h2>Choose your speaking task</h2>
  <div class="grid speaking-grid task-grid">
    <button class="tile assessment" disabled><span><strong>Read Aloud</strong></span><span class="tag">Coming soon</span></button>
    <button class="tile assessment" disabled><span><strong>Photo Task</strong></span><span class="tag">Coming soon</span></button>
    <button class="tile assessment" disabled><span><strong>Role Plays</strong></span><span class="tag">Coming soon</span></button>
    <button class="tile assessment" onclick="show('y10-themes')"><span><strong>General Conversation</strong></span><span class="tag">Open →</span></button>
  </div>
</section>
<section class="hidden" id="y10-themes">
  <button class="back" onclick="show('y10-tasks')">← Speaking tasks</button>
  <div class="eyebrow">GCSE French</div>
  <h2>General Conversation</h2>
  <div class="grid speaking-grid">
    <button class="tile assessment" onclick="openAssessment('y10')"><span><strong>My personal world</strong></span><span class="tag">Open →</span></button>
    <button class="tile assessment" onclick="openAssessment('y10-wellbeing')"><span><strong>Lifestyles and wellbeing</strong></span><span class="tag">Open →</span></button>
    <button class="tile assessment" onclick="openAssessment('y10-neighbourhood')"><span><strong>My neighbourhood</strong></span><span class="tag">Open →</span></button>
    <button class="tile assessment" onclick="openAssessment('y10-media')"><span><strong>Media and technology</strong></span><span class="tag">Open →</span></button>
    <button class="tile assessment" onclick="openAssessment('y10-studying')"><span><strong>Studying and my future</strong></span><span class="tag">Open →</span></button>
    <button class="tile assessment" onclick="openAssessment('y10-travel')"><span><strong>Travel and tourism</strong></span><span class="tag">Open →</span></button>
  </div>
  <form id="y10-bilan" class="bilan-form" lang="fr" aria-labelledby="bilan-title">
    <h3 id="bilan-title">Bilan</h3>
    <div class="bilan-controls">
      <label>Nom et prénom <input name="student" autocomplete="name" maxlength="120" required></label>
      <button type="submit">Télécharger</button>
    </div>
    <p role="status"></p>
  </form>
</section>
<section class="hidden" id="ib-french-topics" lang="fr" aria-labelledby="ib-french-heading">
  <button type="button" class="back" id="ib-french-back">← Cours</button>
  <div class="eyebrow">IB French B</div>
  <h2 id="ib-french-heading" tabindex="-1">Choisis un thème</h2>
  <p class="muted" id="ib-french-question" hidden></p>
  <div class="grid speaking-grid" id="ib-french-grid"></div>
</section>
<section class="hidden" id="spanish-igcse" aria-labelledby="spanish-igcse-heading">
  <button type="button" class="back" id="spanish-igcse-back">← Courses</button>
  <div class="eyebrow" id="spanish-igcse-trail"></div>
  <h2 id="spanish-igcse-heading" tabindex="-1">Speaking topics</h2>
  <div id="spanish-igcse-content"></div>
  <form id="spanish-igcse-bilan" class="bilan-form" lang="es" aria-labelledby="spanish-igcse-bilan-title">
    <h3 id="spanish-igcse-bilan-title">Mis respuestas</h3>
    <div class="bilan-controls">
      <label>Nombre y apellido <input name="student" autocomplete="name" maxlength="120" required></label>
      <button type="submit">Descargar</button>
    </div>
    <p role="status"></p>
  </form>
</section>
<section class="hidden" id="practice"><div class="practicebar"><button class="back" id="practiceBack">← Assessments</button><div class="crumb">French / Year 7 / Term 1</div></div><iframe allow="microphone" id="activity" loading="lazy" title="French speaking practice"></iframe></section></main><script>let language='',year='';const sections=['home','years','assessments','y10-tasks','y10-themes','spanish-igcse','ib-french-topics','practice'];const encodedActivities={"s7":"PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSI+PHRpdGxlPlllYXIgNyBTcGFuaXNoIMK3IFByZWd1bnRhcyBvcmFsZXM8L3RpdGxlPjxzdHlsZT4KOnJvb3R7Zm9udC1mYW1pbHk6c3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksc2Fucy1zZXJpZjtjb2xvcjojMTgyYjQ0O2JhY2tncm91bmQ6I2Y0ZjdmYn0qe2JveC1zaXppbmc6Ym9yZGVyLWJveH1ib2R5e21hcmdpbjowfS53cmFwe21hcmdpbjphdXRvO3BhZGRpbmc6MjJweH0udG9we2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEycHg7ZmxleC13cmFwOndyYXB9LnBpbGx7Zm9udC1zaXplOjEycHg7YmFja2dyb3VuZDojZGNlOWY1O3BhZGRpbmc6NnB4IDEycHg7Ym9yZGVyLXJhZGl1czoyMHB4fW5hdntkaXNwbGF5OmZsZXg7Z2FwOjhweDtmbGV4LXdyYXA6d3JhcDttYXJnaW46MjBweCAwfWJ1dHRvbntmb250OmluaGVyaXQ7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOjFweCBzb2xpZCAjYzZkNGUyO2JvcmRlci1yYWRpdXM6MTBweDtwYWRkaW5nOjEwcHggMTRweDtiYWNrZ3JvdW5kOndoaXRlO2NvbG9yOiMxNzMxNGR9YnV0dG9uLnByaW1hcnksbmF2IGJ1dHRvbi5hY3RpdmV7YmFja2dyb3VuZDojMTczZDY2O2NvbG9yOndoaXRlO2JvcmRlci1jb2xvcjojMTczZDY2fWJ1dHRvbjpkaXNhYmxlZHtvcGFjaXR5Oi40O2N1cnNvcjpub3QtYWxsb3dlZH1idXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCl7ZmlsdGVyOmJyaWdodG5lc3MoLjk1KX0uY2FyZHtiYWNrZ3JvdW5kOndoaXRlO2JvcmRlcjoxcHggc29saWQgI2Q5ZTNlZDtib3JkZXItcmFkaXVzOjE1cHg7cGFkZGluZzoyMHB4O21hcmdpbi1ib3R0b206MTZweDtib3gtc2hhZG93OjAgMnB4IDZweCAjMTIzMn0uY2FyZCBoMnttYXJnaW4tdG9wOjB9Lm11dGVke2NvbG9yOiM1MzY2N2J9LmdyaWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMixtaW5tYXgoMCwxZnIpKTtnYXA6MTNweH1sYWJlbHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDttYXJnaW4tYm90dG9tOjRweH1pbnB1dCxzZWxlY3QsdGV4dGFyZWF7d2lkdGg6MTAwJTtmb250OmluaGVyaXQ7cGFkZGluZzoxMHB4O2JvcmRlcjoxcHggc29saWQgI2JkY2JkYTtib3JkZXItcmFkaXVzOjlweDtiYWNrZ3JvdW5kOndoaXRlfWlucHV0W3R5cGU9Y2hlY2tib3hde3dpZHRoOmF1dG99LmZpZWxke21hcmdpbjo4cHggMH0ucWhlYWR7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2dhcDoxMnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0udGFne2JhY2tncm91bmQ6I2VkZjNmYTtib3JkZXItcmFkaXVzOjIwcHg7cGFkZGluZzo1cHggMTBweDtmb250LXNpemU6MTJweH0uZnJlbmNoe2ZvbnQtc2l6ZTpjbGFtcCgyMXB4LDN2dywzMHB4KTtmb250LXdlaWdodDo2NTA7bGluZS1oZWlnaHQ6MS40NTttYXJnaW46MThweCAwfS5mb2N1c3tiYWNrZ3JvdW5kOiNlZmY1ZmM7Ym9yZGVyLXJhZGl1czoxNHB4O3BhZGRpbmc6MjRweDt0ZXh0LWFsaWduOmNlbnRlcjttaW4taGVpZ2h0OjEyMHB4O2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXJ9LmNvbnRyb2xze2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6OXB4O21hcmdpbi10b3A6MTZweH0uc21hbGx7Zm9udC1zaXplOjEzcHh9LmFuc3dlcntiYWNrZ3JvdW5kOiNmN2Y5ZmM7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkICM4YWE5Yzk7cGFkZGluZzoxMnB4O2JvcmRlci1yYWRpdXM6OHB4O2xpbmUtaGVpZ2h0OjEuOH0uaGludHtiYWNrZ3JvdW5kOiNmZmY3ZTY7cGFkZGluZzoxM3B4O2JvcmRlci1yYWRpdXM6MTBweDttYXJnaW4tdG9wOjEycHh9LmhpZGRlbntkaXNwbGF5Om5vbmV9LnRvZ2dsZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMHB4fS5zZWN0aW9ue21hcmdpbjoyMHB4IDB9LnByb2dyZXNze2hlaWdodDo3cHg7YmFja2dyb3VuZDojZTVlZGY2O2JvcmRlci1yYWRpdXM6OHB4O292ZXJmbG93OmhpZGRlbn0ucHJvZ3Jlc3M+ZGl2e2hlaWdodDoxMDAlO2JhY2tncm91bmQ6IzRhNzg5ZDt0cmFuc2l0aW9uOndpZHRoIC4yc30uYmFkZ2V7Y29sb3I6IzM1NjA4Nztmb250LXNpemU6MTNweDtmb250LXdlaWdodDo2NTB9LnF1ZXN0aW9ubGlzdHtkaXNwbGF5OmdyaWQ7Z2FwOjhweH0ucXVlc3Rpb25saXN0IGJ1dHRvbnt0ZXh0LWFsaWduOmxlZnR9LnF1ZXN0aW9ubGlzdCBidXR0b24uc2VsZWN0ZWR7Ym9yZGVyOjJweCBzb2xpZCAjMzg2YjlhO2JhY2tncm91bmQ6I2VkZjVmY30ucmlnaHR7bWFyZ2luLWxlZnQ6YXV0b31AbWVkaWEobWF4LXdpZHRoOjY0MHB4KXsuZ3JpZHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyfS53cmFwe3BhZGRpbmc6MTJweH0uY2FyZHtwYWRkaW5nOjE1cHh9LmNvbnRyb2xzIGJ1dHRvbntmbGV4OjF9fQoKICAgIDwvc3R5bGU+PC9oZWFkPjxib2R5PjxtYWluIGNsYXNzPSJ3cmFwIj48bmF2IGlkPSJ0YWJzIj48L25hdj48ZGl2IGlkPSJhcHAiPjwvZGl2PjwvbWFpbj48c2NyaXB0Pgpjb25zdCAkPWlkPT5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIFNUT1JFPSdhdGVsaWVyLXM3LXYxJzsKY29uc3QgZGVmYXVsdHM9e2ZpcnN0OidTb2bDrWEnLGxhc3Q6J0Jyb3duJyxmZWVsaW5nMTonRXN0b3kgbXV5IGJpZW4nLGZlZWxpbmdKb2luOid5JyxmZWVsaW5nMjonRXN0b3kgY2Fuc2FkYScsdG93bjonUGFnZXQnLHJlc2lkZW5jZUNvdW50cnk6J0Jlcm11ZGEnLG5vdFBsYWNlOidTcGFpbicsb3BpbmlvblBsYWNlOidCZXJtdWRhJyxsaWtlTGl2aW5nOid5ZXMnLGludGVuc2l0eTE6J2Jhc3RhbnRlJyxhZGplY3RpdmUxOid0cmFucXVpbG8nLGFkakpvaW46J3knLGludGVuc2l0eTI6J211eScsYWRqZWN0aXZlMjonZGl2ZXJ0aWRvJyxhZ2U6JzExJyxuZXh0QWdlOicxMicsbmV4dE1vbnRoOidtYXJ6bycsYmlydGhkYXlEYXk6JzIxJyxiaXJ0aGRheU1vbnRoOidtYXJ6bycsY291bnRyeTonQmVybXVkYScsZ2VuZGVyOidmJyxvcmlnaW5TdHlsZTonYm90aCcsb3RoZXJDb3VudHJ5OicnLG90aGVyQ291bnRyeUVuZ2xpc2g6Jycsb3RoZXJOYXRpb25hbGl0eTonJyxvdGhlck5hdGlvbmFsaXR5RW5nbGlzaDonJ307CmxldCBkYXRhPXsuLi5kZWZhdWx0c30sdGFiPSdwcmVwYXJlJyxxaWR4PTAsY2h1bmtpZHg9MCxoaW50PTAscmFuZG9tT3JkZXI9W10scmFuZG9tSWR4PTAsY29tcGxldGVkPXt9O3RyeXtjb25zdCBzPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkUpKTtpZihzKXtkYXRhPXsuLi5kZWZhdWx0cywuLi5zLmRhdGF9O2NvbXBsZXRlZD1zLmNvbXBsZXRlZHx8e319fWNhdGNoKGUpe30KZnVuY3Rpb24gc2F2ZSgpe2xvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JFLEpTT04uc3RyaW5naWZ5KHtkYXRhLGNvbXBsZXRlZH0pKX0KY29uc3QgZXNjPXM9PlN0cmluZyhzPz8nJykucmVwbGFjZSgvWyY8PiInXS9nLGM9Pih7JyYnOicmYW1wOycsJzwnOicmbHQ7JywnPic6JyZndDsnLCciJzonJnF1b3Q7JywiJyI6JyYjMzk7J31bY10pKTtjb25zdCBjYXA9cz0+cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStzLnNsaWNlKDEpOwpjb25zdCBxdWVzdGlvbnM9ezE6J8K/Q8OzbW8gdGUgbGxhbWFzPycsMjonwr9Dw7NtbyBzZSBlc2NyaWJlPycsMzonwr9RdcOpIHRhbD8gLyDCv0PDs21vIGVzdMOhcz8nLDQ6J8K/RMOzbmRlIHZpdmVzPycsNTonwr9DdcOhbnRvcyBhw7FvcyB0aWVuZXM/Jyw2OifCv0N1w6FuZG8gZXMgdHUgY3VtcGxlYcOxb3M/Jyw3OifCv0RlIGTDs25kZSBlcmVzPyd9O2NvbnN0IGFjdGl2ZT0oKT0+WzEsMiwzLDQsNSw2LDddOwpjb25zdCBudW1iZXJzPVsnY2VybycsJ3VubycsJ2RvcycsJ3RyZXMnLCdjdWF0cm8nLCdjaW5jbycsJ3NlaXMnLCdzaWV0ZScsJ29jaG8nLCdudWV2ZScsJ2RpZXonLCdvbmNlJywnZG9jZScsJ3RyZWNlJywnY2F0b3JjZScsJ3F1aW5jZScsJ2RpZWNpc8OpaXMnLCdkaWVjaXNpZXRlJywnZGllY2lvY2hvJywnZGllY2ludWV2ZScsJ3ZlaW50ZScsJ3ZlaW50aXVubycsJ3ZlaW50aWTDs3MnLCd2ZWludGl0csOpcycsJ3ZlaW50aWN1YXRybycsJ3ZlaW50aWNpbmNvJywndmVpbnRpc8OpaXMnLCd2ZWludGlzaWV0ZScsJ3ZlaW50aW9jaG8nLCd2ZWludGludWV2ZScsJ3RyZWludGEnLCd0cmVpbnRhIHkgdW5vJ107CmNvbnN0IG53b3JkPXY9Pm51bWJlcnNbTnVtYmVyKHYpXT8/U3RyaW5nKHYpO2Z1bmN0aW9uIGRhdGVXb3JkKHYpe3JldHVybiBOdW1iZXIodik9PT0xPyd1bm8nOm53b3JkKHYpfWZ1bmN0aW9uIG9yZGluYWwodil7bGV0IG49TnVtYmVyKHYpO3JldHVybiBuKygobiUxMDA+PTExJiZuJTEwMDw9MTMpPyd0aCc6KHsxOidzdCcsMjonbmQnLDM6J3JkJ31bbiUxMF18fCd0aCcpKX0KY29uc3QgbW9udGhzPXtlbmVybzonSmFudWFyeScsZmVicmVybzonRmVicnVhcnknLG1hcnpvOidNYXJjaCcsYWJyaWw6J0FwcmlsJyxtYXlvOidNYXknLGp1bmlvOidKdW5lJyxqdWxpbzonSnVseScsYWdvc3RvOidBdWd1c3QnLHNlcHRpZW1icmU6J1NlcHRlbWJlcicsb2N0dWJyZTonT2N0b2Jlcicsbm92aWVtYnJlOidOb3ZlbWJlcicsZGljaWVtYnJlOidEZWNlbWJlcid9Owpjb25zdCBmZWVsaW5ncz17J0VzdG95IG11eSBiaWVuJzonSSBhbSB2ZXJ5IHdlbGwnLCdFc3RveSBiaWVuJzonSSBhbSB3ZWxsJywnRXN0b3kgcmVndWxhcic6J0kgYW0gT0snLCdFc3RveSBtYWwnOidJIGFtIHVud2VsbCcsJ0VzdG95IGZhdGFsJzonSSBhbSB2ZXJ5IHVud2VsbCcsJ1RlbmdvIGhhbWJyZSc6J0kgYW0gaHVuZ3J5JywnVGVuZ28gc2VkJzonSSBhbSB0aGlyc3R5JywnRXN0b3kgY2Fuc2Fkbyc6J0kgYW0gdGlyZWQnLCdFc3RveSBjYW5zYWRhJzonSSBhbSB0aXJlZCcsJ0VzdG95IGNvbnRlbnRvJzonSSBhbSBoYXBweScsJ0VzdG95IGNvbnRlbnRhJzonSSBhbSBoYXBweSd9Owpjb25zdCBpbnRlbnNpdGllcz17bXV5Oid2ZXJ5JyxiYXN0YW50ZToncXVpdGUnLCd1biBwb2NvJzonYSBsaXR0bGUnLGRlbWFzaWFkbzondG9vJ307Y29uc3QgYWRqZWN0aXZlcz17dHJhbnF1aWxvOidjYWxtJyxhbmltYWRvOidsaXZlbHknLGRpdmVydGlkbzonZnVuJyxydWlkb3NvOidub2lzeScsYWJ1cnJpZG86J2JvcmluZycsYm9uaXRvOidwcmV0dHknLGludGVyZXNhbnRlOidpbnRlcmVzdGluZyd9Owpjb25zdCBvcmlnaW5zPXtCZXJtdWRhOntuYW1lOidsYXMgQmVybXVkYXMnLGVuOidCZXJtdWRhJyxtOidiZXJtdWRlw7FvJyxmOidiZXJtdWRlw7FhJyxuYXRFbjonQmVybXVkaWFuJ30sU3BhaW46e25hbWU6J0VzcGHDsWEnLGVuOidTcGFpbicsbTonZXNwYcOxb2wnLGY6J2VzcGHDsW9sYScsbmF0RW46J1NwYW5pc2gnfSxGcmFuY2U6e25hbWU6J0ZyYW5jaWEnLGVuOidGcmFuY2UnLG06J2ZyYW5jw6lzJyxmOidmcmFuY2VzYScsbmF0RW46J0ZyZW5jaCd9LEdlcm1hbnk6e25hbWU6J0FsZW1hbmlhJyxlbjonR2VybWFueScsbTonYWxlbcOhbicsZjonYWxlbWFuYScsbmF0RW46J0dlcm1hbid9LFVLOntuYW1lOidlbCBSZWlubyBVbmlkbycsZW46J3RoZSBVbml0ZWQgS2luZ2RvbScsbTonYnJpdMOhbmljbycsZjonYnJpdMOhbmljYScsbmF0RW46J0JyaXRpc2gnfSxFbmdsYW5kOntuYW1lOidJbmdsYXRlcnJhJyxlbjonRW5nbGFuZCcsbTonaW5nbMOpcycsZjonaW5nbGVzYScsbmF0RW46J0VuZ2xpc2gnfSxDYW5hZGE6e25hbWU6J0NhbmFkw6EnLGVuOidDYW5hZGEnLG06J2NhbmFkaWVuc2UnLGY6J2NhbmFkaWVuc2UnLG5hdEVuOidDYW5hZGlhbid9LFVTQTp7bmFtZTonbG9zIEVzdGFkb3MgVW5pZG9zJyxlbjondGhlIFVuaXRlZCBTdGF0ZXMnLG06J2VzdGFkb3VuaWRlbnNlJyxmOidlc3RhZG91bmlkZW5zZScsbmF0RW46J0FtZXJpY2FuJ30sUG9ydHVnYWw6e25hbWU6J1BvcnR1Z2FsJyxlbjonUG9ydHVnYWwnLG06J3BvcnR1Z3XDqXMnLGY6J3BvcnR1Z3Vlc2EnLG5hdEVuOidQb3J0dWd1ZXNlJ30sTWV4aWNvOntuYW1lOidNw6l4aWNvJyxlbjonTWV4aWNvJyxtOidtZXhpY2FubycsZjonbWV4aWNhbmEnLG5hdEVuOidNZXhpY2FuJ319Owpjb25zdCB0b3ducz1bJ1BhZ2V0JywnSGFtaWx0b24nLCdQZW1icm9rZScsJ1dhcndpY2snLCdTb3V0aGFtcHRvbicsJ1NhbmR5cycsJ0Rldm9uc2hpcmUnLCdTbWl0aOKAmXMnLCdTdCBHZW9yZ2XigJlzJ107CmNvbnN0IGpvaW5zPXt5OidhbmQnLHBlcm86J2J1dCd9O2Z1bmN0aW9uIHBsYWNlRGV0YWlscyhrZXkpe3JldHVybiBvcmlnaW5zW2tleV0/e2ZyOm9yaWdpbnNba2V5XS5uYW1lLGVuOm9yaWdpbnNba2V5XS5lbn06e2ZyOmtleSxlbjprZXl9fWZ1bmN0aW9uIG9yaWdpbigpe2lmKGRhdGEuY291bnRyeT09PSdPdGhlcicpcmV0dXJuIHtuYW1lOmRhdGEub3RoZXJDb3VudHJ5fHwn4oCmJyxlbjpkYXRhLm90aGVyQ291bnRyeUVuZ2xpc2h8fCfigKYnLG5hdDpkYXRhLm90aGVyTmF0aW9uYWxpdHl8fCfigKYnLG5hdEVuOmRhdGEub3RoZXJOYXRpb25hbGl0eUVuZ2xpc2h8fCfigKYnfTtsZXQgbz1vcmlnaW5zW2RhdGEuY291bnRyeV18fG9yaWdpbnMuQmVybXVkYTtyZXR1cm4gey4uLm8sbmF0Om9bZGF0YS5nZW5kZXJdfX0KZnVuY3Rpb24gQyhmcixlbil7cmV0dXJuIHtmcixlbixoOltdfX1mdW5jdGlvbiBjaHVua3MocSl7bGV0IGQ9ZGF0YTtzd2l0Y2gocSl7CmNhc2UgMTpyZXR1cm4gW0MoJ01lIGxsYW1vJywnTXkgbmFtZSBpcycpLEMoZC5maXJzdCxkLmZpcnN0KSxDKGQubGFzdCsnLicsZC5sYXN0KycuJyldOwpjYXNlIDI6cmV0dXJuIFtDKCdTZSBlc2NyaWJlJywnSXQgaXMgc3BlbHQnKSwuLi5bLi4uZC5maXJzdCsnICcrZC5sYXN0XS5maWx0ZXIoYz0+L1tBLVphLXrDgcOJw43Dk8Oaw5zDkcOhw6nDrcOzw7rDvMOxXS8udGVzdChjKSkubWFwKGM9PkMoYy50b1VwcGVyQ2FzZSgpLGMudG9VcHBlckNhc2UoKSkpXTsKY2FzZSAzOnJldHVybiBbQyhkLmZlZWxpbmcxLGZlZWxpbmdzW2QuZmVlbGluZzFdKSxDKGQuZmVlbGluZ0pvaW4sam9pbnNbZC5mZWVsaW5nSm9pbl0pLEMoZC5mZWVsaW5nMi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKStkLmZlZWxpbmcyLnNsaWNlKDEpKycuJyxmZWVsaW5nc1tkLmZlZWxpbmcyXSsnLicpXTsKY2FzZSA0OntsZXQgaG9tZT1wbGFjZURldGFpbHMoZC5yZXNpZGVuY2VDb3VudHJ5KSxuZWdhdGl2ZT1wbGFjZURldGFpbHMoZC5ub3RQbGFjZSksb3Bpbmlvbj1wbGFjZURldGFpbHMoZC5vcGluaW9uUGxhY2UpO3JldHVybiBbQygnVml2byBlbicsJ0kgbGl2ZSBpbicpLEMoZC50b3duLGQudG93biksQygnZW4gJytob21lLmZyKycuJywnaW4gJytob21lLmVuKycuJyksQygnTm8gdml2byBlbicsJ0kgZG8gbm90IGxpdmUgaW4nKSxDKG5lZ2F0aXZlLmZyKycuJyxuZWdhdGl2ZS5lbisnLicpLEMoZC5saWtlTGl2aW5nPT09J3llcyc/J01lIGd1c3RhIHZpdmlyIGVuJzonTm8gbWUgZ3VzdGEgdml2aXIgZW4nLGQubGlrZUxpdmluZz09PSd5ZXMnPydJIGxpa2UgbGl2aW5nIGluJzonSSBkbyBub3QgbGlrZSBsaXZpbmcgaW4nKSxDKG9waW5pb24uZnIsb3Bpbmlvbi5lbiksQygncG9ycXVlIGVzJywnYmVjYXVzZSBpdCBpcycpLEMoZC5pbnRlbnNpdHkxKycgJytkLmFkamVjdGl2ZTEsaW50ZW5zaXRpZXNbZC5pbnRlbnNpdHkxXSsnICcrYWRqZWN0aXZlc1tkLmFkamVjdGl2ZTFdKSxDKGQuYWRqSm9pbixqb2luc1tkLmFkakpvaW5dKSxDKGQuaW50ZW5zaXR5MisnICcrZC5hZGplY3RpdmUyKycuJyxpbnRlbnNpdGllc1tkLmludGVuc2l0eTJdKycgJythZGplY3RpdmVzW2QuYWRqZWN0aXZlMl0rJy4nKV07fQpjYXNlIDU6cmV0dXJuIFtDKCdUZW5nbycsJ0kgYW0nKSxDKG53b3JkKGQuYWdlKSsnIGHDsW9zLicsZC5hZ2UrJyB5ZWFycyBvbGQuJyksQygnVGVuZHLDqScsJ0kgd2lsbCBiZScpLEMobndvcmQoZC5uZXh0QWdlKSsnIGHDsW9zJyxkLm5leHRBZ2UrJyB5ZWFycyBvbGQnKSxDKCdlbiAnK2QubmV4dE1vbnRoKycuJywnaW4gJyttb250aHNbZC5uZXh0TW9udGhdKycuJyldOwpjYXNlIDY6cmV0dXJuIFtDKCdNaSBjdW1wbGVhw7FvcycsJ015IGJpcnRoZGF5JyksQygnZXMgZWwnLCdpcyBvbiB0aGUnKSxDKGRhdGVXb3JkKGQuYmlydGhkYXlEYXkpLG9yZGluYWwoZC5iaXJ0aGRheURheSkpLEMoJ2RlICcrZC5iaXJ0aGRheU1vbnRoKycuJywnb2YgJyttb250aHNbZC5iaXJ0aGRheU1vbnRoXSsnLicpXTsKY2FzZSA3OntsZXQgbz1vcmlnaW4oKTtyZXR1cm4gWy4uLihkLm9yaWdpblN0eWxlIT09J25hdGlvbmFsaXR5Jz9bQyhvLm5hbWUuc3RhcnRzV2l0aCgnZWwgJyk/J1NveSBkZWwnOidTb3kgZGUnLCdJIGFtIGZyb20nKSxDKG8ubmFtZS5yZXBsYWNlKC9eZWwgLywnJykrJy4nLG8uZW4rJy4nKV06W10pLC4uLihkLm9yaWdpblN0eWxlIT09J2NvdW50cnknP1tDKCdTb3knLCdJIGFtJyksQyhvLm5hdCsnLicsby5uYXRFbisnLicpXTpbXSldO30KZGVmYXVsdDpyZXR1cm4gW119fQpmdW5jdGlvbiBhbnN3ZXIocSl7aWYocT09PTIpcmV0dXJuICdTZSBlc2NyaWJlICcrY2h1bmtzKHEpLnNsaWNlKDEpLm1hcChjPT5jLmZyKS5qb2luKCcg4oCTICcpKycuJztyZXR1cm4gY2h1bmtzKHEpLm1hcChjPT5jLmZyKS5qb2luKCcgJykucmVwbGFjZSgvXHMrKFsuLCE/XSkvZywnJDEnKS50cmltKCl9CmxldCBwbGF5YmFja1Rva2VuPTA7ZnVuY3Rpb24gc3BlZWNoKHQscmF0ZT0uNjgscmVwZWF0PWZhbHNlKXtpZighKCdzcGVlY2hTeW50aGVzaXMnaW4gd2luZG93KSl7YWxlcnQoJ1NwZWVjaCBwbGF5YmFjayBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3Nlci4nKTtyZXR1cm59cGxheWJhY2tUb2tlbisrO2xldCB0b2tlbj1wbGF5YmFja1Rva2VuO3NwZWVjaFN5bnRoZXNpcy5jYW5jZWwoKTtmdW5jdGlvbiBwbGF5KGFnYWluKXtpZih0b2tlbiE9PXBsYXliYWNrVG9rZW4pcmV0dXJuO2xldCB1PW5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UodCk7dS5sYW5nPSdlcy1FUyc7dS5yYXRlPXJhdGU7Y29uc3Qgdm9pY2VzPXNwZWVjaFN5bnRoZXNpcy5nZXRWb2ljZXMoKTtsZXQgdj12b2ljZXMuZmluZCh2PT52LmxhbmcudG9Mb3dlckNhc2UoKT09PSdlcy1lcycpfHx2b2ljZXMuZmluZCh2PT52LmxhbmcudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCdlcycpKTtpZih2KXUudm9pY2U9djt1Lm9uZW5kPSgpPT57aWYoYWdhaW4mJnRva2VuPT09cGxheWJhY2tUb2tlbilzZXRUaW1lb3V0KCgpPT5wbGF5KGZhbHNlKSwxNzAwKX07c3BlZWNoU3ludGhlc2lzLnNwZWFrKHUpfXBsYXkocmVwZWF0KX1mdW5jdGlvbiBidG4odGV4dCxmbixjbHM9Jycpe3JldHVybiBgPGJ1dHRvbiAke2Nscz9gY2xhc3M9IiR7Y2xzfSJgOicnfSBkYXRhLWFjdD0iJHtmbn0iPiR7dGV4dH08L2J1dHRvbj5gfWZ1bmN0aW9uIHJlbmRlcigpe2NvbnN0IHRhYnM9WydwcmVwYXJlJywncmVwZWF0JywnZ3VpZGVkJywnc29sbycsJ3JhbmRvbSddOyQoJ3RhYnMnKS5pbm5lckhUTUw9dGFicy5tYXAodD0+YDxidXR0b24gY2xhc3M9IiR7dGFiPT09dD8nYWN0aXZlJzonJ30iIGRhdGEtdGFiPSIke3R9Ij4ke2NhcCh0KX08L2J1dHRvbj5gKS5qb2luKCcnKTskKCdhcHAnKS5pbm5lckhUTUw9dGFiPT09J3ByZXBhcmUnP3ByZXBhcmUoKTp0YWI9PT0ncmVwZWF0Jz9yZXBlYXQoKTp0YWI9PT0nZ3VpZGVkJz9ndWlkZWQoKTp0YWI9PT0nc29sbyc/c29sbygpOnJhbmRvbSgpO2JpbmQoKX1mdW5jdGlvbiBjaG9vc2UoKXtsZXQgYT1hY3RpdmUoKTtxaWR4PU1hdGgubWF4KDAsTWF0aC5taW4ocWlkeCxhLmxlbmd0aC0xKSk7cmV0dXJuIGFbcWlkeF19ZnVuY3Rpb24gcXVlc3Rpb25OYXYoKXtyZXR1cm4gYDxkaXYgY2xhc3M9ImNhcmQiPjxsYWJlbD5DaG9vc2UgYSBxdWVzdGlvbjwvbGFiZWw+PGRpdiBjbGFzcz0icXVlc3Rpb25saXN0Ij4ke2FjdGl2ZSgpLm1hcCgocSxpKT0+YDxidXR0b24gY2xhc3M9IiR7cWlkeD09PWk/J3NlbGVjdGVkJzonJ30iIGRhdGEtcT0iJHtpfSI+JHtxfS4gJHtlc2MocXVlc3Rpb25zW3FdKX08L2J1dHRvbj5gKS5qb2luKCcnKX08L2Rpdj48L2Rpdj5gfQpmdW5jdGlvbiBmaWVsZChrZXksbGFiZWwsb3B0aW9ucyl7bGV0IGVudHJpZXM9QXJyYXkuaXNBcnJheShvcHRpb25zKT9vcHRpb25zLm1hcCh2PT5bdix2XSk6T2JqZWN0LmVudHJpZXMob3B0aW9uc3x8e30pO3JldHVybiBgPGRpdiBjbGFzcz0iZmllbGQiPjxsYWJlbCBmb3I9InM3LSR7a2V5fSI+JHtlc2MobGFiZWwpfTwvbGFiZWw+JHtvcHRpb25zP2A8c2VsZWN0IGlkPSJzNy0ke2tleX0iIGRhdGEtZmllbGQ9IiR7a2V5fSI+JHtlbnRyaWVzLm1hcCgoW3YsdGV4dF0pPT5gPG9wdGlvbiB2YWx1ZT0iJHtlc2Modil9IiAke2RhdGFba2V5XT09PXY/J3NlbGVjdGVkJzonJ30+JHtlc2Moa2V5LnN0YXJ0c1dpdGgoJ2ZlZWxpbmcnKSYmL14oRXN0b3kgY2Fuc2FkfEVzdG95IGNvbnRlbnQpLy50ZXN0KHYpP3RleHQrKHYuZW5kc1dpdGgoJ2EnKT8nIChmZW1pbmluZSknOicgKG1hc2N1bGluZSknKTp0ZXh0KX08L29wdGlvbj5gKS5qb2luKCcnKX08L3NlbGVjdD5gOmA8aW5wdXQgaWQ9InM3LSR7a2V5fSIgZGF0YS1maWVsZD0iJHtrZXl9IiB2YWx1ZT0iJHtlc2MoZGF0YVtrZXldKX0iPmB9PC9kaXY+YH0KZnVuY3Rpb24gcHJlcGFyZSgpe2NvbnN0IGNvdW50cnlPcHRpb25zPU9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhvcmlnaW5zKS5tYXAoKFtrLHZdKT0+W2ssdi5lbl0pKTtjb25zdCBwbGFjZXM9ey4uLk9iamVjdC5mcm9tRW50cmllcyh0b3ducy5tYXAodD0+W3QsdF0pKSwuLi5jb3VudHJ5T3B0aW9uc307cmV0dXJuIGA8ZGl2IGNsYXNzPSJjYXJkIj48aDI+MSDCtyBQcmVwYXJlIHlvdXIgYW5zd2VyczwvaDI+PHAgY2xhc3M9Im11dGVkIj5FbnRlciB5b3VyIGluZm9ybWF0aW9uIGJlbG93LjwvcD48ZGl2IGNsYXNzPSJncmlkIj4ke2ZpZWxkKCdmaXJzdCcsJ0ZpcnN0IG5hbWUnKX0ke2ZpZWxkKCdsYXN0JywnU3VybmFtZScpfSR7ZmllbGQoJ2ZlZWxpbmcxJywnRmlyc3QgZmVlbGluZycsZmVlbGluZ3MpfSR7ZmllbGQoJ2ZlZWxpbmdKb2luJywnSm9pbiB0aGUgdHdvIGZlZWxpbmdzJyxqb2lucyl9JHtmaWVsZCgnZmVlbGluZzInLCdTZWNvbmQgZmVlbGluZycsZmVlbGluZ3MpfSR7ZmllbGQoJ3Rvd24nLCdUb3duIG9yIHBhcmlzaCB3aGVyZSB5b3UgbGl2ZScsdG93bnMpfSR7ZmllbGQoJ3Jlc2lkZW5jZUNvdW50cnknLCdDb3VudHJ5IHdoZXJlIHlvdSBsaXZlJyxjb3VudHJ5T3B0aW9ucyl9JHtmaWVsZCgnbm90UGxhY2UnLCdBIHBsYWNlIHdoZXJlIHlvdSBkbyBOT1QgbGl2ZScscGxhY2VzKX0ke2ZpZWxkKCdsaWtlTGl2aW5nJywnRG8geW91IGxpa2UgbGl2aW5nIHRoZXJlPycse3llczonWWVzJyxubzonTm8nfSl9JHtmaWVsZCgnb3BpbmlvblBsYWNlJywnUGxhY2UgZm9yIHlvdXIgb3BpbmlvbicscGxhY2VzKX0ke2ZpZWxkKCdpbnRlbnNpdHkxJywnRmlyc3QgYWRqZWN0aXZlIOKAlCBob3cgbXVjaD8nLGludGVuc2l0aWVzKX0ke2ZpZWxkKCdhZGplY3RpdmUxJywnRmlyc3QgYWRqZWN0aXZlJyxhZGplY3RpdmVzKX0ke2ZpZWxkKCdhZGpKb2luJywnSm9pbiB0aGUgdHdvIGFkamVjdGl2ZXMnLGpvaW5zKX0ke2ZpZWxkKCdpbnRlbnNpdHkyJywnU2Vjb25kIGFkamVjdGl2ZSDigJQgaG93IG11Y2g/JyxpbnRlbnNpdGllcyl9JHtmaWVsZCgnYWRqZWN0aXZlMicsJ1NlY29uZCBhZGplY3RpdmUnLGFkamVjdGl2ZXMpfSR7ZmllbGQoJ2FnZScsJ1lvdXIgYWdlJyxBcnJheS5mcm9tKHtsZW5ndGg6MTR9LChfLGkpPT5TdHJpbmcoaSs1KSkpfSR7ZmllbGQoJ25leHRBZ2UnLCdZb3VyIGFnZSBhdCB5b3VyIG5leHQgYmlydGhkYXknLEFycmF5LmZyb20oe2xlbmd0aDoxNH0sKF8saSk9PlN0cmluZyhpKzYpKSl9JHtmaWVsZCgnbmV4dE1vbnRoJywnTW9udGggb2YgeW91ciBuZXh0IGJpcnRoZGF5Jyxtb250aHMpfSR7ZmllbGQoJ2JpcnRoZGF5RGF5JywnQmlydGhkYXkgZGF5JyxBcnJheS5mcm9tKHtsZW5ndGg6MzF9LChfLGkpPT5TdHJpbmcoaSsxKSkpfSR7ZmllbGQoJ2JpcnRoZGF5TW9udGgnLCdCaXJ0aGRheSBtb250aCcsbW9udGhzKX0ke2ZpZWxkKCdjb3VudHJ5JywnQ291bnRyeSBvZiBvcmlnaW4nLHsuLi5jb3VudHJ5T3B0aW9ucyxPdGhlcjonT3RoZXIg4oCUIHR5cGUgYmVsb3cnfSl9JHtmaWVsZCgnZ2VuZGVyJywnTmF0aW9uYWxpdHkgZm9ybScse2Y6J0ZlbWluaW5lJyxtOidNYXNjdWxpbmUnfSl9JHtmaWVsZCgnb3JpZ2luU3R5bGUnLCdDb3VudHJ5IGFuZC9vciBuYXRpb25hbGl0eScse2JvdGg6J0NvdW50cnkgYW5kIG5hdGlvbmFsaXR5Jyxjb3VudHJ5OidDb3VudHJ5IG9ubHknLG5hdGlvbmFsaXR5OidOYXRpb25hbGl0eSBvbmx5J30pfSR7ZGF0YS5jb3VudHJ5PT09J090aGVyJz9maWVsZCgnb3RoZXJDb3VudHJ5JywnQ291bnRyeSBpbiBTcGFuaXNoLCBpbmNsdWRpbmcgYW55IGFydGljbGUnKStmaWVsZCgnb3RoZXJDb3VudHJ5RW5nbGlzaCcsJ0NvdW50cnkgaW4gRW5nbGlzaCcpK2ZpZWxkKCdvdGhlck5hdGlvbmFsaXR5JywnTmF0aW9uYWxpdHkgaW4gU3BhbmlzaCcpK2ZpZWxkKCdvdGhlck5hdGlvbmFsaXR5RW5nbGlzaCcsJ05hdGlvbmFsaXR5IGluIEVuZ2xpc2gnKTonJ308L2Rpdj48ZGl2IGNsYXNzPSJjb250cm9scyI+JHtidG4oJ1N0YXJ0IFJlcGVhdCDihpInLCdnbzpyZXBlYXQnLCdwcmltYXJ5Jyl9PC9kaXY+PC9kaXY+YH0KZnVuY3Rpb24gc3RhZ2VIZWFkZXIocSl7cmV0dXJuIGA8c3BhbiBjbGFzcz0iYmFkZ2UiPlF1ZXN0aW9uICR7cX0gb2YgeW91ciBhc3Nlc3NtZW50PC9zcGFuPjxoMj4ke2VzYyhxdWVzdGlvbnNbcV0pfTwvaDI+PGRpdiBjbGFzcz0iY29udHJvbHMiPiR7YnRuKCfilrYgSGVhciBxdWVzdGlvbicsJ3F1ZXN0aW9uOicrcSl9ICR7YnRuKCfilrYgSGVhciBmdWxsIGFuc3dlcicsJ2xpc3RlbjonK3EpfTwvZGl2PmB9ZnVuY3Rpb24gcmVwZWF0KCl7bGV0IHE9Y2hvb3NlKCksYT1jaHVua3MocSk7Y2h1bmtpZHg9TWF0aC5taW4oY2h1bmtpZHgsYS5sZW5ndGgpO2xldCB3aG9sZT1jaHVua2lkeD09PWEubGVuZ3RoO3JldHVybiBgPGRpdiBjbGFzcz0iZ3JpZCIgc3R5bGU9ImdyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMjAwcHgsMWZyKSBtaW5tYXgoMCwyZnIpIj48ZGl2PiR7cXVlc3Rpb25OYXYoKX08L2Rpdj48ZGl2IGNsYXNzPSJjYXJkIj4ke3N0YWdlSGVhZGVyKHEpfTxwIGNsYXNzPSJtdXRlZCI+TGlzdGVuIHRvIGVhY2ggc21hbGwsIG5hdHVyYWwgY2h1bmsuIFJlcGVhdCBpdCBhbG91ZC4gVGhlbiBzYXkgdGhlIHdob2xlIGFuc3dlci48L3A+PGRpdiBjbGFzcz0icHJvZ3Jlc3MiPjxkaXYgc3R5bGU9IndpZHRoOiR7KGNodW5raWR4KzEpLyhhLmxlbmd0aCsxKSoxMDB9JSI+PC9kaXY+PC9kaXY+PHAgY2xhc3M9InNtYWxsIG11dGVkIj4ke3dob2xlPydGdWxsIGFuc3dlcic6YENodW5rICR7Y2h1bmtpZHgrMX0gb2YgJHthLmxlbmd0aH1gfTwvcD48ZGl2IGNsYXNzPSJmb2N1cyI+PGRpdiBjbGFzcz0iZnJlbmNoIj4ke2VzYyh3aG9sZT9hbnN3ZXIocSk6YVtjaHVua2lkeF0uZnIpfTwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImNvbnRyb2xzIj4ke2J0bign4pa2IExpc3RlbicsJ2NodW5rOicrcSsnOicrY2h1bmtpZHgsJ3ByaW1hcnknKX0gJHtidG4oJ+KXgCBQcmV2aW91cycsJ3ByZXZDaHVuaycpfSAke2J0bih3aG9sZT8nU3RhcnQgYWdhaW4g4oa7JzonTmV4dCBjaHVuayDihpInLCduZXh0Q2h1bmsnKX08L2Rpdj48cCBjbGFzcz0ic21hbGwgbXV0ZWQiPkVhY2ggY2h1bmsgcGxheXMgc2xvd2x5IHR3aWNlLCB3aXRoIGEgMS43LXNlY29uZCBwYXVzZSBiZXR3ZWVuIHJlYWRpbmdzLiBSZXBlYXQgYWxvdWQgYWZ0ZXIgZWFjaCByZWFkaW5nOyBwcm9udW5jaWF0aW9uIGlzIG5vdCBhdXRvbWF0aWNhbGx5IGFzc2Vzc2VkLjwvcD48L2Rpdj48L2Rpdj5gfWZ1bmN0aW9uIGd1aWRlZCgpe2xldCBxPWNob29zZSgpLGE9Y2h1bmtzKHEpO2NodW5raWR4PU1hdGgubWluKGNodW5raWR4LGEubGVuZ3RoKTtsZXQgd2hvbGU9Y2h1bmtpZHg9PT1hLmxlbmd0aCxwYXJ0PWFbY2h1bmtpZHhdO2xldCBlbmdsaXNoU29GYXI9YS5zbGljZSgwLGNodW5raWR4KzEpLm1hcCh4PT54LmVuKS5qb2luKCcgJykucmVwbGFjZSgvXHMrKFsuLCE/XSkvZywnJDEnKTtsZXQgZnJlbmNoU29GYXI9YS5zbGljZSgwLGNodW5raWR4KzEpLm1hcCh4PT54LmZyKS5qb2luKCcgJykucmVwbGFjZSgvXHMrKFsuLCE/XSkvZywnJDEnKTtsZXQgdGFyZ2V0PXdob2xlP2Fuc3dlcihxKTpwYXJ0LmZyO2xldCBwcm9tcHRzPXdob2xlP1snUmVtZW1iZXIgdGhlIGJlZ2lubmluZyBvZiB5b3VyIGFuc3dlcicsJ1RoaW5rIHRocm91Z2ggZWFjaCBzZWN0aW9uIGluIG9yZGVyJ106IChwYXJ0Lmh8fFtdKTtsZXQgZmlyc3RXb3JkPXRhcmdldC5zcGxpdCgvXHMrLylbMF07bGV0IHByb2dyZXNzaXZlPVsuLi5wcm9tcHRzLCdGaXJzdCB3b3JkOiAnK2ZpcnN0V29yZCwnRmlyc3Qgd29yZHM6ICcrdGFyZ2V0LnNwbGl0KC9ccysvKS5zbGljZSgwLE1hdGgubWF4KDIsTWF0aC5jZWlsKHRhcmdldC5zcGxpdCgvXHMrLykubGVuZ3RoLzIpKSkuam9pbignICcpLCdTcGFuaXNoOiAnK3RhcmdldF07bGV0IG1heD1wcm9ncmVzc2l2ZS5sZW5ndGg7bGV0IHJldmVhbD1oaW50Pj1tYXg7cmV0dXJuIGA8ZGl2IGNsYXNzPSJncmlkIiBzdHlsZT0iZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heCgyMDBweCwxZnIpIG1pbm1heCgwLDJmcikiPjxkaXY+JHtxdWVzdGlvbk5hdigpfTwvZGl2PjxkaXYgY2xhc3M9ImNhcmQiPiR7c3RhZ2VIZWFkZXIocSl9PHAgY2xhc3M9Im11dGVkIj5SZWFkIHRoZSBFbmdsaXNoLiBTYXkgdGhlIFNwYW5pc2ggYWxvdWQgPHN0cm9uZz5iZWZvcmU8L3N0cm9uZz4gYXNraW5nIGZvciBoZWxwLiBCdWlsZCB1cCB5b3VyIGFuc3dlciBvbmUgc2hvcnQgY2h1bmsgYXQgYSB0aW1lLjwvcD48ZGl2IGNsYXNzPSJwcm9ncmVzcyI+PGRpdiBzdHlsZT0id2lkdGg6JHsoY2h1bmtpZHgrMSkvKGEubGVuZ3RoKzEpKjEwMH0lIj48L2Rpdj48L2Rpdj48cCBjbGFzcz0ic21hbGwgbXV0ZWQiPiR7d2hvbGU/J0ZpbmFsIGNoYWxsZW5nZSDCtyB0aGUgd2hvbGUgYW5zd2VyJzpgU3RlcCAke2NodW5raWR4KzF9IG9mICR7YS5sZW5ndGh9IMK3IG5ldyBjaHVua2B9PC9wPjxkaXYgY2xhc3M9ImZvY3VzIj48ZGl2PjxkaXYgY2xhc3M9InNtYWxsIG11dGVkIj5TQVkgSU4gU1BBTklTSDwvZGl2PjxkaXYgY2xhc3M9ImZyZW5jaCI+JHtlc2Mod2hvbGU/YS5tYXAoYz0+Yy5lbikuam9pbignICcpOnBhcnQuZW4pfTwvZGl2PjwvZGl2PjwvZGl2PiR7IXdob2xlJiZjaHVua2lkeD4wP2A8ZGl2IGNsYXNzPSJzZWN0aW9uIj48c3Ryb25nPk5vdyBqb2luIGl0IHRvIHdoYXQgeW91IGhhdmUgYWxyZWFkeSBsZWFybnQ8L3N0cm9uZz48cCBjbGFzcz0ibXV0ZWQiIHN0eWxlPSJtYXJnaW46NnB4IDAiPlNheSBpbiBTcGFuaXNoOiAke2VzYyhlbmdsaXNoU29GYXIpfTwvcD48L2Rpdj5gOicnfSR7aGludD4wP2A8ZGl2IGNsYXNzPSJoaW50Ij48c3Ryb25nPiR7cmV2ZWFsPydBbnN3ZXInOmBIZWxwICR7aGludH0gb2YgJHttYXh9YH06PC9zdHJvbmc+ICR7ZXNjKHByb2dyZXNzaXZlW2hpbnQtMV0pfTwvZGl2PmA6Jyd9PGRpdiBjbGFzcz0iY29udHJvbHMiPiR7YnRuKGhpbnQ+PW1heD8nQW5zd2VyIHJldmVhbGVkJzonTmVlZCBoZWxwPyDihpInLCdoaW50JyxoaW50Pj1tYXg/Jyc6J3ByaW1hcnknKX0gJHtidG4oJ+KWtiBMaXN0ZW4gdG8gdGhpcyBjaHVuaycsJ2NodW5rOicrcSsnOicrY2h1bmtpZHgpfSAke2J0bign4peAIFByZXZpb3VzJywncHJldkNodW5rJyl9ICR7YnRuKHdob2xlPydTdGFydCBhZ2FpbiDihrsnOidOZXh0IGNodW5rIOKGkicsJ25leHRDaHVuaycpfTwvZGl2PiR7IXdob2xlP2A8cCBjbGFzcz0ic21hbGwgbXV0ZWQiPllvdSBjYW4gbGlzdGVuIGFmdGVyIHRyeWluZyBpdCB5b3Vyc2VsZi4gVGhlIG5leHQgc3RlcCBhZGRzIGFub3RoZXIgY2h1bmsuIEhpbnRzIHJlc2V0IGZvciBlYWNoIHN0ZXAuPC9wPmA6JzxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+VHJ5IHRoZSBlbnRpcmUgYW5zd2VyIGluZGVwZW5kZW50bHksIHRoZW4gbGlzdGVuIHRvIGNoZWNrIGl0LiBUaGlzIGlzIHNlbGYtcHJhY3RpY2UsIG5vdCBhdXRvbWF0aWMgcHJvbnVuY2lhdGlvbiBtYXJraW5nLjwvcD4nfTwvZGl2PjwvZGl2PmB9ZnVuY3Rpb24gc29sbygpe2xldCBxPWNob29zZSgpO3JldHVybiBgPGRpdiBjbGFzcz0iZ3JpZCIgc3R5bGU9ImdyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMjAwcHgsMWZyKSBtaW5tYXgoMCwyZnIpIj48ZGl2PiR7cXVlc3Rpb25OYXYoKX08L2Rpdj48ZGl2IGNsYXNzPSJjYXJkIj48c3BhbiBjbGFzcz0iYmFkZ2UiPlNvbG8gcHJhY3RpY2U8L3NwYW4+PGgyPiR7ZXNjKHF1ZXN0aW9uc1txXSl9PC9oMj48cCBjbGFzcz0ibXV0ZWQiPkxpc3RlbiB0byB0aGUgcXVlc3Rpb24gYW5kIHNheSB5b3VyIGNvbXBsZXRlIGFuc3dlciB3aXRob3V0IGxvb2tpbmcgYXQgaXQuPC9wPjxkaXYgY2xhc3M9ImZvY3VzIj48ZGl2IGNsYXNzPSJmcmVuY2giPiR7ZXNjKHF1ZXN0aW9uc1txXSl9PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0iY29udHJvbHMiPiR7YnRuKCfilrYgSGVhciBxdWVzdGlvbicsJ3F1ZXN0aW9uOicrcSwncHJpbWFyeScpfSAke2J0bignU2hvdyBteSBhbnN3ZXInLCdyZXZlYWwnKX0gJHtidG4oJ+KWtiBNb2RlbCBhbnN3ZXInLCdsaXN0ZW46JytxKX08L2Rpdj48ZGl2IGlkPSJyZXZlYWwiIGNsYXNzPSJhbnN3ZXIgaGlkZGVuIiBzdHlsZT0ibWFyZ2luLXRvcDoxNXB4Ij4ke2VzYyhhbnN3ZXIocSkpfTwvZGl2PjxkaXYgY2xhc3M9ImNvbnRyb2xzIj4ke2J0bign4pyTIEkgYW5zd2VyZWQgaW5kZXBlbmRlbnRseScsJ2RvbmU6JytxKX0gJHtidG4oJ05leHQgcXVlc3Rpb24g4oaSJywnbmV4dFF1ZXN0aW9uJyl9PC9kaXY+PHAgY2xhc3M9InNtYWxsIG11dGVkIj5Zb3VyIGNvbXBsZXRpb24gY2hlY2sgaXMgc2VsZi1yZXBvcnRlZCwgbm90IGF1dG9tYXRpY2FsbHkgbWFya2VkLjwvcD48L2Rpdj48L2Rpdj5gfWZ1bmN0aW9uIHJhbmRvbSgpe2lmKCFyYW5kb21PcmRlci5sZW5ndGh8fHJhbmRvbU9yZGVyLnNvbWUocT0+IWFjdGl2ZSgpLmluY2x1ZGVzKHEpKXx8cmFuZG9tT3JkZXIubGVuZ3RoIT09YWN0aXZlKCkubGVuZ3RoKXtyYW5kb21PcmRlcj1bLi4uYWN0aXZlKCldLnNvcnQoKCk9Pk1hdGgucmFuZG9tKCktLjUpO3JhbmRvbUlkeD0wfWxldCBxPXJhbmRvbU9yZGVyW3JhbmRvbUlkeF07cmV0dXJuIGA8ZGl2IGNsYXNzPSJjYXJkIj48c3BhbiBjbGFzcz0iYmFkZ2UiPlJhbmRvbSBtb2NrIHNwZWFraW5nIHRlc3QgwrcgJHtyYW5kb21JZHgrMX0gb2YgJHtyYW5kb21PcmRlci5sZW5ndGh9PC9zcGFuPjxoMj4ke2VzYyhxdWVzdGlvbnNbcV0pfTwvaDI+PHAgY2xhc3M9Im11dGVkIj5BbnN3ZXIgYWxvdWQgd2l0aG91dCBub3Rlcy4gUmV2ZWFsIHRoZSBhbnN3ZXIgYWZ0ZXIgeW91IGhhdmUgdHJpZWQuPC9wPjxkaXYgY2xhc3M9ImZvY3VzIj48ZGl2IGNsYXNzPSJmcmVuY2giPiR7ZXNjKHF1ZXN0aW9uc1txXSl9PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0iY29udHJvbHMiPiR7YnRuKCfilrYgSGVhciBxdWVzdGlvbicsJ3F1ZXN0aW9uOicrcSwncHJpbWFyeScpfSAke2J0bignUmV2ZWFsIGFuc3dlcicsJ3JldmVhbCcpfSAke2J0bign4pa2IEhlYXIgbW9kZWwnLCdsaXN0ZW46JytxKX08L2Rpdj48ZGl2IGlkPSJyZXZlYWwiIGNsYXNzPSJhbnN3ZXIgaGlkZGVuIiBzdHlsZT0ibWFyZ2luLXRvcDoxNXB4Ij4ke2VzYyhhbnN3ZXIocSkpfTwvZGl2PjxkaXYgY2xhc3M9ImNvbnRyb2xzIj4ke2J0bign4pyTIEkgYW5zd2VyZWQgaW5kZXBlbmRlbnRseScsJ2RvbmU6JytxKX0gJHtidG4ocmFuZG9tSWR4PT09cmFuZG9tT3JkZXIubGVuZ3RoLTE/J05ldyByYW5kb20gdGVzdCDihrsnOidOZXh0IHJhbmRvbSBxdWVzdGlvbiDihpInLCduZXh0UmFuZG9tJyl9PC9kaXY+PHAgY2xhc3M9InNtYWxsIG11dGVkIj5QcmFjdGljZSByZWNvcmQ6ICR7T2JqZWN0LmtleXMoY29tcGxldGVkKS5maWx0ZXIocT0+Y29tcGxldGVkW3FdJiZhY3RpdmUoKS5pbmNsdWRlcyhOdW1iZXIocSkpKS5sZW5ndGh9IG9mICR7YWN0aXZlKCkubGVuZ3RofSBxdWVzdGlvbnMgbWFya2VkIGluZGVwZW5kZW50bHkgYW5zd2VyZWQgb24gdGhpcyBkZXZpY2UuPC9wPjwvZGl2PmB9ZnVuY3Rpb24gYmluZCgpe2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYl0nKS5mb3JFYWNoKGI9PmIub25jbGljaz0oKT0+e3RhYj1iLmRhdGFzZXQudGFiO3FpZHg9MDtjaHVua2lkeD0wO2hpbnQ9MDtyZW5kZXIoKX0pO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXFdJykuZm9yRWFjaChiPT5iLm9uY2xpY2s9KCk9PntxaWR4PU51bWJlcihiLmRhdGFzZXQucSk7Y2h1bmtpZHg9MDtoaW50PTA7cmVuZGVyKCl9KTtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWVsZF0nKS5mb3JFYWNoKGVsPT5lbC5vbmNoYW5nZT0oKT0+e2RhdGFbZWwuZGF0YXNldC5maWVsZF09ZWwudmFsdWU7c2F2ZSgpO3JlbmRlcigpfSk7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWN0XScpLmZvckVhY2goYj0+Yi5vbmNsaWNrPSgpPT57bGV0IFthY3QsYXJnLGV4dHJhXT1iLmRhdGFzZXQuYWN0LnNwbGl0KCc6Jyk7aWYoYWN0PT09J2dvJyl7dGFiPWFyZztjaHVua2lkeD0wO2hpbnQ9MDtyZW5kZXIoKX1lbHNlIGlmKGFjdD09PSdsaXN0ZW4nKXNwZWVjaChhbnN3ZXIoTnVtYmVyKGFyZykpKTtlbHNlIGlmKGFjdD09PSdxdWVzdGlvbicpc3BlZWNoKHF1ZXN0aW9uc1tOdW1iZXIoYXJnKV0sLjcyKTtlbHNlIGlmKGFjdD09PSdjaHVuaycpe2xldCBhPWNodW5rcyhOdW1iZXIoYXJnKSk7c3BlZWNoKE51bWJlcihleHRyYSk+PWEubGVuZ3RoP2Fuc3dlcihOdW1iZXIoYXJnKSk6YVtOdW1iZXIoZXh0cmEpXS5mciwuNjUsdHJ1ZSl9ZWxzZSBpZihhY3Q9PT0ncHJldkNodW5rJyl7Y2h1bmtpZHg9TWF0aC5tYXgoMCxjaHVua2lkeC0xKTtoaW50PTA7cmVuZGVyKCl9ZWxzZSBpZihhY3Q9PT0nbmV4dENodW5rJyl7bGV0IGxlbj1jaHVua3MoY2hvb3NlKCkpLmxlbmd0aDtjaHVua2lkeD1jaHVua2lkeD49bGVuPzA6Y2h1bmtpZHgrMTtoaW50PTA7cmVuZGVyKCl9ZWxzZSBpZihhY3Q9PT0naGludCcpe2xldCBwYXJ0PWNodW5rcyhjaG9vc2UoKSlbY2h1bmtpZHhdO2xldCBsZW49cGFydD8ocGFydC5ofHxbXSkubGVuZ3RoKzM6NTtoaW50PU1hdGgubWluKGhpbnQrMSxsZW4pO3JlbmRlcigpfWVsc2UgaWYoYWN0PT09J3JldmVhbCcpJCgncmV2ZWFsJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7ZWxzZSBpZihhY3Q9PT0nZG9uZScpe2NvbXBsZXRlZFthcmddPXRydWU7c2F2ZSgpO2IudGV4dENvbnRlbnQ9J+KckyBNYXJrZWQgYXMgcHJhY3Rpc2VkJ31lbHNlIGlmKGFjdD09PSduZXh0UXVlc3Rpb24nKXtxaWR4PShxaWR4KzEpJWFjdGl2ZSgpLmxlbmd0aDtyZW5kZXIoKX1lbHNlIGlmKGFjdD09PSduZXh0UmFuZG9tJyl7cmFuZG9tSWR4Kys7aWYocmFuZG9tSWR4Pj1yYW5kb21PcmRlci5sZW5ndGgpe3JhbmRvbU9yZGVyPVtdO3JhbmRvbUlkeD0wfXJlbmRlcigpfX0pfXJlbmRlcigpOzwvc2NyaXB0PjwvYm9keT48L2h0bWw+","y7":"PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSI+PHRpdGxlPkF0ZWxpZXIgb3JhbCDCtyBZZWFyIDcgRnJlbmNoPC90aXRsZT48c3R5bGU+Cjpyb290e2ZvbnQtZmFtaWx5OnN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLFNlZ29lIFVJLHNhbnMtc2VyaWY7Y29sb3I6IzE4MmI0NDtiYWNrZ3JvdW5kOiNmNGY3ZmJ9Kntib3gtc2l6aW5nOmJvcmRlci1ib3h9Ym9keXttYXJnaW46MH0ud3JhcHttYXJnaW46YXV0bztwYWRkaW5nOjIycHh9LnRvcHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O2ZsZXgtd3JhcDp3cmFwfS5waWxse2ZvbnQtc2l6ZToxMnB4O2JhY2tncm91bmQ6I2RjZTlmNTtwYWRkaW5nOjZweCAxMnB4O2JvcmRlci1yYWRpdXM6MjBweH1uYXZ7ZGlzcGxheTpmbGV4O2dhcDo4cHg7ZmxleC13cmFwOndyYXA7bWFyZ2luOjIwcHggMH1idXR0b257Zm9udDppbmhlcml0O2N1cnNvcjpwb2ludGVyO2JvcmRlcjoxcHggc29saWQgI2M2ZDRlMjtib3JkZXItcmFkaXVzOjEwcHg7cGFkZGluZzoxMHB4IDE0cHg7YmFja2dyb3VuZDp3aGl0ZTtjb2xvcjojMTczMTRkfWJ1dHRvbi5wcmltYXJ5LG5hdiBidXR0b24uYWN0aXZle2JhY2tncm91bmQ6IzE3M2Q2Njtjb2xvcjp3aGl0ZTtib3JkZXItY29sb3I6IzE3M2Q2Nn1idXR0b246ZGlzYWJsZWR7b3BhY2l0eTouNDtjdXJzb3I6bm90LWFsbG93ZWR9YnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpe2ZpbHRlcjpicmlnaHRuZXNzKC45NSl9LmNhcmR7YmFja2dyb3VuZDp3aGl0ZTtib3JkZXI6MXB4IHNvbGlkICNkOWUzZWQ7Ym9yZGVyLXJhZGl1czoxNXB4O3BhZGRpbmc6MjBweDttYXJnaW4tYm90dG9tOjE2cHg7Ym94LXNoYWRvdzowIDJweCA2cHggIzEyMzJ9LmNhcmQgaDJ7bWFyZ2luLXRvcDowfS5tdXRlZHtjb2xvcjojNTM2NjdifS5ncmlke2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsbWlubWF4KDAsMWZyKSk7Z2FwOjEzcHh9bGFiZWx7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7bWFyZ2luLWJvdHRvbTo0cHh9aW5wdXQsc2VsZWN0LHRleHRhcmVhe3dpZHRoOjEwMCU7Zm9udDppbmhlcml0O3BhZGRpbmc6MTBweDtib3JkZXI6MXB4IHNvbGlkICNiZGNiZGE7Ym9yZGVyLXJhZGl1czo5cHg7YmFja2dyb3VuZDp3aGl0ZX1pbnB1dFt0eXBlPWNoZWNrYm94XXt3aWR0aDphdXRvfS5maWVsZHttYXJnaW46OHB4IDB9LnFoZWFke2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtnYXA6MTJweDthbGlnbi1pdGVtczpjZW50ZXJ9LnRhZ3tiYWNrZ3JvdW5kOiNlZGYzZmE7Ym9yZGVyLXJhZGl1czoyMHB4O3BhZGRpbmc6NXB4IDEwcHg7Zm9udC1zaXplOjEycHh9LmZyZW5jaHtmb250LXNpemU6Y2xhbXAoMjFweCwzdncsMzBweCk7Zm9udC13ZWlnaHQ6NjUwO2xpbmUtaGVpZ2h0OjEuNDU7bWFyZ2luOjE4cHggMH0uZm9jdXN7YmFja2dyb3VuZDojZWZmNWZjO2JvcmRlci1yYWRpdXM6MTRweDtwYWRkaW5nOjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7bWluLWhlaWdodDoxMjBweDtkaXNwbGF5OmdyaWQ7cGxhY2UtaXRlbXM6Y2VudGVyfS5jb250cm9sc3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjlweDttYXJnaW4tdG9wOjE2cHh9LnNtYWxse2ZvbnQtc2l6ZToxM3B4fS5hbnN3ZXJ7YmFja2dyb3VuZDojZjdmOWZjO2JvcmRlci1sZWZ0OjRweCBzb2xpZCAjOGFhOWM5O3BhZGRpbmc6MTJweDtib3JkZXItcmFkaXVzOjhweDtsaW5lLWhlaWdodDoxLjh9LmhpbnR7YmFja2dyb3VuZDojZmZmN2U2O3BhZGRpbmc6MTNweDtib3JkZXItcmFkaXVzOjEwcHg7bWFyZ2luLXRvcDoxMnB4fS5oaWRkZW57ZGlzcGxheTpub25lfS50b2dnbGV7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTBweH0uc2VjdGlvbnttYXJnaW46MjBweCAwfS5wcm9ncmVzc3toZWlnaHQ6N3B4O2JhY2tncm91bmQ6I2U1ZWRmNjtib3JkZXItcmFkaXVzOjhweDtvdmVyZmxvdzpoaWRkZW59LnByb2dyZXNzPmRpdntoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiM0YTc4OWQ7dHJhbnNpdGlvbjp3aWR0aCAuMnN9LmJhZGdle2NvbG9yOiMzNTYwODc7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NjUwfS5xdWVzdGlvbmxpc3R7ZGlzcGxheTpncmlkO2dhcDo4cHh9LnF1ZXN0aW9ubGlzdCBidXR0b257dGV4dC1hbGlnbjpsZWZ0fS5xdWVzdGlvbmxpc3QgYnV0dG9uLnNlbGVjdGVke2JvcmRlcjoycHggc29saWQgIzM4NmI5YTtiYWNrZ3JvdW5kOiNlZGY1ZmN9LnJpZ2h0e21hcmdpbi1sZWZ0OmF1dG99QG1lZGlhKG1heC13aWR0aDo2NDBweCl7LmdyaWR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcn0ud3JhcHtwYWRkaW5nOjEycHh9LmNhcmR7cGFkZGluZzoxNXB4fS5jb250cm9scyBidXR0b257ZmxleDoxfX0KPC9zdHlsZT48L2hlYWQ+PGJvZHk+PG1haW4gY2xhc3M9IndyYXAiPjxkaXYgY2xhc3M9InRvcCI+PGJ1dHRvbiBpZD0idGVhY2hlckJ0biI+4pqZIFRlYWNoZXIgc2V0dGluZ3M8L2J1dHRvbj48L2Rpdj48ZGl2IGlkPSJ0ZWFjaGVyIiBjbGFzcz0iY2FyZCBoaWRkZW4iPjxoMj5UZWFjaGVyIHNldHRpbmdzPC9oMj48bGFiZWwgY2xhc3M9InRvZ2dsZSI+PGlucHV0IGlkPSJxOHRvZ2dsZSIgdHlwZT0iY2hlY2tib3giPiBJbmNsdWRlIFF1ZXN0aW9uIDgg4oCUIFF14oCZZXN0LWNlIHF14oCZaWwgeSBhIGRhbnMgdG9uIHNhYyA/PC9sYWJlbD48cCBjbGFzcz0ibXV0ZWQgc21hbGwiPlF1ZXN0aW9uIDggaXMgb2ZmIGJ5IGRlZmF1bHQuIENoYW5nZXMgdXBkYXRlIGFsbCBzdHVkZW50IHByYWN0aWNlIG1vZGVzLiBBc3Rlcmlza2VkIGV4dGVuc2lvbnMgZnJvbSB0aGUgd29ya3NoZWV0IHJlbWFpbiBpbmNsdWRlZC48L3A+PGJ1dHRvbiBpZD0icmVzZXQiIHR5cGU9ImJ1dHRvbiI+Q2xlYXIgc2F2ZWQgc3R1ZGVudCBpbmZvcm1hdGlvbjwvYnV0dG9uPjwvZGl2PjxuYXYgaWQ9InRhYnMiPjwvbmF2PjxkaXYgaWQ9ImFwcCI+PC9kaXY+PC9tYWluPjxzY3JpcHQ+CmNvbnN0ICQ9aWQ9PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtjb25zdCBTVE9SRT0nYXRlbGllci15Ny12MSc7Y29uc3QgZGVmYXVsdHM9e2ZpcnN0OidTb3BoaWUnLGxhc3Q6J01hcnRpbicsc3BlbGxpbmc6J1MtTy1QLUgtSS1FJyxmZWVsaW5nMTonw4dhIHZhIHRyw6hzIGJpZW4nLGZlZWxpbmcyOidKZSBzdWlzIGZhdGlndcOpZScsZmVlbGluZ0pvaW46J2V0Jyx0b3duOidQYWdldCcsbm90VG93bjonSGFtaWx0b24nLHBsYWNlT3BpbmlvbjonUGFnZXQnLGxpa2VMaXZpbmc6J291aScsaW50ZW5zaXR5Oid0csOocycsYWRqZWN0aXZlOid0cmFucXVpbGxlJyxhZ2U6JzEyJyxuZXh0QWdlOicxMycsbmV4dE1vbnRoOidkw6ljZW1icmUnLGJpcnRoZGF5RGF5OicxNScsYmlydGhkYXlNb250aDonbWFycycsY291bnRyeTonQmVybXVkYScsbmF0aW9uYWxpdHk6J2Jlcm11ZGllbm5lJyxjb3VudHJ5MjonJyxuYXRpb25hbGl0eTI6JycsZ2VuZGVyOidmJyxvdGhlckNvdW50cnk6Jycsb3RoZXJOYXRpb25hbGl0eTonJyxvdGhlckNvdW50cnkyOicnLG90aGVyTmF0aW9uYWxpdHkyOicnLG9yaWdpblN0eWxlOidKZSB2aWVucyBkZScsYmFnMTondW4gbGl2cmUnLGJhZzI6J3VuZSB0cm91c3NlJyxiYWczOid1biBjYWhpZXInLHdpc2g6J3VuIG9yZGluYXRldXInLGFzazonQ29tbWVudCDDp2EgdmEgPyd9O2xldCBkYXRhPXsuLi5kZWZhdWx0c30saW5jbHVkZTg9ZmFsc2UsdGFiPSdwcmVwYXJlJyxxaWR4PTAsY2h1bmtpZHg9MCxoaW50PTAscmFuZG9tT3JkZXI9W10scmFuZG9tSWR4PTAsc3Bva2VuPXt9LGNvbXBsZXRlZD17fTt0cnl7Y29uc3Qgcz1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JFKSk7aWYocyl7ZGF0YT17Li4uZGVmYXVsdHMsLi4ucy5kYXRhfTtpbmNsdWRlOD0hIXMuaW5jbHVkZTg7Y29tcGxldGVkPXMuY29tcGxldGVkfHx7fX19Y2F0Y2goZSl7fWZ1bmN0aW9uIHNhdmUoKXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SRSxKU09OLnN0cmluZ2lmeSh7ZGF0YSxpbmNsdWRlOCxjb21wbGV0ZWR9KSl9Y29uc3QgZXNjPXM9PlN0cmluZyhzPz8nJykucmVwbGFjZSgvWyY8PiInXS9nLGM9Pih7JyYnOicmJywnPCc6JzwnLCc+JzonPicsJyInOiciJywiJyI6IicifVtjXSkpO2NvbnN0IGNhcD1zPT5zLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Muc2xpY2UoMSk7Y29uc3QgbnVtV29yZHM9ezA6J3rDqXJvJywxOid1bicsMjonZGV1eCcsMzondHJvaXMnLDQ6J3F1YXRyZScsNTonY2lucScsNjonc2l4Jyw3OidzZXB0Jyw4OidodWl0Jyw5OiduZXVmJywxMDonZGl4JywxMTonb256ZScsMTI6J2RvdXplJywxMzondHJlaXplJywxNDoncXVhdG9yemUnLDE1OidxdWluemUnLDE2OidzZWl6ZScsMTc6J2RpeC1zZXB0JywxODonZGl4LWh1aXQnLDE5OidkaXgtbmV1ZicsMjA6J3Zpbmd0JywyMTondmluZ3QgZXQgdW4nLDIyOid2aW5ndC1kZXV4JywyMzondmluZ3QtdHJvaXMnLDI0Oid2aW5ndC1xdWF0cmUnLDI1Oid2aW5ndC1jaW5xJywyNjondmluZ3Qtc2l4JywyNzondmluZ3Qtc2VwdCcsMjg6J3Zpbmd0LWh1aXQnLDI5Oid2aW5ndC1uZXVmJywzMDondHJlbnRlJywzMTondHJlbnRlIGV0IHVuJ307ZnVuY3Rpb24gbndvcmQodil7cmV0dXJuIG51bVdvcmRzW051bWJlcih2KV18fFN0cmluZyh2KX1mdW5jdGlvbiBwbGFjZSh0KXtyZXR1cm4gL15bYWVpb3VoXS9pLnRlc3QodCk/IsOgICIrdDonw6AgJyt0fWZ1bmN0aW9uIHRvd24odCl7cmV0dXJuIHR8fCfigKYnfWNvbnN0IHF1ZXN0aW9uRW5nbGlzaD17IkNvbW1lbnQgdHUgdOKAmWFwcGVsbGVzID8iOiAiV2hhdCBpcyB5b3VyIG5hbWU/IiwgIkNvbW1lbnQgw6dhIHPigJnDqWNyaXQgPyI6ICJIb3cgaXMgaXQgc3BlbHQ/IiwgIkNvbW1lbnQgw6dhIHZhID8iOiAiSG93IGFyZSB5b3U/IiwgIk/DuSBoYWJpdGVzLXR1ID8iOiAiV2hlcmUgZG8geW91IGxpdmU/IiwgIlF1ZWwgw6JnZSBhcy10dSA/IjogIkhvdyBvbGQgYXJlIHlvdT8iLCAiUXVlbGxlIGVzdCBsYSBkYXRlIGRlIHRvbiBhbm5pdmVyc2FpcmUgPyI6ICJXaGF0IGlzIHRoZSBkYXRlIG9mIHlvdXIgYmlydGhkYXk/IiwgIkTigJlvw7kgdmllbnMtdHUgPyI6ICJXaGVyZSBkbyB5b3UgY29tZSBmcm9tPyIsICJRdeKAmWVzdC1jZSBxdeKAmWlsIHkgYSBkYW5zIHRvbiBzYWMgPyI6ICJXaGF0IGlzIGluIHlvdXIgYmFnPyJ9O2NvbnN0IGl0ZW1FbmdsaXNoPXsiw4dhIHZhIGJpZW4iOiAiSSBhbSB3ZWxsIiwgIsOHYSB2YSB0csOocyBtYWwiOiAiSSBhbSB2ZXJ5IHVud2VsbCIsICJicnVucyI6ICJicm93biIsICJjaMOidGFpbnMiOiAiYnJvd24iLCAibWFycm9uIjogImJyb3duIiwgImdyaXNlcyI6ICJncmV5IiwgImdyYW5kIjogInRhbGwiLCAiZ3JhbmRlIjogInRhbGwiLCAicGV0aXQiOiAic2hvcnQiLCAicGV0aXRlIjogInNob3J0IiwgImRlIHRhaWxsZSBtb3llbm5lIjogIm9mIGF2ZXJhZ2UgaGVpZ2h0IiwgImFsdG8iOiAidGFsbCIsICJhbHRhIjogInRhbGwiLCAiYmFqbyI6ICJzaG9ydCIsICJiYWphIjogInNob3J0IiwgImRlIGVzdGF0dXJhIG1lZGlhbmEiOiAib2YgYXZlcmFnZSBoZWlnaHQiLCAicGVsaXJyb2pvIjogInJlZCIsICJsYXJnbyB5IGNhc3Rhw7FvIjogImxvbmcgYW5kIGJyb3duIiwgImNvcnRvIHkgbmVncm8iOiAic2hvcnQgYW5kIGJsYWNrIiwgInN5bXBhdGhpcXVlIjogIm5pY2UiLCAidGltaWRlIjogInNoeSIsICJkcsO0bGUiOiAiZnVubnkiLCAic3BvcnRpZiI6ICJzcG9ydHkiLCAic3BvcnRpdmUiOiAic3BvcnR5IiwgImdlbnRpbCI6ICJraW5kIiwgImdlbnRpbGxlIjogImtpbmQiLCAidHJhdmFpbGxldXIiOiAiaGFyZC13b3JraW5nIiwgInRyYXZhaWxsZXVzZSI6ICJoYXJkLXdvcmtpbmciLCAic2ltcMOhdGljbyI6ICJuaWNlIiwgInNpbXDDoXRpY2EiOiAibmljZSIsICJ0cmFucXVpbG8iOiAiY2FsbSIsICJ0cmFucXVpbGEiOiAiY2FsbSIsICJ0w61taWRvIjogInNoeSIsICJ0w61taWRhIjogInNoeSIsICJob3JyaWJsZSI6ICJob3JyaWJsZSIsICJmYXRpZ2FudCI6ICJ0aXJpbmciLCAiY29tcGxpcXXDqSI6ICJjb21wbGljYXRlZCIsICJ1dGlsZSI6ICJ1c2VmdWwiLCAiYWdvdGFkb3JhIjogImV4aGF1c3RpbmciLCAibOKAmWluZm9ybWF0aXF1ZSI6ICJjb21wdXRpbmciLCAibGUgZGVzc2luIjogImFydCIsICJsZSBzcG9ydCI6ICJQRSIsICJs4oCZw6lkdWNhdGlvbiByZWxpZ2lldXNlIjogInJlbGlnaW91cyBlZHVjYXRpb24iLCAibGEgaW5mb3Jtw6F0aWNhIjogImNvbXB1dGluZyIsICJlbCBkaWJ1am8iOiAiYXJ0IiwgImxhcyBjaWVuY2lhcyBuYXR1cmFsZXMiOiAic2NpZW5jZSIsICJsYSBlZHVjYWNpw7NuIGbDrXNpY2EiOiAiUEUiLCAibGEgcmVsaWdpw7NuIjogInJlbGlnaW91cyBlZHVjYXRpb24iLCAidW4gZnVyZXQiOiAiYSBmZXJyZXQiLCAidW4gY29iYXllIjogImEgZ3VpbmVhIHBpZyIsICJ1biBsaXZyZSI6ICJhIGJvb2siLCAidW5lIHRyb3Vzc2UiOiAiYSBwZW5jaWwgY2FzZSIsICJ1biBjYWhpZXIiOiAiYW4gZXhlcmNpc2UgYm9vayIsICJ1biBvcmRpbmF0ZXVyIjogImEgY29tcHV0ZXIiLCAidW4gc3R5bG8iOiAiYSBwZW4iLCAidW4gY3JheW9uIjogImEgcGVuY2lsIiwgInVuZSByw6hnbGUiOiAiYSBydWxlciIsICJ1bmUgZ29tbWUiOiAiYSBydWJiZXIiLCAidW5lIGNhbGN1bGF0cmljZSI6ICJhIGNhbGN1bGF0b3IiLCAiam91ZXIgYXUgZm9vdCI6ICJwbGF5IGZvb3RiYWxsIiwgImpvdWVyIGF1IHJ1Z2J5IjogInBsYXkgcnVnYnkiLCAiam91ZXIgYXUgZ29sZiI6ICJwbGF5IGdvbGYiLCAiam91ZXIgYXUgYmFkbWludG9uIjogInBsYXkgYmFkbWludG9uIiwgImpvdWVyIGF1IHZvbGxleSI6ICJwbGF5IHZvbGxleWJhbGwiLCAiZmFpcmUgZHUgdsOpbG8iOiAicmlkZSBhIGJpa2UiLCAiZmFpcmUgZHUgVlRUIjogImdvIG1vdW50YWluIGJpa2luZyIsICJmYWlyZSBkZSBsYSBkYW5zZSI6ICJkYW5jZSIsICJmYWlyZSBkZSBsYSB2b2lsZSI6ICJnbyBzYWlsaW5nIiwgImZhaXJlIGRlIGxhIGd5bW5hc3RpcXVlIjogImRvIGd5bW5hc3RpY3MiLCAiam91ZXIgYXV4IGpldXggdmlkw6lvIjogInBsYXkgdmlkZW8gZ2FtZXMiLCAic3VyZmVyIHN1ciBJbnRlcm5ldCI6ICJzdXJmIHRoZSBJbnRlcm5ldCIsICJmYWlyZSBkdSBzaG9wcGluZyI6ICJnbyBzaG9wcGluZyIsICJzZSBiYWxhZGVyIGVuIHZpbGxlIjogIndhbGsgYXJvdW5kIHRvd24iLCAicmVnYXJkZXIgdW4gZmlsbSI6ICJ3YXRjaCBhIGZpbG0iLCAidm9pciBtZXMgYW1pcyI6ICJzZWUgbXkgZnJpZW5kcyIsICJTw60sIG1lIGd1c3RhIG11Y2hvIGVsIGVzcGHDsW9sIjogIlllcywgSSBsaWtlIFNwYW5pc2ggYSBsb3QiLCAiU8OtLCBtZSBndXN0YSBlbCBlc3Bhw7FvbCI6ICJZZXMsIEkgbGlrZSBTcGFuaXNoIiwgIk5vIG1lIGd1c3RhIGVsIGVzcGHDsW9sIjogIkkgZG8gbm90IGxpa2UgU3BhbmlzaCIsICJObyBtZSBndXN0YSBuYWRhIGVsIGVzcGHDsW9sIjogIkkgZG8gbm90IGxpa2UgU3BhbmlzaCBhdCBhbGwiLCAiTWUgZW5jYW50YSBlbCBlc3Bhw7FvbCI6ICJJIGxvdmUgU3BhbmlzaCIsICJEZXRlc3RvIGVsIGVzcGHDsW9sIjogIkkgaGF0ZSBTcGFuaXNoIiwgImVuIEVzcGFnbmUiOiAiaW4gU3BhaW4iLCAiTcOpeGljbyI6ICJNZXhpY28iLCAiSuKAmWFpIHRyb2lzIGZyw6hyZXMiOiAiSSBoYXZlIHRocmVlIGJyb3RoZXJzIiwgIlRlbmdvIHRyZXMgaGVybWFub3MiOiAiSSBoYXZlIHRocmVlIGJyb3RoZXJzIiwgIkrigJlhaW1lIG1hIGZhbWlsbGUiOiAiSSBsaWtlIG15IGZhbWlseSJ9O2Z1bmN0aW9uIGl0ZW1UcmFuc2xhdGlvbihrZXkpe3JldHVybiBkYXRhW2tleSsiRW5nbGlzaCJdfHxpdGVtRW5nbGlzaFtkYXRhW2tleV1dfHxkYXRhW2tleV19CmZ1bmN0aW9uIGNodW5rcyhxKXtsZXQgZD1kYXRhO3N3aXRjaChxKXtjYXNlIDE6cmV0dXJuIFt7ZnI6IkplIG3igJlhcHBlbGxlIixlbjonTXkgbmFtZSBpcycsaDpbJ0pl4oCmJywnSmUgbeKAmeKApiddfSx7ZnI6ZC5maXJzdCxlbjpkLmZpcnN0LGg6WydTYXkgeW91ciBmaXJzdCBuYW1lJ119XTtjYXNlIDI6cmV0dXJuIFt7ZnI6J8OHYSBz4oCZw6ljcml0JyxlbjonSXQgaXMgc3BlbHQnLGg6WyfDh2HigKYnLCfDh2Egc+KAmeKApiddfSwuLi5BcnJheS5mcm9tKGQuZmlyc3QucmVwbGFjZSgvW15hLXpBLVrDgC3Dv10vZywnJyksYz0+KHtmcjpjLnRvVXBwZXJDYXNlKCksZW46Yy50b1VwcGVyQ2FzZSgpLGg6WydTYXkgdGhpcyBsZXR0ZXIgaW4gRnJlbmNoJ119KSldO2Nhc2UgMzpyZXR1cm4gW3tmcjpkLmZlZWxpbmcxLGVuOmZlZWxpbmdFbmdsaXNoKGQuZmVlbGluZzEpLGg6WydTdGFydCB3aXRoICcrZC5mZWVsaW5nMS5zcGxpdCgnICcpWzBdKyfigKYnXX0se2ZyOmQuZmVlbGluZ0pvaW4sZW46ZC5mZWVsaW5nSm9pbj09PSdtYWlzJz8nYnV0JzonYW5kJyxoOlsnVXNlICcrZC5mZWVsaW5nSm9pbl19LHtmcjpkLmZlZWxpbmcyLGVuOmZlZWxpbmdFbmdsaXNoKGQuZmVlbGluZzIpLGg6WydVc2UgJytkLmZlZWxpbmcyLnNwbGl0KCcgJylbMF0rJ+KApiddfV07Y2FzZSA0OnJldHVybiBbe2ZyOidK4oCZaGFiaXRlJyxlbjonSSBsaXZlJyxoOlsnSuKAmeKApicsJ0rigJloYWLigKYnXX0se2ZyOnBsYWNlKHRvd24oZC50b3duKSksZW46J2luICcrZC50b3duLGg6WydVc2Ugw6DigKYnXX0se2ZyOidKZSBu4oCZaGFiaXRlIHBhcycsZW46J0kgZG8gbm90IGxpdmUnLGg6WydKZSBuZeKApicsJ1VzZSBuZeKApnBhcyBhcm91bmQgaGFiaXRlJ119LHtmcjpwbGFjZSh0b3duKGQubm90VG93bikpLGVuOidpbiAnK2Qubm90VG93bixoOlsnVXNlIMOg4oCmJ119LHtmcjooZC5saWtlTGl2aW5nPT09J25vbic/J0plIG7igJlhaW1lIHBhcyBoYWJpdGVyJzonSuKAmWFpbWUgaGFiaXRlcicpLGVuOihkLmxpa2VMaXZpbmc9PT0nbm9uJz8nSSBkbyBub3QgbGlrZSBsaXZpbmcnOidJIGxpa2UgbGl2aW5nJyksaDpbJ1VzZSBhaW1lciArIGhhYml0ZXInXX0se2ZyOnBsYWNlKHRvd24oZC50b3duKSksZW46J2luICcrZC50b3duLGg6WydOYW1lIHRoZSBwbGFjZSddfSx7ZnI6J3BhcmNlIHF1ZSBj4oCZZXN0JyxlbjonYmVjYXVzZSBpdCBpcycsaDpbJ1VzZSBwYXJjZSBxdWUgY+KAmWVzdCddfSx7ZnI6W2QuaW50ZW5zaXR5LGQuYWRqZWN0aXZlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpLGVuOltpbnRlbnNpdHlFbmdsaXNoKGQuaW50ZW5zaXR5KSxhZGpFbmdsaXNoKGQuYWRqZWN0aXZlKV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKSxoOlsnQWRkIGFuIGludGVuc2lmaWVyIGFuZCBhbiBhZGplY3RpdmUnXX1dO2Nhc2UgNTpyZXR1cm4gW3tmcjonSuKAmWFpJyxlbjonSSBhbScsaDpbJ1VzZSBhdm9pcicsJ0rigJnigKYnXX0se2ZyOm53b3JkKGQuYWdlKSsnIGFucycsZW46ZC5hZ2UrJyB5ZWFycyBvbGQnLGg6WydTYXkgdGhlIG51bWJlciBpbiBGcmVuY2gnXX0se2ZyOidK4oCZYXVyYWknLGVuOidJIHdpbGwgYmUnLGg6WydVc2UgdGhlIGZ1dHVyZSBvZiBhdm9pcicsJ0rigJlhdXLigKYnXX0se2ZyOm53b3JkKGQubmV4dEFnZSkrJyBhbnMnLGVuOmQubmV4dEFnZSsnIHllYXJzIG9sZCcsaDpbJ1NheSB0aGUgbnVtYmVyIGluIEZyZW5jaCddfSx7ZnI6J2VuICcrZC5uZXh0TW9udGgsZW46J2luICcrbW9udGhFbmdsaXNoKGQubmV4dE1vbnRoKSxoOlsnVXNlIGVuICsgbW9udGgnXX1dO2Nhc2UgNjpyZXR1cm4gW3tmcjonTW9uIGFubml2ZXJzYWlyZScsZW46J015IGJpcnRoZGF5JyxoOlsnTW9u4oCmJ119LHtmcjonY+KAmWVzdCBsZScsZW46J2lzIG9uIHRoZScsaDpbJ0PigJnigKYnLCdj4oCZZXN04oCmJ119LHtmcjpud29yZChkLmJpcnRoZGF5RGF5KSsnICcrZC5iaXJ0aGRheU1vbnRoLGVuOmQuYmlydGhkYXlEYXkrJyAnK21vbnRoRW5nbGlzaChkLmJpcnRoZGF5TW9udGgpLGg6WydTYXkgdGhlIGRhdGUgaW4gRnJlbmNoJ119XTtjYXNlIDc6e2xldCBhPW9yaWdpblBhcnRzKGQuY291bnRyeSxkLm90aGVyQ291bnRyeSxkLm90aGVyTmF0aW9uYWxpdHksZC5nZW5kZXIpO2xldCBiPWQuY291bnRyeTI/b3JpZ2luUGFydHMoZC5jb3VudHJ5MixkLm90aGVyQ291bnRyeTIsZC5vdGhlck5hdGlvbmFsaXR5MixkLmdlbmRlcik6bnVsbDtyZXR1cm4gW3tmcjonSmUgdmllbnMnLGVuOidJIGNvbWUnLGg6WydKZeKApiddfSx7ZnI6YS5wcmVwLGVuOidmcm9tICcrYS5uYW1lLGg6WydVc2UgdGhlIGNvcnJlY3QgcHJlcG9zaXRpb24nXX0sLi4uKGI/W3tmcjonZXQgJytiLnByZXAsZW46J2FuZCBmcm9tICcrYi5uYW1lLGg6WydVc2UgZXQgKyB0aGUgY29ycmVjdCBwcmVwb3NpdGlvbiddfV06W10pLHtmcjonSmUgc3VpcycsZW46J0kgYW0nLGg6WydKZeKApiddfSx7ZnI6YS5uYXQsZW46YS5uYXRFbixoOlsnU2F5IHRoZSBuYXRpb25hbGl0eSddfSwuLi4oYj9be2ZyOidldCAnK2IubmF0LGVuOidhbmQgJytiLm5hdEVuLGg6WydVc2UgZXQgKyBuYXRpb25hbGl0eSddfV06W10pXTt9Y2FzZSA4OnJldHVybiBbe2ZyOidEYW5zIG1vbiBzYWMnLGVuOidJbiBteSBiYWcnLGg6WydEYW5z4oCmJ119LHtmcjonauKAmWFpJyxlbjonSSBoYXZlJyxoOlsnVXNlIGF2b2lyJ119LHtmcjpkLmJhZzErJywnLGVuOml0ZW1UcmFuc2xhdGlvbignYmFnMScpKycsJyxoOlsnTmFtZSB0aGUgZmlyc3QgaXRlbSddfSx7ZnI6ZC5iYWcyKycgZXQnLGVuOml0ZW1UcmFuc2xhdGlvbignYmFnMicpKycgYW5kJyxoOlsnQWRkIGV0J119LHtmcjpkLmJhZzMrJy4nLGVuOml0ZW1UcmFuc2xhdGlvbignYmFnMycpKycuJyxoOlsnTmFtZSB0aGUgdGhpcmQgaXRlbSddfSx7ZnI6J0rigJlhaW1lcmFpcycsZW46J0kgd291bGQgbGlrZScsaDpbJ0rigJnigKYnLCdVc2UgYWltZXIgaW4gdGhlIGNvbmRpdGlvbmFsJ119LHtmcjpkLndpc2gsZW46aXRlbVRyYW5zbGF0aW9uKCd3aXNoJyksaDpbJ05hbWUgdGhlIGl0ZW0geW91IHdvdWxkIGxpa2UnXX1dO2Nhc2UgOTpyZXR1cm4gW3tmcjpkLmFzayxlbjpxdWVzdGlvbkVuZ2xpc2hbZC5hc2tdfHxkLmFzayxoOlsnVXNlIHRoZSBxdWVzdGlvbiB5b3UgaGF2ZSBjaG9zZW4nXX1dO2RlZmF1bHQ6cmV0dXJuIFtdfX0KY29uc3Qgb3JpZ2lucz17QmVybXVkYTp7bmFtZTonbGVzIEJlcm11ZGVzJyxwcmVwOidkZXMgQmVybXVkZXMnLGY6J2Jlcm11ZGllbm5lJyxtOidiZXJtdWRpZW4nLGVuOidCZXJtdWRpYW4nfSxDYW5hZGE6e25hbWU6J2xlIENhbmFkYScscHJlcDonZHUgQ2FuYWRhJyxmOidjYW5hZGllbm5lJyxtOidjYW5hZGllbicsZW46J0NhbmFkaWFuJ30sQW1lcmljYTp7bmFtZTonbGVzIMOJdGF0cy1VbmlzJyxwcmVwOidkZXMgw4l0YXRzLVVuaXMnLGY6J2Ftw6lyaWNhaW5lJyxtOidhbcOpcmljYWluJyxlbjonQW1lcmljYW4nfSxVSzp7bmFtZTonbGUgUm95YXVtZS1VbmknLHByZXA6J2R1IFJveWF1bWUtVW5pJyxmOidicml0YW5uaXF1ZScsbTonYnJpdGFubmlxdWUnLGVuOidCcml0aXNoJ319OwpmdW5jdGlvbiBvcmlnaW5QYXJ0cyhrZXksb3RoZXJDb3VudHJ5LG90aGVyTmF0aW9uYWxpdHksZ2VuZGVyKXtpZihrZXk9PT0nT3RoZXInKXtsZXQgbmFtZT0ob3RoZXJDb3VudHJ5fHwn4oCmJykudHJpbSgpLG5hdD0ob3RoZXJOYXRpb25hbGl0eXx8J+KApicpLnRyaW0oKTtyZXR1cm4ge25hbWUscHJlcDovXlthZWlvdWhdL2kudGVzdChuYW1lKT8nZOKAmScrbmFtZTonZGUgJytuYW1lLG5hdCxuYXRFbjoneW91ciBuYXRpb25hbGl0eSAoYXMgZW50ZXJlZCknfX1sZXQgbz1vcmlnaW5zW2tleV18fG9yaWdpbnMuQmVybXVkYTtyZXR1cm4ge25hbWU6KHtCZXJtdWRhOidCZXJtdWRhJyxDYW5hZGE6J0NhbmFkYScsQW1lcmljYTondGhlIFVuaXRlZCBTdGF0ZXMnLFVLOid0aGUgVW5pdGVkIEtpbmdkb20nfSlba2V5XSxwcmVwOm8ucHJlcCxuYXQ6b1tnZW5kZXI9PT0nbSc/J20nOidmJ10sbmF0RW46by5lbn19CmZ1bmN0aW9uIGZlZWxpbmdFbmdsaXNoKHMpe3JldHVybiAoeyfDh2EgdmEgdHLDqHMgYmllbic6J0kgYW0gdmVyeSB3ZWxsJywnw4dhIHZhIGJpZW4nOidJIGFtIHdlbGwnLCfDh2EgdmEgbWFsJzonSSBhbSBub3Qgd2VsbCcsJ8OHYSB2YSB0csOocyBtYWwnOidJIGFtIHZlcnkgdW53ZWxsJywnw4dhIHZhICEnOidJIGFtIE9LJywnSuKAmWFpIGZhaW0nOidJIGFtIGh1bmdyeScsJ0rigJlhaSBzb2lmJzonSSBhbSB0aGlyc3R5JywnSmUgc3VpcyBmYXRpZ3XDqSc6J0kgYW0gdGlyZWQnLCdKZSBzdWlzIGZhdGlndcOpZSc6J0kgYW0gdGlyZWQnfSlbc118fHN9ZnVuY3Rpb24gaW50ZW5zaXR5RW5nbGlzaChzKXtyZXR1cm4gKHsndHLDqHMnOid2ZXJ5JywnYXNzZXonOidxdWl0ZScsJ3VuIHBldSc6J2EgbGl0dGxlJywndHJvcCc6J3Rvbyd9KVtzXXx8c31mdW5jdGlvbiBhZGpFbmdsaXNoKHMpe3JldHVybiAoeydhbmltw6knOidsaXZlbHknLCdhbmltw6llJzonbGl2ZWx5JywndHJhbnF1aWxsZSc6J3F1aWV0JywnYW11c2FudCc6J2Z1bicsJ2FtdXNhbnRlJzonZnVuJywnYnJ1eWFudCc6J25vaXN5JywnYnJ1eWFudGUnOidub2lzeScsJ2JhcmJhbnQnOidib3JpbmcnLCdiYXJiYW50ZSc6J2JvcmluZyd9KVtzXXx8c31mdW5jdGlvbiBtb250aEVuZ2xpc2gocyl7cmV0dXJuICh7amFudmllcjonSmFudWFyeScsZsOpdnJpZXI6J0ZlYnJ1YXJ5JyxtYXJzOidNYXJjaCcsYXZyaWw6J0FwcmlsJyxtYWk6J01heScsanVpbjonSnVuZScsanVpbGxldDonSnVseScsYW/Du3Q6J0F1Z3VzdCcsc2VwdGVtYnJlOidTZXB0ZW1iZXInLG9jdG9icmU6J09jdG9iZXInLG5vdmVtYnJlOidOb3ZlbWJlcicsZMOpY2VtYnJlOidEZWNlbWJlcid9KVtzXXx8c31jb25zdCBxdWVzdGlvbnM9ezE6J0NvbW1lbnQgdHUgdOKAmWFwcGVsbGVzID8nLDI6J0NvbW1lbnQgw6dhIHPigJnDqWNyaXQgPycsMzonQ29tbWVudCDDp2EgdmEgPycsNDonT8O5IGhhYml0ZXMtdHUgPycsNTonUXVlbCDDomdlIGFzLXR1ID8nLDY6J1F1ZWxsZSBlc3QgbGEgZGF0ZSBkZSB0b24gYW5uaXZlcnNhaXJlID8nLDc6J0TigJlvw7kgdmllbnMtdHUgPycsODonUXXigJllc3QtY2UgcXXigJlpbCB5IGEgZGFucyB0b24gc2FjID8nLDk6J1Bvc2UgdW5lIHF1ZXN0aW9uIMOgIHRvbiBwcm9mZXNzZXVyLid9O2NvbnN0IGFjdGl2ZT0oKT0+T2JqZWN0LmtleXMocXVlc3Rpb25zKS5tYXAoTnVtYmVyKS5maWx0ZXIocT0+cSE9PTh8fGluY2x1ZGU4KTtmdW5jdGlvbiBhbnN3ZXIocSl7Y29uc3QgYT1jaHVua3MocSk7aWYocT09PTIpcmV0dXJuICfDh2Egc+KAmcOpY3JpdCAnK2Euc2xpY2UoMSkubWFwKHg9PnguZnIpLmpvaW4oJyDigJMgJykrJy4nO2lmKHE9PT0zKXJldHVybiBhLm1hcCh4PT54LmZyKS5qb2luKCcgJykrJy4nO2lmKHE9PT05KXJldHVybiBkYXRhLmFzaztyZXR1cm4gYS5tYXAoeD0+eC5mcikuam9pbignICcpLnJlcGxhY2UoL1xzKyhbLiwhP10pL2csJyQxJykucmVwbGFjZSgvXC5cLi9nLCcuJykrJy4nfWxldCBwbGF5YmFja1Rva2VuPTA7ZnVuY3Rpb24gc3BlZWNoKHQscmF0ZT0uNjgscmVwZWF0PWZhbHNlKXtpZighKCdzcGVlY2hTeW50aGVzaXMnaW4gd2luZG93KSl7YWxlcnQoJ1NwZWVjaCBwbGF5YmFjayBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3Nlci4nKTtyZXR1cm59cGxheWJhY2tUb2tlbisrO2xldCB0b2tlbj1wbGF5YmFja1Rva2VuO3NwZWVjaFN5bnRoZXNpcy5jYW5jZWwoKTtmdW5jdGlvbiBwbGF5KGFnYWluKXtpZih0b2tlbiE9PXBsYXliYWNrVG9rZW4pcmV0dXJuO2xldCB1PW5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UodCk7dS5sYW5nPSdmci1GUic7dS5yYXRlPXJhdGU7Y29uc3Qgdm9pY2VzPXNwZWVjaFN5bnRoZXNpcy5nZXRWb2ljZXMoKTtsZXQgdj12b2ljZXMuZmluZCh2PT52LmxhbmcudG9Mb3dlckNhc2UoKT09PSdmci1mcicpfHx2b2ljZXMuZmluZCh2PT52LmxhbmcudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCdmcicpKTtpZih2KXUudm9pY2U9djt1Lm9uZW5kPSgpPT57aWYoYWdhaW4mJnRva2VuPT09cGxheWJhY2tUb2tlbilzZXRUaW1lb3V0KCgpPT5wbGF5KGZhbHNlKSwxNzAwKX07c3BlZWNoU3ludGhlc2lzLnNwZWFrKHUpfXBsYXkocmVwZWF0KX1mdW5jdGlvbiBidG4odGV4dCxmbixjbHM9Jycpe3JldHVybiBgPGJ1dHRvbiAke2Nscz9gY2xhc3M9IiR7Y2xzfSJgOicnfSBkYXRhLWFjdD0iJHtmbn0iPiR7dGV4dH08L2J1dHRvbj5gfWZ1bmN0aW9uIHJlbmRlcigpe2NvbnN0IHRhYnM9WydwcmVwYXJlJywncmVwZWF0JywnZ3VpZGVkJywnc29sbycsJ3JhbmRvbSddOyQoJ3RhYnMnKS5pbm5lckhUTUw9dGFicy5tYXAodD0+YDxidXR0b24gY2xhc3M9IiR7dGFiPT09dD8nYWN0aXZlJzonJ30iIGRhdGEtdGFiPSIke3R9Ij4ke2NhcCh0KX08L2J1dHRvbj5gKS5qb2luKCcnKTskKCdxOHRvZ2dsZScpLmNoZWNrZWQ9aW5jbHVkZTg7JCgnYXBwJykuaW5uZXJIVE1MPXRhYj09PSdwcmVwYXJlJz9wcmVwYXJlKCk6dGFiPT09J3JlcGVhdCc/cmVwZWF0KCk6dGFiPT09J2d1aWRlZCc/Z3VpZGVkKCk6dGFiPT09J3NvbG8nP3NvbG8oKTpyYW5kb20oKTtiaW5kKCl9ZnVuY3Rpb24gY2hvb3NlKCl7bGV0IGE9YWN0aXZlKCk7cWlkeD1NYXRoLm1heCgwLE1hdGgubWluKHFpZHgsYS5sZW5ndGgtMSkpO3JldHVybiBhW3FpZHhdfWZ1bmN0aW9uIHF1ZXN0aW9uTmF2KCl7cmV0dXJuIGA8ZGl2IGNsYXNzPSJjYXJkIj48bGFiZWw+Q2hvb3NlIGEgcXVlc3Rpb248L2xhYmVsPjxkaXYgY2xhc3M9InF1ZXN0aW9ubGlzdCI+JHthY3RpdmUoKS5tYXAoKHEsaSk9PmA8YnV0dG9uIGNsYXNzPSIke3FpZHg9PT1pPydzZWxlY3RlZCc6Jyd9IiBkYXRhLXE9IiR7aX0iPiR7cX0uICR7ZXNjKHF1ZXN0aW9uc1txXSl9PC9idXR0b24+YCkuam9pbignJyl9PC9kaXY+PC9kaXY+YH1mdW5jdGlvbiBmaWVsZChrZXksbGFiZWwsb3B0cyl7aWYoIW9wdHMmJlsndG93bicsJ25vdFRvd24nLCdwbGFjZU9waW5pb24nXS5pbmNsdWRlcyhrZXkpKW9wdHM9WydQYWdldCcsJ0hhbWlsdG9uJywnUGVtYnJva2UnLCdXYXJ3aWNrJywnU291dGhhbXB0b24nLCdTYW5keXMnLCdEZXZvbnNoaXJlJywnU21pdGjigJlzJywnU3QgR2Vvcmdl4oCZcyddO2xldCB2YWw9ZXNjKGRhdGFba2V5XSk7cmV0dXJuIGA8ZGl2IGNsYXNzPSJmaWVsZCI+PGxhYmVsIGZvcj0iZi0ke2tleX0iPiR7bGFiZWx9PC9sYWJlbD4ke29wdHM/YDxzZWxlY3QgbGFuZz0iZnIiIGlkPSJmLSR7a2V5fSIgZGF0YS1maWVsZD0iJHtrZXl9Ij4ke29wdHMubWFwKHY9PmA8b3B0aW9uIHZhbHVlPSIke2VzYyh2KX0iICR7ZGF0YVtrZXldPT09dj8nc2VsZWN0ZWQnOicnfT4ke2VzYyhrZXk9PT0nZ2VuZGVyJyA/ICh2PT09J2YnID8gJ2bDqW1pbmluJyA6ICdtYXNjdWxpbicpIDogdil9PC9vcHRpb24+YCkuam9pbignJyl9PC9zZWxlY3Q+YDpgPGlucHV0IGlkPSJmLSR7a2V5fSIgZGF0YS1maWVsZD0iJHtrZXl9IiB2YWx1ZT0iJHt2YWx9IiAke1snYWdlJywnbmV4dEFnZScsJ2JpcnRoZGF5RGF5J10uaW5jbHVkZXMoa2V5KSA/ICdpbnB1dG1vZGU9Im51bWVyaWMiJyA6ICcnfT5gfTwvZGl2PmB9ZnVuY3Rpb24gb3JpZ2luRmllbGQoa2V5LGxhYmVsKXtsZXQgb3B0cz1rZXk9PT0nY291bnRyeTInP1snJywnQmVybXVkYScsJ0NhbmFkYScsJ0FtZXJpY2EnLCdVSycsJ090aGVyJ106WydCZXJtdWRhJywnQ2FuYWRhJywnQW1lcmljYScsJ1VLJywnT3RoZXInXTtsZXQgbmFtZXM9eycnOidOb25lIOKAlCBvbmUgY291bnRyeSBvbmx5JyxCZXJtdWRhOidsZXMgQmVybXVkZXMnLENhbmFkYTonbGUgQ2FuYWRhJyxBbWVyaWNhOidsZXMgw4l0YXRzLVVuaXMnLFVLOidsZSBSb3lhdW1lLVVuaScsT3RoZXI6J090aGVyIOKAlCB0eXBlIGJlbG93J307cmV0dXJuIGA8ZGl2IGNsYXNzPSJmaWVsZCI+PGxhYmVsIGZvcj0iZi0ke2tleX0iPiR7bGFiZWx9PC9sYWJlbD48c2VsZWN0IGxhbmc9ImZyIiBpZD0iZi0ke2tleX0iIGRhdGEtZmllbGQ9IiR7a2V5fSI+JHtvcHRzLm1hcCh2PT5gPG9wdGlvbiB2YWx1ZT0iJHt2fSIgJHtkYXRhW2tleV09PT12PydzZWxlY3RlZCc6Jyd9ICR7dj09PScnIHx8IHY9PT0nT3RoZXInID8gJ2xhbmc9ImVuIicgOiAnJ30+JHtuYW1lc1t2XX08L29wdGlvbj5gKS5qb2luKCcnKX08L3NlbGVjdD48L2Rpdj5gfWZ1bmN0aW9uIHByZXBhcmUoKXtyZXR1cm4gYDxkaXYgY2xhc3M9ImNhcmQiPjxoMj4xIMK3IFByZXBhcmUgeW91ciBhbnN3ZXJzPC9oMj48cCBjbGFzcz0ibXV0ZWQiPkVudGVyIHlvdXIgZGV0YWlscyBhbmQgY2hvb3NlIGZyb20gdGhlIEZyZW5jaCBvcHRpb25zLjwvcD48ZGl2IGNsYXNzPSJncmlkIj4ke2ZpZWxkKCdmaXJzdCcsJ0ZpcnN0IG5hbWUnKX0ke2ZpZWxkKCdzcGVsbGluZycsJ05hbWUgdG8gc3BlbGwgKGxldHRlcnMgc2VwYXJhdGVkIGJ5IGh5cGhlbnMpJyl9JHtmaWVsZCgnZmVlbGluZzEnLCdIb3cgYXJlIHlvdT8gQ2hvb3NlIHlvdXIgZmlyc3QgYW5zd2VyJyxbJ8OHYSB2YSB0csOocyBiaWVuJywnw4dhIHZhIGJpZW4nLCfDh2EgdmEgIScsJ8OHYSB2YSBtYWwnLCfDh2EgdmEgdHLDqHMgbWFsJywnSuKAmWFpIGZhaW0nLCdK4oCZYWkgc29pZicsJ0plIHN1aXMgZmF0aWd1w6knLCdKZSBzdWlzIGZhdGlndcOpZSddKX0ke2ZpZWxkKCdmZWVsaW5nSm9pbicsJ0pvaW4gdGhlIHR3byBhbnN3ZXJzIHdpdGgnLFsnZXQnLCdtYWlzJ10pfSR7ZmllbGQoJ2ZlZWxpbmcyJywnQ2hvb3NlIHlvdXIgc2Vjb25kIGFuc3dlcicsWyfDh2EgdmEgdHLDqHMgYmllbicsJ8OHYSB2YSBiaWVuJywnw4dhIHZhICEnLCfDh2EgdmEgbWFsJywnw4dhIHZhIHRyw6hzIG1hbCcsJ0rigJlhaSBmYWltJywnSuKAmWFpIHNvaWYnLCdKZSBzdWlzIGZhdGlndcOpJywnSmUgc3VpcyBmYXRpZ3XDqWUnXSl9JHtmaWVsZCgndG93bicsJ1Rvd24gb3IgcGFyaXNoIHdoZXJlIHlvdSBsaXZlJyl9JHtmaWVsZCgnbm90VG93bicsJ0EgdG93biBvciBwYXJpc2ggd2hlcmUgeW91IGRvIE5PVCBsaXZlJyl9JHtmaWVsZCgnbGlrZUxpdmluZycsJ0RvIHlvdSBsaWtlIGxpdmluZyB0aGVyZT8nLFsnb3VpJywnbm9uJ10pfSR7ZmllbGQoJ2ludGVuc2l0eScsJ0hvdyBtdWNoPycsWyd0csOocycsJ2Fzc2V6JywndW4gcGV1JywndHJvcCddKX0ke2ZpZWxkKCdhZGplY3RpdmUnLCdEZXNjcmliZSB0aGUgcGxhY2UnLFsndHJhbnF1aWxsZScsJ2FuaW3DqScsJ2FtdXNhbnQnLCdicnV5YW50JywnYmFyYmFudCddKX0ke2ZpZWxkKCdhZ2UnLCdZb3VyIGFnZSAobnVtYmVyKScpfSR7ZmllbGQoJ25leHRBZ2UnLCdZb3VyIGFnZSBvbiB5b3VyIG5leHQgYmlydGhkYXkgKG51bWJlciknKX0ke2ZpZWxkKCduZXh0TW9udGgnLCdNb250aCBvZiB5b3VyIG5leHQgYmlydGhkYXknLFsnamFudmllcicsJ2bDqXZyaWVyJywnbWFycycsJ2F2cmlsJywnbWFpJywnanVpbicsJ2p1aWxsZXQnLCdhb8O7dCcsJ3NlcHRlbWJyZScsJ29jdG9icmUnLCdub3ZlbWJyZScsJ2TDqWNlbWJyZSddKX0ke2ZpZWxkKCdiaXJ0aGRheURheScsJ0JpcnRoZGF5IGRheSAobnVtYmVyKScpfSR7ZmllbGQoJ2JpcnRoZGF5TW9udGgnLCdCaXJ0aGRheSBtb250aCcsWydqYW52aWVyJywnZsOpdnJpZXInLCdtYXJzJywnYXZyaWwnLCdtYWknLCdqdWluJywnanVpbGxldCcsJ2Fvw7t0Jywnc2VwdGVtYnJlJywnb2N0b2JyZScsJ25vdmVtYnJlJywnZMOpY2VtYnJlJ10pfSR7ZmllbGQoJ2dlbmRlcicsJ05hdGlvbmFsaXR5IGZvcm0nLFsnZicsJ20nXSl9JHtvcmlnaW5GaWVsZCgnY291bnRyeScsJ0NvdW50cnkgMScpfSR7ZGF0YS5jb3VudHJ5PT09J090aGVyJz9maWVsZCgnb3RoZXJDb3VudHJ5JywnT3RoZXIgY291bnRyeSAxIOKAlCB0eXBlIGl0cyBuYW1lIGluIEZyZW5jaCcpK2ZpZWxkKCdvdGhlck5hdGlvbmFsaXR5JywnT3RoZXIgbmF0aW9uYWxpdHkgMSDigJQgdHlwZSBpbiBGcmVuY2gnKTonJ30ke29yaWdpbkZpZWxkKCdjb3VudHJ5MicsJ0NvdW50cnkgMiAob3B0aW9uYWwpJyl9JHtkYXRhLmNvdW50cnkyPT09J090aGVyJz9maWVsZCgnb3RoZXJDb3VudHJ5MicsJ090aGVyIGNvdW50cnkgMiDigJQgdHlwZSBpdHMgbmFtZSBpbiBGcmVuY2gnKStmaWVsZCgnb3RoZXJOYXRpb25hbGl0eTInLCdPdGhlciBuYXRpb25hbGl0eSAyIOKAlCB0eXBlIGluIEZyZW5jaCcpOicnfTwvZGl2PjxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+Q291bnRyeSBjaG9pY2VzIGF1dG9tYXRpY2FsbHkgcHJvZHVjZSBib3RoIEplIHZpZW5z4oCmIGFuZCBKZSBzdWlz4oCmIC4gRm9yIOKAnE90aGVy4oCdLCBlbnRlciB0aGUgRnJlbmNoIGNvdW50cnkgYW5kIG5hdGlvbmFsaXR5OyBwbGVhc2UgY2hlY2sgdGhlIHByZXBvc2l0aW9uIGFuZCBuYXRpb25hbGl0eSBmb3JtLjwvcD4ke2luY2x1ZGU4P2A8aDM+T3B0aW9uYWwgwrcgRGFucyBtb24gc2FjPC9oMz48ZGl2IGNsYXNzPSJncmlkIj4ke2ZpZWxkKCdiYWcxJywnSXRlbSAxIGluIHlvdXIgYmFnIChGcmVuY2gpJyl9JHtmaWVsZCgnYmFnMicsJ0l0ZW0gMiBpbiB5b3VyIGJhZyAoRnJlbmNoKScpfSR7ZmllbGQoJ2JhZzMnLCdJdGVtIDMgaW4geW91ciBiYWcgKEZyZW5jaCknKX0ke2ZpZWxkKCd3aXNoJywnQW4gaXRlbSB5b3Ugd291bGQgbGlrZSAoRnJlbmNoKScpfTwvZGl2PmA6Jyd9PGgzPlF1ZXN0aW9uIDkgwrcgQXNrIHRoZSB0ZWFjaGVyPC9oMz4ke2ZpZWxkKCdhc2snLCdDaG9vc2UgYSBxdWVzdGlvbiB0byBhc2snLFsnQ29tbWVudCB0dSB04oCZYXBwZWxsZXMgPycsJ0NvbW1lbnQgw6dhIHPigJnDqWNyaXQgPycsJ0NvbW1lbnQgw6dhIHZhID8nLCdPw7kgaGFiaXRlcy10dSA/JywnUXVlbCDDomdlIGFzLXR1ID8nLCdRdWVsbGUgZXN0IGxhIGRhdGUgZGUgdG9uIGFubml2ZXJzYWlyZSA/JywnROKAmW/DuSB2aWVucy10dSA/JywuLi4oaW5jbHVkZTg/W3F1ZXN0aW9uc1s4XV06W10pXSl9PGRpdiBjbGFzcz0iY29udHJvbHMiPiR7YnRuKCdTdGFydCBSZXBlYXQg4oaSJywnZ286cmVwZWF0JywncHJpbWFyeScpfTwvZGl2PjwvZGl2PmB9CmZ1bmN0aW9uIHN0YWdlSGVhZGVyKHEpe3JldHVybiBgPHNwYW4gY2xhc3M9ImJhZGdlIj5RdWVzdGlvbiAke3F9IG9mIHlvdXIgYXNzZXNzbWVudDwvc3Bhbj48aDI+JHtlc2MocXVlc3Rpb25zW3FdKX08L2gyPjxkaXYgY2xhc3M9ImNvbnRyb2xzIj4ke2J0bign4pa2IEhlYXIgcXVlc3Rpb24nLCdxdWVzdGlvbjonK3EpfSAke2J0bign4pa2IEhlYXIgZnVsbCBhbnN3ZXInLCdsaXN0ZW46JytxKX08L2Rpdj5gfWZ1bmN0aW9uIHJlcGVhdCgpe2xldCBxPWNob29zZSgpLGE9Y2h1bmtzKHEpO2NodW5raWR4PU1hdGgubWluKGNodW5raWR4LGEubGVuZ3RoKTtsZXQgd2hvbGU9Y2h1bmtpZHg9PT1hLmxlbmd0aDtyZXR1cm4gYDxkaXYgY2xhc3M9ImdyaWQiIHN0eWxlPSJncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KDIwMHB4LDFmcikgbWlubWF4KDAsMmZyKSI+PGRpdj4ke3F1ZXN0aW9uTmF2KCl9PC9kaXY+PGRpdiBjbGFzcz0iY2FyZCI+JHtzdGFnZUhlYWRlcihxKX08cCBjbGFzcz0ibXV0ZWQiPkxpc3RlbiB0byBlYWNoIHNtYWxsLCBuYXR1cmFsIGNodW5rLiBSZXBlYXQgaXQgYWxvdWQuIFRoZW4gc2F5IHRoZSB3aG9sZSBhbnN3ZXIuPC9wPjxkaXYgY2xhc3M9InByb2dyZXNzIj48ZGl2IHN0eWxlPSJ3aWR0aDokeyhjaHVua2lkeCsxKS8oYS5sZW5ndGgrMSkqMTAwfSUiPjwvZGl2PjwvZGl2PjxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+JHt3aG9sZT8nRnVsbCBhbnN3ZXInOmBDaHVuayAke2NodW5raWR4KzF9IG9mICR7YS5sZW5ndGh9YH08L3A+PGRpdiBjbGFzcz0iZm9jdXMiPjxkaXYgY2xhc3M9ImZyZW5jaCI+JHtlc2Mod2hvbGU/YW5zd2VyKHEpOmFbY2h1bmtpZHhdLmZyKX08L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJjb250cm9scyI+JHtidG4oJ+KWtiBMaXN0ZW4nLCdjaHVuazonK3ErJzonK2NodW5raWR4LCdwcmltYXJ5Jyl9ICR7YnRuKCfil4AgUHJldmlvdXMnLCdwcmV2Q2h1bmsnKX0gJHtidG4od2hvbGU/J1N0YXJ0IGFnYWluIOKGuyc6J05leHQgY2h1bmsg4oaSJywnbmV4dENodW5rJyl9PC9kaXY+PHAgY2xhc3M9InNtYWxsIG11dGVkIj5FYWNoIGNodW5rIHBsYXlzIHNsb3dseSB0d2ljZSwgd2l0aCBhIDEuNy1zZWNvbmQgcGF1c2UgYmV0d2VlbiByZWFkaW5ncy4gUmVwZWF0IGFsb3VkIGFmdGVyIGVhY2ggcmVhZGluZzsgcHJvbnVuY2lhdGlvbiBpcyBub3QgYXV0b21hdGljYWxseSBhc3Nlc3NlZC48L3A+PC9kaXY+PC9kaXY+YH1mdW5jdGlvbiBndWlkZWQoKXtsZXQgcT1jaG9vc2UoKSxhPWNodW5rcyhxKTtjaHVua2lkeD1NYXRoLm1pbihjaHVua2lkeCxhLmxlbmd0aCk7bGV0IHdob2xlPWNodW5raWR4PT09YS5sZW5ndGgscGFydD1hW2NodW5raWR4XTtsZXQgZW5nbGlzaFNvRmFyPWEuc2xpY2UoMCxjaHVua2lkeCsxKS5tYXAoeD0+eC5lbikuam9pbignICcpLnJlcGxhY2UoL1xzKyhbLiwhP10pL2csJyQxJyk7bGV0IGZyZW5jaFNvRmFyPWEuc2xpY2UoMCxjaHVua2lkeCsxKS5tYXAoeD0+eC5mcikuam9pbignICcpLnJlcGxhY2UoL1xzKyhbLiwhP10pL2csJyQxJyk7bGV0IHRhcmdldD13aG9sZT9hbnN3ZXIocSk6cGFydC5mcjtsZXQgcHJvbXB0cz13aG9sZT9bJ1JlbWVtYmVyIHRoZSBiZWdpbm5pbmcgb2YgeW91ciBhbnN3ZXInLCdUaGluayB0aHJvdWdoIGVhY2ggc2VjdGlvbiBpbiBvcmRlciddOiAocGFydC5ofHxbXSk7bGV0IGZpcnN0V29yZD10YXJnZXQuc3BsaXQoL1xzKy8pWzBdO2xldCBwcm9ncmVzc2l2ZT1bLi4ucHJvbXB0cywnRmlyc3Qgd29yZDogJytmaXJzdFdvcmQsJ0ZpcnN0IHdvcmRzOiAnK3RhcmdldC5zcGxpdCgvXHMrLykuc2xpY2UoMCxNYXRoLm1heCgyLE1hdGguY2VpbCh0YXJnZXQuc3BsaXQoL1xzKy8pLmxlbmd0aC8yKSkpLmpvaW4oJyAnKSwnRnJlbmNoOiAnK3RhcmdldF07bGV0IG1heD1wcm9ncmVzc2l2ZS5sZW5ndGg7bGV0IHJldmVhbD1oaW50Pj1tYXg7cmV0dXJuIGA8ZGl2IGNsYXNzPSJncmlkIiBzdHlsZT0iZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heCgyMDBweCwxZnIpIG1pbm1heCgwLDJmcikiPjxkaXY+JHtxdWVzdGlvbk5hdigpfTwvZGl2PjxkaXYgY2xhc3M9ImNhcmQiPiR7c3RhZ2VIZWFkZXIocSl9PHAgY2xhc3M9Im11dGVkIj5SZWFkIHRoZSBFbmdsaXNoLiBTYXkgdGhlIEZyZW5jaCBhbG91ZCA8c3Ryb25nPmJlZm9yZTwvc3Ryb25nPiBhc2tpbmcgZm9yIGhlbHAuIEJ1aWxkIHVwIHlvdXIgYW5zd2VyIG9uZSBzaG9ydCBjaHVuayBhdCBhIHRpbWUuPC9wPjxkaXYgY2xhc3M9InByb2dyZXNzIj48ZGl2IHN0eWxlPSJ3aWR0aDokeyhjaHVua2lkeCsxKS8oYS5sZW5ndGgrMSkqMTAwfSUiPjwvZGl2PjwvZGl2PjxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+JHt3aG9sZT8nRmluYWwgY2hhbGxlbmdlIMK3IHRoZSB3aG9sZSBhbnN3ZXInOmBTdGVwICR7Y2h1bmtpZHgrMX0gb2YgJHthLmxlbmd0aH0gwrcgbmV3IGNodW5rYH08L3A+PGRpdiBjbGFzcz0iZm9jdXMiPjxkaXY+PGRpdiBjbGFzcz0ic21hbGwgbXV0ZWQiPlNBWSBJTiBGUkVOQ0g8L2Rpdj48ZGl2IGNsYXNzPSJmcmVuY2giPiR7ZXNjKHdob2xlP2EubWFwKGM9PmMuZW4pLmpvaW4oJyAnKTpwYXJ0LmVuKX08L2Rpdj48L2Rpdj48L2Rpdj4keyF3aG9sZSYmY2h1bmtpZHg+MD9gPGRpdiBjbGFzcz0ic2VjdGlvbiI+PHN0cm9uZz5Ob3cgam9pbiBpdCB0byB3aGF0IHlvdSBoYXZlIGFscmVhZHkgbGVhcm50PC9zdHJvbmc+PHAgY2xhc3M9Im11dGVkIiBzdHlsZT0ibWFyZ2luOjZweCAwIj5TYXkgaW4gRnJlbmNoOiAke2VzYyhlbmdsaXNoU29GYXIpfTwvcD48L2Rpdj5gOicnfSR7aGludD4wP2A8ZGl2IGNsYXNzPSJoaW50Ij48c3Ryb25nPiR7cmV2ZWFsPydBbnN3ZXInOmBIZWxwICR7aGludH0gb2YgJHttYXh9YH06PC9zdHJvbmc+ICR7ZXNjKHByb2dyZXNzaXZlW2hpbnQtMV0pfTwvZGl2PmA6Jyd9PGRpdiBjbGFzcz0iY29udHJvbHMiPiR7YnRuKGhpbnQ+PW1heD8nQW5zd2VyIHJldmVhbGVkJzonTmVlZCBoZWxwPyDihpInLCdoaW50JyxoaW50Pj1tYXg/Jyc6J3ByaW1hcnknKX0gJHtidG4oJ+KWtiBMaXN0ZW4gdG8gdGhpcyBjaHVuaycsJ2NodW5rOicrcSsnOicrY2h1bmtpZHgpfSAke2J0bign4peAIFByZXZpb3VzJywncHJldkNodW5rJyl9ICR7YnRuKHdob2xlPydTdGFydCBhZ2FpbiDihrsnOidOZXh0IGNodW5rIOKGkicsJ25leHRDaHVuaycpfTwvZGl2PiR7IXdob2xlP2A8cCBjbGFzcz0ic21hbGwgbXV0ZWQiPllvdSBjYW4gbGlzdGVuIGFmdGVyIHRyeWluZyBpdCB5b3Vyc2VsZi4gVGhlIG5leHQgc3RlcCBhZGRzIGFub3RoZXIgY2h1bmsuIEhpbnRzIHJlc2V0IGZvciBlYWNoIHN0ZXAuPC9wPmA6JzxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+VHJ5IHRoZSBlbnRpcmUgYW5zd2VyIGluZGVwZW5kZW50bHksIHRoZW4gbGlzdGVuIHRvIGNoZWNrIGl0LiBUaGlzIGlzIHNlbGYtcHJhY3RpY2UsIG5vdCBhdXRvbWF0aWMgcHJvbnVuY2lhdGlvbiBtYXJraW5nLjwvcD4nfTwvZGl2PjwvZGl2PmB9ZnVuY3Rpb24gc29sbygpe2xldCBxPWNob29zZSgpO3JldHVybiBgPGRpdiBjbGFzcz0iZ3JpZCIgc3R5bGU9ImdyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMjAwcHgsMWZyKSBtaW5tYXgoMCwyZnIpIj48ZGl2PiR7cXVlc3Rpb25OYXYoKX08L2Rpdj48ZGl2IGNsYXNzPSJjYXJkIj48c3BhbiBjbGFzcz0iYmFkZ2UiPlNvbG8gcHJhY3RpY2U8L3NwYW4+PGgyPiR7ZXNjKHF1ZXN0aW9uc1txXSl9PC9oMj48cCBjbGFzcz0ibXV0ZWQiPkxpc3RlbiB0byB0aGUgcXVlc3Rpb24gYW5kIHNheSB5b3VyIGNvbXBsZXRlIGFuc3dlciB3aXRob3V0IGxvb2tpbmcgYXQgaXQuPC9wPjxkaXYgY2xhc3M9ImZvY3VzIj48ZGl2IGNsYXNzPSJmcmVuY2giPiR7ZXNjKHF1ZXN0aW9uc1txXSl9PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0iY29udHJvbHMiPiR7YnRuKCfilrYgSGVhciBxdWVzdGlvbicsJ3F1ZXN0aW9uOicrcSwncHJpbWFyeScpfSAke2J0bignU2hvdyBteSBhbnN3ZXInLCdyZXZlYWwnKX0gJHtidG4oJ+KWtiBNb2RlbCBhbnN3ZXInLCdsaXN0ZW46JytxKX08L2Rpdj48ZGl2IGlkPSJyZXZlYWwiIGNsYXNzPSJhbnN3ZXIgaGlkZGVuIiBzdHlsZT0ibWFyZ2luLXRvcDoxNXB4Ij4ke2VzYyhhbnN3ZXIocSkpfTwvZGl2PjxkaXYgY2xhc3M9ImNvbnRyb2xzIj4ke2J0bign4pyTIEkgYW5zd2VyZWQgaW5kZXBlbmRlbnRseScsJ2RvbmU6JytxKX0gJHtidG4oJ05leHQgcXVlc3Rpb24g4oaSJywnbmV4dFF1ZXN0aW9uJyl9PC9kaXY+PHAgY2xhc3M9InNtYWxsIG11dGVkIj5Zb3VyIGNvbXBsZXRpb24gY2hlY2sgaXMgc2VsZi1yZXBvcnRlZCwgbm90IGF1dG9tYXRpY2FsbHkgbWFya2VkLjwvcD48L2Rpdj48L2Rpdj5gfWZ1bmN0aW9uIHJhbmRvbSgpe2lmKCFyYW5kb21PcmRlci5sZW5ndGh8fHJhbmRvbU9yZGVyLnNvbWUocT0+IWFjdGl2ZSgpLmluY2x1ZGVzKHEpKXx8cmFuZG9tT3JkZXIubGVuZ3RoIT09YWN0aXZlKCkubGVuZ3RoKXtyYW5kb21PcmRlcj1bLi4uYWN0aXZlKCldLnNvcnQoKCk9Pk1hdGgucmFuZG9tKCktLjUpO3JhbmRvbUlkeD0wfWxldCBxPXJhbmRvbU9yZGVyW3JhbmRvbUlkeF07cmV0dXJuIGA8ZGl2IGNsYXNzPSJjYXJkIj48c3BhbiBjbGFzcz0iYmFkZ2UiPlJhbmRvbSBtb2NrIHNwZWFraW5nIHRlc3QgwrcgJHtyYW5kb21JZHgrMX0gb2YgJHtyYW5kb21PcmRlci5sZW5ndGh9PC9zcGFuPjxoMj4ke2VzYyhxdWVzdGlvbnNbcV0pfTwvaDI+PHAgY2xhc3M9Im11dGVkIj5BbnN3ZXIgYWxvdWQgd2l0aG91dCBub3Rlcy4gUmV2ZWFsIHRoZSBhbnN3ZXIgYWZ0ZXIgeW91IGhhdmUgdHJpZWQuPC9wPjxkaXYgY2xhc3M9ImZvY3VzIj48ZGl2IGNsYXNzPSJmcmVuY2giPiR7ZXNjKHF1ZXN0aW9uc1txXSl9PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0iY29udHJvbHMiPiR7YnRuKCfilrYgSGVhciBxdWVzdGlvbicsJ3F1ZXN0aW9uOicrcSwncHJpbWFyeScpfSAke2J0bignUmV2ZWFsIGFuc3dlcicsJ3JldmVhbCcpfSAke2J0bign4pa2IEhlYXIgbW9kZWwnLCdsaXN0ZW46JytxKX08L2Rpdj48ZGl2IGlkPSJyZXZlYWwiIGNsYXNzPSJhbnN3ZXIgaGlkZGVuIiBzdHlsZT0ibWFyZ2luLXRvcDoxNXB4Ij4ke2VzYyhhbnN3ZXIocSkpfTwvZGl2PjxkaXYgY2xhc3M9ImNvbnRyb2xzIj4ke2J0bign4pyTIEkgYW5zd2VyZWQgaW5kZXBlbmRlbnRseScsJ2RvbmU6JytxKX0gJHtidG4ocmFuZG9tSWR4PT09cmFuZG9tT3JkZXIubGVuZ3RoLTE/J05ldyByYW5kb20gdGVzdCDihrsnOidOZXh0IHJhbmRvbSBxdWVzdGlvbiDihpInLCduZXh0UmFuZG9tJyl9PC9kaXY+PHAgY2xhc3M9InNtYWxsIG11dGVkIj5QcmFjdGljZSByZWNvcmQ6ICR7T2JqZWN0LmtleXMoY29tcGxldGVkKS5maWx0ZXIocT0+Y29tcGxldGVkW3FdJiZhY3RpdmUoKS5pbmNsdWRlcyhOdW1iZXIocSkpKS5sZW5ndGh9IG9mICR7YWN0aXZlKCkubGVuZ3RofSBxdWVzdGlvbnMgbWFya2VkIGluZGVwZW5kZW50bHkgYW5zd2VyZWQgb24gdGhpcyBkZXZpY2UuPC9wPjwvZGl2PmB9ZnVuY3Rpb24gYmluZCgpe2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYl0nKS5mb3JFYWNoKGI9PmIub25jbGljaz0oKT0+e3RhYj1iLmRhdGFzZXQudGFiO3FpZHg9MDtjaHVua2lkeD0wO2hpbnQ9MDtyZW5kZXIoKX0pO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXFdJykuZm9yRWFjaChiPT5iLm9uY2xpY2s9KCk9PntxaWR4PU51bWJlcihiLmRhdGFzZXQucSk7Y2h1bmtpZHg9MDtoaW50PTA7cmVuZGVyKCl9KTtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWVsZF0nKS5mb3JFYWNoKGVsPT5lbC5vbmNoYW5nZT0oKT0+e2RhdGFbZWwuZGF0YXNldC5maWVsZF09ZWwudmFsdWU7aWYoZWwuZGF0YXNldC5maWVsZD09PSdmaXJzdCcmJmRhdGEuc3BlbGxpbmc9PT1kZWZhdWx0cy5zcGVsbGluZylkYXRhLnNwZWxsaW5nPWVsLnZhbHVlLnRvVXBwZXJDYXNlKCkuc3BsaXQoJycpLmpvaW4oJy0nKTtzYXZlKCk7cmVuZGVyKCl9KTtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY3RdJykuZm9yRWFjaChiPT5iLm9uY2xpY2s9KCk9PntsZXQgW2FjdCxhcmcsZXh0cmFdPWIuZGF0YXNldC5hY3Quc3BsaXQoJzonKTtpZihhY3Q9PT0nZ28nKXt0YWI9YXJnO2NodW5raWR4PTA7aGludD0wO3JlbmRlcigpfWVsc2UgaWYoYWN0PT09J2xpc3Rlbicpc3BlZWNoKGFuc3dlcihOdW1iZXIoYXJnKSkpO2Vsc2UgaWYoYWN0PT09J3F1ZXN0aW9uJylzcGVlY2gocXVlc3Rpb25zW051bWJlcihhcmcpXSwuNzIpO2Vsc2UgaWYoYWN0PT09J2NodW5rJyl7bGV0IGE9Y2h1bmtzKE51bWJlcihhcmcpKTtzcGVlY2goTnVtYmVyKGV4dHJhKT49YS5sZW5ndGg/YW5zd2VyKE51bWJlcihhcmcpKTphW051bWJlcihleHRyYSldLmZyLC42NSx0cnVlKX1lbHNlIGlmKGFjdD09PSdwcmV2Q2h1bmsnKXtjaHVua2lkeD1NYXRoLm1heCgwLGNodW5raWR4LTEpO2hpbnQ9MDtyZW5kZXIoKX1lbHNlIGlmKGFjdD09PSduZXh0Q2h1bmsnKXtsZXQgbGVuPWNodW5rcyhjaG9vc2UoKSkubGVuZ3RoO2NodW5raWR4PWNodW5raWR4Pj1sZW4/MDpjaHVua2lkeCsxO2hpbnQ9MDtyZW5kZXIoKX1lbHNlIGlmKGFjdD09PSdoaW50Jyl7bGV0IHBhcnQ9Y2h1bmtzKGNob29zZSgpKVtjaHVua2lkeF07bGV0IGxlbj1wYXJ0PyhwYXJ0Lmh8fFtdKS5sZW5ndGgrMzo1O2hpbnQ9TWF0aC5taW4oaGludCsxLGxlbik7cmVuZGVyKCl9ZWxzZSBpZihhY3Q9PT0ncmV2ZWFsJykkKCdyZXZlYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtlbHNlIGlmKGFjdD09PSdkb25lJyl7Y29tcGxldGVkW2FyZ109dHJ1ZTtzYXZlKCk7Yi50ZXh0Q29udGVudD0n4pyTIE1hcmtlZCBhcyBwcmFjdGlzZWQnfWVsc2UgaWYoYWN0PT09J25leHRRdWVzdGlvbicpe3FpZHg9KHFpZHgrMSklYWN0aXZlKCkubGVuZ3RoO3JlbmRlcigpfWVsc2UgaWYoYWN0PT09J25leHRSYW5kb20nKXtyYW5kb21JZHgrKztpZihyYW5kb21JZHg+PXJhbmRvbU9yZGVyLmxlbmd0aCl7cmFuZG9tT3JkZXI9W107cmFuZG9tSWR4PTB9cmVuZGVyKCl9fSl9JCgndGVhY2hlckJ0bicpLm9uY2xpY2s9KCk9PiQoJ3RlYWNoZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTskKCdxOHRvZ2dsZScpLm9uY2hhbmdlPWU9PntpbmNsdWRlOD1lLnRhcmdldC5jaGVja2VkO3NhdmUoKTtxaWR4PTA7Y2h1bmtpZHg9MDtoaW50PTA7cmFuZG9tT3JkZXI9W107cmVuZGVyKCl9OyQoJ3Jlc2V0Jykub25jbGljaz0oKT0+e2lmKGNvbmZpcm0oJ0NsZWFyIHRoZSBzYW1wbGUvcGVyc29uYWxpc2VkIGFuc3dlcnMgYW5kIHJlc3RvcmUgZXhhbXBsZSBpbmZvcm1hdGlvbj8nKSl7ZGF0YT17Li4uZGVmYXVsdHN9O2NvbXBsZXRlZD17fTtzYXZlKCk7cmVuZGVyKCl9fTtyZW5kZXIoKTs8L3NjcmlwdD48L2JvZHk+PC9odG1sPgo=","y8":"PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj48aGVhZD48bWV0YSBjaGFyc2V0PSJ1dGYtOCIvPjxtZXRhIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiIG5hbWU9InZpZXdwb3J0Ii8+PHRpdGxlPlllYXIgOCBGcmVuY2ggwrcgU3RhcnQgb2YgWWVhciBSZXZpc2lvbjwvdGl0bGU+PHN0eWxlPjpyb290e2ZvbnQtZmFtaWx5OnN5c3RlbS11aSxTZWdvZSBVSSxzYW5zLXNlcmlmO2NvbG9yOiMxNzMxNGQ7YmFja2dyb3VuZDojZjZmOGZjfWJvZHl7bWFyZ2luOjB9bmF2e2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6N3B4O3BhZGRpbmc6MTRweCAyMHB4O2JhY2tncm91bmQ6d2hpdGU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RhZTRlZn1idXR0b257Y3Vyc29yOnBvaW50ZXI7Zm9udDppbmhlcml0fW5hdiBidXR0b24sLmJ0bntib3JkZXI6MXB4IHNvbGlkICNiOWNmZTA7YmFja2dyb3VuZDp3aGl0ZTtib3JkZXItcmFkaXVzOjEwcHg7cGFkZGluZzoxMHB4IDE0cHg7Y29sb3I6IzE3MzE0ZH1uYXYgYnV0dG9uLmFjdGl2ZSwuYnRuOmhvdmVye2JhY2tncm91bmQ6IzE3NjhhMTtjb2xvcjp3aGl0ZX1tYWlue3BhZGRpbmc6MjBweDttYXJnaW46YXV0b31oMntmb250LXNpemU6MjFweH0ubXV0ZWR7Y29sb3I6IzVjNzE4Njtmb250LXNpemU6MTRweH0uYW5zd2VyLC5wYW5lbCxkZXRhaWxze2JhY2tncm91bmQ6d2hpdGU7Ym9yZGVyOjFweCBzb2xpZCAjZDZlMWVjO2JvcmRlci1yYWRpdXM6MTRweDtwYWRkaW5nOjE2cHg7bWFyZ2luOjEycHggMH0uYW5zd2VyIHB7Zm9udC1zaXplOjE4cHg7Y29sb3I6IzE1NWY5M30uYW5zd2VyIC5idG57cGFkZGluZzo2cHggMTBweDtmb250LXNpemU6MTNweH0uZm9ybWdyaWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDIyMHB4LDFmcikpO2dhcDoxM3B4O21hcmdpbjoxNXB4IDB9LmZvcm1ncmlkIGxhYmVse2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjY1MDtkaXNwbGF5OmJsb2NrfS5mb3JtZ3JpZCBpbnB1dCwuZm9ybWdyaWQgc2VsZWN0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttYXJnaW4tdG9wOjVweDtwYWRkaW5nOjEwcHg7Ym9yZGVyOjFweCBzb2xpZCAjYzZkNGUyO2JvcmRlci1yYWRpdXM6OHB4O2ZvbnQ6aW5oZXJpdDtiYWNrZ3JvdW5kOndoaXRlfS5xbmF2e2Rpc3BsYXk6ZmxleDtnYXA6NnB4O292ZXJmbG93LXg6YXV0bztwYWRkaW5nLWJvdHRvbToxMnB4fS5xbmF2IGJ1dHRvbnttaW4td2lkdGg6MTQwcHg7dGV4dC1hbGlnbjpsZWZ0O3BhZGRpbmc6OXB4O2JvcmRlcjoxcHggc29saWQgI2NjZDllNTtib3JkZXItcmFkaXVzOjlweDtiYWNrZ3JvdW5kOndoaXRlO2ZvbnQtc2l6ZToxMnB4fS5xbmF2IC5zZWxlY3RlZHtiYWNrZ3JvdW5kOiNkZmVmZmM7Ym9yZGVyLWNvbG9yOiMyMzc3YjF9LmZvY3Vze3BhZGRpbmc6MjVweDtiYWNrZ3JvdW5kOiNlYWYzZmI7Ym9yZGVyLXJhZGl1czoxM3B4O2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjY1MDttYXJnaW46MThweCAwfS5wcm9tcHR7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzU4NzM4Yjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LmFjdGlvbnN7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDo5cHg7bWFyZ2luLXRvcDoxNHB4fS5oaW50e2JhY2tncm91bmQ6I2ZmZjRkODtib3JkZXItcmFkaXVzOjlweDtwYWRkaW5nOjEzcHg7bWFyZ2luOjEwcHggMH0uaGlkZGVue2Rpc3BsYXk6bm9uZX1zdW1tYXJ5e2N1cnNvcjpwb2ludGVyO2ZvbnQtd2VpZ2h0OjcwMH0KICAgIC5wcmFjdGljZS1sYXlvdXR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMTgwcHgsMWZyKSBtaW5tYXgoMCwyZnIpO2FsaWduLWl0ZW1zOnN0YXJ0O2dhcDoxNnB4fS5wcmFjdGljZS1sYXlvdXQ+LnBhbmVse21pbi13aWR0aDowfS5xbmF2e2Rpc3BsYXk6Z3JpZDtnYXA6OHB4O292ZXJmbG93OnZpc2libGU7cGFkZGluZzowO21pbi13aWR0aDowO2FsaWduLWNvbnRlbnQ6c3RhcnR9LnFuYXYgYnV0dG9ue3dpZHRoOjEwMCU7bWluLXdpZHRoOjA7d2hpdGUtc3BhY2U6bm9ybWFsO292ZXJmbG93LXdyYXA6YW55d2hlcmU7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS40O3BhZGRpbmc6MTJweH0ucW5hdiBidXR0b246Zm9jdXMtdmlzaWJsZXtvdXRsaW5lOjNweCBzb2xpZCAjMjM3N2IxO291dGxpbmUtb2Zmc2V0OjJweH1AbWVkaWEobWF4LXdpZHRoOjYwMHB4KXsucHJhY3RpY2UtbGF5b3V0e2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMTEwcHgsLjhmcikgbWlubWF4KDAsMS40ZnIpO2dhcDoxMHB4fS5xbmF2IGJ1dHRvbntmb250LXNpemU6MTJweDtwYWRkaW5nOjhweH0ucHJhY3RpY2UtbGF5b3V0Pi5wYW5lbHtwYWRkaW5nOjEycHh9LnByYWN0aWNlLWxheW91dCAuZm9jdXN7b3ZlcmZsb3ctd3JhcDphbnl3aGVyZX19Ci5yZXZpc2lvbi1ncm91cHttaW4td2lkdGg6MDttYXJnaW46MTZweCAwO3BhZGRpbmc6MTJweCAxNnB4IDE2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZDRlMGViO2JvcmRlci1yYWRpdXM6MTJweH0KLnJldmlzaW9uLWdyb3VwIGxlZ2VuZHtwYWRkaW5nOjAgNXB4O2ZvbnQtd2VpZ2h0OjcwMH0KLmZhbWlseS1jaGVja2xpc3R7Z3JpZC1jb2x1bW46MS8tMTttaW4td2lkdGg6MDttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOjB9Ci5mYW1pbHktY2hlY2tsaXN0IGxlZ2VuZHtwYWRkaW5nOjA7bWFyZ2luLWJvdHRvbTo2cHg7Zm9udC1zaXplOjEzcHh9Ci5mYW1pbHktcGVvcGxle2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LG1pbm1heCgxNDJweCwxZnIpKTtnYXA6OHB4fQouZmFtaWx5LXBlb3BsZSBsYWJlbHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo2cHg7cGFkZGluZzo3cHggOHB4O2JvcmRlcjoxcHggc29saWQgI2Q0ZTBlYjtib3JkZXItcmFkaXVzOjhweDtiYWNrZ3JvdW5kOndoaXRlO2N1cnNvcjpwb2ludGVyfQouZmFtaWx5LXBlb3BsZSBpbnB1dFt0eXBlPWNoZWNrYm94XXt3aWR0aDphdXRvO21hcmdpbjowO2FjY2VudC1jb2xvcjojMjE1Zjk4fQo8L3N0eWxlPjwvaGVhZD48Ym9keT48ZGl2IGlkPSJhcHAiPjwvZGl2PjxzY3JpcHQ+Y29uc3QgWTkgPSB0eXBlb2YgWUVBUl9OSU5FX0ZSRU5DSCA9PT0gInVuZGVmaW5lZCIgPyBudWxsIDogWUVBUl9OSU5FX0ZSRU5DSDsKY29uc3QgUVVFU1RJT05TPVk5ID8gWTkuZ3JvdXBzLm1hcChncm91cCA9PiBncm91cC5xdWVzdGlvbikgOiBbIkNvbW1lbnQgdHUgdCdhcHBlbGxlcyA/IiwgIkNvbW1lbnQgw6dhIHMnw6ljcml0ID8iLCAiw4dhIHZhID8iLCAiT8O5IGhhYml0ZXMtdHUgPyIsICJRdWVsIMOiZ2UgYXMtdHUgPyIsICJRdWVsbGUgZXN0IGxhIGRhdGUgZGUgdG9uIGFubml2ZXJzYWlyZSA/IiwgIkFzLXR1IGRlcyBmcsOocmVzIGV0IHPFk3VycyA/IiwgIkFzLXR1IHVuIGFuaW1hbCA/IiwgIlR1IGVzIGNvbW1lbnQgPyIsICJRdWVsbGVzIG1hdGnDqHJlcyBmYWlzLXR1ID8iXTtjb25zdCBGSUVMRFM9WTkgPyBZOS5ncm91cHMuZmxhdE1hcChncm91cCA9PiBncm91cC5maWVsZHMpIDogW1siZmlyc3QiLCAiRmlyc3QgbmFtZSIsICJ0ZXh0IiwgIkFsZXgiXSwgWyJmZWVsaW5nIiwgIkZpcnN0IHJlc3BvbnNlIiwgInNlbGVjdCIsICLDh2EgdmEgIXzDh2EgdmEgdHLDqHMgYmllbnzDh2EgdmEgbWFsfErigJlhaSBmYWltfErigJlhaSBzb2lmfEplIHN1aXMgZmF0aWd1w6l8SmUgc3VpcyBmYXRpZ3XDqWUiXSwgWyJmZWVsaW5nSm9pbiIsICJDb25qdW5jdGlvbiIsICJzZWxlY3QiLCAiZXR8bWFpcyJdLCBbImZlZWxpbmcyIiwgIlNlY29uZCByZXNwb25zZSIsICJzZWxlY3QiLCAiSmUgc3VpcyBmYXRpZ3XDqXxKZSBzdWlzIGZhdGlndcOpZXxK4oCZYWkgZmFpbXxK4oCZYWkgc29pZnzDh2EgdmEgIXzDh2EgdmEgdHLDqHMgYmllbnzDh2EgdmEgbWFsIl0sIFsidG93biIsICJUb3duIC8gcGFyaXNoIiwgInNlbGVjdCIsICJQYWdldHxQZW1icm9rZXxIYW1pbHRvbnxXYXJ3aWNrfFNvdXRoYW1wdG9ufFNhbmR5c3xEZXZvbnNoaXJlfFNtaXRo4oCZc3xIYW1pbHRvbiBQYXJpc2h8U3QgR2Vvcmdl4oCZc3xPdGhlciJdLCBbIm5vdFRvd24iLCAiQSBkaWZmZXJlbnQgdG93biB5b3UgZG8gbm90IGxpdmUgaW4iLCAic2VsZWN0IiwgIkhhbWlsdG9ufFBhZ2V0fFBlbWJyb2tlfFdhcndpY2t8U291dGhhbXB0b258U2FuZHlzfERldm9uc2hpcmV8U21pdGjigJlzfFN0IEdlb3JnZeKAmXN8T3RoZXIiXSwgWyJsaWtlTGl2aW5nIiwgIkRvIHlvdSBsaWtlIGxpdmluZyB0aGVyZT8iLCAic2VsZWN0IiwgIm91aXxub24iXSwgWyJwbGFjZUludGVuc2l0eSIsICJIb3cgbXVjaD8iLCAic2VsZWN0IiwgInRyw6hzfGFzc2V6fHVuIHBldXx0cm9wIl0sIFsicGxhY2VBZGplY3RpdmUiLCAiRGVzY3JpYmUgdGhlIHBsYWNlIiwgInNlbGVjdCIsICJ0cmFucXVpbGxlfGFuaW3DqXxhbXVzYW50fGJydXlhbnR8YmFyYmFudCJdLCBbImNvdW50cnkiLCAiQ291bnRyeSAoaW4gRnJlbmNoKSIsICJzZWxlY3QiLCAiYXV4IEJlcm11ZGVzfGVuIEFuZ2xldGVycmV8YXUgQ2FuYWRhfGF1eCDDiXRhdHMtVW5pc3xlbiBGcmFuY2V8T3RoZXIiXSwgWyJjb3VudHJ5T3RoZXIiLCAiT3RoZXIgY291bnRyeSB3aXRoIGNvcnJlY3QgcHJlcG9zaXRpb24gKGUuZy4gZW4gRXNwYWduZSkiLCAidGV4dCIsICJlbiBFc3BhZ25lIl0sIFsiYWdlIiwgIllvdXIgYWdlIiwgInNlbGVjdCIsICIxMHwxMXwxMnwxM3wxNHwxNXwxNnwxN3wxOHwxOSJdLCBbIm5leHRBZ2UiLCAiQWdlIGF0IG5leHQgYmlydGhkYXkiLCAic2VsZWN0IiwgIjExfDEyfDEzfDE0fDE1fDE2fDE3fDE4fDE5fDIwIl0sIFsibmV4dE1vbnRoIiwgIk1vbnRoIG9mIG5leHQgYmlydGhkYXkiLCAic2VsZWN0IiwgImphbnZpZXJ8ZsOpdnJpZXJ8bWFyc3xhdnJpbHxtYWl8anVpbnxqdWlsbGV0fGFvw7t0fHNlcHRlbWJyZXxvY3RvYnJlfG5vdmVtYnJlfGTDqWNlbWJyZSJdLCBbImJpcnRoZGF5RGF5IiwgIkJpcnRoZGF5IGRheSIsICJzZWxlY3QiLCAiMXwyfDN8NHw1fDZ8N3w4fDl8MTB8MTF8MTJ8MTN8MTR8MTV8MTZ8MTd8MTh8MTl8MjB8MjF8MjJ8MjN8MjR8MjV8MjZ8Mjd8Mjh8Mjl8MzB8MzEiXSwgWyJiaXJ0aGRheU1vbnRoIiwgIkJpcnRoZGF5IG1vbnRoIiwgInNlbGVjdCIsICJqYW52aWVyfGbDqXZyaWVyfG1hcnN8YXZyaWx8bWFpfGp1aW58anVpbGxldHxhb8O7dHxzZXB0ZW1icmV8b2N0b2JyZXxub3ZlbWJyZXxkw6ljZW1icmUiXSwgWyJzaWJsaW5ncyIsICJCcm90aGVycyBhbmQgc2lzdGVycyIsICJzZWxlY3QiLCAibm9uZXxvbmUgYnJvdGhlcnxvbmUgc2lzdGVyfG9uZSBicm90aGVyIGFuZCBvbmUgc2lzdGVyfHR3byBicm90aGVyc3x0d28gc2lzdGVyc3xPdGhlciJdLCBbInNpYmxpbmdzT3RoZXIiLCAiT3RoZXIgc2libGluZyBzZW50ZW5jZSBpbiBGcmVuY2giLCAidGV4dCIsICJK4oCZYWkgdHJvaXMgZnLDqHJlcyJdLCBbInNpYmxpbmdOYW1lIiwgIlNpYmxpbmfigJlzIG5hbWUgKGlmIGFwcGxpY2FibGUpIiwgInRleHQiLCAiTHVjIl0sIFsic2libGluZ0FnZSIsICJTaWJsaW5n4oCZcyBhZ2UgKGlmIGFwcGxpY2FibGUpIiwgInNlbGVjdCIsICIwfDF8MnwzfDR8NXw2fDd8OHw5fDEwfDExfDEyfDEzfDE0fDE1fDE2fDE3fDE4fDE5fDIwIl0sIFsic2libGluZ09waW5pb24iLCAiT3BpbmlvbiBhYm91dCB5b3VyIHNpYmxpbmcgKG9wdGlvbmFsKSIsICJzZWxlY3QiLCAifErigJlhaW1lIG1vbiBmcsOocmV8SuKAmWFkb3JlIG1hIHPFk3VyfEplIG7igJlhaW1lIHBhcyBtb24gZnLDqHJlfEplIG7igJlhaW1lIHBhcyBtYSBzxZN1ciJdLCBbInBldCIsICJQZXQiLCAic2VsZWN0IiwgIm5vbmV8dW4gY2hpZW58dW4gY2hhdHx1biBsYXBpbnx1biBoYW1zdGVyfHVuZSBzb3VyaXN8dW5lIGdyZW5vdWlsbGV8dW4gc2VycGVudHx1biBwZXJyb3F1ZXR8dW4gb2lzZWF1fHVuIGNoZXZhbHx1biBwb2lzc29ufHVuIGzDqXphcmR8dW5lIHRvcnR1ZXx1biBjYW5hcmR8dW4gZnVyZXR8T3RoZXIiXSwgWyJwZXRPdGhlciIsICJPdGhlciBwZXQgKHdpdGggYXJ0aWNsZSwgZS5nLiB1biBjb2JheWUpIiwgInRleHQiLCAidW4gY29iYXllIl0sIFsicGV0TmFtZSIsICJQZXTigJlzIG5hbWUiLCAidGV4dCIsICJNaWxvIl0sIFsicGV0QWdlIiwgIlBldOKAmXMgYWdlIiwgInNlbGVjdCIsICIwfDF8MnwzfDR8NXw2fDd8OHw5fDEwfDExfDEyfDEzfDE0fDE1fDE2fDE3fDE4fDE5fDIwIl0sIFsicGV0V2lzaCIsICJBbmltYWwgeW91IHdvdWxkIGxpa2UgKHdpdGggYXJ0aWNsZSkiLCAic2VsZWN0IiwgInVuIGNoaWVufHVuIGNoYXR8dW4gbGFwaW58dW4gaGFtc3Rlcnx1biBwb2lzc29ufHVuZSB0b3J0dWV8dW4gb2lzZWF1fE90aGVyIl0sIFsiaGFpciIsICJIYWlyIGNvbG91ciIsICJzZWxlY3QiLCAibm9pcnN8YmxvbmRzfHJvdXh8YnJ1bnN8Y2jDonRhaW5zIl0sIFsiZXllcyIsICJFeWUgY29sb3VyIiwgInNlbGVjdCIsICJ2ZXJ0c3xibGV1c3xncmlzfG1hcnJvbiJdLCBbImhlaWdodCIsICJIZWlnaHQiLCAic2VsZWN0IiwgImdyYW5kfGdyYW5kZXxwZXRpdHxwZXRpdGV8ZGUgdGFpbGxlIG1veWVubmUiXSwgWyJzdWJqZWN0IiwgIlNjaG9vbCBzdWJqZWN0IiwgInNlbGVjdCIsICJsZSBmcmFuw6dhaXN8bOKAmWFuZ2xhaXN8bGVzIG1hdGhzfGxhIGfDqW9ncmFwaGllfGzigJloaXN0b2lyZXxsZXMgc2NpZW5jZXN8bOKAmWluZm9ybWF0aXF1ZXxsZSBkZXNzaW58bGUgc3BvcnR8bGEgbXVzaXF1ZXxs4oCZw6lkdWNhdGlvbiByZWxpZ2lldXNlIl0sIFsiZGlzbGlrZWRTdWJqZWN0IiwgIlN1YmplY3QgeW91IGRpc2xpa2UiLCAic2VsZWN0IiwgImxlcyBtYXRoc3xsZSBmcmFuw6dhaXN8bOKAmWFuZ2xhaXN8bGEgZ8Opb2dyYXBoaWV8bOKAmWhpc3RvaXJlfGxlcyBzY2llbmNlc3xsZSBzcG9ydHxsYSBtdXNpcXVlfGxlIGRlc3NpbiJdLCBbImRpc2xpa2VJbnRlbnNpdHkiLCAiSG93IG11Y2ggKGRpc2xpa2UgcmVhc29uKSIsICJzZWxlY3QiLCAidHLDqHN8YXNzZXp8dW4gcGV1fHRyb3AiXSwgWyJkaXNsaWtlUmVhc29uIiwgIlJlYXNvbiBmb3IgZGlzbGlraW5nIiwgInNlbGVjdCIsICJkaWZmaWNpbGV8ZW5udXlldXh8aG9ycmlibGV8ZmF0aWdhbnR8Y29tcGxpcXXDqSJdLCBbInN1YmplY3RPcGluaW9uIiwgIk9waW5pb24gb24gc3ViamVjdCIsICJzZWxlY3QiLCAiaW50w6lyZXNzYW50fGZhY2lsZXxkaWZmaWNpbGV8YW11c2FudHxlbm51eWV1eHx1dGlsZXxob3JyaWJsZSJdLCBbInN1YmplY3RJbnRlbnNpdHkiLCAiSW50ZW5zaXR5IiwgInNlbGVjdCIsICJ0csOoc3xhc3Nlenx1biBwZXV8dHJvcCJdLCBbInRvZGF5RGF5IiwgIlRvZGF54oCZcyBkYXRlIOKAlCBkYXkiLCAibnVtYmVyIiwgIjUiXSwgWyJ0b2RheU1vbnRoIiwgIlRvZGF54oCZcyBkYXRlIOKAlCBtb250aCIsICJzZWxlY3QiLCAiamFudmllcnxmw6l2cmllcnxtYXJzfGF2cmlsfG1haXxqdWlufGp1aWxsZXR8YW/Du3R8c2VwdGVtYnJlfG9jdG9icmV8bm92ZW1icmV8ZMOpY2VtYnJlIl0sIFsiaG9iYnkiLCAiQWN0aXZpdHkgeW91IGxpa2UiLCAic2VsZWN0IiwgImpvdWVyIGF1IGZvb3R8am91ZXIgYXUgcnVnYnl8am91ZXIgYXUgZ29sZnxqb3VlciBhdSBiYWRtaW50b258am91ZXIgYXUgdm9sbGV5fGZhaXJlIGR1IHbDqWxvfGZhaXJlIGR1IFZUVHxmYWlyZSBkZSBsYSBkYW5zZXxmYWlyZSBkZSBsYSB2b2lsZXxmYWlyZSBkZSBsYSBneW1uYXN0aXF1ZXxqb3VlciBhdXggamV1eCB2aWTDqW98c3VyZmVyIHN1ciBJbnRlcm5ldCJdLCBbImRpc2xpa2UiLCAiQWN0aXZpdHkgeW91IGRpc2xpa2UiLCAic2VsZWN0IiwgImpvdWVyIGF1IGZvb3R8ZmFpcmUgZHUgc2hvcHBpbmd8c2UgYmFsYWRlciBlbiB2aWxsZXxzdXJmZXIgc3VyIEludGVybmV0fGpvdWVyIGF1eCBqZXV4IHZpZMOpb3xmYWlyZSBkZSBsYSBkYW5zZSJdLCBbIndlZWtlbmQiLCAiV2hhdCB5b3Ugd2lsbCBkbyB0aGlzIHdlZWtlbmQgKEZyZW5jaCBpbmZpbml0aXZlIHBocmFzZSkiLCAic2VsZWN0IiwgInJlZ2FyZGVyIHVuIGZpbG18am91ZXIgYXUgZm9vdHxqb3VlciBhdXggamV1eCB2aWTDqW98ZmFpcmUgZHUgdsOpbG98dm9pciBtZXMgYW1pc3xmYWlyZSBkdSBzaG9wcGluZ3xPdGhlciJdLCBbInBldFBhc3QiLCAiUGV0IHlvdSB1c2VkIHRvIGhhdmUgKEZyZW5jaCB3aXRoIGFydGljbGUpIiwgInNlbGVjdCIsICJ1biBjaGllbnx1biBjaGF0fHVuIGxhcGlufHVuIGhhbXN0ZXJ8dW4gcG9pc3Nvbnx1bmUgdG9ydHVlfE90aGVyIl0sIFsicGV0RnV0dXJlIiwgIlBldCB5b3Ugd2lsbCBoYXZlIChGcmVuY2ggd2l0aCBhcnRpY2xlKSIsICJzZWxlY3QiLCAidW4gY2hpZW58dW4gY2hhdHx1biBsYXBpbnx1biBoYW1zdGVyfHVuIHBvaXNzb258dW5lIHRvcnR1ZXxPdGhlciJdLCBbInBlcnNvbmFsaXR5IiwgIlBlcnNvbmFsaXR5IG9waW5pb24gKEZyZW5jaCkiLCAic2VsZWN0IiwgInN5bXBhdGhpcXVlfHRpbWlkZXxkcsO0bGV8c3BvcnRpZnxzcG9ydGl2ZXxnZW50aWx8Z2VudGlsbGV8dHJhdmFpbGxldXJ8dHJhdmFpbGxldXNlfE90aGVyIl0sIFsic3ViamVjdDIiLCAiQW5vdGhlciBzY2hvb2wgc3ViamVjdC9hY3Rpdml0eSAoRnJlbmNoKSIsICJzZWxlY3QiLCAiZHUgc3BvcnR8ZGUgbGEgbXVzaXF1ZXxkdSBkZXNzaW58ZGVzIG1hdGhzfGRlIGzigJlhbmdsYWlzfGRlIGzigJloaXN0b2lyZXxPdGhlciJdXTtjb25zdCBTVE9SRT1ZOSA/ICdhdGVsaWVyLXk5LXJldmlzaW9uLXYxJyA6ICdhdGVsaWVyLXk4LXJldmlzaW9uLXYxJztjb25zdCBudW1zPVsnesOpcm8nLCd1bicsJ2RldXgnLCd0cm9pcycsJ3F1YXRyZScsJ2NpbnEnLCdzaXgnLCdzZXB0JywnaHVpdCcsJ25ldWYnLCdkaXgnLCdvbnplJywnZG91emUnLCd0cmVpemUnLCdxdWF0b3J6ZScsJ3F1aW56ZScsJ3NlaXplJywnZGl4LXNlcHQnLCdkaXgtaHVpdCcsJ2RpeC1uZXVmJywndmluZ3QnLCd2aW5ndCBldCB1bicsJ3Zpbmd0LWRldXgnLCd2aW5ndC10cm9pcycsJ3Zpbmd0LXF1YXRyZScsJ3Zpbmd0LWNpbnEnLCd2aW5ndC1zaXgnLCd2aW5ndC1zZXB0JywndmluZ3QtaHVpdCcsJ3Zpbmd0LW5ldWYnLCd0cmVudGUnLCd0cmVudGUgZXQgdW4nXTtjb25zdCB3b3JkPXg9Pm51bXNbK3hdfHx4O2xldCBkPU9iamVjdC5mcm9tRW50cmllcyhGSUVMRFMubWFwKGY9PltmWzBdLGZbM10uc3BsaXQoJ3wnKVswXV0pKTt0cnl7ZD17Li4uZCwuLi5KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JFKXx8J3t9Jyl9fWNhdGNoKGUpe31sZXQgbW9kZT0ncHJlcGFyZScscWk9MCxjaT0wLGhpPTAscmFuZG9tT3JkZXI9W10scmk9MDtjb25zdCAkPWlkPT5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksZXNjPXM9PlN0cmluZyhzPz8nJykucmVwbGFjZSgvWyY8PiInXS9nLGM9Pih7JyYnOicmYW1wOycsJzwnOicmbHQ7JywnPic6JyZndDsnLCciJzonJnF1b3Q7JywiJyI6JyYjMzk7J31bY10pKTtmdW5jdGlvbiBzYXZlKCl7bG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkUsSlNPTi5zdHJpbmdpZnkoZCkpfWZ1bmN0aW9uIEMoZnIsZW4pe3JldHVybiB7ZnIsZW59fWZ1bmN0aW9uIGdldChxKXtpZihZOSkgcmV0dXJuIFk5LmNodW5rcyhkLHEsd29yZCk7bGV0IGE9W107Y29uc3QgcGljaz1rPT5kW2tdPT09J090aGVyJz8oZFtrKydDdXN0b20nXXx8J+KApicpOmRba107Y29uc3QgYWRkPShmcixlbik9PmEucHVzaChDKGZyLGVuKSk7Y29uc3QgdHI9c2VsZWN0ZWRFbmdsaXNoO3N3aXRjaChxKXsKY2FzZSAwOmFkZCgnSmUgbeKAmWFwcGVsbGUnLCdNeSBuYW1lIGlzJyk7YWRkKGQuZmlyc3QsZC5maXJzdCk7YnJlYWs7CmNhc2UgMTphZGQoJ8OHYSBz4oCZw6ljcml0JywnSXQgaXMgc3BlbHQnKTtbLi4uZC5maXJzdC50b1VwcGVyQ2FzZSgpXS5maWx0ZXIoYz0+Yy50cmltKCkpLmZvckVhY2goYz0+YWRkKGMsYykpO2JyZWFrOwpjYXNlIDI6YWRkKGQuZmVlbGluZyx0cignZmVlbGluZycpKTthZGQoZC5mZWVsaW5nSm9pbix0cignZmVlbGluZ0pvaW4nKSk7YWRkKGQuZmVlbGluZzIsdHIoJ2ZlZWxpbmcyJykpO2JyZWFrOwpjYXNlIDM6YWRkKCdK4oCZaGFiaXRlIMOgICcrcGljaygndG93bicpLCdJIGxpdmUgaW4gJytwaWNrKCd0b3duJykpO2FkZChkLmNvdW50cnk9PT0nT3RoZXInP2QuY291bnRyeU90aGVyOmQuY291bnRyeSxkLmNvdW50cnk9PT0nT3RoZXInPyhkLmNvdW50cnlFbmdsaXNofHx0cmFuc2xhdGlvbihkLmNvdW50cnlPdGhlcikpOidpbiAnK3RyKCdjb3VudHJ5JykpO2FkZCgnSmUgbuKAmWhhYml0ZSBwYXMgw6AgJytwaWNrKCdub3RUb3duJyksJ0kgZG8gbm90IGxpdmUgaW4gJytwaWNrKCdub3RUb3duJykpO2FkZCgoZC5saWtlTGl2aW5nPT09J25vbic/J0plIG7igJlhaW1lIHBhcyBoYWJpdGVyIMOgICc6J0rigJlhaW1lIGhhYml0ZXIgw6AgJykrcGljaygndG93bicpLChkLmxpa2VMaXZpbmc9PT0nbm9uJz8nSSBkbyBub3QgbGlrZSBsaXZpbmcgaW4gJzonSSBsaWtlIGxpdmluZyBpbiAnKStwaWNrKCd0b3duJykpO2FkZCgncGFyY2UgcXVlIGPigJllc3QgJytkLnBsYWNlSW50ZW5zaXR5KycgJytkLnBsYWNlQWRqZWN0aXZlLCdiZWNhdXNlIGl0IGlzICcrdHIoJ3BsYWNlSW50ZW5zaXR5JykrJyAnK3RyKCdwbGFjZUFkamVjdGl2ZScpKTticmVhazsKY2FzZSA0OmFkZCgnSuKAmWFpICcrd29yZChkLmFnZSkrJyBhbnMnLCdJIGFtICcrZC5hZ2UrJyB5ZWFycyBvbGQnKTthZGQoJ0rigJlhdXJhaSAnK3dvcmQoZC5uZXh0QWdlKSsnIGFucycsJ0kgd2lsbCBiZSAnK2QubmV4dEFnZSsnIHllYXJzIG9sZCcpO2FkZCgnZW4gJytkLm5leHRNb250aCwnaW4gJyt0cignbmV4dE1vbnRoJykpO2JyZWFrOwpjYXNlIDU6YWRkKCdNb24gYW5uaXZlcnNhaXJlJywnTXkgYmlydGhkYXknKTthZGQoJ2PigJllc3QgbGUgJyt3b3JkKGQuYmlydGhkYXlEYXkpLCdpcyBvbiB0aGUgJytvcmRpbmFsRGF5KGQuYmlydGhkYXlEYXkpKycgb2YnKTthZGQoZC5iaXJ0aGRheU1vbnRoLHRyKCdiaXJ0aGRheU1vbnRoJykpO2JyZWFrOwpjYXNlIDY6e2xldCBzaWI9eydub25lJzonSmUgc3VpcyBlbmZhbnQgdW5pcXVlLiBKZSBu4oCZYWkgcGFzIGRlIGZyw6hyZXMgZXQgc8WTdXJzLicsJ29uZSBicm90aGVyJzonSuKAmWFpIHVuIGZyw6hyZS4nLCdvbmUgc2lzdGVyJzonSuKAmWFpIHVuZSBzxZN1ci4nLCdvbmUgYnJvdGhlciBhbmQgb25lIHNpc3Rlcic6J0rigJlhaSB1biBmcsOocmUgZXQgdW5lIHPFk3VyLicsJ3R3byBicm90aGVycyc6J0rigJlhaSBkZXV4IGZyw6hyZXMuJywndHdvIHNpc3RlcnMnOidK4oCZYWkgZGV1eCBzxZN1cnMuJywnT3RoZXInOmQuc2libGluZ3NPdGhlcn1bZC5zaWJsaW5nc107YWRkKHNpYixkLnNpYmxpbmdzPT09J25vbmUnPydJIGFtIGFuIG9ubHkgY2hpbGQuIEkgZG8gbm90IGhhdmUgYW55IGJyb3RoZXJzIG9yIHNpc3RlcnMuJzpkLnNpYmxpbmdzPT09J090aGVyJz90cignc2libGluZ3MnKTonSSBoYXZlICcrZC5zaWJsaW5ncyk7aWYoZC5zaWJsaW5ncyE9PSdub25lJyl7YWRkKCdJbCAvIEVsbGUgc+KAmWFwcGVsbGUgJytkLnNpYmxpbmdOYW1lLCdIZSAvIFNoZSBpcyBjYWxsZWQgJytkLnNpYmxpbmdOYW1lKTthZGQoJ0lsIC8gRWxsZSBhICcrd29yZChkLnNpYmxpbmdBZ2UpKycgYW5zJywnSGUgLyBTaGUgaXMgJytkLnNpYmxpbmdBZ2UrJyB5ZWFycyBvbGQnKTthZGQoZC5zaWJsaW5nT3Bpbmlvbnx8J0rigJlhaW1lIG1hIGZhbWlsbGUnLHRyYW5zbGF0aW9uKGQuc2libGluZ09waW5pb258fCdK4oCZYWltZSBtYSBmYW1pbGxlJykpfWJyZWFrfQpjYXNlIDc6e2lmKGQucGV0PT09J25vbmUnKWFkZCgnTm9uLCBqZSBu4oCZYWkgcGFzIGTigJlhbmltYWwuJywnTm8sIEkgZG8gbm90IGhhdmUgYSBwZXQuJyk7ZWxzZXtsZXQgcGV0PWQucGV0PT09J090aGVyJz9kLnBldE90aGVyOmQucGV0O2FkZCgnT3VpLCBq4oCZYWkgJytwZXQrJy4nLCdZZXMsIEkgaGF2ZSAnK3RyKCdwZXQnKSsnLicpO2FkZCgnSWwgLyBFbGxlIHPigJlhcHBlbGxlICcrZC5wZXROYW1lKycuJywnSGUgLyBTaGUgaXMgY2FsbGVkICcrZC5wZXROYW1lKycuJyk7YWRkKCdJbCAvIEVsbGUgYSAnK3dvcmQoZC5wZXRBZ2UpKycgYW5zLicsJ0hlIC8gU2hlIGlzICcrZC5wZXRBZ2UrJyB5ZWFycyBvbGQuJyl9YWRkKCdK4oCZYWltZXJhaXMgJytwaWNrKCdwZXRXaXNoJykrJy4nLCdJIHdvdWxkIGxpa2UgJyt0cigncGV0V2lzaCcpKycuJyk7YWRkKCdBdmFudCwnLCdJbiB0aGUgcGFzdCwnKTthZGQoJ2rigJlhdmFpcyAnK3BpY2soJ3BldFBhc3QnKSsnLicsJ0kgdXNlZCB0byBoYXZlICcrdHIoJ3BldFBhc3QnKSsnLicpO2FkZCgnw4AgbOKAmWF2ZW5pciwnLCdJbiB0aGUgZnV0dXJlLCcpO2FkZCgnauKAmWF1cmFpICcrcGljaygncGV0RnV0dXJlJykrJy4nLCdJIHdpbGwgaGF2ZSAnK3RyKCdwZXRGdXR1cmUnKSsnLicpO2JyZWFrfQpjYXNlIDg6YWRkKCdK4oCZYWkgbGVzIGNoZXZldXggJytkLmhhaXIsJ0kgaGF2ZSAnK3RyKCdoYWlyJykrJyBoYWlyJyk7YWRkKCdldCBsZXMgeWV1eCAnK2QuZXllcysnLicsJ2FuZCAnK3RyKCdleWVzJykrJyBleWVzLicpO2FkZCgnSmUgc3VpcyAnK2QuaGVpZ2h0KycuJywnSSBhbSAnK3RyKCdoZWlnaHQnKSsnLicpO2FkZCgnSmUgZGlyYWlzIHF1ZSBqZSBzdWlzICcrKHBpY2soJ3BlcnNvbmFsaXR5Jyl8fCdhc3NleiBzeW1wYXRoaXF1ZScpKycuJywnSSB3b3VsZCBzYXkgdGhhdCBJIGFtICcrKHRyKCdwZXJzb25hbGl0eScpfHwncXVpdGUgbmljZScpKycuJyk7YnJlYWs7CmNhc2UgOTphZGQoJ0rigJnDqXR1ZGllICcrZC5zdWJqZWN0KycuJywnSSBzdHVkeSAnK3RyKCdzdWJqZWN0JykrJy4nKTthZGQoJ0rigJlhaW1lICcrZC5zdWJqZWN0LCdJIGxpa2UgJyt0cignc3ViamVjdCcpKTthZGQoJ3BhcmNlIHF1ZSBj4oCZZXN0ICcrZC5zdWJqZWN0SW50ZW5zaXR5KycgJytkLnN1YmplY3RPcGluaW9uKycuJywnYmVjYXVzZSBpdCBpcyAnK3RyKCdzdWJqZWN0SW50ZW5zaXR5JykrJyAnK3RyKCdzdWJqZWN0T3BpbmlvbicpKycuJyk7YWRkKCdKZSBu4oCZYWltZSBwYXMgJytkLmRpc2xpa2VkU3ViamVjdCwnSSBkbyBub3QgbGlrZSAnK3RyKCdkaXNsaWtlZFN1YmplY3QnKSk7YWRkKCdwYXJjZSBxdWUgY+KAmWVzdCAnK2QuZGlzbGlrZUludGVuc2l0eSsnICcrZC5kaXNsaWtlUmVhc29uKycuJywnYmVjYXVzZSBpdCBpcyAnK3RyKCdkaXNsaWtlSW50ZW5zaXR5JykrJyAnK3RyKCdkaXNsaWtlUmVhc29uJykrJy4nKTticmVhazsKY2FzZSAxMDphZGQoJ0F1am91cmTigJlodWksIGPigJllc3QgbGUnLCdUb2RheSBpcyB0aGUnKTthZGQod29yZChkLnRvZGF5RGF5KSsnICcrZC50b2RheU1vbnRoKycuJyxvcmRpbmFsRGF5KGQudG9kYXlEYXkpKycgb2YgJyt0cigndG9kYXlNb250aCcpKycuJyk7YnJlYWs7CmNhc2UgMTE6YWRkKCdK4oCZYWltZSAnK2QuaG9iYnkrJy4nLCdJIGxpa2UgJythY3Rpdml0eUVuZ2xpc2goJ2hvYmJ5JykrJy4nKTthZGQoJ0plIG7igJlhaW1lIHBhcyAnK2QuZGlzbGlrZSsnLicsJ0kgZG8gbm90IGxpa2UgJythY3Rpdml0eUVuZ2xpc2goJ2Rpc2xpa2UnKSsnLicpO2FkZCgnQ2Ugd2Vlay1lbmQsJywnVGhpcyB3ZWVrZW5kLCcpO2FkZCgnamUgdmFpcyAnK3BpY2soJ3dlZWtlbmQnKSsnLicsJ0kgYW0gZ29pbmcgdG8gJyt0cignd2Vla2VuZCcpKycuJyk7YnJlYWt9cmV0dXJuIGF9ZnVuY3Rpb24gYW5zd2VyKHEpe3JldHVybiBnZXQocSkubWFwKGM9PmMuZnIpLmpvaW4oJyAnKS5yZXBsYWNlKC9ccysoWy4sIT9dKS9nLCckMScpfWZ1bmN0aW9uIHNwZWVjaCh0LHJlcGVhdD1mYWxzZSl7aWYoISgnc3BlZWNoU3ludGhlc2lzJ2luIHdpbmRvdykpe2FsZXJ0KCdTcGVlY2ggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIuJyk7cmV0dXJufXNwZWVjaFN5bnRoZXNpcy5jYW5jZWwoKTtjb25zdCBzYXk9KCk9PntsZXQgdT1uZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHQpO3UubGFuZz0nZnItRlInO3UucmF0ZT0uNzI7bGV0IHY9c3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpLmZpbmQodj0+di5sYW5nLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnZnInKSk7aWYodil1LnZvaWNlPXY7c3BlZWNoU3ludGhlc2lzLnNwZWFrKHUpfTtzYXkoKTtpZihyZXBlYXQpe2xldCB1PW5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UoJycpO3UubGFuZz0nZnItRlInO3Uub25lbmQ9KCk9PnNldFRpbWVvdXQoc2F5LDE3MDApO3NwZWVjaFN5bnRoZXNpcy5zcGVhayh1KX19Y29uc3QgRU5HTElTSF9PUFRJT05TPXsiw4dhIHZhICEiOiJJ4oCZbSBPSyIsIsOHYSB2YSB0csOocyBiaWVuIjoiSeKAmW0gdmVyeSB3ZWxsIiwiw4dhIHZhIG1hbCI6IknigJltIG5vdCB3ZWxsIiwiSuKAmWFpIGZhaW0iOiJJ4oCZbSBodW5ncnkiLCJK4oCZYWkgc29pZiI6IknigJltIHRoaXJzdHkiLCJKZSBzdWlzIGZhdGlndcOpIjoiSeKAmW0gdGlyZWQgKGJveSkiLCJKZSBzdWlzIGZhdGlndcOpZSI6IknigJltIHRpcmVkIChnaXJsKSIsImV0IjoiYW5kIiwibWFpcyI6ImJ1dCIsIm91aSI6IlllcyIsIm5vbiI6Ik5vIiwidHLDqHMiOiJ2ZXJ5IiwiYXNzZXoiOiJxdWl0ZSIsInVuIHBldSI6ImEgbGl0dGxlIiwidHJvcCI6InRvbyIsInRyYW5xdWlsbGUiOiJxdWlldCIsImFuaW3DqSI6ImxpdmVseSIsImFtdXNhbnQiOiJmdW4iLCJicnV5YW50Ijoibm9pc3kiLCJiYXJiYW50IjoiYm9yaW5nIiwiYXV4IEJlcm11ZGVzIjoiQmVybXVkYSIsImVuIEFuZ2xldGVycmUiOiJFbmdsYW5kIiwiYXUgQ2FuYWRhIjoiQ2FuYWRhIiwiYXV4IMOJdGF0cy1VbmlzIjoiVW5pdGVkIFN0YXRlcyIsImVuIEZyYW5jZSI6IkZyYW5jZSIsImphbnZpZXIiOiJKYW51YXJ5IiwiZsOpdnJpZXIiOiJGZWJydWFyeSIsIm1hcnMiOiJNYXJjaCIsImF2cmlsIjoiQXByaWwiLCJtYWkiOiJNYXkiLCJqdWluIjoiSnVuZSIsImp1aWxsZXQiOiJKdWx5IiwiYW/Du3QiOiJBdWd1c3QiLCJzZXB0ZW1icmUiOiJTZXB0ZW1iZXIiLCJvY3RvYnJlIjoiT2N0b2JlciIsIm5vdmVtYnJlIjoiTm92ZW1iZXIiLCJkw6ljZW1icmUiOiJEZWNlbWJlciIsIkrigJlhaW1lIG1vbiBmcsOocmUiOiJJIGxpa2UgbXkgYnJvdGhlciIsIkrigJlhZG9yZSBtYSBzxZN1ciI6IkkgbG92ZSBteSBzaXN0ZXIiLCJKZSBu4oCZYWltZSBwYXMgbW9uIGZyw6hyZSI6IkkgZG9u4oCZdCBsaWtlIG15IGJyb3RoZXIiLCJKZSBu4oCZYWltZSBwYXMgbWEgc8WTdXIiOiJJIGRvbuKAmXQgbGlrZSBteSBzaXN0ZXIiLCJub25lIjoiTm9uZSIsIk90aGVyIjoiT3RoZXIgKHR5cGUgYmVsb3cpIiwidW4gY2hpZW4iOiJhIGRvZyIsInVuIGNoYXQiOiJhIGNhdCIsInVuIGxhcGluIjoiYSByYWJiaXQiLCJ1biBoYW1zdGVyIjoiYSBoYW1zdGVyIiwidW5lIHNvdXJpcyI6ImEgbW91c2UiLCJ1bmUgZ3Jlbm91aWxsZSI6ImEgZnJvZyIsInVuIHNlcnBlbnQiOiJhIHNuYWtlIiwidW4gcGVycm9xdWV0IjoiYSBwYXJyb3QiLCJ1biBvaXNlYXUiOiJhIGJpcmQiLCJ1biBjaGV2YWwiOiJhIGhvcnNlIiwidW4gcG9pc3NvbiI6ImEgZmlzaCIsInVuIGzDqXphcmQiOiJhIGxpemFyZCIsInVuZSB0b3J0dWUiOiJhIHRvcnRvaXNlIiwidW4gY2FuYXJkIjoiYSBkdWNrIiwidW4gZnLDqHJlIjoiYSBicm90aGVyIiwidW5lIHPFk3VyIjoiYSBzaXN0ZXIiLCJFc3RveSBtdXkgYmllbiI6IknigJltIHZlcnkgd2VsbCIsIkVzdG95IGJpZW4iOiJJ4oCZbSB3ZWxsIiwiRXN0b3kgcmVndWxhciI6IknigJltIE9LIiwiRXN0b3kgbWFsIjoiSeKAmW0gbm90IHdlbGwiLCJFc3RveSBmYXRhbCI6IknigJltIHRlcnJpYmxlIiwiVGVuZ28gaGFtYnJlIjoiSeKAmW0gaHVuZ3J5IiwiVGVuZ28gc2VkIjoiSeKAmW0gdGhpcnN0eSIsIkVzdG95IGNhbnNhZG8iOiJJ4oCZbSB0aXJlZCAoYm95KSIsIkVzdG95IGNhbnNhZGEiOiJJ4oCZbSB0aXJlZCAoZ2lybCkiLCJFc3RveSBjb250ZW50byI6IknigJltIGhhcHB5IChib3kpIiwiRXN0b3kgY29udGVudGEiOiJJ4oCZbSBoYXBweSAoZ2lybCkiLCJ5IjoiYW5kIiwicGVybyI6ImJ1dCIsImxhcyBCZXJtdWRhcyI6IkJlcm11ZGEiLCJDYW5hZMOhIjoiQ2FuYWRhIiwiSW5nbGF0ZXJyYSI6IkVuZ2xhbmQiLCJFc3Bhw7FhIjoiU3BhaW4iLCJFc3RhZG9zIFVuaWRvcyI6IlVuaXRlZCBTdGF0ZXMiLCJlbmVybyI6IkphbnVhcnkiLCJmZWJyZXJvIjoiRmVicnVhcnkiLCJtYXJ6byI6Ik1hcmNoIiwiYWJyaWwiOiJBcHJpbCIsIm1heW8iOiJNYXkiLCJqdW5pbyI6Ikp1bmUiLCJqdWxpbyI6Ikp1bHkiLCJhZ29zdG8iOiJBdWd1c3QiLCJzZXB0aWVtYnJlIjoiU2VwdGVtYmVyIiwib2N0dWJyZSI6Ik9jdG9iZXIiLCJub3ZpZW1icmUiOiJOb3ZlbWJlciIsImRpY2llbWJyZSI6IkRlY2VtYmVyIiwidW4gcGVycm8iOiJhIGRvZyIsInVuIGdhdG8iOiJhIGNhdCIsInVuIHBleiI6ImEgZmlzaCIsInVuIGNvbmVqbyI6ImEgcmFiYml0IiwidW4gcGVyaXF1aXRvIjoiYSBidWRnaWUiLCJ1biByYXTDs24iOiJhIG1vdXNlIiwidW4gcGF0byI6ImEgZHVjayIsInVuIGNhYmFsbG8iOiJhIGhvcnNlIiwidW5hIHRvcnR1Z2EiOiJhIHRvcnRvaXNlIiwibmluZ8O6biBhbmltYWwiOiJubyBwZXQiLCJuZWdybyI6ImJsYWNrIiwibmVncm9zIjoiYmxhY2siLCJydWJpbyI6ImJsb25kIiwicnViaW9zIjoiYmxvbmQiLCJjYXN0YcOxbyI6ImJyb3duIiwiY2FzdGHDsW9zIjoiYnJvd24iLCJyb3V4IjoicmVkIiwibm9pcnMiOiJibGFjayIsImJsb25kcyI6ImJsb25kIiwidmVydHMiOiJncmVlbiIsImJsZXVzIjoiYmx1ZSIsImdyaXMiOiJncmV5IiwidmVyZGVzIjoiZ3JlZW4iLCJhenVsZXMiOiJibHVlIiwibWFycm9uZXMiOiJicm93biIsIm11eSI6InZlcnkiLCJiYXN0YW50ZSI6InF1aXRlIiwiZGVtYXNpYWRvIjoidG9vIiwic2llbXByZSI6ImFsd2F5cyIsImEgdmVjZXMiOiJzb21ldGltZXMiLCJxdWVscXVlZm9pcyI6InNvbWV0aW1lcyIsInRvdWpvdXJzIjoiYWx3YXlzIiwiZmFjaWxlIjoiZWFzeSIsImRpZmZpY2lsZSI6ImRpZmZpY3VsdCIsImludMOpcmVzc2FudCI6ImludGVyZXN0aW5nIiwiaW50w6lyZXNzYW50ZSI6ImludGVyZXN0aW5nIiwiZW5udXlldXgiOiJib3JpbmciLCJlbm51eWV1c2UiOiJib3JpbmciLCJhYnVycmlkbyI6ImJvcmluZyIsImFidXJyaWRhIjoiYm9yaW5nIiwiaW50ZXJlc2FudGUiOiJpbnRlcmVzdGluZyIsImRpZsOtY2lsIjoiZGlmZmljdWx0IiwiZsOhY2lsIjoiZWFzeSIsImRpdmVydGlkbyI6ImZ1biIsImRpdmVydGlkYSI6ImZ1biIsImltcG9ydGFudGUiOiJpbXBvcnRhbnQiLCLDunRpbCI6InVzZWZ1bCIsImluw7p0aWwiOiJ1c2VsZXNzIiwiZW1vY2lvbmFudGUiOiJleGNpdGluZyIsInJlbGFqYW50ZSI6InJlbGF4aW5nIiwiYWdvdGFkb3IiOiJleGhhdXN0aW5nIiwiZXN0cmVzYW50ZSI6InN0cmVzc2Z1bCIsIm5lY2VzYXJpbyI6Im5lY2Vzc2FyeSIsImV4aWdlbnRlIjoiZGVtYW5kaW5nIiwiY3JlYXRpdm8iOiJjcmVhdGl2ZSIsImFjdGl2YSI6ImFjdGl2ZSIsImVuw6lyZ2ljbyI6ImVuZXJnZXRpYyIsImxlcyBtYXRocyI6Im1hdGhzIiwibGVzIG1hdGjDqW1hdGlxdWVzIjoibWF0aHMiLCJsYSBtdXNpcXVlIjoibXVzaWMiLCJsZSBmcmFuw6dhaXMiOiJGcmVuY2giLCJs4oCZYW5nbGFpcyI6IkVuZ2xpc2giLCJs4oCZZXNwYWdub2wiOiJTcGFuaXNoIiwibGEgZ8Opb2dyYXBoaWUiOiJnZW9ncmFwaHkiLCJs4oCZaGlzdG9pcmUiOiJoaXN0b3J5IiwibGVzIHNjaWVuY2VzIjoic2NpZW5jZSIsImxhIHRlY2hub2xvZ2llIjoidGVjaG5vbG9neSIsImzigJlFUFMiOiJQRSIsImVsIGVzcGHDsW9sIjoiU3BhbmlzaCIsImVsIGluZ2zDqXMiOiJFbmdsaXNoIiwibGFzIG1hdGVtw6F0aWNhcyI6Im1hdGhzIiwibGEgZ2VvZ3JhZsOtYSI6Imdlb2dyYXBoeSIsImxhIGhpc3RvcmlhIjoiaGlzdG9yeSIsImxhIG3DunNpY2EiOiJtdXNpYyIsImVsIHRlYXRybyI6ImRyYW1hIiwibGFzIGNpZW5jaWFzIjoic2NpZW5jZSJ9O09iamVjdC5hc3NpZ24oRU5HTElTSF9PUFRJT05TLHsiw4dhIHZhIGJpZW4iOiAiSSBhbSB3ZWxsIiwgIsOHYSB2YSB0csOocyBtYWwiOiAiSSBhbSB2ZXJ5IHVud2VsbCIsICJicnVucyI6ICJicm93biIsICJjaMOidGFpbnMiOiAiYnJvd24iLCAibWFycm9uIjogImJyb3duIiwgImdyaXNlcyI6ICJncmV5IiwgImdyYW5kIjogInRhbGwiLCAiZ3JhbmRlIjogInRhbGwiLCAicGV0aXQiOiAic2hvcnQiLCAicGV0aXRlIjogInNob3J0IiwgImRlIHRhaWxsZSBtb3llbm5lIjogIm9mIGF2ZXJhZ2UgaGVpZ2h0IiwgImFsdG8iOiAidGFsbCIsICJhbHRhIjogInRhbGwiLCAiYmFqbyI6ICJzaG9ydCIsICJiYWphIjogInNob3J0IiwgImRlIGVzdGF0dXJhIG1lZGlhbmEiOiAib2YgYXZlcmFnZSBoZWlnaHQiLCAicGVsaXJyb2pvIjogInJlZCIsICJsYXJnbyB5IGNhc3Rhw7FvIjogImxvbmcgYW5kIGJyb3duIiwgImNvcnRvIHkgbmVncm8iOiAic2hvcnQgYW5kIGJsYWNrIiwgInN5bXBhdGhpcXVlIjogIm5pY2UiLCAidGltaWRlIjogInNoeSIsICJkcsO0bGUiOiAiZnVubnkiLCAic3BvcnRpZiI6ICJzcG9ydHkiLCAic3BvcnRpdmUiOiAic3BvcnR5IiwgImdlbnRpbCI6ICJraW5kIiwgImdlbnRpbGxlIjogImtpbmQiLCAidHJhdmFpbGxldXIiOiAiaGFyZC13b3JraW5nIiwgInRyYXZhaWxsZXVzZSI6ICJoYXJkLXdvcmtpbmciLCAic2ltcMOhdGljbyI6ICJuaWNlIiwgInNpbXDDoXRpY2EiOiAibmljZSIsICJ0cmFucXVpbG8iOiAiY2FsbSIsICJ0cmFucXVpbGEiOiAiY2FsbSIsICJ0w61taWRvIjogInNoeSIsICJ0w61taWRhIjogInNoeSIsICJob3JyaWJsZSI6ICJob3JyaWJsZSIsICJmYXRpZ2FudCI6ICJ0aXJpbmciLCAiY29tcGxpcXXDqSI6ICJjb21wbGljYXRlZCIsICJ1dGlsZSI6ICJ1c2VmdWwiLCAiYWdvdGFkb3JhIjogImV4aGF1c3RpbmciLCAibOKAmWluZm9ybWF0aXF1ZSI6ICJjb21wdXRpbmciLCAibGUgZGVzc2luIjogImFydCIsICJsZSBzcG9ydCI6ICJQRSIsICJs4oCZw6lkdWNhdGlvbiByZWxpZ2lldXNlIjogInJlbGlnaW91cyBlZHVjYXRpb24iLCAibGEgaW5mb3Jtw6F0aWNhIjogImNvbXB1dGluZyIsICJlbCBkaWJ1am8iOiAiYXJ0IiwgImxhcyBjaWVuY2lhcyBuYXR1cmFsZXMiOiAic2NpZW5jZSIsICJsYSBlZHVjYWNpw7NuIGbDrXNpY2EiOiAiUEUiLCAibGEgcmVsaWdpw7NuIjogInJlbGlnaW91cyBlZHVjYXRpb24iLCAidW4gZnVyZXQiOiAiYSBmZXJyZXQiLCAidW4gY29iYXllIjogImEgZ3VpbmVhIHBpZyIsICJ1biBsaXZyZSI6ICJhIGJvb2siLCAidW5lIHRyb3Vzc2UiOiAiYSBwZW5jaWwgY2FzZSIsICJ1biBjYWhpZXIiOiAiYW4gZXhlcmNpc2UgYm9vayIsICJ1biBvcmRpbmF0ZXVyIjogImEgY29tcHV0ZXIiLCAidW4gc3R5bG8iOiAiYSBwZW4iLCAidW4gY3JheW9uIjogImEgcGVuY2lsIiwgInVuZSByw6hnbGUiOiAiYSBydWxlciIsICJ1bmUgZ29tbWUiOiAiYSBydWJiZXIiLCAidW5lIGNhbGN1bGF0cmljZSI6ICJhIGNhbGN1bGF0b3IiLCAiam91ZXIgYXUgZm9vdCI6ICJwbGF5IGZvb3RiYWxsIiwgImpvdWVyIGF1IHJ1Z2J5IjogInBsYXkgcnVnYnkiLCAiam91ZXIgYXUgZ29sZiI6ICJwbGF5IGdvbGYiLCAiam91ZXIgYXUgYmFkbWludG9uIjogInBsYXkgYmFkbWludG9uIiwgImpvdWVyIGF1IHZvbGxleSI6ICJwbGF5IHZvbGxleWJhbGwiLCAiZmFpcmUgZHUgdsOpbG8iOiAicmlkZSBhIGJpa2UiLCAiZmFpcmUgZHUgVlRUIjogImdvIG1vdW50YWluIGJpa2luZyIsICJmYWlyZSBkZSBsYSBkYW5zZSI6ICJkYW5jZSIsICJmYWlyZSBkZSBsYSB2b2lsZSI6ICJnbyBzYWlsaW5nIiwgImZhaXJlIGRlIGxhIGd5bW5hc3RpcXVlIjogImRvIGd5bW5hc3RpY3MiLCAiam91ZXIgYXV4IGpldXggdmlkw6lvIjogInBsYXkgdmlkZW8gZ2FtZXMiLCAic3VyZmVyIHN1ciBJbnRlcm5ldCI6ICJzdXJmIHRoZSBJbnRlcm5ldCIsICJmYWlyZSBkdSBzaG9wcGluZyI6ICJnbyBzaG9wcGluZyIsICJzZSBiYWxhZGVyIGVuIHZpbGxlIjogIndhbGsgYXJvdW5kIHRvd24iLCAicmVnYXJkZXIgdW4gZmlsbSI6ICJ3YXRjaCBhIGZpbG0iLCAidm9pciBtZXMgYW1pcyI6ICJzZWUgbXkgZnJpZW5kcyIsICJTw60sIG1lIGd1c3RhIG11Y2hvIGVsIGVzcGHDsW9sIjogIlllcywgSSBsaWtlIFNwYW5pc2ggYSBsb3QiLCAiU8OtLCBtZSBndXN0YSBlbCBlc3Bhw7FvbCI6ICJZZXMsIEkgbGlrZSBTcGFuaXNoIiwgIk5vIG1lIGd1c3RhIGVsIGVzcGHDsW9sIjogIkkgZG8gbm90IGxpa2UgU3BhbmlzaCIsICJObyBtZSBndXN0YSBuYWRhIGVsIGVzcGHDsW9sIjogIkkgZG8gbm90IGxpa2UgU3BhbmlzaCBhdCBhbGwiLCAiTWUgZW5jYW50YSBlbCBlc3Bhw7FvbCI6ICJJIGxvdmUgU3BhbmlzaCIsICJEZXRlc3RvIGVsIGVzcGHDsW9sIjogIkkgaGF0ZSBTcGFuaXNoIiwgImVuIEVzcGFnbmUiOiAiaW4gU3BhaW4iLCAiTcOpeGljbyI6ICJNZXhpY28iLCAiSuKAmWFpIHRyb2lzIGZyw6hyZXMiOiAiSSBoYXZlIHRocmVlIGJyb3RoZXJzIiwgIlRlbmdvIHRyZXMgaGVybWFub3MiOiAiSSBoYXZlIHRocmVlIGJyb3RoZXJzIiwgIkrigJlhaW1lIG1hIGZhbWlsbGUiOiAiSSBsaWtlIG15IGZhbWlseSJ9KTsKT2JqZWN0LmFzc2lnbihFTkdMSVNIX09QVElPTlMseyJ1biBwb2NvIjoiYSBsaXR0bGUiLCJkdSBzcG9ydCI6InNwb3J0IiwiZGUgbGEgbXVzaXF1ZSI6Im11c2ljIiwiZHUgZGVzc2luIjoiYXJ0IiwiZGVzIG1hdGhzIjoibWF0aHMiLCJkZSBs4oCZYW5nbGFpcyI6IkVuZ2xpc2giLCJkZSBs4oCZaGlzdG9pcmUiOiJoaXN0b3J5In0pO2Z1bmN0aW9uIG9yZGluYWxEYXkodil7bGV0IG49TnVtYmVyKHYpO3JldHVybiBuKygobiUxMDA+PTExJiZuJTEwMDw9MTMpPyd0aCc6KHsxOidzdCcsMjonbmQnLDM6J3JkJ31bbiUxMF18fCd0aCcpKX0KZnVuY3Rpb24gdHJhbnNsYXRpb24odmFsdWUpe3JldHVybiAoRU5HTElTSF9PUFRJT05TW3ZhbHVlXXx8dmFsdWUpLnJlcGxhY2UoLyBcKCg/OmJveXxnaXJsKVwpL2csJycpfQpmdW5jdGlvbiBzZWxlY3RlZEVuZ2xpc2goa2V5KXtsZXQgdmFsdWU9ZFtrZXldO2lmKHZhbHVlPT09J090aGVyJyl7bGV0IHJhdz1bJ2NvdW50cnknLCdzaWJsaW5ncycsJ3BldCddLmluY2x1ZGVzKGtleSk/ZFtrZXkrJ090aGVyJ106ZFtrZXkrJ0N1c3RvbSddO3JldHVybiBkW2tleSsnRW5nbGlzaCddfHx0cmFuc2xhdGlvbihyYXd8fCfigKYnKX1yZXR1cm4gdHJhbnNsYXRpb24odmFsdWV8fCcnKX0KZnVuY3Rpb24gYWN0aXZpdHlFbmdsaXNoKGtleSl7Y29uc3QgcGhyYXNlPXNlbGVjdGVkRW5nbGlzaChrZXkpO3JldHVybiBwaHJhc2UucmVwbGFjZSgvXnBsYXkgLywncGxheWluZyAnKS5yZXBsYWNlKC9ecmlkZSAvLCdyaWRpbmcgJykucmVwbGFjZSgvXmdvIC8sJ2dvaW5nICcpLnJlcGxhY2UoL15kbyAvLCdkb2luZyAnKS5yZXBsYWNlKC9eZGFuY2UkLywnZGFuY2luZycpLnJlcGxhY2UoL15zdXJmIC8sJ3N1cmZpbmcgJykucmVwbGFjZSgvXndhbGsgLywnd2Fsa2luZyAnKS5yZXBsYWNlKC9ed2F0Y2ggLywnd2F0Y2hpbmcgJykucmVwbGFjZSgvXnNlZSAvLCdzZWVpbmcgJyl9CmNvbnN0IGZyZW5jaE9wdGlvbkxhYmVscyA9IHsKICBPdGhlcjogJ0F1dHJlIOKAlCDDoCBwcsOpY2lzZXInLAogICdvbmUgYnJvdGhlcic6ICd1biBmcsOocmUnLAogICdvbmUgc2lzdGVyJzogJ3VuZSBzxZN1cicsCiAgJ29uZSBicm90aGVyIGFuZCBvbmUgc2lzdGVyJzogJ3VuIGZyw6hyZSBldCB1bmUgc8WTdXInLAogICd0d28gYnJvdGhlcnMnOiAnZGV1eCBmcsOocmVzJywKICAndHdvIHNpc3RlcnMnOiAnZGV1eCBzxZN1cnMnLAp9OwpmdW5jdGlvbiBmcmVuY2hPcHRpb24oa2V5LCB2YWx1ZSkgewogIGlmIChZOSAmJiB2YWx1ZSAhPT0gJ090aGVyJykgcmV0dXJuIHZhbHVlIHx8ICfigJQnOwogIGlmICh2YWx1ZSA9PT0gJ25vbmUnKSByZXR1cm4ga2V5ID09PSAncGV0JyA/ICdhdWN1biBhbmltYWwnIDogJ25pIGZyw6hyZSBuaSBzxZN1cic7CiAgcmV0dXJuIGZyZW5jaE9wdGlvbkxhYmVsc1t2YWx1ZV0gPz8gdmFsdWU7Cn0KZnVuY3Rpb24gZmllbGQoZil7bGV0IFtrZXksbGFiZWwsdHlwZSxjaG9pY2VzXT1mLCB2YWx1ZT1kW2tleV18fCcnO2lmKHR5cGU9PT0nY2hlY2tsaXN0JylyZXR1cm4gWTkuZmFtaWx5Q2hlY2tsaXN0KGxhYmVsLGQsZXNjKTtpZih0eXBlPT09J3NlbGVjdCcpe2xldCBvdGhlcktleT1bJ2NvdW50cnknLCdzaWJsaW5ncycsJ3BldCddLmluY2x1ZGVzKGtleSk/a2V5KydPdGhlcic6a2V5KydDdXN0b20nO2xldCBvdGhlcj1jaG9pY2VzLnNwbGl0KCd8JykuaW5jbHVkZXMoJ090aGVyJyk7cmV0dXJuIGA8bGFiZWw+JHtlc2MobGFiZWwpfTxzZWxlY3QgbGFuZz0iZnIiIGRhdGEtZmllbGQ9IiR7a2V5fSI+JHtjaG9pY2VzLnNwbGl0KCd8JykubWFwKGM9PmA8b3B0aW9uIHZhbHVlPSIke2VzYyhjKX0iICR7Yz09PXZhbHVlPydzZWxlY3RlZCc6Jyd9PiR7ZXNjKGZyZW5jaE9wdGlvbihrZXksYykpfTwvb3B0aW9uPmApLmpvaW4oJycpfTwvc2VsZWN0PiR7b3RoZXImJnZhbHVlPT09J090aGVyJyYmIVsnY291bnRyeScsJ3NpYmxpbmdzJywncGV0J10uaW5jbHVkZXMoa2V5KT9gPGlucHV0IGRhdGEtZmllbGQ9IiR7b3RoZXJLZXl9IiBwbGFjZWhvbGRlcj0iJHtZOSA/ICdUeXBlIHlvdXIgYW5zd2VyIGluIEZyZW5jaCcgOiAnVHlwZSB5b3VyIG93biBhbnN3ZXIgaW4gdGhlIHRhcmdldCBsYW5ndWFnZSd9IiBhcmlhLWxhYmVsPSIke2VzYyhsYWJlbCl9IOKAlCBGcmVuY2giIHZhbHVlPSIke2VzYyhkW290aGVyS2V5XXx8JycpfSI+JHtbJ3Rvd24nLCdub3RUb3duJ10uaW5jbHVkZXMoa2V5KT8nJzpgPGlucHV0IGRhdGEtZmllbGQ9IiR7a2V5fUVuZ2xpc2giIHBsYWNlaG9sZGVyPSJFbmdsaXNoIHRyYW5zbGF0aW9uIiBhcmlhLWxhYmVsPSIke2VzYyhsYWJlbCl9IOKAlCBFbmdsaXNoIHRyYW5zbGF0aW9uIiB2YWx1ZT0iJHtlc2MoZFtrZXkrJ0VuZ2xpc2gnXXx8JycpfSI+YH1gOicnfTwvbGFiZWw+YH1pZihbJ2NvdW50cnlPdGhlcicsJ3NpYmxpbmdzT3RoZXInLCdwZXRPdGhlciddLmluY2x1ZGVzKGtleSkmJmRba2V5LnJlcGxhY2UoJ090aGVyJywnJyldIT09J090aGVyJylyZXR1cm4gJyc7cmV0dXJuIGA8bGFiZWw+JHtlc2MobGFiZWwpfTxpbnB1dCBkYXRhLWZpZWxkPSIke2tleX0iIHR5cGU9IiR7dHlwZX0iIHZhbHVlPSIke2VzYyh2YWx1ZSl9IiAke3R5cGU9PT0nbnVtYmVyJz8nbWluPSIwIiBtYXg9Ijk5Iic6Jyd9PiR7Wydjb3VudHJ5T3RoZXInLCdzaWJsaW5nc090aGVyJywncGV0T3RoZXInXS5pbmNsdWRlcyhrZXkpP2A8aW5wdXQgZGF0YS1maWVsZD0iJHtrZXkucmVwbGFjZSgnT3RoZXInLCdFbmdsaXNoJyl9IiBwbGFjZWhvbGRlcj0iRW5nbGlzaCB0cmFuc2xhdGlvbiIgYXJpYS1sYWJlbD0iJHtlc2MobGFiZWwpfSDigJQgRW5nbGlzaCB0cmFuc2xhdGlvbiIgdmFsdWU9IiR7ZXNjKGRba2V5LnJlcGxhY2UoJ090aGVyJywnRW5nbGlzaCcpXXx8JycpfSI+YDonJ308L2xhYmVsPmB9ZnVuY3Rpb24gYnV0dG9uKHQsYWN0aW9uKXtyZXR1cm4gYDxidXR0b24gY2xhc3M9ImJ0biIgZGF0YS1hY3Rpb249IiR7YWN0aW9ufSI+JHt0fTwvYnV0dG9uPmB9ZnVuY3Rpb24gcHJlcGFyZUZpZWxkcygpIHsKICBpZiAoIVk5KSByZXR1cm4gYDxkaXYgY2xhc3M9ImZvcm1ncmlkIj4ke0ZJRUxEUy5tYXAoZmllbGQpLmpvaW4oJycpfTwvZGl2PmA7CiAgcmV0dXJuIFk5Lmdyb3Vwcy5tYXAoKHtxdWVzdGlvbixmaWVsZHN9LCBpKSA9PiBgCiAgICA8ZmllbGRzZXQgY2xhc3M9InJldmlzaW9uLWdyb3VwIj4KICAgICAgPGxlZ2VuZCBsYW5nPSJmciI+JHtpICsgMX0uICR7ZXNjKHF1ZXN0aW9uKX08L2xlZ2VuZD4KICAgICAgPGRpdiBjbGFzcz0iZm9ybWdyaWQiPiR7ZmllbGRzLm1hcChmaWVsZCkuam9pbignJyl9PC9kaXY+CiAgICA8L2ZpZWxkc2V0PmApLmpvaW4oJycpOwp9CmZ1bmN0aW9uIHJlbmRlcigpe2xldCBxPW1vZGU9PT0ncmFuZG9tJz8ocmFuZG9tT3JkZXJbcmldPz8wKTpxaSxhPWdldChxKSxwYXJ0PWFbTWF0aC5taW4oY2ksYS5sZW5ndGgtMSldLHdob2xlPWNpPj1hLmxlbmd0aDtsZXQgbmF2PWA8YXNpZGUgY2xhc3M9InFuYXYiIGFyaWEtbGFiZWw9IlF1ZXN0aW9ucyI+JHtRVUVTVElPTlMubWFwKChzLGkpPT5gPGJ1dHRvbiBjbGFzcz0iJHtxPT09aT8nc2VsZWN0ZWQnOicnfSIgZGF0YS1xdWVzdGlvbj0iJHtpfSI+JHtpKzF9LiAke2VzYyhzKX08L2J1dHRvbj5gKS5qb2luKCcnKX08L2FzaWRlPmA7bGV0IGNvbnRlbnQ9Jyc7aWYobW9kZT09PSdwcmVwYXJlJyl7Y29udGVudD1gPGgyPjEgwrcgUHJlcGFyZSB5b3VyIGFuc3dlcnM8L2gyPjxwIGNsYXNzPSJtdXRlZCI+RW50ZXIgeW91ciBkZXRhaWxzIGFuZCBjaG9vc2UgZnJvbSB0aGUgRnJlbmNoIG9wdGlvbnMuPC9wPiR7cHJlcGFyZUZpZWxkcygpfTxkaXYgY2xhc3M9ImFjdGlvbnMiPjxidXR0b24gY2xhc3M9ImJ0biIgZGF0YS1tb2RlPSJyZXBlYXQiPlN0YXJ0IFJlcGVhdCDihpI8L2J1dHRvbj48L2Rpdj5gfWVsc2UgaWYobW9kZT09PSdyZXBlYXQnKXtjb250ZW50PWAke25hdn08ZGl2IGNsYXNzPSJwYW5lbCI+PGgyPiR7ZXNjKFFVRVNUSU9OU1txXSl9PC9oMj48cCBjbGFzcz0ibXV0ZWQiPkxpc3RlbiB0byBlYWNoIHNob3J0IGNodW5rIHR3aWNlLCByZXBlYXQgaXQgYWxvdWQsIHRoZW4gam9pbiB0aGUgY2h1bmtzLjwvcD48ZGl2IGNsYXNzPSJwcm9tcHQiPiR7d2hvbGU/J0Z1bGwgYW5zd2VyJzpgQ2h1bmsgJHtjaSsxfSBvZiAke2EubGVuZ3RofWB9PC9kaXY+PGRpdiBjbGFzcz0iZm9jdXMiPiR7ZXNjKHdob2xlP2Fuc3dlcihxKTpwYXJ0LmZyKX08L2Rpdj48ZGl2IGNsYXNzPSJhY3Rpb25zIj4ke2J1dHRvbign4pa2IEhlYXIgc2xvd2x5IHR3aWNlJywncmVwZWF0OicrcSsnOicrY2kpfSR7YnV0dG9uKCfihpAgUHJldmlvdXMnLCdwcmV2Jyl9JHtidXR0b24od2hvbGU/J1N0YXJ0IGFnYWluJzonTmV4dCBjaHVuayDihpInLCduZXh0Jyl9PC9kaXY+PC9kaXY+YH1lbHNlIGlmKG1vZGU9PT0nZ3VpZGVkJyl7bGV0IHRhcmdldD13aG9sZT9hbnN3ZXIocSk6cGFydC5mcjtsZXQgY2x1ZXM9W2BUaGluayBvZiB0aGUgZmlyc3QgRnJlbmNoIHdvcmQuYCxgRmlyc3QgbGV0dGVyOiAke3RhcmdldC5jaGFyQXQoMCl9YCxgRmlyc3Qgd29yZDogJHt0YXJnZXQuc3BsaXQoJyAnKVswXX1gLGBGcmVuY2g6ICR7dGFyZ2V0fWBdO2NvbnRlbnQ9YCR7bmF2fTxkaXYgY2xhc3M9InBhbmVsIj48aDI+JHtlc2MoUVVFU1RJT05TW3FdKX08L2gyPjxwIGNsYXNzPSJtdXRlZCI+U2F5IHRoZSBGcmVuY2ggYmVmb3JlIHJldmVhbGluZyBhIGhpbnQuIEJ1aWxkIHlvdXIgYW5zd2VyIG9uZSBzbWFsbCBjaHVuayBhdCBhIHRpbWUuPC9wPjxkaXYgY2xhc3M9InByb21wdCI+JHt3aG9sZT8nRmluYWwgY2hhbGxlbmdlIOKAlCBzYXkgeW91ciB3aG9sZSBhbnN3ZXInOmBTdGVwICR7Y2krMX0gb2YgJHthLmxlbmd0aH1gfTwvZGl2PjxkaXYgY2xhc3M9ImZvY3VzIj4ke2VzYyh3aG9sZT9nZXQocSkubWFwKGM9PmMuZW4pLmpvaW4oJyAnKTpwYXJ0LmVuKX08L2Rpdj4ke2NpPjAmJiF3aG9sZT9gPHAgY2xhc3M9Im11dGVkIj5Ob3cgam9pbiBpdCB0byB0aGUgcHJldmlvdXMgY2h1bmtzOiAke2VzYyhhLnNsaWNlKDAsY2krMSkubWFwKGM9PmMuZW4pLmpvaW4oJyArICcpKX08L3A+YDonJ30ke2hpP2A8ZGl2IGNsYXNzPSJoaW50Ij4ke2VzYyhjbHVlc1tNYXRoLm1pbihoaS0xLDMpXSl9PC9kaXY+YDonJ308ZGl2IGNsYXNzPSJhY3Rpb25zIj4ke2J1dHRvbignTmVlZCBoZWxwPycsJ2hpbnQnKX0ke2J1dHRvbign4pa2IExpc3RlbicsJ2xpc3RlbmNodW5rOicrcSsnOicrY2kpfSR7YnV0dG9uKCfihpAgUHJldmlvdXMnLCdwcmV2Jyl9JHtidXR0b24od2hvbGU/J1N0YXJ0IGFnYWluJzonTmV4dCBjaHVuayDihpInLCduZXh0Jyl9PC9kaXY+PC9kaXY+YH1lbHNle2NvbnRlbnQ9YCR7bW9kZT09PSdzb2xvJz9uYXY6Jyd9PGRpdiBjbGFzcz0icGFuZWwiPjxwIGNsYXNzPSJtdXRlZCI+JHttb2RlPT09J3JhbmRvbSc/YFJhbmRvbSBtb2NrIHRlc3Qg4oCUICR7cmkrMX0gb2YgJHtyYW5kb21PcmRlci5sZW5ndGh9YDonU29sbyBzcGVha2luZyBwcmFjdGljZSd9PC9wPjxoMj4ke2VzYyhRVUVTVElPTlNbcV0pfTwvaDI+PHA+U2F5IHlvdXIgZnVsbCBhbnN3ZXIgd2l0aG91dCBsb29raW5nIGF0IHlvdXIgbm90ZXMuPC9wPjxkaXYgY2xhc3M9ImFjdGlvbnMiPiR7YnV0dG9uKCfilrYgSGVhciB0aGUgcXVlc3Rpb24nLCdxdWVzdGlvbjonK3EpfSR7YnV0dG9uKCdTaG93IG15IGFuc3dlcicsJ3JldmVhbCcpfSR7YnV0dG9uKCfilrYgTW9kZWwgYW5zd2VyJywnbGlzdGVuOicrcSl9PC9kaXY+PGRpdiBjbGFzcz0iYW5zd2VyIGhpZGRlbiIgaWQ9InJldmVhbCI+JHtlc2MoYW5zd2VyKHEpKX08L2Rpdj48ZGl2IGNsYXNzPSJhY3Rpb25zIj4ke2J1dHRvbignTmV4dCBxdWVzdGlvbiDihpInLG1vZGU9PT0ncmFuZG9tJz8nbmV4dHJhbmRvbSc6J25leHRxdWVzdGlvbicpfTwvZGl2PjxwIGNsYXNzPSJtdXRlZCI+U2VsZi1wcmFjdGljZSBvbmx5OiBwcm9udW5jaWF0aW9uIGlzIG5vdCBhdXRvbWF0aWNhbGx5IGFzc2Vzc2VkLjwvcD48L2Rpdj5gfSAkKCdhcHAnKS5pbm5lckhUTUw9YDxuYXY+JHtbJ3ByZXBhcmUnLCdyZXBlYXQnLCdndWlkZWQnLCdzb2xvJywncmFuZG9tJ10ubWFwKG09PmA8YnV0dG9uIGNsYXNzPSIke209PT1tb2RlPydhY3RpdmUnOicnfSIgZGF0YS1tb2RlPSIke219Ij4ke21bMF0udG9VcHBlckNhc2UoKSttLnNsaWNlKDEpfTwvYnV0dG9uPmApLmpvaW4oJycpfTwvbmF2PjxtYWluIGNsYXNzPSIke1sncmVwZWF0JywnZ3VpZGVkJywnc29sbyddLmluY2x1ZGVzKG1vZGUpPydwcmFjdGljZS1sYXlvdXQnOicnfSI+JHtjb250ZW50fTwvbWFpbj5gO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGVdJykuZm9yRWFjaChlPT5lLm9uY2xpY2s9KCk9Pnttb2RlPWUuZGF0YXNldC5tb2RlO2NpPWhpPTA7aWYobW9kZT09PSdyYW5kb20nKXNodWZmbGUoKTtyZW5kZXIoKX0pO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpZWxkXScpLmZvckVhY2goZT0+ewogIGNvbnN0IGtleSA9IGUuZGF0YXNldC5maWVsZDsKICBpZiAoWTkgJiYgZS50YWdOYW1lID09PSAnSU5QVVQnKSB7CiAgICBlLm9uaW5wdXQgPSAoKSA9PiB7IGRba2V5XSA9IGUudmFsdWU7IHNhdmUoKTsgfTsKICB9CiAgZS5vbmNoYW5nZSA9ICgpID0+IHsKICAgIGNvbnN0IHByZXZpb3VzID0gZFtrZXldOwogICAgZFtrZXldID0gZS52YWx1ZTsKICAgIHNhdmUoKTsKICAgIGlmICghWTkgfHwgcHJldmlvdXMgPT09ICdPdGhlcicgfHwgZS52YWx1ZSA9PT0gJ090aGVyJykgcmVuZGVyKCk7CiAgfTsKfSk7CmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZhbWlseS1wZXJzb25dJykuZm9yRWFjaChlPT5lLm9uY2hhbmdlPSgpPT57CiAgZC5mYW1pbHlQZW9wbGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZhbWlseS1wZXJzb25dOmNoZWNrZWQnKSwgYm94ID0+IGJveC52YWx1ZSk7CiAgc2F2ZSgpOwp9KTsKZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcXVlc3Rpb25dJykuZm9yRWFjaChlPT5lLm9uY2xpY2s9KCk9PntxaT0rZS5kYXRhc2V0LnF1ZXN0aW9uO2NpPWhpPTA7cmVuZGVyKCl9KTtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY3Rpb25dJykuZm9yRWFjaChlPT5lLm9uY2xpY2s9KCk9PntsZXQgW2FjdCx4LHldPWUuZGF0YXNldC5hY3Rpb24uc3BsaXQoJzonKTtpZihhY3Q9PT0nbGlzdGVuJylzcGVlY2goYW5zd2VyKCt4KSk7aWYoYWN0PT09J3F1ZXN0aW9uJylzcGVlY2goUVVFU1RJT05TWyt4XSk7aWYoYWN0PT09J3JlcGVhdCcpc3BlZWNoKCt5Pj1nZXQoK3gpLmxlbmd0aD9hbnN3ZXIoK3gpOmdldCgreClbK3ldLmZyLHRydWUpO2lmKGFjdD09PSdsaXN0ZW5jaHVuaycpc3BlZWNoKCt5Pj1nZXQoK3gpLmxlbmd0aD9hbnN3ZXIoK3gpOmdldCgreClbK3ldLmZyKTtpZihhY3Q9PT0ncHJldicpe2NpPU1hdGgubWF4KDAsY2ktMSk7aGk9MDtyZW5kZXIoKX1pZihhY3Q9PT0nbmV4dCcpe2NpPWNpPj1nZXQocSkubGVuZ3RoPzA6Y2krMTtoaT0wO3JlbmRlcigpfWlmKGFjdD09PSdoaW50Jyl7aGk9TWF0aC5taW4oNCxoaSsxKTtyZW5kZXIoKX1pZihhY3Q9PT0ncmV2ZWFsJykkKCdyZXZlYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtpZihhY3Q9PT0nbmV4dHF1ZXN0aW9uJyl7cWk9KHFpKzEpJVFVRVNUSU9OUy5sZW5ndGg7cmVuZGVyKCl9aWYoYWN0PT09J25leHRyYW5kb20nKXtyaSsrO2lmKHJpPj1yYW5kb21PcmRlci5sZW5ndGgpc2h1ZmZsZSgpO3JlbmRlcigpfX0pfWZ1bmN0aW9uIHNodWZmbGUoKXtyYW5kb21PcmRlcj1RVUVTVElPTlMubWFwKChfLGkpPT5pKTtmb3IobGV0IGk9cmFuZG9tT3JkZXIubGVuZ3RoLTE7aT4wO2ktLSl7bGV0IGo9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihpKzEpKTtbcmFuZG9tT3JkZXJbaV0scmFuZG9tT3JkZXJbal1dPVtyYW5kb21PcmRlcltqXSxyYW5kb21PcmRlcltpXV19cmk9MH1yZW5kZXIoKTs8L3NjcmlwdD48L2JvZHk+PC9odG1sPg==","s8":"PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj48aGVhZD48bWV0YSBjaGFyc2V0PSJ1dGYtOCIvPjxtZXRhIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiIG5hbWU9InZpZXdwb3J0Ii8+PHRpdGxlPlllYXIgOCBTcGFuaXNoIMK3IFJlcGFzbyBQcmVndW50YXMgQsOhc2ljYXM8L3RpdGxlPjxzdHlsZT46cm9vdHtmb250LWZhbWlseTpzeXN0ZW0tdWksU2Vnb2UgVUksc2Fucy1zZXJpZjtjb2xvcjojMTczMTRkO2JhY2tncm91bmQ6I2Y2ZjhmY31ib2R5e21hcmdpbjowfW5hdntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjdweDtwYWRkaW5nOjE0cHggMjBweDtiYWNrZ3JvdW5kOndoaXRlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkYWU0ZWZ9YnV0dG9ue2N1cnNvcjpwb2ludGVyO2ZvbnQ6aW5oZXJpdH1uYXYgYnV0dG9uLC5idG57Ym9yZGVyOjFweCBzb2xpZCAjYjljZmUwO2JhY2tncm91bmQ6d2hpdGU7Ym9yZGVyLXJhZGl1czoxMHB4O3BhZGRpbmc6MTBweCAxNHB4O2NvbG9yOiMxNzMxNGR9bmF2IGJ1dHRvbi5hY3RpdmUsLmJ0bjpob3ZlcntiYWNrZ3JvdW5kOiMxNzY4YTE7Y29sb3I6d2hpdGV9bWFpbntwYWRkaW5nOjIwcHg7bWFyZ2luOmF1dG99aDJ7Zm9udC1zaXplOjIxcHh9Lm11dGVke2NvbG9yOiM1YzcxODY7Zm9udC1zaXplOjE0cHh9LmFuc3dlciwucGFuZWwsZGV0YWlsc3tiYWNrZ3JvdW5kOndoaXRlO2JvcmRlcjoxcHggc29saWQgI2Q2ZTFlYztib3JkZXItcmFkaXVzOjE0cHg7cGFkZGluZzoxNnB4O21hcmdpbjoxMnB4IDB9LmFuc3dlciBwe2ZvbnQtc2l6ZToxOHB4O2NvbG9yOiMxNTVmOTN9LmFuc3dlciAuYnRue3BhZGRpbmc6NnB4IDEwcHg7Zm9udC1zaXplOjEzcHh9LmZvcm1ncmlke2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LG1pbm1heCgyMjBweCwxZnIpKTtnYXA6MTNweDttYXJnaW46MTVweCAwfS5mb3JtZ3JpZCBsYWJlbHtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo2NTA7ZGlzcGxheTpibG9ja30uZm9ybWdyaWQgaW5wdXQsLmZvcm1ncmlkIHNlbGVjdHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWFyZ2luLXRvcDo1cHg7cGFkZGluZzoxMHB4O2JvcmRlcjoxcHggc29saWQgI2M2ZDRlMjtib3JkZXItcmFkaXVzOjhweDtmb250OmluaGVyaXQ7YmFja2dyb3VuZDp3aGl0ZX0ucW5hdntkaXNwbGF5OmZsZXg7Z2FwOjZweDtvdmVyZmxvdy14OmF1dG87cGFkZGluZy1ib3R0b206MTJweH0ucW5hdiBidXR0b257bWluLXdpZHRoOjE0MHB4O3RleHQtYWxpZ246bGVmdDtwYWRkaW5nOjlweDtib3JkZXI6MXB4IHNvbGlkICNjY2Q5ZTU7Ym9yZGVyLXJhZGl1czo5cHg7YmFja2dyb3VuZDp3aGl0ZTtmb250LXNpemU6MTJweH0ucW5hdiAuc2VsZWN0ZWR7YmFja2dyb3VuZDojZGZlZmZjO2JvcmRlci1jb2xvcjojMjM3N2IxfS5mb2N1c3twYWRkaW5nOjI1cHg7YmFja2dyb3VuZDojZWFmM2ZiO2JvcmRlci1yYWRpdXM6MTNweDtmb250LXNpemU6MjRweDtmb250LXdlaWdodDo2NTA7bWFyZ2luOjE4cHggMH0ucHJvbXB0e2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM1ODczOGI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5hY3Rpb25ze2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6OXB4O21hcmdpbi10b3A6MTRweH0uaGludHtiYWNrZ3JvdW5kOiNmZmY0ZDg7Ym9yZGVyLXJhZGl1czo5cHg7cGFkZGluZzoxM3B4O21hcmdpbjoxMHB4IDB9LmhpZGRlbntkaXNwbGF5Om5vbmV9c3VtbWFyeXtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo3MDB9CiAgICAucHJhY3RpY2UtbGF5b3V0e2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KDE4MHB4LDFmcikgbWlubWF4KDAsMmZyKTthbGlnbi1pdGVtczpzdGFydDtnYXA6MTZweH0ucHJhY3RpY2UtbGF5b3V0Pi5wYW5lbHttaW4td2lkdGg6MH0ucW5hdntkaXNwbGF5OmdyaWQ7Z2FwOjhweDtvdmVyZmxvdzp2aXNpYmxlO3BhZGRpbmc6MDttaW4td2lkdGg6MDthbGlnbi1jb250ZW50OnN0YXJ0fS5xbmF2IGJ1dHRvbnt3aWR0aDoxMDAlO21pbi13aWR0aDowO3doaXRlLXNwYWNlOm5vcm1hbDtvdmVyZmxvdy13cmFwOmFueXdoZXJlO2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuNDtwYWRkaW5nOjEycHh9LnFuYXYgYnV0dG9uOmZvY3VzLXZpc2libGV7b3V0bGluZTozcHggc29saWQgIzIzNzdiMTtvdXRsaW5lLW9mZnNldDoycHh9QG1lZGlhKG1heC13aWR0aDo2MDBweCl7LnByYWN0aWNlLWxheW91dHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KDExMHB4LC44ZnIpIG1pbm1heCgwLDEuNGZyKTtnYXA6MTBweH0ucW5hdiBidXR0b257Zm9udC1zaXplOjEycHg7cGFkZGluZzo4cHh9LnByYWN0aWNlLWxheW91dD4ucGFuZWx7cGFkZGluZzoxMnB4fS5wcmFjdGljZS1sYXlvdXQgLmZvY3Vze292ZXJmbG93LXdyYXA6YW55d2hlcmV9fTwvc3R5bGU+PC9oZWFkPjxib2R5PjxkaXYgaWQ9ImFwcCI+PC9kaXY+PHNjcmlwdD5jb25zdCBRVUVTVElPTlM9WyLCv0PDs21vIHRlIGxsYW1hcz8iLCAiwr9Dw7NtbyBzZSBlc2NyaWJlPyIsICLCv0PDs21vIGVzdMOhcz8gLyDCv1F1w6kgdGFsPyIsICLCv0TDs25kZSB2aXZlcz8iLCAiwr9DdcOhbnRvcyBhw7FvcyB0aWVuZXM/IiwgIsK/Q3XDoW5kbyBlcyB0dSBjdW1wbGVhw7Fvcz8iLCAiwr9UaWVuZXMgaGVybWFub3M/IiwgIsK/VGllbmVzIGFuaW1hbGVzIGVuIGNhc2E/IiwgIsK/Q8OzbW8gZXJlcz8iLCAiwr9DdcOhbCBlcyB0dSBhc2lnbmF0dXJhIGZhdm9yaXRhPyIsICLCv1RlIGd1c3RhIGVsIGVzcGHDsW9sPyJdO2NvbnN0IEZJRUxEUz1bWyJmaXJzdCIsICJGaXJzdCBuYW1lIiwgInRleHQiLCAiQWxleCJdLCBbImZlZWxpbmciLCAiRmlyc3QgcmVzcG9uc2UiLCAic2VsZWN0IiwgIkVzdG95IG11eSBiaWVufEVzdG95IGJpZW58RXN0b3kgcmVndWxhcnxFc3RveSBtYWx8RXN0b3kgZmF0YWx8VGVuZ28gaGFtYnJlfFRlbmdvIHNlZHxFc3RveSBjYW5zYWRvfEVzdG95IGNhbnNhZGF8RXN0b3kgY29udGVudG98RXN0b3kgY29udGVudGEiXSwgWyJmZWVsaW5nSm9pbiIsICJDb25qdW5jdGlvbiIsICJzZWxlY3QiLCAieXxwZXJvIl0sIFsiZmVlbGluZzIiLCAiU2Vjb25kIHJlc3BvbnNlIiwgInNlbGVjdCIsICJUZW5nbyBoYW1icmV8VGVuZ28gc2VkfEVzdG95IGNhbnNhZG98RXN0b3kgY2Fuc2FkYXxFc3RveSBjb250ZW50b3xFc3RveSBjb250ZW50YXxFc3RveSBiaWVufEVzdG95IG1hbCJdLCBbInRvd24iLCAiVG93biAvIHBhcmlzaCIsICJzZWxlY3QiLCAiUGFnZXR8UGVtYnJva2V8SGFtaWx0b258V2Fyd2lja3xTb3V0aGFtcHRvbnxTYW5keXN8RGV2b25zaGlyZXxTbWl0aOKAmXN8SGFtaWx0b24gUGFyaXNofFN0IEdlb3JnZeKAmXN8T3RoZXIiXSwgWyJjb3VudHJ5IiwgIkNvdW50cnkgKFNwYW5pc2gpIiwgInNlbGVjdCIsICJsYXMgQmVybXVkYXN8Q2FuYWTDoXxJbmdsYXRlcnJhfEVzcGHDsWF8RXN0YWRvcyBVbmlkb3N8T3RoZXIiXSwgWyJjb3VudHJ5T3RoZXIiLCAiT3RoZXIgY291bnRyeSBpbiBTcGFuaXNoIiwgInRleHQiLCAiTcOpeGljbyJdLCBbImFnZSIsICJZb3VyIGFnZSIsICJzZWxlY3QiLCAiMTB8MTF8MTJ8MTN8MTR8MTV8MTZ8MTd8MTh8MTkiXSwgWyJvdGhlckFnZSIsICJBbm90aGVyIHBlcnNvbuKAmXMgYWdlIiwgIm51bWJlciIsICIxMiJdLCBbIm5leHRBZ2UiLCAiQWdlIGF0IG5leHQgYmlydGhkYXkiLCAic2VsZWN0IiwgIjExfDEyfDEzfDE0fDE1fDE2fDE3fDE4fDE5fDIwIl0sIFsibmV4dE1vbnRoIiwgIk1vbnRoIG9mIG5leHQgYmlydGhkYXkiLCAic2VsZWN0IiwgImVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmUiXSwgWyJiaXJ0aGRheURheSIsICJCaXJ0aGRheSBkYXkiLCAic2VsZWN0IiwgIjF8MnwzfDR8NXw2fDd8OHw5fDEwfDExfDEyfDEzfDE0fDE1fDE2fDE3fDE4fDE5fDIwfDIxfDIyfDIzfDI0fDI1fDI2fDI3fDI4fDI5fDMwfDMxIl0sIFsiYmlydGhkYXlNb250aCIsICJCaXJ0aGRheSBtb250aCIsICJzZWxlY3QiLCAiZW5lcm98ZmVicmVyb3xtYXJ6b3xhYnJpbHxtYXlvfGp1bmlvfGp1bGlvfGFnb3N0b3xzZXB0aWVtYnJlfG9jdHVicmV8bm92aWVtYnJlfGRpY2llbWJyZSJdLCBbInNpYmxpbmdzIiwgIkJyb3RoZXJzIGFuZCBzaXN0ZXJzIiwgInNlbGVjdCIsICJub25lfG9uZSBicm90aGVyfG9uZSBzaXN0ZXJ8b25lIGJyb3RoZXIgYW5kIG9uZSBzaXN0ZXJ8dHdvIGJyb3RoZXJzfHR3byBzaXN0ZXJzfE90aGVyIl0sIFsic2libGluZ3NPdGhlciIsICJPdGhlciBzaWJsaW5nIGRlc2NyaXB0aW9uIGluIFNwYW5pc2giLCAidGV4dCIsICJUZW5nbyB0cmVzIGhlcm1hbm9zIl0sIFsic2libGluZ05hbWUiLCAiU2libGluZ+KAmXMgbmFtZSIsICJ0ZXh0IiwgIlBhYmxvIl0sIFsic2libGluZ0FnZSIsICJTaWJsaW5n4oCZcyBhZ2UiLCAic2VsZWN0IiwgIjB8MXwyfDN8NHw1fDZ8N3w4fDl8MTB8MTF8MTJ8MTN8MTR8MTV8MTZ8MTd8MTh8MTl8MjAiXSwgWyJwZXQiLCAiUGV0IiwgInNlbGVjdCIsICJub25lfHVuIHBlcnJvfHVuIGdhdG98dW4gcGV6fHVuIGNvbmVqb3x1biBwZXJpcXVpdG98dW4gcmF0w7NufHVuIHBhdG98dW4gY2FiYWxsb3xPdGhlciJdLCBbInBldE90aGVyIiwgIk90aGVyIHBldCAoU3BhbmlzaCB3aXRoIGFydGljbGUpIiwgInRleHQiLCAidW5hIHRvcnR1Z2EiXSwgWyJwZXROYW1lIiwgIlBldOKAmXMgbmFtZSIsICJ0ZXh0IiwgIkx1bmEiXSwgWyJwZXRBZ2UiLCAiUGV04oCZcyBhZ2UiLCAic2VsZWN0IiwgIjB8MXwyfDN8NHw1fDZ8N3w4fDl8MTB8MTF8MTJ8MTN8MTR8MTV8MTZ8MTd8MTh8MTl8MjAiXSwgWyJwZXRXaXNoIiwgIlBldCB5b3Ugd291bGQgbGlrZSAoU3BhbmlzaCB3aXRoIGFydGljbGUpIiwgInNlbGVjdCIsICJ1biBwZXJyb3x1biBnYXRvfHVuIGNvbmVqb3x1biBwZXp8dW5hIHRvcnR1Z2F8dW4gY2FiYWxsb3xPdGhlciJdLCBbInBldFBhc3QiLCAiUGV0IHlvdSB1c2VkIHRvIGhhdmUgKFNwYW5pc2ggd2l0aCBhcnRpY2xlKSIsICJzZWxlY3QiLCAidW4gcGVycm98dW4gZ2F0b3x1biBjb25lam98dW4gcGV6fHVuYSB0b3J0dWdhfG5pbmfDum4gYW5pbWFsfE90aGVyIl0sIFsicGV0RnV0dXJlIiwgIlBldCB5b3Ugd2lsbCBoYXZlIChTcGFuaXNoIHdpdGggYXJ0aWNsZSkiLCAic2VsZWN0IiwgInVuIHBlcnJvfHVuIGdhdG98dW4gY29uZWpvfHVuIHBlenx1bmEgdG9ydHVnYXxPdGhlciJdLCBbImhhaXIiLCAiSGFpciBkZXNjcmlwdGlvbiIsICJzZWxlY3QiLCAibmVncm98cnViaW98Y2FzdGHDsW98cGVsaXJyb2pvfGxhcmdvIHkgY2FzdGHDsW98Y29ydG8geSBuZWdybyJdLCBbImV5ZXMiLCAiRXllIGNvbG91ciIsICJzZWxlY3QiLCAidmVyZGVzfGF6dWxlc3xncmlzZXN8bWFycm9uZXMiXSwgWyJoZWlnaHQiLCAiSGVpZ2h0IiwgInNlbGVjdCIsICJhbHRvfGFsdGF8YmFqb3xiYWphfGRlIGVzdGF0dXJhIG1lZGlhbmEiXSwgWyJwZXJzb25hbGl0eSIsICJQZXJzb25hbGl0eSBhZGplY3RpdmUiLCAic2VsZWN0IiwgInNpbXDDoXRpY298c2ltcMOhdGljYXxkaXZlcnRpZG98ZGl2ZXJ0aWRhfHRyYW5xdWlsb3x0cmFucXVpbGF8dMOtbWlkb3x0w61taWRhIl0sIFsicGVyc29uYWxpdHlJbnRlbnNpdHkiLCAiUGVyc29uYWxpdHkgaW50ZW5zaXR5IiwgInNlbGVjdCIsICJtdXl8YmFzdGFudGV8dW4gcG9jb3xkZW1hc2lhZG8iXSwgWyJzdWJqZWN0IiwgIkZhdm91cml0ZSBzY2hvb2wgc3ViamVjdCAod2l0aCBhcnRpY2xlKSIsICJzZWxlY3QiLCAiZWwgZXNwYcOxb2x8ZWwgaW5nbMOpc3xsYXMgbWF0ZW3DoXRpY2FzfGxhIGdlb2dyYWbDrWF8bGEgaGlzdG9yaWF8bGEgaW5mb3Jtw6F0aWNhfGVsIGRpYnVqb3xsYXMgY2llbmNpYXMgbmF0dXJhbGVzfGxhIGVkdWNhY2nDs24gZsOtc2ljYXxsYSByZWxpZ2nDs258bGEgbcO6c2ljYSJdLCBbImxpa2VSZWFzb24iLCAiUmVhc29uIGZvciBsaWtpbmcgdGhlIHN1YmplY3QiLCAic2VsZWN0IiwgImludGVyZXNhbnRlfGRpdmVydGlkYXxkaXZlcnRpZG98ZsOhY2lsfMO6dGlsfGVtb2Npb25hbnRlIl0sIFsibGlrZVJlYXNvbkludGVuc2l0eSIsICJIb3cgbXVjaCAobGlrZSByZWFzb24pIiwgInNlbGVjdCIsICJtdXl8YmFzdGFudGV8dW4gcG9jbyJdLCBbImRpc2xpa2VkU3ViamVjdCIsICJTdWJqZWN0IHlvdSBkaXNsaWtlIiwgInNlbGVjdCIsICJsYXMgbWF0ZW3DoXRpY2FzfGVsIGVzcGHDsW9sfGVsIGluZ2zDqXN8bGEgZ2VvZ3JhZsOtYXxsYSBoaXN0b3JpYXxsYSBtw7pzaWNhfGxhIGVkdWNhY2nDs24gZsOtc2ljYXxsYXMgY2llbmNpYXMgbmF0dXJhbGVzIl0sIFsiZGlzbGlrZVJlYXNvbiIsICJSZWFzb24gZm9yIGRpc2xpa2luZyIsICJzZWxlY3QiLCAiYWJ1cnJpZGF8YWJ1cnJpZG98ZGlmw61jaWx8ZXN0cmVzYW50ZXxhZ290YWRvcmF8YWdvdGFkb3IiXSwgWyJkaXNsaWtlUmVhc29uSW50ZW5zaXR5IiwgIkhvdyBtdWNoIChkaXNsaWtlIHJlYXNvbikiLCAic2VsZWN0IiwgIm11eXxiYXN0YW50ZXx1biBwb2NvIl0sIFsibGlrZSIsICJEbyB5b3UgbGlrZSBTcGFuaXNoPyIsICJzZWxlY3QiLCAiU8OtLCBtZSBndXN0YSBtdWNobyBlbCBlc3Bhw7FvbHxTw60sIG1lIGd1c3RhIGVsIGVzcGHDsW9sfE5vIG1lIGd1c3RhIGVsIGVzcGHDsW9sfE5vIG1lIGd1c3RhIG5hZGEgZWwgZXNwYcOxb2x8TWUgZW5jYW50YSBlbCBlc3Bhw7FvbHxEZXRlc3RvIGVsIGVzcGHDsW9sIl0sIFsicmVhc29uIiwgIlJlYXNvbiBhZGplY3RpdmUiLCAic2VsZWN0IiwgImludGVyZXNhbnRlfGRpdmVydGlkb3xkaWbDrWNpbHxmw6FjaWx8w7p0aWx8YWJ1cnJpZG98aW1wb3J0YW50ZXxlc3RyZXNhbnRlfGNyZWF0aXZvfGVtb2Npb25hbnRlfGV4aWdlbnRlIl0sIFsicmVhc29uSW50ZW5zaXR5IiwgIkludGVuc2l0eSBmb3IgeW91ciByZWFzb24iLCAic2VsZWN0IiwgIm11eXxiYXN0YW50ZXx1biBwb2NvfGRlbWFzaWFkbyJdXTtjb25zdCBTVE9SRT0nYXRlbGllci15OC1zcGFuaXNoLXYxJztjb25zdCBudW1zPVsnY2VybycsJ3VubycsJ2RvcycsJ3RyZXMnLCdjdWF0cm8nLCdjaW5jbycsJ3NlaXMnLCdzaWV0ZScsJ29jaG8nLCdudWV2ZScsJ2RpZXonLCdvbmNlJywnZG9jZScsJ3RyZWNlJywnY2F0b3JjZScsJ3F1aW5jZScsJ2RpZWNpc8OpaXMnLCdkaWVjaXNpZXRlJywnZGllY2lvY2hvJywnZGllY2ludWV2ZScsJ3ZlaW50ZScsJ3ZlaW50aXVubycsJ3ZlaW50aWTDs3MnLCd2ZWludGl0csOpcycsJ3ZlaW50aWN1YXRybycsJ3ZlaW50aWNpbmNvJywndmVpbnRpc8OpaXMnLCd2ZWludGlzaWV0ZScsJ3ZlaW50aW9jaG8nLCd2ZWludGludWV2ZScsJ3RyZWludGEnLCd0cmVpbnRhIHkgdW5vJ107Y29uc3Qgd29yZD14PT5udW1zWyt4XXx8eDtsZXQgZD1PYmplY3QuZnJvbUVudHJpZXMoRklFTERTLm1hcChmPT5bZlswXSxmWzNdLnNwbGl0KCd8JylbMF1dKSk7dHJ5e2Q9ey4uLmQsLi4uSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SRSl8fCd7fScpfX1jYXRjaChlKXt9bGV0IG1vZGU9J3ByZXBhcmUnLHFpPTAsY2k9MCxoaT0wLHJhbmRvbU9yZGVyPVtdLHJpPTA7Y29uc3QgJD1pZD0+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLGVzYz1zPT5TdHJpbmcocz8/JycpLnJlcGxhY2UoL1smPD4iJ10vZyxjPT4oeycmJzonJmFtcDsnLCc8JzonJmx0OycsJz4nOicmZ3Q7JywnIic6JyZxdW90OycsIiciOicmIzM5Oyd9W2NdKSk7ZnVuY3Rpb24gc2F2ZSgpe2xvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JFLEpTT04uc3RyaW5naWZ5KGQpKX1mdW5jdGlvbiBDKGZyLGVuKXtyZXR1cm4ge2ZyLGVufX1mdW5jdGlvbiBnZXQocSl7bGV0IGE9W107Y29uc3QgcGljaz1rPT5kW2tdPT09J090aGVyJz8oZFtrKydDdXN0b20nXXx8J+KApicpOmRba107Y29uc3QgYWRkPShmcixlbik9PmEucHVzaChDKGZyLGVuKSk7Y29uc3QgdHI9c2VsZWN0ZWRFbmdsaXNoO3N3aXRjaChxKXsKY2FzZSAwOmFkZCgnTWUgbGxhbW8nLCdNeSBuYW1lIGlzJyk7YWRkKGQuZmlyc3QsZC5maXJzdCk7YnJlYWs7CmNhc2UgMTphZGQoJ1NlIGVzY3JpYmUnLCdJdCBpcyBzcGVsdCcpO1suLi5kLmZpcnN0LnRvVXBwZXJDYXNlKCldLmZpbHRlcihjPT5jLnRyaW0oKSkuZm9yRWFjaChjPT5hZGQoYyxjKSk7YnJlYWs7CmNhc2UgMjphZGQoZC5mZWVsaW5nLHRyKCdmZWVsaW5nJykpO2FkZChkLmZlZWxpbmdKb2luLHRyKCdmZWVsaW5nSm9pbicpKTthZGQoZC5mZWVsaW5nMisnLicsdHIoJ2ZlZWxpbmcyJykrJy4nKTticmVhazsKY2FzZSAzOmFkZCgnVml2byBlbicsJ0kgbGl2ZSBpbicpO2FkZChwaWNrKCd0b3duJykscGljaygndG93bicpKTthZGQoJ2VuICcrKGQuY291bnRyeT09PSdPdGhlcic/ZC5jb3VudHJ5T3RoZXI6ZC5jb3VudHJ5KSsnLicsJ2luICcrdHIoJ2NvdW50cnknKSsnLicpO2JyZWFrOwpjYXNlIDQ6YWRkKCdUZW5nbyAnK3dvcmQoZC5hZ2UpKycgYcOxb3MuJywnSSBhbSAnK2QuYWdlKycgeWVhcnMgb2xkLicpO2FkZCgnVGllbmUgJyt3b3JkKGQub3RoZXJBZ2UpKycgYcOxb3MuJywnSGUgLyBTaGUgaXMgJytkLm90aGVyQWdlKycgeWVhcnMgb2xkLicpO2FkZCgnVGVuZHLDqSAnK3dvcmQoZC5uZXh0QWdlKSsnIGHDsW9zJywnSSB3aWxsIGJlICcrZC5uZXh0QWdlKycgeWVhcnMgb2xkJyk7YWRkKCdlbiAnK2QubmV4dE1vbnRoKycuJywnaW4gJyt0cignbmV4dE1vbnRoJykrJy4nKTticmVhazsKY2FzZSA1OmFkZCgnTWkgY3VtcGxlYcOxb3MnLCdNeSBiaXJ0aGRheScpO2FkZCgnZXMgZWwgJyt3b3JkKGQuYmlydGhkYXlEYXkpLCdpcyBvbiB0aGUgJytvcmRpbmFsRGF5KGQuYmlydGhkYXlEYXkpKTthZGQoJ2RlICcrZC5iaXJ0aGRheU1vbnRoKycuJywnb2YgJyt0cignYmlydGhkYXlNb250aCcpKycuJyk7YnJlYWs7CmNhc2UgNjp7bGV0IHNpYj17J25vbmUnOidObywgbm8gdGVuZ28gaGVybWFub3MuIFNveSBoaWpvIMO6bmljby4nLCdvbmUgYnJvdGhlcic6J1PDrSwgdGVuZ28gdW4gaGVybWFuby4nLCdvbmUgc2lzdGVyJzonU8OtLCB0ZW5nbyB1bmEgaGVybWFuYS4nLCdvbmUgYnJvdGhlciBhbmQgb25lIHNpc3Rlcic6J1PDrSwgdGVuZ28gdW4gaGVybWFubyB5IHVuYSBoZXJtYW5hLicsJ3R3byBicm90aGVycyc6J1PDrSwgdGVuZ28gZG9zIGhlcm1hbm9zLicsJ3R3byBzaXN0ZXJzJzonU8OtLCB0ZW5nbyBkb3MgaGVybWFuYXMuJywnT3RoZXInOmQuc2libGluZ3NPdGhlcn1bZC5zaWJsaW5nc107YWRkKHNpYixkLnNpYmxpbmdzPT09J25vbmUnPydObywgSSBkbyBub3QgaGF2ZSBhbnkgYnJvdGhlcnMgb3Igc2lzdGVycy4gSSBhbSBhbiBvbmx5IGNoaWxkLic6ZC5zaWJsaW5ncz09PSdPdGhlcic/dHIoJ3NpYmxpbmdzJyk6J1llcywgSSBoYXZlICcrZC5zaWJsaW5ncysnLicpO2lmKGQuc2libGluZ3MhPT0nbm9uZScpe2FkZCgnU2UgbGxhbWEgJytkLnNpYmxpbmdOYW1lKycuJywnSGUgLyBTaGUgaXMgY2FsbGVkICcrZC5zaWJsaW5nTmFtZSsnLicpO2FkZCgnVGllbmUgJyt3b3JkKGQuc2libGluZ0FnZSkrJyBhw7Fvcy4nLCdIZSAvIFNoZSBpcyAnK2Quc2libGluZ0FnZSsnIHllYXJzIG9sZC4nKX1icmVha30KY2FzZSA3OntpZihkLnBldD09PSdub25lJylhZGQoJ05vLCBubyB0ZW5nbyBhbmltYWxlcyBlbiBjYXNhLicsJ05vLCBJIGRvIG5vdCBoYXZlIGFueSBwZXRzIGF0IGhvbWUuJyk7ZWxzZXthZGQoJ1PDrSwgdGVuZ28gJysoZC5wZXQ9PT0nT3RoZXInP2QucGV0T3RoZXI6ZC5wZXQpKycuJywnWWVzLCBJIGhhdmUgJyt0cigncGV0JykrJy4nKTthZGQoJ1NlIGxsYW1hICcrZC5wZXROYW1lKycuJywnSXQgaXMgY2FsbGVkICcrZC5wZXROYW1lKycuJyk7YWRkKCdUaWVuZSAnK3dvcmQoZC5wZXRBZ2UpKycgYcOxb3MuJywnSXQgaXMgJytkLnBldEFnZSsnIHllYXJzIG9sZC4nKX1hZGQoJ01lIGd1c3RhcsOtYSAnK3BpY2soJ3BldFdpc2gnKSsnLicsJ0kgd291bGQgbGlrZSAnK3RyKCdwZXRXaXNoJykrJy4nKTthZGQoJ0FudGVzLCcsJ0luIHRoZSBwYXN0LCcpO2FkZCgndGVuw61hICcrcGljaygncGV0UGFzdCcpKycuJywnSSB1c2VkIHRvIGhhdmUgJyt0cigncGV0UGFzdCcpKycuJyk7YWRkKCdFbiBlbCBmdXR1cm8sJywnSW4gdGhlIGZ1dHVyZSwnKTthZGQoJ3RlbmRyw6kgJytwaWNrKCdwZXRGdXR1cmUnKSsnLicsJ0kgd2lsbCBoYXZlICcrdHIoJ3BldEZ1dHVyZScpKycuJyk7YnJlYWt9CmNhc2UgODphZGQoJ1RlbmdvIGVsIHBlbG8gJytkLmhhaXIsJ0kgaGF2ZSAnK3RyKCdoYWlyJykrJyBoYWlyJyk7YWRkKCd5IGxvcyBvam9zICcrZC5leWVzKycuJywnYW5kICcrdHIoJ2V5ZXMnKSsnIGV5ZXMuJyk7YWRkKCdTb3kgJytkLmhlaWdodCsnLicsJ0kgYW0gJyt0cignaGVpZ2h0JykrJy4nKTthZGQoJ0NyZW8gcXVlIHNveSAnK2QucGVyc29uYWxpdHlJbnRlbnNpdHkrJyAnK2QucGVyc29uYWxpdHkrJy4nLCdJIHRoaW5rIHRoYXQgSSBhbSAnK3RyKCdwZXJzb25hbGl0eUludGVuc2l0eScpKycgJyt0cigncGVyc29uYWxpdHknKSsnLicpO2JyZWFrOwpjYXNlIDk6YWRkKCdNZSBndXN0YSAnK2Quc3ViamVjdCwnSSBsaWtlICcrdHIoJ3N1YmplY3QnKSk7YWRkKCdwb3JxdWUgZXMgJytkLmxpa2VSZWFzb25JbnRlbnNpdHkrJyAnK2QubGlrZVJlYXNvbisnLicsJ2JlY2F1c2UgaXQgaXMgJyt0cignbGlrZVJlYXNvbkludGVuc2l0eScpKycgJyt0cignbGlrZVJlYXNvbicpKycuJyk7YWRkKCdObyBtZSBndXN0YSAnK2QuZGlzbGlrZWRTdWJqZWN0LCdJIGRvIG5vdCBsaWtlICcrdHIoJ2Rpc2xpa2VkU3ViamVjdCcpKTthZGQoJ3BvcnF1ZSBlcyAnK2QuZGlzbGlrZVJlYXNvbkludGVuc2l0eSsnICcrZC5kaXNsaWtlUmVhc29uKycuJywnYmVjYXVzZSBpdCBpcyAnK3RyKCdkaXNsaWtlUmVhc29uSW50ZW5zaXR5JykrJyAnK3RyKCdkaXNsaWtlUmVhc29uJykrJy4nKTticmVhazsKY2FzZSAxMDphZGQoZC5saWtlKycuJyx0cignbGlrZScpKycuJyk7YWRkKCdwb3JxdWUgZXMgJytkLnJlYXNvbkludGVuc2l0eSsnICcrZC5yZWFzb24rJy4nLCdiZWNhdXNlIGl0IGlzICcrdHIoJ3JlYXNvbkludGVuc2l0eScpKycgJyt0cigncmVhc29uJykrJy4nKTticmVha31yZXR1cm4gYX1mdW5jdGlvbiBhbnN3ZXIocSl7cmV0dXJuIGdldChxKS5tYXAoYz0+Yy5mcikuam9pbignICcpLnJlcGxhY2UoL1xzKyhbLiwhP10pL2csJyQxJyl9ZnVuY3Rpb24gc3BlZWNoKHQscmVwZWF0PWZhbHNlKXtpZighKCdzcGVlY2hTeW50aGVzaXMnaW4gd2luZG93KSl7YWxlcnQoJ1NwZWVjaCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3Nlci4nKTtyZXR1cm59c3BlZWNoU3ludGhlc2lzLmNhbmNlbCgpO2NvbnN0IHNheT0oKT0+e2xldCB1PW5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UodCk7dS5sYW5nPSdlcy1FUyc7dS5yYXRlPS43MjtsZXQgdj1zcGVlY2hTeW50aGVzaXMuZ2V0Vm9pY2VzKCkuZmluZCh2PT52LmxhbmcudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCdlcycpKTtpZih2KXUudm9pY2U9djtzcGVlY2hTeW50aGVzaXMuc3BlYWsodSl9O3NheSgpO2lmKHJlcGVhdCl7bGV0IHU9bmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSgnJyk7dS5sYW5nPSdlcy1FUyc7dS5vbmVuZD0oKT0+c2V0VGltZW91dChzYXksMTcwMCk7c3BlZWNoU3ludGhlc2lzLnNwZWFrKHUpfX1jb25zdCBFTkdMSVNIX09QVElPTlM9eyLDh2EgdmEgISI6IknigJltIE9LIiwiw4dhIHZhIHRyw6hzIGJpZW4iOiJJ4oCZbSB2ZXJ5IHdlbGwiLCLDh2EgdmEgbWFsIjoiSeKAmW0gbm90IHdlbGwiLCJK4oCZYWkgZmFpbSI6IknigJltIGh1bmdyeSIsIkrigJlhaSBzb2lmIjoiSeKAmW0gdGhpcnN0eSIsIkplIHN1aXMgZmF0aWd1w6kiOiJJ4oCZbSB0aXJlZCAoYm95KSIsIkplIHN1aXMgZmF0aWd1w6llIjoiSeKAmW0gdGlyZWQgKGdpcmwpIiwiZXQiOiJhbmQiLCJtYWlzIjoiYnV0Iiwib3VpIjoiWWVzIiwibm9uIjoiTm8iLCJ0csOocyI6InZlcnkiLCJhc3NleiI6InF1aXRlIiwidW4gcGV1IjoiYSBsaXR0bGUiLCJ0cm9wIjoidG9vIiwidHJhbnF1aWxsZSI6InF1aWV0IiwiYW5pbcOpIjoibGl2ZWx5IiwiYW11c2FudCI6ImZ1biIsImJydXlhbnQiOiJub2lzeSIsImJhcmJhbnQiOiJib3JpbmciLCJhdXggQmVybXVkZXMiOiJCZXJtdWRhIiwiZW4gQW5nbGV0ZXJyZSI6IkVuZ2xhbmQiLCJhdSBDYW5hZGEiOiJDYW5hZGEiLCJhdXggw4l0YXRzLVVuaXMiOiJVbml0ZWQgU3RhdGVzIiwiZW4gRnJhbmNlIjoiRnJhbmNlIiwiamFudmllciI6IkphbnVhcnkiLCJmw6l2cmllciI6IkZlYnJ1YXJ5IiwibWFycyI6Ik1hcmNoIiwiYXZyaWwiOiJBcHJpbCIsIm1haSI6Ik1heSIsImp1aW4iOiJKdW5lIiwianVpbGxldCI6Ikp1bHkiLCJhb8O7dCI6IkF1Z3VzdCIsInNlcHRlbWJyZSI6IlNlcHRlbWJlciIsIm9jdG9icmUiOiJPY3RvYmVyIiwibm92ZW1icmUiOiJOb3ZlbWJlciIsImTDqWNlbWJyZSI6IkRlY2VtYmVyIiwiSuKAmWFpbWUgbW9uIGZyw6hyZSI6IkkgbGlrZSBteSBicm90aGVyIiwiSuKAmWFkb3JlIG1hIHPFk3VyIjoiSSBsb3ZlIG15IHNpc3RlciIsIkplIG7igJlhaW1lIHBhcyBtb24gZnLDqHJlIjoiSSBkb27igJl0IGxpa2UgbXkgYnJvdGhlciIsIkplIG7igJlhaW1lIHBhcyBtYSBzxZN1ciI6IkkgZG9u4oCZdCBsaWtlIG15IHNpc3RlciIsIm5vbmUiOiJOb25lIiwiT3RoZXIiOiJPdGhlciAodHlwZSBiZWxvdykiLCJ1biBjaGllbiI6ImEgZG9nIiwidW4gY2hhdCI6ImEgY2F0IiwidW4gbGFwaW4iOiJhIHJhYmJpdCIsInVuIGhhbXN0ZXIiOiJhIGhhbXN0ZXIiLCJ1bmUgc291cmlzIjoiYSBtb3VzZSIsInVuZSBncmVub3VpbGxlIjoiYSBmcm9nIiwidW4gc2VycGVudCI6ImEgc25ha2UiLCJ1biBwZXJyb3F1ZXQiOiJhIHBhcnJvdCIsInVuIG9pc2VhdSI6ImEgYmlyZCIsInVuIGNoZXZhbCI6ImEgaG9yc2UiLCJ1biBwb2lzc29uIjoiYSBmaXNoIiwidW4gbMOpemFyZCI6ImEgbGl6YXJkIiwidW5lIHRvcnR1ZSI6ImEgdG9ydG9pc2UiLCJ1biBjYW5hcmQiOiJhIGR1Y2siLCJ1biBmcsOocmUiOiJhIGJyb3RoZXIiLCJ1bmUgc8WTdXIiOiJhIHNpc3RlciIsIkVzdG95IG11eSBiaWVuIjoiSeKAmW0gdmVyeSB3ZWxsIiwiRXN0b3kgYmllbiI6IknigJltIHdlbGwiLCJFc3RveSByZWd1bGFyIjoiSeKAmW0gT0siLCJFc3RveSBtYWwiOiJJ4oCZbSBub3Qgd2VsbCIsIkVzdG95IGZhdGFsIjoiSeKAmW0gdGVycmlibGUiLCJUZW5nbyBoYW1icmUiOiJJ4oCZbSBodW5ncnkiLCJUZW5nbyBzZWQiOiJJ4oCZbSB0aGlyc3R5IiwiRXN0b3kgY2Fuc2FkbyI6IknigJltIHRpcmVkIChib3kpIiwiRXN0b3kgY2Fuc2FkYSI6IknigJltIHRpcmVkIChnaXJsKSIsIkVzdG95IGNvbnRlbnRvIjoiSeKAmW0gaGFwcHkgKGJveSkiLCJFc3RveSBjb250ZW50YSI6IknigJltIGhhcHB5IChnaXJsKSIsInkiOiJhbmQiLCJwZXJvIjoiYnV0IiwibGFzIEJlcm11ZGFzIjoiQmVybXVkYSIsIkNhbmFkw6EiOiJDYW5hZGEiLCJJbmdsYXRlcnJhIjoiRW5nbGFuZCIsIkVzcGHDsWEiOiJTcGFpbiIsIkVzdGFkb3MgVW5pZG9zIjoiVW5pdGVkIFN0YXRlcyIsImVuZXJvIjoiSmFudWFyeSIsImZlYnJlcm8iOiJGZWJydWFyeSIsIm1hcnpvIjoiTWFyY2giLCJhYnJpbCI6IkFwcmlsIiwibWF5byI6Ik1heSIsImp1bmlvIjoiSnVuZSIsImp1bGlvIjoiSnVseSIsImFnb3N0byI6IkF1Z3VzdCIsInNlcHRpZW1icmUiOiJTZXB0ZW1iZXIiLCJvY3R1YnJlIjoiT2N0b2JlciIsIm5vdmllbWJyZSI6Ik5vdmVtYmVyIiwiZGljaWVtYnJlIjoiRGVjZW1iZXIiLCJ1biBwZXJybyI6ImEgZG9nIiwidW4gZ2F0byI6ImEgY2F0IiwidW4gcGV6IjoiYSBmaXNoIiwidW4gY29uZWpvIjoiYSByYWJiaXQiLCJ1biBwZXJpcXVpdG8iOiJhIGJ1ZGdpZSIsInVuIHJhdMOzbiI6ImEgbW91c2UiLCJ1biBwYXRvIjoiYSBkdWNrIiwidW4gY2FiYWxsbyI6ImEgaG9yc2UiLCJ1bmEgdG9ydHVnYSI6ImEgdG9ydG9pc2UiLCJuaW5nw7puIGFuaW1hbCI6Im5vIHBldCIsIm5lZ3JvIjoiYmxhY2siLCJuZWdyb3MiOiJibGFjayIsInJ1YmlvIjoiYmxvbmQiLCJydWJpb3MiOiJibG9uZCIsImNhc3Rhw7FvIjoiYnJvd24iLCJjYXN0YcOxb3MiOiJicm93biIsInJvdXgiOiJyZWQiLCJub2lycyI6ImJsYWNrIiwiYmxvbmRzIjoiYmxvbmQiLCJ2ZXJ0cyI6ImdyZWVuIiwiYmxldXMiOiJibHVlIiwiZ3JpcyI6ImdyZXkiLCJ2ZXJkZXMiOiJncmVlbiIsImF6dWxlcyI6ImJsdWUiLCJtYXJyb25lcyI6ImJyb3duIiwibXV5IjoidmVyeSIsImJhc3RhbnRlIjoicXVpdGUiLCJkZW1hc2lhZG8iOiJ0b28iLCJzaWVtcHJlIjoiYWx3YXlzIiwiYSB2ZWNlcyI6InNvbWV0aW1lcyIsInF1ZWxxdWVmb2lzIjoic29tZXRpbWVzIiwidG91am91cnMiOiJhbHdheXMiLCJmYWNpbGUiOiJlYXN5IiwiZGlmZmljaWxlIjoiZGlmZmljdWx0IiwiaW50w6lyZXNzYW50IjoiaW50ZXJlc3RpbmciLCJpbnTDqXJlc3NhbnRlIjoiaW50ZXJlc3RpbmciLCJlbm51eWV1eCI6ImJvcmluZyIsImVubnV5ZXVzZSI6ImJvcmluZyIsImFidXJyaWRvIjoiYm9yaW5nIiwiYWJ1cnJpZGEiOiJib3JpbmciLCJpbnRlcmVzYW50ZSI6ImludGVyZXN0aW5nIiwiZGlmw61jaWwiOiJkaWZmaWN1bHQiLCJmw6FjaWwiOiJlYXN5IiwiZGl2ZXJ0aWRvIjoiZnVuIiwiZGl2ZXJ0aWRhIjoiZnVuIiwiaW1wb3J0YW50ZSI6ImltcG9ydGFudCIsIsO6dGlsIjoidXNlZnVsIiwiaW7DunRpbCI6InVzZWxlc3MiLCJlbW9jaW9uYW50ZSI6ImV4Y2l0aW5nIiwicmVsYWphbnRlIjoicmVsYXhpbmciLCJhZ290YWRvciI6ImV4aGF1c3RpbmciLCJlc3RyZXNhbnRlIjoic3RyZXNzZnVsIiwibmVjZXNhcmlvIjoibmVjZXNzYXJ5IiwiZXhpZ2VudGUiOiJkZW1hbmRpbmciLCJjcmVhdGl2byI6ImNyZWF0aXZlIiwiYWN0aXZhIjoiYWN0aXZlIiwiZW7DqXJnaWNvIjoiZW5lcmdldGljIiwibGVzIG1hdGhzIjoibWF0aHMiLCJsZXMgbWF0aMOpbWF0aXF1ZXMiOiJtYXRocyIsImxhIG11c2lxdWUiOiJtdXNpYyIsImxlIGZyYW7Dp2FpcyI6IkZyZW5jaCIsImzigJlhbmdsYWlzIjoiRW5nbGlzaCIsImzigJllc3BhZ25vbCI6IlNwYW5pc2giLCJsYSBnw6lvZ3JhcGhpZSI6Imdlb2dyYXBoeSIsImzigJloaXN0b2lyZSI6Imhpc3RvcnkiLCJsZXMgc2NpZW5jZXMiOiJzY2llbmNlIiwibGEgdGVjaG5vbG9naWUiOiJ0ZWNobm9sb2d5IiwibOKAmUVQUyI6IlBFIiwiZWwgZXNwYcOxb2wiOiJTcGFuaXNoIiwiZWwgaW5nbMOpcyI6IkVuZ2xpc2giLCJsYXMgbWF0ZW3DoXRpY2FzIjoibWF0aHMiLCJsYSBnZW9ncmFmw61hIjoiZ2VvZ3JhcGh5IiwibGEgaGlzdG9yaWEiOiJoaXN0b3J5IiwibGEgbcO6c2ljYSI6Im11c2ljIiwiZWwgdGVhdHJvIjoiZHJhbWEiLCJsYXMgY2llbmNpYXMiOiJzY2llbmNlIn07T2JqZWN0LmFzc2lnbihFTkdMSVNIX09QVElPTlMseyLDh2EgdmEgYmllbiI6ICJJIGFtIHdlbGwiLCAiw4dhIHZhIHRyw6hzIG1hbCI6ICJJIGFtIHZlcnkgdW53ZWxsIiwgImJydW5zIjogImJyb3duIiwgImNow6J0YWlucyI6ICJicm93biIsICJtYXJyb24iOiAiYnJvd24iLCAiZ3Jpc2VzIjogImdyZXkiLCAiZ3JhbmQiOiAidGFsbCIsICJncmFuZGUiOiAidGFsbCIsICJwZXRpdCI6ICJzaG9ydCIsICJwZXRpdGUiOiAic2hvcnQiLCAiZGUgdGFpbGxlIG1veWVubmUiOiAib2YgYXZlcmFnZSBoZWlnaHQiLCAiYWx0byI6ICJ0YWxsIiwgImFsdGEiOiAidGFsbCIsICJiYWpvIjogInNob3J0IiwgImJhamEiOiAic2hvcnQiLCAiZGUgZXN0YXR1cmEgbWVkaWFuYSI6ICJvZiBhdmVyYWdlIGhlaWdodCIsICJwZWxpcnJvam8iOiAicmVkIiwgImxhcmdvIHkgY2FzdGHDsW8iOiAibG9uZyBhbmQgYnJvd24iLCAiY29ydG8geSBuZWdybyI6ICJzaG9ydCBhbmQgYmxhY2siLCAic3ltcGF0aGlxdWUiOiAibmljZSIsICJ0aW1pZGUiOiAic2h5IiwgImRyw7RsZSI6ICJmdW5ueSIsICJzcG9ydGlmIjogInNwb3J0eSIsICJzcG9ydGl2ZSI6ICJzcG9ydHkiLCAiZ2VudGlsIjogImtpbmQiLCAiZ2VudGlsbGUiOiAia2luZCIsICJ0cmF2YWlsbGV1ciI6ICJoYXJkLXdvcmtpbmciLCAidHJhdmFpbGxldXNlIjogImhhcmQtd29ya2luZyIsICJzaW1ww6F0aWNvIjogIm5pY2UiLCAic2ltcMOhdGljYSI6ICJuaWNlIiwgInRyYW5xdWlsbyI6ICJjYWxtIiwgInRyYW5xdWlsYSI6ICJjYWxtIiwgInTDrW1pZG8iOiAic2h5IiwgInTDrW1pZGEiOiAic2h5IiwgImhvcnJpYmxlIjogImhvcnJpYmxlIiwgImZhdGlnYW50IjogInRpcmluZyIsICJjb21wbGlxdcOpIjogImNvbXBsaWNhdGVkIiwgInV0aWxlIjogInVzZWZ1bCIsICJhZ290YWRvcmEiOiAiZXhoYXVzdGluZyIsICJs4oCZaW5mb3JtYXRpcXVlIjogImNvbXB1dGluZyIsICJsZSBkZXNzaW4iOiAiYXJ0IiwgImxlIHNwb3J0IjogIlBFIiwgImzigJnDqWR1Y2F0aW9uIHJlbGlnaWV1c2UiOiAicmVsaWdpb3VzIGVkdWNhdGlvbiIsICJsYSBpbmZvcm3DoXRpY2EiOiAiY29tcHV0aW5nIiwgImVsIGRpYnVqbyI6ICJhcnQiLCAibGFzIGNpZW5jaWFzIG5hdHVyYWxlcyI6ICJzY2llbmNlIiwgImxhIGVkdWNhY2nDs24gZsOtc2ljYSI6ICJQRSIsICJsYSByZWxpZ2nDs24iOiAicmVsaWdpb3VzIGVkdWNhdGlvbiIsICJ1biBmdXJldCI6ICJhIGZlcnJldCIsICJ1biBjb2JheWUiOiAiYSBndWluZWEgcGlnIiwgInVuIGxpdnJlIjogImEgYm9vayIsICJ1bmUgdHJvdXNzZSI6ICJhIHBlbmNpbCBjYXNlIiwgInVuIGNhaGllciI6ICJhbiBleGVyY2lzZSBib29rIiwgInVuIG9yZGluYXRldXIiOiAiYSBjb21wdXRlciIsICJ1biBzdHlsbyI6ICJhIHBlbiIsICJ1biBjcmF5b24iOiAiYSBwZW5jaWwiLCAidW5lIHLDqGdsZSI6ICJhIHJ1bGVyIiwgInVuZSBnb21tZSI6ICJhIHJ1YmJlciIsICJ1bmUgY2FsY3VsYXRyaWNlIjogImEgY2FsY3VsYXRvciIsICJqb3VlciBhdSBmb290IjogInBsYXkgZm9vdGJhbGwiLCAiam91ZXIgYXUgcnVnYnkiOiAicGxheSBydWdieSIsICJqb3VlciBhdSBnb2xmIjogInBsYXkgZ29sZiIsICJqb3VlciBhdSBiYWRtaW50b24iOiAicGxheSBiYWRtaW50b24iLCAiam91ZXIgYXUgdm9sbGV5IjogInBsYXkgdm9sbGV5YmFsbCIsICJmYWlyZSBkdSB2w6lsbyI6ICJyaWRlIGEgYmlrZSIsICJmYWlyZSBkdSBWVFQiOiAiZ28gbW91bnRhaW4gYmlraW5nIiwgImZhaXJlIGRlIGxhIGRhbnNlIjogImRhbmNlIiwgImZhaXJlIGRlIGxhIHZvaWxlIjogImdvIHNhaWxpbmciLCAiZmFpcmUgZGUgbGEgZ3ltbmFzdGlxdWUiOiAiZG8gZ3ltbmFzdGljcyIsICJqb3VlciBhdXggamV1eCB2aWTDqW8iOiAicGxheSB2aWRlbyBnYW1lcyIsICJzdXJmZXIgc3VyIEludGVybmV0IjogInN1cmYgdGhlIEludGVybmV0IiwgImZhaXJlIGR1IHNob3BwaW5nIjogImdvIHNob3BwaW5nIiwgInNlIGJhbGFkZXIgZW4gdmlsbGUiOiAid2FsayBhcm91bmQgdG93biIsICJyZWdhcmRlciB1biBmaWxtIjogIndhdGNoIGEgZmlsbSIsICJ2b2lyIG1lcyBhbWlzIjogInNlZSBteSBmcmllbmRzIiwgIlPDrSwgbWUgZ3VzdGEgbXVjaG8gZWwgZXNwYcOxb2wiOiAiWWVzLCBJIGxpa2UgU3BhbmlzaCBhIGxvdCIsICJTw60sIG1lIGd1c3RhIGVsIGVzcGHDsW9sIjogIlllcywgSSBsaWtlIFNwYW5pc2giLCAiTm8gbWUgZ3VzdGEgZWwgZXNwYcOxb2wiOiAiSSBkbyBub3QgbGlrZSBTcGFuaXNoIiwgIk5vIG1lIGd1c3RhIG5hZGEgZWwgZXNwYcOxb2wiOiAiSSBkbyBub3QgbGlrZSBTcGFuaXNoIGF0IGFsbCIsICJNZSBlbmNhbnRhIGVsIGVzcGHDsW9sIjogIkkgbG92ZSBTcGFuaXNoIiwgIkRldGVzdG8gZWwgZXNwYcOxb2wiOiAiSSBoYXRlIFNwYW5pc2giLCAiZW4gRXNwYWduZSI6ICJpbiBTcGFpbiIsICJNw6l4aWNvIjogIk1leGljbyIsICJK4oCZYWkgdHJvaXMgZnLDqHJlcyI6ICJJIGhhdmUgdGhyZWUgYnJvdGhlcnMiLCAiVGVuZ28gdHJlcyBoZXJtYW5vcyI6ICJJIGhhdmUgdGhyZWUgYnJvdGhlcnMiLCAiSuKAmWFpbWUgbWEgZmFtaWxsZSI6ICJJIGxpa2UgbXkgZmFtaWx5In0pOwpPYmplY3QuYXNzaWduKEVOR0xJU0hfT1BUSU9OUyx7InVuIHBvY28iOiJhIGxpdHRsZSIsImR1IHNwb3J0Ijoic3BvcnQiLCJkZSBsYSBtdXNpcXVlIjoibXVzaWMiLCJkdSBkZXNzaW4iOiJhcnQiLCJkZXMgbWF0aHMiOiJtYXRocyIsImRlIGzigJlhbmdsYWlzIjoiRW5nbGlzaCIsImRlIGzigJloaXN0b2lyZSI6Imhpc3RvcnkifSk7ZnVuY3Rpb24gb3JkaW5hbERheSh2KXtsZXQgbj1OdW1iZXIodik7cmV0dXJuIG4rKChuJTEwMD49MTEmJm4lMTAwPD0xMyk/J3RoJzooezE6J3N0JywyOiduZCcsMzoncmQnfVtuJTEwXXx8J3RoJykpfQpmdW5jdGlvbiB0cmFuc2xhdGlvbih2YWx1ZSl7cmV0dXJuIChFTkdMSVNIX09QVElPTlNbdmFsdWVdfHx2YWx1ZSkucmVwbGFjZSgvIFwoKD86Ym95fGdpcmwpXCkvZywnJyl9CmZ1bmN0aW9uIHNlbGVjdGVkRW5nbGlzaChrZXkpe2xldCB2YWx1ZT1kW2tleV07aWYodmFsdWU9PT0nT3RoZXInKXtsZXQgcmF3PVsnY291bnRyeScsJ3NpYmxpbmdzJywncGV0J10uaW5jbHVkZXMoa2V5KT9kW2tleSsnT3RoZXInXTpkW2tleSsnQ3VzdG9tJ107cmV0dXJuIGRba2V5KydFbmdsaXNoJ118fHRyYW5zbGF0aW9uKHJhd3x8J+KApicpfXJldHVybiB0cmFuc2xhdGlvbih2YWx1ZXx8JycpfQpmdW5jdGlvbiBhY3Rpdml0eUVuZ2xpc2goa2V5KXtjb25zdCBwaHJhc2U9c2VsZWN0ZWRFbmdsaXNoKGtleSk7cmV0dXJuIHBocmFzZS5yZXBsYWNlKC9ecGxheSAvLCdwbGF5aW5nICcpLnJlcGxhY2UoL15yaWRlIC8sJ3JpZGluZyAnKS5yZXBsYWNlKC9eZ28gLywnZ29pbmcgJykucmVwbGFjZSgvXmRvIC8sJ2RvaW5nICcpLnJlcGxhY2UoL15kYW5jZSQvLCdkYW5jaW5nJykucmVwbGFjZSgvXnN1cmYgLywnc3VyZmluZyAnKS5yZXBsYWNlKC9ed2FsayAvLCd3YWxraW5nICcpLnJlcGxhY2UoL153YXRjaCAvLCd3YXRjaGluZyAnKS5yZXBsYWNlKC9ec2VlIC8sJ3NlZWluZyAnKX0KZnVuY3Rpb24gZW5nbGlzaE9wdGlvbihzKXtyZXR1cm4gRU5HTElTSF9PUFRJT05TW3NdfHxzO30KZnVuY3Rpb24gZmllbGQoZil7bGV0IFtrZXksbGFiZWwsdHlwZSxjaG9pY2VzXT1mLCB2YWx1ZT1kW2tleV18fCcnO2lmKHR5cGU9PT0nc2VsZWN0Jyl7bGV0IG90aGVyS2V5PVsnY291bnRyeScsJ3NpYmxpbmdzJywncGV0J10uaW5jbHVkZXMoa2V5KT9rZXkrJ090aGVyJzprZXkrJ0N1c3RvbSc7bGV0IG90aGVyPWNob2ljZXMuc3BsaXQoJ3wnKS5pbmNsdWRlcygnT3RoZXInKTtyZXR1cm4gYDxsYWJlbD4ke2VzYyhsYWJlbCl9PHNlbGVjdCBkYXRhLWZpZWxkPSIke2tleX0iPiR7Y2hvaWNlcy5zcGxpdCgnfCcpLm1hcChjPT5gPG9wdGlvbiB2YWx1ZT0iJHtlc2MoYyl9IiAke2M9PT12YWx1ZT8nc2VsZWN0ZWQnOicnfT4ke2VzYyhlbmdsaXNoT3B0aW9uKGMpKX08L29wdGlvbj5gKS5qb2luKCcnKX08L3NlbGVjdD4ke290aGVyJiZ2YWx1ZT09PSdPdGhlcicmJiFbJ2NvdW50cnknLCdzaWJsaW5ncycsJ3BldCddLmluY2x1ZGVzKGtleSk/YDxpbnB1dCBkYXRhLWZpZWxkPSIke290aGVyS2V5fSIgcGxhY2Vob2xkZXI9IlR5cGUgeW91ciBvd24gYW5zd2VyIGluIHRoZSB0YXJnZXQgbGFuZ3VhZ2UiIHZhbHVlPSIke2VzYyhkW290aGVyS2V5XXx8JycpfSI+JHtbJ3Rvd24nLCdub3RUb3duJ10uaW5jbHVkZXMoa2V5KT8nJzpgPGlucHV0IGRhdGEtZmllbGQ9IiR7a2V5fUVuZ2xpc2giIHBsYWNlaG9sZGVyPSJFbmdsaXNoIHRyYW5zbGF0aW9uIiBhcmlhLWxhYmVsPSIke2VzYyhsYWJlbCl9IOKAlCBFbmdsaXNoIHRyYW5zbGF0aW9uIiB2YWx1ZT0iJHtlc2MoZFtrZXkrJ0VuZ2xpc2gnXXx8JycpfSI+YH1gOicnfTwvbGFiZWw+YH1pZihbJ2NvdW50cnlPdGhlcicsJ3NpYmxpbmdzT3RoZXInLCdwZXRPdGhlciddLmluY2x1ZGVzKGtleSkmJmRba2V5LnJlcGxhY2UoJ090aGVyJywnJyldIT09J090aGVyJylyZXR1cm4gJyc7cmV0dXJuIGA8bGFiZWw+JHtlc2MobGFiZWwpfTxpbnB1dCBkYXRhLWZpZWxkPSIke2tleX0iIHR5cGU9IiR7dHlwZX0iIHZhbHVlPSIke2VzYyh2YWx1ZSl9IiAke3R5cGU9PT0nbnVtYmVyJz8nbWluPSIwIiBtYXg9Ijk5Iic6Jyd9PiR7Wydjb3VudHJ5T3RoZXInLCdzaWJsaW5nc090aGVyJywncGV0T3RoZXInXS5pbmNsdWRlcyhrZXkpP2A8aW5wdXQgZGF0YS1maWVsZD0iJHtrZXkucmVwbGFjZSgnT3RoZXInLCdFbmdsaXNoJyl9IiBwbGFjZWhvbGRlcj0iRW5nbGlzaCB0cmFuc2xhdGlvbiIgYXJpYS1sYWJlbD0iJHtlc2MobGFiZWwpfSDigJQgRW5nbGlzaCB0cmFuc2xhdGlvbiIgdmFsdWU9IiR7ZXNjKGRba2V5LnJlcGxhY2UoJ090aGVyJywnRW5nbGlzaCcpXXx8JycpfSI+YDonJ308L2xhYmVsPmB9ZnVuY3Rpb24gYnV0dG9uKHQsYWN0aW9uKXtyZXR1cm4gYDxidXR0b24gY2xhc3M9ImJ0biIgZGF0YS1hY3Rpb249IiR7YWN0aW9ufSI+JHt0fTwvYnV0dG9uPmB9ZnVuY3Rpb24gcmVuZGVyKCl7bGV0IHE9bW9kZT09PSdyYW5kb20nPyhyYW5kb21PcmRlcltyaV0/PzApOnFpLGE9Z2V0KHEpLHBhcnQ9YVtNYXRoLm1pbihjaSxhLmxlbmd0aC0xKV0sd2hvbGU9Y2k+PWEubGVuZ3RoO2xldCBuYXY9YDxhc2lkZSBjbGFzcz0icW5hdiIgYXJpYS1sYWJlbD0iUXVlc3Rpb25zIj4ke1FVRVNUSU9OUy5tYXAoKHMsaSk9PmA8YnV0dG9uIGNsYXNzPSIke3E9PT1pPydzZWxlY3RlZCc6Jyd9IiBkYXRhLXF1ZXN0aW9uPSIke2l9Ij4ke2krMX0uICR7ZXNjKHMpfTwvYnV0dG9uPmApLmpvaW4oJycpfTwvYXNpZGU+YDtsZXQgY29udGVudD0nJztpZihtb2RlPT09J3ByZXBhcmUnKXtjb250ZW50PWA8aDI+MSDCtyBQcmVwYXJlIHlvdXIgYW5zd2VyczwvaDI+PHAgY2xhc3M9Im11dGVkIj5Db21wbGV0ZSB5b3VyIGluZm9ybWF0aW9uIGJlbG93LjwvcD48ZGl2IGNsYXNzPSJmb3JtZ3JpZCI+JHtGSUVMRFMubWFwKGZpZWxkKS5qb2luKCcnKX08L2Rpdj48ZGl2IGNsYXNzPSJhY3Rpb25zIj48YnV0dG9uIGNsYXNzPSJidG4iIGRhdGEtbW9kZT0icmVwZWF0Ij5TdGFydCBSZXBlYXQg4oaSPC9idXR0b24+PC9kaXY+YH1lbHNlIGlmKG1vZGU9PT0ncmVwZWF0Jyl7Y29udGVudD1gJHtuYXZ9PGRpdiBjbGFzcz0icGFuZWwiPjxoMj4ke2VzYyhRVUVTVElPTlNbcV0pfTwvaDI+PHAgY2xhc3M9Im11dGVkIj5MaXN0ZW4gdG8gZWFjaCBzaG9ydCBjaHVuayB0d2ljZSwgcmVwZWF0IGl0IGFsb3VkLCB0aGVuIGpvaW4gdGhlIGNodW5rcy48L3A+PGRpdiBjbGFzcz0icHJvbXB0Ij4ke3dob2xlPydGdWxsIGFuc3dlcic6YENodW5rICR7Y2krMX0gb2YgJHthLmxlbmd0aH1gfTwvZGl2PjxkaXYgY2xhc3M9ImZvY3VzIj4ke2VzYyh3aG9sZT9hbnN3ZXIocSk6cGFydC5mcil9PC9kaXY+PGRpdiBjbGFzcz0iYWN0aW9ucyI+JHtidXR0b24oJ+KWtiBIZWFyIHNsb3dseSB0d2ljZScsJ3JlcGVhdDonK3ErJzonK2NpKX0ke2J1dHRvbign4oaQIFByZXZpb3VzJywncHJldicpfSR7YnV0dG9uKHdob2xlPydTdGFydCBhZ2Fpbic6J05leHQgY2h1bmsg4oaSJywnbmV4dCcpfTwvZGl2PjwvZGl2PmB9ZWxzZSBpZihtb2RlPT09J2d1aWRlZCcpe2xldCB0YXJnZXQ9d2hvbGU/YW5zd2VyKHEpOnBhcnQuZnI7bGV0IGNsdWVzPVtgVGhpbmsgb2YgdGhlIGZpcnN0IFNwYW5pc2ggd29yZC5gLGBGaXJzdCBsZXR0ZXI6ICR7dGFyZ2V0LmNoYXJBdCgwKX1gLGBGaXJzdCB3b3JkOiAke3RhcmdldC5zcGxpdCgnICcpWzBdfWAsYFNwYW5pc2g6ICR7dGFyZ2V0fWBdO2NvbnRlbnQ9YCR7bmF2fTxkaXYgY2xhc3M9InBhbmVsIj48aDI+JHtlc2MoUVVFU1RJT05TW3FdKX08L2gyPjxwIGNsYXNzPSJtdXRlZCI+U2F5IHRoZSBTcGFuaXNoIGJlZm9yZSByZXZlYWxpbmcgYSBoaW50LiBCdWlsZCB5b3VyIGFuc3dlciBvbmUgc21hbGwgY2h1bmsgYXQgYSB0aW1lLjwvcD48ZGl2IGNsYXNzPSJwcm9tcHQiPiR7d2hvbGU/J0ZpbmFsIGNoYWxsZW5nZSDigJQgc2F5IHlvdXIgd2hvbGUgYW5zd2VyJzpgU3RlcCAke2NpKzF9IG9mICR7YS5sZW5ndGh9YH08L2Rpdj48ZGl2IGNsYXNzPSJmb2N1cyI+JHtlc2Mod2hvbGU/Z2V0KHEpLm1hcChjPT5jLmVuKS5qb2luKCcgJyk6cGFydC5lbil9PC9kaXY+JHtjaT4wJiYhd2hvbGU/YDxwIGNsYXNzPSJtdXRlZCI+Tm93IGpvaW4gaXQgdG8gdGhlIHByZXZpb3VzIGNodW5rczogJHtlc2MoYS5zbGljZSgwLGNpKzEpLm1hcChjPT5jLmVuKS5qb2luKCcgKyAnKSl9PC9wPmA6Jyd9JHtoaT9gPGRpdiBjbGFzcz0iaGludCI+JHtlc2MoY2x1ZXNbTWF0aC5taW4oaGktMSwzKV0pfTwvZGl2PmA6Jyd9PGRpdiBjbGFzcz0iYWN0aW9ucyI+JHtidXR0b24oJ05lZWQgaGVscD8nLCdoaW50Jyl9JHtidXR0b24oJ+KWtiBMaXN0ZW4nLCdsaXN0ZW5jaHVuazonK3ErJzonK2NpKX0ke2J1dHRvbign4oaQIFByZXZpb3VzJywncHJldicpfSR7YnV0dG9uKHdob2xlPydTdGFydCBhZ2Fpbic6J05leHQgY2h1bmsg4oaSJywnbmV4dCcpfTwvZGl2PjwvZGl2PmB9ZWxzZXtjb250ZW50PWAke21vZGU9PT0nc29sbyc/bmF2OicnfTxkaXYgY2xhc3M9InBhbmVsIj48cCBjbGFzcz0ibXV0ZWQiPiR7bW9kZT09PSdyYW5kb20nP2BSYW5kb20gbW9jayB0ZXN0IOKAlCAke3JpKzF9IG9mICR7cmFuZG9tT3JkZXIubGVuZ3RofWA6J1NvbG8gc3BlYWtpbmcgcHJhY3RpY2UnfTwvcD48aDI+JHtlc2MoUVVFU1RJT05TW3FdKX08L2gyPjxwPlNheSB5b3VyIGZ1bGwgYW5zd2VyIHdpdGhvdXQgbG9va2luZyBhdCB5b3VyIG5vdGVzLjwvcD48ZGl2IGNsYXNzPSJhY3Rpb25zIj4ke2J1dHRvbign4pa2IEhlYXIgdGhlIHF1ZXN0aW9uJywncXVlc3Rpb246JytxKX0ke2J1dHRvbignU2hvdyBteSBhbnN3ZXInLCdyZXZlYWwnKX0ke2J1dHRvbign4pa2IE1vZGVsIGFuc3dlcicsJ2xpc3RlbjonK3EpfTwvZGl2PjxkaXYgY2xhc3M9ImFuc3dlciBoaWRkZW4iIGlkPSJyZXZlYWwiPiR7ZXNjKGFuc3dlcihxKSl9PC9kaXY+PGRpdiBjbGFzcz0iYWN0aW9ucyI+JHtidXR0b24oJ05leHQgcXVlc3Rpb24g4oaSJyxtb2RlPT09J3JhbmRvbSc/J25leHRyYW5kb20nOiduZXh0cXVlc3Rpb24nKX08L2Rpdj48cCBjbGFzcz0ibXV0ZWQiPlNlbGYtcHJhY3RpY2Ugb25seTogcHJvbnVuY2lhdGlvbiBpcyBub3QgYXV0b21hdGljYWxseSBhc3Nlc3NlZC48L3A+PC9kaXY+YH0gJCgnYXBwJykuaW5uZXJIVE1MPWA8bmF2PiR7WydwcmVwYXJlJywncmVwZWF0JywnZ3VpZGVkJywnc29sbycsJ3JhbmRvbSddLm1hcChtPT5gPGJ1dHRvbiBjbGFzcz0iJHttPT09bW9kZT8nYWN0aXZlJzonJ30iIGRhdGEtbW9kZT0iJHttfSI+JHttWzBdLnRvVXBwZXJDYXNlKCkrbS5zbGljZSgxKX08L2J1dHRvbj5gKS5qb2luKCcnKX08L25hdj48bWFpbiBjbGFzcz0iJHtbJ3JlcGVhdCcsJ2d1aWRlZCcsJ3NvbG8nXS5pbmNsdWRlcyhtb2RlKT8ncHJhY3RpY2UtbGF5b3V0JzonJ30iPiR7Y29udGVudH08L21haW4+YDtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RlXScpLmZvckVhY2goZT0+ZS5vbmNsaWNrPSgpPT57bW9kZT1lLmRhdGFzZXQubW9kZTtjaT1oaT0wO2lmKG1vZGU9PT0ncmFuZG9tJylzaHVmZmxlKCk7cmVuZGVyKCl9KTtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWVsZF0nKS5mb3JFYWNoKGU9PmUub25jaGFuZ2U9KCk9PntkW2UuZGF0YXNldC5maWVsZF09ZS52YWx1ZTtzYXZlKCk7cmVuZGVyKCl9KTtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1xdWVzdGlvbl0nKS5mb3JFYWNoKGU9PmUub25jbGljaz0oKT0+e3FpPStlLmRhdGFzZXQucXVlc3Rpb247Y2k9aGk9MDtyZW5kZXIoKX0pO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjdGlvbl0nKS5mb3JFYWNoKGU9PmUub25jbGljaz0oKT0+e2xldCBbYWN0LHgseV09ZS5kYXRhc2V0LmFjdGlvbi5zcGxpdCgnOicpO2lmKGFjdD09PSdsaXN0ZW4nKXNwZWVjaChhbnN3ZXIoK3gpKTtpZihhY3Q9PT0ncXVlc3Rpb24nKXNwZWVjaChRVUVTVElPTlNbK3hdKTtpZihhY3Q9PT0ncmVwZWF0JylzcGVlY2goK3k+PWdldCgreCkubGVuZ3RoP2Fuc3dlcigreCk6Z2V0KCt4KVsreV0uZnIsdHJ1ZSk7aWYoYWN0PT09J2xpc3RlbmNodW5rJylzcGVlY2goK3k+PWdldCgreCkubGVuZ3RoP2Fuc3dlcigreCk6Z2V0KCt4KVsreV0uZnIpO2lmKGFjdD09PSdwcmV2Jyl7Y2k9TWF0aC5tYXgoMCxjaS0xKTtoaT0wO3JlbmRlcigpfWlmKGFjdD09PSduZXh0Jyl7Y2k9Y2k+PWdldChxKS5sZW5ndGg/MDpjaSsxO2hpPTA7cmVuZGVyKCl9aWYoYWN0PT09J2hpbnQnKXtoaT1NYXRoLm1pbig0LGhpKzEpO3JlbmRlcigpfWlmKGFjdD09PSdyZXZlYWwnKSQoJ3JldmVhbCcpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO2lmKGFjdD09PSduZXh0cXVlc3Rpb24nKXtxaT0ocWkrMSklUVVFU1RJT05TLmxlbmd0aDtyZW5kZXIoKX1pZihhY3Q9PT0nbmV4dHJhbmRvbScpe3JpKys7aWYocmk+PXJhbmRvbU9yZGVyLmxlbmd0aClzaHVmZmxlKCk7cmVuZGVyKCl9fSl9ZnVuY3Rpb24gc2h1ZmZsZSgpe3JhbmRvbU9yZGVyPVFVRVNUSU9OUy5tYXAoKF8saSk9PmkpO2ZvcihsZXQgaT1yYW5kb21PcmRlci5sZW5ndGgtMTtpPjA7aS0tKXtsZXQgaj1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKGkrMSkpO1tyYW5kb21PcmRlcltpXSxyYW5kb21PcmRlcltqXV09W3JhbmRvbU9yZGVyW2pdLHJhbmRvbU9yZGVyW2ldXX1yaT0wfXJlbmRlcigpOzwvc2NyaXB0PjwvYm9keT48L2h0bWw+"};const activities=Object.fromEntries(Object.entries(encodedActivities).map(([k,v])=>[k,new TextDecoder().decode(Uint8Array.from(atob(v),c=>c.charCodeAt(0)))]));const schoolStraplines = {
  English: {lang: 'en', text: 'So much more than a place to learn'},
  French: {lang: 'fr', text: "Bien plus qu'un lieu d'apprentissage"},
  Spanish: {lang: 'es', text: 'Mucho más que un lugar para aprender'},
};
function show(id) {
  const isHome = id === 'home';
  document.body.classList.toggle('home-screen', isHome);
  document.body.classList.toggle('practice-fullscreen', id === 'practice');
  const strapline = document.querySelector('.school-strapline');
  const copy = schoolStraplines[isHome ? 'English' : language] ?? schoolStraplines.English;
  strapline.lang = copy.lang;
  strapline.textContent = copy.text;
  sections.forEach(section => document.getElementById(section).classList.toggle('hidden', section !== id));
  window.scrollTo(0,0);
}
function chooseLanguage(v) {
  language = v;
  document.getElementById('yearLanguage').textContent = v;
  const courses = v === 'French'
    ? {10: 'GCSE French', 12: 'IB French B', 13: 'IB French Ab Initio'}
    : {10: 'IGCSE', 12: 'IB Spanish B', 13: 'IB Spanish Ab Initio'};
  const yearNumbers = [7, 8, 9, 10, 12, 13];
  document.querySelector('#years h2').textContent = 'Choose your year group or course';
  document.getElementById('yearGrid').innerHTML = yearNumbers.map(yearNumber => {
    const label = courses[yearNumber] || 'Year ' + yearNumber;
    const art = `<img class="year-photo" src="assets/years/year-${yearNumber}.webp" alt="">`;
    return `<button class="year-tile year-${yearNumber}" onclick="chooseYear('${label}')"><span class="year-art" aria-hidden="true">${art}</span><span class="year-label"><strong>${label}</strong></span><span class="year-arrow">↗</span></button>`;
  }).join('');
  show('years');
}
function chooseYear(v) {
  year = v;
  if (language === 'Spanish' && year === 'IGCSE') {
    showSpanishIgcse();
    return;
  }
  if (language === 'French' && year === 'IB French B') {
    showIbFrenchTopics();
    return;
  }
  if (language === 'French' && year === 'GCSE French') {
    show('y10-tasks');
    return;
  }

  document.getElementById('assessmentTrail').textContent = language + ' · ' + year;
  const entries = language === 'French' && year === 'Year 7' ? [['y7','Term 1 · Questions orales','Je me présente · Personal information']]
    : language === 'French' && year === 'Year 9' ? [['y9','Year 9 Revision · Questions orales','Self, family and friends']]
    : language === 'French' && year === 'Year 8' ? [['y8','Start of Year Revision · Questions essentielles','10 questions · All extension items included']]
    : language === 'Spanish' && year === 'Year 7' ? [['s7','Term 1 · Preguntas orales','7 questions · Personal information']]
    : language === 'Spanish' && year === 'Year 8' ? [['s8','Repaso · Preguntas Básicas','11 questions · All extension items included']]
    : [];
  document.getElementById('assessmentGrid').innerHTML = entries.map(([id, title, description]) =>
    `<button class="tile assessment" onclick="openAssessment('${id}')"><span><strong>${title}</strong><small>${description}</small></span><span class="tag">Open →</span></button>`
  ).join('');
  document.getElementById('assessmentNote').hidden = entries.length > 0;
  show('assessments');
}

function openAssessment(id) {
  const conversation = Y10_CONVERSATION_THEMES.find(theme => theme.id === id);
  const writingPractice = Boolean(conversation) || id === 'y12';
  const title = conversation ? 'General Conversation / ' + conversation.title
    : id === 'y12' ? 'Identités · Styles de vie'
    : id === 'y9' ? 'Year 9 Revision · Questions orales'
    : id === 'y7' ? 'Term 1 · Questions orales'
    : id === 's7' ? 'Term 1 · Preguntas orales'
    : id === 's8' ? 'Repaso · Preguntas Básicas'
    : 'Start of Year Revision';
  const course = language === 'French' && (conversation || id === 'y12') ? year : language + ' / ' + year;
  document.querySelector('.practicebar .crumb').textContent = course + ' / ' + title;
  const back = document.getElementById('practiceBack');
  back.textContent = conversation ? '← General Conversation' : id === 'y12' ? '← Identités' : '← Assessments';
  back.onclick = () => id === 'y12'
    ? showIbFrenchTopics(IB_FRENCH_TOPICS[0])
    : show(conversation ? 'y10-themes' : 'assessments');

  const frame = document.getElementById('activity');
  frame.title = (id.startsWith('s') ? 'Spanish' : 'French') + ' speaking practice';
  if (writingPractice) {
    frame.removeAttribute('srcdoc');
    frame.src = conversation ? 'y12-styles.html?year=10&theme=' + encodeURIComponent(conversation.id) : 'y12-styles.html';
  } else {
    frame.removeAttribute('src');
    const activity = id === 'y9'
      ? activities.y8.replace('<title>', '<script src="y9-french.js"><\/script><title>').replace(/<title>[^<]*<\/title>/, '<title>Year 9 French speaking practice</title>')
      : activities[id];
    frame.srcdoc = activity.replace('</head>', `<link rel="stylesheet" href="writing-tools.css"><script src="writing-tools.js" data-language="${id.startsWith('s') ? 'es' : 'fr'}" defer><\/script></head>`);
  }
  show('practice');
}
</script><script src="ib-french-topics.js"></script><script src="spanish-igcse-questions.js"></script><script src="spanish-igcse-support.js"></script><script src="spanish-igcse.js"></script><script src="y10-conversation.js"></script><script src="y10-bilan.js"></script></body></html>
```

## `dist/spanish-igcse-questions.js`

```javascript
const SPANISH_IGCSE_TOPICS = [
  {
    "code": "A",
    "title": "Home and abroad",
    "subtopics": [
      {
        "code": "A1",
        "title": "Life in the town and rural life",
        "questions": [
          {
            "text": "¿Dónde vives y cuánto tiempo hace que vives allí?"
          },
          {
            "text": "¿Qué es lo mejor/peor de vivir en Las Bermudas?"
          },
          {
            "text": "¿Cómo era tu región en el pasado? ¿ha cambiado/ mejorado mucho?"
          },
          {
            "text": "¿Dónde te gustaría vivir en el futuro y por qué?"
          },
          {
            "text": "¿Si pudieras cambiar algo de tu ciudad, qué cambiarías y por qué?"
          }
        ]
      },
      {
        "code": "A2",
        "title": "Holidays, tourist information and directions",
        "questions": [
          {
            "text": "¿Qué tipo de vacaciones prefieres y por qué?"
          },
          {
            "text": "¿Adónde sueles ir?"
          },
          {
            "text": "¿el año pasado, qué hiciste durante las vacaciones?"
          },
          {
            "text": "¿Si ganaras la lotería, adónde irías?"
          },
          {
            "text": "¿Cuáles son las ventajas/ desventajas del turismo y piensas que es importante para tu región?"
          }
        ]
      },
      {
        "code": "A4",
        "title": "Customs",
        "questions": [
          {
            "text": "¿Qué tradiciones o celebraciones interesantes hay en tu país?"
          },
          {
            "text": "¿Han cambiado mucho las tradiciones locales?"
          },
          {
            "text": "¿Qué días festivos hay aquí en Las Bermudas?"
          },
          {
            "text": "¿Cómo vas a celebrar el próximo (tradition/celebrations you mentioned in question 1)?"
          },
          {
            "text": "¿Si pudieras, qué fiestas españolas visitarías?"
          }
        ]
      },
      {
        "code": "A5",
        "title": "Everyday life, traditions and communities",
        "questions": [
          {
            "text": "¿Qué tradiciones o celebraciones interesantes hay en tu país?"
          },
          {
            "text": "¿Han cambiado mucho las tradiciones locales?"
          },
          {
            "text": "¿Qué días festivos hay aquí en Las Bermudas?"
          },
          {
            "text": "¿Cómo vas a celebrar el próximo (tradition/celebrations you mentioned in question 1)?"
          },
          {
            "text": "¿Si pudieras, qué fiestas españolas visitarías?"
          }
        ]
      }
    ]
  },
  {
    "code": "B",
    "title": "Education and employment",
    "subtopics": [
      {
        "code": "B1",
        "title": "School life and routine",
        "questions": [
          {
            "text": "Describe tu instituto"
          },
          {
            "text": "¿Qué asignaturas son las más interesantes para ti y por qué?"
          },
          {
            "text": "¿Tus profes son buenos? ¿En qué consiste un buen profe?"
          },
          {
            "text": "¿Cómo era tu escuela primaria, te ha gustado más que tu instituto?"
          },
          {
            "text": "Háblame de la rutina diaria de tu colegio"
          },
          {
            "text": "¿Cómo se podría mejorar la jornada escolar?"
          },
          {
            "text": "¿Cuáles son las ventajas/ desventajas de asistir a una escuela privada internacional?"
          }
        ]
      },
      {
        "code": "B2",
        "title": "School rules and pressures",
        "questions": [
          {
            "text": "Háblame de las reglas escolares en tu instituto"
          },
          {
            "text": "¿Qué te pones para ir al instituto?"
          },
          {
            "text": "¿Cuáles son las ventajas e inconvenientes de llevar uniforme?"
          },
          {
            "text": "¿Cómo han cambiado las reglas durante los últimos años?"
          },
          {
            "text": "¿Si pudieras, qué cambiarías de tu instituto?"
          }
        ]
      },
      {
        "code": "B3",
        "title": "School trips, events and exchanges",
        "questions": [
          {
            "text": "¿Has hecho una excursión escolar alguna vez?"
          },
          {
            "text": "¿Cuáles son las ventajas de viajar con el instituto en vez de con la familia?"
          },
          {
            "text": "Según tu experiencia personal, ¿cómo se pueden mejorar los viajes escolares?"
          },
          {
            "text": "En tu opinión, ¿serán diferentes los viajes escolares en el futuro?"
          }
        ]
      },
      {
        "code": "B4",
        "title": "Work, careers and volunteering",
        "questions": [
          {
            "text": "¿Tienes un trabajo a tiempo parcial?"
          },
          {
            "text": "¿Por qué crees que muchos jóvenes trabajan los fines de semana?"
          },
          {
            "text": "¿Te dan paga tus padres y en qué gastas…o prefieres ahorrarla?"
          },
          {
            "text": "¿Has hecho prácticas laborales en el pasado?"
          },
          {
            "text": "¿Qué tipo de trabajo quieres hacer en el futuro?"
          },
          {
            "text": "En tu opinión, ¿trabajar como voluntario es importante?"
          }
        ]
      },
      {
        "code": "B5",
        "title": "Future Plans",
        "questions": [
          {
            "text": "¿Qué planes tienes para el septiembre que viene, después de los exámenes?"
          },
          {
            "text": "¿dónde y qué planeas estudiar?"
          },
          {
            "text": "¿Es importante tener varias opciones profesionales para el futuro?"
          },
          {
            "text": "¿Cómo imaginas tu vida personal en el futuro?"
          }
        ]
      }
    ]
  },
  {
    "code": "C",
    "title": "Personal life and relationships",
    "subtopics": [
      {
        "code": "C1",
        "title": "House and home",
        "questions": [
          {
            "text": "Describe tu casa o piso"
          },
          {
            "text": "¿desde hace cuánto tiempo vives allí y dónde vivías antes?"
          },
          {
            "text": "¿Hay algo que cambiarías de tu casa?"
          },
          {
            "text": "¿Cuándo seas mayor, cómo será tu casa?"
          }
        ]
      },
      {
        "code": "C2",
        "title": "Daily routines and helping around the home",
        "questions": [
          {
            "text": "Describe tu rutina por la mañana / tarde. ¿Qué vas a hacer este fin de semana?"
          },
          {
            "text": "¿Cómo sería un día ideal para ti?"
          },
          {
            "text": "¿Qué tareas domésticas haces?"
          },
          {
            "text": "¿Crees que es importante ayudar en casa?"
          },
          {
            "text": "¿Qué hiciste para ayudar en casa anoche?"
          }
        ]
      },
      {
        "code": "C4",
        "title": "Relationships with family and friends",
        "questions": [
          {
            "text": "Describe tu familia"
          },
          {
            "text": "¿Qué tipo de actividades sueles hacer juntos?"
          },
          {
            "text": "¿Qué hiciste ayer con tu familia?"
          },
          {
            "text": "¿Qué vas a hacer este fin de semana?"
          },
          {
            "text": "¿Cómo sería para ti un amigo ideal?"
          }
        ]
      }
    ]
  },
  {
    "code": "D",
    "title": "The world around us",
    "subtopics": [
      {
        "code": "D1",
        "title": "Environmental issues",
        "questions": [
          {
            "text": "¿Cuál es para ti el problema mundial más serio hoy en día? En tu opinión, ¿tu región tiene problemas medioambientales?"
          },
          {
            "text": "¿Qué debemos hacer para proteger el medio ambiente?"
          },
          {
            "text": "¿Qué has hecho recientemente para ayudar al medio ambiente en tu barrio?"
          },
          {
            "text": "¿Cuáles serán las consecuencias de no cuidar al medio ambiente en el futuro?",
            "hint": "Si no cuidamos el medioambiente, (+future tense)"
          }
        ]
      },
      {
        "code": "D3",
        "title": "Travel and transport",
        "questions": [
          {
            "text": "¿Cómo prefieres viajar generalmente y por qué?"
          },
          {
            "text": "Háblame de tu último viaje. ¿A dónde irás este verano?"
          },
          {
            "text": "¿Utilizas el transporte público? ¿Cuándo?"
          },
          {
            "text": "Si pudieras, ¿cómo mejorarías el transporte público en tu barrio?",
            "hint": "si pudiera, (+ conditional tense)"
          }
        ]
      },
      {
        "code": "D4",
        "title": "The media",
        "questions": [
          {
            "text": "¿Qué tipo de programas sueles ver y por qué?"
          },
          {
            "text": "¿Te gusta ir al cine? ¿Cuál fue la última película que viste?"
          },
          {
            "text": "¿Es importante para ti ver las noticias?"
          }
        ]
      },
      {
        "code": "D5",
        "title": "Information and communication technology",
        "questions": [
          {
            "text": "¿Qué medios de tecnología usas más frecuentemente? ¿Cómo usaste tu móvil ayer?"
          },
          {
            "text": "¿Cuáles son las ventajas y desventajas de internet?"
          },
          {
            "text": "¿Cómo cambiará la tecnología nuestras vidas en el futuro?"
          }
        ]
      }
    ]
  },
  {
    "code": "E",
    "title": "Social activities, fitness and health",
    "subtopics": [
      {
        "code": "E1",
        "title": "Special occasions",
        "questions": [
          {
            "text": "¿Cómo celebraste tu cumpleaños el año pasado?"
          },
          {
            "text": "¿Sueles celebrar con familia o amigos? ¿Por qué prefieres celebrar con…?"
          },
          {
            "text": "¿Cuál es tu día festivo favorito durante el año y cómo vas a celebrarlo este año?"
          }
        ]
      },
      {
        "code": "E2",
        "title": "Hobbies, interests, sports and exercise",
        "questions": [
          {
            "text": "¿Qué te gusta hacer en tu tiempo libre?"
          },
          {
            "text": "¿Cuándo era niña, qué deportes practicabas?"
          },
          {
            "text": "¿Por qué piensas que es importante hacer deporte?"
          },
          {
            "text": "¿Qué harás el fin de semana próxima?"
          },
          {
            "text": "¿Cuáles son los beneficios de tener intereses y pasatiempos?"
          }
        ]
      },
      {
        "code": "E3",
        "title": "Shopping and money matters",
        "questions": [
          {
            "text": "¿Qué compraste recientemente y por qué?"
          },
          {
            "text": "¿Cómo son las tiendas en tu barrio, y con qué frecuencia vas de compras?"
          },
          {
            "text": "Si tuvieras la oportunidad, ¿cómo mejorarías las tiendas en tu barrio?"
          },
          {
            "text": "¿Hasta qué punto es mejor hacer compras por internet?"
          }
        ]
      },
      {
        "code": "E4",
        "title": "Food and drink",
        "questions": [
          {
            "text": "Háblame de lo que te gusta comer. ¿qué comiste ayer?"
          },
          {
            "text": "¿Vas a los restaurantes a menudo?"
          },
          {
            "text": "¿Has probado la comida española o de latino américa?"
          },
          {
            "text": "¿Qué opinas de la comida rápida? ¿La comes frecuentemente?"
          },
          {
            "text": "¿Qué vas a cenar esta noche con tu familia?"
          }
        ]
      }
    ]
  }
];
```

## `dist/spanish-igcse-support.js`

```javascript
const SPANISH_IGCSE_PRACTICE = [{
  id: 'A1',
  title: 'A1 · Life in the town and rural life',
  store: 'atelier-igcse-es-a1-v1',
  questions: SPANISH_IGCSE_TOPICS[0].subtopics.find(item => item.code === 'A1').questions.map((item, index) => ({
    ...item, id: 301 + index, core: index + 1,
  })),
}];

const SPANISH_IGCSE_CONNECTIVES = [
  ['y', 'and'], ['pero', 'but'], ['porque', 'because'], ['también', 'also'],
  ['sin embargo,', 'however'], ['por eso', 'so / for that reason'],
  ['por ejemplo,', 'for example'], ['además,', 'in addition'], ['aunque', 'although'],
  ['antes', 'before'], ['ahora', 'now'], ['en el futuro', 'in the future'],
];

const SPANISH_IGCSE_VOCABULARY = {
  301: [
    ['Decir dónde vives',
      ['Lugar', ['vivo en las Bermudas', 'I live in Bermuda'], ['vivo en Warwick', 'I live in Warwick'],
        ['vivo cerca del mar', 'I live near the sea'], ['vivo en un barrio tranquilo', 'I live in a quiet neighbourhood'],
        ['a las afueras de la ciudad', 'on the outskirts of town']],
      ['Descripción', ['hay muchas zonas verdes', 'there are lots of green spaces'],
        ['mi casa está cerca del colegio', 'my house is near school'], ['conozco a mis vecinos', 'I know my neighbours']]],
    ['Decir desde cuándo',
      ['Duración', ['desde hace tres años', 'for three years'], ['desde que nací', 'since I was born'],
        ['toda mi vida', 'all my life'], ['hace dos años que vivo aquí', 'I’ve lived here for two years']],
      ['Un detalle', ['antes vivía en otro barrio', 'I used to live in another neighbourhood'],
        ['me mudé con mi familia', 'I moved with my family']]],
  ],
  302: [
    ['Explicar lo mejor',
      ['Ventajas', ['las playas son preciosas', 'the beaches are beautiful'], ['la gente es amable', 'people are friendly'],
        ['puedo nadar en el mar', 'I can swim in the sea'], ['todo está bastante cerca', 'everything is fairly close'],
        ['hay mucho que hacer al aire libre', 'there is plenty to do outdoors']]],
    ['Explicar lo peor',
      ['Inconvenientes', ['la vida es cara', 'life is expensive'], ['hay mucho tráfico', 'there is a lot of traffic'],
        ['hay pocas tiendas', 'there are few shops'], ['a veces me aburro', 'I sometimes get bored'],
        ['no siempre es fácil desplazarse', 'getting around isn’t always easy']],
      ['Para comparar', ['por un lado', 'on the one hand'], ['por otro lado', 'on the other hand']]],
  ],
  303: [
    ['Describir cómo era antes',
      ['Imperfecto', ['antes era más tranquilo', 'it used to be quieter'], ['había menos tráfico', 'there was less traffic'],
        ['había más espacios verdes', 'there were more green spaces'], ['las tiendas eran más pequeñas', 'the shops were smaller'],
        ['jugaba en la calle', 'I used to play in the street']]],
    ['Explicar qué ha cambiado',
      ['Cambios', ['ha cambiado mucho', 'it has changed a lot'], ['han construido más casas', 'they have built more houses'],
        ['han abierto tiendas nuevas', 'new shops have opened'], ['el transporte ha mejorado', 'transport has improved'],
        ['ahora hay más gente', 'there are more people now'], ['no ha cambiado mucho', 'it hasn’t changed much']]],
  ],
  304: [
    ['Imaginar dónde vivirías',
      ['Lugares', ['me gustaría vivir en España', 'I’d like to live in Spain'], ['preferiría vivir en una ciudad pequeña', 'I’d prefer to live in a small town'],
        ['quisiera quedarme en las Bermudas', 'I’d like to stay in Bermuda'], ['cerca de mi familia', 'near my family'],
        ['en el campo', 'in the countryside'], ['en el extranjero', 'abroad']]],
    ['Dar tus razones',
      ['Razones', ['para conocer otra cultura', 'to get to know another culture'], ['para estar cerca de la naturaleza', 'to be close to nature'],
        ['habría más oportunidades', 'there would be more opportunities'], ['podría viajar más', 'I could travel more'],
        ['me sentiría como en casa', 'I would feel at home']]],
  ],
  305: [
    ['Proponer un cambio',
      ['Condicional', ['pondría más autobuses', 'I’d provide more buses'], ['crearía más carriles bici', 'I’d create more cycle lanes'],
        ['construiría un centro deportivo', 'I’d build a sports centre'], ['plantaría más árboles', 'I’d plant more trees'],
        ['mejoraría los parques', 'I’d improve the parks']]],
    ['Explicar el resultado',
      ['Ventajas', ['habría menos contaminación', 'there would be less pollution'], ['sería más fácil ir al colegio', 'it would be easier to get to school'],
        ['los jóvenes tendrían más opciones', 'young people would have more options'], ['la gente podría moverse a pie', 'people could get around on foot'],
        ['para reducir el tráfico', 'to reduce traffic']]],
  ],
};

const SPANISH_IGCSE_LEVEL_UP = {
  301: [
    ['Llevo… viviendo aquí.', 'I’ve been living here for…', 'Pon una duración después de «llevo».', [
      ['Llevo tres años viviendo aquí.', 'I’ve been living here for three years.'],
    ]],
    ['Lo que más me gusta de donde vivo es…', 'What I like most about where I live is…', 'Añade un detalle concreto.'],
  ],
  302: [
    ['Aunque vivir aquí sea caro, …', 'Although living here may be expensive, …', 'Usa «sea», el subjuntivo de «ser», y añade una ventaja.', [
      ['Aunque vivir aquí sea caro, me encanta estar cerca del mar.', 'Although living here may be expensive, I love being near the sea.'],
      ['Aunque el transporte sea lento, prefiero tomar el autobús.', 'Although transport may be slow, I prefer taking the bus.'],
    ]],
    ['Por un lado…, pero por otro lado…', 'On the one hand…, but on the other hand…', 'Da una ventaja y un inconveniente.'],
  ],
  303: [
    ['Antes había…, mientras que ahora…', 'There used to be…, whereas now…', 'Usa el imperfecto para antes y el presente para ahora.'],
    ['Lo que más ha cambiado es…', 'What has changed most is…', 'Nombra un cambio concreto y explica su efecto.'],
  ],
  304: [
    ['Si tuviera la oportunidad, me mudaría a…', 'If I had the chance, I’d move to…', 'Combina «tuviera» con el condicional «me mudaría».'],
    ['Me gustaría vivir en un lugar donde pueda…', 'I’d like to live somewhere where I can…', 'Usa «pueda», el subjuntivo de «poder», y añade un infinitivo.', [
      ['pueda estar cerca de mi familia', 'I can be close to my family'],
      ['pueda desplazarme a pie', 'I can get around on foot'],
    ]],
  ],
  305: [
    ['Si pudiera cambiar una cosa, …', 'If I could change one thing, …', 'Después de la coma, usa el condicional.', [
      ['pondría más autobuses', 'I would provide more buses'],
      ['crearía más zonas verdes', 'I would create more green spaces'],
    ]],
    ['Esto permitiría que…', 'This would allow…', 'Añade un sujeto y un verbo en imperfecto de subjuntivo.', [
      ['los jóvenes se desplazaran con más facilidad', 'young people to get around more easily'],
      ['las familias tuvieran más espacios para jugar', 'families to have more spaces to play'],
    ]],
  ],
};
```

## `dist/spanish-igcse.js`

```javascript
function showSpanishIgcse(topic, subtopic) {
  const practice = subtopic && SPANISH_IGCSE_PRACTICE.find(section => section.id === subtopic.code);
  if (practice) {
    document.querySelector('.practicebar .crumb').textContent = 'IGCSE Spanish / ' + practice.title;
    const back = document.getElementById('practiceBack');
    back.textContent = '← ' + topic.code + ' · ' + topic.title;
    back.onclick = () => showSpanishIgcse(topic);
    const frame = document.getElementById('activity');
    frame.title = 'Práctica oral de español';
    frame.removeAttribute('srcdoc');
    frame.src = 'y12-styles.html?spanish=' + encodeURIComponent(practice.id);
    show('practice');
    return;
  }
  const heading = document.getElementById('spanish-igcse-heading');
  const trail = document.getElementById('spanish-igcse-trail');
  const back = document.getElementById('spanish-igcse-back');
  const body = document.getElementById('spanish-igcse-content');
  const label = item => item.code + ' · ' + item.title;
  document.getElementById('spanish-igcse-bilan').hidden = Boolean(topic);

  trail.textContent = subtopic ? 'IGCSE Spanish / ' + label(topic) : 'IGCSE Spanish';
  heading.textContent = subtopic ? label(subtopic) : topic ? label(topic) : 'Speaking topics';
  back.textContent = subtopic ? '← ' + label(topic) : topic ? '← Topics A–E' : '← Courses';
  back.onclick = () => {
    if (subtopic) showSpanishIgcse(topic);
    else if (topic) showSpanishIgcse();
    else show('years');
  };

  if (subtopic) {
    const list = document.createElement('ol');
    list.className = 'spanish-igcse-questions';
    list.lang = 'es';
    list.append(...subtopic.questions.map(({text, hint}) => {
      const question = document.createElement('li');
      question.textContent = text;
      if (hint) {
        const note = document.createElement('small');
        note.textContent = hint;
        question.append(note);
      }
      return question;
    }));
    body.replaceChildren(list);
  } else {
    const grid = document.createElement('div');
    grid.className = 'grid speaking-grid';
    const options = topic ? topic.subtopics : SPANISH_IGCSE_TOPICS;
    grid.append(...options.map(item => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'tile assessment';
      const title = document.createElement('strong');
      title.textContent = label(item);
      button.append(title);
      button.onclick = () => topic ? showSpanishIgcse(topic, item) : showSpanishIgcse(item);
      return button;
    }));
    body.replaceChildren(grid);
  }

  show('spanish-igcse');
  heading.focus({preventScroll: true});
}
```

## `dist/vendor/pdf-lib-LICENSE.md`

```markdown
MIT License

Copyright (c) 2019 Andrew Dillon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## `dist/vendor/pdf-lib.mjs`

```javascript
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};function e(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var n=function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function r(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{h(r.next(t))}catch(t){o(t)}}function s(t){try{h(r.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}h((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function o(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=new Uint8Array(256),h=0;h<a.length;h++)s[a.charCodeAt(h)]=h;var l,u=function(t){for(var e="",n=t.length,r=0;r<n;r+=3)e+=a[t[r]>>2],e+=a[(3&t[r])<<4|t[r+1]>>4],e+=a[(15&t[r+1])<<2|t[r+2]>>6],e+=a[63&t[r+2]];return n%3==2?e=e.substring(0,e.length-1)+"=":n%3==1&&(e=e.substring(0,e.length-2)+"=="),e},c=function(t){var e,n,r,i,o,a=.75*t.length,h=t.length,l=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var u=new Uint8Array(a);for(e=0;e<h;e+=4)n=s[t.charCodeAt(e)],r=s[t.charCodeAt(e+1)],i=s[t.charCodeAt(e+2)],o=s[t.charCodeAt(e+3)],u[l++]=n<<2|r>>4,u[l++]=(15&r)<<4|i>>2,u[l++]=(3&i)<<6|63&o;return u},d=/^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,f=function(t){var e=t.trim(),n=e.substring(0,100).match(d);if(!n)return c(e);var r=n[0],i=e.substring(r.length);return c(i)},p=function(t){return t.charCodeAt(0)},g=function(t){return t.codePointAt(0)},v=function(t,e){return w(t.toString(16),e,"0").toUpperCase()},y=function(t){return v(t,2)},m=function(t){return String.fromCharCode(t)},b=function(t){return m(parseInt(t,16))},w=function(t,e,n){for(var r="",i=0,o=e-t.length;i<o;i++)r+=n;return r+t},x=function(t,e,n){for(var r=t.length,i=0;i<r;i++)e[n++]=t.charCodeAt(i);return r},k=function(t,e){return void 0===e&&(e=4),t+"-"+Math.floor(Math.random()*Math.pow(10,e))},S=function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},F=function(t){return t.replace(/\t|\u0085|\u2028|\u2029/g,"    ").replace(/[\b\v]/g,"")},C=["\\n","\\f","\\r","\\u000B"],A=["\n","\f","\r","\v"],z=function(t){return/^[\n\f\r\u000B]$/.test(t)},T=function(t){return t.split(/[\n\f\r\u000B]/)},O=function(t){return t.replace(/[\n\f\r\u000B]/g," ")},R=function(t,e){var n,r=t.charCodeAt(e),i=e+1,o=1;return r>=55296&&r<=56319&&t.length>i&&(n=t.charCodeAt(i))>=56320&&n<=57343&&(o=2),[t.slice(e,e+o),o]},B=function(t){for(var e=[],n=0,r=t.length;n<r;){var i=R(t,n),o=i[0],a=i[1];e.push(o),n+=a}return e},N=function(t,e,n,r){for(var i=function(t){for(var e=C.join("|"),n=["$"],r=0,i=t.length;r<i;r++){var o=t[r];if(z(o))throw new TypeError("`wordBreak` must not include "+e);n.push(""===o?".":S(o))}var a=n.join("|");return new RegExp("("+e+")|((.*?)("+a+"))","gm")}(e),o=F(t).match(i),a="",s=0,h=[],l=function(){""!==a&&h.push(a),a="",s=0},u=0,c=o.length;u<c;u++){var d=o[u];if(z(d))l();else{var f=r(d);s+f>n&&l(),a+=d,s+=f}}return l(),h},P=/^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/,D=function(t){var e=t.match(P);if(e){var n=e[1],r=e[2],i=void 0===r?"01":r,o=e[3],a=void 0===o?"01":o,s=e[4],h=void 0===s?"00":s,l=e[5],u=void 0===l?"00":l,c=e[6],d=void 0===c?"00":c,f=e[7],p=void 0===f?"Z":f,g=e[8],v=void 0===g?"00":g,y=e[9];return new Date(n+"-"+i+"-"+a+"T"+h+":"+u+":"+d+("Z"===p?"Z":""+p+v+":"+(void 0===y?"00":y)))}},j=function(t,e){for(var n,r,i=0;i<t.length;){var o=t.substring(i).match(e);if(!o)return{match:r,pos:i};r=o,i+=(null!==(n=o.index)&&void 0!==n?n:0)+o[0].length}return{match:r,pos:i}},E=function(t){return t[t.length-1]},I=function(t){if(t instanceof Uint8Array)return t;for(var e=t.length,n=new Uint8Array(e),r=0;r<e;r++)n[r]=t.charCodeAt(r);return n},M=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=t.length,r=[],i=0;i<n;i++){var o=t[i];r[i]=o instanceof Uint8Array?o:I(o)}var a=0;for(i=0;i<n;i++)a+=t[i].length;for(var s=new Uint8Array(a),h=0,l=0;l<n;l++)for(var u=r[l],c=0,d=u.length;c<d;c++)s[h++]=u[c];return s},U=function(t){for(var e=0,n=0,r=t.length;n<r;n++)e+=t[n].length;var i=new Uint8Array(e),o=0;for(n=0,r=t.length;n<r;n++){var a=t[n];i.set(a,o),o+=a.length}return i},V=function(t){for(var e="",n=0,r=t.length;n<r;n++)e+=m(t[n]);return e},W=function(t,e){return t.id-e.id},q=function(t,e){for(var n=[],r=0,i=t.length;r<i;r++){var o=t[r],a=t[r-1];0!==r&&e(o)===e(a)||n.push(o)}return n},K=function(t){for(var e=t.length,n=0,r=Math.floor(e/2);n<r;n++){var i=n,o=e-n-1,a=t[n];t[i]=t[o],t[o]=a}return t},L=function(t){for(var e=0,n=0,r=t.length;n<r;n++)e+=t[n];return e},G=function(t,e){for(var n=new Array(e-t),r=0,i=n.length;r<i;r++)n[r]=t+r;return n},H=function(t,e){for(var n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t[e[r]];return n},_=function(t){return t instanceof Uint8Array||t instanceof ArrayBuffer||"string"==typeof t},X=function(t){if("string"==typeof t)return f(t);if(t instanceof ArrayBuffer)return new Uint8Array(t);if(t instanceof Uint8Array)return t;throw new TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`")},Z=function(){return new Promise((function(t){setTimeout((function(){return t()}),0)}))},Y=function(t,e){void 0===e&&(e=!0);var n=[];e&&n.push(239,187,191);for(var r=0,i=t.length;r<i;){var o=t.codePointAt(r);if(o<128){var a=127&o;n.push(a),r+=1}else if(o<2048){a=o>>6&31|192;var s=63&o|128;n.push(a,s),r+=1}else if(o<65536){a=o>>12&15|224,s=o>>6&63|128;var h=63&o|128;n.push(a,s,h),r+=1}else{if(!(o<1114112))throw new Error("Invalid code point: 0x"+y(o));a=o>>18&7|240,s=o>>12&63|128,h=o>>6&63|128;var l=o>>0&63|128;n.push(a,s,h,l),r+=2}}return new Uint8Array(n)},J=function(t,e){void 0===e&&(e=!0);var n=[];e&&n.push(65279);for(var r=0,i=t.length;r<i;){var o=t.codePointAt(r);if(o<65536)n.push(o),r+=1;else{if(!(o<1114112))throw new Error("Invalid code point: 0x"+y(o));n.push(tt(o),et(o)),r+=2}}return new Uint16Array(n)},Q=function(t){return t>=0&&t<=65535},$=function(t){return t>=65536&&t<=1114111},tt=function(t){return Math.floor((t-65536)/1024)+55296},et=function(t){return(t-65536)%1024+56320};!function(t){t.BigEndian="BigEndian",t.LittleEndian="LittleEndian"}(l||(l={}));var nt="�".codePointAt(0),rt=function(t,e){if(void 0===e&&(e=!0),t.length<=1)return String.fromCodePoint(nt);for(var n=e?st(t):l.BigEndian,r=e?2:0,i=[];t.length-r>=2;){var o=at(t[r++],t[r++],n);if(it(o))if(t.length-r<2)i.push(nt);else{var a=at(t[r++],t[r++],n);ot(a)?i.push(o,a):i.push(nt)}else ot(o)?(r+=2,i.push(nt)):i.push(o)}return r<t.length&&i.push(nt),String.fromCodePoint.apply(String,i)},it=function(t){return t>=55296&&t<=56319},ot=function(t){return t>=56320&&t<=57343},at=function(t,e,n){if(n===l.LittleEndian)return e<<8|t;if(n===l.BigEndian)return t<<8|e;throw new Error("Invalid byteOrder: "+n)},st=function(t){return ht(t)?l.BigEndian:lt(t)?l.LittleEndian:l.BigEndian},ht=function(t){return 254===t[0]&&255===t[1]},lt=function(t){return 255===t[0]&&254===t[1]},ut=function(t){return ht(t)||lt(t)},ct=function(t){var e,n=String(t);if(Math.abs(t)<1){if(e=parseInt(t.toString().split("e-")[1])){var r=t<0;r&&(t*=-1),t*=Math.pow(10,e-1),n="0."+new Array(e).join("0")+t.toString().substring(2),r&&(n="-"+n)}}else(e=parseInt(t.toString().split("+")[1]))>20&&(e-=20,n=(t/=Math.pow(10,e)).toString()+new Array(e+1).join("0"));return n},dt=function(t){return Math.ceil(t.toString(2).length/8)},ft=function(t){for(var e=new Uint8Array(dt(t)),n=1;n<=e.length;n++)e[n-1]=t>>8*(e.length-n);return e},pt=function(t){throw new Error(t)};function gt(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var vt=gt((function(t,e){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var n=e.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var i in n)r(n,i)&&(t[i]=n[i])}}return t},e.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var i={arraySet:function(t,e,n,r,i){if(e.subarray&&t.subarray)t.set(e.subarray(n,n+r),i);else for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){var e,n,r,i,o,a;for(r=0,e=0,n=t.length;e<n;e++)r+=t[e].length;for(a=new Uint8Array(r),i=0,e=0,n=t.length;e<n;e++)o=t[e],a.set(o,i),i+=o.length;return a}},o={arraySet:function(t,e,n,r,i){for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){return[].concat.apply([],t)}};e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,i)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,o))},e.setTyped(n)}));function yt(t){for(var e=t.length;--e>=0;)t[e]=0}var mt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],bt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],wt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],xt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],kt=new Array(576);yt(kt);var St=new Array(60);yt(St);var Ft=new Array(512);yt(Ft);var Ct=new Array(256);yt(Ct);var At=new Array(29);yt(At);var zt,Tt,Ot,Rt=new Array(30);function Bt(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=t&&t.length}function Nt(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function Pt(t){return t<256?Ft[t]:Ft[256+(t>>>7)]}function Dt(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function jt(t,e,n){t.bi_valid>16-n?(t.bi_buf|=e<<t.bi_valid&65535,Dt(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=n-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)}function Et(t,e,n){jt(t,n[2*e],n[2*e+1])}function It(t,e){var n=0;do{n|=1&t,t>>>=1,n<<=1}while(--e>0);return n>>>1}function Mt(t,e,n){var r,i,o=new Array(16),a=0;for(r=1;r<=15;r++)o[r]=a=a+n[r-1]<<1;for(i=0;i<=e;i++){var s=t[2*i+1];0!==s&&(t[2*i]=It(o[s]++,s))}}function Ut(t){var e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function Vt(t){t.bi_valid>8?Dt(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function Wt(t,e,n,r){var i=2*e,o=2*n;return t[i]<t[o]||t[i]===t[o]&&r[e]<=r[n]}function qt(t,e,n){for(var r=t.heap[n],i=n<<1;i<=t.heap_len&&(i<t.heap_len&&Wt(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!Wt(e,r,t.heap[i],t.depth));)t.heap[n]=t.heap[i],n=i,i<<=1;t.heap[n]=r}function Kt(t,e,n){var r,i,o,a,s=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*s]<<8|t.pending_buf[t.d_buf+2*s+1],i=t.pending_buf[t.l_buf+s],s++,0===r?Et(t,i,e):(Et(t,(o=Ct[i])+256+1,e),0!==(a=mt[o])&&jt(t,i-=At[o],a),Et(t,o=Pt(--r),n),0!==(a=bt[o])&&jt(t,r-=Rt[o],a))}while(s<t.last_lit);Et(t,256,e)}function Lt(t,e){var n,r,i,o=e.dyn_tree,a=e.stat_desc.static_tree,s=e.stat_desc.has_stree,h=e.stat_desc.elems,l=-1;for(t.heap_len=0,t.heap_max=573,n=0;n<h;n++)0!==o[2*n]?(t.heap[++t.heap_len]=l=n,t.depth[n]=0):o[2*n+1]=0;for(;t.heap_len<2;)o[2*(i=t.heap[++t.heap_len]=l<2?++l:0)]=1,t.depth[i]=0,t.opt_len--,s&&(t.static_len-=a[2*i+1]);for(e.max_code=l,n=t.heap_len>>1;n>=1;n--)qt(t,o,n);i=h;do{n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],qt(t,o,1),r=t.heap[1],t.heap[--t.heap_max]=n,t.heap[--t.heap_max]=r,o[2*i]=o[2*n]+o[2*r],t.depth[i]=(t.depth[n]>=t.depth[r]?t.depth[n]:t.depth[r])+1,o[2*n+1]=o[2*r+1]=i,t.heap[1]=i++,qt(t,o,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var n,r,i,o,a,s,h=e.dyn_tree,l=e.max_code,u=e.stat_desc.static_tree,c=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(o=0;o<=15;o++)t.bl_count[o]=0;for(h[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;n<573;n++)(o=h[2*h[2*(r=t.heap[n])+1]+1]+1)>p&&(o=p,g++),h[2*r+1]=o,r>l||(t.bl_count[o]++,a=0,r>=f&&(a=d[r-f]),s=h[2*r],t.opt_len+=s*(o+a),c&&(t.static_len+=s*(u[2*r+1]+a)));if(0!==g){do{for(o=p-1;0===t.bl_count[o];)o--;t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(o=p;0!==o;o--)for(r=t.bl_count[o];0!==r;)(i=t.heap[--n])>l||(h[2*i+1]!==o&&(t.opt_len+=(o-h[2*i+1])*h[2*i],h[2*i+1]=o),r--)}}(t,e),Mt(o,l,t.bl_count)}function Gt(t,e,n){var r,i,o=-1,a=e[1],s=0,h=7,l=4;for(0===a&&(h=138,l=3),e[2*(n+1)+1]=65535,r=0;r<=n;r++)i=a,a=e[2*(r+1)+1],++s<h&&i===a||(s<l?t.bl_tree[2*i]+=s:0!==i?(i!==o&&t.bl_tree[2*i]++,t.bl_tree[32]++):s<=10?t.bl_tree[34]++:t.bl_tree[36]++,s=0,o=i,0===a?(h=138,l=3):i===a?(h=6,l=3):(h=7,l=4))}function Ht(t,e,n){var r,i,o=-1,a=e[1],s=0,h=7,l=4;for(0===a&&(h=138,l=3),r=0;r<=n;r++)if(i=a,a=e[2*(r+1)+1],!(++s<h&&i===a)){if(s<l)do{Et(t,i,t.bl_tree)}while(0!=--s);else 0!==i?(i!==o&&(Et(t,i,t.bl_tree),s--),Et(t,16,t.bl_tree),jt(t,s-3,2)):s<=10?(Et(t,17,t.bl_tree),jt(t,s-3,3)):(Et(t,18,t.bl_tree),jt(t,s-11,7));s=0,o=i,0===a?(h=138,l=3):i===a?(h=6,l=3):(h=7,l=4)}}yt(Rt);var _t=!1;function Xt(t,e,n,r){jt(t,0+(r?1:0),3),function(t,e,n,r){Vt(t),r&&(Dt(t,n),Dt(t,~n)),vt.arraySet(t.pending_buf,t.window,e,n,t.pending),t.pending+=n}(t,e,n,!0)}var Zt={_tr_init:function(t){_t||(!function(){var t,e,n,r,i,o=new Array(16);for(n=0,r=0;r<28;r++)for(At[r]=n,t=0;t<1<<mt[r];t++)Ct[n++]=r;for(Ct[n-1]=r,i=0,r=0;r<16;r++)for(Rt[r]=i,t=0;t<1<<bt[r];t++)Ft[i++]=r;for(i>>=7;r<30;r++)for(Rt[r]=i<<7,t=0;t<1<<bt[r]-7;t++)Ft[256+i++]=r;for(e=0;e<=15;e++)o[e]=0;for(t=0;t<=143;)kt[2*t+1]=8,t++,o[8]++;for(;t<=255;)kt[2*t+1]=9,t++,o[9]++;for(;t<=279;)kt[2*t+1]=7,t++,o[7]++;for(;t<=287;)kt[2*t+1]=8,t++,o[8]++;for(Mt(kt,287,o),t=0;t<30;t++)St[2*t+1]=5,St[2*t]=It(t,5);zt=new Bt(kt,mt,257,286,15),Tt=new Bt(St,bt,0,30,15),Ot=new Bt(new Array(0),wt,0,19,7)}(),_t=!0),t.l_desc=new Nt(t.dyn_ltree,zt),t.d_desc=new Nt(t.dyn_dtree,Tt),t.bl_desc=new Nt(t.bl_tree,Ot),t.bi_buf=0,t.bi_valid=0,Ut(t)},_tr_stored_block:Xt,_tr_flush_block:function(t,e,n,r){var i,o,a=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),Lt(t,t.l_desc),Lt(t,t.d_desc),a=function(t){var e;for(Gt(t,t.dyn_ltree,t.l_desc.max_code),Gt(t,t.dyn_dtree,t.d_desc.max_code),Lt(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*xt[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(o=t.static_len+3+7>>>3)<=i&&(i=o)):i=o=n+5,n+4<=i&&-1!==e?Xt(t,e,n,r):4===t.strategy||o===i?(jt(t,2+(r?1:0),3),Kt(t,kt,St)):(jt(t,4+(r?1:0),3),function(t,e,n,r){var i;for(jt(t,e-257,5),jt(t,n-1,5),jt(t,r-4,4),i=0;i<r;i++)jt(t,t.bl_tree[2*xt[i]+1],3);Ht(t,t.dyn_ltree,e-1),Ht(t,t.dyn_dtree,n-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),Kt(t,t.dyn_ltree,t.dyn_dtree)),Ut(t),r&&Vt(t)},_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(Ct[n]+256+1)]++,t.dyn_dtree[2*Pt(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){jt(t,2,3),Et(t,256,kt),function(t){16===t.bi_valid?(Dt(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}};var Yt=function(t,e,n,r){for(var i=65535&t|0,o=t>>>16&65535|0,a=0;0!==n;){n-=a=n>2e3?2e3:n;do{o=o+(i=i+e[r++]|0)|0}while(--a);i%=65521,o%=65521}return i|o<<16|0};var Jt=function(){for(var t,e=[],n=0;n<256;n++){t=n;for(var r=0;r<8;r++)t=1&t?3988292384^t>>>1:t>>>1;e[n]=t}return e}();var Qt,$t=function(t,e,n,r){var i=Jt,o=r+n;t^=-1;for(var a=r;a<o;a++)t=t>>>8^i[255&(t^e[a])];return-1^t},te={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ee(t,e){return t.msg=te[e],e}function ne(t){return(t<<1)-(t>4?9:0)}function re(t){for(var e=t.length;--e>=0;)t[e]=0}function ie(t){var e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),0!==n&&(vt.arraySet(t.output,e.pending_buf,e.pending_out,n,t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0))}function oe(t,e){Zt._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ie(t.strm)}function ae(t,e){t.pending_buf[t.pending++]=e}function se(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function he(t,e,n,r){var i=t.avail_in;return i>r&&(i=r),0===i?0:(t.avail_in-=i,vt.arraySet(e,t.input,t.next_in,i,n),1===t.state.wrap?t.adler=Yt(t.adler,e,i,n):2===t.state.wrap&&(t.adler=$t(t.adler,e,i,n)),t.next_in+=i,t.total_in+=i,i)}function le(t,e){var n,r,i=t.max_chain_length,o=t.strstart,a=t.prev_length,s=t.nice_match,h=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,l=t.window,u=t.w_mask,c=t.prev,d=t.strstart+258,f=l[o+a-1],p=l[o+a];t.prev_length>=t.good_match&&(i>>=2),s>t.lookahead&&(s=t.lookahead);do{if(l[(n=e)+a]===p&&l[n+a-1]===f&&l[n]===l[o]&&l[++n]===l[o+1]){o+=2,n++;do{}while(l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&o<d);if(r=258-(d-o),o=d-258,r>a){if(t.match_start=e,a=r,r>=s)break;f=l[o+a-1],p=l[o+a]}}}while((e=c[e&u])>h&&0!=--i);return a<=t.lookahead?a:t.lookahead}function ue(t){var e,n,r,i,o,a=t.w_size;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=a+(a-262)){vt.arraySet(t.window,t.window,a,a,0),t.match_start-=a,t.strstart-=a,t.block_start-=a,e=n=t.hash_size;do{r=t.head[--e],t.head[e]=r>=a?r-a:0}while(--n);e=n=a;do{r=t.prev[--e],t.prev[e]=r>=a?r-a:0}while(--n);i+=a}if(0===t.strm.avail_in)break;if(n=he(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=n,t.lookahead+t.insert>=3)for(o=t.strstart-t.insert,t.ins_h=t.window[o],t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+3-1])&t.hash_mask,t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)}function ce(t,e){for(var n,r;;){if(t.lookahead<262){if(ue(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(n=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-262&&(t.match_length=le(t,n)),t.match_length>=3)if(r=Zt._tr_tally(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else r=Zt._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(r&&(oe(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,4===e?(oe(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(oe(t,!1),0===t.strm.avail_out)?1:2}function de(t,e){for(var n,r,i;;){if(t.lookahead<262){if(ue(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(n=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-262&&(t.match_length=le(t,n),t.match_length<=5&&(1===t.strategy||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-3,r=Zt._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=i&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,r&&(oe(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((r=Zt._tr_tally(t,0,t.window[t.strstart-1]))&&oe(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(r=Zt._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,4===e?(oe(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(oe(t,!1),0===t.strm.avail_out)?1:2}function fe(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i}function pe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new vt.Buf16(1146),this.dyn_dtree=new vt.Buf16(122),this.bl_tree=new vt.Buf16(78),re(this.dyn_ltree),re(this.dyn_dtree),re(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new vt.Buf16(16),this.heap=new vt.Buf16(573),re(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new vt.Buf16(573),re(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ge(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=2,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=0,Zt._tr_init(e),0):ee(t,-2)}function ve(t){var e,n=ge(t);return 0===n&&((e=t.state).window_size=2*e.w_size,re(e.head),e.max_lazy_match=Qt[e.level].max_lazy,e.good_match=Qt[e.level].good_length,e.nice_match=Qt[e.level].nice_length,e.max_chain_length=Qt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),n}function ye(t,e,n,r,i,o){if(!t)return-2;var a=1;if(-1===e&&(e=6),r<0?(a=0,r=-r):r>15&&(a=2,r-=16),i<1||i>9||8!==n||r<8||r>15||e<0||e>9||o<0||o>4)return ee(t,-2);8===r&&(r=9);var s=new pe;return t.state=s,s.strm=t,s.wrap=a,s.gzhead=null,s.w_bits=r,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=i+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+3-1)/3),s.window=new vt.Buf8(2*s.w_size),s.head=new vt.Buf16(s.hash_size),s.prev=new vt.Buf16(s.w_size),s.lit_bufsize=1<<i+6,s.pending_buf_size=4*s.lit_bufsize,s.pending_buf=new vt.Buf8(s.pending_buf_size),s.d_buf=1*s.lit_bufsize,s.l_buf=3*s.lit_bufsize,s.level=e,s.strategy=o,s.method=n,ve(t)}Qt=[new fe(0,0,0,0,(function(t,e){var n=65535;for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(ue(t),0===t.lookahead&&0===e)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var r=t.block_start+n;if((0===t.strstart||t.strstart>=r)&&(t.lookahead=t.strstart-r,t.strstart=r,oe(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-262&&(oe(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(oe(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(oe(t,!1),t.strm.avail_out),1)})),new fe(4,4,8,4,ce),new fe(4,5,16,8,ce),new fe(4,6,32,32,ce),new fe(4,4,16,16,de),new fe(8,16,32,32,de),new fe(8,16,128,128,de),new fe(8,32,128,256,de),new fe(32,128,258,1024,de),new fe(32,258,258,4096,de)];var me={deflateInit:function(t,e){return ye(t,e,8,15,8,0)},deflateInit2:ye,deflateReset:ve,deflateResetKeep:ge,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?-2:(t.state.gzhead=e,0):-2},deflate:function(t,e){var n,r,i,o;if(!t||!t.state||e>5||e<0)return t?ee(t,-2):-2;if(r=t.state,!t.output||!t.input&&0!==t.avail_in||666===r.status&&4!==e)return ee(t,0===t.avail_out?-5:-2);if(r.strm=t,n=r.last_flush,r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,ae(r,31),ae(r,139),ae(r,8),r.gzhead?(ae(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),ae(r,255&r.gzhead.time),ae(r,r.gzhead.time>>8&255),ae(r,r.gzhead.time>>16&255),ae(r,r.gzhead.time>>24&255),ae(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),ae(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(ae(r,255&r.gzhead.extra.length),ae(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=$t(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(ae(r,0),ae(r,0),ae(r,0),ae(r,0),ae(r,0),ae(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),ae(r,3),r.status=113);else{var a=8+(r.w_bits-8<<4)<<8;a|=(r.strategy>=2||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(a|=32),a+=31-a%31,r.status=113,se(r,a),0!==r.strstart&&(se(r,t.adler>>>16),se(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(i=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>i&&(t.adler=$t(t.adler,r.pending_buf,r.pending-i,i)),ie(t),i=r.pending,r.pending!==r.pending_buf_size));)ae(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>i&&(t.adler=$t(t.adler,r.pending_buf,r.pending-i,i)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){i=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>i&&(t.adler=$t(t.adler,r.pending_buf,r.pending-i,i)),ie(t),i=r.pending,r.pending===r.pending_buf_size)){o=1;break}o=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,ae(r,o)}while(0!==o);r.gzhead.hcrc&&r.pending>i&&(t.adler=$t(t.adler,r.pending_buf,r.pending-i,i)),0===o&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){i=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>i&&(t.adler=$t(t.adler,r.pending_buf,r.pending-i,i)),ie(t),i=r.pending,r.pending===r.pending_buf_size)){o=1;break}o=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,ae(r,o)}while(0!==o);r.gzhead.hcrc&&r.pending>i&&(t.adler=$t(t.adler,r.pending_buf,r.pending-i,i)),0===o&&(r.status=103)}else r.status=103;if(103===r.status&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&ie(t),r.pending+2<=r.pending_buf_size&&(ae(r,255&t.adler),ae(r,t.adler>>8&255),t.adler=0,r.status=113)):r.status=113),0!==r.pending){if(ie(t),0===t.avail_out)return r.last_flush=-1,0}else if(0===t.avail_in&&ne(e)<=ne(n)&&4!==e)return ee(t,-5);if(666===r.status&&0!==t.avail_in)return ee(t,-5);if(0!==t.avail_in||0!==r.lookahead||0!==e&&666!==r.status){var s=2===r.strategy?function(t,e){for(var n;;){if(0===t.lookahead&&(ue(t),0===t.lookahead)){if(0===e)return 1;break}if(t.match_length=0,n=Zt._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(oe(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(oe(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(oe(t,!1),0===t.strm.avail_out)?1:2}(r,e):3===r.strategy?function(t,e){for(var n,r,i,o,a=t.window;;){if(t.lookahead<=258){if(ue(t),t.lookahead<=258&&0===e)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(r=a[i=t.strstart-1])===a[++i]&&r===a[++i]&&r===a[++i]){o=t.strstart+258;do{}while(r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&i<o);t.match_length=258-(o-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(n=Zt._tr_tally(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=Zt._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(oe(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(oe(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(oe(t,!1),0===t.strm.avail_out)?1:2}(r,e):Qt[r.level].func(r,e);if(3!==s&&4!==s||(r.status=666),1===s||3===s)return 0===t.avail_out&&(r.last_flush=-1),0;if(2===s&&(1===e?Zt._tr_align(r):5!==e&&(Zt._tr_stored_block(r,0,0,!1),3===e&&(re(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),ie(t),0===t.avail_out))return r.last_flush=-1,0}return 4!==e?0:r.wrap<=0?1:(2===r.wrap?(ae(r,255&t.adler),ae(r,t.adler>>8&255),ae(r,t.adler>>16&255),ae(r,t.adler>>24&255),ae(r,255&t.total_in),ae(r,t.total_in>>8&255),ae(r,t.total_in>>16&255),ae(r,t.total_in>>24&255)):(se(r,t.adler>>>16),se(r,65535&t.adler)),ie(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?0:1)},deflateEnd:function(t){var e;return t&&t.state?42!==(e=t.state.status)&&69!==e&&73!==e&&91!==e&&103!==e&&113!==e&&666!==e?ee(t,-2):(t.state=null,113===e?ee(t,-3):0):-2},deflateSetDictionary:function(t,e){var n,r,i,o,a,s,h,l,u=e.length;if(!t||!t.state)return-2;if(2===(o=(n=t.state).wrap)||1===o&&42!==n.status||n.lookahead)return-2;for(1===o&&(t.adler=Yt(t.adler,e,u,0)),n.wrap=0,u>=n.w_size&&(0===o&&(re(n.head),n.strstart=0,n.block_start=0,n.insert=0),l=new vt.Buf8(n.w_size),vt.arraySet(l,e,u-n.w_size,n.w_size,0),e=l,u=n.w_size),a=t.avail_in,s=t.next_in,h=t.input,t.avail_in=u,t.next_in=0,t.input=e,ue(n);n.lookahead>=3;){r=n.strstart,i=n.lookahead-2;do{n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+3-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++}while(--i);n.strstart=r,n.lookahead=2,ue(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=s,t.input=h,t.avail_in=a,n.wrap=o,0},deflateInfo:"pako deflate (from Nodeca project)"},be=!0,we=!0;try{String.fromCharCode.apply(null,[0])}catch(t){be=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){we=!1}for(var xe=new vt.Buf8(256),ke=0;ke<256;ke++)xe[ke]=ke>=252?6:ke>=248?5:ke>=240?4:ke>=224?3:ke>=192?2:1;xe[254]=xe[254]=1;function Se(t,e){if(e<65534&&(t.subarray&&we||!t.subarray&&be))return String.fromCharCode.apply(null,vt.shrinkBuf(t,e));for(var n="",r=0;r<e;r++)n+=String.fromCharCode(t[r]);return n}var Fe=function(t){var e,n,r,i,o,a=t.length,s=0;for(i=0;i<a;i++)55296==(64512&(n=t.charCodeAt(i)))&&i+1<a&&56320==(64512&(r=t.charCodeAt(i+1)))&&(n=65536+(n-55296<<10)+(r-56320),i++),s+=n<128?1:n<2048?2:n<65536?3:4;for(e=new vt.Buf8(s),o=0,i=0;o<s;i++)55296==(64512&(n=t.charCodeAt(i)))&&i+1<a&&56320==(64512&(r=t.charCodeAt(i+1)))&&(n=65536+(n-55296<<10)+(r-56320),i++),n<128?e[o++]=n:n<2048?(e[o++]=192|n>>>6,e[o++]=128|63&n):n<65536?(e[o++]=224|n>>>12,e[o++]=128|n>>>6&63,e[o++]=128|63&n):(e[o++]=240|n>>>18,e[o++]=128|n>>>12&63,e[o++]=128|n>>>6&63,e[o++]=128|63&n);return e},Ce=function(t){return Se(t,t.length)},Ae=function(t){for(var e=new vt.Buf8(t.length),n=0,r=e.length;n<r;n++)e[n]=t.charCodeAt(n);return e},ze=function(t,e){var n,r,i,o,a=e||t.length,s=new Array(2*a);for(r=0,n=0;n<a;)if((i=t[n++])<128)s[r++]=i;else if((o=xe[i])>4)s[r++]=65533,n+=o-1;else{for(i&=2===o?31:3===o?15:7;o>1&&n<a;)i=i<<6|63&t[n++],o--;o>1?s[r++]=65533:i<65536?s[r++]=i:(i-=65536,s[r++]=55296|i>>10&1023,s[r++]=56320|1023&i)}return Se(s,r)},Te=function(t,e){var n;for((e=e||t.length)>t.length&&(e=t.length),n=e-1;n>=0&&128==(192&t[n]);)n--;return n<0||0===n?e:n+xe[t[n]]>e?n:e};var Oe=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Re=Object.prototype.toString;function Be(t){if(!(this instanceof Be))return new Be(t);this.options=vt.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Oe,this.strm.avail_out=0;var n=me.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(0!==n)throw new Error(te[n]);if(e.header&&me.deflateSetHeader(this.strm,e.header),e.dictionary){var r;if(r="string"==typeof e.dictionary?Fe(e.dictionary):"[object ArrayBuffer]"===Re.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,0!==(n=me.deflateSetDictionary(this.strm,r)))throw new Error(te[n]);this._dict_set=!0}}function Ne(t,e){var n=new Be(e);if(n.push(t,!0),n.err)throw n.msg||te[n.err];return n.result}Be.prototype.push=function(t,e){var n,r,i=this.strm,o=this.options.chunkSize;if(this.ended)return!1;r=e===~~e?e:!0===e?4:0,"string"==typeof t?i.input=Fe(t):"[object ArrayBuffer]"===Re.call(t)?i.input=new Uint8Array(t):i.input=t,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new vt.Buf8(o),i.next_out=0,i.avail_out=o),1!==(n=me.deflate(i,r))&&0!==n)return this.onEnd(n),this.ended=!0,!1;0!==i.avail_out&&(0!==i.avail_in||4!==r&&2!==r)||("string"===this.options.to?this.onData(Ce(vt.shrinkBuf(i.output,i.next_out))):this.onData(vt.shrinkBuf(i.output,i.next_out)))}while((i.avail_in>0||0===i.avail_out)&&1!==n);return 4===r?(n=me.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,0===n):2!==r||(this.onEnd(0),i.avail_out=0,!0)},Be.prototype.onData=function(t){this.chunks.push(t)},Be.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=vt.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Pe={Deflate:Be,deflate:Ne,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Ne(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Ne(t,e)}},De=function(t,e){var n,r,i,o,a,s,h,l,u,c,d,f,p,g,v,y,m,b,w,x,k,S,F,C,A;n=t.state,r=t.next_in,C=t.input,i=r+(t.avail_in-5),o=t.next_out,A=t.output,a=o-(e-t.avail_out),s=o+(t.avail_out-257),h=n.dmax,l=n.wsize,u=n.whave,c=n.wnext,d=n.window,f=n.hold,p=n.bits,g=n.lencode,v=n.distcode,y=(1<<n.lenbits)-1,m=(1<<n.distbits)-1;t:do{p<15&&(f+=C[r++]<<p,p+=8,f+=C[r++]<<p,p+=8),b=g[f&y];e:for(;;){if(f>>>=w=b>>>24,p-=w,0===(w=b>>>16&255))A[o++]=65535&b;else{if(!(16&w)){if(0==(64&w)){b=g[(65535&b)+(f&(1<<w)-1)];continue e}if(32&w){n.mode=12;break t}t.msg="invalid literal/length code",n.mode=30;break t}x=65535&b,(w&=15)&&(p<w&&(f+=C[r++]<<p,p+=8),x+=f&(1<<w)-1,f>>>=w,p-=w),p<15&&(f+=C[r++]<<p,p+=8,f+=C[r++]<<p,p+=8),b=v[f&m];n:for(;;){if(f>>>=w=b>>>24,p-=w,!(16&(w=b>>>16&255))){if(0==(64&w)){b=v[(65535&b)+(f&(1<<w)-1)];continue n}t.msg="invalid distance code",n.mode=30;break t}if(k=65535&b,p<(w&=15)&&(f+=C[r++]<<p,(p+=8)<w&&(f+=C[r++]<<p,p+=8)),(k+=f&(1<<w)-1)>h){t.msg="invalid distance too far back",n.mode=30;break t}if(f>>>=w,p-=w,k>(w=o-a)){if((w=k-w)>u&&n.sane){t.msg="invalid distance too far back",n.mode=30;break t}if(S=0,F=d,0===c){if(S+=l-w,w<x){x-=w;do{A[o++]=d[S++]}while(--w);S=o-k,F=A}}else if(c<w){if(S+=l+c-w,(w-=c)<x){x-=w;do{A[o++]=d[S++]}while(--w);if(S=0,c<x){x-=w=c;do{A[o++]=d[S++]}while(--w);S=o-k,F=A}}}else if(S+=c-w,w<x){x-=w;do{A[o++]=d[S++]}while(--w);S=o-k,F=A}for(;x>2;)A[o++]=F[S++],A[o++]=F[S++],A[o++]=F[S++],x-=3;x&&(A[o++]=F[S++],x>1&&(A[o++]=F[S++]))}else{S=o-k;do{A[o++]=A[S++],A[o++]=A[S++],A[o++]=A[S++],x-=3}while(x>2);x&&(A[o++]=A[S++],x>1&&(A[o++]=A[S++]))}break}}break}}while(r<i&&o<s);r-=x=p>>3,f&=(1<<(p-=x<<3))-1,t.next_in=r,t.next_out=o,t.avail_in=r<i?i-r+5:5-(r-i),t.avail_out=o<s?s-o+257:257-(o-s),n.hold=f,n.bits=p},je=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Ee=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Ie=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Me=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],Ue=function(t,e,n,r,i,o,a,s){var h,l,u,c,d,f,p,g,v,y=s.bits,m=0,b=0,w=0,x=0,k=0,S=0,F=0,C=0,A=0,z=0,T=null,O=0,R=new vt.Buf16(16),B=new vt.Buf16(16),N=null,P=0;for(m=0;m<=15;m++)R[m]=0;for(b=0;b<r;b++)R[e[n+b]]++;for(k=y,x=15;x>=1&&0===R[x];x--);if(k>x&&(k=x),0===x)return i[o++]=20971520,i[o++]=20971520,s.bits=1,0;for(w=1;w<x&&0===R[w];w++);for(k<w&&(k=w),C=1,m=1;m<=15;m++)if(C<<=1,(C-=R[m])<0)return-1;if(C>0&&(0===t||1!==x))return-1;for(B[1]=0,m=1;m<15;m++)B[m+1]=B[m]+R[m];for(b=0;b<r;b++)0!==e[n+b]&&(a[B[e[n+b]]++]=b);if(0===t?(T=N=a,f=19):1===t?(T=je,O-=257,N=Ee,P-=257,f=256):(T=Ie,N=Me,f=-1),z=0,b=0,m=w,d=o,S=k,F=0,u=-1,c=(A=1<<k)-1,1===t&&A>852||2===t&&A>592)return 1;for(;;){p=m-F,a[b]<f?(g=0,v=a[b]):a[b]>f?(g=N[P+a[b]],v=T[O+a[b]]):(g=96,v=0),h=1<<m-F,w=l=1<<S;do{i[d+(z>>F)+(l-=h)]=p<<24|g<<16|v|0}while(0!==l);for(h=1<<m-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,b++,0==--R[m]){if(m===x)break;m=e[n+a[b]]}if(m>k&&(z&c)!==u){for(0===F&&(F=k),d+=w,C=1<<(S=m-F);S+F<x&&!((C-=R[S+F])<=0);)S++,C<<=1;if(A+=1<<S,1===t&&A>852||2===t&&A>592)return 1;i[u=z&c]=k<<24|S<<16|d-o|0}}return 0!==z&&(i[d+z]=m-F<<24|64<<16|0),s.bits=k,0};function Ve(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function We(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new vt.Buf16(320),this.work=new vt.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function qe(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new vt.Buf32(852),e.distcode=e.distdyn=new vt.Buf32(592),e.sane=1,e.back=-1,0):-2}function Ke(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,qe(t)):-2}function Le(t,e){var n,r;return t&&t.state?(r=t.state,e<0?(n=0,e=-e):(n=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?-2:(null!==r.window&&r.wbits!==e&&(r.window=null),r.wrap=n,r.wbits=e,Ke(t))):-2}function Ge(t,e){var n,r;return t?(r=new We,t.state=r,r.window=null,0!==(n=Le(t,e))&&(t.state=null),n):-2}var He,_e,Xe=!0;function Ze(t){if(Xe){var e;for(He=new vt.Buf32(512),_e=new vt.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(Ue(1,t.lens,0,288,He,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;Ue(2,t.lens,0,32,_e,0,t.work,{bits:5}),Xe=!1}t.lencode=He,t.lenbits=9,t.distcode=_e,t.distbits=5}function Ye(t,e,n,r){var i,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new vt.Buf8(o.wsize)),r>=o.wsize?(vt.arraySet(o.window,e,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((i=o.wsize-o.wnext)>r&&(i=r),vt.arraySet(o.window,e,n-r,i,o.wnext),(r-=i)?(vt.arraySet(o.window,e,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0}var Je={inflateReset:Ke,inflateReset2:Le,inflateResetKeep:qe,inflateInit:function(t){return Ge(t,15)},inflateInit2:Ge,inflate:function(t,e){var n,r,i,o,a,s,h,l,u,c,d,f,p,g,v,y,m,b,w,x,k,S,F,C,A=0,z=new vt.Buf8(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return-2;12===(n=t.state).mode&&(n.mode=13),a=t.next_out,i=t.output,h=t.avail_out,o=t.next_in,r=t.input,s=t.avail_in,l=n.hold,u=n.bits,c=s,d=h,S=0;t:for(;;)switch(n.mode){case 1:if(0===n.wrap){n.mode=13;break}for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(2&n.wrap&&35615===l){n.check=0,z[0]=255&l,z[1]=l>>>8&255,n.check=$t(n.check,z,2,0),l=0,u=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&l)<<8)+(l>>8))%31){t.msg="incorrect header check",n.mode=30;break}if(8!=(15&l)){t.msg="unknown compression method",n.mode=30;break}if(u-=4,k=8+(15&(l>>>=4)),0===n.wbits)n.wbits=k;else if(k>n.wbits){t.msg="invalid window size",n.mode=30;break}n.dmax=1<<k,t.adler=n.check=1,n.mode=512&l?10:12,l=0,u=0;break;case 2:for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(n.flags=l,8!=(255&n.flags)){t.msg="unknown compression method",n.mode=30;break}if(57344&n.flags){t.msg="unknown header flags set",n.mode=30;break}n.head&&(n.head.text=l>>8&1),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,n.check=$t(n.check,z,2,0)),l=0,u=0,n.mode=3;case 3:for(;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.head&&(n.head.time=l),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,z[2]=l>>>16&255,z[3]=l>>>24&255,n.check=$t(n.check,z,4,0)),l=0,u=0,n.mode=4;case 4:for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.head&&(n.head.xflags=255&l,n.head.os=l>>8),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,n.check=$t(n.check,z,2,0)),l=0,u=0,n.mode=5;case 5:if(1024&n.flags){for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.length=l,n.head&&(n.head.extra_len=l),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,n.check=$t(n.check,z,2,0)),l=0,u=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&((f=n.length)>s&&(f=s),f&&(n.head&&(k=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),vt.arraySet(n.head.extra,r,o,f,k)),512&n.flags&&(n.check=$t(n.check,r,f,o)),s-=f,o+=f,n.length-=f),n.length))break t;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===s)break t;f=0;do{k=r[o+f++],n.head&&k&&n.length<65536&&(n.head.name+=String.fromCharCode(k))}while(k&&f<s);if(512&n.flags&&(n.check=$t(n.check,r,f,o)),s-=f,o+=f,k)break t}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===s)break t;f=0;do{k=r[o+f++],n.head&&k&&n.length<65536&&(n.head.comment+=String.fromCharCode(k))}while(k&&f<s);if(512&n.flags&&(n.check=$t(n.check,r,f,o)),s-=f,o+=f,k)break t}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(l!==(65535&n.check)){t.msg="header crc mismatch",n.mode=30;break}l=0,u=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=12;break;case 10:for(;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}t.adler=n.check=Ve(l),l=0,u=0,n.mode=11;case 11:if(0===n.havedict)return t.next_out=a,t.avail_out=h,t.next_in=o,t.avail_in=s,n.hold=l,n.bits=u,2;t.adler=n.check=1,n.mode=12;case 12:if(5===e||6===e)break t;case 13:if(n.last){l>>>=7&u,u-=7&u,n.mode=27;break}for(;u<3;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}switch(n.last=1&l,u-=1,3&(l>>>=1)){case 0:n.mode=14;break;case 1:if(Ze(n),n.mode=20,6===e){l>>>=2,u-=2;break t}break;case 2:n.mode=17;break;case 3:t.msg="invalid block type",n.mode=30}l>>>=2,u-=2;break;case 14:for(l>>>=7&u,u-=7&u;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if((65535&l)!=(l>>>16^65535)){t.msg="invalid stored block lengths",n.mode=30;break}if(n.length=65535&l,l=0,u=0,n.mode=15,6===e)break t;case 15:n.mode=16;case 16:if(f=n.length){if(f>s&&(f=s),f>h&&(f=h),0===f)break t;vt.arraySet(i,r,o,f,a),s-=f,o+=f,h-=f,a+=f,n.length-=f;break}n.mode=12;break;case 17:for(;u<14;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(n.nlen=257+(31&l),l>>>=5,u-=5,n.ndist=1+(31&l),l>>>=5,u-=5,n.ncode=4+(15&l),l>>>=4,u-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;u<3;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.lens[T[n.have++]]=7&l,l>>>=3,u-=3}for(;n.have<19;)n.lens[T[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,F={bits:n.lenbits},S=Ue(0,n.lens,0,19,n.lencode,0,n.work,F),n.lenbits=F.bits,S){t.msg="invalid code lengths set",n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;y=(A=n.lencode[l&(1<<n.lenbits)-1])>>>16&255,m=65535&A,!((v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(m<16)l>>>=v,u-=v,n.lens[n.have++]=m;else{if(16===m){for(C=v+2;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(l>>>=v,u-=v,0===n.have){t.msg="invalid bit length repeat",n.mode=30;break}k=n.lens[n.have-1],f=3+(3&l),l>>>=2,u-=2}else if(17===m){for(C=v+3;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}u-=v,k=0,f=3+(7&(l>>>=v)),l>>>=3,u-=3}else{for(C=v+7;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}u-=v,k=0,f=11+(127&(l>>>=v)),l>>>=7,u-=7}if(n.have+f>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=30;break}for(;f--;)n.lens[n.have++]=k}}if(30===n.mode)break;if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",n.mode=30;break}if(n.lenbits=9,F={bits:n.lenbits},S=Ue(1,n.lens,0,n.nlen,n.lencode,0,n.work,F),n.lenbits=F.bits,S){t.msg="invalid literal/lengths set",n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,F={bits:n.distbits},S=Ue(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,F),n.distbits=F.bits,S){t.msg="invalid distances set",n.mode=30;break}if(n.mode=20,6===e)break t;case 20:n.mode=21;case 21:if(s>=6&&h>=258){t.next_out=a,t.avail_out=h,t.next_in=o,t.avail_in=s,n.hold=l,n.bits=u,De(t,d),a=t.next_out,i=t.output,h=t.avail_out,o=t.next_in,r=t.input,s=t.avail_in,l=n.hold,u=n.bits,12===n.mode&&(n.back=-1);break}for(n.back=0;y=(A=n.lencode[l&(1<<n.lenbits)-1])>>>16&255,m=65535&A,!((v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(y&&0==(240&y)){for(b=v,w=y,x=m;y=(A=n.lencode[x+((l&(1<<b+w)-1)>>b)])>>>16&255,m=65535&A,!(b+(v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=v,u-=v,n.back+=v,n.length=m,0===y){n.mode=26;break}if(32&y){n.back=-1,n.mode=12;break}if(64&y){t.msg="invalid literal/length code",n.mode=30;break}n.extra=15&y,n.mode=22;case 22:if(n.extra){for(C=n.extra;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.length+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;y=(A=n.distcode[l&(1<<n.distbits)-1])>>>16&255,m=65535&A,!((v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(0==(240&y)){for(b=v,w=y,x=m;y=(A=n.distcode[x+((l&(1<<b+w)-1)>>b)])>>>16&255,m=65535&A,!(b+(v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=v,u-=v,n.back+=v,64&y){t.msg="invalid distance code",n.mode=30;break}n.offset=m,n.extra=15&y,n.mode=24;case 24:if(n.extra){for(C=n.extra;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.offset+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=30;break}n.mode=25;case 25:if(0===h)break t;if(f=d-h,n.offset>f){if((f=n.offset-f)>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=30;break}f>n.wnext?(f-=n.wnext,p=n.wsize-f):p=n.wnext-f,f>n.length&&(f=n.length),g=n.window}else g=i,p=a-n.offset,f=n.length;f>h&&(f=h),h-=f,n.length-=f;do{i[a++]=g[p++]}while(--f);0===n.length&&(n.mode=21);break;case 26:if(0===h)break t;i[a++]=n.length,h--,n.mode=21;break;case 27:if(n.wrap){for(;u<32;){if(0===s)break t;s--,l|=r[o++]<<u,u+=8}if(d-=h,t.total_out+=d,n.total+=d,d&&(t.adler=n.check=n.flags?$t(n.check,i,d,a-d):Yt(n.check,i,d,a-d)),d=h,(n.flags?l:Ve(l))!==n.check){t.msg="incorrect data check",n.mode=30;break}l=0,u=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(l!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=30;break}l=0,u=0}n.mode=29;case 29:S=1;break t;case 30:S=-3;break t;case 31:return-4;case 32:default:return-2}return t.next_out=a,t.avail_out=h,t.next_in=o,t.avail_in=s,n.hold=l,n.bits=u,(n.wsize||d!==t.avail_out&&n.mode<30&&(n.mode<27||4!==e))&&Ye(t,t.output,t.next_out,d-t.avail_out),c-=t.avail_in,d-=t.avail_out,t.total_in+=c,t.total_out+=d,n.total+=d,n.wrap&&d&&(t.adler=n.check=n.flags?$t(n.check,i,d,t.next_out-d):Yt(n.check,i,d,t.next_out-d)),t.data_type=n.bits+(n.last?64:0)+(12===n.mode?128:0)+(20===n.mode||15===n.mode?256:0),(0===c&&0===d||4===e)&&0===S&&(S=-5),S},inflateEnd:function(t){if(!t||!t.state)return-2;var e=t.state;return e.window&&(e.window=null),t.state=null,0},inflateGetHeader:function(t,e){var n;return t&&t.state?0==(2&(n=t.state).wrap)?-2:(n.head=e,e.done=!1,0):-2},inflateSetDictionary:function(t,e){var n,r=e.length;return t&&t.state?0!==(n=t.state).wrap&&11!==n.mode?-2:11===n.mode&&Yt(1,e,r,0)!==n.check?-3:Ye(t,e,r,r)?(n.mode=31,-4):(n.havedict=1,0):-2},inflateInfo:"pako inflate (from Nodeca project)"},Qe={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};var $e=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},tn=Object.prototype.toString;function en(t){if(!(this instanceof en))return new en(t);this.options=vt.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Oe,this.strm.avail_out=0;var n=Je.inflateInit2(this.strm,e.windowBits);if(n!==Qe.Z_OK)throw new Error(te[n]);if(this.header=new $e,Je.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Fe(e.dictionary):"[object ArrayBuffer]"===tn.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(n=Je.inflateSetDictionary(this.strm,e.dictionary))!==Qe.Z_OK))throw new Error(te[n])}function nn(t,e){var n=new en(e);if(n.push(t,!0),n.err)throw n.msg||te[n.err];return n.result}en.prototype.push=function(t,e){var n,r,i,o,a,s=this.strm,h=this.options.chunkSize,l=this.options.dictionary,u=!1;if(this.ended)return!1;r=e===~~e?e:!0===e?Qe.Z_FINISH:Qe.Z_NO_FLUSH,"string"==typeof t?s.input=Ae(t):"[object ArrayBuffer]"===tn.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new vt.Buf8(h),s.next_out=0,s.avail_out=h),(n=Je.inflate(s,Qe.Z_NO_FLUSH))===Qe.Z_NEED_DICT&&l&&(n=Je.inflateSetDictionary(this.strm,l)),n===Qe.Z_BUF_ERROR&&!0===u&&(n=Qe.Z_OK,u=!1),n!==Qe.Z_STREAM_END&&n!==Qe.Z_OK)return this.onEnd(n),this.ended=!0,!1;s.next_out&&(0!==s.avail_out&&n!==Qe.Z_STREAM_END&&(0!==s.avail_in||r!==Qe.Z_FINISH&&r!==Qe.Z_SYNC_FLUSH)||("string"===this.options.to?(i=Te(s.output,s.next_out),o=s.next_out-i,a=ze(s.output,i),s.next_out=o,s.avail_out=h-o,o&&vt.arraySet(s.output,s.output,i,o,0),this.onData(a)):this.onData(vt.shrinkBuf(s.output,s.next_out)))),0===s.avail_in&&0===s.avail_out&&(u=!0)}while((s.avail_in>0||0===s.avail_out)&&n!==Qe.Z_STREAM_END);return n===Qe.Z_STREAM_END&&(r=Qe.Z_FINISH),r===Qe.Z_FINISH?(n=Je.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Qe.Z_OK):r!==Qe.Z_SYNC_FLUSH||(this.onEnd(Qe.Z_OK),s.avail_out=0,!0)},en.prototype.onData=function(t){this.chunks.push(t)},en.prototype.onEnd=function(t){t===Qe.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=vt.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var rn={Inflate:en,inflate:nn,inflateRaw:function(t,e){return(e=e||{}).raw=!0,nn(t,e)},ungzip:nn},on={};(0,vt.assign)(on,Pe,rn,Qe);for(var an=on,sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",hn=new Uint8Array(256),ln=0;ln<sn.length;ln++)hn[sn.charCodeAt(ln)]=ln;var un,cn=function(t){return function(t){for(var e="",n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}(an.inflate(function(t){var e,n,r,i,o,a=.75*t.length,s=t.length,h=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var l=new Uint8Array(a);for(e=0;e<s;e+=4)n=hn[t.charCodeAt(e)],r=hn[t.charCodeAt(e+1)],i=hn[t.charCodeAt(e+2)],o=hn[t.charCodeAt(e+3)],l[h++]=n<<2|r>>4,l[h++]=(15&r)<<4|i>>2,l[h++]=(3&i)<<6|63&o;return l}(t)))},dn={Courier:"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","Courier-Bold":"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","Courier-Oblique":"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","Courier-BoldOblique":"eJyFWdtyGjkQ/RVqnnarcAo7vuE3jEnCxgEvGDtxKg9iRgxaa0ZEF9s4lX/fnrGdTVZ9lBcKTmvU96PW8C0bmqqStc9OsqsPwYlSdnaPDvb6naP+3v5+1s3emNpPRCVpwdAEq6TdOTW6mC61+hpksyBo/euCTrOg89MKUSm9/XUNwddSletGcbOcfo+90Cof1KWmdTu7e4S4N+pBFhfK5+vsxNsgu9lwLazIvbRz2Tw7evCyLmQxM5Won809PTUP2cnnnYOj7s7eQa97fNjvHvd2v3SzBS21WtXywjjllakbRb3eT4LLtcpva+lcdkJPZlfSunZZ1uu9ftXr9UjFxHiVP7my2drGh84f+Z+d3f5xv0uf/V77udt+vm4/jzqDwixlZ751XlauM65zYzfGCi+LV53OQOvOrNnHdWbSSXtHKOkZ0apC1eU8X8s2dO0mcy/qQtjiRUoLh2Lz7jmWB4cUto8vv/Zf97vZwOVNhGx2crhHP8/kj987uxShbO6Ld9fZyfF++/WKvu72Dp/i/EF6q3IKxedv2fVH2qAJ1YQscRtBEfje/R8sH3Itqhj/Ggx5utSxpA7VsglxWceywmgtbIxvpM2bio0EoiKRo/AAC9pcMfsJK2stV0gEHhOu2dHdMk/p4GI0p0YTMbzebtaS8Z5cUYbxxGnh1jH8KK2JUVMzWfL3zEq/tpJZu6JuZVB1x6x16oEB5R3nneRjWivO4Nxow+zhZKWASDcNHCv9GgRTg6WV1IiMm8ReriWJOPeM7YMYOo2hYQydxdAoht7E0NsYehdD4xj6K4bex9B5DH2IoUkMTWPoIob+jqFZDM1j6DKGFjF0FUPXMfQxhj7F0E0MLekQupWep40lyUCfPj8HOSVXKlc2DwyLhoa1HZ0cTIu0/MYbw3DOkukxhn+ZDmK4gGkohuViSMXQPzHE0CvTwky0mK5laG/DhDKGGG5g6IWJfYihuxi6jyGGSbcM6fP1BQphyR2m7fpUNXqlC3jUF+aeiTN/OjfHpW4GlriEmoGO5dktd3astLGKPQ/ALnmwdIznTADbtnGqHTnh1MJHswyKJJUBFNCI241/IwahXzHdsWIKnyY5lmYKUZbckfaEs6PY08DR5E5ayfQ+zUKitGLDkRpdASTjxX/hXQqXiHBaCkL0IwFALrVWG6eYRiVP/doENCk+Hfp8aVMAuNFH5MFzg0vL5CstmXYGfVWJ3HI1vLSSU1wYL3K+3wq6ZUnWf8t2YS4LCig3oYa6FDZUWgRGjSlpyGRYOhesH7LiC3bAjDzGFiua8fih8BwcsFOE8woqIrmgWQ2Cj3czWzLdqYFeg3Bmd2pNusVSyTNJG+N8SlB+AhRNSGdUgtR9whYU6k5x1fwJWDZIdYYADy1SD23BQ669dqEekaktF3yfLHAYBGqGBbAuoAdGWMkZEQR3/0g6mr+8qmBUIcrJQR0IPi6TpAEa1Shg1MvkbkO0G2DVUYInHXDTQUJUQLs2j7IuGcEMqHibdDIkmyQlHKCUWmBIDn29SUTucm0ss9kUaZ+BuM0BXgBrF0hB4CuzfbfhQjvgMDPRFJTgAOGAVqugvdpoZswMwMFL4CCNWl4JXagVc7vaYmqYAD0qVSyjZJklTh0syoEdNaJBlNAJCNAYbNS8eaOBgXv9trTmVtbsHcjKUjkw9b4FyR6nGCVQV/NXkRGoKQscMigyN+CBGxCx55dc4BXYyDMTyhCSgk7ylkejHzwdkWCAxodEVYIAP6LWQLqnKCPo6EGZckgzdmKaHEuAh2dSeyZXnidpf28SjIhNq5hXGgpYZNJz5giFvgATTsvjVMCWCpkxbZ6oV74i3yfr+BwkzltRyEpYxnKZYIUxiNIYFc45sJqCthaaORmamwlocJOqqBpMTYvf5A/ERyKHSsCl5NBzVrmk8kGYJ1M3TVteEEtw/3YYkKIhMCJANi9UzqXhDGxkk95MQH4MwGfpsk5KB2DPAeRofuaagn0eEx0yQqc90n2bdAUMAuNkKwATfPpyY8om37Xh3o9gLg1YRFuhf6vSF1ruIH8ETtXJrSjk+IRQqMdHofkf8ks3ey9tfSGUbf49/vL9XxrnGMA=",Helvetica:"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","Helvetica-Bold":"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","Helvetica-Oblique":"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","Helvetica-BoldOblique":"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","Times-Roman":"eJyFnVtzG0mOhf+Kgk+7Ee5ZSdbN/aa+ebzuMdvupmjORD9QUlnmmmJpSMoSZ2L++9YNwMEBkn5xuL6TdUkkgLxUFvXv0Y/1/X212o6+H1397XEzv6sOTl6+Onx1cHry6uXJ6MXol3q1fTe/r5oCfyzuq813H+r7+aoVHpdLFA5UmN8vljuUGjitFnef27tIqTfb+XJxc7m6WzbFDpvjzS+L5+r2t8X25vPo++36sXox+vHzfD2/2Vbr36v21J+ft9XqtrrVGzWP9sMP9fPo+398d3R28eK746OLF0eHh4cvLl5d/PliNGkKr5eLVfVbvVlsF/Vq9P13jQzCH58XN19W1WYz+v604VfVetMVGx0eHv+luVBzk3f1dnHT1uTH+mG3bitx8F83/31w9Ori9EX773n376v231eH3b8vu3/PDy5v6+vq4PfdZlvdbw7erG7q9UO9nm+r278cHFwulwcf2qs1dqs21fprQ3szLjYH84Pten5b3c/XXw7qTwe/Llb1dvdQfffXqjnr8vXBfHX7P/X6YNGcvHm83ixuF/P1otr8pXncn5vb3C5Wd7/ffK66Buie4vdtc8p8fStqU/DH+cNfhzY5Ozt+MfooRyetJS43N62p14148fLF6KdKjxsjn78Y/b69/et09P3xRfffq+a/Fyd9e/2t2q4XN41B//Hv0fRjU6S93LvmQTYP88aO/3nR45cvX/a4er5Zzu+Vnxxe9Pyfj3VjqeulKqeHw4VWj/fXbUPdraJ2Wy+X87XyC7nLQ7W+ab1chPPz4Tbz+0baNNaJT9Y9QdfiUXuYr6vVsvpUkvxp+njzTXvFzRdTzk6Gs5aPG6Vqs5smOOfxFp93D5+rVSzeVGVRW02OpZKb5XzzOT7Nv6p1HWm9qiLcPiUlt5/XVVL2U/24Tujia1J2s3hOYPW1Stq2ym26WsADa5Vv6mW9SixR3S+8pC2wbNNAoNU/H+fLiO/WVRPIVs2TkxNxmmrTpRpRXh0fDW0P3nd83LNLRWdn5z36IaIf44k/Wamj4fo/21OenvXol3ji64j+Gh3sjaEmtXXof+OJb+ND/GqhJyf+LZ74LqJxfPrfYqn30Tgf4om/x+f6I15rEtGVtZq05zSW+hjRLN7x79Gq101n9qXaurShnnndaD5O+TyfU07OXklOuVksbhbrm0fLohocj23S3jQ9T5J5u/zmHka9eB6vdB1L3ST5N5ZK7vwpnngX0edopEVE/xdP/BJLWQhr5k+slSSdJO09RPTPWEfLDRpCm/hcST57jOhr9LinWCrJpLvYHP8ydHFo/uUd4VhbHTpTX556uJMj8MbtYnlb7Opv66fEzq53tp5g243TzDmOJOw/tQNDzLNW56zv+LSs14uEb6rCVW4e1003fmMGPJLad2GzWXQD1yT996MWZ01z8sdFo9zX23zk0Mrdhb8hk+kl7X1aJCwZPzUDuXQ4cDu/u6uSnrvnOBSjAUfbdtW6gtg/tbHQ/G49f4CkJqdeN9OHKqmlmfd6vtlj4f1qYfylDeD1bs7Q22a5XDxsFptEauq6/Vw/urFi6Padc1vLredfk3iY3zxuE9zn8k/L6jlqhci6n9+s6+TG1+squ/FtvZ3fuIgzadG0JBrAEhrGoT1sdduYNBujPq7u5uvH++X8MblNfdcMM78kl5tjPaBd7p3P6uDi0kY9x+eDz9fr20/NMM+NC22A4vtYG394rjcY2w1eHh3qDe6bPPe4dHeQzDRPRqO3bchvNkn3tSyMzevCc9bJILqJzmZC3Hh90mpvQoNax+z9zzp/7zXWMaVNapfzbWdjo/AEOoq+XXxdgDvbKf7JbLichIY9duGkSXKSdRYUg9pVdzMvChKoaryk3c8FiuFyQ8wpGuwc/3TWEnSCzQHCTWzG0GQImIL4KSZV9PxMxWHNI7kV5RwbFXo/sFrmdnmXPYCFR8lHfUq1cX52NZtIla7m0yqYMyZK8xBXTeCUEW3wSnc/H+6yrP9Vre6STPKhEFGvs0qac+wNkn2ee1nqRtaFJr3hutrsJ1pOxyR/fK7XSa3GdHczA0WBTvOIX0iyLZhtQjcwi/muzS1vbB67Mc46eV7vgmbFEqe0Kknw/nG5XTwsd8lz+QqCk/vmkI6vGW1tF/Pl7eJTMsHalVPDO38fc9jEWSw29rrZnl6nLN0U0t2qlAapQSGnzFM/fkMXwsW3ZsCAK3A6AVrXX6oVToM0Oa6ru8XGD3wtRAsjrzcxLs50LvLYRLWbjZixCyPIdcEyNceSxmXBpf7uLXZ68kpGrt06l18F01r+vLURiiXZYgJcZnnr5fHgvdtCkqmKvWNJuCwNH/Z4pTewzZZLoVG697jUIqWuh3Ou9iOlO5fjeLx3WMI9powLquU2We7ZuiRtOfGp3pMR40hPzrt/TGrin8hMlY4zLRbI9DZP9SOc81PM440DrxtHhkfTbiRMYaRtloWO5G06yNAZhm+4V7JuoK90spxYnpC9KYT+m1KI/0pPLWZojPZ5voSeQWK8nZnQMrc2xb6x88qPmszTvtF+hUioSt3znc+lWKGhVbNG9fnMeDbcVQfOZzjqYE2WyF541BRalgnn+XiDks2pZvPbxU2WZ38q9GfrvbV559vHHpdGuzbc3OvWe+91WfCFy2KOzmcDY38dy8NJv2kjkUJvX0oUX9Lxs47H3EDArrY3FPwj2PLu3jst67u2vVd1Moqvy7n0MUoSys2lCpF8t3fOUEFHbjYvuO8q7cbh9WHoISzll2L858f2VeSfL0Zvq/Xqt/li3b5A/sfosn1RPXrx3cnhny+Goz57ONQ/p0dDTkf42h/1WcUhrBgK4+bo9FSP5BEAgXM4rk3laB//DrnM45TBZI71i0MO9YGD6L07+qM5Ojo60kMxmmOu/qBM3KUm0QCTggEmqQEm0QCTogEmiQFk6OdYl1GQXLWVeKmH0+bwlbbprBUPVZxJnZDBwwOGfQHOSF+bw/MTOXpq73YsRzt/JDcDBPca6FAIA0ARRYFyCgXjHA+ivE4QRYbyNDxEhRhRRH6iPHMWFaPHqERuozz3HZXZgVSgMFJOsST8fUQYVco4tExI40vkSbw8R5ryfRZMYk6lggUL0adyyYIhDlXwwSgYI1IYhKUgjE1lHKAqJFEqWhqqIkK8CoKgFbRLEIWv8hjDQyhhDCuiGFZOMWycY1iU1wmiGFaexrCoEMOKyAOVZx6oYvRAlcgDleceqDJ7oAoUw8ophoW/jwhjWBnHsAlpDIs8iZfnGFa+z4JJDKtUsGAhhlUuWTDEsAo+hgVjDAuDGBaEMayMY1iFJIZFS2NYRIhhQRDDgnYJohhWHmMY2wkD2XOKZi9SSJPIce3k1yVOEe7FNMxdEYh1z8ldvZj5rC8RHdfr5L1ezF3Yl2E/9iqlAy9STnDi+wLH7OAFThGkpnnClZkUbskZw4vfbIIkd3h9XxMUsogvs7cJQj7xqk8qTsPM4gRIL45jjvECJxqvJtnGFUhTjisBecdxSD6O70qc0pAXYy4ygpkIKeUhlCgLOYlzEIivc0r5B6U0+0AByD1Iye1Rypwe9ejyqJLDo5S7O5ZgZ0eNsg1KlGtAep9SzDOIOcs4Lc0xUGKS3orzC0rfMHSSW1AtG7qQV7DEHkOHnIKazyigYD4BDNkEKOYSxJxJUEvyCMhpFgEdcghQyCBAdzml7IFSzB1D42DiUERZQzmlDOOcL0R5nSDKFMrTNCEq5AhF5LfKM6dVMXqsSuSuynNfVZkdVQVKB8opFwh/HxFmAWWcAkxI41/kSbw8R77yfRZMYl6lggUL0a5yyYIhzlXwQS4YI1wYhLcgjG1lHNgqJFEtWhrSIkI8C4JgFrRLEIWx8hjDYjgMYmMUxSZQGIPAcazS64xRJJuQhrLKEMvGyBVNyHzR1OiMppE3mpC7o+nsj6ZQSJtAMa3C+4RhVBvksAYljWvVJ8ktOLJN2GvOJLZNK5mzEN2mF80Z4tsUH+DKMcIVQogrwxg3yEFuShLlKqZhrirEuTIIdGW7jFGomxBjXWyFsW6MYt0EinUQONZVep0xinUT0lhXGWLdGDmnCZlzmhqd0zRyThNy5zSdndMUinUTKNZVeJ8wjHWDHOugpLGu+iS5Bce6CXvNmcS6aSVzFmLd9KI5Q6yb4mNdOca6Qoh1ZRjrBjnWTUliXcU01lWFWFfWxvopheguY9pMLGBD9Np6+CjbAkoIxblginLFHOOD8DoSim/BaXQPIsS2EHJFwZkjihbdUBRyQsG5C4rKDiicolkwxfKA3weCcSyIo1h5GsODOgmX5vgVvMdoSeyKkhutELeiFowWYla4j9iBYrwOCKJ1IBirgjhShSdxOkhplA4axOhAoDceyC4S6okFx3548BgMTkUUncopPI1zfIryOkEUocrTEBUVYlQR+ZvyzOFUjB6nErmc8tznVGanU4FCVTnFqvD3EWG0KuNwNSGNV5En8fIcscr3WTCJWZUKFixErcolC4a4VcEHrmCMXGEQuoIwdpVx8KqQRK9oafiKCPErCAJY0C5BFMLKQwz/0NDL5qivcnck5wKSeAPk2hc43AGotCogbTFg2ljAhnYCIs5vaNJZVo+sIRS5xwXumkapPC4g8j9QtCLAtCLAhor05KfB7id25DPmT2h3QK4iwKEiQKUigPRxgenjAhseF4jY3dCVO2rj5KUezTS4fsLgABSywLCb11lGEZlHOdlIeWYoFaO1VCKTKWe7qcDGU8FbUDGZUfhVRGBQQbNoLDat8sS+3XcA3r6C2L7C2b7CU/uKmNhXJLav8GBfEYJ9RSD7Cmb7DvwqIrTvgGbRWMG+woN9fxlM2+fsX9CqgMSggJwtgcMdgIoFAanxgKndgA0mAyLWMtSOwY60PnNNpoakBoB8fjWO+dWo5ldDlkWNWRY1JlnUiNTAUP/jUC++uzgUUju9jnWqCxWo0wrUsQI1dxCmJFWrZWAHKNZj+NUqqcj/Du51ZkdSEUDSOIBc3YBD3YBK3QBpDYBp4wAbGgeIVKpHb0f9MPylHelow5AfWhjHoYVRHVoYoqYAxQYdxqQpAOkIQ1F7dHyqR/LUgGRMjQgrAhwqglQ/5HBY6gdIawFMm8NYrWOkt+j0gJJB3FtyeqB+EPc2cXpQaHj3Fp0ekB/LtehRQ6A78qHaoSRUOx5CtaM+VDuUhmqnUKh2jLJQx1wWasnOWX4X/WMXG91NtjAuSKAQITWLFioSA4cKUAyRmocTFeLIIpmCjFSKN69WJYtxFJJKAclqEptU5FstlkUslaDgJZXjmGQOaS9DdJNAgU5qFvNUJIY/FaBMQGqeFKgQ5weSKVWQSlnDq5BASKBcQmqWVqhIzDBUgJINqXneoUKcgkjmbESyT0xe3JVcidMVqSEOfh3160r9EkJ3JMGGyK0lmdAtsRweyuFUB5+/jmRhRUVYUzHm5uyK3UqK3a17/6BPvfNj+V+pegPFb1iGK4VPWALPauu+7hgeFb/uGOrtv+7wxYIF8q87vJbZAj/boHqyVbLPNgZJJpfZHUTbxeJ8B+XJHZzzQROQQA3BatYcvgw2ilegabwwK54SmonkpLF8idSgIXxTGwXjFsN3KDAkVzSuIjKr8cygoqIphYERBc2SYsFwKiQmEy0zlmi7WE82kPJgmncjXA7tjnxv2iG/HNqhpFfteOhKO+r7zw5Rf9gxWg7tmFsO7YjvDN9J8F4miOqinCqkPKuVirFqKlH9lHMlVeCaquCrq5jqjOuGjKjOYd2QeVbnbN2QJapzXDdkgevM64aMuc4uyi+LAtffq2wFr6a28EUSi/gCbBevBut4OdjIy2QpL5K95B3IZYLIRsrJOsozu6gYLaIS2UI5W0EFrr8KvuaKfZ3HrrrjWNNxrOS4UL9xWrVxrNU4qdA4qcs4VGOc16DtpfqF2zF2UIiS177joVs61aOpu+pHV3LmStqKryHsKnoaE+24kGjHhUQ73pdox+VEOy4k2nEp0Y5LiXacJ9pxIdEqhzYJI+PAs9bBkTHZcxpv9zGeOIsncrNlI+VBcl8TQQN6Tq3oRWpKL2bt6UvERvU6tawXuXm9ym3sVd/QXqPWDp/7nSTW43bf97FfVuSq0CrTwnN8LFxnVrgOe0Xxg7dBh09FwDGQklugRE6BUuYSqEeHQJXcASV2BtTYFVDzjoAKuQF9i3US7MQuUP4SKxa4Si0/Te/+Mb3CLL0CN3vh66RBlQ8LoMUVUXMrp7ZWnjW0irGVVaImVs7tqwI3rgq+ZRVTs+KXNSfeDNyghe9qSL2K9pzG232MJ87iidx82Tcog+RX1bAJWaGWZJkalOWsXblMbF4uQa3MMjc269zmrPumZ5U8gGRwBFbIH4KcuQUVuiq22LT4RB+LV5sVr8aew3J0IP3UAFzHGDmNCeQuJmSOYmp0EdPIOUxgtzCFHcIU7wrGyQnctzgnZBFu+NKXOCxfJdadJvf8mJw7S87lRk2/Vhk0Wd2B1lREjamc2lJ51pQqxpZUiRpSObejCtyMKvhWVEyNiCt6J94M3ISFFT1Sr6I9p/F2H+OJs3giN162wjdIcZI+LkzSx4VJ+njfJH1cnqSPC5P0cWmSPi5N0sf5JH1cmqTjTt0TbwZuu8I+XVKvoj2n8XYf44mzeCK3XbantZd+G5qtX479DVsMkDQWINdOwMNe1d+wdQBpwwDTNgE2NAcQaQlDtvmpO/JvDDvkNz91KHlz2PHwurCj/h1hh+idX8foRV/H3Nu9jvhNQy2SzU/DZuIW6T6igb0f4ZbZ7shvme1QsmW242HLbEf9ltkOpVtmO4W2zHaMtsx2zG2Z/TDqN0mc2JHfs9ihZFtix8OOxI76zYgdoqcGhXYodkzeUwPy+w8/DJF9ZkcS1IhcPJswcdeZxPpOCvWdpPWdxPpyK4GS1HdCmzE/QCsZaRPQhR61uad/u/JhyDFndqQb2AzhrrSeykIOtL4iMonyzC4qRuOoRBZSnptJZbaVCuQgyslLcGHtjBD5S2FhjdRJvDa7j/J9tkocSaWCrQoupXLJVsG5VPAehmuHFx6Br+FCIfkRe122UDhI8vYFXE8RmVN5Zk4VozlVInMqz82pMptTBXI95eR6wsH1FJHrGc9cT9RJvDa7nvJ9tkpcT6WCrQqup3LJVsH1VPCuh5v1LzwC18PN+uRH7HrZZn2RwvZAeYh8e2CupgYubg/MC7Cx924PzAsFw+fbA3OVHTbsEDlLBXbefTtE0jKT0j2DO3v12zbPXNsX2Gvzkpv7QvttHl3ey+T4YevMRSZgEISdM6lfh4Ao7pvpC/wxGqYZL/VIpxmGdJphyE8zjOM0w6hOMwzZNMOYTTOMyTTDiE4zFLXRfHShRzr6NuRH38Zx9G1UR9+GePRtio2+jen3CIZ0aqHIvqnojuSpAYndAbmKAA8R0FHv9h0iN+6Y2h0uONgdiM8bLer/wrVMWXvST5f6rUotac84V103GQOSxILIfcFjPGy97ilsHIbC+mGPIdpW3TH7sEfZ8HfPZSbbosVIpvzdkV896RCtW7SsdgasYwvXhebEPcNApUaAyC9B0boCE78EJK1qSOe31ohrV611rP1aGhGR6xJMsL+NLtmtpe0+4xM70i7BkO8HjKPrG1XXN8Rp3hQLCmOW0I1JFlfy5Cy380exvXexXXGz1ZDRwmYr5pSP881WLMbMHDZbMeccHTdbseCzddhsRRzydpgGMM8yeDYNYIlyeWkawDJn9TANYE75Xfg8tjRneuWU7pVnSULFmPhVouyvnLsAFbgfUMF3BoqpRxBO3YJh1zcIhhStiHoJ5dRVGI9f7ZgYOw2TYs+hGnUfyrkPUYE7EhG4NxEOXYoiyqzKuXMRoY6twt2M8n1ulHQ4KlGvozzvelTm/kcF6oSUU08knLsj4etoDe6YlFPvZDzrokRN+imRoLNSRD2W8qzbUjH2XSpRB6Y878VU5q5MBe7PVPCdmuCn2BK7BBWcLevowg5b6Q3yHba5yl3fnh22eZGkG8x32OZq6BILO2xzmbrHfIdtqmJXmS9Y5GrabRYXLPIC3IXuXbDIC4XuNF+wyFXuWp06L3lY6Ga9yp2tV9Nc6YskHa8vwN2vV0Mn7OXQFXuZOmQvcrfsVO6cSfRdtP+CEro2L3B37VXutEnNum5fJOnAqUDSjfsS/pNcVu33HlI5dOxODt27U7GT9wL3VV4NHb7/ZLPU9qHz9+q33TobCPgCPBzwamFQ4AuFoYGXeYDgVR4mODUMFpy6LtkzDBy8ysMHUtNBhCuTDSVcARxQeIGHFV5NBxe+SDLE8AV4oOHVwnDDFwqDDi+HoYeXaQDixKdSS++Kwt4QiAOTyTAaObEjvx49wXEHoGRdekIjDKC+N5i4sQQwWkaewKgBiM/wsn6O1QjfTjCnCuXfTrAYqxa+nWDOlYzfTrDgqxu+nRh4+OYg5VT7/JuDVMzsUPzmINXJIoVvDlKVbZN+c5BqZCXafp9QslC2/T6RMusUtt8nKlkm3X6faGyVZPt9opBFcG86I7JF2JvOPLNCtjedJap/3JvOAtec96Yzpjone7oLClmgtKe7IGf22LOnu1CCrFPc013Q2VaFPd0FlSznNjMHRtaKm5mDkFko3cwcNLJKspk5KGyJsJk5cKq9/pL0Zcao9iZQ7U3Iam9qrL1pVHsTuPamcO1N8bU3TrUffqn3MhKquWCqt+Cs1qLFOotCNRbM9RXOtRXu6yrU1/RqqOXwS61XWEVkulcTmF9fAAFXFQDrWgIwWxwAaBsYAcoORkC6OGCs/Y3jIzvyW0w75IfsJoydTWgvSIeSxux4aMiO+kbsULrXoFOoaTvmd3J0KLYd7E/tDrXtgKkRgPm3rMbxdxKN6nq4IZs3G7N2gztJuwHSX0pUJBOkfurWk2Hz7fErQVSHKqmrLTgAyqtapVV16wl44WiCKjFBlZlAVwmGH99oWbs2cGZHunXDkP9ZLeP4G0JG9eexDNlvYhmjnxpsWe2NbL/oCMxHOgg4ozKqywSGeKUQrmErAsZ0URDK6eRfke3GtmI43TZvaufY5xrqOrEG5L3EOHqJUfUGQ1RDUMxPjNm6kjH5SdGOTCUx9603dYkZmAY3MGouEzAxA9bEDMwSM0DzboAS4IA0MRvrFrHtyO+Sn4b0Cjzskp9iegWU7pKfuvQKTF3MkD62Ilthno7CsvJ0FNaSpyG3Ag/LD1PMrYBojWw6iovC0xGvBE8xsxqSWHh5bqTPrP2a5XRIrHZGFWupaRVRXssq9IZTTqtQ2HeSU5dVgSWV16R6puGycCctfA8+denPWO2uWse6ZwunU859RmNz5uui01FcDJ2OwgrodBSWPaeY+awRMfFZY7eJ71RP08QHyP95AePhs6QpJj5A/PcETLE/JWDM/oqAMfkDAkraBb7zl3qk6doQpuWOzny+nCX5cpbky1kpX87yfDlL8uUsy5ezLF/OYr6cJflyNsIfMZ1hvgSUvD2ZUb4E6t+CzJJ8CQrtc5hhvgTkf2x0NuTLYZQzw4SJTFsAGOV+E3DXqlH/w8ozlzOBwYdQBvVLKEP+p5VnkDX78JqNwnh0NqRNuEyVVFYTp2OFylZpZf2IFEpHI1SJEarMCDYi7UepsyF79u8nZpg9AdEfAJkN2fPoSK9rg0dgvrogYAwb9XtvZkkCxWvQ67sZZlAsp1MORTx4nFEOtaZ/9IZ6pHnHLGRRFMIsY4ZpFFCopEk00Zi5PIoF/VxrpuvnkFrCy4EgcIbMXw8ENcmV4QVBEELWjK8IgkL5M7wkYAEyafjWjXmWU7Nv3Vii7Fr61o1lzrPhWzfmlHGFY9pVxulIBU7AKqSJSdWYnVSiVKSc85EKISmpQulZOeVo4RSthn22Fp5VO+RtFTh5m7DPUEkaNynJ5SoWrBiyugpFK4b8LgIkeUWU6ZVzuhcBc74yTvwqpNlf1dgFqET9gPJCZ6A69wgqcLegAvUNwkMHIULSS4j0mNg89BcqpJ2GqrHnUIm6D+WFPkR17khUCL2JKtSl0EtFybXZW8VM476l+F4xK5D0MNmbxUwL/Uz6bjETqbfJ3i4mGvQ5SKnbQSnreVCPnQ+q1P+glHdBWIJ7IdSoI0KJ+iKQsDtCzIkWNe6UUEvTLRaIGRdVyqsocWpFLWRXFKmbQslWkYJGWcMpvsMCqXCt0G2hxj2X075hzaT/cmrShaFetnboyFDbZ+3QnYEGPRpS6tRQ4n4NNOzaEHPvhlrawWGB2MehSt0cSoWeDotwZ4ca93eoUZcHUuj1QEs6PlAf8wYK3R9qaQ+IBWIniCr1gygVukIswr0haqFDRNH3iU3Ydn9fsu8F2qN241r/YlFSHhYQBKWG5IelBEEpt9sHijoO5eGRoTRQKCvbR6CgICiluwWgmDIo5/629VDO/W3roRz8dd2hFPx13aEM/gnPoRD+Cc++1DV6br+4ez245LEdiScCSt6yXZPfAfVv2a4TPwOF3r9dO7cCNniTka9arZtRvxYKRxpNhnBc1FNxsV2C6ALK41Xw2w9GdJXs2w+R5M8Ru+sY5CuZEq/Vd5L9Hy24vV7K3y3os5hTvdRW0H7uqTvyOwM6lO0MUM/Toyd39OxK7vyRr1puZenG8fkU0UMqT5/UpRqPniJ6jifuEkRVKHuLDDmwHoqoHsrTeogK9cAPkwg9xxN3CaJ6lP3VDY9cZRznGjkxr1bI3gl/KvDnwnV2Jc71dWKsNHQKdzmlCqOUVpc7n0CfUvqcXmGXU6okSkkVbdzq6oiYK4laXksogdUE/JTj5/wiuwLmqqIW6ypd912CqI7K0/q5YYFHTxE9xxN3CaK6KI/10LHFXcaoJiakVfFjF2JPCXtOzt1ljOpjQqyQDoLuMkYVMiGtkB9kEXtK2HNy7i5jVCETQoU+jWS2r0d+Z0eHbG6vKNns0fGw2aOjfrNHh2hLR8fohw875n74sCN+l0eLmmhaVptNN5VU+Ekt2B4tdITWHfmR5CcadfQTy7vBNnagk1IlYhkj/nW8Ynwbr1BfxiuxN+6KbLqrSN63KxCT9ESmHvNIfA0U+2ooTuqiWqiQKr5Wiqlqyql+yl0llfqaxs9JU+5rXfiYNBUTC5Q/JU11b43Sh6SpSpbJPyNNNWcl/VNgeuDsEf78VwsXLi0t4tB0URgOLdJxwyL2Q4skny+SlNgeWbR3Rz5DdcjWywzFDNXxkKF66lbFFPvE1SFKXB2jxNWy2h/FZ64LD1inD1jHJwnrS6Ykz1j7/XId8pnUdydJR5J3IV/il8bD9QpfGucqteC+L43zItFse740zkuQjUtfGucy+0D86jcX9poldZLyV795gb3VKnhR6avfXCbfKnz1m6q7kiOx85W/Be0LLIdRU3+XpVul61H8OnUQ5GfYDUleOtEje85kzJiPFleYNocrxbn6qjBXX5Xn6iucYg8XjpPnVWHyvCpPnlfeRHj5QqOxwLf6RqOtcHVwuJWgXSzFl1ceLlyPcB2udiPqWi5+qEc+CGu+ZE+xOYfrxgWa2rWwP5Fvk7ZwL4XudbhhYbWhjqsKyXX4/uVVhV6nvnx4hHQNoObZfrgC37w02+9VHDAM940T19rNUv2JfLt0ltpL9B0h3JIUuDMpu+LV+DlYjo/jBkbDgyQT3dpPaulcvm0+qe01SX9wP8yIxx7t4ol8s+yvyg4SxvtwL3wbcOzRLp7I90pTQCc9uAs8xHMf8tOG1xCFVWove03OWFaf5Fvdi1SQ58hV/0kCq8l2di4CdcoL+E3urNKudpZpMz/L7qMGFv1O+E7NjbXHUnvM9C0b7TfQHuvsM80+u5SN8m2LwP+HL6HQ5Ubtm7LTw4ibB5xvc22pTu6xDwuv0dJVUsIP/pzmYyTWYZ0/p/6kS6bJRCHV3MMmJboJ7mnEfruB1/SGmSZvu3LVP05S4mF+U+Wm6ax9ETG1RyzxVWveWFf3pZwoudPTuiNd2zOU3aIVdBvHsV5M39n2lZOG49u6d2QXHtEDlN6ReZUfJez5G56Hf79yeB73ruvCI3qe0rsur/LzhB9AlOdJf7JLnsqJ+Gxe4Cf0av6c+c9eHWc3pmcefLRL0ER81CjWFTWP/Vqa13D9ySu6fuaxrZx5TpuDlMtqmae6TubwH2o3Jbo6QTixtYj2t6eEdH96ypH2t+BfeSI2JQwG6pUmzLsFz37E1B3porYhaQpAfseEcdwxYVR3TBiyfRHGbF+EMdkXYUTMbUgi4EyJze66Iz/h65C2BaD4Z6c6HqaFPcWFIMP+r1F1iP4aVcfor1G1rNZQ6o78y4UOJdtUOh62qXTUb1PpULpNpVNom0rHpEsGpLZXpHHeG/9phK+CntChAPlXQU/BoYCHkfUTOhQgWlx6cg4FzL0KekKHMuQd6mmEK29Po7Dc9hQaB3hagTpWIF9CexrFdbOnUVgsexqFFbKn2DjPLjKeY2Q8x8h4LkTGcxoZz3lkPMfIeE4i4zmJjF1ojl2s2I5HDIS5eLLlNip40p//+X+DG1I7","Times-Bold":"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","Times-Italic":"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","Times-BoldItalic":"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",Symbol:"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",ZapfDingbats:"eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w=="};!function(t){t.Courier="Courier",t.CourierBold="Courier-Bold",t.CourierOblique="Courier-Oblique",t.CourierBoldOblique="Courier-BoldOblique",t.Helvetica="Helvetica",t.HelveticaBold="Helvetica-Bold",t.HelveticaOblique="Helvetica-Oblique",t.HelveticaBoldOblique="Helvetica-BoldOblique",t.TimesRoman="Times-Roman",t.TimesRomanBold="Times-Bold",t.TimesRomanItalic="Times-Italic",t.TimesRomanBoldItalic="Times-BoldItalic",t.Symbol="Symbol",t.ZapfDingbats="ZapfDingbats"}(un||(un={}));for(var fn={},pn=function(){function t(){var t=this;this.getWidthOfGlyph=function(e){return t.CharWidths[e]},this.getXAxisKerningForPair=function(e,n){return(t.KernPairXAmounts[e]||{})[n]}}return t.load=function(e){var n=fn[e];if(n)return n;var r=cn(dn[e]),i=Object.assign(new t,JSON.parse(r));return i.CharWidths=i.CharMetrics.reduce((function(t,e){return t[e.N]=e.WX,t}),{}),i.KernPairXAmounts=i.KernPairs.reduce((function(t,e){var n=e[0],r=e[1],i=e[2];return t[n]||(t[n]={}),t[n][r]=i,t}),{}),fn[e]=i,i},t}(),gn=cn("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"),vn=JSON.parse(gn),yn=function(t,e){var n=this;this.canEncodeUnicodeCodePoint=function(t){return t in n.unicodeMappings},this.encodeUnicodeCodePoint=function(t){var e=n.unicodeMappings[t];if(!e){var r=String.fromCharCode(t),i="0x"+function(t,e,n){for(var r="",i=0,o=e-t.length;i<o;i++)r+=n;return r+t}(t.toString(16),4,"0"),o=n.name+' cannot encode "'+r+'" ('+i+")";throw new Error(o)}return{code:e[0],name:e[1]}},this.name=t,this.supportedCodePoints=Object.keys(e).map(Number).sort((function(t,e){return t-e})),this.unicodeMappings=e},mn={Symbol:new yn("Symbol",vn.symbol),ZapfDingbats:new yn("ZapfDingbats",vn.zapfdingbats),WinAnsi:new yn("WinAnsi",vn.win1252)},bn=function(t){return Object.keys(t).map((function(e){return t[e]}))},wn=bn(un),xn=function(t){return wn.includes(t)},kn=function(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height},Sn=function(t){return"`"+t+"`"},Fn=function(t){return"'"+t+"'"},Cn=function(t){var e=typeof t;return"string"===e?Fn(t):"undefined"===e?Sn(t):t},An=function(t,e,n){for(var r=new Array(n.length),i=0,o=n.length;i<o;i++){var a=n[i];r[i]=Cn(a)}var s=r.join(" or ");return Sn(e)+" must be one of "+s+", but was actually "+Cn(t)},zn=function(t,e,n){Array.isArray(n)||(n=bn(n));for(var r=0,i=n.length;r<i;r++)if(t===n[r])return;throw new TypeError(An(t,e,n))},Tn=function(t,e,n){Array.isArray(n)||(n=bn(n)),zn(t,e,n.concat(void 0))},On=function(t,e,n){Array.isArray(n)||(n=bn(n));for(var r=0,i=t.length;r<i;r++)zn(t[r],e,n)},Rn=function(t){return null===t?"null":void 0===t?"undefined":"string"==typeof t?"string":isNaN(t)?"NaN":"number"==typeof t?"number":"boolean"==typeof t?"boolean":"symbol"==typeof t?"symbol":"bigint"==typeof t?"bigint":t.constructor&&t.constructor.name?t.constructor.name:t.name?t.name:t.constructor?String(t.constructor):String(t)},Bn=function(t,e){return"null"===e?null===t:"undefined"===e?void 0===t:"string"===e?"string"==typeof t:"number"===e?"number"==typeof t&&!isNaN(t):"boolean"===e?"boolean"==typeof t:"symbol"===e?"symbol"==typeof t:"bigint"===e?"bigint"==typeof t:e===Date?t instanceof Date:e===Array?t instanceof Array:e===Uint8Array?t instanceof Uint8Array:e===ArrayBuffer?t instanceof ArrayBuffer:e===Function?t instanceof Function:t instanceof e[0]},Nn=function(t,e,n){for(var r=new Array(n.length),i=0,o=n.length;i<o;i++){var a=n[i];"null"===a&&(r[i]=Sn("null")),"undefined"===a&&(r[i]=Sn("undefined")),"string"===a?r[i]=Sn("string"):"number"===a?r[i]=Sn("number"):"boolean"===a?r[i]=Sn("boolean"):"symbol"===a?r[i]=Sn("symbol"):"bigint"===a?r[i]=Sn("bigint"):a===Array?r[i]=Sn("Array"):a===Uint8Array?r[i]=Sn("Uint8Array"):a===ArrayBuffer?r[i]=Sn("ArrayBuffer"):r[i]=Sn(a[1])}var s=r.join(" or ");return Sn(e)+" must be of type "+s+", but was actually of type "+Sn(Rn(t))},Pn=function(t,e,n){for(var r=0,i=n.length;r<i;r++)if(Bn(t,n[r]))return;throw new TypeError(Nn(t,e,n))},Dn=function(t,e,n){Pn(t,e,n.concat("undefined"))},jn=function(t,e,n){for(var r=0,i=t.length;r<i;r++)Pn(t[r],e,n)},En=function(t,e,n,r){if(Pn(t,e,["number"]),Pn(n,"min",["number"]),Pn(r,"max",["number"]),r=Math.max(n,r),t<n||t>r)throw new Error(Sn(e)+" must be at least "+n+" and at most "+r+", but was actually "+t)},In=function(t,e,n,r){Pn(t,e,["number","undefined"]),"number"==typeof t&&En(t,e,n,r)},Mn=function(t,e,n){if(Pn(t,e,["number"]),t%n!=0)throw new Error(Sn(e)+" must be a multiple of "+n+", but was actually "+t)},Un=function(t,e){if(!Number.isInteger(t))throw new Error(Sn(e)+" must be an integer, but was actually "+t)},Vn=function(t,e){if(![1,0].includes(Math.sign(t)))throw new Error(Sn(e)+" must be a positive number or 0, but was actually "+t)},Wn=new Uint16Array(256),qn=0;qn<256;qn++)Wn[qn]=qn;Wn[22]=p(""),Wn[24]=p("˘"),Wn[25]=p("ˇ"),Wn[26]=p("ˆ"),Wn[27]=p("˙"),Wn[28]=p("˝"),Wn[29]=p("˛"),Wn[30]=p("˚"),Wn[31]=p("˜"),Wn[127]=p("�"),Wn[128]=p("•"),Wn[129]=p("†"),Wn[130]=p("‡"),Wn[131]=p("…"),Wn[132]=p("—"),Wn[133]=p("–"),Wn[134]=p("ƒ"),Wn[135]=p("⁄"),Wn[136]=p("‹"),Wn[137]=p("›"),Wn[138]=p("−"),Wn[139]=p("‰"),Wn[140]=p("„"),Wn[141]=p("“"),Wn[142]=p("”"),Wn[143]=p("‘"),Wn[144]=p("’"),Wn[145]=p("‚"),Wn[146]=p("™"),Wn[147]=p("ﬁ"),Wn[148]=p("ﬂ"),Wn[149]=p("Ł"),Wn[150]=p("Œ"),Wn[151]=p("Š"),Wn[152]=p("Ÿ"),Wn[153]=p("Ž"),Wn[154]=p("ı"),Wn[155]=p("ł"),Wn[156]=p("œ"),Wn[157]=p("š"),Wn[158]=p("ž"),Wn[159]=p("�"),Wn[160]=p("€"),Wn[173]=p("�");var Kn,Ln=function(t){for(var e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]=Wn[t[n]];return String.fromCodePoint.apply(String,e)},Gn=function(){function t(t){this.populate=t,this.value=void 0}return t.prototype.getValue=function(){return this.value},t.prototype.access=function(){return this.value||(this.value=this.populate()),this.value},t.prototype.invalidate=function(){this.value=void 0},t.populatedBy=function(e){return new t(e)},t}(),Hn=function(t){function n(e,n){var r="Method "+e+"."+n+"() not implemented";return t.call(this,r)||this}return e(n,t),n}(Error),_n=function(t){function n(e){var n="Cannot construct "+e+" - it has a private constructor";return t.call(this,n)||this}return e(n,t),n}(Error),Xn=function(t){function n(e,n){var r=function(t){var e,n;return null!==(e=null==t?void 0:t.name)&&void 0!==e?e:null===(n=null==t?void 0:t.constructor)||void 0===n?void 0:n.name},i="Expected instance of "+(Array.isArray(e)?e.map(r):[r(e)]).join(" or ")+", but got instance of "+(n?r(n):n);return t.call(this,i)||this}return e(n,t),n}(Error),Zn=function(t){function n(e){var n=e+" stream encoding not supported";return t.call(this,n)||this}return e(n,t),n}(Error),Yn=function(t){function n(e,n){var r="Cannot call "+e+"."+n+"() more than once";return t.call(this,r)||this}return e(n,t),n}(Error),Jn=function(t){function n(e){var n="Missing catalog (ref="+e+")";return t.call(this,n)||this}return e(n,t),n}(Error),Qn=function(t){function n(){return t.call(this,"Can't embed page with missing Contents")||this}return e(n,t),n}(Error),$n=function(t){function n(e){var n,r,i,o="Unrecognized stream type: "+(null!==(i=null!==(r=null===(n=null==e?void 0:e.contructor)||void 0===n?void 0:n.name)&&void 0!==r?r:null==e?void 0:e.name)&&void 0!==i?i:e);return t.call(this,o)||this}return e(n,t),n}(Error),tr=function(t){function n(){return t.call(this,"Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.")||this}return e(n,t),n}(Error),er=function(t){function n(e){var n="Attempted to convert PDFArray with "+e+" elements to rectangle, but must have exactly 4 elements.";return t.call(this,n)||this}return e(n,t),n}(Error),nr=function(t){function n(e){var n='Attempted to convert "'+e+'" to a date, but it does not match the PDF date string format.';return t.call(this,n)||this}return e(n,t),n}(Error),rr=function(t){function n(e,n){var r="Invalid targetIndex specified: targetIndex="+e+" must be less than Count="+n;return t.call(this,r)||this}return e(n,t),n}(Error),ir=function(t){function n(e,n){var r="Failed to "+n+" at targetIndex="+e+" due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";return t.call(this,r)||this}return e(n,t),n}(Error),or=function(t){function n(e,n,r){var i="index should be at least "+n+" and at most "+r+", but was actually "+e;return t.call(this,i)||this}return e(n,t),n}(Error),ar=function(t){function n(){return t.call(this,"Attempted to set invalid field value")||this}return e(n,t),n}(Error),sr=function(t){function n(){return t.call(this,"Attempted to select multiple values for single-select field")||this}return e(n,t),n}(Error),hr=function(t){function n(e){var n="No /DA (default appearance) entry found for field: "+e;return t.call(this,n)||this}return e(n,t),n}(Error),lr=function(t){function n(e){var n="No Tf operator found for DA of field: "+e;return t.call(this,n)||this}return e(n,t),n}(Error),ur=function(t){function n(e,n){var r="Failed to parse number (line:"+e.line+" col:"+e.column+" offset="+e.offset+'): "'+n+'"';return t.call(this,r)||this}return e(n,t),n}(Error),cr=function(t){function n(e,n){var r="Failed to parse PDF document (line:"+e.line+" col:"+e.column+" offset="+e.offset+"): "+n;return t.call(this,r)||this}return e(n,t),n}(Error),dr=function(t){function n(e,n,r){var i="Expected next byte to be "+n+" but it was actually "+r;return t.call(this,e,i)||this}return e(n,t),n}(cr),fr=function(t){function n(e,n){var r="Failed to parse PDF object starting with the following byte: "+n;return t.call(this,e,r)||this}return e(n,t),n}(cr),pr=function(t){function n(e){return t.call(this,e,"Failed to parse invalid PDF object")||this}return e(n,t),n}(cr),gr=function(t){function n(e){return t.call(this,e,"Failed to parse PDF stream")||this}return e(n,t),n}(cr),vr=function(t){function n(e){return t.call(this,e,"Failed to parse PDF literal string due to unbalanced parenthesis")||this}return e(n,t),n}(cr),yr=function(t){function n(e){return t.call(this,e,"Parser stalled")||this}return e(n,t),n}(cr),mr=function(t){function n(e){return t.call(this,e,"No PDF header found")||this}return e(n,t),n}(cr),br=function(t){function n(e,n){var r="Did not find expected keyword '"+V(n)+"'";return t.call(this,e,r)||this}return e(n,t),n}(cr);!function(t){t[t.Null=0]="Null",t[t.Backspace=8]="Backspace",t[t.Tab=9]="Tab",t[t.Newline=10]="Newline",t[t.FormFeed=12]="FormFeed",t[t.CarriageReturn=13]="CarriageReturn",t[t.Space=32]="Space",t[t.ExclamationPoint=33]="ExclamationPoint",t[t.Hash=35]="Hash",t[t.Percent=37]="Percent",t[t.LeftParen=40]="LeftParen",t[t.RightParen=41]="RightParen",t[t.Plus=43]="Plus",t[t.Minus=45]="Minus",t[t.Dash=45]="Dash",t[t.Period=46]="Period",t[t.ForwardSlash=47]="ForwardSlash",t[t.Zero=48]="Zero",t[t.One=49]="One",t[t.Two=50]="Two",t[t.Three=51]="Three",t[t.Four=52]="Four",t[t.Five=53]="Five",t[t.Six=54]="Six",t[t.Seven=55]="Seven",t[t.Eight=56]="Eight",t[t.Nine=57]="Nine",t[t.LessThan=60]="LessThan",t[t.GreaterThan=62]="GreaterThan",t[t.A=65]="A",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.O=79]="O",t[t.P=80]="P",t[t.R=82]="R",t[t.LeftSquareBracket=91]="LeftSquareBracket",t[t.BackSlash=92]="BackSlash",t[t.RightSquareBracket=93]="RightSquareBracket",t[t.a=97]="a",t[t.b=98]="b",t[t.d=100]="d",t[t.e=101]="e",t[t.f=102]="f",t[t.i=105]="i",t[t.j=106]="j",t[t.l=108]="l",t[t.m=109]="m",t[t.n=110]="n",t[t.o=111]="o",t[t.r=114]="r",t[t.s=115]="s",t[t.t=116]="t",t[t.u=117]="u",t[t.x=120]="x",t[t.LeftCurly=123]="LeftCurly",t[t.RightCurly=125]="RightCurly",t[t.Tilde=126]="Tilde"}(Kn||(Kn={}));var wr=Kn,xr=gt((function(t,e){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var n=e.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var i in n)r(n,i)&&(t[i]=n[i])}}return t},e.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var i={arraySet:function(t,e,n,r,i){if(e.subarray&&t.subarray)t.set(e.subarray(n,n+r),i);else for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){var e,n,r,i,o,a;for(r=0,e=0,n=t.length;e<n;e++)r+=t[e].length;for(a=new Uint8Array(r),i=0,e=0,n=t.length;e<n;e++)o=t[e],a.set(o,i),i+=o.length;return a}},o={arraySet:function(t,e,n,r,i){for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){return[].concat.apply([],t)}};e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,i)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,o))},e.setTyped(n)}));function kr(t){for(var e=t.length;--e>=0;)t[e]=0}var Sr=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Fr=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Cr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ar=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],zr=new Array(576);kr(zr);var Tr=new Array(60);kr(Tr);var Or=new Array(512);kr(Or);var Rr=new Array(256);kr(Rr);var Br=new Array(29);kr(Br);var Nr,Pr,Dr,jr=new Array(30);function Er(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=t&&t.length}function Ir(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function Mr(t){return t<256?Or[t]:Or[256+(t>>>7)]}function Ur(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function Vr(t,e,n){t.bi_valid>16-n?(t.bi_buf|=e<<t.bi_valid&65535,Ur(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=n-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)}function Wr(t,e,n){Vr(t,n[2*e],n[2*e+1])}function qr(t,e){var n=0;do{n|=1&t,t>>>=1,n<<=1}while(--e>0);return n>>>1}function Kr(t,e,n){var r,i,o=new Array(16),a=0;for(r=1;r<=15;r++)o[r]=a=a+n[r-1]<<1;for(i=0;i<=e;i++){var s=t[2*i+1];0!==s&&(t[2*i]=qr(o[s]++,s))}}function Lr(t){var e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function Gr(t){t.bi_valid>8?Ur(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function Hr(t,e,n,r){var i=2*e,o=2*n;return t[i]<t[o]||t[i]===t[o]&&r[e]<=r[n]}function _r(t,e,n){for(var r=t.heap[n],i=n<<1;i<=t.heap_len&&(i<t.heap_len&&Hr(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!Hr(e,r,t.heap[i],t.depth));)t.heap[n]=t.heap[i],n=i,i<<=1;t.heap[n]=r}function Xr(t,e,n){var r,i,o,a,s=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*s]<<8|t.pending_buf[t.d_buf+2*s+1],i=t.pending_buf[t.l_buf+s],s++,0===r?Wr(t,i,e):(Wr(t,(o=Rr[i])+256+1,e),0!==(a=Sr[o])&&Vr(t,i-=Br[o],a),Wr(t,o=Mr(--r),n),0!==(a=Fr[o])&&Vr(t,r-=jr[o],a))}while(s<t.last_lit);Wr(t,256,e)}function Zr(t,e){var n,r,i,o=e.dyn_tree,a=e.stat_desc.static_tree,s=e.stat_desc.has_stree,h=e.stat_desc.elems,l=-1;for(t.heap_len=0,t.heap_max=573,n=0;n<h;n++)0!==o[2*n]?(t.heap[++t.heap_len]=l=n,t.depth[n]=0):o[2*n+1]=0;for(;t.heap_len<2;)o[2*(i=t.heap[++t.heap_len]=l<2?++l:0)]=1,t.depth[i]=0,t.opt_len--,s&&(t.static_len-=a[2*i+1]);for(e.max_code=l,n=t.heap_len>>1;n>=1;n--)_r(t,o,n);i=h;do{n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],_r(t,o,1),r=t.heap[1],t.heap[--t.heap_max]=n,t.heap[--t.heap_max]=r,o[2*i]=o[2*n]+o[2*r],t.depth[i]=(t.depth[n]>=t.depth[r]?t.depth[n]:t.depth[r])+1,o[2*n+1]=o[2*r+1]=i,t.heap[1]=i++,_r(t,o,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var n,r,i,o,a,s,h=e.dyn_tree,l=e.max_code,u=e.stat_desc.static_tree,c=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(o=0;o<=15;o++)t.bl_count[o]=0;for(h[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;n<573;n++)(o=h[2*h[2*(r=t.heap[n])+1]+1]+1)>p&&(o=p,g++),h[2*r+1]=o,r>l||(t.bl_count[o]++,a=0,r>=f&&(a=d[r-f]),s=h[2*r],t.opt_len+=s*(o+a),c&&(t.static_len+=s*(u[2*r+1]+a)));if(0!==g){do{for(o=p-1;0===t.bl_count[o];)o--;t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(o=p;0!==o;o--)for(r=t.bl_count[o];0!==r;)(i=t.heap[--n])>l||(h[2*i+1]!==o&&(t.opt_len+=(o-h[2*i+1])*h[2*i],h[2*i+1]=o),r--)}}(t,e),Kr(o,l,t.bl_count)}function Yr(t,e,n){var r,i,o=-1,a=e[1],s=0,h=7,l=4;for(0===a&&(h=138,l=3),e[2*(n+1)+1]=65535,r=0;r<=n;r++)i=a,a=e[2*(r+1)+1],++s<h&&i===a||(s<l?t.bl_tree[2*i]+=s:0!==i?(i!==o&&t.bl_tree[2*i]++,t.bl_tree[32]++):s<=10?t.bl_tree[34]++:t.bl_tree[36]++,s=0,o=i,0===a?(h=138,l=3):i===a?(h=6,l=3):(h=7,l=4))}function Jr(t,e,n){var r,i,o=-1,a=e[1],s=0,h=7,l=4;for(0===a&&(h=138,l=3),r=0;r<=n;r++)if(i=a,a=e[2*(r+1)+1],!(++s<h&&i===a)){if(s<l)do{Wr(t,i,t.bl_tree)}while(0!=--s);else 0!==i?(i!==o&&(Wr(t,i,t.bl_tree),s--),Wr(t,16,t.bl_tree),Vr(t,s-3,2)):s<=10?(Wr(t,17,t.bl_tree),Vr(t,s-3,3)):(Wr(t,18,t.bl_tree),Vr(t,s-11,7));s=0,o=i,0===a?(h=138,l=3):i===a?(h=6,l=3):(h=7,l=4)}}kr(jr);var Qr=!1;function $r(t,e,n,r){Vr(t,0+(r?1:0),3),function(t,e,n,r){Gr(t),r&&(Ur(t,n),Ur(t,~n)),xr.arraySet(t.pending_buf,t.window,e,n,t.pending),t.pending+=n}(t,e,n,!0)}var ti={_tr_init:function(t){Qr||(!function(){var t,e,n,r,i,o=new Array(16);for(n=0,r=0;r<28;r++)for(Br[r]=n,t=0;t<1<<Sr[r];t++)Rr[n++]=r;for(Rr[n-1]=r,i=0,r=0;r<16;r++)for(jr[r]=i,t=0;t<1<<Fr[r];t++)Or[i++]=r;for(i>>=7;r<30;r++)for(jr[r]=i<<7,t=0;t<1<<Fr[r]-7;t++)Or[256+i++]=r;for(e=0;e<=15;e++)o[e]=0;for(t=0;t<=143;)zr[2*t+1]=8,t++,o[8]++;for(;t<=255;)zr[2*t+1]=9,t++,o[9]++;for(;t<=279;)zr[2*t+1]=7,t++,o[7]++;for(;t<=287;)zr[2*t+1]=8,t++,o[8]++;for(Kr(zr,287,o),t=0;t<30;t++)Tr[2*t+1]=5,Tr[2*t]=qr(t,5);Nr=new Er(zr,Sr,257,286,15),Pr=new Er(Tr,Fr,0,30,15),Dr=new Er(new Array(0),Cr,0,19,7)}(),Qr=!0),t.l_desc=new Ir(t.dyn_ltree,Nr),t.d_desc=new Ir(t.dyn_dtree,Pr),t.bl_desc=new Ir(t.bl_tree,Dr),t.bi_buf=0,t.bi_valid=0,Lr(t)},_tr_stored_block:$r,_tr_flush_block:function(t,e,n,r){var i,o,a=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),Zr(t,t.l_desc),Zr(t,t.d_desc),a=function(t){var e;for(Yr(t,t.dyn_ltree,t.l_desc.max_code),Yr(t,t.dyn_dtree,t.d_desc.max_code),Zr(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*Ar[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(o=t.static_len+3+7>>>3)<=i&&(i=o)):i=o=n+5,n+4<=i&&-1!==e?$r(t,e,n,r):4===t.strategy||o===i?(Vr(t,2+(r?1:0),3),Xr(t,zr,Tr)):(Vr(t,4+(r?1:0),3),function(t,e,n,r){var i;for(Vr(t,e-257,5),Vr(t,n-1,5),Vr(t,r-4,4),i=0;i<r;i++)Vr(t,t.bl_tree[2*Ar[i]+1],3);Jr(t,t.dyn_ltree,e-1),Jr(t,t.dyn_dtree,n-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),Xr(t,t.dyn_ltree,t.dyn_dtree)),Lr(t),r&&Gr(t)},_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(Rr[n]+256+1)]++,t.dyn_dtree[2*Mr(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){Vr(t,2,3),Wr(t,256,zr),function(t){16===t.bi_valid?(Ur(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}};var ei=function(t,e,n,r){for(var i=65535&t|0,o=t>>>16&65535|0,a=0;0!==n;){n-=a=n>2e3?2e3:n;do{o=o+(i=i+e[r++]|0)|0}while(--a);i%=65521,o%=65521}return i|o<<16|0};var ni=function(){for(var t,e=[],n=0;n<256;n++){t=n;for(var r=0;r<8;r++)t=1&t?3988292384^t>>>1:t>>>1;e[n]=t}return e}();var ri,ii=function(t,e,n,r){var i=ni,o=r+n;t^=-1;for(var a=r;a<o;a++)t=t>>>8^i[255&(t^e[a])];return-1^t},oi={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ai(t,e){return t.msg=oi[e],e}function si(t){return(t<<1)-(t>4?9:0)}function hi(t){for(var e=t.length;--e>=0;)t[e]=0}function li(t){var e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),0!==n&&(xr.arraySet(t.output,e.pending_buf,e.pending_out,n,t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0))}function ui(t,e){ti._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,li(t.strm)}function ci(t,e){t.pending_buf[t.pending++]=e}function di(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function fi(t,e,n,r){var i=t.avail_in;return i>r&&(i=r),0===i?0:(t.avail_in-=i,xr.arraySet(e,t.input,t.next_in,i,n),1===t.state.wrap?t.adler=ei(t.adler,e,i,n):2===t.state.wrap&&(t.adler=ii(t.adler,e,i,n)),t.next_in+=i,t.total_in+=i,i)}function pi(t,e){var n,r,i=t.max_chain_length,o=t.strstart,a=t.prev_length,s=t.nice_match,h=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,l=t.window,u=t.w_mask,c=t.prev,d=t.strstart+258,f=l[o+a-1],p=l[o+a];t.prev_length>=t.good_match&&(i>>=2),s>t.lookahead&&(s=t.lookahead);do{if(l[(n=e)+a]===p&&l[n+a-1]===f&&l[n]===l[o]&&l[++n]===l[o+1]){o+=2,n++;do{}while(l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&o<d);if(r=258-(d-o),o=d-258,r>a){if(t.match_start=e,a=r,r>=s)break;f=l[o+a-1],p=l[o+a]}}}while((e=c[e&u])>h&&0!=--i);return a<=t.lookahead?a:t.lookahead}function gi(t){var e,n,r,i,o,a=t.w_size;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=a+(a-262)){xr.arraySet(t.window,t.window,a,a,0),t.match_start-=a,t.strstart-=a,t.block_start-=a,e=n=t.hash_size;do{r=t.head[--e],t.head[e]=r>=a?r-a:0}while(--n);e=n=a;do{r=t.prev[--e],t.prev[e]=r>=a?r-a:0}while(--n);i+=a}if(0===t.strm.avail_in)break;if(n=fi(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=n,t.lookahead+t.insert>=3)for(o=t.strstart-t.insert,t.ins_h=t.window[o],t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+3-1])&t.hash_mask,t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)}function vi(t,e){for(var n,r;;){if(t.lookahead<262){if(gi(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(n=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-262&&(t.match_length=pi(t,n)),t.match_length>=3)if(r=ti._tr_tally(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else r=ti._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(r&&(ui(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,4===e?(ui(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(ui(t,!1),0===t.strm.avail_out)?1:2}function yi(t,e){for(var n,r,i;;){if(t.lookahead<262){if(gi(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(n=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-262&&(t.match_length=pi(t,n),t.match_length<=5&&(1===t.strategy||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-3,r=ti._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=i&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,r&&(ui(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((r=ti._tr_tally(t,0,t.window[t.strstart-1]))&&ui(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(r=ti._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,4===e?(ui(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(ui(t,!1),0===t.strm.avail_out)?1:2}function mi(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i}function bi(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new xr.Buf16(1146),this.dyn_dtree=new xr.Buf16(122),this.bl_tree=new xr.Buf16(78),hi(this.dyn_ltree),hi(this.dyn_dtree),hi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new xr.Buf16(16),this.heap=new xr.Buf16(573),hi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new xr.Buf16(573),hi(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function wi(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=2,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=0,ti._tr_init(e),0):ai(t,-2)}function xi(t){var e,n=wi(t);return 0===n&&((e=t.state).window_size=2*e.w_size,hi(e.head),e.max_lazy_match=ri[e.level].max_lazy,e.good_match=ri[e.level].good_length,e.nice_match=ri[e.level].nice_length,e.max_chain_length=ri[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),n}function ki(t,e,n,r,i,o){if(!t)return-2;var a=1;if(-1===e&&(e=6),r<0?(a=0,r=-r):r>15&&(a=2,r-=16),i<1||i>9||8!==n||r<8||r>15||e<0||e>9||o<0||o>4)return ai(t,-2);8===r&&(r=9);var s=new bi;return t.state=s,s.strm=t,s.wrap=a,s.gzhead=null,s.w_bits=r,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=i+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+3-1)/3),s.window=new xr.Buf8(2*s.w_size),s.head=new xr.Buf16(s.hash_size),s.prev=new xr.Buf16(s.w_size),s.lit_bufsize=1<<i+6,s.pending_buf_size=4*s.lit_bufsize,s.pending_buf=new xr.Buf8(s.pending_buf_size),s.d_buf=1*s.lit_bufsize,s.l_buf=3*s.lit_bufsize,s.level=e,s.strategy=o,s.method=n,xi(t)}ri=[new mi(0,0,0,0,(function(t,e){var n=65535;for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(gi(t),0===t.lookahead&&0===e)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var r=t.block_start+n;if((0===t.strstart||t.strstart>=r)&&(t.lookahead=t.strstart-r,t.strstart=r,ui(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-262&&(ui(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(ui(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(ui(t,!1),t.strm.avail_out),1)})),new mi(4,4,8,4,vi),new mi(4,5,16,8,vi),new mi(4,6,32,32,vi),new mi(4,4,16,16,yi),new mi(8,16,32,32,yi),new mi(8,16,128,128,yi),new mi(8,32,128,256,yi),new mi(32,128,258,1024,yi),new mi(32,258,258,4096,yi)];var Si={deflateInit:function(t,e){return ki(t,e,8,15,8,0)},deflateInit2:ki,deflateReset:xi,deflateResetKeep:wi,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?-2:(t.state.gzhead=e,0):-2},deflate:function(t,e){var n,r,i,o;if(!t||!t.state||e>5||e<0)return t?ai(t,-2):-2;if(r=t.state,!t.output||!t.input&&0!==t.avail_in||666===r.status&&4!==e)return ai(t,0===t.avail_out?-5:-2);if(r.strm=t,n=r.last_flush,r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,ci(r,31),ci(r,139),ci(r,8),r.gzhead?(ci(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),ci(r,255&r.gzhead.time),ci(r,r.gzhead.time>>8&255),ci(r,r.gzhead.time>>16&255),ci(r,r.gzhead.time>>24&255),ci(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),ci(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(ci(r,255&r.gzhead.extra.length),ci(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=ii(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(ci(r,0),ci(r,0),ci(r,0),ci(r,0),ci(r,0),ci(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),ci(r,3),r.status=113);else{var a=8+(r.w_bits-8<<4)<<8;a|=(r.strategy>=2||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(a|=32),a+=31-a%31,r.status=113,di(r,a),0!==r.strstart&&(di(r,t.adler>>>16),di(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(i=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>i&&(t.adler=ii(t.adler,r.pending_buf,r.pending-i,i)),li(t),i=r.pending,r.pending!==r.pending_buf_size));)ci(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>i&&(t.adler=ii(t.adler,r.pending_buf,r.pending-i,i)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){i=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>i&&(t.adler=ii(t.adler,r.pending_buf,r.pending-i,i)),li(t),i=r.pending,r.pending===r.pending_buf_size)){o=1;break}o=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,ci(r,o)}while(0!==o);r.gzhead.hcrc&&r.pending>i&&(t.adler=ii(t.adler,r.pending_buf,r.pending-i,i)),0===o&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){i=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>i&&(t.adler=ii(t.adler,r.pending_buf,r.pending-i,i)),li(t),i=r.pending,r.pending===r.pending_buf_size)){o=1;break}o=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,ci(r,o)}while(0!==o);r.gzhead.hcrc&&r.pending>i&&(t.adler=ii(t.adler,r.pending_buf,r.pending-i,i)),0===o&&(r.status=103)}else r.status=103;if(103===r.status&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&li(t),r.pending+2<=r.pending_buf_size&&(ci(r,255&t.adler),ci(r,t.adler>>8&255),t.adler=0,r.status=113)):r.status=113),0!==r.pending){if(li(t),0===t.avail_out)return r.last_flush=-1,0}else if(0===t.avail_in&&si(e)<=si(n)&&4!==e)return ai(t,-5);if(666===r.status&&0!==t.avail_in)return ai(t,-5);if(0!==t.avail_in||0!==r.lookahead||0!==e&&666!==r.status){var s=2===r.strategy?function(t,e){for(var n;;){if(0===t.lookahead&&(gi(t),0===t.lookahead)){if(0===e)return 1;break}if(t.match_length=0,n=ti._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(ui(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(ui(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(ui(t,!1),0===t.strm.avail_out)?1:2}(r,e):3===r.strategy?function(t,e){for(var n,r,i,o,a=t.window;;){if(t.lookahead<=258){if(gi(t),t.lookahead<=258&&0===e)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(r=a[i=t.strstart-1])===a[++i]&&r===a[++i]&&r===a[++i]){o=t.strstart+258;do{}while(r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&i<o);t.match_length=258-(o-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(n=ti._tr_tally(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=ti._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(ui(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(ui(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(ui(t,!1),0===t.strm.avail_out)?1:2}(r,e):ri[r.level].func(r,e);if(3!==s&&4!==s||(r.status=666),1===s||3===s)return 0===t.avail_out&&(r.last_flush=-1),0;if(2===s&&(1===e?ti._tr_align(r):5!==e&&(ti._tr_stored_block(r,0,0,!1),3===e&&(hi(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),li(t),0===t.avail_out))return r.last_flush=-1,0}return 4!==e?0:r.wrap<=0?1:(2===r.wrap?(ci(r,255&t.adler),ci(r,t.adler>>8&255),ci(r,t.adler>>16&255),ci(r,t.adler>>24&255),ci(r,255&t.total_in),ci(r,t.total_in>>8&255),ci(r,t.total_in>>16&255),ci(r,t.total_in>>24&255)):(di(r,t.adler>>>16),di(r,65535&t.adler)),li(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?0:1)},deflateEnd:function(t){var e;return t&&t.state?42!==(e=t.state.status)&&69!==e&&73!==e&&91!==e&&103!==e&&113!==e&&666!==e?ai(t,-2):(t.state=null,113===e?ai(t,-3):0):-2},deflateSetDictionary:function(t,e){var n,r,i,o,a,s,h,l,u=e.length;if(!t||!t.state)return-2;if(2===(o=(n=t.state).wrap)||1===o&&42!==n.status||n.lookahead)return-2;for(1===o&&(t.adler=ei(t.adler,e,u,0)),n.wrap=0,u>=n.w_size&&(0===o&&(hi(n.head),n.strstart=0,n.block_start=0,n.insert=0),l=new xr.Buf8(n.w_size),xr.arraySet(l,e,u-n.w_size,n.w_size,0),e=l,u=n.w_size),a=t.avail_in,s=t.next_in,h=t.input,t.avail_in=u,t.next_in=0,t.input=e,gi(n);n.lookahead>=3;){r=n.strstart,i=n.lookahead-2;do{n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+3-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++}while(--i);n.strstart=r,n.lookahead=2,gi(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=s,t.input=h,t.avail_in=a,n.wrap=o,0},deflateInfo:"pako deflate (from Nodeca project)"},Fi=!0,Ci=!0;try{String.fromCharCode.apply(null,[0])}catch(t){Fi=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ci=!1}for(var Ai=new xr.Buf8(256),zi=0;zi<256;zi++)Ai[zi]=zi>=252?6:zi>=248?5:zi>=240?4:zi>=224?3:zi>=192?2:1;Ai[254]=Ai[254]=1;function Ti(t,e){if(e<65534&&(t.subarray&&Ci||!t.subarray&&Fi))return String.fromCharCode.apply(null,xr.shrinkBuf(t,e));for(var n="",r=0;r<e;r++)n+=String.fromCharCode(t[r]);return n}var Oi=function(t){var e,n,r,i,o,a=t.length,s=0;for(i=0;i<a;i++)55296==(64512&(n=t.charCodeAt(i)))&&i+1<a&&56320==(64512&(r=t.charCodeAt(i+1)))&&(n=65536+(n-55296<<10)+(r-56320),i++),s+=n<128?1:n<2048?2:n<65536?3:4;for(e=new xr.Buf8(s),o=0,i=0;o<s;i++)55296==(64512&(n=t.charCodeAt(i)))&&i+1<a&&56320==(64512&(r=t.charCodeAt(i+1)))&&(n=65536+(n-55296<<10)+(r-56320),i++),n<128?e[o++]=n:n<2048?(e[o++]=192|n>>>6,e[o++]=128|63&n):n<65536?(e[o++]=224|n>>>12,e[o++]=128|n>>>6&63,e[o++]=128|63&n):(e[o++]=240|n>>>18,e[o++]=128|n>>>12&63,e[o++]=128|n>>>6&63,e[o++]=128|63&n);return e},Ri=function(t){return Ti(t,t.length)},Bi=function(t){for(var e=new xr.Buf8(t.length),n=0,r=e.length;n<r;n++)e[n]=t.charCodeAt(n);return e},Ni=function(t,e){var n,r,i,o,a=e||t.length,s=new Array(2*a);for(r=0,n=0;n<a;)if((i=t[n++])<128)s[r++]=i;else if((o=Ai[i])>4)s[r++]=65533,n+=o-1;else{for(i&=2===o?31:3===o?15:7;o>1&&n<a;)i=i<<6|63&t[n++],o--;o>1?s[r++]=65533:i<65536?s[r++]=i:(i-=65536,s[r++]=55296|i>>10&1023,s[r++]=56320|1023&i)}return Ti(s,r)},Pi=function(t,e){var n;for((e=e||t.length)>t.length&&(e=t.length),n=e-1;n>=0&&128==(192&t[n]);)n--;return n<0||0===n?e:n+Ai[t[n]]>e?n:e};var Di=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},ji=Object.prototype.toString;function Ei(t){if(!(this instanceof Ei))return new Ei(t);this.options=xr.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Di,this.strm.avail_out=0;var n=Si.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(0!==n)throw new Error(oi[n]);if(e.header&&Si.deflateSetHeader(this.strm,e.header),e.dictionary){var r;if(r="string"==typeof e.dictionary?Oi(e.dictionary):"[object ArrayBuffer]"===ji.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,0!==(n=Si.deflateSetDictionary(this.strm,r)))throw new Error(oi[n]);this._dict_set=!0}}function Ii(t,e){var n=new Ei(e);if(n.push(t,!0),n.err)throw n.msg||oi[n.err];return n.result}Ei.prototype.push=function(t,e){var n,r,i=this.strm,o=this.options.chunkSize;if(this.ended)return!1;r=e===~~e?e:!0===e?4:0,"string"==typeof t?i.input=Oi(t):"[object ArrayBuffer]"===ji.call(t)?i.input=new Uint8Array(t):i.input=t,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new xr.Buf8(o),i.next_out=0,i.avail_out=o),1!==(n=Si.deflate(i,r))&&0!==n)return this.onEnd(n),this.ended=!0,!1;0!==i.avail_out&&(0!==i.avail_in||4!==r&&2!==r)||("string"===this.options.to?this.onData(Ri(xr.shrinkBuf(i.output,i.next_out))):this.onData(xr.shrinkBuf(i.output,i.next_out)))}while((i.avail_in>0||0===i.avail_out)&&1!==n);return 4===r?(n=Si.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,0===n):2!==r||(this.onEnd(0),i.avail_out=0,!0)},Ei.prototype.onData=function(t){this.chunks.push(t)},Ei.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=xr.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Mi={Deflate:Ei,deflate:Ii,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Ii(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Ii(t,e)}},Ui=function(t,e){var n,r,i,o,a,s,h,l,u,c,d,f,p,g,v,y,m,b,w,x,k,S,F,C,A;n=t.state,r=t.next_in,C=t.input,i=r+(t.avail_in-5),o=t.next_out,A=t.output,a=o-(e-t.avail_out),s=o+(t.avail_out-257),h=n.dmax,l=n.wsize,u=n.whave,c=n.wnext,d=n.window,f=n.hold,p=n.bits,g=n.lencode,v=n.distcode,y=(1<<n.lenbits)-1,m=(1<<n.distbits)-1;t:do{p<15&&(f+=C[r++]<<p,p+=8,f+=C[r++]<<p,p+=8),b=g[f&y];e:for(;;){if(f>>>=w=b>>>24,p-=w,0===(w=b>>>16&255))A[o++]=65535&b;else{if(!(16&w)){if(0==(64&w)){b=g[(65535&b)+(f&(1<<w)-1)];continue e}if(32&w){n.mode=12;break t}t.msg="invalid literal/length code",n.mode=30;break t}x=65535&b,(w&=15)&&(p<w&&(f+=C[r++]<<p,p+=8),x+=f&(1<<w)-1,f>>>=w,p-=w),p<15&&(f+=C[r++]<<p,p+=8,f+=C[r++]<<p,p+=8),b=v[f&m];n:for(;;){if(f>>>=w=b>>>24,p-=w,!(16&(w=b>>>16&255))){if(0==(64&w)){b=v[(65535&b)+(f&(1<<w)-1)];continue n}t.msg="invalid distance code",n.mode=30;break t}if(k=65535&b,p<(w&=15)&&(f+=C[r++]<<p,(p+=8)<w&&(f+=C[r++]<<p,p+=8)),(k+=f&(1<<w)-1)>h){t.msg="invalid distance too far back",n.mode=30;break t}if(f>>>=w,p-=w,k>(w=o-a)){if((w=k-w)>u&&n.sane){t.msg="invalid distance too far back",n.mode=30;break t}if(S=0,F=d,0===c){if(S+=l-w,w<x){x-=w;do{A[o++]=d[S++]}while(--w);S=o-k,F=A}}else if(c<w){if(S+=l+c-w,(w-=c)<x){x-=w;do{A[o++]=d[S++]}while(--w);if(S=0,c<x){x-=w=c;do{A[o++]=d[S++]}while(--w);S=o-k,F=A}}}else if(S+=c-w,w<x){x-=w;do{A[o++]=d[S++]}while(--w);S=o-k,F=A}for(;x>2;)A[o++]=F[S++],A[o++]=F[S++],A[o++]=F[S++],x-=3;x&&(A[o++]=F[S++],x>1&&(A[o++]=F[S++]))}else{S=o-k;do{A[o++]=A[S++],A[o++]=A[S++],A[o++]=A[S++],x-=3}while(x>2);x&&(A[o++]=A[S++],x>1&&(A[o++]=A[S++]))}break}}break}}while(r<i&&o<s);r-=x=p>>3,f&=(1<<(p-=x<<3))-1,t.next_in=r,t.next_out=o,t.avail_in=r<i?i-r+5:5-(r-i),t.avail_out=o<s?s-o+257:257-(o-s),n.hold=f,n.bits=p},Vi=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Wi=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],qi=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Ki=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],Li=function(t,e,n,r,i,o,a,s){var h,l,u,c,d,f,p,g,v,y=s.bits,m=0,b=0,w=0,x=0,k=0,S=0,F=0,C=0,A=0,z=0,T=null,O=0,R=new xr.Buf16(16),B=new xr.Buf16(16),N=null,P=0;for(m=0;m<=15;m++)R[m]=0;for(b=0;b<r;b++)R[e[n+b]]++;for(k=y,x=15;x>=1&&0===R[x];x--);if(k>x&&(k=x),0===x)return i[o++]=20971520,i[o++]=20971520,s.bits=1,0;for(w=1;w<x&&0===R[w];w++);for(k<w&&(k=w),C=1,m=1;m<=15;m++)if(C<<=1,(C-=R[m])<0)return-1;if(C>0&&(0===t||1!==x))return-1;for(B[1]=0,m=1;m<15;m++)B[m+1]=B[m]+R[m];for(b=0;b<r;b++)0!==e[n+b]&&(a[B[e[n+b]]++]=b);if(0===t?(T=N=a,f=19):1===t?(T=Vi,O-=257,N=Wi,P-=257,f=256):(T=qi,N=Ki,f=-1),z=0,b=0,m=w,d=o,S=k,F=0,u=-1,c=(A=1<<k)-1,1===t&&A>852||2===t&&A>592)return 1;for(;;){p=m-F,a[b]<f?(g=0,v=a[b]):a[b]>f?(g=N[P+a[b]],v=T[O+a[b]]):(g=96,v=0),h=1<<m-F,w=l=1<<S;do{i[d+(z>>F)+(l-=h)]=p<<24|g<<16|v|0}while(0!==l);for(h=1<<m-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,b++,0==--R[m]){if(m===x)break;m=e[n+a[b]]}if(m>k&&(z&c)!==u){for(0===F&&(F=k),d+=w,C=1<<(S=m-F);S+F<x&&!((C-=R[S+F])<=0);)S++,C<<=1;if(A+=1<<S,1===t&&A>852||2===t&&A>592)return 1;i[u=z&c]=k<<24|S<<16|d-o|0}}return 0!==z&&(i[d+z]=m-F<<24|64<<16|0),s.bits=k,0};function Gi(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function Hi(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new xr.Buf16(320),this.work=new xr.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _i(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new xr.Buf32(852),e.distcode=e.distdyn=new xr.Buf32(592),e.sane=1,e.back=-1,0):-2}function Xi(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,_i(t)):-2}function Zi(t,e){var n,r;return t&&t.state?(r=t.state,e<0?(n=0,e=-e):(n=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?-2:(null!==r.window&&r.wbits!==e&&(r.window=null),r.wrap=n,r.wbits=e,Xi(t))):-2}function Yi(t,e){var n,r;return t?(r=new Hi,t.state=r,r.window=null,0!==(n=Zi(t,e))&&(t.state=null),n):-2}var Ji,Qi,$i=!0;function to(t){if($i){var e;for(Ji=new xr.Buf32(512),Qi=new xr.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(Li(1,t.lens,0,288,Ji,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;Li(2,t.lens,0,32,Qi,0,t.work,{bits:5}),$i=!1}t.lencode=Ji,t.lenbits=9,t.distcode=Qi,t.distbits=5}function eo(t,e,n,r){var i,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new xr.Buf8(o.wsize)),r>=o.wsize?(xr.arraySet(o.window,e,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((i=o.wsize-o.wnext)>r&&(i=r),xr.arraySet(o.window,e,n-r,i,o.wnext),(r-=i)?(xr.arraySet(o.window,e,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0}var no={inflateReset:Xi,inflateReset2:Zi,inflateResetKeep:_i,inflateInit:function(t){return Yi(t,15)},inflateInit2:Yi,inflate:function(t,e){var n,r,i,o,a,s,h,l,u,c,d,f,p,g,v,y,m,b,w,x,k,S,F,C,A=0,z=new xr.Buf8(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return-2;12===(n=t.state).mode&&(n.mode=13),a=t.next_out,i=t.output,h=t.avail_out,o=t.next_in,r=t.input,s=t.avail_in,l=n.hold,u=n.bits,c=s,d=h,S=0;t:for(;;)switch(n.mode){case 1:if(0===n.wrap){n.mode=13;break}for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(2&n.wrap&&35615===l){n.check=0,z[0]=255&l,z[1]=l>>>8&255,n.check=ii(n.check,z,2,0),l=0,u=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&l)<<8)+(l>>8))%31){t.msg="incorrect header check",n.mode=30;break}if(8!=(15&l)){t.msg="unknown compression method",n.mode=30;break}if(u-=4,k=8+(15&(l>>>=4)),0===n.wbits)n.wbits=k;else if(k>n.wbits){t.msg="invalid window size",n.mode=30;break}n.dmax=1<<k,t.adler=n.check=1,n.mode=512&l?10:12,l=0,u=0;break;case 2:for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(n.flags=l,8!=(255&n.flags)){t.msg="unknown compression method",n.mode=30;break}if(57344&n.flags){t.msg="unknown header flags set",n.mode=30;break}n.head&&(n.head.text=l>>8&1),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,n.check=ii(n.check,z,2,0)),l=0,u=0,n.mode=3;case 3:for(;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.head&&(n.head.time=l),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,z[2]=l>>>16&255,z[3]=l>>>24&255,n.check=ii(n.check,z,4,0)),l=0,u=0,n.mode=4;case 4:for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.head&&(n.head.xflags=255&l,n.head.os=l>>8),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,n.check=ii(n.check,z,2,0)),l=0,u=0,n.mode=5;case 5:if(1024&n.flags){for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.length=l,n.head&&(n.head.extra_len=l),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,n.check=ii(n.check,z,2,0)),l=0,u=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&((f=n.length)>s&&(f=s),f&&(n.head&&(k=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),xr.arraySet(n.head.extra,r,o,f,k)),512&n.flags&&(n.check=ii(n.check,r,f,o)),s-=f,o+=f,n.length-=f),n.length))break t;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===s)break t;f=0;do{k=r[o+f++],n.head&&k&&n.length<65536&&(n.head.name+=String.fromCharCode(k))}while(k&&f<s);if(512&n.flags&&(n.check=ii(n.check,r,f,o)),s-=f,o+=f,k)break t}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===s)break t;f=0;do{k=r[o+f++],n.head&&k&&n.length<65536&&(n.head.comment+=String.fromCharCode(k))}while(k&&f<s);if(512&n.flags&&(n.check=ii(n.check,r,f,o)),s-=f,o+=f,k)break t}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(l!==(65535&n.check)){t.msg="header crc mismatch",n.mode=30;break}l=0,u=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=12;break;case 10:for(;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}t.adler=n.check=Gi(l),l=0,u=0,n.mode=11;case 11:if(0===n.havedict)return t.next_out=a,t.avail_out=h,t.next_in=o,t.avail_in=s,n.hold=l,n.bits=u,2;t.adler=n.check=1,n.mode=12;case 12:if(5===e||6===e)break t;case 13:if(n.last){l>>>=7&u,u-=7&u,n.mode=27;break}for(;u<3;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}switch(n.last=1&l,u-=1,3&(l>>>=1)){case 0:n.mode=14;break;case 1:if(to(n),n.mode=20,6===e){l>>>=2,u-=2;break t}break;case 2:n.mode=17;break;case 3:t.msg="invalid block type",n.mode=30}l>>>=2,u-=2;break;case 14:for(l>>>=7&u,u-=7&u;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if((65535&l)!=(l>>>16^65535)){t.msg="invalid stored block lengths",n.mode=30;break}if(n.length=65535&l,l=0,u=0,n.mode=15,6===e)break t;case 15:n.mode=16;case 16:if(f=n.length){if(f>s&&(f=s),f>h&&(f=h),0===f)break t;xr.arraySet(i,r,o,f,a),s-=f,o+=f,h-=f,a+=f,n.length-=f;break}n.mode=12;break;case 17:for(;u<14;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(n.nlen=257+(31&l),l>>>=5,u-=5,n.ndist=1+(31&l),l>>>=5,u-=5,n.ncode=4+(15&l),l>>>=4,u-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;u<3;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.lens[T[n.have++]]=7&l,l>>>=3,u-=3}for(;n.have<19;)n.lens[T[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,F={bits:n.lenbits},S=Li(0,n.lens,0,19,n.lencode,0,n.work,F),n.lenbits=F.bits,S){t.msg="invalid code lengths set",n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;y=(A=n.lencode[l&(1<<n.lenbits)-1])>>>16&255,m=65535&A,!((v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(m<16)l>>>=v,u-=v,n.lens[n.have++]=m;else{if(16===m){for(C=v+2;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(l>>>=v,u-=v,0===n.have){t.msg="invalid bit length repeat",n.mode=30;break}k=n.lens[n.have-1],f=3+(3&l),l>>>=2,u-=2}else if(17===m){for(C=v+3;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}u-=v,k=0,f=3+(7&(l>>>=v)),l>>>=3,u-=3}else{for(C=v+7;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}u-=v,k=0,f=11+(127&(l>>>=v)),l>>>=7,u-=7}if(n.have+f>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=30;break}for(;f--;)n.lens[n.have++]=k}}if(30===n.mode)break;if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",n.mode=30;break}if(n.lenbits=9,F={bits:n.lenbits},S=Li(1,n.lens,0,n.nlen,n.lencode,0,n.work,F),n.lenbits=F.bits,S){t.msg="invalid literal/lengths set",n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,F={bits:n.distbits},S=Li(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,F),n.distbits=F.bits,S){t.msg="invalid distances set",n.mode=30;break}if(n.mode=20,6===e)break t;case 20:n.mode=21;case 21:if(s>=6&&h>=258){t.next_out=a,t.avail_out=h,t.next_in=o,t.avail_in=s,n.hold=l,n.bits=u,Ui(t,d),a=t.next_out,i=t.output,h=t.avail_out,o=t.next_in,r=t.input,s=t.avail_in,l=n.hold,u=n.bits,12===n.mode&&(n.back=-1);break}for(n.back=0;y=(A=n.lencode[l&(1<<n.lenbits)-1])>>>16&255,m=65535&A,!((v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(y&&0==(240&y)){for(b=v,w=y,x=m;y=(A=n.lencode[x+((l&(1<<b+w)-1)>>b)])>>>16&255,m=65535&A,!(b+(v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=v,u-=v,n.back+=v,n.length=m,0===y){n.mode=26;break}if(32&y){n.back=-1,n.mode=12;break}if(64&y){t.msg="invalid literal/length code",n.mode=30;break}n.extra=15&y,n.mode=22;case 22:if(n.extra){for(C=n.extra;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.length+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;y=(A=n.distcode[l&(1<<n.distbits)-1])>>>16&255,m=65535&A,!((v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(0==(240&y)){for(b=v,w=y,x=m;y=(A=n.distcode[x+((l&(1<<b+w)-1)>>b)])>>>16&255,m=65535&A,!(b+(v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=v,u-=v,n.back+=v,64&y){t.msg="invalid distance code",n.mode=30;break}n.offset=m,n.extra=15&y,n.mode=24;case 24:if(n.extra){for(C=n.extra;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.offset+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=30;break}n.mode=25;case 25:if(0===h)break t;if(f=d-h,n.offset>f){if((f=n.offset-f)>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=30;break}f>n.wnext?(f-=n.wnext,p=n.wsize-f):p=n.wnext-f,f>n.length&&(f=n.length),g=n.window}else g=i,p=a-n.offset,f=n.length;f>h&&(f=h),h-=f,n.length-=f;do{i[a++]=g[p++]}while(--f);0===n.length&&(n.mode=21);break;case 26:if(0===h)break t;i[a++]=n.length,h--,n.mode=21;break;case 27:if(n.wrap){for(;u<32;){if(0===s)break t;s--,l|=r[o++]<<u,u+=8}if(d-=h,t.total_out+=d,n.total+=d,d&&(t.adler=n.check=n.flags?ii(n.check,i,d,a-d):ei(n.check,i,d,a-d)),d=h,(n.flags?l:Gi(l))!==n.check){t.msg="incorrect data check",n.mode=30;break}l=0,u=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(l!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=30;break}l=0,u=0}n.mode=29;case 29:S=1;break t;case 30:S=-3;break t;case 31:return-4;case 32:default:return-2}return t.next_out=a,t.avail_out=h,t.next_in=o,t.avail_in=s,n.hold=l,n.bits=u,(n.wsize||d!==t.avail_out&&n.mode<30&&(n.mode<27||4!==e))&&eo(t,t.output,t.next_out,d-t.avail_out),c-=t.avail_in,d-=t.avail_out,t.total_in+=c,t.total_out+=d,n.total+=d,n.wrap&&d&&(t.adler=n.check=n.flags?ii(n.check,i,d,t.next_out-d):ei(n.check,i,d,t.next_out-d)),t.data_type=n.bits+(n.last?64:0)+(12===n.mode?128:0)+(20===n.mode||15===n.mode?256:0),(0===c&&0===d||4===e)&&0===S&&(S=-5),S},inflateEnd:function(t){if(!t||!t.state)return-2;var e=t.state;return e.window&&(e.window=null),t.state=null,0},inflateGetHeader:function(t,e){var n;return t&&t.state?0==(2&(n=t.state).wrap)?-2:(n.head=e,e.done=!1,0):-2},inflateSetDictionary:function(t,e){var n,r=e.length;return t&&t.state?0!==(n=t.state).wrap&&11!==n.mode?-2:11===n.mode&&ei(1,e,r,0)!==n.check?-3:eo(t,e,r,r)?(n.mode=31,-4):(n.havedict=1,0):-2},inflateInfo:"pako inflate (from Nodeca project)"},ro={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};var io=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},oo=Object.prototype.toString;function ao(t){if(!(this instanceof ao))return new ao(t);this.options=xr.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Di,this.strm.avail_out=0;var n=no.inflateInit2(this.strm,e.windowBits);if(n!==ro.Z_OK)throw new Error(oi[n]);if(this.header=new io,no.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Oi(e.dictionary):"[object ArrayBuffer]"===oo.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(n=no.inflateSetDictionary(this.strm,e.dictionary))!==ro.Z_OK))throw new Error(oi[n])}function so(t,e){var n=new ao(e);if(n.push(t,!0),n.err)throw n.msg||oi[n.err];return n.result}ao.prototype.push=function(t,e){var n,r,i,o,a,s=this.strm,h=this.options.chunkSize,l=this.options.dictionary,u=!1;if(this.ended)return!1;r=e===~~e?e:!0===e?ro.Z_FINISH:ro.Z_NO_FLUSH,"string"==typeof t?s.input=Bi(t):"[object ArrayBuffer]"===oo.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new xr.Buf8(h),s.next_out=0,s.avail_out=h),(n=no.inflate(s,ro.Z_NO_FLUSH))===ro.Z_NEED_DICT&&l&&(n=no.inflateSetDictionary(this.strm,l)),n===ro.Z_BUF_ERROR&&!0===u&&(n=ro.Z_OK,u=!1),n!==ro.Z_STREAM_END&&n!==ro.Z_OK)return this.onEnd(n),this.ended=!0,!1;s.next_out&&(0!==s.avail_out&&n!==ro.Z_STREAM_END&&(0!==s.avail_in||r!==ro.Z_FINISH&&r!==ro.Z_SYNC_FLUSH)||("string"===this.options.to?(i=Pi(s.output,s.next_out),o=s.next_out-i,a=Ni(s.output,i),s.next_out=o,s.avail_out=h-o,o&&xr.arraySet(s.output,s.output,i,o,0),this.onData(a)):this.onData(xr.shrinkBuf(s.output,s.next_out)))),0===s.avail_in&&0===s.avail_out&&(u=!0)}while((s.avail_in>0||0===s.avail_out)&&n!==ro.Z_STREAM_END);return n===ro.Z_STREAM_END&&(r=ro.Z_FINISH),r===ro.Z_FINISH?(n=no.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===ro.Z_OK):r!==ro.Z_SYNC_FLUSH||(this.onEnd(ro.Z_OK),s.avail_out=0,!0)},ao.prototype.onData=function(t){this.chunks.push(t)},ao.prototype.onEnd=function(t){t===ro.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=xr.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var ho={Inflate:ao,inflate:so,inflateRaw:function(t,e){return(e=e||{}).raw=!0,so(t,e)},ungzip:so},lo={};(0,xr.assign)(lo,Mi,ho,ro);var uo=lo,co=function(){function t(t,e){this.major=String(t),this.minor=String(e)}return t.prototype.toString=function(){var t=m(129);return"%PDF-"+this.major+"."+this.minor+"\n%"+t+t+t+t},t.prototype.sizeInBytes=function(){return 12+this.major.length+this.minor.length},t.prototype.copyBytesInto=function(t,e){var n=e;return t[e++]=wr.Percent,t[e++]=wr.P,t[e++]=wr.D,t[e++]=wr.F,t[e++]=wr.Dash,e+=x(this.major,t,e),t[e++]=wr.Period,e+=x(this.minor,t,e),t[e++]=wr.Newline,t[e++]=wr.Percent,t[e++]=129,t[e++]=129,t[e++]=129,t[e++]=129,e-n},t.forVersion=function(e,n){return new t(e,n)},t}(),fo=function(){function t(){}return t.prototype.clone=function(t){throw new Hn(this.constructor.name,"clone")},t.prototype.toString=function(){throw new Hn(this.constructor.name,"toString")},t.prototype.sizeInBytes=function(){throw new Hn(this.constructor.name,"sizeInBytes")},t.prototype.copyBytesInto=function(t,e){throw new Hn(this.constructor.name,"copyBytesInto")},t}(),po=function(t){function n(e){var n=t.call(this)||this;return n.numberValue=e,n.stringValue=ct(e),n}return e(n,t),n.prototype.asNumber=function(){return this.numberValue},n.prototype.value=function(){return this.numberValue},n.prototype.clone=function(){return n.of(this.numberValue)},n.prototype.toString=function(){return this.stringValue},n.prototype.sizeInBytes=function(){return this.stringValue.length},n.prototype.copyBytesInto=function(t,e){return e+=x(this.stringValue,t,e),this.stringValue.length},n.of=function(t){return new n(t)},n}(fo),go=function(t){function n(e){var n=t.call(this)||this;return n.array=[],n.context=e,n}return e(n,t),n.prototype.size=function(){return this.array.length},n.prototype.push=function(t){this.array.push(t)},n.prototype.insert=function(t,e){this.array.splice(t,0,e)},n.prototype.indexOf=function(t){var e=this.array.indexOf(t);return-1===e?void 0:e},n.prototype.remove=function(t){this.array.splice(t,1)},n.prototype.set=function(t,e){this.array[t]=e},n.prototype.get=function(t){return this.array[t]},n.prototype.lookupMaybe=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return(e=this.context).lookupMaybe.apply(e,o([this.get(t)],n))},n.prototype.lookup=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return(e=this.context).lookup.apply(e,o([this.get(t)],n))},n.prototype.asRectangle=function(){if(4!==this.size())throw new er(this.size());var t=this.lookup(0,po).asNumber(),e=this.lookup(1,po).asNumber();return{x:t,y:e,width:this.lookup(2,po).asNumber()-t,height:this.lookup(3,po).asNumber()-e}},n.prototype.asArray=function(){return this.array.slice()},n.prototype.clone=function(t){for(var e=n.withContext(t||this.context),r=0,i=this.size();r<i;r++)e.push(this.array[r]);return e},n.prototype.toString=function(){for(var t="[ ",e=0,n=this.size();e<n;e++)t+=this.get(e).toString(),t+=" ";return t+="]"},n.prototype.sizeInBytes=function(){for(var t=3,e=0,n=this.size();e<n;e++)t+=this.get(e).sizeInBytes()+1;return t},n.prototype.copyBytesInto=function(t,e){var n=e;t[e++]=wr.LeftSquareBracket,t[e++]=wr.Space;for(var r=0,i=this.size();r<i;r++)e+=this.get(r).copyBytesInto(t,e),t[e++]=wr.Space;return t[e++]=wr.RightSquareBracket,e-n},n.prototype.scalePDFNumbers=function(t,e){for(var n=0,r=this.size();n<r;n++){var i=this.lookup(n);if(i instanceof po){var o=n%2==0?t:e;this.set(n,po.of(i.asNumber()*o))}}},n.withContext=function(t){return new n(t)},n}(fo),vo={},yo=function(t){function n(e,n){var r=this;if(e!==vo)throw new _n("PDFBool");return(r=t.call(this)||this).value=n,r}return e(n,t),n.prototype.asBoolean=function(){return this.value},n.prototype.clone=function(){return this},n.prototype.toString=function(){return String(this.value)},n.prototype.sizeInBytes=function(){return this.value?4:5},n.prototype.copyBytesInto=function(t,e){return this.value?(t[e++]=wr.t,t[e++]=wr.r,t[e++]=wr.u,t[e++]=wr.e,4):(t[e++]=wr.f,t[e++]=wr.a,t[e++]=wr.l,t[e++]=wr.s,t[e++]=wr.e,5)},n.True=new n(vo,!0),n.False=new n(vo,!1),n}(fo),mo=new Uint8Array(256);mo[wr.LeftParen]=1,mo[wr.RightParen]=1,mo[wr.LessThan]=1,mo[wr.GreaterThan]=1,mo[wr.LeftSquareBracket]=1,mo[wr.RightSquareBracket]=1,mo[wr.LeftCurly]=1,mo[wr.RightCurly]=1,mo[wr.ForwardSlash]=1,mo[wr.Percent]=1;var bo=new Uint8Array(256);bo[wr.Null]=1,bo[wr.Tab]=1,bo[wr.Newline]=1,bo[wr.FormFeed]=1,bo[wr.CarriageReturn]=1,bo[wr.Space]=1;for(var wo=new Uint8Array(256),xo=0;xo<256;xo++)wo[xo]=bo[xo]||mo[xo]?1:0;wo[wr.Hash]=1;var ko,So={},Fo=new Map,Co=function(t){function n(e,n){var r=this;if(e!==So)throw new _n("PDFName");r=t.call(this)||this;for(var i,o="/",a=0,s=n.length;a<s;a++){var h=n[a],l=p(h);o+=(i=l)>=wr.ExclamationPoint&&i<=wr.Tilde&&!wo[i]?h:"#"+y(l)}return r.encodedName=o,r}return e(n,t),n.prototype.asBytes=function(){for(var t=[],e="",n=!1,r=function(e){void 0!==e&&t.push(e),n=!1},i=1,o=this.encodedName.length;i<o;i++){var a=this.encodedName[i],s=p(a),h=this.encodedName[i+1];n?s>=wr.Zero&&s<=wr.Nine||s>=wr.a&&s<=wr.f||s>=wr.A&&s<=wr.F?2!==(e+=a).length&&(h>="0"&&h<="9"||h>="a"&&h<="f"||h>="A"&&h<="F")||(r(parseInt(e,16)),e=""):r(s):s===wr.Hash?n=!0:r(s)}return new Uint8Array(t)},n.prototype.decodeText=function(){var t=this.asBytes();return String.fromCharCode.apply(String,Array.from(t))},n.prototype.asString=function(){return this.encodedName},n.prototype.value=function(){return this.encodedName},n.prototype.clone=function(){return this},n.prototype.toString=function(){return this.encodedName},n.prototype.sizeInBytes=function(){return this.encodedName.length},n.prototype.copyBytesInto=function(t,e){return e+=x(this.encodedName,t,e),this.encodedName.length},n.of=function(t){var e=function(t){return t.replace(/#([\dABCDEF]{2})/g,(function(t,e){return b(e)}))}(t),r=Fo.get(e);return r||(r=new n(So,e),Fo.set(e,r)),r},n.Length=n.of("Length"),n.FlateDecode=n.of("FlateDecode"),n.Resources=n.of("Resources"),n.Font=n.of("Font"),n.XObject=n.of("XObject"),n.ExtGState=n.of("ExtGState"),n.Contents=n.of("Contents"),n.Type=n.of("Type"),n.Parent=n.of("Parent"),n.MediaBox=n.of("MediaBox"),n.Page=n.of("Page"),n.Annots=n.of("Annots"),n.TrimBox=n.of("TrimBox"),n.ArtBox=n.of("ArtBox"),n.BleedBox=n.of("BleedBox"),n.CropBox=n.of("CropBox"),n.Rotate=n.of("Rotate"),n.Title=n.of("Title"),n.Author=n.of("Author"),n.Subject=n.of("Subject"),n.Creator=n.of("Creator"),n.Keywords=n.of("Keywords"),n.Producer=n.of("Producer"),n.CreationDate=n.of("CreationDate"),n.ModDate=n.of("ModDate"),n}(fo),Ao=new(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.asNull=function(){return null},n.prototype.clone=function(){return this},n.prototype.toString=function(){return"null"},n.prototype.sizeInBytes=function(){return 4},n.prototype.copyBytesInto=function(t,e){return t[e++]=wr.n,t[e++]=wr.u,t[e++]=wr.l,t[e++]=wr.l,4},n}(fo)),zo=function(t){function n(e,n){var r=t.call(this)||this;return r.dict=e,r.context=n,r}return e(n,t),n.prototype.keys=function(){return Array.from(this.dict.keys())},n.prototype.values=function(){return Array.from(this.dict.values())},n.prototype.entries=function(){return Array.from(this.dict.entries())},n.prototype.set=function(t,e){this.dict.set(t,e)},n.prototype.get=function(t,e){void 0===e&&(e=!1);var n=this.dict.get(t);if(n!==Ao||e)return n},n.prototype.has=function(t){var e=this.dict.get(t);return void 0!==e&&e!==Ao},n.prototype.lookupMaybe=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n.includes(Ao),a=(e=this.context).lookupMaybe.apply(e,o([this.get(t,i)],n));if(a!==Ao||i)return a},n.prototype.lookup=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n.includes(Ao),a=(e=this.context).lookup.apply(e,o([this.get(t,i)],n));if(a!==Ao||i)return a},n.prototype.delete=function(t){return this.dict.delete(t)},n.prototype.asMap=function(){return new Map(this.dict)},n.prototype.uniqueKey=function(t){void 0===t&&(t="");for(var e=this.keys(),n=Co.of(this.context.addRandomSuffix(t,10));e.includes(n);)n=Co.of(this.context.addRandomSuffix(t,10));return n},n.prototype.clone=function(t){for(var e=n.withContext(t||this.context),r=this.entries(),i=0,o=r.length;i<o;i++){var a=r[i],s=a[0],h=a[1];e.set(s,h)}return e},n.prototype.toString=function(){for(var t="<<\n",e=this.entries(),n=0,r=e.length;n<r;n++){var i=e[n],o=i[0],a=i[1];t+=o.toString()+" "+a.toString()+"\n"}return t+=">>"},n.prototype.sizeInBytes=function(){for(var t=5,e=this.entries(),n=0,r=e.length;n<r;n++){var i=e[n],o=i[0],a=i[1];t+=o.sizeInBytes()+a.sizeInBytes()+2}return t},n.prototype.copyBytesInto=function(t,e){var n=e;t[e++]=wr.LessThan,t[e++]=wr.LessThan,t[e++]=wr.Newline;for(var r=this.entries(),i=0,o=r.length;i<o;i++){var a=r[i],s=a[0],h=a[1];e+=s.copyBytesInto(t,e),t[e++]=wr.Space,e+=h.copyBytesInto(t,e),t[e++]=wr.Newline}return t[e++]=wr.GreaterThan,t[e++]=wr.GreaterThan,e-n},n.withContext=function(t){return new n(new Map,t)},n.fromMapWithContext=function(t,e){return new n(t,e)},n}(fo),To=function(t){function n(e){var n=t.call(this)||this;return n.dict=e,n}return e(n,t),n.prototype.clone=function(t){throw new Hn(this.constructor.name,"clone")},n.prototype.getContentsString=function(){throw new Hn(this.constructor.name,"getContentsString")},n.prototype.getContents=function(){throw new Hn(this.constructor.name,"getContents")},n.prototype.getContentsSize=function(){throw new Hn(this.constructor.name,"getContentsSize")},n.prototype.updateDict=function(){var t=this.getContentsSize();this.dict.set(Co.Length,po.of(t))},n.prototype.sizeInBytes=function(){return this.updateDict(),this.dict.sizeInBytes()+this.getContentsSize()+18},n.prototype.toString=function(){this.updateDict();var t=this.dict.toString();return t+="\nstream\n",t+=this.getContentsString(),t+="\nendstream"},n.prototype.copyBytesInto=function(t,e){this.updateDict();var n=e;e+=this.dict.copyBytesInto(t,e),t[e++]=wr.Newline,t[e++]=wr.s,t[e++]=wr.t,t[e++]=wr.r,t[e++]=wr.e,t[e++]=wr.a,t[e++]=wr.m,t[e++]=wr.Newline;for(var r=this.getContents(),i=0,o=r.length;i<o;i++)t[e++]=r[i];return t[e++]=wr.Newline,t[e++]=wr.e,t[e++]=wr.n,t[e++]=wr.d,t[e++]=wr.s,t[e++]=wr.t,t[e++]=wr.r,t[e++]=wr.e,t[e++]=wr.a,t[e++]=wr.m,e-n},n}(fo),Oo=function(t){function n(e,n){var r=t.call(this,e)||this;return r.contents=n,r}return e(n,t),n.prototype.asUint8Array=function(){return this.contents.slice()},n.prototype.clone=function(t){return n.of(this.dict.clone(t),this.contents.slice())},n.prototype.getContentsString=function(){return V(this.contents)},n.prototype.getContents=function(){return this.contents},n.prototype.getContentsSize=function(){return this.contents.length},n.of=function(t,e){return new n(t,e)},n}(To),Ro={},Bo=new Map,No=function(t){function n(e,n,r){var i=this;if(e!==Ro)throw new _n("PDFRef");return(i=t.call(this)||this).objectNumber=n,i.generationNumber=r,i.tag=n+" "+r+" R",i}return e(n,t),n.prototype.clone=function(){return this},n.prototype.toString=function(){return this.tag},n.prototype.sizeInBytes=function(){return this.tag.length},n.prototype.copyBytesInto=function(t,e){return e+=x(this.tag,t,e),this.tag.length},n.of=function(t,e){void 0===e&&(e=0);var r=t+" "+e+" R",i=Bo.get(r);return i||(i=new n(Ro,t,e),Bo.set(r,i)),i},n}(fo),Po=function(){function t(t,e){this.name=t,this.args=e||[]}return t.prototype.clone=function(e){for(var n=new Array(this.args.length),r=0,i=n.length;r<i;r++){var o=this.args[r];n[r]=o instanceof fo?o.clone(e):o}return t.of(this.name,n)},t.prototype.toString=function(){for(var t="",e=0,n=this.args.length;e<n;e++)t+=String(this.args[e])+" ";return t+=this.name},t.prototype.sizeInBytes=function(){for(var t=0,e=0,n=this.args.length;e<n;e++){var r=this.args[e];t+=(r instanceof fo?r.sizeInBytes():r.length)+1}return t+=this.name.length},t.prototype.copyBytesInto=function(t,e){for(var n=e,r=0,i=this.args.length;r<i;r++){var o=this.args[r];e+=o instanceof fo?o.copyBytesInto(t,e):x(o,t,e),t[e++]=wr.Space}return(e+=x(this.name,t,e))-n},t.of=function(e,n){return new t(e,n)},t}();!function(t){t.NonStrokingColor="sc",t.NonStrokingColorN="scn",t.NonStrokingColorRgb="rg",t.NonStrokingColorGray="g",t.NonStrokingColorCmyk="k",t.NonStrokingColorspace="cs",t.StrokingColor="SC",t.StrokingColorN="SCN",t.StrokingColorRgb="RG",t.StrokingColorGray="G",t.StrokingColorCmyk="K",t.StrokingColorspace="CS",t.BeginMarkedContentSequence="BDC",t.BeginMarkedContent="BMC",t.EndMarkedContent="EMC",t.MarkedContentPointWithProps="DP",t.MarkedContentPoint="MP",t.DrawObject="Do",t.ConcatTransformationMatrix="cm",t.PopGraphicsState="Q",t.PushGraphicsState="q",t.SetFlatness="i",t.SetGraphicsStateParams="gs",t.SetLineCapStyle="J",t.SetLineDashPattern="d",t.SetLineJoinStyle="j",t.SetLineMiterLimit="M",t.SetLineWidth="w",t.SetTextMatrix="Tm",t.SetRenderingIntent="ri",t.AppendRectangle="re",t.BeginInlineImage="BI",t.BeginInlineImageData="ID",t.EndInlineImage="EI",t.ClipEvenOdd="W*",t.ClipNonZero="W",t.CloseAndStroke="s",t.CloseFillEvenOddAndStroke="b*",t.CloseFillNonZeroAndStroke="b",t.ClosePath="h",t.AppendBezierCurve="c",t.CurveToReplicateFinalPoint="y",t.CurveToReplicateInitialPoint="v",t.EndPath="n",t.FillEvenOddAndStroke="B*",t.FillEvenOdd="f*",t.FillNonZeroAndStroke="B",t.FillNonZero="f",t.LegacyFillNonZero="F",t.LineTo="l",t.MoveTo="m",t.ShadingFill="sh",t.StrokePath="S",t.BeginText="BT",t.EndText="ET",t.MoveText="Td",t.MoveTextSetLeading="TD",t.NextLine="T*",t.SetCharacterSpacing="Tc",t.SetFontAndSize="Tf",t.SetTextHorizontalScaling="Tz",t.SetTextLineHeight="TL",t.SetTextRenderingMode="Tr",t.SetTextRise="Ts",t.SetWordSpacing="Tw",t.ShowText="Tj",t.ShowTextAdjusted="TJ",t.ShowTextLine="'",t.ShowTextLineAndSpace='"',t.Type3D0="d0",t.Type3D1="d1",t.BeginCompatibilitySection="BX",t.EndCompatibilitySection="EX"}(ko||(ko={}));var Do,jo=ko,Eo=function(t){function n(e,n){var r=t.call(this,e)||this;return r.computeContents=function(){var t=r.getUnencodedContents();return r.encode?uo.deflate(t):t},r.encode=n,n&&e.set(Co.of("Filter"),Co.of("FlateDecode")),r.contentsCache=Gn.populatedBy(r.computeContents),r}return e(n,t),n.prototype.getContents=function(){return this.contentsCache.access()},n.prototype.getContentsSize=function(){return this.contentsCache.access().length},n.prototype.getUnencodedContents=function(){throw new Hn(this.constructor.name,"getUnencodedContents")},n}(To),Io=function(t){function n(e,n,r){void 0===r&&(r=!0);var i=t.call(this,e,r)||this;return i.operators=n,i}return e(n,t),n.prototype.push=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(t=this.operators).push.apply(t,e)},n.prototype.clone=function(t){for(var e=new Array(this.operators.length),r=0,i=this.operators.length;r<i;r++)e[r]=this.operators[r].clone(t);var o=this.dict,a=this.encode;return n.of(o.clone(t),e,a)},n.prototype.getContentsString=function(){for(var t="",e=0,n=this.operators.length;e<n;e++)t+=this.operators[e]+"\n";return t},n.prototype.getUnencodedContents=function(){for(var t=new Uint8Array(this.getUnencodedContentsSize()),e=0,n=0,r=this.operators.length;n<r;n++)e+=this.operators[n].copyBytesInto(t,e),t[e++]=wr.Newline;return t},n.prototype.getUnencodedContentsSize=function(){for(var t=0,e=0,n=this.operators.length;e<n;e++)t+=this.operators[e].sizeInBytes()+1;return t},n.of=function(t,e,r){return void 0===r&&(r=!0),new n(t,e,r)},n}(Eo),Mo=function(){function t(t){this.seed=t}return t.prototype.nextInt=function(){var t=1e4*Math.sin(this.seed++);return t-Math.floor(t)},t.withSeed=function(e){return new t(e)},t}(),Uo=function(t,e){var n=t[0],r=e[0];return n.objectNumber-r.objectNumber},Vo=function(){function t(){this.largestObjectNumber=0,this.header=co.forVersion(1,7),this.trailerInfo={},this.indirectObjects=new Map,this.rng=Mo.withSeed(1)}return t.prototype.assign=function(t,e){this.indirectObjects.set(t,e),t.objectNumber>this.largestObjectNumber&&(this.largestObjectNumber=t.objectNumber)},t.prototype.nextRef=function(){return this.largestObjectNumber+=1,No.of(this.largestObjectNumber)},t.prototype.register=function(t){var e=this.nextRef();return this.assign(e,t),e},t.prototype.delete=function(t){return this.indirectObjects.delete(t)},t.prototype.lookupMaybe=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e.includes(Ao),i=t instanceof No?this.indirectObjects.get(t):t;if(i&&(i!==Ao||r)){for(var o=0,a=e.length;o<a;o++){var s=e[o];if(s===Ao){if(i===Ao)return i}else if(i instanceof s)return i}throw new Xn(e,i)}},t.prototype.lookup=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=t instanceof No?this.indirectObjects.get(t):t;if(0===e.length)return r;for(var i=0,o=e.length;i<o;i++){var a=e[i];if(a===Ao){if(r===Ao)return r}else if(r instanceof a)return r}throw new Xn(e,r)},t.prototype.getObjectRef=function(t){for(var e=Array.from(this.indirectObjects.entries()),n=0,r=e.length;n<r;n++){var i=e[n],o=i[0];if(i[1]===t)return o}},t.prototype.enumerateIndirectObjects=function(){return Array.from(this.indirectObjects.entries()).sort(Uo)},t.prototype.obj=function(t){if(t instanceof fo)return t;if(null==t)return Ao;if("string"==typeof t)return Co.of(t);if("number"==typeof t)return po.of(t);if("boolean"==typeof t)return t?yo.True:yo.False;if(Array.isArray(t)){for(var e=go.withContext(this),n=0,r=t.length;n<r;n++)e.push(this.obj(t[n]));return e}var i=zo.withContext(this),o=Object.keys(t);for(n=0,r=o.length;n<r;n++){var a=o[n],s=t[a];void 0!==s&&i.set(Co.of(a),this.obj(s))}return i},t.prototype.stream=function(t,e){return void 0===e&&(e={}),Oo.of(this.obj(e),I(t))},t.prototype.flateStream=function(t,e){return void 0===e&&(e={}),this.stream(uo.deflate(I(t)),n(n({},e),{Filter:"FlateDecode"}))},t.prototype.contentStream=function(t,e){return void 0===e&&(e={}),Io.of(this.obj(e),t)},t.prototype.formXObject=function(t,e){return void 0===e&&(e={}),this.contentStream(t,n(n({BBox:this.obj([0,0,0,0]),Matrix:this.obj([1,0,0,1,0,0])},e),{Type:"XObject",Subtype:"Form"}))},t.prototype.getPushGraphicsStateContentStream=function(){if(this.pushGraphicsStateContentStreamRef)return this.pushGraphicsStateContentStreamRef;var t=this.obj({}),e=Po.of(jo.PushGraphicsState),n=Io.of(t,[e]);return this.pushGraphicsStateContentStreamRef=this.register(n),this.pushGraphicsStateContentStreamRef},t.prototype.getPopGraphicsStateContentStream=function(){if(this.popGraphicsStateContentStreamRef)return this.popGraphicsStateContentStreamRef;var t=this.obj({}),e=Po.of(jo.PopGraphicsState),n=Io.of(t,[e]);return this.popGraphicsStateContentStreamRef=this.register(n),this.popGraphicsStateContentStreamRef},t.prototype.addRandomSuffix=function(t,e){return void 0===e&&(e=4),t+"-"+Math.floor(this.rng.nextInt()*Math.pow(10,e))},t.create=function(){return new t},t}(),Wo=function(t){function n(e,n,r){void 0===r&&(r=!0);var i=t.call(this,e,n)||this;return i.normalized=!1,i.autoNormalizeCTM=r,i}return e(n,t),n.prototype.clone=function(t){for(var e=n.fromMapWithContext(new Map,t||this.context,this.autoNormalizeCTM),r=this.entries(),i=0,o=r.length;i<o;i++){var a=r[i],s=a[0],h=a[1];e.set(s,h)}return e},n.prototype.Parent=function(){return this.lookupMaybe(Co.Parent,zo)},n.prototype.Contents=function(){return this.lookup(Co.of("Contents"))},n.prototype.Annots=function(){return this.lookupMaybe(Co.Annots,go)},n.prototype.BleedBox=function(){return this.lookupMaybe(Co.BleedBox,go)},n.prototype.TrimBox=function(){return this.lookupMaybe(Co.TrimBox,go)},n.prototype.ArtBox=function(){return this.lookupMaybe(Co.ArtBox,go)},n.prototype.Resources=function(){var t=this.getInheritableAttribute(Co.Resources);return this.context.lookupMaybe(t,zo)},n.prototype.MediaBox=function(){var t=this.getInheritableAttribute(Co.MediaBox);return this.context.lookup(t,go)},n.prototype.CropBox=function(){var t=this.getInheritableAttribute(Co.CropBox);return this.context.lookupMaybe(t,go)},n.prototype.Rotate=function(){var t=this.getInheritableAttribute(Co.Rotate);return this.context.lookupMaybe(t,po)},n.prototype.getInheritableAttribute=function(t){var e;return this.ascend((function(n){e||(e=n.get(t))})),e},n.prototype.setParent=function(t){this.set(Co.Parent,t)},n.prototype.addContentStream=function(t){var e=this.normalizedEntries().Contents||this.context.obj([]);this.set(Co.Contents,e),e.push(t)},n.prototype.wrapContentStreams=function(t,e){var n=this.Contents();return n instanceof go&&(n.insert(0,t),n.push(e),!0)},n.prototype.addAnnot=function(t){this.normalizedEntries().Annots.push(t)},n.prototype.removeAnnot=function(t){var e=this.normalizedEntries().Annots,n=e.indexOf(t);void 0!==n&&e.remove(n)},n.prototype.setFontDictionary=function(t,e){this.normalizedEntries().Font.set(t,e)},n.prototype.newFontDictionaryKey=function(t){return this.normalizedEntries().Font.uniqueKey(t)},n.prototype.newFontDictionary=function(t,e){var n=this.newFontDictionaryKey(t);return this.setFontDictionary(n,e),n},n.prototype.setXObject=function(t,e){this.normalizedEntries().XObject.set(t,e)},n.prototype.newXObjectKey=function(t){return this.normalizedEntries().XObject.uniqueKey(t)},n.prototype.newXObject=function(t,e){var n=this.newXObjectKey(t);return this.setXObject(n,e),n},n.prototype.setExtGState=function(t,e){this.normalizedEntries().ExtGState.set(t,e)},n.prototype.newExtGStateKey=function(t){return this.normalizedEntries().ExtGState.uniqueKey(t)},n.prototype.newExtGState=function(t,e){var n=this.newExtGStateKey(t);return this.setExtGState(n,e),n},n.prototype.ascend=function(t){t(this);var e=this.Parent();e&&e.ascend(t)},n.prototype.normalize=function(){if(!this.normalized){var t=this.context,e=this.get(Co.Contents);this.context.lookup(e)instanceof To&&this.set(Co.Contents,t.obj([e])),this.autoNormalizeCTM&&this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(),this.context.getPopGraphicsStateContentStream());var n=this.getInheritableAttribute(Co.Resources),r=t.lookupMaybe(n,zo)||t.obj({});this.set(Co.Resources,r);var i=r.lookupMaybe(Co.Font,zo)||t.obj({});r.set(Co.Font,i);var o=r.lookupMaybe(Co.XObject,zo)||t.obj({});r.set(Co.XObject,o);var a=r.lookupMaybe(Co.ExtGState,zo)||t.obj({});r.set(Co.ExtGState,a);var s=this.Annots()||t.obj([]);this.set(Co.Annots,s),this.normalized=!0}},n.prototype.normalizedEntries=function(){this.normalize();var t=this.Annots(),e=this.Resources();return{Annots:t,Resources:e,Contents:this.Contents(),Font:e.lookup(Co.Font,zo),XObject:e.lookup(Co.XObject,zo),ExtGState:e.lookup(Co.ExtGState,zo)}},n.InheritableEntries=["Resources","MediaBox","CropBox","Rotate"],n.withContextAndParent=function(t,e){var r=new Map;return r.set(Co.Type,Co.Page),r.set(Co.Parent,e),r.set(Co.Resources,t.obj({})),r.set(Co.MediaBox,t.obj([0,0,612,792])),new n(r,t,!1)},n.fromMapWithContext=function(t,e,r){return void 0===r&&(r=!0),new n(t,e,r)},n}(zo),qo=function(){function t(t,e){var n=this;this.traversedObjects=new Map,this.copy=function(t){return t instanceof Wo?n.copyPDFPage(t):t instanceof zo?n.copyPDFDict(t):t instanceof go?n.copyPDFArray(t):t instanceof To?n.copyPDFStream(t):t instanceof No?n.copyPDFIndirectObject(t):t.clone()},this.copyPDFPage=function(t){for(var e=t.clone(),r=Wo.InheritableEntries,i=0,o=r.length;i<o;i++){var a=Co.of(r[i]),s=e.getInheritableAttribute(a);!e.get(a)&&s&&e.set(a,s)}return e.delete(Co.of("Parent")),n.copyPDFDict(e)},this.copyPDFDict=function(t){if(n.traversedObjects.has(t))return n.traversedObjects.get(t);var e=t.clone(n.dest);n.traversedObjects.set(t,e);for(var r=t.entries(),i=0,o=r.length;i<o;i++){var a=r[i],s=a[0],h=a[1];e.set(s,n.copy(h))}return e},this.copyPDFArray=function(t){if(n.traversedObjects.has(t))return n.traversedObjects.get(t);var e=t.clone(n.dest);n.traversedObjects.set(t,e);for(var r=0,i=t.size();r<i;r++){var o=t.get(r);e.set(r,n.copy(o))}return e},this.copyPDFStream=function(t){if(n.traversedObjects.has(t))return n.traversedObjects.get(t);var e=t.clone(n.dest);n.traversedObjects.set(t,e);for(var r=t.dict.entries(),i=0,o=r.length;i<o;i++){var a=r[i],s=a[0],h=a[1];e.dict.set(s,n.copy(h))}return e},this.copyPDFIndirectObject=function(t){if(!n.traversedObjects.has(t)){var e=n.dest.nextRef();n.traversedObjects.set(t,e);var r=n.src.lookup(t);if(r){var i=n.copy(r);n.dest.assign(e,i)}}return n.traversedObjects.get(t)},this.src=t,this.dest=e}return t.for=function(e,n){return new t(e,n)},t}(),Ko=function(){function t(t){this.subsections=t?[[t]]:[],this.chunkIdx=0,this.chunkLength=t?1:0}return t.prototype.addEntry=function(t,e){this.append({ref:t,offset:e,deleted:!1})},t.prototype.addDeletedEntry=function(t,e){this.append({ref:t,offset:e,deleted:!0})},t.prototype.toString=function(){for(var t="xref\n",e=0,n=this.subsections.length;e<n;e++){var r=this.subsections[e];t+=r[0].ref.objectNumber+" "+r.length+"\n";for(var i=0,o=r.length;i<o;i++){var a=r[i];t+=w(String(a.offset),10,"0"),t+=" ",t+=w(String(a.ref.generationNumber),5,"0"),t+=" ",t+=a.deleted?"f":"n",t+=" \n"}}return t},t.prototype.sizeInBytes=function(){for(var t=5,e=0,n=this.subsections.length;e<n;e++){var r=this.subsections[e],i=r.length,o=r[0];t+=2,t+=String(o.ref.objectNumber).length,t+=String(i).length,t+=20*i}return t},t.prototype.copyBytesInto=function(t,e){var n=e;return t[e++]=wr.x,t[e++]=wr.r,t[e++]=wr.e,t[e++]=wr.f,t[e++]=wr.Newline,(e+=this.copySubsectionsIntoBuffer(this.subsections,t,e))-n},t.prototype.copySubsectionsIntoBuffer=function(t,e,n){for(var r=n,i=t.length,o=0;o<i;o++){var a=this.subsections[o],s=String(a[0].ref.objectNumber);n+=x(s,e,n),e[n++]=wr.Space;var h=String(a.length);n+=x(h,e,n),e[n++]=wr.Newline,n+=this.copyEntriesIntoBuffer(a,e,n)}return n-r},t.prototype.copyEntriesIntoBuffer=function(t,e,n){for(var r=t.length,i=0;i<r;i++){var o=t[i],a=w(String(o.offset),10,"0");n+=x(a,e,n),e[n++]=wr.Space;var s=w(String(o.ref.generationNumber),5,"0");n+=x(s,e,n),e[n++]=wr.Space,e[n++]=o.deleted?wr.f:wr.n,e[n++]=wr.Space,e[n++]=wr.Newline}return 20*r},t.prototype.append=function(t){if(0===this.chunkLength)return this.subsections.push([t]),this.chunkIdx=0,void(this.chunkLength=1);var e=this.subsections[this.chunkIdx],n=e[this.chunkLength-1];t.ref.objectNumber-n.ref.objectNumber>1?(this.subsections.push([t]),this.chunkIdx+=1,this.chunkLength=1):(e.push(t),this.chunkLength+=1)},t.create=function(){return new t({ref:No.of(0,65535),offset:0,deleted:!0})},t.createEmpty=function(){return new t},t}(),Lo=function(){function t(t){this.lastXRefOffset=String(t)}return t.prototype.toString=function(){return"startxref\n"+this.lastXRefOffset+"\n%%EOF"},t.prototype.sizeInBytes=function(){return 16+this.lastXRefOffset.length},t.prototype.copyBytesInto=function(t,e){var n=e;return t[e++]=wr.s,t[e++]=wr.t,t[e++]=wr.a,t[e++]=wr.r,t[e++]=wr.t,t[e++]=wr.x,t[e++]=wr.r,t[e++]=wr.e,t[e++]=wr.f,t[e++]=wr.Newline,e+=x(this.lastXRefOffset,t,e),t[e++]=wr.Newline,t[e++]=wr.Percent,t[e++]=wr.Percent,t[e++]=wr.E,t[e++]=wr.O,t[e++]=wr.F,e-n},t.forLastCrossRefSectionOffset=function(e){return new t(e)},t}(),Go=function(){function t(t){this.dict=t}return t.prototype.toString=function(){return"trailer\n"+this.dict.toString()},t.prototype.sizeInBytes=function(){return 8+this.dict.sizeInBytes()},t.prototype.copyBytesInto=function(t,e){var n=e;return t[e++]=wr.t,t[e++]=wr.r,t[e++]=wr.a,t[e++]=wr.i,t[e++]=wr.l,t[e++]=wr.e,t[e++]=wr.r,t[e++]=wr.Newline,(e+=this.dict.copyBytesInto(t,e))-n},t.of=function(e){return new t(e)},t}(),Ho=function(t){function n(e,n,r){void 0===r&&(r=!0);var i=t.call(this,e.obj({}),r)||this;return i.objects=n,i.offsets=i.computeObjectOffsets(),i.offsetsString=i.computeOffsetsString(),i.dict.set(Co.of("Type"),Co.of("ObjStm")),i.dict.set(Co.of("N"),po.of(i.objects.length)),i.dict.set(Co.of("First"),po.of(i.offsetsString.length)),i}return e(n,t),n.prototype.getObjectsCount=function(){return this.objects.length},n.prototype.clone=function(t){return n.withContextAndObjects(t||this.dict.context,this.objects.slice(),this.encode)},n.prototype.getContentsString=function(){for(var t=this.offsetsString,e=0,n=this.objects.length;e<n;e++){t+=this.objects[e][1]+"\n"}return t},n.prototype.getUnencodedContents=function(){for(var t=new Uint8Array(this.getUnencodedContentsSize()),e=x(this.offsetsString,t,0),n=0,r=this.objects.length;n<r;n++){e+=this.objects[n][1].copyBytesInto(t,e),t[e++]=wr.Newline}return t},n.prototype.getUnencodedContentsSize=function(){return this.offsetsString.length+E(this.offsets)[1]+E(this.objects)[1].sizeInBytes()+1},n.prototype.computeOffsetsString=function(){for(var t="",e=0,n=this.offsets.length;e<n;e++){var r=this.offsets[e];t+=r[0]+" "+r[1]+" "}return t},n.prototype.computeObjectOffsets=function(){for(var t=0,e=new Array(this.objects.length),n=0,r=this.objects.length;n<r;n++){var i=this.objects[n],o=i[0],a=i[1];e[n]=[o.objectNumber,t],t+=a.sizeInBytes()+1}return e},n.withContextAndObjects=function(t,e,r){return void 0===r&&(r=!0),new n(t,e,r)},n}(Eo),_o=function(){function t(t,e){var n=this;this.parsedObjects=0,this.shouldWaitForTick=function(t){return n.parsedObjects+=t,n.parsedObjects%n.objectsPerTick==0},this.context=t,this.objectsPerTick=e}return t.prototype.serializeToBuffer=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,o,a,s,h,l,u,c,d,f,p,g,v,y;return i(this,(function(i){switch(i.label){case 0:return[4,this.computeBufferSize()];case 1:t=i.sent(),e=t.size,n=t.header,r=t.indirectObjects,o=t.xref,a=t.trailerDict,s=t.trailer,h=0,l=new Uint8Array(e),h+=n.copyBytesInto(l,h),l[h++]=wr.Newline,l[h++]=wr.Newline,u=0,c=r.length,i.label=2;case 2:return u<c?(d=r[u],f=d[0],p=d[1],g=String(f.objectNumber),h+=x(g,l,h),l[h++]=wr.Space,v=String(f.generationNumber),h+=x(v,l,h),l[h++]=wr.Space,l[h++]=wr.o,l[h++]=wr.b,l[h++]=wr.j,l[h++]=wr.Newline,h+=p.copyBytesInto(l,h),l[h++]=wr.Newline,l[h++]=wr.e,l[h++]=wr.n,l[h++]=wr.d,l[h++]=wr.o,l[h++]=wr.b,l[h++]=wr.j,l[h++]=wr.Newline,l[h++]=wr.Newline,y=p instanceof Ho?p.getObjectsCount():1,this.shouldWaitForTick(y)?[4,Z()]:[3,4]):[3,5];case 3:i.sent(),i.label=4;case 4:return u++,[3,2];case 5:return o&&(h+=o.copyBytesInto(l,h),l[h++]=wr.Newline),a&&(h+=a.copyBytesInto(l,h),l[h++]=wr.Newline,l[h++]=wr.Newline),h+=s.copyBytesInto(l,h),[2,l]}}))}))},t.prototype.computeIndirectObjectSize=function(t){var e=t[0],n=t[1];return e.sizeInBytes()+3+(n.sizeInBytes()+9)},t.prototype.createTrailerDict=function(){return this.context.obj({Size:this.context.largestObjectNumber+1,Root:this.context.trailerInfo.Root,Encrypt:this.context.trailerInfo.Encrypt,Info:this.context.trailerInfo.Info,ID:this.context.trailerInfo.ID})},t.prototype.computeBufferSize=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,o,a,s,h,l,u,c;return i(this,(function(i){switch(i.label){case 0:t=co.forVersion(1,7),e=t.sizeInBytes()+2,n=Ko.create(),r=this.context.enumerateIndirectObjects(),o=0,a=r.length,i.label=1;case 1:return o<a?(s=r[o],h=s[0],n.addEntry(h,e),e+=this.computeIndirectObjectSize(s),this.shouldWaitForTick(1)?[4,Z()]:[3,3]):[3,4];case 2:i.sent(),i.label=3;case 3:return o++,[3,1];case 4:return l=e,e+=n.sizeInBytes()+1,u=Go.of(this.createTrailerDict()),e+=u.sizeInBytes()+2,c=Lo.forLastCrossRefSectionOffset(l),[2,{size:e+=c.sizeInBytes(),header:t,indirectObjects:r,xref:n,trailerDict:u,trailer:c}]}}))}))},t.forContext=function(e,n){return new t(e,n)},t}(),Xo=function(t){function n(e){var n=t.call(this)||this;return n.data=e,n}return e(n,t),n.prototype.clone=function(){return n.of(this.data.slice())},n.prototype.toString=function(){return"PDFInvalidObject("+this.data.length+" bytes)"},n.prototype.sizeInBytes=function(){return this.data.length},n.prototype.copyBytesInto=function(t,e){for(var n=this.data.length,r=0;r<n;r++)t[e++]=this.data[r];return n},n.of=function(t){return new n(t)},n}(fo);!function(t){t[t.Deleted=0]="Deleted",t[t.Uncompressed=1]="Uncompressed",t[t.Compressed=2]="Compressed"}(Do||(Do={}));var Zo,Yo=function(t){function n(e,n,r){void 0===r&&(r=!0);var i=t.call(this,e,r)||this;return i.computeIndex=function(){for(var t=[],e=0,n=0,r=i.entries.length;n<r;n++){var o=i.entries[n],a=i.entries[n-1];0===n?t.push(o.ref.objectNumber):o.ref.objectNumber-a.ref.objectNumber>1&&(t.push(e),t.push(o.ref.objectNumber),e=0),e+=1}return t.push(e),t},i.computeEntryTuples=function(){for(var t=new Array(i.entries.length),e=0,n=i.entries.length;e<n;e++){var r=i.entries[e];if(r.type===Do.Deleted){var o=r.type,a=r.nextFreeObjectNumber,s=r.ref;t[e]=[o,a,s.generationNumber]}if(r.type===Do.Uncompressed){o=r.type;var h=r.offset;s=r.ref;t[e]=[o,h,s.generationNumber]}if(r.type===Do.Compressed){o=r.type;var l=r.objectStreamRef,u=r.index;t[e]=[o,l.objectNumber,u]}}return t},i.computeMaxEntryByteWidths=function(){for(var t=i.entryTuplesCache.access(),e=[0,0,0],n=0,r=t.length;n<r;n++){var o=t[n],a=o[0],s=o[1],h=o[2],l=dt(a),u=dt(s),c=dt(h);l>e[0]&&(e[0]=l),u>e[1]&&(e[1]=u),c>e[2]&&(e[2]=c)}return e},i.entries=n||[],i.entryTuplesCache=Gn.populatedBy(i.computeEntryTuples),i.maxByteWidthsCache=Gn.populatedBy(i.computeMaxEntryByteWidths),i.indexCache=Gn.populatedBy(i.computeIndex),e.set(Co.of("Type"),Co.of("XRef")),i}return e(n,t),n.prototype.addDeletedEntry=function(t,e){var n=Do.Deleted;this.entries.push({type:n,ref:t,nextFreeObjectNumber:e}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},n.prototype.addUncompressedEntry=function(t,e){var n=Do.Uncompressed;this.entries.push({type:n,ref:t,offset:e}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},n.prototype.addCompressedEntry=function(t,e,n){var r=Do.Compressed;this.entries.push({type:r,ref:t,objectStreamRef:e,index:n}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},n.prototype.clone=function(t){var e=this.dict,r=this.entries,i=this.encode;return n.of(e.clone(t),r.slice(),i)},n.prototype.getContentsString=function(){for(var t=this.entryTuplesCache.access(),e=this.maxByteWidthsCache.access(),n="",r=0,i=t.length;r<i;r++){for(var o=t[r],a=o[0],s=o[1],h=o[2],l=K(ft(a)),u=K(ft(s)),c=K(ft(h)),d=e[0]-1;d>=0;d--)n+=(l[d]||0).toString(2);for(d=e[1]-1;d>=0;d--)n+=(u[d]||0).toString(2);for(d=e[2]-1;d>=0;d--)n+=(c[d]||0).toString(2)}return n},n.prototype.getUnencodedContents=function(){for(var t=this.entryTuplesCache.access(),e=this.maxByteWidthsCache.access(),n=new Uint8Array(this.getUnencodedContentsSize()),r=0,i=0,o=t.length;i<o;i++){for(var a=t[i],s=a[0],h=a[1],l=a[2],u=K(ft(s)),c=K(ft(h)),d=K(ft(l)),f=e[0]-1;f>=0;f--)n[r++]=u[f]||0;for(f=e[1]-1;f>=0;f--)n[r++]=c[f]||0;for(f=e[2]-1;f>=0;f--)n[r++]=d[f]||0}return n},n.prototype.getUnencodedContentsSize=function(){var t=this.maxByteWidthsCache.access();return L(t)*this.entries.length},n.prototype.updateDict=function(){t.prototype.updateDict.call(this);var e=this.maxByteWidthsCache.access(),n=this.indexCache.access(),r=this.dict.context;this.dict.set(Co.of("W"),r.obj(e)),this.dict.set(Co.of("Index"),r.obj(n))},n.create=function(t,e){void 0===e&&(e=!0);var r=new n(t,[],e);return r.addDeletedEntry(No.of(0,65535),0),r},n.of=function(t,e,r){return void 0===r&&(r=!0),new n(t,e,r)},n}(Eo),Jo=function(t){function n(e,n,r,i){var o=t.call(this,e,n)||this;return o.encodeStreams=r,o.objectsPerStream=i,o}return e(n,t),n.prototype.computeBufferSize=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,o,a,s,h,l,u,c,d,f,p,g,v,y,m,b;return i(this,(function(i){switch(i.label){case 0:t=this.context.largestObjectNumber+1,e=co.forVersion(1,7),n=e.sizeInBytes()+2,r=Yo.create(this.createTrailerDict(),this.encodeStreams),o=[],a=[],s=[],h=this.context.enumerateIndirectObjects(),d=0,f=h.length,i.label=1;case 1:return d<f?(l=h[d],g=l[0],u=l[1],g===this.context.trailerInfo.Encrypt||u instanceof To||u instanceof Xo||0!==g.generationNumber?(o.push(l),r.addUncompressedEntry(g,n),n+=this.computeIndirectObjectSize(l),this.shouldWaitForTick(1)?[4,Z()]:[3,3]):[3,4]):[3,6];case 2:i.sent(),i.label=3;case 3:return[3,5];case 4:p=E(a),c=E(s),p&&p.length%this.objectsPerStream!=0||(p=[],a.push(p),c=No.of(t++),s.push(c)),r.addCompressedEntry(g,c,p.length),p.push(l),i.label=5;case 5:return d++,[3,1];case 6:d=0,f=a.length,i.label=7;case 7:return d<f?(p=a[d],g=s[d],v=Ho.withContextAndObjects(this.context,p,this.encodeStreams),r.addUncompressedEntry(g,n),n+=this.computeIndirectObjectSize([g,v]),o.push([g,v]),this.shouldWaitForTick(p.length)?[4,Z()]:[3,9]):[3,10];case 8:i.sent(),i.label=9;case 9:return d++,[3,7];case 10:return y=No.of(t++),r.dict.set(Co.of("Size"),po.of(t)),r.addUncompressedEntry(y,n),m=n,n+=this.computeIndirectObjectSize([y,r]),o.push([y,r]),b=Lo.forLastCrossRefSectionOffset(m),[2,{size:n+=b.sizeInBytes(),header:e,indirectObjects:o,trailer:b}]}}))}))},n.forContext=function(t,e,r,i){return void 0===r&&(r=!0),void 0===i&&(i=50),new n(t,e,r,i)},n}(_o),Qo=function(t){function n(e){var n=t.call(this)||this;return n.value=e,n}return e(n,t),n.prototype.asBytes=function(){for(var t=this.value+(this.value.length%2==1?"0":""),e=t.length,n=new Uint8Array(t.length/2),r=0,i=0;r<e;){var o=parseInt(t.substring(r,r+2),16);n[i]=o,r+=2,i+=1}return n},n.prototype.decodeText=function(){var t=this.asBytes();return ut(t)?rt(t):Ln(t)},n.prototype.decodeDate=function(){var t=this.decodeText(),e=D(t);if(!e)throw new nr(t);return e},n.prototype.asString=function(){return this.value},n.prototype.clone=function(){return n.of(this.value)},n.prototype.toString=function(){return"<"+this.value+">"},n.prototype.sizeInBytes=function(){return this.value.length+2},n.prototype.copyBytesInto=function(t,e){return t[e++]=wr.LessThan,e+=x(this.value,t,e),t[e++]=wr.GreaterThan,this.value.length+2},n.of=function(t){return new n(t)},n.fromText=function(t){for(var e=J(t),r="",i=0,o=e.length;i<o;i++)r+=v(e[i],4);return new n(r)},n}(fo),$o=function(){function t(t,e){this.encoding=t===un.ZapfDingbats?mn.ZapfDingbats:t===un.Symbol?mn.Symbol:mn.WinAnsi,this.font=pn.load(t),this.fontName=this.font.FontName,this.customName=e}return t.prototype.encodeText=function(t){for(var e=this.encodeTextAsGlyphs(t),n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=y(e[r].code);return Qo.of(n.join(""))},t.prototype.widthOfTextAtSize=function(t,e){for(var n=this.encodeTextAsGlyphs(t),r=0,i=0,o=n.length;i<o;i++){var a=n[i].name,s=(n[i+1]||{}).name,h=this.font.getXAxisKerningForPair(a,s)||0;r+=this.widthOfGlyph(a)+h}return r*(e/1e3)},t.prototype.heightOfFontAtSize=function(t,e){void 0===e&&(e={});var n=e.descender,r=void 0===n||n,i=this.font,o=i.Ascender,a=i.Descender,s=i.FontBBox,h=(o||s[3])-(a||s[1]);return r||(h+=a||0),h/1e3*t},t.prototype.sizeOfFontAtHeight=function(t){var e=this.font,n=e.Ascender,r=e.Descender,i=e.FontBBox;return 1e3*t/((n||i[3])-(r||i[1]))},t.prototype.embedIntoContext=function(t,e){var n=t.obj({Type:"Font",Subtype:"Type1",BaseFont:this.customName||this.fontName,Encoding:this.encoding===mn.WinAnsi?"WinAnsiEncoding":void 0});return e?(t.assign(e,n),e):t.register(n)},t.prototype.widthOfGlyph=function(t){return this.font.getWidthOfGlyph(t)||250},t.prototype.encodeTextAsGlyphs=function(t){for(var e=Array.from(t),n=new Array(e.length),r=0,i=e.length;r<i;r++){var o=g(e[r]);n[r]=this.encoding.encodeUnicodeCodePoint(o)}return n},t.for=function(e,n){return new t(e,n)},t}(),ta=function(t){return"/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange\n"+t.length+" beginbfchar\n"+t.map((function(t){return t[0]+" "+t[1]})).join("\n")+"\nendbfchar\nendcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"},ea=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return"<"+t.join("")+">"},na=function(t){return v(t,4)},ra=function(t){if(Q(t))return na(t);if($(t)){var e=tt(t),n=et(t);return""+na(e)+na(n)}var r=y(t);throw new Error("0x"+r+" is not a valid UTF-8 or UTF-16 codepoint.")},ia=function(t){function n(e){var n=t.call(this)||this;return n.value=e,n}return e(n,t),n.prototype.asBytes=function(){for(var t=[],e="",n=!1,r=function(e){void 0!==e&&t.push(e),n=!1},i=0,o=this.value.length;i<o;i++){var a=this.value[i],s=p(a),h=this.value[i+1];n?s===wr.Newline||s===wr.CarriageReturn?r():s===wr.n?r(wr.Newline):s===wr.r?r(wr.CarriageReturn):s===wr.t?r(wr.Tab):s===wr.b?r(wr.Backspace):s===wr.f?r(wr.FormFeed):s===wr.LeftParen?r(wr.LeftParen):s===wr.RightParen?r(wr.RightParen):s===wr.Backspace?r(wr.BackSlash):s>=wr.Zero&&s<=wr.Seven?3!==(e+=a).length&&h>="0"&&h<="7"||(r(parseInt(e,8)),e=""):r(s):s===wr.BackSlash?n=!0:r(s)}return new Uint8Array(t)},n.prototype.decodeText=function(){var t=this.asBytes();return ut(t)?rt(t):Ln(t)},n.prototype.decodeDate=function(){var t=this.decodeText(),e=D(t);if(!e)throw new nr(t);return e},n.prototype.asString=function(){return this.value},n.prototype.clone=function(){return n.of(this.value)},n.prototype.toString=function(){return"("+this.value+")"},n.prototype.sizeInBytes=function(){return this.value.length+2},n.prototype.copyBytesInto=function(t,e){return t[e++]=wr.LeftParen,e+=x(this.value,t,e),t[e++]=wr.RightParen,this.value.length+2},n.of=function(t){return new n(t)},n.fromDate=function(t){return new n("D:"+w(String(t.getUTCFullYear()),4,"0")+w(String(t.getUTCMonth()+1),2,"0")+w(String(t.getUTCDate()),2,"0")+w(String(t.getUTCHours()),2,"0")+w(String(t.getUTCMinutes()),2,"0")+w(String(t.getUTCSeconds()),2,"0")+"Z")},n}(fo),oa=function(){function t(t,e,n,r){var i=this;this.allGlyphsInFontSortedById=function(){for(var t=new Array(i.font.characterSet.length),e=0,n=t.length;e<n;e++){var r=i.font.characterSet[e];t[e]=i.font.glyphForCodePoint(r)}return q(t.sort(W),(function(t){return t.id}))},this.font=t,this.scale=1e3/this.font.unitsPerEm,this.fontData=e,this.fontName=this.font.postscriptName||"Font",this.customName=n,this.fontFeatures=r,this.baseFontName="",this.glyphCache=Gn.populatedBy(this.allGlyphsInFontSortedById)}return t.for=function(e,n,o,a){return r(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return[4,e.create(n)];case 1:return[2,new t(r.sent(),n,o,a)]}}))}))},t.prototype.encodeText=function(t){for(var e=this.font.layout(t,this.fontFeatures).glyphs,n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=v(e[r].id,4);return Qo.of(n.join(""))},t.prototype.widthOfTextAtSize=function(t,e){for(var n=this.font.layout(t,this.fontFeatures).glyphs,r=0,i=0,o=n.length;i<o;i++)r+=n[i].advanceWidth*this.scale;return r*(e/1e3)},t.prototype.heightOfFontAtSize=function(t,e){void 0===e&&(e={});var n=e.descender,r=void 0===n||n,i=this.font,o=i.ascent,a=i.descent,s=i.bbox,h=(o||s.maxY)*this.scale-(a||s.minY)*this.scale;return r||(h-=Math.abs(a)||0),h/1e3*t},t.prototype.sizeOfFontAtHeight=function(t){var e=this.font,n=e.ascent,r=e.descent,i=e.bbox;return 1e3*t/((n||i.maxY)*this.scale-(r||i.minY)*this.scale)},t.prototype.embedIntoContext=function(t,e){return this.baseFontName=this.customName||t.addRandomSuffix(this.fontName),this.embedFontDict(t,e)},t.prototype.embedFontDict=function(t,e){return r(this,void 0,void 0,(function(){var n,r,o;return i(this,(function(i){switch(i.label){case 0:return[4,this.embedCIDFontDict(t)];case 1:return n=i.sent(),r=this.embedUnicodeCmap(t),o=t.obj({Type:"Font",Subtype:"Type0",BaseFont:this.baseFontName,Encoding:"Identity-H",DescendantFonts:[n],ToUnicode:r}),e?(t.assign(e,o),[2,e]):[2,t.register(o)]}}))}))},t.prototype.isCFF=function(){return this.font.cff},t.prototype.embedCIDFontDict=function(t){return r(this,void 0,void 0,(function(){var e,n;return i(this,(function(r){switch(r.label){case 0:return[4,this.embedFontDescriptor(t)];case 1:return e=r.sent(),n=t.obj({Type:"Font",Subtype:this.isCFF()?"CIDFontType0":"CIDFontType2",CIDToGIDMap:"Identity",BaseFont:this.baseFontName,CIDSystemInfo:{Registry:ia.of("Adobe"),Ordering:ia.of("Identity"),Supplement:0},FontDescriptor:e,W:this.computeWidths()}),[2,t.register(n)]}}))}))},t.prototype.embedFontDescriptor=function(t){return r(this,void 0,void 0,(function(){var e,n,r,o,a,s,h,l,u,c,d,f,p,g,v;return i(this,(function(i){switch(i.label){case 0:return[4,this.embedFontStream(t)];case 1:return e=i.sent(),n=this.scale,r=this.font,o=r.italicAngle,a=r.ascent,s=r.descent,h=r.capHeight,l=r.xHeight,u=this.font.bbox,c=u.minX,d=u.minY,f=u.maxX,p=u.maxY,g=t.obj(((v={Type:"FontDescriptor",FontName:this.baseFontName,Flags:(w=this.font,x=w["OS/2"]?w["OS/2"].sFamilyClass:0,y={fixedPitch:w.post.isFixedPitch,serif:1<=x&&x<=7,symbolic:!0,script:10===x,italic:w.head.macStyle.italic},m=0,b=function(t){m|=1<<t-1},y.fixedPitch&&b(1),y.serif&&b(2),y.symbolic&&b(3),y.script&&b(4),y.nonsymbolic&&b(6),y.italic&&b(7),y.allCap&&b(17),y.smallCap&&b(18),y.forceBold&&b(19),m),FontBBox:[c*n,d*n,f*n,p*n],ItalicAngle:o,Ascent:a*n,Descent:s*n,CapHeight:(h||a)*n,XHeight:(l||0)*n,StemV:0})[this.isCFF()?"FontFile3":"FontFile2"]=e,v)),[2,t.register(g)]}var y,m,b,w,x}))}))},t.prototype.serializeFont=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return[2,this.fontData]}))}))},t.prototype.embedFontStream=function(t){return r(this,void 0,void 0,(function(){var e,n,r;return i(this,(function(i){switch(i.label){case 0:return r=(n=t).flateStream,[4,this.serializeFont()];case 1:return e=r.apply(n,[i.sent(),{Subtype:this.isCFF()?"CIDFontType0C":void 0}]),[2,t.register(e)]}}))}))},t.prototype.embedUnicodeCmap=function(t){var e=function(t,e){for(var n=new Array(t.length),r=0,i=t.length;r<i;r++){var o=t[r],a=ea(na(e(o))),s=ea.apply(void 0,o.codePoints.map(ra));n[r]=[a,s]}return ta(n)}(this.glyphCache.access(),this.glyphId.bind(this)),n=t.flateStream(e);return t.register(n)},t.prototype.glyphId=function(t){return t?t.id:-1},t.prototype.computeWidths=function(){for(var t=this.glyphCache.access(),e=[],n=[],r=0,i=t.length;r<i;r++){var o=t[r],a=t[r-1],s=this.glyphId(o),h=this.glyphId(a);0===r?e.push(s):s-h!=1&&(e.push(n),e.push(s),n=[]),n.push(o.advanceWidth*this.scale)}return e.push(n),e},t}(),aa=function(t){function n(e,n,r,i){var o=t.call(this,e,n,r,i)||this;return o.subset=o.font.createSubset(),o.glyphs=[],o.glyphCache=Gn.populatedBy((function(){return o.glyphs})),o.glyphIdMap=new Map,o}return e(n,t),n.for=function(t,e,o,a){return r(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return[4,t.create(e)];case 1:return[2,new n(r.sent(),e,o,a)]}}))}))},n.prototype.encodeText=function(t){for(var e=this.font.layout(t,this.fontFeatures).glyphs,n=new Array(e.length),r=0,i=e.length;r<i;r++){var o=e[r],a=this.subset.includeGlyph(o);this.glyphs[a-1]=o,this.glyphIdMap.set(o.id,a),n[r]=v(a,4)}return this.glyphCache.invalidate(),Qo.of(n.join(""))},n.prototype.isCFF=function(){return this.subset.cff},n.prototype.glyphId=function(t){return t?this.glyphIdMap.get(t.id):-1},n.prototype.serializeFont=function(){var t=this;return new Promise((function(e,n){var r=[];t.subset.encodeStream().on("data",(function(t){return r.push(t)})).on("end",(function(){return e(U(r))})).on("error",(function(t){return n(t)}))}))},n}(oa);!function(t){t.Source="Source",t.Data="Data",t.Alternative="Alternative",t.Supplement="Supplement",t.EncryptedPayload="EncryptedPayload",t.FormData="EncryptedPayload",t.Schema="Schema",t.Unspecified="Unspecified"}(Zo||(Zo={}));var sa,ha=function(){function t(t,e,n){void 0===n&&(n={}),this.fileData=t,this.fileName=e,this.options=n}return t.for=function(e,n,r){return void 0===r&&(r={}),new t(e,n,r)},t.prototype.embedIntoContext=function(t,e){return r(this,void 0,void 0,(function(){var n,r,o,a,s,h,l,u,c;return i(this,(function(i){return n=this.options,r=n.mimeType,o=n.description,a=n.creationDate,s=n.modificationDate,h=n.afRelationship,l=t.flateStream(this.fileData,{Type:"EmbeddedFile",Subtype:null!=r?r:void 0,Params:{Size:this.fileData.length,CreationDate:a?ia.fromDate(a):void 0,ModDate:s?ia.fromDate(s):void 0}}),u=t.register(l),c=t.obj({Type:"Filespec",F:ia.of(this.fileName),UF:Qo.fromText(this.fileName),EF:{F:u},Desc:o?Qo.fromText(o):void 0,AFRelationship:null!=h?h:void 0}),e?(t.assign(e,c),[2,e]):[2,t.register(c)]}))}))},t}(),la=[65472,65473,65474,65475,65477,65478,65479,65480,65481,65482,65483,65484,65485,65486,65487];!function(t){t.DeviceGray="DeviceGray",t.DeviceRGB="DeviceRGB",t.DeviceCMYK="DeviceCMYK"}(sa||(sa={}));var ua={1:sa.DeviceGray,3:sa.DeviceRGB,4:sa.DeviceCMYK},ca=function(){function t(t,e,n,r,i){this.imageData=t,this.bitsPerComponent=e,this.width=n,this.height=r,this.colorSpace=i}return t.for=function(e){return r(this,void 0,void 0,(function(){var n,r,o,a,s,h,l,u;return i(this,(function(i){if(n=new DataView(e.buffer),65496!==n.getUint16(0))throw new Error("SOI not found in JPEG");for(r=2;r<n.byteLength&&(o=n.getUint16(r),r+=2,!la.includes(o));)r+=n.getUint16(r);if(!la.includes(o))throw new Error("Invalid JPEG");if(r+=2,a=n.getUint8(r++),s=n.getUint16(r),r+=2,h=n.getUint16(r),r+=2,l=n.getUint8(r++),!(u=ua[l]))throw new Error("Unknown JPEG channel.");return[2,new t(e,a,h,s,u)]}))}))},t.prototype.embedIntoContext=function(t,e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){return n=t.stream(this.imageData,{Type:"XObject",Subtype:"Image",BitsPerComponent:this.bitsPerComponent,Width:this.width,Height:this.height,ColorSpace:this.colorSpace,Filter:"DCTDecode",Decode:this.colorSpace===sa.DeviceCMYK?[1,0,1,0,1,0,1,0]:void 0}),e?(t.assign(e,n),[2,e]):[2,t.register(n)]}))}))},t}(),da=gt((function(t,e){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var n=e.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var i in n)r(n,i)&&(t[i]=n[i])}}return t},e.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var i={arraySet:function(t,e,n,r,i){if(e.subarray&&t.subarray)t.set(e.subarray(n,n+r),i);else for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){var e,n,r,i,o,a;for(r=0,e=0,n=t.length;e<n;e++)r+=t[e].length;for(a=new Uint8Array(r),i=0,e=0,n=t.length;e<n;e++)o=t[e],a.set(o,i),i+=o.length;return a}},o={arraySet:function(t,e,n,r,i){for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){return[].concat.apply([],t)}};e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,i)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,o))},e.setTyped(n)}));function fa(t){for(var e=t.length;--e>=0;)t[e]=0}var pa=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ga=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],va=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ya=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ma=new Array(576);fa(ma);var ba=new Array(60);fa(ba);var wa=new Array(512);fa(wa);var xa=new Array(256);fa(xa);var ka=new Array(29);fa(ka);var Sa,Fa,Ca,Aa=new Array(30);function za(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=t&&t.length}function Ta(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function Oa(t){return t<256?wa[t]:wa[256+(t>>>7)]}function Ra(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function Ba(t,e,n){t.bi_valid>16-n?(t.bi_buf|=e<<t.bi_valid&65535,Ra(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=n-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)}function Na(t,e,n){Ba(t,n[2*e],n[2*e+1])}function Pa(t,e){var n=0;do{n|=1&t,t>>>=1,n<<=1}while(--e>0);return n>>>1}function Da(t,e,n){var r,i,o=new Array(16),a=0;for(r=1;r<=15;r++)o[r]=a=a+n[r-1]<<1;for(i=0;i<=e;i++){var s=t[2*i+1];0!==s&&(t[2*i]=Pa(o[s]++,s))}}function ja(t){var e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function Ea(t){t.bi_valid>8?Ra(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function Ia(t,e,n,r){var i=2*e,o=2*n;return t[i]<t[o]||t[i]===t[o]&&r[e]<=r[n]}function Ma(t,e,n){for(var r=t.heap[n],i=n<<1;i<=t.heap_len&&(i<t.heap_len&&Ia(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!Ia(e,r,t.heap[i],t.depth));)t.heap[n]=t.heap[i],n=i,i<<=1;t.heap[n]=r}function Ua(t,e,n){var r,i,o,a,s=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*s]<<8|t.pending_buf[t.d_buf+2*s+1],i=t.pending_buf[t.l_buf+s],s++,0===r?Na(t,i,e):(Na(t,(o=xa[i])+256+1,e),0!==(a=pa[o])&&Ba(t,i-=ka[o],a),Na(t,o=Oa(--r),n),0!==(a=ga[o])&&Ba(t,r-=Aa[o],a))}while(s<t.last_lit);Na(t,256,e)}function Va(t,e){var n,r,i,o=e.dyn_tree,a=e.stat_desc.static_tree,s=e.stat_desc.has_stree,h=e.stat_desc.elems,l=-1;for(t.heap_len=0,t.heap_max=573,n=0;n<h;n++)0!==o[2*n]?(t.heap[++t.heap_len]=l=n,t.depth[n]=0):o[2*n+1]=0;for(;t.heap_len<2;)o[2*(i=t.heap[++t.heap_len]=l<2?++l:0)]=1,t.depth[i]=0,t.opt_len--,s&&(t.static_len-=a[2*i+1]);for(e.max_code=l,n=t.heap_len>>1;n>=1;n--)Ma(t,o,n);i=h;do{n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],Ma(t,o,1),r=t.heap[1],t.heap[--t.heap_max]=n,t.heap[--t.heap_max]=r,o[2*i]=o[2*n]+o[2*r],t.depth[i]=(t.depth[n]>=t.depth[r]?t.depth[n]:t.depth[r])+1,o[2*n+1]=o[2*r+1]=i,t.heap[1]=i++,Ma(t,o,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var n,r,i,o,a,s,h=e.dyn_tree,l=e.max_code,u=e.stat_desc.static_tree,c=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(o=0;o<=15;o++)t.bl_count[o]=0;for(h[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;n<573;n++)(o=h[2*h[2*(r=t.heap[n])+1]+1]+1)>p&&(o=p,g++),h[2*r+1]=o,r>l||(t.bl_count[o]++,a=0,r>=f&&(a=d[r-f]),s=h[2*r],t.opt_len+=s*(o+a),c&&(t.static_len+=s*(u[2*r+1]+a)));if(0!==g){do{for(o=p-1;0===t.bl_count[o];)o--;t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(o=p;0!==o;o--)for(r=t.bl_count[o];0!==r;)(i=t.heap[--n])>l||(h[2*i+1]!==o&&(t.opt_len+=(o-h[2*i+1])*h[2*i],h[2*i+1]=o),r--)}}(t,e),Da(o,l,t.bl_count)}function Wa(t,e,n){var r,i,o=-1,a=e[1],s=0,h=7,l=4;for(0===a&&(h=138,l=3),e[2*(n+1)+1]=65535,r=0;r<=n;r++)i=a,a=e[2*(r+1)+1],++s<h&&i===a||(s<l?t.bl_tree[2*i]+=s:0!==i?(i!==o&&t.bl_tree[2*i]++,t.bl_tree[32]++):s<=10?t.bl_tree[34]++:t.bl_tree[36]++,s=0,o=i,0===a?(h=138,l=3):i===a?(h=6,l=3):(h=7,l=4))}function qa(t,e,n){var r,i,o=-1,a=e[1],s=0,h=7,l=4;for(0===a&&(h=138,l=3),r=0;r<=n;r++)if(i=a,a=e[2*(r+1)+1],!(++s<h&&i===a)){if(s<l)do{Na(t,i,t.bl_tree)}while(0!=--s);else 0!==i?(i!==o&&(Na(t,i,t.bl_tree),s--),Na(t,16,t.bl_tree),Ba(t,s-3,2)):s<=10?(Na(t,17,t.bl_tree),Ba(t,s-3,3)):(Na(t,18,t.bl_tree),Ba(t,s-11,7));s=0,o=i,0===a?(h=138,l=3):i===a?(h=6,l=3):(h=7,l=4)}}fa(Aa);var Ka=!1;function La(t,e,n,r){Ba(t,0+(r?1:0),3),function(t,e,n,r){Ea(t),r&&(Ra(t,n),Ra(t,~n)),da.arraySet(t.pending_buf,t.window,e,n,t.pending),t.pending+=n}(t,e,n,!0)}var Ga={_tr_init:function(t){Ka||(!function(){var t,e,n,r,i,o=new Array(16);for(n=0,r=0;r<28;r++)for(ka[r]=n,t=0;t<1<<pa[r];t++)xa[n++]=r;for(xa[n-1]=r,i=0,r=0;r<16;r++)for(Aa[r]=i,t=0;t<1<<ga[r];t++)wa[i++]=r;for(i>>=7;r<30;r++)for(Aa[r]=i<<7,t=0;t<1<<ga[r]-7;t++)wa[256+i++]=r;for(e=0;e<=15;e++)o[e]=0;for(t=0;t<=143;)ma[2*t+1]=8,t++,o[8]++;for(;t<=255;)ma[2*t+1]=9,t++,o[9]++;for(;t<=279;)ma[2*t+1]=7,t++,o[7]++;for(;t<=287;)ma[2*t+1]=8,t++,o[8]++;for(Da(ma,287,o),t=0;t<30;t++)ba[2*t+1]=5,ba[2*t]=Pa(t,5);Sa=new za(ma,pa,257,286,15),Fa=new za(ba,ga,0,30,15),Ca=new za(new Array(0),va,0,19,7)}(),Ka=!0),t.l_desc=new Ta(t.dyn_ltree,Sa),t.d_desc=new Ta(t.dyn_dtree,Fa),t.bl_desc=new Ta(t.bl_tree,Ca),t.bi_buf=0,t.bi_valid=0,ja(t)},_tr_stored_block:La,_tr_flush_block:function(t,e,n,r){var i,o,a=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),Va(t,t.l_desc),Va(t,t.d_desc),a=function(t){var e;for(Wa(t,t.dyn_ltree,t.l_desc.max_code),Wa(t,t.dyn_dtree,t.d_desc.max_code),Va(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*ya[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(o=t.static_len+3+7>>>3)<=i&&(i=o)):i=o=n+5,n+4<=i&&-1!==e?La(t,e,n,r):4===t.strategy||o===i?(Ba(t,2+(r?1:0),3),Ua(t,ma,ba)):(Ba(t,4+(r?1:0),3),function(t,e,n,r){var i;for(Ba(t,e-257,5),Ba(t,n-1,5),Ba(t,r-4,4),i=0;i<r;i++)Ba(t,t.bl_tree[2*ya[i]+1],3);qa(t,t.dyn_ltree,e-1),qa(t,t.dyn_dtree,n-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),Ua(t,t.dyn_ltree,t.dyn_dtree)),ja(t),r&&Ea(t)},_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(xa[n]+256+1)]++,t.dyn_dtree[2*Oa(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){Ba(t,2,3),Na(t,256,ma),function(t){16===t.bi_valid?(Ra(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}};var Ha=function(t,e,n,r){for(var i=65535&t|0,o=t>>>16&65535|0,a=0;0!==n;){n-=a=n>2e3?2e3:n;do{o=o+(i=i+e[r++]|0)|0}while(--a);i%=65521,o%=65521}return i|o<<16|0};var _a=function(){for(var t,e=[],n=0;n<256;n++){t=n;for(var r=0;r<8;r++)t=1&t?3988292384^t>>>1:t>>>1;e[n]=t}return e}();var Xa,Za=function(t,e,n,r){var i=_a,o=r+n;t^=-1;for(var a=r;a<o;a++)t=t>>>8^i[255&(t^e[a])];return-1^t},Ya={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ja(t,e){return t.msg=Ya[e],e}function Qa(t){return(t<<1)-(t>4?9:0)}function $a(t){for(var e=t.length;--e>=0;)t[e]=0}function ts(t){var e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),0!==n&&(da.arraySet(t.output,e.pending_buf,e.pending_out,n,t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0))}function es(t,e){Ga._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ts(t.strm)}function ns(t,e){t.pending_buf[t.pending++]=e}function rs(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function is(t,e,n,r){var i=t.avail_in;return i>r&&(i=r),0===i?0:(t.avail_in-=i,da.arraySet(e,t.input,t.next_in,i,n),1===t.state.wrap?t.adler=Ha(t.adler,e,i,n):2===t.state.wrap&&(t.adler=Za(t.adler,e,i,n)),t.next_in+=i,t.total_in+=i,i)}function os(t,e){var n,r,i=t.max_chain_length,o=t.strstart,a=t.prev_length,s=t.nice_match,h=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,l=t.window,u=t.w_mask,c=t.prev,d=t.strstart+258,f=l[o+a-1],p=l[o+a];t.prev_length>=t.good_match&&(i>>=2),s>t.lookahead&&(s=t.lookahead);do{if(l[(n=e)+a]===p&&l[n+a-1]===f&&l[n]===l[o]&&l[++n]===l[o+1]){o+=2,n++;do{}while(l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&o<d);if(r=258-(d-o),o=d-258,r>a){if(t.match_start=e,a=r,r>=s)break;f=l[o+a-1],p=l[o+a]}}}while((e=c[e&u])>h&&0!=--i);return a<=t.lookahead?a:t.lookahead}function as(t){var e,n,r,i,o,a=t.w_size;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=a+(a-262)){da.arraySet(t.window,t.window,a,a,0),t.match_start-=a,t.strstart-=a,t.block_start-=a,e=n=t.hash_size;do{r=t.head[--e],t.head[e]=r>=a?r-a:0}while(--n);e=n=a;do{r=t.prev[--e],t.prev[e]=r>=a?r-a:0}while(--n);i+=a}if(0===t.strm.avail_in)break;if(n=is(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=n,t.lookahead+t.insert>=3)for(o=t.strstart-t.insert,t.ins_h=t.window[o],t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+3-1])&t.hash_mask,t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)}function ss(t,e){for(var n,r;;){if(t.lookahead<262){if(as(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(n=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-262&&(t.match_length=os(t,n)),t.match_length>=3)if(r=Ga._tr_tally(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else r=Ga._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(r&&(es(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,4===e?(es(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(es(t,!1),0===t.strm.avail_out)?1:2}function hs(t,e){for(var n,r,i;;){if(t.lookahead<262){if(as(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(n=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-262&&(t.match_length=os(t,n),t.match_length<=5&&(1===t.strategy||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-3,r=Ga._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=i&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,r&&(es(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((r=Ga._tr_tally(t,0,t.window[t.strstart-1]))&&es(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(r=Ga._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,4===e?(es(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(es(t,!1),0===t.strm.avail_out)?1:2}function ls(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i}function us(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new da.Buf16(1146),this.dyn_dtree=new da.Buf16(122),this.bl_tree=new da.Buf16(78),$a(this.dyn_ltree),$a(this.dyn_dtree),$a(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new da.Buf16(16),this.heap=new da.Buf16(573),$a(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new da.Buf16(573),$a(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function cs(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=2,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=0,Ga._tr_init(e),0):Ja(t,-2)}function ds(t){var e,n=cs(t);return 0===n&&((e=t.state).window_size=2*e.w_size,$a(e.head),e.max_lazy_match=Xa[e.level].max_lazy,e.good_match=Xa[e.level].good_length,e.nice_match=Xa[e.level].nice_length,e.max_chain_length=Xa[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),n}function fs(t,e,n,r,i,o){if(!t)return-2;var a=1;if(-1===e&&(e=6),r<0?(a=0,r=-r):r>15&&(a=2,r-=16),i<1||i>9||8!==n||r<8||r>15||e<0||e>9||o<0||o>4)return Ja(t,-2);8===r&&(r=9);var s=new us;return t.state=s,s.strm=t,s.wrap=a,s.gzhead=null,s.w_bits=r,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=i+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+3-1)/3),s.window=new da.Buf8(2*s.w_size),s.head=new da.Buf16(s.hash_size),s.prev=new da.Buf16(s.w_size),s.lit_bufsize=1<<i+6,s.pending_buf_size=4*s.lit_bufsize,s.pending_buf=new da.Buf8(s.pending_buf_size),s.d_buf=1*s.lit_bufsize,s.l_buf=3*s.lit_bufsize,s.level=e,s.strategy=o,s.method=n,ds(t)}Xa=[new ls(0,0,0,0,(function(t,e){var n=65535;for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(as(t),0===t.lookahead&&0===e)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var r=t.block_start+n;if((0===t.strstart||t.strstart>=r)&&(t.lookahead=t.strstart-r,t.strstart=r,es(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-262&&(es(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(es(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(es(t,!1),t.strm.avail_out),1)})),new ls(4,4,8,4,ss),new ls(4,5,16,8,ss),new ls(4,6,32,32,ss),new ls(4,4,16,16,hs),new ls(8,16,32,32,hs),new ls(8,16,128,128,hs),new ls(8,32,128,256,hs),new ls(32,128,258,1024,hs),new ls(32,258,258,4096,hs)];var ps={deflateInit:function(t,e){return fs(t,e,8,15,8,0)},deflateInit2:fs,deflateReset:ds,deflateResetKeep:cs,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?-2:(t.state.gzhead=e,0):-2},deflate:function(t,e){var n,r,i,o;if(!t||!t.state||e>5||e<0)return t?Ja(t,-2):-2;if(r=t.state,!t.output||!t.input&&0!==t.avail_in||666===r.status&&4!==e)return Ja(t,0===t.avail_out?-5:-2);if(r.strm=t,n=r.last_flush,r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,ns(r,31),ns(r,139),ns(r,8),r.gzhead?(ns(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),ns(r,255&r.gzhead.time),ns(r,r.gzhead.time>>8&255),ns(r,r.gzhead.time>>16&255),ns(r,r.gzhead.time>>24&255),ns(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),ns(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(ns(r,255&r.gzhead.extra.length),ns(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=Za(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(ns(r,0),ns(r,0),ns(r,0),ns(r,0),ns(r,0),ns(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),ns(r,3),r.status=113);else{var a=8+(r.w_bits-8<<4)<<8;a|=(r.strategy>=2||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(a|=32),a+=31-a%31,r.status=113,rs(r,a),0!==r.strstart&&(rs(r,t.adler>>>16),rs(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(i=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>i&&(t.adler=Za(t.adler,r.pending_buf,r.pending-i,i)),ts(t),i=r.pending,r.pending!==r.pending_buf_size));)ns(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>i&&(t.adler=Za(t.adler,r.pending_buf,r.pending-i,i)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){i=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>i&&(t.adler=Za(t.adler,r.pending_buf,r.pending-i,i)),ts(t),i=r.pending,r.pending===r.pending_buf_size)){o=1;break}o=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,ns(r,o)}while(0!==o);r.gzhead.hcrc&&r.pending>i&&(t.adler=Za(t.adler,r.pending_buf,r.pending-i,i)),0===o&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){i=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>i&&(t.adler=Za(t.adler,r.pending_buf,r.pending-i,i)),ts(t),i=r.pending,r.pending===r.pending_buf_size)){o=1;break}o=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,ns(r,o)}while(0!==o);r.gzhead.hcrc&&r.pending>i&&(t.adler=Za(t.adler,r.pending_buf,r.pending-i,i)),0===o&&(r.status=103)}else r.status=103;if(103===r.status&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&ts(t),r.pending+2<=r.pending_buf_size&&(ns(r,255&t.adler),ns(r,t.adler>>8&255),t.adler=0,r.status=113)):r.status=113),0!==r.pending){if(ts(t),0===t.avail_out)return r.last_flush=-1,0}else if(0===t.avail_in&&Qa(e)<=Qa(n)&&4!==e)return Ja(t,-5);if(666===r.status&&0!==t.avail_in)return Ja(t,-5);if(0!==t.avail_in||0!==r.lookahead||0!==e&&666!==r.status){var s=2===r.strategy?function(t,e){for(var n;;){if(0===t.lookahead&&(as(t),0===t.lookahead)){if(0===e)return 1;break}if(t.match_length=0,n=Ga._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(es(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(es(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(es(t,!1),0===t.strm.avail_out)?1:2}(r,e):3===r.strategy?function(t,e){for(var n,r,i,o,a=t.window;;){if(t.lookahead<=258){if(as(t),t.lookahead<=258&&0===e)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(r=a[i=t.strstart-1])===a[++i]&&r===a[++i]&&r===a[++i]){o=t.strstart+258;do{}while(r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&i<o);t.match_length=258-(o-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(n=Ga._tr_tally(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=Ga._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(es(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(es(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(es(t,!1),0===t.strm.avail_out)?1:2}(r,e):Xa[r.level].func(r,e);if(3!==s&&4!==s||(r.status=666),1===s||3===s)return 0===t.avail_out&&(r.last_flush=-1),0;if(2===s&&(1===e?Ga._tr_align(r):5!==e&&(Ga._tr_stored_block(r,0,0,!1),3===e&&($a(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),ts(t),0===t.avail_out))return r.last_flush=-1,0}return 4!==e?0:r.wrap<=0?1:(2===r.wrap?(ns(r,255&t.adler),ns(r,t.adler>>8&255),ns(r,t.adler>>16&255),ns(r,t.adler>>24&255),ns(r,255&t.total_in),ns(r,t.total_in>>8&255),ns(r,t.total_in>>16&255),ns(r,t.total_in>>24&255)):(rs(r,t.adler>>>16),rs(r,65535&t.adler)),ts(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?0:1)},deflateEnd:function(t){var e;return t&&t.state?42!==(e=t.state.status)&&69!==e&&73!==e&&91!==e&&103!==e&&113!==e&&666!==e?Ja(t,-2):(t.state=null,113===e?Ja(t,-3):0):-2},deflateSetDictionary:function(t,e){var n,r,i,o,a,s,h,l,u=e.length;if(!t||!t.state)return-2;if(2===(o=(n=t.state).wrap)||1===o&&42!==n.status||n.lookahead)return-2;for(1===o&&(t.adler=Ha(t.adler,e,u,0)),n.wrap=0,u>=n.w_size&&(0===o&&($a(n.head),n.strstart=0,n.block_start=0,n.insert=0),l=new da.Buf8(n.w_size),da.arraySet(l,e,u-n.w_size,n.w_size,0),e=l,u=n.w_size),a=t.avail_in,s=t.next_in,h=t.input,t.avail_in=u,t.next_in=0,t.input=e,as(n);n.lookahead>=3;){r=n.strstart,i=n.lookahead-2;do{n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+3-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++}while(--i);n.strstart=r,n.lookahead=2,as(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=s,t.input=h,t.avail_in=a,n.wrap=o,0},deflateInfo:"pako deflate (from Nodeca project)"},gs=!0,vs=!0;try{String.fromCharCode.apply(null,[0])}catch(t){gs=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){vs=!1}for(var ys=new da.Buf8(256),ms=0;ms<256;ms++)ys[ms]=ms>=252?6:ms>=248?5:ms>=240?4:ms>=224?3:ms>=192?2:1;ys[254]=ys[254]=1;function bs(t,e){if(e<65534&&(t.subarray&&vs||!t.subarray&&gs))return String.fromCharCode.apply(null,da.shrinkBuf(t,e));for(var n="",r=0;r<e;r++)n+=String.fromCharCode(t[r]);return n}var ws=function(t){var e,n,r,i,o,a=t.length,s=0;for(i=0;i<a;i++)55296==(64512&(n=t.charCodeAt(i)))&&i+1<a&&56320==(64512&(r=t.charCodeAt(i+1)))&&(n=65536+(n-55296<<10)+(r-56320),i++),s+=n<128?1:n<2048?2:n<65536?3:4;for(e=new da.Buf8(s),o=0,i=0;o<s;i++)55296==(64512&(n=t.charCodeAt(i)))&&i+1<a&&56320==(64512&(r=t.charCodeAt(i+1)))&&(n=65536+(n-55296<<10)+(r-56320),i++),n<128?e[o++]=n:n<2048?(e[o++]=192|n>>>6,e[o++]=128|63&n):n<65536?(e[o++]=224|n>>>12,e[o++]=128|n>>>6&63,e[o++]=128|63&n):(e[o++]=240|n>>>18,e[o++]=128|n>>>12&63,e[o++]=128|n>>>6&63,e[o++]=128|63&n);return e},xs=function(t){return bs(t,t.length)},ks=function(t){for(var e=new da.Buf8(t.length),n=0,r=e.length;n<r;n++)e[n]=t.charCodeAt(n);return e},Ss=function(t,e){var n,r,i,o,a=e||t.length,s=new Array(2*a);for(r=0,n=0;n<a;)if((i=t[n++])<128)s[r++]=i;else if((o=ys[i])>4)s[r++]=65533,n+=o-1;else{for(i&=2===o?31:3===o?15:7;o>1&&n<a;)i=i<<6|63&t[n++],o--;o>1?s[r++]=65533:i<65536?s[r++]=i:(i-=65536,s[r++]=55296|i>>10&1023,s[r++]=56320|1023&i)}return bs(s,r)},Fs=function(t,e){var n;for((e=e||t.length)>t.length&&(e=t.length),n=e-1;n>=0&&128==(192&t[n]);)n--;return n<0||0===n?e:n+ys[t[n]]>e?n:e};var Cs=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},As=Object.prototype.toString;function zs(t){if(!(this instanceof zs))return new zs(t);this.options=da.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Cs,this.strm.avail_out=0;var n=ps.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(0!==n)throw new Error(Ya[n]);if(e.header&&ps.deflateSetHeader(this.strm,e.header),e.dictionary){var r;if(r="string"==typeof e.dictionary?ws(e.dictionary):"[object ArrayBuffer]"===As.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,0!==(n=ps.deflateSetDictionary(this.strm,r)))throw new Error(Ya[n]);this._dict_set=!0}}function Ts(t,e){var n=new zs(e);if(n.push(t,!0),n.err)throw n.msg||Ya[n.err];return n.result}zs.prototype.push=function(t,e){var n,r,i=this.strm,o=this.options.chunkSize;if(this.ended)return!1;r=e===~~e?e:!0===e?4:0,"string"==typeof t?i.input=ws(t):"[object ArrayBuffer]"===As.call(t)?i.input=new Uint8Array(t):i.input=t,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new da.Buf8(o),i.next_out=0,i.avail_out=o),1!==(n=ps.deflate(i,r))&&0!==n)return this.onEnd(n),this.ended=!0,!1;0!==i.avail_out&&(0!==i.avail_in||4!==r&&2!==r)||("string"===this.options.to?this.onData(xs(da.shrinkBuf(i.output,i.next_out))):this.onData(da.shrinkBuf(i.output,i.next_out)))}while((i.avail_in>0||0===i.avail_out)&&1!==n);return 4===r?(n=ps.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,0===n):2!==r||(this.onEnd(0),i.avail_out=0,!0)},zs.prototype.onData=function(t){this.chunks.push(t)},zs.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=da.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Os={Deflate:zs,deflate:Ts,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Ts(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Ts(t,e)}},Rs=function(t,e){var n,r,i,o,a,s,h,l,u,c,d,f,p,g,v,y,m,b,w,x,k,S,F,C,A;n=t.state,r=t.next_in,C=t.input,i=r+(t.avail_in-5),o=t.next_out,A=t.output,a=o-(e-t.avail_out),s=o+(t.avail_out-257),h=n.dmax,l=n.wsize,u=n.whave,c=n.wnext,d=n.window,f=n.hold,p=n.bits,g=n.lencode,v=n.distcode,y=(1<<n.lenbits)-1,m=(1<<n.distbits)-1;t:do{p<15&&(f+=C[r++]<<p,p+=8,f+=C[r++]<<p,p+=8),b=g[f&y];e:for(;;){if(f>>>=w=b>>>24,p-=w,0===(w=b>>>16&255))A[o++]=65535&b;else{if(!(16&w)){if(0==(64&w)){b=g[(65535&b)+(f&(1<<w)-1)];continue e}if(32&w){n.mode=12;break t}t.msg="invalid literal/length code",n.mode=30;break t}x=65535&b,(w&=15)&&(p<w&&(f+=C[r++]<<p,p+=8),x+=f&(1<<w)-1,f>>>=w,p-=w),p<15&&(f+=C[r++]<<p,p+=8,f+=C[r++]<<p,p+=8),b=v[f&m];n:for(;;){if(f>>>=w=b>>>24,p-=w,!(16&(w=b>>>16&255))){if(0==(64&w)){b=v[(65535&b)+(f&(1<<w)-1)];continue n}t.msg="invalid distance code",n.mode=30;break t}if(k=65535&b,p<(w&=15)&&(f+=C[r++]<<p,(p+=8)<w&&(f+=C[r++]<<p,p+=8)),(k+=f&(1<<w)-1)>h){t.msg="invalid distance too far back",n.mode=30;break t}if(f>>>=w,p-=w,k>(w=o-a)){if((w=k-w)>u&&n.sane){t.msg="invalid distance too far back",n.mode=30;break t}if(S=0,F=d,0===c){if(S+=l-w,w<x){x-=w;do{A[o++]=d[S++]}while(--w);S=o-k,F=A}}else if(c<w){if(S+=l+c-w,(w-=c)<x){x-=w;do{A[o++]=d[S++]}while(--w);if(S=0,c<x){x-=w=c;do{A[o++]=d[S++]}while(--w);S=o-k,F=A}}}else if(S+=c-w,w<x){x-=w;do{A[o++]=d[S++]}while(--w);S=o-k,F=A}for(;x>2;)A[o++]=F[S++],A[o++]=F[S++],A[o++]=F[S++],x-=3;x&&(A[o++]=F[S++],x>1&&(A[o++]=F[S++]))}else{S=o-k;do{A[o++]=A[S++],A[o++]=A[S++],A[o++]=A[S++],x-=3}while(x>2);x&&(A[o++]=A[S++],x>1&&(A[o++]=A[S++]))}break}}break}}while(r<i&&o<s);r-=x=p>>3,f&=(1<<(p-=x<<3))-1,t.next_in=r,t.next_out=o,t.avail_in=r<i?i-r+5:5-(r-i),t.avail_out=o<s?s-o+257:257-(o-s),n.hold=f,n.bits=p},Bs=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Ns=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Ps=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Ds=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],js=function(t,e,n,r,i,o,a,s){var h,l,u,c,d,f,p,g,v,y=s.bits,m=0,b=0,w=0,x=0,k=0,S=0,F=0,C=0,A=0,z=0,T=null,O=0,R=new da.Buf16(16),B=new da.Buf16(16),N=null,P=0;for(m=0;m<=15;m++)R[m]=0;for(b=0;b<r;b++)R[e[n+b]]++;for(k=y,x=15;x>=1&&0===R[x];x--);if(k>x&&(k=x),0===x)return i[o++]=20971520,i[o++]=20971520,s.bits=1,0;for(w=1;w<x&&0===R[w];w++);for(k<w&&(k=w),C=1,m=1;m<=15;m++)if(C<<=1,(C-=R[m])<0)return-1;if(C>0&&(0===t||1!==x))return-1;for(B[1]=0,m=1;m<15;m++)B[m+1]=B[m]+R[m];for(b=0;b<r;b++)0!==e[n+b]&&(a[B[e[n+b]]++]=b);if(0===t?(T=N=a,f=19):1===t?(T=Bs,O-=257,N=Ns,P-=257,f=256):(T=Ps,N=Ds,f=-1),z=0,b=0,m=w,d=o,S=k,F=0,u=-1,c=(A=1<<k)-1,1===t&&A>852||2===t&&A>592)return 1;for(;;){p=m-F,a[b]<f?(g=0,v=a[b]):a[b]>f?(g=N[P+a[b]],v=T[O+a[b]]):(g=96,v=0),h=1<<m-F,w=l=1<<S;do{i[d+(z>>F)+(l-=h)]=p<<24|g<<16|v|0}while(0!==l);for(h=1<<m-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,b++,0==--R[m]){if(m===x)break;m=e[n+a[b]]}if(m>k&&(z&c)!==u){for(0===F&&(F=k),d+=w,C=1<<(S=m-F);S+F<x&&!((C-=R[S+F])<=0);)S++,C<<=1;if(A+=1<<S,1===t&&A>852||2===t&&A>592)return 1;i[u=z&c]=k<<24|S<<16|d-o|0}}return 0!==z&&(i[d+z]=m-F<<24|64<<16|0),s.bits=k,0};function Es(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function Is(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new da.Buf16(320),this.work=new da.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Ms(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new da.Buf32(852),e.distcode=e.distdyn=new da.Buf32(592),e.sane=1,e.back=-1,0):-2}function Us(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,Ms(t)):-2}function Vs(t,e){var n,r;return t&&t.state?(r=t.state,e<0?(n=0,e=-e):(n=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?-2:(null!==r.window&&r.wbits!==e&&(r.window=null),r.wrap=n,r.wbits=e,Us(t))):-2}function Ws(t,e){var n,r;return t?(r=new Is,t.state=r,r.window=null,0!==(n=Vs(t,e))&&(t.state=null),n):-2}var qs,Ks,Ls=!0;function Gs(t){if(Ls){var e;for(qs=new da.Buf32(512),Ks=new da.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(js(1,t.lens,0,288,qs,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;js(2,t.lens,0,32,Ks,0,t.work,{bits:5}),Ls=!1}t.lencode=qs,t.lenbits=9,t.distcode=Ks,t.distbits=5}function Hs(t,e,n,r){var i,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new da.Buf8(o.wsize)),r>=o.wsize?(da.arraySet(o.window,e,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((i=o.wsize-o.wnext)>r&&(i=r),da.arraySet(o.window,e,n-r,i,o.wnext),(r-=i)?(da.arraySet(o.window,e,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0}var _s={inflateReset:Us,inflateReset2:Vs,inflateResetKeep:Ms,inflateInit:function(t){return Ws(t,15)},inflateInit2:Ws,inflate:function(t,e){var n,r,i,o,a,s,h,l,u,c,d,f,p,g,v,y,m,b,w,x,k,S,F,C,A=0,z=new da.Buf8(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return-2;12===(n=t.state).mode&&(n.mode=13),a=t.next_out,i=t.output,h=t.avail_out,o=t.next_in,r=t.input,s=t.avail_in,l=n.hold,u=n.bits,c=s,d=h,S=0;t:for(;;)switch(n.mode){case 1:if(0===n.wrap){n.mode=13;break}for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(2&n.wrap&&35615===l){n.check=0,z[0]=255&l,z[1]=l>>>8&255,n.check=Za(n.check,z,2,0),l=0,u=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&l)<<8)+(l>>8))%31){t.msg="incorrect header check",n.mode=30;break}if(8!=(15&l)){t.msg="unknown compression method",n.mode=30;break}if(u-=4,k=8+(15&(l>>>=4)),0===n.wbits)n.wbits=k;else if(k>n.wbits){t.msg="invalid window size",n.mode=30;break}n.dmax=1<<k,t.adler=n.check=1,n.mode=512&l?10:12,l=0,u=0;break;case 2:for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(n.flags=l,8!=(255&n.flags)){t.msg="unknown compression method",n.mode=30;break}if(57344&n.flags){t.msg="unknown header flags set",n.mode=30;break}n.head&&(n.head.text=l>>8&1),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,n.check=Za(n.check,z,2,0)),l=0,u=0,n.mode=3;case 3:for(;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.head&&(n.head.time=l),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,z[2]=l>>>16&255,z[3]=l>>>24&255,n.check=Za(n.check,z,4,0)),l=0,u=0,n.mode=4;case 4:for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.head&&(n.head.xflags=255&l,n.head.os=l>>8),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,n.check=Za(n.check,z,2,0)),l=0,u=0,n.mode=5;case 5:if(1024&n.flags){for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.length=l,n.head&&(n.head.extra_len=l),512&n.flags&&(z[0]=255&l,z[1]=l>>>8&255,n.check=Za(n.check,z,2,0)),l=0,u=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&((f=n.length)>s&&(f=s),f&&(n.head&&(k=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),da.arraySet(n.head.extra,r,o,f,k)),512&n.flags&&(n.check=Za(n.check,r,f,o)),s-=f,o+=f,n.length-=f),n.length))break t;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===s)break t;f=0;do{k=r[o+f++],n.head&&k&&n.length<65536&&(n.head.name+=String.fromCharCode(k))}while(k&&f<s);if(512&n.flags&&(n.check=Za(n.check,r,f,o)),s-=f,o+=f,k)break t}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===s)break t;f=0;do{k=r[o+f++],n.head&&k&&n.length<65536&&(n.head.comment+=String.fromCharCode(k))}while(k&&f<s);if(512&n.flags&&(n.check=Za(n.check,r,f,o)),s-=f,o+=f,k)break t}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;u<16;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(l!==(65535&n.check)){t.msg="header crc mismatch",n.mode=30;break}l=0,u=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=12;break;case 10:for(;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}t.adler=n.check=Es(l),l=0,u=0,n.mode=11;case 11:if(0===n.havedict)return t.next_out=a,t.avail_out=h,t.next_in=o,t.avail_in=s,n.hold=l,n.bits=u,2;t.adler=n.check=1,n.mode=12;case 12:if(5===e||6===e)break t;case 13:if(n.last){l>>>=7&u,u-=7&u,n.mode=27;break}for(;u<3;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}switch(n.last=1&l,u-=1,3&(l>>>=1)){case 0:n.mode=14;break;case 1:if(Gs(n),n.mode=20,6===e){l>>>=2,u-=2;break t}break;case 2:n.mode=17;break;case 3:t.msg="invalid block type",n.mode=30}l>>>=2,u-=2;break;case 14:for(l>>>=7&u,u-=7&u;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if((65535&l)!=(l>>>16^65535)){t.msg="invalid stored block lengths",n.mode=30;break}if(n.length=65535&l,l=0,u=0,n.mode=15,6===e)break t;case 15:n.mode=16;case 16:if(f=n.length){if(f>s&&(f=s),f>h&&(f=h),0===f)break t;da.arraySet(i,r,o,f,a),s-=f,o+=f,h-=f,a+=f,n.length-=f;break}n.mode=12;break;case 17:for(;u<14;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(n.nlen=257+(31&l),l>>>=5,u-=5,n.ndist=1+(31&l),l>>>=5,u-=5,n.ncode=4+(15&l),l>>>=4,u-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;u<3;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.lens[T[n.have++]]=7&l,l>>>=3,u-=3}for(;n.have<19;)n.lens[T[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,F={bits:n.lenbits},S=js(0,n.lens,0,19,n.lencode,0,n.work,F),n.lenbits=F.bits,S){t.msg="invalid code lengths set",n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;y=(A=n.lencode[l&(1<<n.lenbits)-1])>>>16&255,m=65535&A,!((v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(m<16)l>>>=v,u-=v,n.lens[n.have++]=m;else{if(16===m){for(C=v+2;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(l>>>=v,u-=v,0===n.have){t.msg="invalid bit length repeat",n.mode=30;break}k=n.lens[n.have-1],f=3+(3&l),l>>>=2,u-=2}else if(17===m){for(C=v+3;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}u-=v,k=0,f=3+(7&(l>>>=v)),l>>>=3,u-=3}else{for(C=v+7;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}u-=v,k=0,f=11+(127&(l>>>=v)),l>>>=7,u-=7}if(n.have+f>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=30;break}for(;f--;)n.lens[n.have++]=k}}if(30===n.mode)break;if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",n.mode=30;break}if(n.lenbits=9,F={bits:n.lenbits},S=js(1,n.lens,0,n.nlen,n.lencode,0,n.work,F),n.lenbits=F.bits,S){t.msg="invalid literal/lengths set",n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,F={bits:n.distbits},S=js(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,F),n.distbits=F.bits,S){t.msg="invalid distances set",n.mode=30;break}if(n.mode=20,6===e)break t;case 20:n.mode=21;case 21:if(s>=6&&h>=258){t.next_out=a,t.avail_out=h,t.next_in=o,t.avail_in=s,n.hold=l,n.bits=u,Rs(t,d),a=t.next_out,i=t.output,h=t.avail_out,o=t.next_in,r=t.input,s=t.avail_in,l=n.hold,u=n.bits,12===n.mode&&(n.back=-1);break}for(n.back=0;y=(A=n.lencode[l&(1<<n.lenbits)-1])>>>16&255,m=65535&A,!((v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(y&&0==(240&y)){for(b=v,w=y,x=m;y=(A=n.lencode[x+((l&(1<<b+w)-1)>>b)])>>>16&255,m=65535&A,!(b+(v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=v,u-=v,n.back+=v,n.length=m,0===y){n.mode=26;break}if(32&y){n.back=-1,n.mode=12;break}if(64&y){t.msg="invalid literal/length code",n.mode=30;break}n.extra=15&y,n.mode=22;case 22:if(n.extra){for(C=n.extra;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.length+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;y=(A=n.distcode[l&(1<<n.distbits)-1])>>>16&255,m=65535&A,!((v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(0==(240&y)){for(b=v,w=y,x=m;y=(A=n.distcode[x+((l&(1<<b+w)-1)>>b)])>>>16&255,m=65535&A,!(b+(v=A>>>24)<=u);){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=v,u-=v,n.back+=v,64&y){t.msg="invalid distance code",n.mode=30;break}n.offset=m,n.extra=15&y,n.mode=24;case 24:if(n.extra){for(C=n.extra;u<C;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}n.offset+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=30;break}n.mode=25;case 25:if(0===h)break t;if(f=d-h,n.offset>f){if((f=n.offset-f)>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=30;break}f>n.wnext?(f-=n.wnext,p=n.wsize-f):p=n.wnext-f,f>n.length&&(f=n.length),g=n.window}else g=i,p=a-n.offset,f=n.length;f>h&&(f=h),h-=f,n.length-=f;do{i[a++]=g[p++]}while(--f);0===n.length&&(n.mode=21);break;case 26:if(0===h)break t;i[a++]=n.length,h--,n.mode=21;break;case 27:if(n.wrap){for(;u<32;){if(0===s)break t;s--,l|=r[o++]<<u,u+=8}if(d-=h,t.total_out+=d,n.total+=d,d&&(t.adler=n.check=n.flags?Za(n.check,i,d,a-d):Ha(n.check,i,d,a-d)),d=h,(n.flags?l:Es(l))!==n.check){t.msg="incorrect data check",n.mode=30;break}l=0,u=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;u<32;){if(0===s)break t;s--,l+=r[o++]<<u,u+=8}if(l!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=30;break}l=0,u=0}n.mode=29;case 29:S=1;break t;case 30:S=-3;break t;case 31:return-4;case 32:default:return-2}return t.next_out=a,t.avail_out=h,t.next_in=o,t.avail_in=s,n.hold=l,n.bits=u,(n.wsize||d!==t.avail_out&&n.mode<30&&(n.mode<27||4!==e))&&Hs(t,t.output,t.next_out,d-t.avail_out),c-=t.avail_in,d-=t.avail_out,t.total_in+=c,t.total_out+=d,n.total+=d,n.wrap&&d&&(t.adler=n.check=n.flags?Za(n.check,i,d,t.next_out-d):Ha(n.check,i,d,t.next_out-d)),t.data_type=n.bits+(n.last?64:0)+(12===n.mode?128:0)+(20===n.mode||15===n.mode?256:0),(0===c&&0===d||4===e)&&0===S&&(S=-5),S},inflateEnd:function(t){if(!t||!t.state)return-2;var e=t.state;return e.window&&(e.window=null),t.state=null,0},inflateGetHeader:function(t,e){var n;return t&&t.state?0==(2&(n=t.state).wrap)?-2:(n.head=e,e.done=!1,0):-2},inflateSetDictionary:function(t,e){var n,r=e.length;return t&&t.state?0!==(n=t.state).wrap&&11!==n.mode?-2:11===n.mode&&Ha(1,e,r,0)!==n.check?-3:Hs(t,e,r,r)?(n.mode=31,-4):(n.havedict=1,0):-2},inflateInfo:"pako inflate (from Nodeca project)"},Xs={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};var Zs=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},Ys=Object.prototype.toString;function Js(t){if(!(this instanceof Js))return new Js(t);this.options=da.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Cs,this.strm.avail_out=0;var n=_s.inflateInit2(this.strm,e.windowBits);if(n!==Xs.Z_OK)throw new Error(Ya[n]);if(this.header=new Zs,_s.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=ws(e.dictionary):"[object ArrayBuffer]"===Ys.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(n=_s.inflateSetDictionary(this.strm,e.dictionary))!==Xs.Z_OK))throw new Error(Ya[n])}function Qs(t,e){var n=new Js(e);if(n.push(t,!0),n.err)throw n.msg||Ya[n.err];return n.result}Js.prototype.push=function(t,e){var n,r,i,o,a,s=this.strm,h=this.options.chunkSize,l=this.options.dictionary,u=!1;if(this.ended)return!1;r=e===~~e?e:!0===e?Xs.Z_FINISH:Xs.Z_NO_FLUSH,"string"==typeof t?s.input=ks(t):"[object ArrayBuffer]"===Ys.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new da.Buf8(h),s.next_out=0,s.avail_out=h),(n=_s.inflate(s,Xs.Z_NO_FLUSH))===Xs.Z_NEED_DICT&&l&&(n=_s.inflateSetDictionary(this.strm,l)),n===Xs.Z_BUF_ERROR&&!0===u&&(n=Xs.Z_OK,u=!1),n!==Xs.Z_STREAM_END&&n!==Xs.Z_OK)return this.onEnd(n),this.ended=!0,!1;s.next_out&&(0!==s.avail_out&&n!==Xs.Z_STREAM_END&&(0!==s.avail_in||r!==Xs.Z_FINISH&&r!==Xs.Z_SYNC_FLUSH)||("string"===this.options.to?(i=Fs(s.output,s.next_out),o=s.next_out-i,a=Ss(s.output,i),s.next_out=o,s.avail_out=h-o,o&&da.arraySet(s.output,s.output,i,o,0),this.onData(a)):this.onData(da.shrinkBuf(s.output,s.next_out)))),0===s.avail_in&&0===s.avail_out&&(u=!0)}while((s.avail_in>0||0===s.avail_out)&&n!==Xs.Z_STREAM_END);return n===Xs.Z_STREAM_END&&(r=Xs.Z_FINISH),r===Xs.Z_FINISH?(n=_s.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Xs.Z_OK):r!==Xs.Z_SYNC_FLUSH||(this.onEnd(Xs.Z_OK),s.avail_out=0,!0)},Js.prototype.onData=function(t){this.chunks.push(t)},Js.prototype.onEnd=function(t){t===Xs.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=da.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var $s={Inflate:Js,inflate:Qs,inflateRaw:function(t,e){return(e=e||{}).raw=!0,Qs(t,e)},ungzip:Qs},th={};(0,da.assign)(th,Os,$s,Xs);var eh,nh,rh,ih=th,oh={};oh.toRGBA8=function(t){var e=t.width,n=t.height;if(null==t.tabs.acTL)return[oh.toRGBA8.decodeImage(t.data,e,n,t).buffer];var r=[];null==t.frames[0].data&&(t.frames[0].data=t.data);for(var i=e*n*4,o=new Uint8Array(i),a=new Uint8Array(i),s=new Uint8Array(i),h=0;h<t.frames.length;h++){var l=t.frames[h],u=l.rect.x,c=l.rect.y,d=l.rect.width,f=l.rect.height,p=oh.toRGBA8.decodeImage(l.data,d,f,t);if(0!=h)for(var g=0;g<i;g++)s[g]=o[g];if(0==l.blend?oh._copyTile(p,d,f,o,e,n,u,c,0):1==l.blend&&oh._copyTile(p,d,f,o,e,n,u,c,1),r.push(o.buffer.slice(0)),0==l.dispose);else if(1==l.dispose)oh._copyTile(a,d,f,o,e,n,u,c,0);else if(2==l.dispose)for(g=0;g<i;g++)o[g]=s[g]}return r},oh.toRGBA8.decodeImage=function(t,e,n,r){var i=e*n,o=oh.decode._getBPP(r),a=Math.ceil(e*o/8),s=new Uint8Array(4*i),h=new Uint32Array(s.buffer),l=r.ctype,u=r.depth,c=oh._bin.readUshort;if(6==l){var d=i<<2;if(8==u)for(var f=0;f<d;f+=4)s[f]=t[f],s[f+1]=t[f+1],s[f+2]=t[f+2],s[f+3]=t[f+3];if(16==u)for(f=0;f<d;f++)s[f]=t[f<<1]}else if(2==l){var p=r.tabs.tRNS;if(null==p){if(8==u)for(f=0;f<i;f++){var g=3*f;h[f]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g]}if(16==u)for(f=0;f<i;f++){g=6*f;h[f]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g]}}else{var v=p[0],y=p[1],m=p[2];if(8==u)for(f=0;f<i;f++){var b=f<<2;g=3*f;h[f]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g],t[g]==v&&t[g+1]==y&&t[g+2]==m&&(s[b+3]=0)}if(16==u)for(f=0;f<i;f++){b=f<<2,g=6*f;h[f]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g],c(t,g)==v&&c(t,g+2)==y&&c(t,g+4)==m&&(s[b+3]=0)}}}else if(3==l){var w=r.tabs.PLTE,x=r.tabs.tRNS,k=x?x.length:0;if(1==u)for(var S=0;S<n;S++){var F=S*a,C=S*e;for(f=0;f<e;f++){b=C+f<<2;var A=3*(z=t[F+(f>>3)]>>7-((7&f)<<0)&1);s[b]=w[A],s[b+1]=w[A+1],s[b+2]=w[A+2],s[b+3]=z<k?x[z]:255}}if(2==u)for(S=0;S<n;S++)for(F=S*a,C=S*e,f=0;f<e;f++){b=C+f<<2,A=3*(z=t[F+(f>>2)]>>6-((3&f)<<1)&3);s[b]=w[A],s[b+1]=w[A+1],s[b+2]=w[A+2],s[b+3]=z<k?x[z]:255}if(4==u)for(S=0;S<n;S++)for(F=S*a,C=S*e,f=0;f<e;f++){b=C+f<<2,A=3*(z=t[F+(f>>1)]>>4-((1&f)<<2)&15);s[b]=w[A],s[b+1]=w[A+1],s[b+2]=w[A+2],s[b+3]=z<k?x[z]:255}if(8==u)for(f=0;f<i;f++){var z;b=f<<2,A=3*(z=t[f]);s[b]=w[A],s[b+1]=w[A+1],s[b+2]=w[A+2],s[b+3]=z<k?x[z]:255}}else if(4==l){if(8==u)for(f=0;f<i;f++){b=f<<2;var T=t[O=f<<1];s[b]=T,s[b+1]=T,s[b+2]=T,s[b+3]=t[O+1]}if(16==u)for(f=0;f<i;f++){var O;b=f<<2,T=t[O=f<<2];s[b]=T,s[b+1]=T,s[b+2]=T,s[b+3]=t[O+2]}}else if(0==l)for(v=r.tabs.tRNS?r.tabs.tRNS:-1,S=0;S<n;S++){var R=S*a,B=S*e;if(1==u)for(var N=0;N<e;N++){var P=(T=255*(t[R+(N>>>3)]>>>7-(7&N)&1))==255*v?0:255;h[B+N]=P<<24|T<<16|T<<8|T}else if(2==u)for(N=0;N<e;N++){P=(T=85*(t[R+(N>>>2)]>>>6-((3&N)<<1)&3))==85*v?0:255;h[B+N]=P<<24|T<<16|T<<8|T}else if(4==u)for(N=0;N<e;N++){P=(T=17*(t[R+(N>>>1)]>>>4-((1&N)<<2)&15))==17*v?0:255;h[B+N]=P<<24|T<<16|T<<8|T}else if(8==u)for(N=0;N<e;N++){P=(T=t[R+N])==v?0:255;h[B+N]=P<<24|T<<16|T<<8|T}else if(16==u)for(N=0;N<e;N++){T=t[R+(N<<1)],P=c(t,R+(N<<f))==v?0:255;h[B+N]=P<<24|T<<16|T<<8|T}}return s},oh.decode=function(t){for(var e,n=new Uint8Array(t),r=8,i=oh._bin,o=i.readUshort,a=i.readUint,s={tabs:{},frames:[]},h=new Uint8Array(n.length),l=0,u=0,c=[137,80,78,71,13,10,26,10],d=0;d<8;d++)if(n[d]!=c[d])throw"The input is not a PNG file!";for(;r<n.length;){var f=i.readUint(n,r);r+=4;var p=i.readASCII(n,r,4);if(r+=4,"IHDR"==p)oh.decode._IHDR(n,r,s);else if("IDAT"==p){for(d=0;d<f;d++)h[l+d]=n[r+d];l+=f}else if("acTL"==p)s.tabs[p]={num_frames:a(n,r),num_plays:a(n,r+4)},e=new Uint8Array(n.length);else if("fcTL"==p){var g;if(0!=u)(g=s.frames[s.frames.length-1]).data=oh.decode._decompress(s,e.slice(0,u),g.rect.width,g.rect.height),u=0;var v={x:a(n,r+12),y:a(n,r+16),width:a(n,r+4),height:a(n,r+8)},y=o(n,r+22);y=o(n,r+20)/(0==y?100:y);var m={rect:v,delay:Math.round(1e3*y),dispose:n[r+24],blend:n[r+25]};s.frames.push(m)}else if("fdAT"==p){for(d=0;d<f-4;d++)e[u+d]=n[r+d+4];u+=f-4}else if("pHYs"==p)s.tabs[p]=[i.readUint(n,r),i.readUint(n,r+4),n[r+8]];else if("cHRM"==p){s.tabs[p]=[];for(d=0;d<8;d++)s.tabs[p].push(i.readUint(n,r+4*d))}else if("tEXt"==p){null==s.tabs[p]&&(s.tabs[p]={});var b=i.nextZero(n,r),w=i.readASCII(n,r,b-r),x=i.readASCII(n,b+1,r+f-b-1);s.tabs[p][w]=x}else if("iTXt"==p){null==s.tabs[p]&&(s.tabs[p]={});b=0;var k=r;b=i.nextZero(n,k);w=i.readASCII(n,k,b-k);k=b+1,k+=2,b=i.nextZero(n,k);i.readASCII(n,k,b-k);k=b+1,b=i.nextZero(n,k);i.readUTF8(n,k,b-k);k=b+1;x=i.readUTF8(n,k,f-(k-r));s.tabs[p][w]=x}else if("PLTE"==p)s.tabs[p]=i.readBytes(n,r,f);else if("hIST"==p){var S=s.tabs.PLTE.length/3;s.tabs[p]=[];for(d=0;d<S;d++)s.tabs[p].push(o(n,r+2*d))}else if("tRNS"==p)3==s.ctype?s.tabs[p]=i.readBytes(n,r,f):0==s.ctype?s.tabs[p]=o(n,r):2==s.ctype&&(s.tabs[p]=[o(n,r),o(n,r+2),o(n,r+4)]);else if("gAMA"==p)s.tabs[p]=i.readUint(n,r)/1e5;else if("sRGB"==p)s.tabs[p]=n[r];else if("bKGD"==p)0==s.ctype||4==s.ctype?s.tabs[p]=[o(n,r)]:2==s.ctype||6==s.ctype?s.tabs[p]=[o(n,r),o(n,r+2),o(n,r+4)]:3==s.ctype&&(s.tabs[p]=n[r]);else if("IEND"==p)break;r+=f;i.readUint(n,r);r+=4}0!=u&&((g=s.frames[s.frames.length-1]).data=oh.decode._decompress(s,e.slice(0,u),g.rect.width,g.rect.height),u=0);return s.data=oh.decode._decompress(s,h,s.width,s.height),delete s.compress,delete s.interlace,delete s.filter,s},oh.decode._decompress=function(t,e,n,r){var i=oh.decode._getBPP(t),o=Math.ceil(n*i/8),a=new Uint8Array((o+1+t.interlace)*r);return e=oh.decode._inflate(e,a),0==t.interlace?e=oh.decode._filterZero(e,t,0,n,r):1==t.interlace&&(e=oh.decode._readInterlace(e,t)),e},oh.decode._inflate=function(t,e){return oh.inflateRaw(new Uint8Array(t.buffer,2,t.length-6),e)},oh.inflateRaw=((rh={}).H={},rh.H.N=function(t,e){var n,r,i=Uint8Array,o=0,a=0,s=0,h=0,l=0,u=0,c=0,d=0,f=0;if(3==t[0]&&0==t[1])return e||new i(0);var p=rh.H,g=p.b,v=p.e,y=p.R,m=p.n,b=p.A,w=p.Z,x=p.m,k=null==e;for(k&&(e=new i(t.length>>>2<<3));0==o;)if(o=g(t,f,1),a=g(t,f+1,2),f+=3,0!=a){if(k&&(e=rh.H.W(e,d+(1<<17))),1==a&&(n=x.J,r=x.h,u=511,c=31),2==a){s=v(t,f,5)+257,h=v(t,f+5,5)+1,l=v(t,f+10,4)+4,f+=14;for(var S=1,F=0;F<38;F+=2)x.Q[F]=0,x.Q[F+1]=0;for(F=0;F<l;F++){var C=v(t,f+3*F,3);x.Q[1+(x.X[F]<<1)]=C,C>S&&(S=C)}f+=3*l,m(x.Q,S),b(x.Q,S,x.u),n=x.w,r=x.d,f=y(x.u,(1<<S)-1,s+h,t,f,x.v);var A=p.V(x.v,0,s,x.C);u=(1<<A)-1;var z=p.V(x.v,s,h,x.D);c=(1<<z)-1,m(x.C,A),b(x.C,A,n),m(x.D,z),b(x.D,z,r)}for(;;){var T=n[w(t,f)&u];f+=15&T;var O=T>>>4;if(O>>>8==0)e[d++]=O;else{if(256==O)break;var R=d+O-254;if(O>264){var B=x.q[O-257];R=d+(B>>>3)+v(t,f,7&B),f+=7&B}var N=r[w(t,f)&c];f+=15&N;var P=N>>>4,D=x.c[P],j=(D>>>4)+g(t,f,15&D);for(f+=15&D;d<R;)e[d]=e[d++-j],e[d]=e[d++-j],e[d]=e[d++-j],e[d]=e[d++-j];d=R}}}else{0!=(7&f)&&(f+=8-(7&f));var E=4+(f>>>3),I=t[E-4]|t[E-3]<<8;k&&(e=rh.H.W(e,d+I)),e.set(new i(t.buffer,t.byteOffset+E,I),d),f=E+I<<3,d+=I}return e.length==d?e:e.slice(0,d)},rh.H.W=function(t,e){var n=t.length;if(e<=n)return t;var r=new Uint8Array(n<<1);return r.set(t,0),r},rh.H.R=function(t,e,n,r,i,o){for(var a=rh.H.e,s=rh.H.Z,h=0;h<n;){var l=t[s(r,i)&e];i+=15&l;var u=l>>>4;if(u<=15)o[h]=u,h++;else{var c=0,d=0;16==u?(d=3+a(r,i,2),i+=2,c=o[h-1]):17==u?(d=3+a(r,i,3),i+=3):18==u&&(d=11+a(r,i,7),i+=7);for(var f=h+d;h<f;)o[h]=c,h++}}return i},rh.H.V=function(t,e,n,r){for(var i=0,o=0,a=r.length>>>1;o<n;){var s=t[o+e];r[o<<1]=0,r[1+(o<<1)]=s,s>i&&(i=s),o++}for(;o<a;)r[o<<1]=0,r[1+(o<<1)]=0,o++;return i},rh.H.n=function(t,e){for(var n,r,i,o,a=rh.H.m,s=t.length,h=a.j,l=0;l<=e;l++)h[l]=0;for(l=1;l<s;l+=2)h[t[l]]++;var u=a.K;for(n=0,h[0]=0,r=1;r<=e;r++)n=n+h[r-1]<<1,u[r]=n;for(i=0;i<s;i+=2)0!=(o=t[i+1])&&(t[i]=u[o],u[o]++)},rh.H.A=function(t,e,n){for(var r=t.length,i=rh.H.m.r,o=0;o<r;o+=2)if(0!=t[o+1])for(var a=o>>1,s=t[o+1],h=a<<4|s,l=e-s,u=t[o]<<l,c=u+(1<<l);u!=c;)n[i[u]>>>15-e]=h,u++},rh.H.l=function(t,e){for(var n=rh.H.m.r,r=15-e,i=0;i<t.length;i+=2){var o=t[i]<<e-t[i+1];t[i]=n[o]>>>r}},rh.H.M=function(t,e,n){n<<=7&e;var r=e>>>3;t[r]|=n,t[r+1]|=n>>>8},rh.H.I=function(t,e,n){n<<=7&e;var r=e>>>3;t[r]|=n,t[r+1]|=n>>>8,t[r+2]|=n>>>16},rh.H.e=function(t,e,n){return(t[e>>>3]|t[1+(e>>>3)]<<8)>>>(7&e)&(1<<n)-1},rh.H.b=function(t,e,n){return(t[e>>>3]|t[1+(e>>>3)]<<8|t[2+(e>>>3)]<<16)>>>(7&e)&(1<<n)-1},rh.H.Z=function(t,e){return(t[e>>>3]|t[1+(e>>>3)]<<8|t[2+(e>>>3)]<<16)>>>(7&e)},rh.H.i=function(t,e){return(t[e>>>3]|t[1+(e>>>3)]<<8|t[2+(e>>>3)]<<16|t[3+(e>>>3)]<<24)>>>(7&e)},rh.H.m=(eh=Uint16Array,nh=Uint32Array,{K:new eh(16),j:new eh(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new eh(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new nh(32),J:new eh(512),_:[],h:new eh(32),$:[],w:new eh(32768),C:[],v:[],d:new eh(32768),D:[],u:new eh(512),Q:[],r:new eh(32768),s:new nh(286),Y:new nh(30),a:new nh(19),t:new nh(15e3),k:new eh(65536),g:new eh(32768)}),function(){for(var t=rh.H.m,e=0;e<32768;e++){var n=e;n=(4278255360&(n=(4042322160&(n=(3435973836&(n=(2863311530&n)>>>1|(1431655765&n)<<1))>>>2|(858993459&n)<<2))>>>4|(252645135&n)<<4))>>>8|(16711935&n)<<8,t.r[e]=(n>>>16|n<<16)>>>17}function r(t,e,n){for(;0!=e--;)t.push(0,n)}for(e=0;e<32;e++)t.q[e]=t.S[e]<<3|t.T[e],t.c[e]=t.p[e]<<4|t.z[e];r(t._,144,8),r(t._,112,9),r(t._,24,7),r(t._,8,8),rh.H.n(t._,9),rh.H.A(t._,9,t.J),rh.H.l(t._,9),r(t.$,32,5),rh.H.n(t.$,5),rh.H.A(t.$,5,t.h),rh.H.l(t.$,5),r(t.Q,19,0),r(t.C,286,0),r(t.D,30,0),r(t.v,320,0)}(),rh.H.N),oh.decode._readInterlace=function(t,e){for(var n=e.width,r=e.height,i=oh.decode._getBPP(e),o=i>>3,a=Math.ceil(n*i/8),s=new Uint8Array(r*a),h=0,l=[0,0,4,0,2,0,1],u=[0,4,0,2,0,1,0],c=[8,8,8,4,4,2,2],d=[8,8,4,4,2,2,1],f=0;f<7;){for(var p=c[f],g=d[f],v=0,y=0,m=l[f];m<r;)m+=p,y++;for(var b=u[f];b<n;)b+=g,v++;var w=Math.ceil(v*i/8);oh.decode._filterZero(t,e,h,v,y);for(var x=0,k=l[f];k<r;){for(var S=u[f],F=h+x*w<<3;S<n;){var C;if(1==i)C=(C=t[F>>3])>>7-(7&F)&1,s[k*a+(S>>3)]|=C<<7-((7&S)<<0);if(2==i)C=(C=t[F>>3])>>6-(7&F)&3,s[k*a+(S>>2)]|=C<<6-((3&S)<<1);if(4==i)C=(C=t[F>>3])>>4-(7&F)&15,s[k*a+(S>>1)]|=C<<4-((1&S)<<2);if(i>=8)for(var A=k*a+S*o,z=0;z<o;z++)s[A+z]=t[(F>>3)+z];F+=i,S+=g}x++,k+=p}v*y!=0&&(h+=y*(1+w)),f+=1}return s},oh.decode._getBPP=function(t){return[1,null,3,1,2,null,4][t.ctype]*t.depth},oh.decode._filterZero=function(t,e,n,r,i){var o=oh.decode._getBPP(e),a=Math.ceil(r*o/8),s=oh.decode._paeth;o=Math.ceil(o/8);var h=0,l=1,u=t[n],c=0;if(u>1&&(t[n]=[0,0,1][u-2]),3==u)for(c=o;c<a;c++)t[c+1]=t[c+1]+(t[c+1-o]>>>1)&255;for(var d=0;d<i;d++)if(c=0,0==(u=t[(l=(h=n+d*a)+d+1)-1]))for(;c<a;c++)t[h+c]=t[l+c];else if(1==u){for(;c<o;c++)t[h+c]=t[l+c];for(;c<a;c++)t[h+c]=t[l+c]+t[h+c-o]}else if(2==u)for(;c<a;c++)t[h+c]=t[l+c]+t[h+c-a];else if(3==u){for(;c<o;c++)t[h+c]=t[l+c]+(t[h+c-a]>>>1);for(;c<a;c++)t[h+c]=t[l+c]+(t[h+c-a]+t[h+c-o]>>>1)}else{for(;c<o;c++)t[h+c]=t[l+c]+s(0,t[h+c-a],0);for(;c<a;c++)t[h+c]=t[l+c]+s(t[h+c-o],t[h+c-a],t[h+c-o-a])}return t},oh.decode._paeth=function(t,e,n){var r=t+e-n,i=r-t,o=r-e,a=r-n;return i*i<=o*o&&i*i<=a*a?t:o*o<=a*a?e:n},oh.decode._IHDR=function(t,e,n){var r=oh._bin;n.width=r.readUint(t,e),e+=4,n.height=r.readUint(t,e),e+=4,n.depth=t[e],e++,n.ctype=t[e],e++,n.compress=t[e],e++,n.filter=t[e],e++,n.interlace=t[e],e++},oh._bin={nextZero:function(t,e){for(;0!=t[e];)e++;return e},readUshort:function(t,e){return t[e]<<8|t[e+1]},writeUshort:function(t,e,n){t[e]=n>>8&255,t[e+1]=255&n},readUint:function(t,e){return 16777216*t[e]+(t[e+1]<<16|t[e+2]<<8|t[e+3])},writeUint:function(t,e,n){t[e]=n>>24&255,t[e+1]=n>>16&255,t[e+2]=n>>8&255,t[e+3]=255&n},readASCII:function(t,e,n){for(var r="",i=0;i<n;i++)r+=String.fromCharCode(t[e+i]);return r},writeASCII:function(t,e,n){for(var r=0;r<n.length;r++)t[e+r]=n.charCodeAt(r)},readBytes:function(t,e,n){for(var r=[],i=0;i<n;i++)r.push(t[e+i]);return r},pad:function(t){return t.length<2?"0"+t:t},readUTF8:function(t,e,n){for(var r,i="",o=0;o<n;o++)i+="%"+oh._bin.pad(t[e+o].toString(16));try{r=decodeURIComponent(i)}catch(r){return oh._bin.readASCII(t,e,n)}return r}},oh._copyTile=function(t,e,n,r,i,o,a,s,h){for(var l=Math.min(e,i),u=Math.min(n,o),c=0,d=0,f=0;f<u;f++)for(var p=0;p<l;p++)if(a>=0&&s>=0?(c=f*e+p<<2,d=(s+f)*i+a+p<<2):(c=(-s+f)*e-a+p<<2,d=f*i+p<<2),0==h)r[d]=t[c],r[d+1]=t[c+1],r[d+2]=t[c+2],r[d+3]=t[c+3];else if(1==h){var g=t[c+3]*(1/255),v=t[c]*g,y=t[c+1]*g,m=t[c+2]*g,b=r[d+3]*(1/255),w=r[d]*b,x=r[d+1]*b,k=r[d+2]*b,S=1-g,F=g+b*S,C=0==F?0:1/F;r[d+3]=255*F,r[d+0]=(v+w*S)*C,r[d+1]=(y+x*S)*C,r[d+2]=(m+k*S)*C}else if(2==h){g=t[c+3],v=t[c],y=t[c+1],m=t[c+2],b=r[d+3],w=r[d],x=r[d+1],k=r[d+2];g==b&&v==w&&y==x&&m==k?(r[d]=0,r[d+1]=0,r[d+2]=0,r[d+3]=0):(r[d]=v,r[d+1]=y,r[d+2]=m,r[d+3]=g)}else if(3==h){g=t[c+3],v=t[c],y=t[c+1],m=t[c+2],b=r[d+3],w=r[d],x=r[d+1],k=r[d+2];if(g==b&&v==w&&y==x&&m==k)continue;if(g<220&&b>20)return!1}return!0},oh.encode=function(t,e,n,r,i,o,a){null==r&&(r=0),null==a&&(a=!1);var s=oh.encode.compress(t,e,n,r,[!1,!1,!1,0,a]);return oh.encode.compressPNG(s,-1),oh.encode._main(s,e,n,i,o)},oh.encodeLL=function(t,e,n,r,i,o,a,s){for(var h={ctype:0+(1==r?0:2)+(0==i?0:4),depth:o,frames:[]},l=(r+i)*o,u=l*e,c=0;c<t.length;c++)h.frames.push({rect:{x:0,y:0,width:e,height:n},img:new Uint8Array(t[c]),blend:0,dispose:1,bpp:Math.ceil(l/8),bpl:Math.ceil(u/8)});return oh.encode.compressPNG(h,0,!0),oh.encode._main(h,e,n,a,s)},oh.encode._main=function(t,e,n,r,i){null==i&&(i={});var o=oh.crc.crc,a=oh._bin.writeUint,s=oh._bin.writeUshort,h=oh._bin.writeASCII,l=8,u=t.frames.length>1,c=!1,d=33+(u?20:0);if(null!=i.sRGB&&(d+=13),null!=i.pHYs&&(d+=21),3==t.ctype){for(var f=t.plte.length,p=0;p<f;p++)t.plte[p]>>>24!=255&&(c=!0);d+=8+3*f+4+(c?8+1*f+4:0)}for(var g=0;g<t.frames.length;g++){u&&(d+=38),d+=(F=t.frames[g]).cimg.length+12,0!=g&&(d+=4)}d+=12;var v=new Uint8Array(d),y=[137,80,78,71,13,10,26,10];for(p=0;p<8;p++)v[p]=y[p];if(a(v,l,13),h(v,l+=4,"IHDR"),a(v,l+=4,e),a(v,l+=4,n),v[l+=4]=t.depth,v[++l]=t.ctype,v[++l]=0,v[++l]=0,v[++l]=0,a(v,++l,o(v,l-17,17)),l+=4,null!=i.sRGB&&(a(v,l,1),h(v,l+=4,"sRGB"),v[l+=4]=i.sRGB,a(v,++l,o(v,l-5,5)),l+=4),null!=i.pHYs&&(a(v,l,9),h(v,l+=4,"pHYs"),a(v,l+=4,i.pHYs[0]),a(v,l+=4,i.pHYs[1]),v[l+=4]=i.pHYs[2],a(v,++l,o(v,l-13,13)),l+=4),u&&(a(v,l,8),h(v,l+=4,"acTL"),a(v,l+=4,t.frames.length),a(v,l+=4,null!=i.loop?i.loop:0),a(v,l+=4,o(v,l-12,12)),l+=4),3==t.ctype){a(v,l,3*(f=t.plte.length)),h(v,l+=4,"PLTE"),l+=4;for(p=0;p<f;p++){var m=3*p,b=t.plte[p],w=255&b,x=b>>>8&255,k=b>>>16&255;v[l+m+0]=w,v[l+m+1]=x,v[l+m+2]=k}if(a(v,l+=3*f,o(v,l-3*f-4,3*f+4)),l+=4,c){a(v,l,f),h(v,l+=4,"tRNS"),l+=4;for(p=0;p<f;p++)v[l+p]=t.plte[p]>>>24&255;a(v,l+=f,o(v,l-f-4,f+4)),l+=4}}var S=0;for(g=0;g<t.frames.length;g++){var F=t.frames[g];u&&(a(v,l,26),h(v,l+=4,"fcTL"),a(v,l+=4,S++),a(v,l+=4,F.rect.width),a(v,l+=4,F.rect.height),a(v,l+=4,F.rect.x),a(v,l+=4,F.rect.y),s(v,l+=4,r[g]),s(v,l+=2,1e3),v[l+=2]=F.dispose,v[++l]=F.blend,a(v,++l,o(v,l-30,30)),l+=4);var C=F.cimg;a(v,l,(f=C.length)+(0==g?0:4));var A=l+=4;h(v,l,0==g?"IDAT":"fdAT"),l+=4,0!=g&&(a(v,l,S++),l+=4),v.set(C,l),a(v,l+=f,o(v,A,l-A)),l+=4}return a(v,l,0),h(v,l+=4,"IEND"),a(v,l+=4,o(v,l-4,4)),l+=4,v.buffer},oh.encode.compressPNG=function(t,e,n){for(var r=0;r<t.frames.length;r++){var i=t.frames[r],o=(i.rect.width,i.rect.height),a=new Uint8Array(o*i.bpl+o);i.cimg=oh.encode._filterZero(i.img,o,i.bpp,i.bpl,a,e,n)}},oh.encode.compress=function(t,e,n,r,i){for(var o=i[0],a=i[1],s=i[2],h=i[3],l=i[4],u=6,c=8,d=255,f=0;f<t.length;f++)for(var p=new Uint8Array(t[f]),g=p.length,v=0;v<g;v+=4)d&=p[v+3];var y=255!=d,m=oh.encode.framize(t,e,n,o,a,s),b={},w=[],x=[];if(0!=r){var k=[];for(v=0;v<m.length;v++)k.push(m[v].img.buffer);var S=oh.encode.concatRGBA(k),F=oh.quantize(S,r),C=0,A=new Uint8Array(F.abuf);for(v=0;v<m.length;v++){var z=(G=m[v].img).length;x.push(new Uint8Array(F.inds.buffer,C>>2,z>>2));for(f=0;f<z;f+=4)G[f]=A[C+f],G[f+1]=A[C+f+1],G[f+2]=A[C+f+2],G[f+3]=A[C+f+3];C+=z}for(v=0;v<F.plte.length;v++)w.push(F.plte[v].est.rgba)}else for(f=0;f<m.length;f++){var T=m[f],O=new Uint32Array(T.img.buffer),R=T.rect.width,B=(g=O.length,new Uint8Array(g));x.push(B);for(v=0;v<g;v++){var N=O[v];if(0!=v&&N==O[v-1])B[v]=B[v-1];else if(v>R&&N==O[v-R])B[v]=B[v-R];else{var P=b[N];if(null==P&&(b[N]=P=w.length,w.push(N),w.length>=300))break;B[v]=P}}}var D=w.length;D<=256&&0==l&&(c=D<=2?1:D<=4?2:D<=16?4:8,c=Math.max(c,h));for(f=0;f<m.length;f++){(T=m[f]).rect.x,T.rect.y,R=T.rect.width;var j=T.rect.height,E=T.img,I=(new Uint32Array(E.buffer),4*R),M=4;if(D<=256&&0==l){I=Math.ceil(c*R/8);for(var U=new Uint8Array(I*j),V=x[f],W=0;W<j;W++){v=W*I;var q=W*R;if(8==c)for(var K=0;K<R;K++)U[v+K]=V[q+K];else if(4==c)for(K=0;K<R;K++)U[v+(K>>1)]|=V[q+K]<<4-4*(1&K);else if(2==c)for(K=0;K<R;K++)U[v+(K>>2)]|=V[q+K]<<6-2*(3&K);else if(1==c)for(K=0;K<R;K++)U[v+(K>>3)]|=V[q+K]<<7-1*(7&K)}E=U,u=3,M=1}else if(0==y&&1==m.length){U=new Uint8Array(R*j*3);var L=R*j;for(v=0;v<L;v++){var G,H=4*v;U[G=3*v]=E[H],U[G+1]=E[H+1],U[G+2]=E[H+2]}E=U,u=2,M=3,I=3*R}T.img=E,T.bpl=I,T.bpp=M}return{ctype:u,depth:c,plte:w,frames:m}},oh.encode.framize=function(t,e,n,r,i,o){for(var a=[],s=0;s<t.length;s++){var h,l=new Uint8Array(t[s]),u=new Uint32Array(l.buffer),c=0,d=0,f=e,p=n,g=r?1:0;if(0!=s){for(var v=o||r||1==s||0!=a[s-2].dispose?1:2,y=0,m=1e9,b=0;b<v;b++){for(var w=new Uint8Array(t[s-1-b]),x=new Uint32Array(t[s-1-b]),k=e,S=n,F=-1,C=-1,A=0;A<n;A++)for(var z=0;z<e;z++){u[D=A*e+z]!=x[D]&&(z<k&&(k=z),z>F&&(F=z),A<S&&(S=A),A>C&&(C=A))}-1==F&&(k=S=F=C=0),i&&(1==(1&k)&&k--,1==(1&S)&&S--);var T=(F-k+1)*(C-S+1);T<m&&(m=T,y=b,c=k,d=S,f=F-k+1,p=C-S+1)}w=new Uint8Array(t[s-1-y]);1==y&&(a[s-1].dispose=2),h=new Uint8Array(f*p*4),oh._copyTile(w,e,n,h,f,p,-c,-d,0),1==(g=oh._copyTile(l,e,n,h,f,p,-c,-d,3)?1:0)?oh.encode._prepareDiff(l,e,n,h,{x:c,y:d,width:f,height:p}):oh._copyTile(l,e,n,h,f,p,-c,-d,0)}else h=l.slice(0);a.push({rect:{x:c,y:d,width:f,height:p},img:h,blend:g,dispose:0})}if(r)for(s=0;s<a.length;s++){if(1!=(j=a[s]).blend){var O=j.rect,R=a[s-1].rect,B=Math.min(O.x,R.x),N=Math.min(O.y,R.y),P={x:B,y:N,width:Math.max(O.x+O.width,R.x+R.width)-B,height:Math.max(O.y+O.height,R.y+R.height)-N};a[s-1].dispose=1,s-1!=0&&oh.encode._updateFrame(t,e,n,a,s-1,P,i),oh.encode._updateFrame(t,e,n,a,s,P,i)}}if(1!=t.length)for(var D=0;D<a.length;D++){var j;(j=a[D]).rect.width*j.rect.height}return a},oh.encode._updateFrame=function(t,e,n,r,i,o,a){for(var s=Uint8Array,h=Uint32Array,l=new s(t[i-1]),u=new h(t[i-1]),c=i+1<t.length?new s(t[i+1]):null,d=new s(t[i]),f=new h(d.buffer),p=e,g=n,v=-1,y=-1,m=0;m<o.height;m++)for(var b=0;b<o.width;b++){var w=o.x+b,x=o.y+m,k=x*e+w,S=f[k];0==S||0==r[i-1].dispose&&u[k]==S&&(null==c||0!=c[4*k+3])||(w<p&&(p=w),w>v&&(v=w),x<g&&(g=x),x>y&&(y=x))}-1==v&&(p=g=v=y=0),a&&(1==(1&p)&&p--,1==(1&g)&&g--),o={x:p,y:g,width:v-p+1,height:y-g+1};var F=r[i];F.rect=o,F.blend=1,F.img=new Uint8Array(o.width*o.height*4),0==r[i-1].dispose?(oh._copyTile(l,e,n,F.img,o.width,o.height,-o.x,-o.y,0),oh.encode._prepareDiff(d,e,n,F.img,o)):oh._copyTile(d,e,n,F.img,o.width,o.height,-o.x,-o.y,0)},oh.encode._prepareDiff=function(t,e,n,r,i){oh._copyTile(t,e,n,r,i.width,i.height,-i.x,-i.y,2)},oh.encode._filterZero=function(t,e,n,r,i,o,a){var s,h=[],l=[0,1,2,3,4];-1!=o?l=[o]:(e*r>5e5||1==n)&&(l=[0]),a&&(s={level:0});for(var u=a&&null!=UZIP?UZIP:ih,c=0;c<l.length;c++){for(var d=0;d<e;d++)oh.encode._filterLine(i,t,d,r,n,l[c]);h.push(u.deflate(i,s))}var f,p=1e9;for(c=0;c<h.length;c++)h[c].length<p&&(f=c,p=h[c].length);return h[f]},oh.encode._filterLine=function(t,e,n,r,i,o){var a=n*r,s=a+n,h=oh.decode._paeth;if(t[s]=o,s++,0==o)if(r<500)for(var l=0;l<r;l++)t[s+l]=e[a+l];else t.set(new Uint8Array(e.buffer,a,r),s);else if(1==o){for(l=0;l<i;l++)t[s+l]=e[a+l];for(l=i;l<r;l++)t[s+l]=e[a+l]-e[a+l-i]+256&255}else if(0==n){for(l=0;l<i;l++)t[s+l]=e[a+l];if(2==o)for(l=i;l<r;l++)t[s+l]=e[a+l];if(3==o)for(l=i;l<r;l++)t[s+l]=e[a+l]-(e[a+l-i]>>1)+256&255;if(4==o)for(l=i;l<r;l++)t[s+l]=e[a+l]-h(e[a+l-i],0,0)+256&255}else{if(2==o)for(l=0;l<r;l++)t[s+l]=e[a+l]+256-e[a+l-r]&255;if(3==o){for(l=0;l<i;l++)t[s+l]=e[a+l]+256-(e[a+l-r]>>1)&255;for(l=i;l<r;l++)t[s+l]=e[a+l]+256-(e[a+l-r]+e[a+l-i]>>1)&255}if(4==o){for(l=0;l<i;l++)t[s+l]=e[a+l]+256-h(0,e[a+l-r],0)&255;for(l=i;l<r;l++)t[s+l]=e[a+l]+256-h(e[a+l-i],e[a+l-r],e[a+l-i-r])&255}}},oh.crc={table:function(){for(var t=new Uint32Array(256),e=0;e<256;e++){for(var n=e,r=0;r<8;r++)1&n?n=3988292384^n>>>1:n>>>=1;t[e]=n}return t}(),update:function(t,e,n,r){for(var i=0;i<r;i++)t=oh.crc.table[255&(t^e[n+i])]^t>>>8;return t},crc:function(t,e,n){return 4294967295^oh.crc.update(4294967295,t,e,n)}},oh.quantize=function(t,e){for(var n=new Uint8Array(t),r=n.slice(0),i=new Uint32Array(r.buffer),o=oh.quantize.getKDtree(r,e),a=o[0],s=o[1],h=(oh.quantize.planeDst,n),l=i,u=h.length,c=new Uint8Array(n.length>>2),d=0;d<u;d+=4){var f=h[d]*(1/255),p=h[d+1]*(1/255),g=h[d+2]*(1/255),v=h[d+3]*(1/255),y=oh.quantize.getNearest(a,f,p,g,v);c[d>>2]=y.ind,l[d>>2]=y.est.rgba}return{abuf:r.buffer,inds:c,plte:s}},oh.quantize.getKDtree=function(t,e,n){null==n&&(n=1e-4);var r=new Uint32Array(t.buffer),i={i0:0,i1:t.length,bst:null,est:null,tdst:0,left:null,right:null};i.bst=oh.quantize.stats(t,i.i0,i.i1),i.est=oh.quantize.estats(i.bst);for(var o=[i];o.length<e;){for(var a=0,s=0,h=0;h<o.length;h++)o[h].est.L>a&&(a=o[h].est.L,s=h);if(a<n)break;var l=o[s],u=oh.quantize.splitPixels(t,r,l.i0,l.i1,l.est.e,l.est.eMq255);if(l.i0>=u||l.i1<=u)l.est.L=0;else{var c={i0:l.i0,i1:u,bst:null,est:null,tdst:0,left:null,right:null};c.bst=oh.quantize.stats(t,c.i0,c.i1),c.est=oh.quantize.estats(c.bst);var d={i0:u,i1:l.i1,bst:null,est:null,tdst:0,left:null,right:null};d.bst={R:[],m:[],N:l.bst.N-c.bst.N};for(h=0;h<16;h++)d.bst.R[h]=l.bst.R[h]-c.bst.R[h];for(h=0;h<4;h++)d.bst.m[h]=l.bst.m[h]-c.bst.m[h];d.est=oh.quantize.estats(d.bst),l.left=c,l.right=d,o[s]=c,o.push(d)}}o.sort((function(t,e){return e.bst.N-t.bst.N}));for(h=0;h<o.length;h++)o[h].ind=h;return[i,o]},oh.quantize.getNearest=function(t,e,n,r,i){if(null==t.left)return t.tdst=oh.quantize.dist(t.est.q,e,n,r,i),t;var o=oh.quantize.planeDst(t.est,e,n,r,i),a=t.left,s=t.right;o>0&&(a=t.right,s=t.left);var h=oh.quantize.getNearest(a,e,n,r,i);if(h.tdst<=o*o)return h;var l=oh.quantize.getNearest(s,e,n,r,i);return l.tdst<h.tdst?l:h},oh.quantize.planeDst=function(t,e,n,r,i){var o=t.e;return o[0]*e+o[1]*n+o[2]*r+o[3]*i-t.eMq},oh.quantize.dist=function(t,e,n,r,i){var o=e-t[0],a=n-t[1],s=r-t[2],h=i-t[3];return o*o+a*a+s*s+h*h},oh.quantize.splitPixels=function(t,e,n,r,i,o){var a=oh.quantize.vecDot;for(r-=4;n<r;){for(;a(t,n,i)<=o;)n+=4;for(;a(t,r,i)>o;)r-=4;if(n>=r)break;var s=e[n>>2];e[n>>2]=e[r>>2],e[r>>2]=s,n+=4,r-=4}for(;a(t,n,i)>o;)n-=4;return n+4},oh.quantize.vecDot=function(t,e,n){return t[e]*n[0]+t[e+1]*n[1]+t[e+2]*n[2]+t[e+3]*n[3]},oh.quantize.stats=function(t,e,n){for(var r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=[0,0,0,0],o=n-e>>2,a=e;a<n;a+=4){var s=t[a]*(1/255),h=t[a+1]*(1/255),l=t[a+2]*(1/255),u=t[a+3]*(1/255);i[0]+=s,i[1]+=h,i[2]+=l,i[3]+=u,r[0]+=s*s,r[1]+=s*h,r[2]+=s*l,r[3]+=s*u,r[5]+=h*h,r[6]+=h*l,r[7]+=h*u,r[10]+=l*l,r[11]+=l*u,r[15]+=u*u}return r[4]=r[1],r[8]=r[2],r[9]=r[6],r[12]=r[3],r[13]=r[7],r[14]=r[11],{R:r,m:i,N:o}},oh.quantize.estats=function(t){var e=t.R,n=t.m,r=t.N,i=n[0],o=n[1],a=n[2],s=n[3],h=0==r?0:1/r,l=[e[0]-i*i*h,e[1]-i*o*h,e[2]-i*a*h,e[3]-i*s*h,e[4]-o*i*h,e[5]-o*o*h,e[6]-o*a*h,e[7]-o*s*h,e[8]-a*i*h,e[9]-a*o*h,e[10]-a*a*h,e[11]-a*s*h,e[12]-s*i*h,e[13]-s*o*h,e[14]-s*a*h,e[15]-s*s*h],u=l,c=oh.M4,d=[.5,.5,.5,.5],f=0,p=0;if(0!=r)for(var g=0;g<10&&(d=c.multVec(u,d),p=Math.sqrt(c.dot(d,d)),d=c.sml(1/p,d),!(Math.abs(p-f)<1e-9));g++)f=p;var v=[i*h,o*h,a*h,s*h];return{Cov:l,q:v,e:d,L:f,eMq255:c.dot(c.sml(255,v),d),eMq:c.dot(d,v),rgba:(Math.round(255*v[3])<<24|Math.round(255*v[2])<<16|Math.round(255*v[1])<<8|Math.round(255*v[0])<<0)>>>0}},oh.M4={multVec:function(t,e){return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3],t[4]*e[0]+t[5]*e[1]+t[6]*e[2]+t[7]*e[3],t[8]*e[0]+t[9]*e[1]+t[10]*e[2]+t[11]*e[3],t[12]*e[0]+t[13]*e[1]+t[14]*e[2]+t[15]*e[3]]},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},sml:function(t,e){return[t*e[0],t*e[1],t*e[2],t*e[3]]}},oh.encode.concatRGBA=function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].byteLength;var r=new Uint8Array(e),i=0;for(n=0;n<t.length;n++){for(var o=new Uint8Array(t[n]),a=o.length,s=0;s<a;s+=4){var h=o[s],l=o[s+1],u=o[s+2],c=o[s+3];0==c&&(h=l=u=0),r[i+s]=h,r[i+s+1]=l,r[i+s+2]=u,r[i+s+3]=c}i+=a}return r.buffer};var ah;!function(t){t.Greyscale="Greyscale",t.Truecolour="Truecolour",t.IndexedColour="IndexedColour",t.GreyscaleWithAlpha="GreyscaleWithAlpha",t.TruecolourWithAlpha="TruecolourWithAlpha"}(ah||(ah={}));var sh,hh,lh,uh,ch=function(){function t(t){var e=oh.decode(t),n=oh.toRGBA8(e);if(n.length>1)throw new Error("Animated PNGs are not supported");var r=function(t){for(var e=Math.floor(t.length/4),n=new Uint8Array(3*e),r=new Uint8Array(1*e),i=0,o=0,a=0;i<t.length;)n[o++]=t[i++],n[o++]=t[i++],n[o++]=t[i++],r[a++]=t[i++];return{rgbChannel:n,alphaChannel:r}}(new Uint8Array(n[0])),i=r.rgbChannel,o=r.alphaChannel;this.rgbChannel=i,o.some((function(t){return t<255}))&&(this.alphaChannel=o),this.type=function(t){if(0===t)return ah.Greyscale;if(2===t)return ah.Truecolour;if(3===t)return ah.IndexedColour;if(4===t)return ah.GreyscaleWithAlpha;if(6===t)return ah.TruecolourWithAlpha;throw new Error("Unknown color type: "+t)}(e.ctype),this.width=e.width,this.height=e.height,this.bitsPerComponent=8}return t.load=function(e){return new t(e)},t}(),dh=function(){function t(t){this.image=t,this.bitsPerComponent=t.bitsPerComponent,this.width=t.width,this.height=t.height,this.colorSpace="DeviceRGB"}return t.for=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(n){return[2,new t(ch.load(e))]}))}))},t.prototype.embedIntoContext=function(t,e){return r(this,void 0,void 0,(function(){var n,r;return i(this,(function(i){return n=this.embedAlphaChannel(t),r=t.flateStream(this.image.rgbChannel,{Type:"XObject",Subtype:"Image",BitsPerComponent:this.image.bitsPerComponent,Width:this.image.width,Height:this.image.height,ColorSpace:this.colorSpace,SMask:n}),e?(t.assign(e,r),[2,e]):[2,t.register(r)]}))}))},t.prototype.embedAlphaChannel=function(t){if(this.image.alphaChannel){var e=t.flateStream(this.image.alphaChannel,{Type:"XObject",Subtype:"Image",Height:this.image.height,Width:this.image.width,BitsPerComponent:this.image.bitsPerComponent,ColorSpace:"DeviceGray",Decode:[0,1]});return t.register(e)}},t}(),fh=function(){function t(t,e,n){this.bytes=t,this.start=e||0,this.pos=this.start,this.end=e&&n?e+n:this.bytes.length}return Object.defineProperty(t.prototype,"length",{get:function(){return this.end-this.start},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isEmpty",{get:function(){return 0===this.length},enumerable:!1,configurable:!0}),t.prototype.getByte=function(){return this.pos>=this.end?-1:this.bytes[this.pos++]},t.prototype.getUint16=function(){var t=this.getByte(),e=this.getByte();return-1===t||-1===e?-1:(t<<8)+e},t.prototype.getInt32=function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},t.prototype.getBytes=function(t,e){void 0===e&&(e=!1);var n=this.bytes,r=this.pos,i=this.end;if(t){var o=r+t;o>i&&(o=i),this.pos=o;a=n.subarray(r,o);return e?new Uint8ClampedArray(a):a}var a=n.subarray(r,i);return e?new Uint8ClampedArray(a):a},t.prototype.peekByte=function(){var t=this.getByte();return this.pos--,t},t.prototype.peekBytes=function(t,e){void 0===e&&(e=!1);var n=this.getBytes(t,e);return this.pos-=n.length,n},t.prototype.skip=function(t){t||(t=1),this.pos+=t},t.prototype.reset=function(){this.pos=this.start},t.prototype.moveStart=function(){this.start=this.pos},t.prototype.makeSubStream=function(e,n){return new t(this.bytes,e,n)},t.prototype.decode=function(){return this.bytes},t}(),ph=new Uint8Array(0),gh=function(){function t(t){if(this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=ph,this.minBufferLength=512,t)for(;this.minBufferLength<t;)this.minBufferLength*=2}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){for(;!this.eof&&0===this.bufferLength;)this.readBlock();return 0===this.bufferLength},enumerable:!1,configurable:!0}),t.prototype.getByte=function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return-1;this.readBlock()}return this.buffer[this.pos++]},t.prototype.getUint16=function(){var t=this.getByte(),e=this.getByte();return-1===t||-1===e?-1:(t<<8)+e},t.prototype.getInt32=function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},t.prototype.getBytes=function(t,e){var n;void 0===e&&(e=!1);var r=this.pos;if(t){for(this.ensureBuffer(r+t),n=r+t;!this.eof&&this.bufferLength<n;)this.readBlock();var i=this.bufferLength;n>i&&(n=i)}else{for(;!this.eof;)this.readBlock();n=this.bufferLength}this.pos=n;var o=this.buffer.subarray(r,n);return!e||o instanceof Uint8ClampedArray?o:new Uint8ClampedArray(o)},t.prototype.peekByte=function(){var t=this.getByte();return this.pos--,t},t.prototype.peekBytes=function(t,e){void 0===e&&(e=!1);var n=this.getBytes(t,e);return this.pos-=n.length,n},t.prototype.skip=function(t){t||(t=1),this.pos+=t},t.prototype.reset=function(){this.pos=0},t.prototype.makeSubStream=function(t,e){for(var n=t+e;this.bufferLength<=n&&!this.eof;)this.readBlock();return new fh(this.buffer,t,e)},t.prototype.decode=function(){for(;!this.eof;)this.readBlock();return this.buffer.subarray(0,this.bufferLength)},t.prototype.readBlock=function(){throw new Hn(this.constructor.name,"readBlock")},t.prototype.ensureBuffer=function(t){var e=this.buffer;if(t<=e.byteLength)return e;for(var n=this.minBufferLength;n<t;)n*=2;var r=new Uint8Array(n);return r.set(e),this.buffer=r},t}(),vh=function(t){return 32===t||9===t||13===t||10===t},yh=function(t){function n(e,n){var r=t.call(this,n)||this;return r.stream=e,r.input=new Uint8Array(5),n&&(n*=.8),r}return e(n,t),n.prototype.readBlock=function(){for(var t=this.stream,e=t.getByte();vh(e);)e=t.getByte();if(-1!==e&&126!==e){var n,r,i=this.bufferLength;if(122===e){for(n=this.ensureBuffer(i+4),r=0;r<4;++r)n[i+r]=0;this.bufferLength+=4}else{var o=this.input;for(o[0]=e,r=1;r<5;++r){for(e=t.getByte();vh(e);)e=t.getByte();if(o[r]=e,-1===e||126===e)break}if(n=this.ensureBuffer(i+r-1),this.bufferLength+=r-1,r<5){for(;r<5;++r)o[r]=117;this.eof=!0}var a=0;for(r=0;r<5;++r)a=85*a+(o[r]-33);for(r=3;r>=0;--r)n[i+r]=255&a,a>>=8}}else this.eof=!0},n}(gh),mh=function(t){function n(e,n){var r=t.call(this,n)||this;return r.stream=e,r.firstDigit=-1,n&&(n*=.5),r}return e(n,t),n.prototype.readBlock=function(){var t=this.stream.getBytes(8e3);if(t.length){for(var e=t.length+1>>1,n=this.ensureBuffer(this.bufferLength+e),r=this.bufferLength,i=this.firstDigit,o=0,a=t.length;o<a;o++){var s=t[o],h=void 0;if(s>=48&&s<=57)h=15&s;else{if(!(s>=65&&s<=70||s>=97&&s<=102)){if(62===s){this.eof=!0;break}continue}h=9+(15&s)}i<0?i=h:(n[r++]=i<<4|h,i=-1)}i>=0&&this.eof&&(n[r++]=i<<4,i=-1),this.firstDigit=i,this.bufferLength=r}else this.eof=!0},n}(gh),bh=new Int32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wh=new Int32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),xh=new Int32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),kh=[new Int32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],Sh=[new Int32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5],Fh=function(t){function n(e,n){var r=t.call(this,n)||this;r.stream=e;var i=e.getByte(),o=e.getByte();if(-1===i||-1===o)throw new Error("Invalid header in flate stream: "+i+", "+o);if(8!=(15&i))throw new Error("Unknown compression method in flate stream: "+i+", "+o);if(((i<<8)+o)%31!=0)throw new Error("Bad FCHECK in flate stream: "+i+", "+o);if(32&o)throw new Error("FDICT bit set in flate stream: "+i+", "+o);return r.codeSize=0,r.codeBuf=0,r}return e(n,t),n.prototype.readBlock=function(){var t,e,n=this.stream,r=this.getBits(3);if(1&r&&(this.eof=!0),0!==(r>>=1)){var i,o;if(1===r)i=kh,o=Sh;else{if(2!==r)throw new Error("Unknown block type in flate stream");var a=this.getBits(5)+257,s=this.getBits(5)+1,h=this.getBits(4)+4,l=new Uint8Array(bh.length),u=void 0;for(u=0;u<h;++u)l[bh[u]]=this.getBits(3);var c=this.generateHuffmanTable(l);e=0,u=0;for(var d=a+s,f=new Uint8Array(d),p=void 0,g=void 0,v=void 0;u<d;){var y=this.getCode(c);if(16===y)p=2,g=3,v=e;else if(17===y)p=3,g=3,v=e=0;else{if(18!==y){f[u++]=e=y;continue}p=7,g=11,v=e=0}for(var m=this.getBits(p)+g;m-- >0;)f[u++]=v}i=this.generateHuffmanTable(f.subarray(0,a)),o=this.generateHuffmanTable(f.subarray(a,d))}for(var b=(t=this.buffer)?t.length:0,w=this.bufferLength;;){var x=this.getCode(i);if(x<256)w+1>=b&&(b=(t=this.ensureBuffer(w+1)).length),t[w++]=x;else{if(256===x)return void(this.bufferLength=w);var k=(x=wh[x-=257])>>16;k>0&&(k=this.getBits(k)),e=(65535&x)+k,x=this.getCode(o),(k=(x=xh[x])>>16)>0&&(k=this.getBits(k));var S=(65535&x)+k;w+e>=b&&(b=(t=this.ensureBuffer(w+e)).length);for(var F=0;F<e;++F,++w)t[w]=t[w-S]}}}else{var C=void 0;if(-1===(C=n.getByte()))throw new Error("Bad block header in flate stream");var A=C;if(-1===(C=n.getByte()))throw new Error("Bad block header in flate stream");if(A|=C<<8,-1===(C=n.getByte()))throw new Error("Bad block header in flate stream");var z=C;if(-1===(C=n.getByte()))throw new Error("Bad block header in flate stream");if((z|=C<<8)!==(65535&~A)&&(0!==A||0!==z))throw new Error("Bad uncompressed block length in flate stream");this.codeBuf=0,this.codeSize=0;var T=this.bufferLength;t=this.ensureBuffer(T+A);var O=T+A;if(this.bufferLength=O,0===A)-1===n.peekByte()&&(this.eof=!0);else for(var R=T;R<O;++R){if(-1===(C=n.getByte())){this.eof=!0;break}t[R]=C}}},n.prototype.getBits=function(t){for(var e,n=this.stream,r=this.codeSize,i=this.codeBuf;r<t;){if(-1===(e=n.getByte()))throw new Error("Bad encoding in flate stream");i|=e<<r,r+=8}return e=i&(1<<t)-1,this.codeBuf=i>>t,this.codeSize=r-=t,e},n.prototype.getCode=function(t){for(var e,n=this.stream,r=t[0],i=t[1],o=this.codeSize,a=this.codeBuf;o<i&&-1!==(e=n.getByte());)a|=e<<o,o+=8;var s=r[a&(1<<i)-1];"number"==typeof r&&console.log("FLATE:",s);var h=s>>16,l=65535&s;if(h<1||o<h)throw new Error("Bad encoding in flate stream");return this.codeBuf=a>>h,this.codeSize=o-h,l},n.prototype.generateHuffmanTable=function(t){var e,n=t.length,r=0;for(e=0;e<n;++e)t[e]>r&&(r=t[e]);for(var i=1<<r,o=new Int32Array(i),a=1,s=0,h=2;a<=r;++a,s<<=1,h<<=1)for(var l=0;l<n;++l)if(t[l]===a){var u=0,c=s;for(e=0;e<a;++e)u=u<<1|1&c,c>>=1;for(e=u;e<i;e+=h)o[e]=a<<16|l;++s}return[o,r]},n}(gh),Ch=function(t){function n(e,n,r){var i=t.call(this,n)||this;i.stream=e,i.cachedData=0,i.bitsCached=0;for(var o={earlyChange:r,codeLength:9,nextCode:258,dictionaryValues:new Uint8Array(4096),dictionaryLengths:new Uint16Array(4096),dictionaryPrevCodes:new Uint16Array(4096),currentSequence:new Uint8Array(4096),currentSequenceLength:0},a=0;a<256;++a)o.dictionaryValues[a]=a,o.dictionaryLengths[a]=1;return i.lzwState=o,i}return e(n,t),n.prototype.readBlock=function(){var t,e,n,r=1024,i=this.lzwState;if(i){var o=i.earlyChange,a=i.nextCode,s=i.dictionaryValues,h=i.dictionaryLengths,l=i.dictionaryPrevCodes,u=i.codeLength,c=i.prevCode,d=i.currentSequence,f=i.currentSequenceLength,p=0,g=this.bufferLength,v=this.ensureBuffer(this.bufferLength+r);for(t=0;t<512;t++){var y=this.readBits(u),m=f>0;if(!y||y<256)d[0]=y,f=1;else{if(!(y>=258)){if(256===y){u=9,a=258,f=0;continue}this.eof=!0,delete this.lzwState;break}if(y<a)for(e=(f=h[y])-1,n=y;e>=0;e--)d[e]=s[n],n=l[n];else d[f++]=d[0]}if(m&&(l[a]=c,h[a]=h[c]+1,s[a]=d[0],u=++a+o&a+o-1?u:0|Math.min(Math.log(a+o)/.6931471805599453+1,12)),c=y,r<(p+=f)){do{r+=512}while(r<p);v=this.ensureBuffer(this.bufferLength+r)}for(e=0;e<f;e++)v[g++]=d[e]}i.nextCode=a,i.codeLength=u,i.prevCode=c,i.currentSequenceLength=f,this.bufferLength=g}},n.prototype.readBits=function(t){for(var e=this.bitsCached,n=this.cachedData;e<t;){var r=this.stream.getByte();if(-1===r)return this.eof=!0,null;n=n<<8|r,e+=8}return this.bitsCached=e-=t,this.cachedData=n,n>>>e&(1<<t)-1},n}(gh),Ah=function(t){function n(e,n){var r=t.call(this,n)||this;return r.stream=e,r}return e(n,t),n.prototype.readBlock=function(){var t=this.stream.getBytes(2);if(!t||t.length<2||128===t[0])this.eof=!0;else{var e,n=this.bufferLength,r=t[0];if(r<128){if((e=this.ensureBuffer(n+r+1))[n++]=t[1],r>0){var i=this.stream.getBytes(r);e.set(i,n),n+=r}}else{r=257-r;var o=t[1];e=this.ensureBuffer(n+r+1);for(var a=0;a<r;a++)e[n++]=o}this.bufferLength=n}},n}(gh),zh=function(t,e,n){if(e===Co.of("FlateDecode"))return new Fh(t);if(e===Co.of("LZWDecode")){var r=1;if(n instanceof zo){var i=n.lookup(Co.of("EarlyChange"));i instanceof po&&(r=i.asNumber())}return new Ch(t,void 0,r)}if(e===Co.of("ASCII85Decode"))return new yh(t);if(e===Co.of("ASCIIHexDecode"))return new mh(t);if(e===Co.of("RunLengthDecode"))return new Ah(t);throw new Zn(e.asString())},Th=function(t){var e=t.dict,n=t.contents,r=new fh(n),i=e.lookup(Co.of("Filter")),o=e.lookup(Co.of("DecodeParms"));if(i instanceof Co)r=zh(r,i,o);else if(i instanceof go)for(var a=0,s=i.size();a<s;a++)r=zh(r,i.lookup(a,Co),o&&o.lookupMaybe(a,zo));else if(i)throw new Xn([Co,go],i);return r},Oh=function(){function t(t,e,n){this.page=t;var r=null!=e?e:function(t){var e=t.MediaBox();return{left:0,bottom:0,right:e.lookup(2,po).asNumber()-e.lookup(0,po).asNumber(),top:e.lookup(3,po).asNumber()-e.lookup(1,po).asNumber()}}(t);this.width=r.right-r.left,this.height=r.top-r.bottom,this.boundingBox=r,this.transformationMatrix=null!=n?n:function(t){return[1,0,0,1,-t.left,-t.bottom]}(r)}return t.for=function(e,n,o){return r(this,void 0,void 0,(function(){return i(this,(function(r){return[2,new t(e,n,o)]}))}))},t.prototype.embedIntoContext=function(t,e){return r(this,void 0,void 0,(function(){var n,r,o,a,s,h,l,u,c,d;return i(this,(function(i){if(n=this.page.normalizedEntries(),r=n.Contents,o=n.Resources,!r)throw new Qn;return a=this.decodeContents(r),s=this.boundingBox,h=s.left,l=s.bottom,u=s.right,c=s.top,d=t.flateStream(a,{Type:"XObject",Subtype:"Form",FormType:1,BBox:[h,l,u,c],Matrix:this.transformationMatrix,Resources:o}),e?(t.assign(e,d),[2,e]):[2,t.register(d)]}))}))},t.prototype.decodeContents=function(t){for(var e=Uint8Array.of(wr.Newline),n=[],r=0,i=t.size();r<i;r++){var o=t.lookup(r,To),a=void 0;if(o instanceof Oo)a=Th(o).decode();else{if(!(o instanceof Io))throw new $n(o);a=o.getUnencodedContents()}n.push(a,e)}return M.apply(void 0,n)},t}(),Rh=function(t,e){if(void 0!==t)return e[t]};!function(t){t.UseNone="UseNone",t.UseOutlines="UseOutlines",t.UseThumbs="UseThumbs",t.UseOC="UseOC"}(sh||(sh={})),function(t){t.L2R="L2R",t.R2L="R2L"}(hh||(hh={})),function(t){t.None="None",t.AppDefault="AppDefault"}(lh||(lh={})),function(t){t.Simplex="Simplex",t.DuplexFlipShortEdge="DuplexFlipShortEdge",t.DuplexFlipLongEdge="DuplexFlipLongEdge"}(uh||(uh={}));var Bh,Nh,Ph,Dh,jh=function(){function t(t){this.dict=t}return t.prototype.lookupBool=function(t){var e=this.dict.lookup(Co.of(t));if(e instanceof yo)return e},t.prototype.lookupName=function(t){var e=this.dict.lookup(Co.of(t));if(e instanceof Co)return e},t.prototype.HideToolbar=function(){return this.lookupBool("HideToolbar")},t.prototype.HideMenubar=function(){return this.lookupBool("HideMenubar")},t.prototype.HideWindowUI=function(){return this.lookupBool("HideWindowUI")},t.prototype.FitWindow=function(){return this.lookupBool("FitWindow")},t.prototype.CenterWindow=function(){return this.lookupBool("CenterWindow")},t.prototype.DisplayDocTitle=function(){return this.lookupBool("DisplayDocTitle")},t.prototype.NonFullScreenPageMode=function(){return this.lookupName("NonFullScreenPageMode")},t.prototype.Direction=function(){return this.lookupName("Direction")},t.prototype.PrintScaling=function(){return this.lookupName("PrintScaling")},t.prototype.Duplex=function(){return this.lookupName("Duplex")},t.prototype.PickTrayByPDFSize=function(){return this.lookupBool("PickTrayByPDFSize")},t.prototype.PrintPageRange=function(){var t=this.dict.lookup(Co.of("PrintPageRange"));if(t instanceof go)return t},t.prototype.NumCopies=function(){var t=this.dict.lookup(Co.of("NumCopies"));if(t instanceof po)return t},t.prototype.getHideToolbar=function(){var t,e;return null!==(e=null===(t=this.HideToolbar())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getHideMenubar=function(){var t,e;return null!==(e=null===(t=this.HideMenubar())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getHideWindowUI=function(){var t,e;return null!==(e=null===(t=this.HideWindowUI())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getFitWindow=function(){var t,e;return null!==(e=null===(t=this.FitWindow())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getCenterWindow=function(){var t,e;return null!==(e=null===(t=this.CenterWindow())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getDisplayDocTitle=function(){var t,e;return null!==(e=null===(t=this.DisplayDocTitle())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getNonFullScreenPageMode=function(){var t,e,n=null===(t=this.NonFullScreenPageMode())||void 0===t?void 0:t.decodeText();return null!==(e=Rh(n,sh))&&void 0!==e?e:sh.UseNone},t.prototype.getReadingDirection=function(){var t,e,n=null===(t=this.Direction())||void 0===t?void 0:t.decodeText();return null!==(e=Rh(n,hh))&&void 0!==e?e:hh.L2R},t.prototype.getPrintScaling=function(){var t,e,n=null===(t=this.PrintScaling())||void 0===t?void 0:t.decodeText();return null!==(e=Rh(n,lh))&&void 0!==e?e:lh.AppDefault},t.prototype.getDuplex=function(){var t,e=null===(t=this.Duplex())||void 0===t?void 0:t.decodeText();return Rh(e,uh)},t.prototype.getPickTrayByPDFSize=function(){var t;return null===(t=this.PickTrayByPDFSize())||void 0===t?void 0:t.asBoolean()},t.prototype.getPrintPageRange=function(){var t=this.PrintPageRange();if(!t)return[];for(var e=[],n=0;n<t.size();n+=2){var r=t.lookup(n,po).asNumber(),i=t.lookup(n+1,po).asNumber();e.push({start:r,end:i})}return e},t.prototype.getNumCopies=function(){var t,e;return null!==(e=null===(t=this.NumCopies())||void 0===t?void 0:t.asNumber())&&void 0!==e?e:1},t.prototype.setHideToolbar=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("HideToolbar"),e)},t.prototype.setHideMenubar=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("HideMenubar"),e)},t.prototype.setHideWindowUI=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("HideWindowUI"),e)},t.prototype.setFitWindow=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("FitWindow"),e)},t.prototype.setCenterWindow=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("CenterWindow"),e)},t.prototype.setDisplayDocTitle=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("DisplayDocTitle"),e)},t.prototype.setNonFullScreenPageMode=function(t){zn(t,"nonFullScreenPageMode",sh);var e=Co.of(t);this.dict.set(Co.of("NonFullScreenPageMode"),e)},t.prototype.setReadingDirection=function(t){zn(t,"readingDirection",hh);var e=Co.of(t);this.dict.set(Co.of("Direction"),e)},t.prototype.setPrintScaling=function(t){zn(t,"printScaling",lh);var e=Co.of(t);this.dict.set(Co.of("PrintScaling"),e)},t.prototype.setDuplex=function(t){zn(t,"duplex",uh);var e=Co.of(t);this.dict.set(Co.of("Duplex"),e)},t.prototype.setPickTrayByPDFSize=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("PickTrayByPDFSize"),e)},t.prototype.setPrintPageRange=function(t){Array.isArray(t)||(t=[t]);for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n].start),e.push(t[n].end);jn(e,"printPageRange",["number"]);var i=this.dict.context.obj(e);this.dict.set(Co.of("PrintPageRange"),i)},t.prototype.setNumCopies=function(t){En(t,"numCopies",1,Number.MAX_VALUE),Un(t,"numCopies");var e=this.dict.context.obj(t);this.dict.set(Co.of("NumCopies"),e)},t.fromDict=function(e){return new t(e)},t.create=function(e){return new t(e.obj({}))},t}(),Eh=/\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/,Ih=function(){function t(t,e){this.dict=t,this.ref=e}return t.prototype.T=function(){return this.dict.lookupMaybe(Co.of("T"),ia,Qo)},t.prototype.Ff=function(){var t=this.getInheritableAttribute(Co.of("Ff"));return this.dict.context.lookupMaybe(t,po)},t.prototype.V=function(){var t=this.getInheritableAttribute(Co.of("V"));return this.dict.context.lookup(t)},t.prototype.Kids=function(){return this.dict.lookupMaybe(Co.of("Kids"),go)},t.prototype.DA=function(){var t=this.dict.lookup(Co.of("DA"));if(t instanceof ia||t instanceof Qo)return t},t.prototype.setKids=function(t){this.dict.set(Co.of("Kids"),this.dict.context.obj(t))},t.prototype.getParent=function(){var e=this.dict.get(Co.of("Parent"));if(e instanceof No)return new t(this.dict.lookup(Co.of("Parent"),zo),e)},t.prototype.setParent=function(t){t?this.dict.set(Co.of("Parent"),t):this.dict.delete(Co.of("Parent"))},t.prototype.getFullyQualifiedName=function(){var t=this.getParent();return t?t.getFullyQualifiedName()+"."+this.getPartialName():this.getPartialName()},t.prototype.getPartialName=function(){var t;return null===(t=this.T())||void 0===t?void 0:t.decodeText()},t.prototype.setPartialName=function(t){t?this.dict.set(Co.of("T"),Qo.fromText(t)):this.dict.delete(Co.of("T"))},t.prototype.setDefaultAppearance=function(t){this.dict.set(Co.of("DA"),ia.of(t))},t.prototype.getDefaultAppearance=function(){var t=this.DA();return t instanceof Qo?t.decodeText():null==t?void 0:t.asString()},t.prototype.setFontSize=function(t){var e,n=null!==(e=this.getFullyQualifiedName())&&void 0!==e?e:"",r=this.getDefaultAppearance();if(!r)throw new hr(n);var i=j(r,Eh);if(!i.match)throw new lr(n);var o=r.slice(0,i.pos-i.match[0].length),a=i.pos<=r.length?r.slice(i.pos):"",s=o+" /"+i.match[1]+" "+t+" Tf "+a;this.setDefaultAppearance(s)},t.prototype.getFlags=function(){var t,e;return null!==(e=null===(t=this.Ff())||void 0===t?void 0:t.asNumber())&&void 0!==e?e:0},t.prototype.setFlags=function(t){this.dict.set(Co.of("Ff"),po.of(t))},t.prototype.hasFlag=function(t){return 0!=(this.getFlags()&t)},t.prototype.setFlag=function(t){var e=this.getFlags();this.setFlags(e|t)},t.prototype.clearFlag=function(t){var e=this.getFlags();this.setFlags(e&~t)},t.prototype.setFlagTo=function(t,e){e?this.setFlag(t):this.clearFlag(t)},t.prototype.getInheritableAttribute=function(t){var e;return this.ascend((function(n){e||(e=n.dict.get(t))})),e},t.prototype.ascend=function(t){t(this);var e=this.getParent();e&&e.ascend(t)},t}(),Mh=function(){function t(t){this.dict=t}return t.prototype.W=function(){var t=this.dict.lookup(Co.of("W"));if(t instanceof po)return t},t.prototype.getWidth=function(){var t,e;return null!==(e=null===(t=this.W())||void 0===t?void 0:t.asNumber())&&void 0!==e?e:1},t.prototype.setWidth=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("W"),e)},t.fromDict=function(e){return new t(e)},t}(),Uh=function(){function t(t){this.dict=t}return t.prototype.Rect=function(){return this.dict.lookup(Co.of("Rect"),go)},t.prototype.AP=function(){return this.dict.lookupMaybe(Co.of("AP"),zo)},t.prototype.F=function(){var t=this.dict.lookup(Co.of("F"));return this.dict.context.lookupMaybe(t,po)},t.prototype.getRectangle=function(){var t,e=this.Rect();return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:{x:0,y:0,width:0,height:0}},t.prototype.setRectangle=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o=this.dict.context.obj([e,n,e+r,n+i]);this.dict.set(Co.of("Rect"),o)},t.prototype.getAppearanceState=function(){var t=this.dict.lookup(Co.of("AS"));if(t instanceof Co)return t},t.prototype.setAppearanceState=function(t){this.dict.set(Co.of("AS"),t)},t.prototype.setAppearances=function(t){this.dict.set(Co.of("AP"),t)},t.prototype.ensureAP=function(){var t=this.AP();return t||(t=this.dict.context.obj({}),this.dict.set(Co.of("AP"),t)),t},t.prototype.getNormalAppearance=function(){var t=this.ensureAP().get(Co.of("N"));if(t instanceof No||t instanceof zo)return t;throw new Error("Unexpected N type: "+(null==t?void 0:t.constructor.name))},t.prototype.setNormalAppearance=function(t){this.ensureAP().set(Co.of("N"),t)},t.prototype.setRolloverAppearance=function(t){this.ensureAP().set(Co.of("R"),t)},t.prototype.setDownAppearance=function(t){this.ensureAP().set(Co.of("D"),t)},t.prototype.removeRolloverAppearance=function(){var t=this.AP();null==t||t.delete(Co.of("R"))},t.prototype.removeDownAppearance=function(){var t=this.AP();null==t||t.delete(Co.of("D"))},t.prototype.getAppearances=function(){var t=this.AP();if(t)return{normal:t.lookup(Co.of("N"),zo,To),rollover:t.lookupMaybe(Co.of("R"),zo,To),down:t.lookupMaybe(Co.of("D"),zo,To)}},t.prototype.getFlags=function(){var t,e;return null!==(e=null===(t=this.F())||void 0===t?void 0:t.asNumber())&&void 0!==e?e:0},t.prototype.setFlags=function(t){this.dict.set(Co.of("F"),po.of(t))},t.prototype.hasFlag=function(t){return 0!=(this.getFlags()&t)},t.prototype.setFlag=function(t){var e=this.getFlags();this.setFlags(e|t)},t.prototype.clearFlag=function(t){var e=this.getFlags();this.setFlags(e&~t)},t.prototype.setFlagTo=function(t,e){e?this.setFlag(t):this.clearFlag(t)},t.fromDict=function(e){return new t(e)},t}(),Vh=function(){function t(t){this.dict=t}return t.prototype.R=function(){var t=this.dict.lookup(Co.of("R"));if(t instanceof po)return t},t.prototype.BC=function(){var t=this.dict.lookup(Co.of("BC"));if(t instanceof go)return t},t.prototype.BG=function(){var t=this.dict.lookup(Co.of("BG"));if(t instanceof go)return t},t.prototype.CA=function(){var t=this.dict.lookup(Co.of("CA"));if(t instanceof Qo||t instanceof ia)return t},t.prototype.RC=function(){var t=this.dict.lookup(Co.of("RC"));if(t instanceof Qo||t instanceof ia)return t},t.prototype.AC=function(){var t=this.dict.lookup(Co.of("AC"));if(t instanceof Qo||t instanceof ia)return t},t.prototype.getRotation=function(){var t;return null===(t=this.R())||void 0===t?void 0:t.asNumber()},t.prototype.getBorderColor=function(){var t=this.BC();if(t){for(var e=[],n=0,r=null==t?void 0:t.size();n<r;n++){var i=t.get(n);i instanceof po&&e.push(i.asNumber())}return e}},t.prototype.getBackgroundColor=function(){var t=this.BG();if(t){for(var e=[],n=0,r=null==t?void 0:t.size();n<r;n++){var i=t.get(n);i instanceof po&&e.push(i.asNumber())}return e}},t.prototype.getCaptions=function(){var t=this.CA(),e=this.RC(),n=this.AC();return{normal:null==t?void 0:t.decodeText(),rollover:null==e?void 0:e.decodeText(),down:null==n?void 0:n.decodeText()}},t.prototype.setRotation=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("R"),e)},t.prototype.setBorderColor=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("BC"),e)},t.prototype.setBackgroundColor=function(t){var e=this.dict.context.obj(t);this.dict.set(Co.of("BG"),e)},t.prototype.setCaptions=function(t){var e=Qo.fromText(t.normal);if(this.dict.set(Co.of("CA"),e),t.rollover){var n=Qo.fromText(t.rollover);this.dict.set(Co.of("RC"),n)}else this.dict.delete(Co.of("RC"));if(t.down){var r=Qo.fromText(t.down);this.dict.set(Co.of("AC"),r)}else this.dict.delete(Co.of("AC"))},t.fromDict=function(e){return new t(e)},t}(),Wh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.MK=function(){var t=this.dict.lookup(Co.of("MK"));if(t instanceof zo)return t},n.prototype.BS=function(){var t=this.dict.lookup(Co.of("BS"));if(t instanceof zo)return t},n.prototype.DA=function(){var t=this.dict.lookup(Co.of("DA"));if(t instanceof ia||t instanceof Qo)return t},n.prototype.P=function(){var t=this.dict.get(Co.of("P"));if(t instanceof No)return t},n.prototype.setP=function(t){this.dict.set(Co.of("P"),t)},n.prototype.setDefaultAppearance=function(t){this.dict.set(Co.of("DA"),ia.of(t))},n.prototype.getDefaultAppearance=function(){var t=this.DA();return t instanceof Qo?t.decodeText():null==t?void 0:t.asString()},n.prototype.getAppearanceCharacteristics=function(){var t=this.MK();if(t)return Vh.fromDict(t)},n.prototype.getOrCreateAppearanceCharacteristics=function(){var t=this.MK();if(t)return Vh.fromDict(t);var e=Vh.fromDict(this.dict.context.obj({}));return this.dict.set(Co.of("MK"),e.dict),e},n.prototype.getBorderStyle=function(){var t=this.BS();if(t)return Mh.fromDict(t)},n.prototype.getOrCreateBorderStyle=function(){var t=this.BS();if(t)return Mh.fromDict(t);var e=Mh.fromDict(this.dict.context.obj({}));return this.dict.set(Co.of("BS"),e.dict),e},n.prototype.getOnValue=function(){var t,e=null===(t=this.getAppearances())||void 0===t?void 0:t.normal;if(e instanceof zo)for(var n=e.keys(),r=0,i=n.length;r<i;r++){var o=n[r];if(o!==Co.of("Off"))return o}},n.fromDict=function(t){return new n(t)},n.create=function(t,e){return new n(t.obj({Type:"Annot",Subtype:"Widget",Rect:[0,0,0,0],Parent:e}))},n}(Uh),qh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.FT=function(){var t=this.getInheritableAttribute(Co.of("FT"));return this.dict.context.lookup(t,Co)},n.prototype.getWidgets=function(){var t=this.Kids();if(!t)return[Wh.fromDict(this.dict)];for(var e=new Array(t.size()),n=0,r=t.size();n<r;n++){var i=t.lookup(n,zo);e[n]=Wh.fromDict(i)}return e},n.prototype.addWidget=function(t){this.normalizedEntries().Kids.push(t)},n.prototype.removeWidget=function(t){var e=this.Kids();if(e){if(t<0||t>e.size())throw new or(t,0,e.size());e.remove(t)}else{if(0!==t)throw new or(t,0,0);this.setKids([])}},n.prototype.normalizedEntries=function(){var t=this.Kids();return t||(t=this.dict.context.obj([this.ref]),this.dict.set(Co.of("Kids"),t)),{Kids:t}},n.fromDict=function(t,e){return new n(t,e)},n}(Ih),Kh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.Opt=function(){return this.dict.lookupMaybe(Co.of("Opt"),ia,Qo,go)},n.prototype.setOpt=function(t){this.dict.set(Co.of("Opt"),this.dict.context.obj(t))},n.prototype.getExportValues=function(){var t=this.Opt();if(t){if(t instanceof ia||t instanceof Qo)return[t];for(var e=[],n=0,r=t.size();n<r;n++){var i=t.lookup(n);(i instanceof ia||i instanceof Qo)&&e.push(i)}return e}},n.prototype.removeExportValue=function(t){var e=this.Opt();if(e)if(e instanceof ia||e instanceof Qo){if(0!==t)throw new or(t,0,0);this.setOpt([])}else{if(t<0||t>e.size())throw new or(t,0,e.size());e.remove(t)}},n.prototype.normalizeExportValues=function(){for(var t,e,n,r,i=null!==(t=this.getExportValues())&&void 0!==t?t:[],o=[],a=this.getWidgets(),s=0,h=a.length;s<h;s++){var l=a[s],u=null!==(e=i[s])&&void 0!==e?e:Qo.fromText(null!==(r=null===(n=l.getOnValue())||void 0===n?void 0:n.decodeText())&&void 0!==r?r:"");o.push(u)}this.setOpt(o)},n.prototype.addOpt=function(t,e){var n;this.normalizeExportValues();var r,i=t.decodeText();if(e)for(var o=null!==(n=this.getExportValues())&&void 0!==n?n:[],a=0,s=o.length;a<s;a++){o[a].decodeText()===i&&(r=a)}var h=this.Opt();return h.push(t),null!=r?r:h.size()-1},n.prototype.addWidgetWithOpt=function(t,e,n){var r=this.addOpt(e,n),i=Co.of(String(r));return this.addWidget(t),i},n}(qh),Lh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.setValue=function(t){var e;if(t!==(null!==(e=this.getOnValue())&&void 0!==e?e:Co.of("Yes"))&&t!==Co.of("Off"))throw new ar;this.dict.set(Co.of("V"),t);for(var n=this.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r],a=o.getOnValue()===t?t:Co.of("Off");o.setAppearanceState(a)}},n.prototype.getValue=function(){var t=this.V();return t instanceof Co?t:Co.of("Off")},n.prototype.getOnValue=function(){var t=this.getWidgets()[0];return null==t?void 0:t.getOnValue()},n.fromDict=function(t,e){return new n(t,e)},n.create=function(t){var e=t.obj({FT:"Btn",Kids:[]});return new n(e,t.register(e))},n}(Kh),Gh=function(t){return 1<<t};!function(t){t[t.ReadOnly=Gh(0)]="ReadOnly",t[t.Required=Gh(1)]="Required",t[t.NoExport=Gh(2)]="NoExport"}(Bh||(Bh={})),function(t){t[t.NoToggleToOff=Gh(14)]="NoToggleToOff",t[t.Radio=Gh(15)]="Radio",t[t.PushButton=Gh(16)]="PushButton",t[t.RadiosInUnison=Gh(25)]="RadiosInUnison"}(Nh||(Nh={})),function(t){t[t.Multiline=Gh(12)]="Multiline",t[t.Password=Gh(13)]="Password",t[t.FileSelect=Gh(20)]="FileSelect",t[t.DoNotSpellCheck=Gh(22)]="DoNotSpellCheck",t[t.DoNotScroll=Gh(23)]="DoNotScroll",t[t.Comb=Gh(24)]="Comb",t[t.RichText=Gh(25)]="RichText"}(Ph||(Ph={})),function(t){t[t.Combo=Gh(17)]="Combo",t[t.Edit=Gh(18)]="Edit",t[t.Sort=Gh(19)]="Sort",t[t.MultiSelect=Gh(21)]="MultiSelect",t[t.DoNotSpellCheck=Gh(22)]="DoNotSpellCheck",t[t.CommitOnSelChange=Gh(26)]="CommitOnSelChange"}(Dh||(Dh={}));var Hh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.setValues=function(t){if(this.hasFlag(Dh.Combo)&&!this.hasFlag(Dh.Edit)&&!this.valuesAreValid(t))throw new ar;if(0===t.length&&this.dict.delete(Co.of("V")),1===t.length&&this.dict.set(Co.of("V"),t[0]),t.length>1){if(!this.hasFlag(Dh.MultiSelect))throw new sr;this.dict.set(Co.of("V"),this.dict.context.obj(t))}this.updateSelectedIndices(t)},n.prototype.valuesAreValid=function(t){for(var e=this.getOptions(),n=function(n,r){var i=t[n].decodeText();if(!e.find((function(t){return i===(t.display||t.value).decodeText()})))return{value:!1}},r=0,i=t.length;r<i;r++){var o=n(r);if("object"==typeof o)return o.value}return!0},n.prototype.updateSelectedIndices=function(t){if(t.length>1){for(var e=new Array(t.length),n=this.getOptions(),r=function(r,i){var o=t[r].decodeText();e[r]=n.findIndex((function(t){return o===(t.display||t.value).decodeText()}))},i=0,o=t.length;i<o;i++)r(i);this.dict.set(Co.of("I"),this.dict.context.obj(e.sort()))}else this.dict.delete(Co.of("I"))},n.prototype.getValues=function(){var t=this.V();if(t instanceof ia||t instanceof Qo)return[t];if(t instanceof go){for(var e=[],n=0,r=t.size();n<r;n++){var i=t.lookup(n);(i instanceof ia||i instanceof Qo)&&e.push(i)}return e}return[]},n.prototype.Opt=function(){return this.dict.lookupMaybe(Co.of("Opt"),ia,Qo,go)},n.prototype.setOptions=function(t){for(var e=new Array(t.length),n=0,r=t.length;n<r;n++){var i=t[n],o=i.value,a=i.display;e[n]=this.dict.context.obj([o,a||o])}this.dict.set(Co.of("Opt"),this.dict.context.obj(e))},n.prototype.getOptions=function(){var t=this.Opt();if(t instanceof ia||t instanceof Qo)return[{value:t,display:t}];if(t instanceof go){for(var e=[],n=0,r=t.size();n<r;n++){var i=t.lookup(n);if((i instanceof ia||i instanceof Qo)&&e.push({value:i,display:i}),i instanceof go&&i.size()>0){var o=i.lookup(0,ia,Qo),a=i.lookupMaybe(1,ia,Qo);e.push({value:o,display:a||o})}}return e}return[]},n}(qh),_h=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.fromDict=function(t,e){return new n(t,e)},n.create=function(t){var e=t.obj({FT:"Ch",Ff:Dh.Combo,Kids:[]});return new n(e,t.register(e))},n}(Hh),Xh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.addField=function(t){var e=this.normalizedEntries().Kids;null==e||e.push(t)},n.prototype.normalizedEntries=function(){var t=this.Kids();return t||(t=this.dict.context.obj([]),this.dict.set(Co.of("Kids"),t)),{Kids:t}},n.fromDict=function(t,e){return new n(t,e)},n.create=function(t){var e=t.obj({});return new n(e,t.register(e))},n}(Ih),Zh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.fromDict=function(t,e){return new n(t,e)},n}(qh),Yh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.MaxLen=function(){var t=this.dict.lookup(Co.of("MaxLen"));if(t instanceof po)return t},n.prototype.Q=function(){var t=this.dict.lookup(Co.of("Q"));if(t instanceof po)return t},n.prototype.setMaxLength=function(t){this.dict.set(Co.of("MaxLen"),po.of(t))},n.prototype.removeMaxLength=function(){this.dict.delete(Co.of("MaxLen"))},n.prototype.getMaxLength=function(){var t;return null===(t=this.MaxLen())||void 0===t?void 0:t.asNumber()},n.prototype.setQuadding=function(t){this.dict.set(Co.of("Q"),po.of(t))},n.prototype.getQuadding=function(){var t;return null===(t=this.Q())||void 0===t?void 0:t.asNumber()},n.prototype.setValue=function(t){this.dict.set(Co.of("V"),t)},n.prototype.removeValue=function(){this.dict.delete(Co.of("V"))},n.prototype.getValue=function(){var t=this.V();if(t instanceof ia||t instanceof Qo)return t},n.fromDict=function(t,e){return new n(t,e)},n.create=function(t){var e=t.obj({FT:"Tx",Kids:[]});return new n(e,t.register(e))},n}(qh),Jh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.fromDict=function(t,e){return new n(t,e)},n.create=function(t){var e=t.obj({FT:"Btn",Ff:Nh.PushButton,Kids:[]});return new n(e,t.register(e))},n}(Kh),Qh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.setValue=function(t){if(!this.getOnValues().includes(t)&&t!==Co.of("Off"))throw new ar;this.dict.set(Co.of("V"),t);for(var e=this.getWidgets(),n=0,r=e.length;n<r;n++){var i=e[n],o=i.getOnValue()===t?t:Co.of("Off");i.setAppearanceState(o)}},n.prototype.getValue=function(){var t=this.V();return t instanceof Co?t:Co.of("Off")},n.prototype.getOnValues=function(){for(var t=this.getWidgets(),e=[],n=0,r=t.length;n<r;n++){var i=t[n].getOnValue();i&&e.push(i)}return e},n.fromDict=function(t,e){return new n(t,e)},n.create=function(t){var e=t.obj({FT:"Btn",Ff:Nh.Radio,Kids:[]});return new n(e,t.register(e))},n}(Kh),$h=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.fromDict=function(t,e){return new n(t,e)},n.create=function(t){var e=t.obj({FT:"Ch",Kids:[]});return new n(e,t.register(e))},n}(Hh),tl=function(t){if(!t)return[];for(var e=[],n=0,r=t.size();n<r;n++){var i=t.get(n),o=t.lookup(n);i instanceof No&&o instanceof zo&&e.push([el(o,i),i])}return e},el=function(t,e){return nl(t)?Xh.fromDict(t,e):rl(t,e)},nl=function(t){var e=t.lookup(Co.of("Kids"));if(e instanceof go)for(var n=0,r=e.size();n<r;n++){var i=e.lookup(n);if(i instanceof zo&&i.has(Co.of("T")))return!0}return!1},rl=function(t,e){var n=sl(t,Co.of("FT")),r=t.context.lookup(n,Co);return r===Co.of("Btn")?il(t,e):r===Co.of("Ch")?ol(t,e):r===Co.of("Tx")?Yh.fromDict(t,e):r===Co.of("Sig")?Zh.fromDict(t,e):qh.fromDict(t,e)},il=function(t,e){var n,r=sl(t,Co.of("Ff")),i=t.context.lookupMaybe(r,po),o=null!==(n=null==i?void 0:i.asNumber())&&void 0!==n?n:0;return al(o,Nh.PushButton)?Jh.fromDict(t,e):al(o,Nh.Radio)?Qh.fromDict(t,e):Lh.fromDict(t,e)},ol=function(t,e){var n,r=sl(t,Co.of("Ff")),i=t.context.lookupMaybe(r,po),o=null!==(n=null==i?void 0:i.asNumber())&&void 0!==n?n:0;return al(o,Dh.Combo)?_h.fromDict(t,e):$h.fromDict(t,e)},al=function(t,e){return 0!=(t&e)},sl=function(t,e){var n;return hl(t,(function(t){n||(n=t.get(e))})),n},hl=function(t,e){e(t);var n=t.lookupMaybe(Co.of("Parent"),zo);n&&hl(n,e)},ll=function(){function t(t){this.dict=t}return t.prototype.Fields=function(){var t=this.dict.lookup(Co.of("Fields"));if(t instanceof go)return t},t.prototype.getFields=function(){for(var t=this.normalizedEntries().Fields,e=new Array(t.size()),n=0,r=t.size();n<r;n++){var i=t.get(n),o=t.lookup(n,zo);e[n]=[el(o,i),i]}return e},t.prototype.getAllFields=function(){var t=[],e=function(n){if(n)for(var r=0,i=n.length;r<i;r++){var o=n[r];t.push(o);var a=o[0];a instanceof Xh&&e(tl(a.Kids()))}};return e(this.getFields()),t},t.prototype.addField=function(t){var e=this.normalizedEntries().Fields;null==e||e.push(t)},t.prototype.removeField=function(t){var e=t.getParent(),n=void 0===e?this.normalizedEntries().Fields:e.Kids(),r=null==n?void 0:n.indexOf(t.ref);if(void 0===n||void 0===r)throw new Error("Tried to remove inexistent field "+t.getFullyQualifiedName());n.remove(r),void 0!==e&&0===n.size()&&this.removeField(e)},t.prototype.normalizedEntries=function(){var t=this.Fields();return t||(t=this.dict.context.obj([]),this.dict.set(Co.of("Fields"),t)),{Fields:t}},t.fromDict=function(e){return new t(e)},t.create=function(e){return new t(e.obj({Fields:[]}))},t}(),ul=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.Pages=function(){return this.lookup(Co.of("Pages"),zo)},n.prototype.AcroForm=function(){return this.lookupMaybe(Co.of("AcroForm"),zo)},n.prototype.getAcroForm=function(){var t=this.AcroForm();if(t)return ll.fromDict(t)},n.prototype.getOrCreateAcroForm=function(){var t=this.getAcroForm();if(!t){t=ll.create(this.context);var e=this.context.register(t.dict);this.set(Co.of("AcroForm"),e)}return t},n.prototype.ViewerPreferences=function(){return this.lookupMaybe(Co.of("ViewerPreferences"),zo)},n.prototype.getViewerPreferences=function(){var t=this.ViewerPreferences();if(t)return jh.fromDict(t)},n.prototype.getOrCreateViewerPreferences=function(){var t=this.getViewerPreferences();if(!t){t=jh.create(this.context);var e=this.context.register(t.dict);this.set(Co.of("ViewerPreferences"),e)}return t},n.prototype.insertLeafNode=function(t,e){var n=this.get(Co.of("Pages"));return this.Pages().insertLeafNode(t,e)||n},n.prototype.removeLeafNode=function(t){this.Pages().removeLeafNode(t)},n.withContextAndPages=function(t,e){var r=new Map;return r.set(Co.of("Type"),Co.of("Catalog")),r.set(Co.of("Pages"),e),new n(r,t)},n.fromMapWithContext=function(t,e){return new n(t,e)},n}(zo),cl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.Parent=function(){return this.lookup(Co.of("Parent"))},n.prototype.Kids=function(){return this.lookup(Co.of("Kids"),go)},n.prototype.Count=function(){return this.lookup(Co.of("Count"),po)},n.prototype.pushTreeNode=function(t){this.Kids().push(t)},n.prototype.pushLeafNode=function(t){var e=this.Kids();this.insertLeafKid(e.size(),t)},n.prototype.insertLeafNode=function(t,e){var r=this.Kids(),i=this.Count().asNumber();if(e>i)throw new rr(e,i);for(var o=e,a=0,s=r.size();a<s;a++){if(0===o)return void this.insertLeafKid(a,t);var h=r.get(a),l=this.context.lookup(h);if(l instanceof n){if(l.Count().asNumber()>o)return l.insertLeafNode(t,o)||h;o-=l.Count().asNumber()}l instanceof Wo&&(o-=1)}if(0!==o)throw new ir(e,"insertLeafNode");this.insertLeafKid(r.size(),t)},n.prototype.removeLeafNode=function(t,e){void 0===e&&(e=!0);var r=this.Kids(),i=this.Count().asNumber();if(t>=i)throw new rr(t,i);for(var o=t,a=0,s=r.size();a<s;a++){var h=r.get(a),l=this.context.lookup(h);if(l instanceof n){if(l.Count().asNumber()>o)return l.removeLeafNode(o,e),void(e&&0===l.Kids().size()&&r.remove(a));o-=l.Count().asNumber()}if(l instanceof Wo){if(0===o)return void this.removeKid(a);o-=1}}throw new ir(t,"removeLeafNode")},n.prototype.ascend=function(t){t(this);var e=this.Parent();e&&e.ascend(t)},n.prototype.traverse=function(t){for(var e=this.Kids(),r=0,i=e.size();r<i;r++){var o=e.get(r),a=this.context.lookup(o);a instanceof n&&a.traverse(t),t(a,o)}},n.prototype.insertLeafKid=function(t,e){var n=this.Kids();this.ascend((function(t){var e=t.Count().asNumber()+1;t.set(Co.of("Count"),po.of(e))})),n.insert(t,e)},n.prototype.removeKid=function(t){var e=this.Kids();e.lookup(t)instanceof Wo&&this.ascend((function(t){var e=t.Count().asNumber()-1;t.set(Co.of("Count"),po.of(e))})),e.remove(t)},n.withContext=function(t,e){var r=new Map;return r.set(Co.of("Type"),Co.of("Pages")),r.set(Co.of("Kids"),t.obj([])),r.set(Co.of("Count"),t.obj(0)),e&&r.set(Co.of("Parent"),e),new n(r,t)},n.fromMapWithContext=function(t,e){return new n(t,e)},n}(zo),dl=new Uint8Array(256);dl[wr.Zero]=1,dl[wr.One]=1,dl[wr.Two]=1,dl[wr.Three]=1,dl[wr.Four]=1,dl[wr.Five]=1,dl[wr.Six]=1,dl[wr.Seven]=1,dl[wr.Eight]=1,dl[wr.Nine]=1;var fl=new Uint8Array(256);fl[wr.Period]=1,fl[wr.Plus]=1,fl[wr.Minus]=1;for(var pl=new Uint8Array(256),gl=0;gl<256;gl++)pl[gl]=dl[gl]||fl[gl]?1:0;var vl,yl=wr.Newline,ml=wr.CarriageReturn,bl=function(){function t(t,e){void 0===e&&(e=!1),this.bytes=t,this.capNumbers=e}return t.prototype.parseRawInt=function(){for(var t="";!this.bytes.done();){var e=this.bytes.peek();if(!dl[e])break;t+=m(this.bytes.next())}var n=Number(t);if(!t||!isFinite(n))throw new ur(this.bytes.position(),t);return n},t.prototype.parseRawNumber=function(){for(var t="";!this.bytes.done();){var e=this.bytes.peek();if(!pl[e])break;if(t+=m(this.bytes.next()),e===wr.Period)break}for(;!this.bytes.done();){e=this.bytes.peek();if(!dl[e])break;t+=m(this.bytes.next())}var n=Number(t);if(!t||!isFinite(n))throw new ur(this.bytes.position(),t);if(n>Number.MAX_SAFE_INTEGER){if(this.capNumbers){var r="Parsed number that is too large for some PDF readers: "+t+", using Number.MAX_SAFE_INTEGER instead.";return console.warn(r),Number.MAX_SAFE_INTEGER}r="Parsed number that is too large for some PDF readers: "+t+", not capping.";console.warn(r)}return n},t.prototype.skipWhitespace=function(){for(;!this.bytes.done()&&bo[this.bytes.peek()];)this.bytes.next()},t.prototype.skipLine=function(){for(;!this.bytes.done();){var t=this.bytes.peek();if(t===yl||t===ml)return;this.bytes.next()}},t.prototype.skipComment=function(){if(this.bytes.peek()!==wr.Percent)return!1;for(;!this.bytes.done();){var t=this.bytes.peek();if(t===yl||t===ml)return!0;this.bytes.next()}return!0},t.prototype.skipWhitespaceAndComments=function(){for(this.skipWhitespace();this.skipComment();)this.skipWhitespace()},t.prototype.matchKeyword=function(t){for(var e=this.bytes.offset(),n=0,r=t.length;n<r;n++)if(this.bytes.done()||this.bytes.next()!==t[n])return this.bytes.moveTo(e),!1;return!0},t}(),wl=function(){function t(t){this.idx=0,this.line=0,this.column=0,this.bytes=t,this.length=this.bytes.length}return t.prototype.moveTo=function(t){this.idx=t},t.prototype.next=function(){var t=this.bytes[this.idx++];return t===wr.Newline?(this.line+=1,this.column=0):this.column+=1,t},t.prototype.assertNext=function(t){if(this.peek()!==t)throw new dr(this.position(),t,this.peek());return this.next()},t.prototype.peek=function(){return this.bytes[this.idx]},t.prototype.peekAhead=function(t){return this.bytes[this.idx+t]},t.prototype.peekAt=function(t){return this.bytes[t]},t.prototype.done=function(){return this.idx>=this.length},t.prototype.offset=function(){return this.idx},t.prototype.slice=function(t,e){return this.bytes.slice(t,e)},t.prototype.position=function(){return{line:this.line,column:this.column,offset:this.idx}},t.of=function(e){return new t(e)},t.fromPDFRawStream=function(e){return t.of(Th(e).decode())},t}(),xl=wr.Space,kl=wr.CarriageReturn,Sl=wr.Newline,Fl=[wr.s,wr.t,wr.r,wr.e,wr.a,wr.m],Cl=[wr.e,wr.n,wr.d,wr.s,wr.t,wr.r,wr.e,wr.a,wr.m],Al={header:[wr.Percent,wr.P,wr.D,wr.F,wr.Dash],eof:[wr.Percent,wr.Percent,wr.E,wr.O,wr.F],obj:[wr.o,wr.b,wr.j],endobj:[wr.e,wr.n,wr.d,wr.o,wr.b,wr.j],xref:[wr.x,wr.r,wr.e,wr.f],trailer:[wr.t,wr.r,wr.a,wr.i,wr.l,wr.e,wr.r],startxref:[wr.s,wr.t,wr.a,wr.r,wr.t,wr.x,wr.r,wr.e,wr.f],true:[wr.t,wr.r,wr.u,wr.e],false:[wr.f,wr.a,wr.l,wr.s,wr.e],null:[wr.n,wr.u,wr.l,wr.l],stream:Fl,streamEOF1:o(Fl,[xl,kl,Sl]),streamEOF2:o(Fl,[kl,Sl]),streamEOF3:o(Fl,[kl]),streamEOF4:o(Fl,[Sl]),endstream:Cl,EOF1endstream:o([kl,Sl],Cl),EOF2endstream:o([kl],Cl),EOF3endstream:o([Sl],Cl)},zl=function(t){function n(e,n,r){void 0===r&&(r=!1);var i=t.call(this,e,r)||this;return i.context=n,i}return e(n,t),n.prototype.parseObject=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(Al.true))return yo.True;if(this.matchKeyword(Al.false))return yo.False;if(this.matchKeyword(Al.null))return Ao;var t=this.bytes.peek();if(t===wr.LessThan&&this.bytes.peekAhead(1)===wr.LessThan)return this.parseDictOrStream();if(t===wr.LessThan)return this.parseHexString();if(t===wr.LeftParen)return this.parseString();if(t===wr.ForwardSlash)return this.parseName();if(t===wr.LeftSquareBracket)return this.parseArray();if(pl[t])return this.parseNumberOrRef();throw new fr(this.bytes.position(),t)},n.prototype.parseNumberOrRef=function(){var t=this.parseRawNumber();this.skipWhitespaceAndComments();var e=this.bytes.offset();if(dl[this.bytes.peek()]){var n=this.parseRawNumber();if(this.skipWhitespaceAndComments(),this.bytes.peek()===wr.R)return this.bytes.assertNext(wr.R),No.of(t,n)}return this.bytes.moveTo(e),po.of(t)},n.prototype.parseHexString=function(){var t="";for(this.bytes.assertNext(wr.LessThan);!this.bytes.done()&&this.bytes.peek()!==wr.GreaterThan;)t+=m(this.bytes.next());return this.bytes.assertNext(wr.GreaterThan),Qo.of(t)},n.prototype.parseString=function(){for(var t=0,e=!1,n="";!this.bytes.done();){var r=this.bytes.next();if(n+=m(r),e||(r===wr.LeftParen&&(t+=1),r===wr.RightParen&&(t-=1)),r===wr.BackSlash?e=!e:e&&(e=!1),0===t)return ia.of(n.substring(1,n.length-1))}throw new vr(this.bytes.position())},n.prototype.parseName=function(){this.bytes.assertNext(wr.ForwardSlash);for(var t="";!this.bytes.done();){var e=this.bytes.peek();if(bo[e]||mo[e])break;t+=m(e),this.bytes.next()}return Co.of(t)},n.prototype.parseArray=function(){this.bytes.assertNext(wr.LeftSquareBracket),this.skipWhitespaceAndComments();for(var t=go.withContext(this.context);this.bytes.peek()!==wr.RightSquareBracket;){var e=this.parseObject();t.push(e),this.skipWhitespaceAndComments()}return this.bytes.assertNext(wr.RightSquareBracket),t},n.prototype.parseDict=function(){this.bytes.assertNext(wr.LessThan),this.bytes.assertNext(wr.LessThan),this.skipWhitespaceAndComments();for(var t=new Map;!this.bytes.done()&&this.bytes.peek()!==wr.GreaterThan&&this.bytes.peekAhead(1)!==wr.GreaterThan;){var e=this.parseName(),n=this.parseObject();t.set(e,n),this.skipWhitespaceAndComments()}this.skipWhitespaceAndComments(),this.bytes.assertNext(wr.GreaterThan),this.bytes.assertNext(wr.GreaterThan);var r=t.get(Co.of("Type"));return r===Co.of("Catalog")?ul.fromMapWithContext(t,this.context):r===Co.of("Pages")?cl.fromMapWithContext(t,this.context):r===Co.of("Page")?Wo.fromMapWithContext(t,this.context):zo.fromMapWithContext(t,this.context)},n.prototype.parseDictOrStream=function(){var t=this.bytes.position(),e=this.parseDict();if(this.skipWhitespaceAndComments(),!(this.matchKeyword(Al.streamEOF1)||this.matchKeyword(Al.streamEOF2)||this.matchKeyword(Al.streamEOF3)||this.matchKeyword(Al.streamEOF4)||this.matchKeyword(Al.stream)))return e;var n,r=this.bytes.offset(),i=e.get(Co.of("Length"));i instanceof po?(n=r+i.asNumber(),this.bytes.moveTo(n),this.skipWhitespaceAndComments(),this.matchKeyword(Al.endstream)||(this.bytes.moveTo(r),n=this.findEndOfStreamFallback(t))):n=this.findEndOfStreamFallback(t);var o=this.bytes.slice(r,n);return Oo.of(e,o)},n.prototype.findEndOfStreamFallback=function(t){for(var e=1,n=this.bytes.offset();!this.bytes.done()&&(n=this.bytes.offset(),this.matchKeyword(Al.stream)?e+=1:this.matchKeyword(Al.EOF1endstream)||this.matchKeyword(Al.EOF2endstream)||this.matchKeyword(Al.EOF3endstream)||this.matchKeyword(Al.endstream)?e-=1:this.bytes.next(),0!==e););if(0!==e)throw new gr(t);return n},n.forBytes=function(t,e,r){return new n(wl.of(t),e,r)},n.forByteStream=function(t,e,r){return void 0===r&&(r=!1),new n(t,e,r)},n}(bl),Tl=function(t){function n(e,n){var r=t.call(this,wl.fromPDFRawStream(e),e.dict.context)||this,i=e.dict;return r.alreadyParsed=!1,r.shouldWaitForTick=n||function(){return!1},r.firstOffset=i.lookup(Co.of("First"),po).asNumber(),r.objectCount=i.lookup(Co.of("N"),po).asNumber(),r}return e(n,t),n.prototype.parseIntoContext=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,o,a,s,h;return i(this,(function(i){switch(i.label){case 0:if(this.alreadyParsed)throw new Yn("PDFObjectStreamParser","parseIntoContext");this.alreadyParsed=!0,t=this.parseOffsetsAndObjectNumbers(),e=0,n=t.length,i.label=1;case 1:return e<n?(r=t[e],o=r.objectNumber,a=r.offset,this.bytes.moveTo(this.firstOffset+a),s=this.parseObject(),h=No.of(o,0),this.context.assign(h,s),this.shouldWaitForTick()?[4,Z()]:[3,3]):[3,4];case 2:i.sent(),i.label=3;case 3:return e++,[3,1];case 4:return[2]}}))}))},n.prototype.parseOffsetsAndObjectNumbers=function(){for(var t=[],e=0,n=this.objectCount;e<n;e++){this.skipWhitespaceAndComments();var r=this.parseRawInt();this.skipWhitespaceAndComments();var i=this.parseRawInt();t.push({objectNumber:r,offset:i})}return t},n.forStream=function(t,e){return new n(t,e)},n}(zl),Ol=function(){function t(t){this.alreadyParsed=!1,this.dict=t.dict,this.bytes=wl.fromPDFRawStream(t),this.context=this.dict.context;var e=this.dict.lookup(Co.of("Size"),po),n=this.dict.lookup(Co.of("Index"));if(n instanceof go){this.subsections=[];for(var r=0,i=n.size();r<i;r+=2){var o=n.lookup(r+0,po).asNumber(),a=n.lookup(r+1,po).asNumber();this.subsections.push({firstObjectNumber:o,length:a})}}else this.subsections=[{firstObjectNumber:0,length:e.asNumber()}];var s=this.dict.lookup(Co.of("W"),go);this.byteWidths=[-1,-1,-1];for(r=0,i=s.size();r<i;r++)this.byteWidths[r]=s.lookup(r,po).asNumber()}return t.prototype.parseIntoContext=function(){if(this.alreadyParsed)throw new Yn("PDFXRefStreamParser","parseIntoContext");return this.alreadyParsed=!0,this.context.trailerInfo={Root:this.dict.get(Co.of("Root")),Encrypt:this.dict.get(Co.of("Encrypt")),Info:this.dict.get(Co.of("Info")),ID:this.dict.get(Co.of("ID"))},this.parseEntries()},t.prototype.parseEntries=function(){for(var t=[],e=this.byteWidths,n=e[0],r=e[1],i=e[2],o=0,a=this.subsections.length;o<a;o++)for(var s=this.subsections[o],h=s.firstObjectNumber,l=s.length,u=0;u<l;u++){for(var c=0,d=0,f=n;d<f;d++)c=c<<8|this.bytes.next();var p=0;for(d=0,f=r;d<f;d++)p=p<<8|this.bytes.next();var g=0;for(d=0,f=i;d<f;d++)g=g<<8|this.bytes.next();0===n&&(c=1);var v=h+u,y={ref:No.of(v,g),offset:p,deleted:0===c,inObjectStream:2===c};t.push(y)}return t},t.forStream=function(e){return new t(e)},t}(),Rl=function(t){function n(e,n,r,i){void 0===n&&(n=1/0),void 0===r&&(r=!1),void 0===i&&(i=!1);var o=t.call(this,wl.of(e),Vo.create(),i)||this;return o.alreadyParsed=!1,o.parsedObjects=0,o.shouldWaitForTick=function(){return o.parsedObjects+=1,o.parsedObjects%o.objectsPerTick==0},o.objectsPerTick=n,o.throwOnInvalidObject=r,o}return e(n,t),n.prototype.parseDocument=function(){return r(this,void 0,void 0,(function(){var t,e;return i(this,(function(n){switch(n.label){case 0:if(this.alreadyParsed)throw new Yn("PDFParser","parseDocument");this.alreadyParsed=!0,this.context.header=this.parseHeader(),n.label=1;case 1:return this.bytes.done()?[3,3]:[4,this.parseDocumentSection()];case 2:if(n.sent(),(e=this.bytes.offset())===t)throw new yr(this.bytes.position());return t=e,[3,1];case 3:return this.maybeRecoverRoot(),this.context.lookup(No.of(0))&&(console.warn("Removing parsed object: 0 0 R"),this.context.delete(No.of(0))),[2,this.context]}}))}))},n.prototype.maybeRecoverRoot=function(){var t=function(t){return t instanceof zo&&t.lookup(Co.of("Type"))===Co.of("Catalog")};if(!t(this.context.lookup(this.context.trailerInfo.Root)))for(var e=this.context.enumerateIndirectObjects(),n=0,r=e.length;n<r;n++){var i=e[n],o=i[0];t(i[1])&&(this.context.trailerInfo.Root=o)}},n.prototype.parseHeader=function(){for(;!this.bytes.done();){if(this.matchKeyword(Al.header)){var t=this.parseRawInt();this.bytes.assertNext(wr.Period);var e=this.parseRawInt(),n=co.forVersion(t,e);return this.skipBinaryHeaderComment(),n}this.bytes.next()}throw new mr(this.bytes.position())},n.prototype.parseIndirectObjectHeader=function(){this.skipWhitespaceAndComments();var t=this.parseRawInt();this.skipWhitespaceAndComments();var e=this.parseRawInt();if(this.skipWhitespaceAndComments(),!this.matchKeyword(Al.obj))throw new br(this.bytes.position(),Al.obj);return No.of(t,e)},n.prototype.matchIndirectObjectHeader=function(){var t=this.bytes.offset();try{return this.parseIndirectObjectHeader(),!0}catch(e){return this.bytes.moveTo(t),!1}},n.prototype.parseIndirectObject=function(){return r(this,void 0,void 0,(function(){var t,e;return i(this,(function(n){switch(n.label){case 0:return t=this.parseIndirectObjectHeader(),this.skipWhitespaceAndComments(),e=this.parseObject(),this.skipWhitespaceAndComments(),this.matchKeyword(Al.endobj),e instanceof Oo&&e.dict.lookup(Co.of("Type"))===Co.of("ObjStm")?[4,Tl.forStream(e,this.shouldWaitForTick).parseIntoContext()]:[3,2];case 1:return n.sent(),[3,3];case 2:e instanceof Oo&&e.dict.lookup(Co.of("Type"))===Co.of("XRef")?Ol.forStream(e).parseIntoContext():this.context.assign(t,e),n.label=3;case 3:return[2,t]}}))}))},n.prototype.tryToParseInvalidIndirectObject=function(){var t=this.bytes.position(),e="Trying to parse invalid object: "+JSON.stringify(t)+")";if(this.throwOnInvalidObject)throw new Error(e);console.warn(e);var n=this.parseIndirectObjectHeader();console.warn("Invalid object ref: "+n),this.skipWhitespaceAndComments();for(var r=this.bytes.offset(),i=!0;!this.bytes.done()&&(this.matchKeyword(Al.endobj)&&(i=!1),i);)this.bytes.next();if(i)throw new pr(t);var o=this.bytes.offset()-Al.endobj.length,a=Xo.of(this.bytes.slice(r,o));return this.context.assign(n,a),n},n.prototype.parseIndirectObjects=function(){return r(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:this.skipWhitespaceAndComments(),e.label=1;case 1:if(this.bytes.done()||!dl[this.bytes.peek()])return[3,8];t=this.bytes.offset(),e.label=2;case 2:return e.trys.push([2,4,,5]),[4,this.parseIndirectObject()];case 3:return e.sent(),[3,5];case 4:return e.sent(),this.bytes.moveTo(t),this.tryToParseInvalidIndirectObject(),[3,5];case 5:return this.skipWhitespaceAndComments(),this.skipJibberish(),this.shouldWaitForTick()?[4,Z()]:[3,7];case 6:e.sent(),e.label=7;case 7:return[3,1];case 8:return[2]}}))}))},n.prototype.maybeParseCrossRefSection=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(Al.xref)){this.skipWhitespaceAndComments();for(var t=-1,e=Ko.createEmpty();!this.bytes.done()&&dl[this.bytes.peek()];){var n=this.parseRawInt();this.skipWhitespaceAndComments();var r=this.parseRawInt();this.skipWhitespaceAndComments();var i=this.bytes.peek();if(i===wr.n||i===wr.f){var o=No.of(t,r);this.bytes.next()===wr.n?e.addEntry(o,n):e.addDeletedEntry(o,n),t+=1}else t=n;this.skipWhitespaceAndComments()}return e}},n.prototype.maybeParseTrailerDict=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(Al.trailer)){this.skipWhitespaceAndComments();var t=this.parseDict(),e=this.context;e.trailerInfo={Root:t.get(Co.of("Root"))||e.trailerInfo.Root,Encrypt:t.get(Co.of("Encrypt"))||e.trailerInfo.Encrypt,Info:t.get(Co.of("Info"))||e.trailerInfo.Info,ID:t.get(Co.of("ID"))||e.trailerInfo.ID}}},n.prototype.maybeParseTrailer=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(Al.startxref)){this.skipWhitespaceAndComments();var t=this.parseRawInt();return this.skipWhitespace(),this.matchKeyword(Al.eof),this.skipWhitespaceAndComments(),this.matchKeyword(Al.eof),this.skipWhitespaceAndComments(),Lo.forLastCrossRefSectionOffset(t)}},n.prototype.parseDocumentSection=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.parseIndirectObjects()];case 1:return t.sent(),this.maybeParseCrossRefSection(),this.maybeParseTrailerDict(),this.maybeParseTrailer(),this.skipJibberish(),[2]}}))}))},n.prototype.skipJibberish=function(){for(this.skipWhitespaceAndComments();!this.bytes.done();){var t=this.bytes.offset(),e=this.bytes.peek();if(e>=wr.Space&&e<=wr.Tilde&&(this.matchKeyword(Al.xref)||this.matchKeyword(Al.trailer)||this.matchKeyword(Al.startxref)||this.matchIndirectObjectHeader())){this.bytes.moveTo(t);break}this.bytes.next()}},n.prototype.skipBinaryHeaderComment=function(){this.skipWhitespaceAndComments();try{var t=this.bytes.offset();this.parseIndirectObjectHeader(),this.bytes.moveTo(t)}catch(t){this.bytes.next(),this.skipWhitespaceAndComments()}},n.forBytesWithOptions=function(t,e,r,i){return new n(t,e,r,i)},n}(zl),Bl=function(t){return 1<<t};!function(t){t[t.Invisible=Bl(0)]="Invisible",t[t.Hidden=Bl(1)]="Hidden",t[t.Print=Bl(2)]="Print",t[t.NoZoom=Bl(3)]="NoZoom",t[t.NoRotate=Bl(4)]="NoRotate",t[t.NoView=Bl(5)]="NoView",t[t.ReadOnly=Bl(6)]="ReadOnly",t[t.Locked=Bl(7)]="Locked",t[t.ToggleNoView=Bl(8)]="ToggleNoView",t[t.LockedContents=Bl(9)]="LockedContents"}(vl||(vl={}));var Nl,Pl=function(t){return t instanceof Co?t:Co.of(t)},Dl=function(t){return t instanceof po?t:po.of(t)},jl=function(t){return t instanceof po?t.asNumber():t};!function(t){t.Degrees="degrees",t.Radians="radians"}(Nl||(Nl={}));var El,Il=function(t){return Pn(t,"radianAngle",["number"]),{type:Nl.Radians,angle:t}},Ml=function(t){return Pn(t,"degreeAngle",["number"]),{type:Nl.Degrees,angle:t}},Ul=Nl.Radians,Vl=Nl.Degrees,Wl=function(t){return t*Math.PI/180},ql=function(t){return 180*t/Math.PI},Kl=function(t){return t.type===Ul?t.angle:t.type===Vl?Wl(t.angle):pt("Invalid rotation: "+JSON.stringify(t))},Ll=function(t){return t.type===Ul?ql(t.angle):t.type===Vl?t.angle:pt("Invalid rotation: "+JSON.stringify(t))},Gl=function(t){void 0===t&&(t=0);var e=t/90%4;return 0===e?0:1===e?90:2===e?180:3===e?270:0},Hl=function(t,e){void 0===e&&(e=0);var n=Gl(e);return 90===n||270===n?{width:t.height,height:t.width}:{width:t.width,height:t.height}},_l=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=0);var r=t.x,i=t.y,o=t.width,a=t.height,s=Gl(n),h=e/2;return 0===s?{x:r-h,y:i-h,width:o,height:a}:90===s?{x:r-a+h,y:i-h,width:a,height:o}:180===s?{x:r-o+h,y:i-a+h,width:o,height:a}:270===s?{x:r-h,y:i-o+h,width:a,height:o}:{x:r-h,y:i-h,width:o,height:a}},Xl=function(){return Po.of(jo.ClipNonZero)},Zl=function(){return Po.of(jo.ClipEvenOdd)},Yl=Math.cos,Jl=Math.sin,Ql=Math.tan,$l=function(t,e,n,r,i,o){return Po.of(jo.ConcatTransformationMatrix,[Dl(t),Dl(e),Dl(n),Dl(r),Dl(i),Dl(o)])},tu=function(t,e){return $l(1,0,0,1,t,e)},eu=function(t,e){return $l(t,0,0,e,0,0)},nu=function(t){return $l(Yl(jl(t)),Jl(jl(t)),-Jl(jl(t)),Yl(jl(t)),0,0)},ru=function(t){return nu(Wl(jl(t)))},iu=function(t,e){return $l(1,Ql(jl(t)),Ql(jl(e)),1,0,0)},ou=function(t,e){return iu(Wl(jl(t)),Wl(jl(e)))},au=function(t,e){return Po.of(jo.SetLineDashPattern,["["+t.map(Dl).join(" ")+"]",Dl(e)])},su=function(){return au([],0)};!function(t){t[t.Butt=0]="Butt",t[t.Round=1]="Round",t[t.Projecting=2]="Projecting"}(El||(El={}));var hu,lu=function(t){return Po.of(jo.SetLineCapStyle,[Dl(t)])};!function(t){t[t.Miter=0]="Miter",t[t.Round=1]="Round",t[t.Bevel=2]="Bevel"}(hu||(hu={}));var uu,cu=function(t){return Po.of(jo.SetLineJoinStyle,[Dl(t)])},du=function(t){return Po.of(jo.SetGraphicsStateParams,[Pl(t)])},fu=function(){return Po.of(jo.PushGraphicsState)},pu=function(){return Po.of(jo.PopGraphicsState)},gu=function(t){return Po.of(jo.SetLineWidth,[Dl(t)])},vu=function(t,e,n,r,i,o){return Po.of(jo.AppendBezierCurve,[Dl(t),Dl(e),Dl(n),Dl(r),Dl(i),Dl(o)])},yu=function(t,e,n,r){return Po.of(jo.CurveToReplicateInitialPoint,[Dl(t),Dl(e),Dl(n),Dl(r)])},mu=function(){return Po.of(jo.ClosePath)},bu=function(t,e){return Po.of(jo.MoveTo,[Dl(t),Dl(e)])},wu=function(t,e){return Po.of(jo.LineTo,[Dl(t),Dl(e)])},xu=function(t,e,n,r){return Po.of(jo.AppendRectangle,[Dl(t),Dl(e),Dl(n),Dl(r)])},ku=function(t,e,n){return xu(t,e,n,n)},Su=function(){return Po.of(jo.StrokePath)},Fu=function(){return Po.of(jo.FillNonZero)},Cu=function(){return Po.of(jo.FillNonZeroAndStroke)},Au=function(){return Po.of(jo.EndPath)},zu=function(){return Po.of(jo.NextLine)},Tu=function(t,e){return Po.of(jo.MoveText,[Dl(t),Dl(e)])},Ou=function(t){return Po.of(jo.ShowText,[t])},Ru=function(){return Po.of(jo.BeginText)},Bu=function(){return Po.of(jo.EndText)},Nu=function(t,e){return Po.of(jo.SetFontAndSize,[Pl(t),Dl(e)])},Pu=function(t){return Po.of(jo.SetCharacterSpacing,[Dl(t)])},Du=function(t){return Po.of(jo.SetWordSpacing,[Dl(t)])},ju=function(t){return Po.of(jo.SetTextHorizontalScaling,[Dl(t)])},Eu=function(t){return Po.of(jo.SetTextLineHeight,[Dl(t)])},Iu=function(t){return Po.of(jo.SetTextRise,[Dl(t)])};!function(t){t[t.Fill=0]="Fill",t[t.Outline=1]="Outline",t[t.FillAndOutline=2]="FillAndOutline",t[t.Invisible=3]="Invisible",t[t.FillAndClip=4]="FillAndClip",t[t.OutlineAndClip=5]="OutlineAndClip",t[t.FillAndOutlineAndClip=6]="FillAndOutlineAndClip",t[t.Clip=7]="Clip"}(uu||(uu={}));var Mu,Uu=function(t){return Po.of(jo.SetTextRenderingMode,[Dl(t)])},Vu=function(t,e,n,r,i,o){return Po.of(jo.SetTextMatrix,[Dl(t),Dl(e),Dl(n),Dl(r),Dl(i),Dl(o)])},Wu=function(t,e,n,r,i){return Vu(Yl(jl(t)),Jl(jl(t))+Ql(jl(e)),-Jl(jl(t))+Ql(jl(n)),Yl(jl(t)),r,i)},qu=function(t,e,n,r,i){return Wu(Wl(jl(t)),Wl(jl(e)),Wl(jl(n)),r,i)},Ku=function(t){return Po.of(jo.DrawObject,[Pl(t)])},Lu=function(t){return Po.of(jo.NonStrokingColorGray,[Dl(t)])},Gu=function(t){return Po.of(jo.StrokingColorGray,[Dl(t)])},Hu=function(t,e,n){return Po.of(jo.NonStrokingColorRgb,[Dl(t),Dl(e),Dl(n)])},_u=function(t,e,n){return Po.of(jo.StrokingColorRgb,[Dl(t),Dl(e),Dl(n)])},Xu=function(t,e,n,r){return Po.of(jo.NonStrokingColorCmyk,[Dl(t),Dl(e),Dl(n),Dl(r)])},Zu=function(t,e,n,r){return Po.of(jo.StrokingColorCmyk,[Dl(t),Dl(e),Dl(n),Dl(r)])},Yu=function(t){return Po.of(jo.BeginMarkedContent,[Pl(t)])},Ju=function(){return Po.of(jo.EndMarkedContent)};!function(t){t.Grayscale="Grayscale",t.RGB="RGB",t.CMYK="CMYK"}(Mu||(Mu={}));var Qu,$u=function(t){return En(t,"gray",0,1),{type:Mu.Grayscale,gray:t}},tc=function(t,e,n){return En(t,"red",0,1),En(e,"green",0,1),En(n,"blue",0,1),{type:Mu.RGB,red:t,green:e,blue:n}},ec=function(t,e,n,r){return En(t,"cyan",0,1),En(e,"magenta",0,1),En(n,"yellow",0,1),En(r,"key",0,1),{type:Mu.CMYK,cyan:t,magenta:e,yellow:n,key:r}},nc=Mu.Grayscale,rc=Mu.RGB,ic=Mu.CMYK,oc=function(t){return t.type===nc?Lu(t.gray):t.type===rc?Hu(t.red,t.green,t.blue):t.type===ic?Xu(t.cyan,t.magenta,t.yellow,t.key):pt("Invalid color: "+JSON.stringify(t))},ac=function(t){return t.type===nc?Gu(t.gray):t.type===rc?_u(t.red,t.green,t.blue):t.type===ic?Zu(t.cyan,t.magenta,t.yellow,t.key):pt("Invalid color: "+JSON.stringify(t))},sc=function(t,e){return void 0===e&&(e=1),1===(null==t?void 0:t.length)?$u(t[0]*e):3===(null==t?void 0:t.length)?tc(t[0]*e,t[1]*e,t[2]*e):4===(null==t?void 0:t.length)?ec(t[0]*e,t[1]*e,t[2]*e,t[3]*e):void 0},hc=function(t){return t.type===nc?[t.gray]:t.type===rc?[t.red,t.green,t.blue]:t.type===ic?[t.cyan,t.magenta,t.yellow,t.key]:pt("Invalid color: "+JSON.stringify(t))},lc=0,uc=0,cc=0,dc=0,fc=0,pc=0,gc=new Map([["A",7],["a",7],["C",6],["c",6],["H",1],["h",1],["L",2],["l",2],["M",2],["m",2],["Q",4],["q",4],["S",4],["s",4],["T",2],["t",2],["V",1],["v",1],["Z",0],["z",0]]),vc={M:function(t){return lc=t[0],uc=t[1],cc=dc=null,fc=lc,pc=uc,bu(lc,uc)},m:function(t){return lc+=t[0],uc+=t[1],cc=dc=null,fc=lc,pc=uc,bu(lc,uc)},C:function(t){return lc=t[4],uc=t[5],cc=t[2],dc=t[3],vu(t[0],t[1],t[2],t[3],t[4],t[5])},c:function(t){var e=vu(t[0]+lc,t[1]+uc,t[2]+lc,t[3]+uc,t[4]+lc,t[5]+uc);return cc=lc+t[2],dc=uc+t[3],lc+=t[4],uc+=t[5],e},S:function(t){null!==cc&&null!==dc||(cc=lc,dc=uc);var e=vu(lc-(cc-lc),uc-(dc-uc),t[0],t[1],t[2],t[3]);return cc=t[0],dc=t[1],lc=t[2],uc=t[3],e},s:function(t){null!==cc&&null!==dc||(cc=lc,dc=uc);var e=vu(lc-(cc-lc),uc-(dc-uc),lc+t[0],uc+t[1],lc+t[2],uc+t[3]);return cc=lc+t[0],dc=uc+t[1],lc+=t[2],uc+=t[3],e},Q:function(t){return cc=t[0],dc=t[1],lc=t[2],uc=t[3],yu(t[0],t[1],lc,uc)},q:function(t){var e=yu(t[0]+lc,t[1]+uc,t[2]+lc,t[3]+uc);return cc=lc+t[0],dc=uc+t[1],lc+=t[2],uc+=t[3],e},T:function(t){null===cc||null===dc?(cc=lc,dc=uc):(cc=lc-(cc-lc),dc=uc-(dc-uc));var e=yu(cc,dc,t[0],t[1]);return cc=lc-(cc-lc),dc=uc-(dc-uc),lc=t[0],uc=t[1],e},t:function(t){null===cc||null===dc?(cc=lc,dc=uc):(cc=lc-(cc-lc),dc=uc-(dc-uc));var e=yu(cc,dc,lc+t[0],uc+t[1]);return lc+=t[0],uc+=t[1],e},A:function(t){var e=yc(lc,uc,t);return lc=t[5],uc=t[6],e},a:function(t){t[5]+=lc,t[6]+=uc;var e=yc(lc,uc,t);return lc=t[5],uc=t[6],e},L:function(t){return lc=t[0],uc=t[1],cc=dc=null,wu(lc,uc)},l:function(t){return lc+=t[0],uc+=t[1],cc=dc=null,wu(lc,uc)},H:function(t){return lc=t[0],cc=dc=null,wu(lc,uc)},h:function(t){return lc+=t[0],cc=dc=null,wu(lc,uc)},V:function(t){return uc=t[0],cc=dc=null,wu(lc,uc)},v:function(t){return uc+=t[0],cc=dc=null,wu(lc,uc)},Z:function(){var t=mu();return lc=fc,uc=pc,t},z:function(){var t=mu();return lc=fc,uc=pc,t}},yc=function(t,e,n){for(var r=n[0],i=n[1],o=n[2],a=n[3],s=n[4],h=n[5],l=n[6],u=[],c=0,d=mc(h,l,r,i,a,s,o,t,e);c<d.length;c++){var f=d[c],p=bc.apply(void 0,f);u.push(vu.apply(void 0,p))}return u},mc=function(t,e,n,r,i,o,a,s,h){var l=a*(Math.PI/180),u=Math.sin(l),c=Math.cos(l);n=Math.abs(n),r=Math.abs(r);var d=(cc=c*(s-t)*.5+u*(h-e)*.5)*cc/(n*n)+(dc=c*(h-e)*.5-u*(s-t)*.5)*dc/(r*r);d>1&&(n*=d=Math.sqrt(d),r*=d);var f=c/n,p=u/n,g=-u/r,v=c/r,y=f*s+p*h,m=g*s+v*h,b=f*t+p*e,w=g*t+v*e,x=1/((b-y)*(b-y)+(w-m)*(w-m))-.25;x<0&&(x=0);var k=Math.sqrt(x);o===i&&(k=-k);var S=.5*(y+b)-k*(w-m),F=.5*(m+w)+k*(b-y),C=Math.atan2(m-F,y-S),A=Math.atan2(w-F,b-S)-C;A<0&&1===o?A+=2*Math.PI:A>0&&0===o&&(A-=2*Math.PI);for(var z=Math.ceil(Math.abs(A/(.5*Math.PI+.001))),T=[],O=0;O<z;O++){var R=C+O*A/z,B=C+(O+1)*A/z;T[O]=[S,F,R,B,n,r,u,c]}return T},bc=function(t,e,n,r,i,o,a,s){var h=s*i,l=-a*o,u=a*i,c=s*o,d=.5*(r-n),f=8/3*Math.sin(.5*d)*Math.sin(.5*d)/Math.sin(d),p=t+Math.cos(n)-f*Math.sin(n),g=e+Math.sin(n)+f*Math.cos(n),v=t+Math.cos(r),y=e+Math.sin(r),m=v+f*Math.sin(r),b=y-f*Math.cos(r);return[h*p+l*g,u*p+c*g,h*m+l*b,u*m+c*b,h*v+l*y,u*v+c*y]},wc=function(t){return function(t){lc=uc=cc=dc=fc=pc=0;for(var e=[],n=0;n<t.length;n++){var r=t[n];if(r.cmd&&"function"==typeof vc[r.cmd]){var i=vc[r.cmd](r.args);Array.isArray(i)?e=e.concat(i):e.push(i)}}return e}(function(t){for(var e,n=[],r=[],i="",o=!1,a=0,s=0,h=t;s<h.length;s++){var l=h[s];if(gc.has(l))a=gc.get(l),e&&(i.length>0&&(r[r.length]=+i),n[n.length]={cmd:e,args:r},r=[],i="",o=!1),e=l;else if([" ",","].includes(l)||"-"===l&&i.length>0&&"e"!==i[i.length-1]||"."===l&&o){if(0===i.length)continue;r.length===a?(n[n.length]={cmd:e,args:r},r=[+i],"M"===e&&(e="L"),"m"===e&&(e="l")):r[r.length]=+i,o="."===l,i=["-","."].includes(l)?l:""}else i+=l,"."===l&&(o=!0)}return i.length>0&&(r.length===a?(n[n.length]={cmd:e,args:r},r=[+i],"M"===e&&(e="L"),"m"===e&&(e="l")):r[r.length]=+i),n[n.length]={cmd:e,args:r},n}(t))},xc=function(t,e){return[fu(),e.graphicsState&&du(e.graphicsState),Ru(),oc(e.color),Nu(e.font,e.size),Wu(Kl(e.rotate),Kl(e.xSkew),Kl(e.ySkew),e.x,e.y),Ou(t),Bu(),pu()].filter(Boolean)},kc=function(t,e){for(var n=[fu(),e.graphicsState&&du(e.graphicsState),Ru(),oc(e.color),Nu(e.font,e.size),Eu(e.lineHeight),Wu(Kl(e.rotate),Kl(e.xSkew),Kl(e.ySkew),e.x,e.y)].filter(Boolean),r=0,i=t.length;r<i;r++)n.push(Ou(t[r]),zu());return n.push(Bu(),pu()),n},Sc=function(t,e){return[fu(),e.graphicsState&&du(e.graphicsState),tu(e.x,e.y),nu(Kl(e.rotate)),eu(e.width,e.height),iu(Kl(e.xSkew),Kl(e.ySkew)),Ku(t),pu()].filter(Boolean)},Fc=function(t,e){return[fu(),e.graphicsState&&du(e.graphicsState),tu(e.x,e.y),nu(Kl(e.rotate)),eu(e.xScale,e.yScale),iu(Kl(e.xSkew),Kl(e.ySkew)),Ku(t),pu()].filter(Boolean)},Cc=function(t){var e,n;return[fu(),t.graphicsState&&du(t.graphicsState),t.color&&ac(t.color),gu(t.thickness),au(null!==(e=t.dashArray)&&void 0!==e?e:[],null!==(n=t.dashPhase)&&void 0!==n?n:0),bu(t.start.x,t.start.y),t.lineCap&&lu(t.lineCap),bu(t.start.x,t.start.y),wu(t.end.x,t.end.y),Su(),pu()].filter(Boolean)},Ac=function(t){var e,n;return[fu(),t.graphicsState&&du(t.graphicsState),t.color&&oc(t.color),t.borderColor&&ac(t.borderColor),gu(t.borderWidth),t.borderLineCap&&lu(t.borderLineCap),au(null!==(e=t.borderDashArray)&&void 0!==e?e:[],null!==(n=t.borderDashPhase)&&void 0!==n?n:0),tu(t.x,t.y),nu(Kl(t.rotate)),iu(Kl(t.xSkew),Kl(t.ySkew)),bu(0,0),wu(0,t.height),wu(t.width,t.height),wu(t.width,0),mu(),t.color&&t.borderWidth?Cu():t.color?Fu():t.borderColor?Su():mu(),pu()].filter(Boolean)},zc=(Math.sqrt(2)-1)/3*4,Tc=function(t){var e=jl(t.x),n=jl(t.y),r=jl(t.xScale),i=jl(t.yScale),o=r*zc,a=i*zc,s=(e-=r)+2*r,h=(n-=i)+2*i,l=e+r,u=n+i;return[fu(),bu(e,u),vu(e,u-a,l-o,n,l,n),vu(l+o,n,s,u-a,s,u),vu(s,u+a,l+o,h,l,h),vu(l-o,h,e,u+a,e,u),pu()]},Oc=function(t){var e,n,r,i,a,s,h,l,u,c,d,f,p,g,v,y;return o([fu(),t.graphicsState&&du(t.graphicsState),t.color&&oc(t.color),t.borderColor&&ac(t.borderColor),gu(t.borderWidth),t.borderLineCap&&lu(t.borderLineCap),au(null!==(e=t.borderDashArray)&&void 0!==e?e:[],null!==(n=t.borderDashPhase)&&void 0!==n?n:0)],void 0===t.rotate?Tc({x:t.x,y:t.y,xScale:t.xScale,yScale:t.yScale}):(i={x:t.x,y:t.y,xScale:t.xScale,yScale:t.yScale,rotate:null!==(r=t.rotate)&&void 0!==r?r:Ml(0)},a=jl(i.x),s=jl(i.y),h=jl(i.xScale),l=jl(i.yScale),u=-h,c=-l,d=h*zc,f=l*zc,p=u+2*h,g=c+2*l,v=u+h,y=c+l,[tu(a,s),nu(Kl(i.rotate)),bu(u,y),vu(u,y-f,v-d,c,v,c),vu(v+d,c,p,y-f,p,y),vu(p,y+f,v+d,g,v,g),vu(v-d,g,u,y+f,u,y)]),[t.color&&t.borderWidth?Cu():t.color?Fu():t.borderColor?Su():mu(),pu()]).filter(Boolean)},Rc=function(t,e){var n,r,i;return o([fu(),e.graphicsState&&du(e.graphicsState),tu(e.x,e.y),nu(Kl(null!==(n=e.rotate)&&void 0!==n?n:Ml(0))),e.scale?eu(e.scale,-e.scale):eu(1,-1),e.color&&oc(e.color),e.borderColor&&ac(e.borderColor),e.borderWidth&&gu(e.borderWidth),e.borderLineCap&&lu(e.borderLineCap),au(null!==(r=e.borderDashArray)&&void 0!==r?r:[],null!==(i=e.borderDashPhase)&&void 0!==i?i:0)],wc(t),[e.color&&e.borderWidth?Cu():e.color?Fu():e.borderColor?Su():mu(),pu()]).filter(Boolean)},Bc=function(t){var e=jl(t.size);return[fu(),t.color&&ac(t.color),gu(t.thickness),tu(t.x,t.y),bu(-.675*e,(.3995/.965-.49)*e),wu(-.25*e,-.49*e),wu(.69*e,.475*e),Su(),pu()].filter(Boolean)},Nc=function(t){return 0===t.rotation?[tu(0,0),ru(0)]:90===t.rotation?[tu(t.width,0),ru(90)]:180===t.rotation?[tu(t.width,t.height),ru(180)]:270===t.rotation?[tu(0,t.height),ru(270)]:[]},Pc=function(t){var e=Ac({x:t.x,y:t.y,width:t.width,height:t.height,borderWidth:t.borderWidth,color:t.color,borderColor:t.borderColor,rotate:Ml(0),xSkew:Ml(0),ySkew:Ml(0)});if(!t.filled)return e;var n=jl(t.width),r=jl(t.height),i=Math.min(n,r)/2,a=Bc({x:n/2,y:r/2,size:i,thickness:t.thickness,color:t.markColor});return o([fu()],e,a,[pu()])},Dc=function(t){var e=jl(t.width),n=jl(t.height),r=Math.min(e,n)/2,i=Oc({x:t.x,y:t.y,xScale:r,yScale:r,color:t.color,borderColor:t.borderColor,borderWidth:t.borderWidth});if(!t.filled)return i;var a=Oc({x:t.x,y:t.y,xScale:.45*r,yScale:.45*r,color:t.dotColor,borderColor:void 0,borderWidth:0});return o([fu()],i,a,[pu()])},jc=function(t){var e=jl(t.x),n=jl(t.y),r=jl(t.width),i=jl(t.height),a=Ac({x:e,y:n,width:r,height:i,borderWidth:t.borderWidth,color:t.color,borderColor:t.borderColor,rotate:Ml(0),xSkew:Ml(0),ySkew:Ml(0)}),s=Ec(t.textLines,{color:t.textColor,font:t.font,size:t.fontSize,rotate:Ml(0),xSkew:Ml(0),ySkew:Ml(0)});return o([fu()],a,s,[pu()])},Ec=function(t,e){for(var n=[Ru(),oc(e.color),Nu(e.font,e.size)],r=0,i=t.length;r<i;r++){var o=t[r],a=o.encoded,s=o.x,h=o.y;n.push(Wu(Kl(e.rotate),Kl(e.xSkew),Kl(e.ySkew),s,h),Ou(a))}return n.push(Bu()),n},Ic=function(t){var e=jl(t.x),n=jl(t.y),r=jl(t.width),i=jl(t.height),a=jl(t.borderWidth),s=jl(t.padding),h=e+a/2+s,l=n+a/2+s,u=r-2*(a/2+s),c=i-2*(a/2+s),d=[bu(h,l),wu(h,l+c),wu(h+u,l+c),wu(h+u,l),mu(),Xl(),Au()],f=Ac({x:e,y:n,width:r,height:i,borderWidth:t.borderWidth,color:t.color,borderColor:t.borderColor,rotate:Ml(0),xSkew:Ml(0),ySkew:Ml(0)}),p=Ec(t.textLines,{color:t.textColor,font:t.font,size:t.fontSize,rotate:Ml(0),xSkew:Ml(0),ySkew:Ml(0)}),g=o([Yu("Tx"),fu()],p,[pu(),Ju()]);return o([fu()],f,d,g,[pu()])},Mc=function(t){for(var e=jl(t.x),n=jl(t.y),r=jl(t.width),i=jl(t.height),a=jl(t.lineHeight),s=jl(t.borderWidth),h=jl(t.padding),l=e+s/2+h,u=n+s/2+h,c=r-2*(s/2+h),d=i-2*(s/2+h),f=[bu(l,u),wu(l,u+d),wu(l+c,u+d),wu(l+c,u),mu(),Xl(),Au()],p=Ac({x:e,y:n,width:r,height:i,borderWidth:t.borderWidth,color:t.color,borderColor:t.borderColor,rotate:Ml(0),xSkew:Ml(0),ySkew:Ml(0)}),g=[],v=0,y=t.selectedLines.length;v<y;v++){var m=t.textLines[t.selectedLines[v]];g.push.apply(g,Ac({x:m.x-h,y:m.y-(a-m.height)/2,width:r-s,height:m.height+(a-m.height)/2,borderWidth:0,color:t.selectedColor,borderColor:void 0,rotate:Ml(0),xSkew:Ml(0),ySkew:Ml(0)}))}var b=Ec(t.textLines,{color:t.textColor,font:t.font,size:t.fontSize,rotate:Ml(0),xSkew:Ml(0),ySkew:Ml(0)}),w=o([Yu("Tx"),fu()],b,[pu(),Ju()]);return o([fu()],p,g,f,w,[pu()])},Uc=function(t){function n(){return t.call(this,"Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.")||this}return e(n,t),n}(Error),Vc=function(t){function n(){return t.call(this,"Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.")||this}return e(n,t),n}(Error),Wc=function(t){function n(){return t.call(this,"A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.")||this}return e(n,t),n}(Error),qc=function(t){function n(){return t.call(this,"PDFDocument has no pages so `PDFDocument.removePage` cannot be called")||this}return e(n,t),n}(Error),Kc=function(t){function n(e){var n='PDFDocument has no form field with the name "'+e+'"';return t.call(this,n)||this}return e(n,t),n}(Error),Lc=function(t){function n(e,n,r){var i,o,a='Expected field "'+e+'" to be of type '+(null==n?void 0:n.name)+", but it is actually of type "+(null!==(o=null===(i=null==r?void 0:r.constructor)||void 0===i?void 0:i.name)&&void 0!==o?o:r);return t.call(this,a)||this}return e(n,t),n}(Error),Gc=function(t){function n(e){var n='Failed to select check box due to missing onValue: "'+e+'"';return t.call(this,n)||this}return e(n,t),n}(Error),Hc=function(t){function n(e){var n='A field already exists with the specified name: "'+e+'"';return t.call(this,n)||this}return e(n,t),n}(Error),_c=function(t){function n(e){var n='Field name contains invalid component: "'+e+'"';return t.call(this,n)||this}return e(n,t),n}(Error),Xc=function(t){function n(e){var n='A non-terminal field already exists with the specified name: "'+e+'"';return t.call(this,n)||this}return e(n,t),n}(Error),Zc=function(t){function n(e){var n="Reading rich text fields is not supported: Attempted to read rich text field: "+e;return t.call(this,n)||this}return e(n,t),n}(Error),Yc=function(t){function n(e,n){var r="Failed to layout combed text as lineLength="+e+" is greater than cellCount="+n;return t.call(this,r)||this}return e(n,t),n}(Error),Jc=function(t){function n(e,n,r){var i="Attempted to set text with length="+e+" for TextField with maxLength="+n+" and name="+r;return t.call(this,i)||this}return e(n,t),n}(Error),Qc=function(t){function n(e,n,r){var i="Attempted to set maxLength="+n+", which is less than "+e+", the length of this field's current value (name="+r+")";return t.call(this,i)||this}return e(n,t),n}(Error);!function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right"}(Qu||(Qu={}));var $c,td=function(t,e,n,r){void 0===r&&(r=!1);for(var i=4;i<500;){for(var o=0,a=0,s=t.length;a<s;a++){o+=1;for(var h=t[a].split(" "),l=n.width,u=0,c=h.length;u<c;u++){var d=u===c-1?h[u]:h[u]+" ",f=e.widthOfTextAtSize(d,i);(l-=f)<=0&&(o+=1,l=n.width-f)}}if(!r&&o>t.length)return i-1;var p=e.heightAtSize(i);if((p+.2*p)*o>Math.abs(n.height))return i-1;i+=1}return i},ed=function(t){for(var e=t.length;e>0;e--)if(/\s/.test(t[e]))return e},nd=function(t,e,n,r){for(var i,o=t.length;o>0;){var a=t.substring(0,o),s=n.encodeText(a),h=n.widthOfTextAtSize(a,r);if(h<e)return{line:a,encoded:s,width:h,remainder:t.substring(o)||void 0};o=null!==(i=ed(a))&&void 0!==i?i:0}return{line:t,encoded:n.encodeText(t),width:n.widthOfTextAtSize(t,r),remainder:void 0}},rd=function(t,e){var n=e.alignment,r=e.fontSize,i=e.font,o=e.bounds,a=T(F(t));void 0!==r&&0!==r||(r=td(a,i,o,!0));for(var s=i.heightAtSize(r),h=s+.2*s,l=[],u=o.x,c=o.y,d=o.x+o.width,f=o.y+o.height,p=o.y+o.height,g=0,v=a.length;g<v;g++)for(var y=a[g];void 0!==y;){var m=nd(y,o.width,i,r),b=m.line,w=m.encoded,x=m.width,k=m.remainder,S=n===Qu.Left?o.x:n===Qu.Center?o.x+o.width/2-x/2:n===Qu.Right?o.x+o.width-x:o.x;S<u&&(u=S),(p-=h)<c&&(c=p),S+x>d&&(d=S+x),p+s>f&&(f=p+s),l.push({text:b,encoded:w,width:x,height:s,x:S,y:p}),y=null==k?void 0:k.trim()}return{fontSize:r,lineHeight:h,lines:l,bounds:{x:u,y:c,width:d-u,height:f-c}}},id=function(t,e){var n=e.fontSize,r=e.font,i=e.bounds,o=e.cellCount,a=O(F(t));if(a.length>o)throw new Yc(a.length,o);void 0!==n&&0!==n||(n=function(t,e,n,r){for(var i=n.width/r,o=n.height,a=4,s=B(t);a<500;){for(var h=0,l=s.length;h<l;h++){var u=s[h];if(e.widthOfTextAtSize(u,a)>.75*i)return a-1}if(e.heightAtSize(a,{descender:!1})>o)return a-1;a+=1}return a}(a,r,i,o));for(var s=i.width/o,h=r.heightAtSize(n,{descender:!1}),l=i.y+(i.height/2-h/2),u=[],c=i.x,d=i.y,f=i.x+i.width,p=i.y+i.height,g=0,v=0;g<o;){var y=R(a,v),m=y[0],b=y[1],w=r.encodeText(m),x=r.widthOfTextAtSize(m,n),k=i.x+(s*g+s/2)-x/2;k<c&&(c=k),l<d&&(d=l),k+x>f&&(f=k+x),l+h>p&&(p=l+h),u.push({text:a,encoded:w,width:x,height:h,x:k,y:l}),g+=1,v+=b}return{fontSize:n,cells:u,bounds:{x:c,y:d,width:f-c,height:p-d}}},od=function(t,e){var n=e.alignment,r=e.fontSize,i=e.font,o=e.bounds,a=O(F(t));void 0!==r&&0!==r||(r=td([a],i,o));var s=i.encodeText(a),h=i.widthOfTextAtSize(a,r),l=i.heightAtSize(r,{descender:!1}),u=n===Qu.Left?o.x:n===Qu.Center?o.x+o.width/2-h/2:n===Qu.Right?o.x+o.width-h:o.x,c=o.y+(o.height/2-l/2);return{fontSize:r,line:{text:a,encoded:s,width:h,height:l,x:u,y:c},bounds:{x:u,y:c,width:h,height:l}}},ad=function(t){return"normal"in t?t:{normal:t}},sd=/\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/,hd=function(t){var e,n,r=null!==(e=t.getDefaultAppearance())&&void 0!==e?e:"",i=null!==(n=j(r,sd).match)&&void 0!==n?n:[],o=Number(i[2]);return isFinite(o)?o:void 0},ld=/(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/,ud=function(t){var e,n=null!==(e=t.getDefaultAppearance())&&void 0!==e?e:"",r=j(n,ld).match,i=null!=r?r:[],o=i[1],a=i[2],s=i[3],h=i[4],l=i[5];return"g"===l&&o?$u(Number(o)):"rg"===l&&o&&a&&s?tc(Number(o),Number(a),Number(s)):"k"===l&&o&&a&&s&&h?ec(Number(o),Number(a),Number(s),Number(h)):void 0},cd=function(t,e,n,r){var i;void 0===r&&(r=0);var o=[oc(e).toString(),Nu(null!==(i=null==n?void 0:n.name)&&void 0!==i?i:"dummy__noop",r).toString()].join("\n");t.setDefaultAppearance(o)},dd=function(t,e){var r,i,a,s=ud(e),h=ud(t.acroField),l=e.getRectangle(),u=e.getAppearanceCharacteristics(),c=e.getBorderStyle(),d=null!==(r=null==c?void 0:c.getWidth())&&void 0!==r?r:0,f=Gl(null==u?void 0:u.getRotation()),p=Hl(l,f),g=p.width,v=p.height,y=Nc(n(n({},l),{rotation:f})),m=tc(0,0,0),b=null!==(i=sc(null==u?void 0:u.getBorderColor()))&&void 0!==i?i:m,w=sc(null==u?void 0:u.getBackgroundColor()),x=sc(null==u?void 0:u.getBackgroundColor(),.8),k=null!==(a=null!=s?s:h)&&void 0!==a?a:m;cd(s?e:t.acroField,k);var S={x:0+d/2,y:0+d/2,width:g-d,height:v-d,thickness:1.5,borderWidth:d,borderColor:b,markColor:k};return{normal:{on:o(y,Pc(n(n({},S),{color:w,filled:!0}))),off:o(y,Pc(n(n({},S),{color:w,filled:!1})))},down:{on:o(y,Pc(n(n({},S),{color:x,filled:!0}))),off:o(y,Pc(n(n({},S),{color:x,filled:!1})))}}},fd=function(t,e){var r,i,a,s=ud(e),h=ud(t.acroField),l=e.getRectangle(),u=e.getAppearanceCharacteristics(),c=e.getBorderStyle(),d=null!==(r=null==c?void 0:c.getWidth())&&void 0!==r?r:0,f=Gl(null==u?void 0:u.getRotation()),p=Hl(l,f),g=p.width,v=p.height,y=Nc(n(n({},l),{rotation:f})),m=tc(0,0,0),b=null!==(i=sc(null==u?void 0:u.getBorderColor()))&&void 0!==i?i:m,w=sc(null==u?void 0:u.getBackgroundColor()),x=sc(null==u?void 0:u.getBackgroundColor(),.8),k=null!==(a=null!=s?s:h)&&void 0!==a?a:m;cd(s?e:t.acroField,k);var S={x:g/2,y:v/2,width:g-d,height:v-d,borderWidth:d,borderColor:b,dotColor:k};return{normal:{on:o(y,Dc(n(n({},S),{color:w,filled:!0}))),off:o(y,Dc(n(n({},S),{color:w,filled:!1})))},down:{on:o(y,Dc(n(n({},S),{color:x,filled:!0}))),off:o(y,Dc(n(n({},S),{color:x,filled:!1})))}}},pd=function(t,e,r){var i,a,s,h,l,u=ud(e),c=ud(t.acroField),d=hd(e),f=hd(t.acroField),p=e.getRectangle(),g=e.getAppearanceCharacteristics(),v=e.getBorderStyle(),y=null==g?void 0:g.getCaptions(),m=null!==(i=null==y?void 0:y.normal)&&void 0!==i?i:"",b=null!==(s=null!==(a=null==y?void 0:y.down)&&void 0!==a?a:m)&&void 0!==s?s:"",w=null!==(h=null==v?void 0:v.getWidth())&&void 0!==h?h:0,x=Gl(null==g?void 0:g.getRotation()),k=Hl(p,x),S=k.width,F=k.height,C=Nc(n(n({},p),{rotation:x})),A=tc(0,0,0),z=sc(null==g?void 0:g.getBorderColor()),T=sc(null==g?void 0:g.getBackgroundColor()),O=sc(null==g?void 0:g.getBackgroundColor(),.8),R={x:w,y:w,width:S-2*w,height:F-2*w},B=od(m,{alignment:Qu.Center,fontSize:null!=d?d:f,font:r,bounds:R}),N=od(b,{alignment:Qu.Center,fontSize:null!=d?d:f,font:r,bounds:R}),P=Math.min(B.fontSize,N.fontSize),D=null!==(l=null!=u?u:c)&&void 0!==l?l:A;cd(u||void 0!==d?e:t.acroField,D,r,P);var j={x:0+w/2,y:0+w/2,width:S-w,height:F-w,borderWidth:w,borderColor:z,textColor:D,font:r.name,fontSize:P};return{normal:o(C,jc(n(n({},j),{color:T,textLines:[B.line]}))),down:o(C,jc(n(n({},j),{color:O,textLines:[N.line]})))}},gd=function(t,e,r){var i,a,s,h,l,u,c=ud(e),d=ud(t.acroField),f=hd(e),p=hd(t.acroField),g=e.getRectangle(),v=e.getAppearanceCharacteristics(),y=e.getBorderStyle(),m=null!==(i=t.getText())&&void 0!==i?i:"",b=null!==(a=null==y?void 0:y.getWidth())&&void 0!==a?a:0,w=Gl(null==v?void 0:v.getRotation()),x=Hl(g,w),k=x.width,S=x.height,F=Nc(n(n({},g),{rotation:w})),C=tc(0,0,0),A=sc(null==v?void 0:v.getBorderColor()),z=sc(null==v?void 0:v.getBackgroundColor()),T=t.isCombed()?0:1,O={x:b+T,y:b+T,width:k-2*(b+T),height:S-2*(b+T)};if(t.isMultiline())l=(R=rd(m,{alignment:t.getAlignment(),fontSize:null!=f?f:p,font:r,bounds:O})).lines,u=R.fontSize;else if(t.isCombed()){l=(R=id(m,{fontSize:null!=f?f:p,font:r,bounds:O,cellCount:null!==(s=t.getMaxLength())&&void 0!==s?s:0})).cells,u=R.fontSize}else{var R;l=[(R=od(m,{alignment:t.getAlignment(),fontSize:null!=f?f:p,font:r,bounds:O})).line],u=R.fontSize}var B=null!==(h=null!=c?c:d)&&void 0!==h?h:C;cd(c||void 0!==f?e:t.acroField,B,r,u);var N={x:0+b/2,y:0+b/2,width:k-b,height:S-b,borderWidth:null!=b?b:0,borderColor:A,textColor:B,font:r.name,fontSize:u,color:z,textLines:l,padding:T};return o(F,Ic(N))},vd=function(t,e,r){var i,a,s,h=ud(e),l=ud(t.acroField),u=hd(e),c=hd(t.acroField),d=e.getRectangle(),f=e.getAppearanceCharacteristics(),p=e.getBorderStyle(),g=null!==(i=t.getSelected()[0])&&void 0!==i?i:"",v=null!==(a=null==p?void 0:p.getWidth())&&void 0!==a?a:0,y=Gl(null==f?void 0:f.getRotation()),m=Hl(d,y),b=m.width,w=m.height,x=Nc(n(n({},d),{rotation:y})),k=tc(0,0,0),S=sc(null==f?void 0:f.getBorderColor()),F=sc(null==f?void 0:f.getBackgroundColor()),C={x:v+1,y:v+1,width:b-2*(v+1),height:w-2*(v+1)},A=od(g,{alignment:Qu.Left,fontSize:null!=u?u:c,font:r,bounds:C}),z=A.line,T=A.fontSize,O=null!==(s=null!=h?h:l)&&void 0!==s?s:k;cd(h||void 0!==u?e:t.acroField,O,r,T);var R={x:0+v/2,y:0+v/2,width:b-v,height:w-v,borderWidth:null!=v?v:0,borderColor:S,textColor:O,font:r.name,fontSize:T,color:F,textLines:[z],padding:1};return o(x,Ic(R))},yd=function(t,e,r){var i,a,s=ud(e),h=ud(t.acroField),l=hd(e),u=hd(t.acroField),c=e.getRectangle(),d=e.getAppearanceCharacteristics(),f=e.getBorderStyle(),p=null!==(i=null==f?void 0:f.getWidth())&&void 0!==i?i:0,g=Gl(null==d?void 0:d.getRotation()),v=Hl(c,g),y=v.width,m=v.height,b=Nc(n(n({},c),{rotation:g})),w=tc(0,0,0),x=sc(null==d?void 0:d.getBorderColor()),k=sc(null==d?void 0:d.getBackgroundColor()),S=t.getOptions(),F=t.getSelected();t.isSorted()&&S.sort();for(var C="",A=0,z=S.length;A<z;A++)C+=S[A],A<z-1&&(C+="\n");var T={x:p+1,y:p+1,width:y-2*(p+1),height:m-2*(p+1)},O=rd(C,{alignment:Qu.Left,fontSize:null!=l?l:u,font:r,bounds:T}),R=O.lines,B=O.fontSize,N=O.lineHeight,P=[];for(A=0,z=R.length;A<z;A++){var D=R[A];F.includes(D.text)&&P.push(A)}var j=tc(.6,193/255,218/255),E=null!==(a=null!=s?s:h)&&void 0!==a?a:w;return cd(s||void 0!==l?e:t.acroField,E,r,B),o(b,Mc({x:0+p/2,y:0+p/2,width:y-p,height:m-p,borderWidth:null!=p?p:0,borderColor:x,textColor:E,font:r.name,fontSize:B,color:k,textLines:R,lineHeight:N,selectedColor:j,selectedLines:P,padding:1}))},md=function(){function t(t,e,n){this.alreadyEmbedded=!1,Pn(t,"ref",[[No,"PDFRef"]]),Pn(e,"doc",[[Vd,"PDFDocument"]]),Pn(n,"embedder",[[Oh,"PDFPageEmbedder"]]),this.ref=t,this.doc=e,this.width=n.width,this.height=n.height,this.embedder=n}return t.prototype.scale=function(t){return Pn(t,"factor",["number"]),{width:this.width*t,height:this.height*t}},t.prototype.size=function(){return this.scale(1)},t.prototype.embed=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return this.alreadyEmbedded?[3,2]:[4,this.embedder.embedIntoContext(this.doc.context,this.ref)];case 1:t.sent(),this.alreadyEmbedded=!0,t.label=2;case 2:return[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}(),bd=function(){function t(t,e,n){this.modified=!0,Pn(t,"ref",[[No,"PDFRef"]]),Pn(e,"doc",[[Vd,"PDFDocument"]]),Pn(n,"embedder",[[oa,"CustomFontEmbedder"],[$o,"StandardFontEmbedder"]]),this.ref=t,this.doc=e,this.name=n.fontName,this.embedder=n}return t.prototype.encodeText=function(t){return Pn(t,"text",["string"]),this.modified=!0,this.embedder.encodeText(t)},t.prototype.widthOfTextAtSize=function(t,e){return Pn(t,"text",["string"]),Pn(e,"size",["number"]),this.embedder.widthOfTextAtSize(t,e)},t.prototype.heightAtSize=function(t,e){var n;return Pn(t,"size",["number"]),Dn(null==e?void 0:e.descender,"options.descender",["boolean"]),this.embedder.heightOfFontAtSize(t,{descender:null===(n=null==e?void 0:e.descender)||void 0===n||n})},t.prototype.sizeAtHeight=function(t){return Pn(t,"height",["number"]),this.embedder.sizeOfFontAtHeight(t)},t.prototype.getCharacterSet=function(){return this.embedder instanceof $o?this.embedder.encoding.supportedCodePoints:this.embedder.font.characterSet},t.prototype.embed=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return this.modified?[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]:[3,2];case 1:t.sent(),this.modified=!1,t.label=2;case 2:return[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}(),wd=function(){function t(t,e,n){Pn(t,"ref",[[No,"PDFRef"]]),Pn(e,"doc",[[Vd,"PDFDocument"]]),Pn(n,"embedder",[[ca,"JpegEmbedder"],[dh,"PngEmbedder"]]),this.ref=t,this.doc=e,this.width=n.width,this.height=n.height,this.embedder=n}return t.prototype.scale=function(t){return Pn(t,"factor",["number"]),{width:this.width*t,height:this.height*t}},t.prototype.scaleToFit=function(t,e){Pn(t,"width",["number"]),Pn(e,"height",["number"]);var n=t/this.width,r=e/this.height,i=Math.min(n,r);return this.scale(i)},t.prototype.size=function(){return this.scale(1)},t.prototype.embed=function(){return r(this,void 0,void 0,(function(){var t,e,n;return i(this,(function(r){switch(r.label){case 0:return this.embedder?(this.embedTask||(e=(t=this).doc,n=t.ref,this.embedTask=this.embedder.embedIntoContext(e.context,n)),[4,this.embedTask]):[2];case 1:return r.sent(),this.embedder=void 0,[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}();!function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right"}($c||($c={}));var xd,kd=function(t){Dn(null==t?void 0:t.x,"options.x",["number"]),Dn(null==t?void 0:t.y,"options.y",["number"]),Dn(null==t?void 0:t.width,"options.width",["number"]),Dn(null==t?void 0:t.height,"options.height",["number"]),Dn(null==t?void 0:t.textColor,"options.textColor",[[Object,"Color"]]),Dn(null==t?void 0:t.backgroundColor,"options.backgroundColor",[[Object,"Color"]]),Dn(null==t?void 0:t.borderColor,"options.borderColor",[[Object,"Color"]]),Dn(null==t?void 0:t.borderWidth,"options.borderWidth",["number"]),Dn(null==t?void 0:t.rotate,"options.rotate",[[Object,"Rotation"]])},Sd=function(){function t(t,e,n){Pn(t,"acroField",[[qh,"PDFAcroTerminal"]]),Pn(e,"ref",[[No,"PDFRef"]]),Pn(n,"doc",[[Vd,"PDFDocument"]]),this.acroField=t,this.ref=e,this.doc=n}return t.prototype.getName=function(){var t;return null!==(t=this.acroField.getFullyQualifiedName())&&void 0!==t?t:""},t.prototype.isReadOnly=function(){return this.acroField.hasFlag(Bh.ReadOnly)},t.prototype.enableReadOnly=function(){this.acroField.setFlagTo(Bh.ReadOnly,!0)},t.prototype.disableReadOnly=function(){this.acroField.setFlagTo(Bh.ReadOnly,!1)},t.prototype.isRequired=function(){return this.acroField.hasFlag(Bh.Required)},t.prototype.enableRequired=function(){this.acroField.setFlagTo(Bh.Required,!0)},t.prototype.disableRequired=function(){this.acroField.setFlagTo(Bh.Required,!1)},t.prototype.isExported=function(){return!this.acroField.hasFlag(Bh.NoExport)},t.prototype.enableExporting=function(){this.acroField.setFlagTo(Bh.NoExport,!1)},t.prototype.disableExporting=function(){this.acroField.setFlagTo(Bh.NoExport,!0)},t.prototype.needsAppearancesUpdate=function(){throw new Hn(this.constructor.name,"needsAppearancesUpdate")},t.prototype.defaultUpdateAppearances=function(t){throw new Hn(this.constructor.name,"defaultUpdateAppearances")},t.prototype.markAsDirty=function(){this.doc.getForm().markFieldAsDirty(this.ref)},t.prototype.markAsClean=function(){this.doc.getForm().markFieldAsClean(this.ref)},t.prototype.isDirty=function(){return this.doc.getForm().fieldIsDirty(this.ref)},t.prototype.createWidget=function(t){var e,n=t.textColor,r=t.backgroundColor,i=t.borderColor,o=t.borderWidth,a=Ll(t.rotate),s=t.caption,h=t.x,l=t.y,u=t.width+o,c=t.height+o,d=Boolean(t.hidden),f=t.page;Mn(a,"degreesAngle",90);var p=Wh.create(this.doc.context,this.ref),g=_l({x:h,y:l,width:u,height:c},o,a);p.setRectangle(g),f&&p.setP(f);var v=p.getOrCreateAppearanceCharacteristics();r&&v.setBackgroundColor(hc(r)),v.setRotation(a),s&&v.setCaptions({normal:s}),i&&v.setBorderColor(hc(i));var y=p.getOrCreateBorderStyle();if(void 0!==o&&y.setWidth(o),p.setFlagTo(vl.Print,!0),p.setFlagTo(vl.Hidden,d),p.setFlagTo(vl.Invisible,!1),n){var m=(null!==(e=this.acroField.getDefaultAppearance())&&void 0!==e?e:"")+"\n"+oc(n).toString();this.acroField.setDefaultAppearance(m)}return p},t.prototype.updateWidgetAppearanceWithFont=function(t,e,n){var r=n.normal,i=n.rollover,o=n.down;this.updateWidgetAppearances(t,{normal:this.createAppearanceStream(t,r,e),rollover:i&&this.createAppearanceStream(t,i,e),down:o&&this.createAppearanceStream(t,o,e)})},t.prototype.updateOnOffWidgetAppearance=function(t,e,n){var r=n.normal,i=n.rollover,o=n.down;this.updateWidgetAppearances(t,{normal:this.createAppearanceDict(t,r,e),rollover:i&&this.createAppearanceDict(t,i,e),down:o&&this.createAppearanceDict(t,o,e)})},t.prototype.updateWidgetAppearances=function(t,e){var n=e.normal,r=e.rollover,i=e.down;t.setNormalAppearance(n),r?t.setRolloverAppearance(r):t.removeRolloverAppearance(),i?t.setDownAppearance(i):t.removeDownAppearance()},t.prototype.createAppearanceStream=function(t,e,n){var r,i=this.acroField.dict.context,o=t.getRectangle(),a=o.width,s=o.height,h=n&&{Font:(r={},r[n.name]=n.ref,r)},l=i.formXObject(e,{Resources:h,BBox:i.obj([0,0,a,s]),Matrix:i.obj([1,0,0,1,0,0])});return i.register(l)},t.prototype.createImageAppearanceStream=function(t,e,r){var i,a,s=this.acroField.dict.context,h=t.getRectangle(),l=t.getAppearanceCharacteristics(),u=t.getBorderStyle(),c=null!==(a=null==u?void 0:u.getWidth())&&void 0!==a?a:0,d=Gl(null==l?void 0:l.getRotation()),f=Nc(n(n({},h),{rotation:d})),p=Hl(h,d),g=e.scaleToFit(p.width-2*c,p.height-2*c),v={x:c,y:c,width:g.width,height:g.height,rotate:Ml(0),xSkew:Ml(0),ySkew:Ml(0)};r===$c.Center?(v.x+=(p.width-2*c)/2-g.width/2,v.y+=(p.height-2*c)/2-g.height/2):r===$c.Right&&(v.x=p.width-c-g.width,v.y=p.height-c-g.height);var y=this.doc.context.addRandomSuffix("Image",10),m=o(f,Sc(y,v)),b={XObject:(i={},i[y]=e.ref,i)},w=s.formXObject(m,{Resources:b,BBox:s.obj([0,0,h.width,h.height]),Matrix:s.obj([1,0,0,1,0,0])});return s.register(w)},t.prototype.createAppearanceDict=function(t,e,n){var r=this.acroField.dict.context,i=this.createAppearanceStream(t,e.on),o=this.createAppearanceStream(t,e.off),a=r.obj({});return a.set(n,i),a.set(Co.of("Off"),o),a},t}(),Fd=function(t){function n(e,n,r){var i=t.call(this,e,n,r)||this;return Pn(e,"acroCheckBox",[[Lh,"PDFAcroCheckBox"]]),i.acroField=e,i}return e(n,t),n.prototype.check=function(){var t,e=null!==(t=this.acroField.getOnValue())&&void 0!==t?t:Co.of("Yes");this.markAsDirty(),this.acroField.setValue(e)},n.prototype.uncheck=function(){this.markAsDirty(),this.acroField.setValue(Co.of("Off"))},n.prototype.isChecked=function(){var t=this.acroField.getOnValue();return!!t&&t===this.acroField.getValue()},n.prototype.addToPage=function(t,e){var n,r,i,o,a,s;Pn(t,"page",[[qd,"PDFPage"]]),kd(e),e||(e={}),"textColor"in e||(e.textColor=tc(0,0,0)),"backgroundColor"in e||(e.backgroundColor=tc(1,1,1)),"borderColor"in e||(e.borderColor=tc(0,0,0)),"borderWidth"in e||(e.borderWidth=1);var h=this.createWidget({x:null!==(n=e.x)&&void 0!==n?n:0,y:null!==(r=e.y)&&void 0!==r?r:0,width:null!==(i=e.width)&&void 0!==i?i:50,height:null!==(o=e.height)&&void 0!==o?o:50,textColor:e.textColor,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:null!==(a=e.borderWidth)&&void 0!==a?a:0,rotate:null!==(s=e.rotate)&&void 0!==s?s:Ml(0),hidden:e.hidden,page:t.ref}),l=this.doc.context.register(h.dict);this.acroField.addWidget(l),h.setAppearanceState(Co.of("Off")),this.updateWidgetAppearance(h,Co.of("Yes")),t.node.addAnnot(l)},n.prototype.needsAppearancesUpdate=function(){for(var t,e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){var i=e[n],o=i.getAppearanceState(),a=null===(t=i.getAppearances())||void 0===t?void 0:t.normal;if(!(a instanceof zo))return!0;if(o&&!a.has(o))return!0}return!1},n.prototype.defaultUpdateAppearances=function(){this.updateAppearances()},n.prototype.updateAppearances=function(t){var e;Dn(t,"provider",[Function]);for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r],a=null!==(e=o.getOnValue())&&void 0!==e?e:Co.of("Yes");a&&this.updateWidgetAppearance(o,a,t)}this.markAsClean()},n.prototype.updateWidgetAppearance=function(t,e,n){var r=ad((null!=n?n:dd)(this,t));this.updateOnOffWidgetAppearance(t,e,r)},n.of=function(t,e,r){return new n(t,e,r)},n}(Sd),Cd=function(t){function n(e,n,r){var i=t.call(this,e,n,r)||this;return Pn(e,"acroComboBox",[[_h,"PDFAcroComboBox"]]),i.acroField=e,i}return e(n,t),n.prototype.getOptions=function(){for(var t=this.acroField.getOptions(),e=new Array(t.length),n=0,r=e.length;n<r;n++){var i=t[n],o=i.display,a=i.value;e[n]=(null!=o?o:a).decodeText()}return e},n.prototype.getSelected=function(){for(var t=this.acroField.getValues(),e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]=t[n].decodeText();return e},n.prototype.setOptions=function(t){Pn(t,"options",[Array]);for(var e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]={value:Qo.fromText(t[n])};this.acroField.setOptions(e)},n.prototype.addOptions=function(t){Pn(t,"options",["string",Array]);for(var e=Array.isArray(t)?t:[t],n=this.acroField.getOptions(),r=new Array(e.length),i=0,o=e.length;i<o;i++)r[i]={value:Qo.fromText(e[i])};this.acroField.setOptions(n.concat(r))},n.prototype.select=function(t,e){void 0===e&&(e=!1),Pn(t,"options",["string",Array]),Pn(e,"merge",["boolean"]);var n=Array.isArray(t)?t:[t],r=this.getOptions();n.find((function(t){return!r.includes(t)}))&&this.enableEditing(),this.markAsDirty(),(n.length>1||1===n.length&&e)&&this.enableMultiselect();for(var i=new Array(n.length),o=0,a=n.length;o<a;o++)i[o]=Qo.fromText(n[o]);if(e){var s=this.acroField.getValues();this.acroField.setValues(s.concat(i))}else this.acroField.setValues(i)},n.prototype.clear=function(){this.markAsDirty(),this.acroField.setValues([])},n.prototype.setFontSize=function(t){Vn(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},n.prototype.isEditable=function(){return this.acroField.hasFlag(Dh.Edit)},n.prototype.enableEditing=function(){this.acroField.setFlagTo(Dh.Edit,!0)},n.prototype.disableEditing=function(){this.acroField.setFlagTo(Dh.Edit,!1)},n.prototype.isSorted=function(){return this.acroField.hasFlag(Dh.Sort)},n.prototype.enableSorting=function(){this.acroField.setFlagTo(Dh.Sort,!0)},n.prototype.disableSorting=function(){this.acroField.setFlagTo(Dh.Sort,!1)},n.prototype.isMultiselect=function(){return this.acroField.hasFlag(Dh.MultiSelect)},n.prototype.enableMultiselect=function(){this.acroField.setFlagTo(Dh.MultiSelect,!0)},n.prototype.disableMultiselect=function(){this.acroField.setFlagTo(Dh.MultiSelect,!1)},n.prototype.isSpellChecked=function(){return!this.acroField.hasFlag(Dh.DoNotSpellCheck)},n.prototype.enableSpellChecking=function(){this.acroField.setFlagTo(Dh.DoNotSpellCheck,!1)},n.prototype.disableSpellChecking=function(){this.acroField.setFlagTo(Dh.DoNotSpellCheck,!0)},n.prototype.isSelectOnClick=function(){return this.acroField.hasFlag(Dh.CommitOnSelChange)},n.prototype.enableSelectOnClick=function(){this.acroField.setFlagTo(Dh.CommitOnSelChange,!0)},n.prototype.disableSelectOnClick=function(){this.acroField.setFlagTo(Dh.CommitOnSelChange,!1)},n.prototype.addToPage=function(t,e){var n,r,i,o,a,s,h;Pn(t,"page",[[qd,"PDFPage"]]),kd(e),e||(e={}),"textColor"in e||(e.textColor=tc(0,0,0)),"backgroundColor"in e||(e.backgroundColor=tc(1,1,1)),"borderColor"in e||(e.borderColor=tc(0,0,0)),"borderWidth"in e||(e.borderWidth=1);var l=this.createWidget({x:null!==(n=e.x)&&void 0!==n?n:0,y:null!==(r=e.y)&&void 0!==r?r:0,width:null!==(i=e.width)&&void 0!==i?i:200,height:null!==(o=e.height)&&void 0!==o?o:50,textColor:e.textColor,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:null!==(a=e.borderWidth)&&void 0!==a?a:0,rotate:null!==(s=e.rotate)&&void 0!==s?s:Ml(0),hidden:e.hidden,page:t.ref}),u=this.doc.context.register(l.dict);this.acroField.addWidget(u);var c=null!==(h=e.font)&&void 0!==h?h:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(l,c),t.node.addAnnot(u)},n.prototype.needsAppearancesUpdate=function(){var t;if(this.isDirty())return!0;for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){if(!((null===(t=e[n].getAppearances())||void 0===t?void 0:t.normal)instanceof To))return!0}return!1},n.prototype.defaultUpdateAppearances=function(t){Pn(t,"font",[[bd,"PDFFont"]]),this.updateAppearances(t)},n.prototype.updateAppearances=function(t,e){Pn(t,"font",[[bd,"PDFFont"]]),Dn(e,"provider",[Function]);for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r];this.updateWidgetAppearance(o,t,e)}this.markAsClean()},n.prototype.updateWidgetAppearance=function(t,e,n){var r=ad((null!=n?n:vd)(this,t,e));this.updateWidgetAppearanceWithFont(t,e,r)},n.of=function(t,e,r){return new n(t,e,r)},n}(Sd),Ad=function(t){function n(e,n,r){var i=t.call(this,e,n,r)||this;return Pn(e,"acroListBox",[[$h,"PDFAcroListBox"]]),i.acroField=e,i}return e(n,t),n.prototype.getOptions=function(){for(var t=this.acroField.getOptions(),e=new Array(t.length),n=0,r=e.length;n<r;n++){var i=t[n],o=i.display,a=i.value;e[n]=(null!=o?o:a).decodeText()}return e},n.prototype.getSelected=function(){for(var t=this.acroField.getValues(),e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]=t[n].decodeText();return e},n.prototype.setOptions=function(t){Pn(t,"options",[Array]),this.markAsDirty();for(var e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]={value:Qo.fromText(t[n])};this.acroField.setOptions(e)},n.prototype.addOptions=function(t){Pn(t,"options",["string",Array]),this.markAsDirty();for(var e=Array.isArray(t)?t:[t],n=this.acroField.getOptions(),r=new Array(e.length),i=0,o=e.length;i<o;i++)r[i]={value:Qo.fromText(e[i])};this.acroField.setOptions(n.concat(r))},n.prototype.select=function(t,e){void 0===e&&(e=!1),Pn(t,"options",["string",Array]),Pn(e,"merge",["boolean"]);var n=Array.isArray(t)?t:[t],r=this.getOptions();On(n,"option",r),this.markAsDirty(),(n.length>1||1===n.length&&e)&&this.enableMultiselect();for(var i=new Array(n.length),o=0,a=n.length;o<a;o++)i[o]=Qo.fromText(n[o]);if(e){var s=this.acroField.getValues();this.acroField.setValues(s.concat(i))}else this.acroField.setValues(i)},n.prototype.clear=function(){this.markAsDirty(),this.acroField.setValues([])},n.prototype.setFontSize=function(t){Vn(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},n.prototype.isSorted=function(){return this.acroField.hasFlag(Dh.Sort)},n.prototype.enableSorting=function(){this.acroField.setFlagTo(Dh.Sort,!0)},n.prototype.disableSorting=function(){this.acroField.setFlagTo(Dh.Sort,!1)},n.prototype.isMultiselect=function(){return this.acroField.hasFlag(Dh.MultiSelect)},n.prototype.enableMultiselect=function(){this.acroField.setFlagTo(Dh.MultiSelect,!0)},n.prototype.disableMultiselect=function(){this.acroField.setFlagTo(Dh.MultiSelect,!1)},n.prototype.isSelectOnClick=function(){return this.acroField.hasFlag(Dh.CommitOnSelChange)},n.prototype.enableSelectOnClick=function(){this.acroField.setFlagTo(Dh.CommitOnSelChange,!0)},n.prototype.disableSelectOnClick=function(){this.acroField.setFlagTo(Dh.CommitOnSelChange,!1)},n.prototype.addToPage=function(t,e){var n,r,i,o,a,s,h;Pn(t,"page",[[qd,"PDFPage"]]),kd(e),e||(e={}),"textColor"in e||(e.textColor=tc(0,0,0)),"backgroundColor"in e||(e.backgroundColor=tc(1,1,1)),"borderColor"in e||(e.borderColor=tc(0,0,0)),"borderWidth"in e||(e.borderWidth=1);var l=this.createWidget({x:null!==(n=e.x)&&void 0!==n?n:0,y:null!==(r=e.y)&&void 0!==r?r:0,width:null!==(i=e.width)&&void 0!==i?i:200,height:null!==(o=e.height)&&void 0!==o?o:100,textColor:e.textColor,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:null!==(a=e.borderWidth)&&void 0!==a?a:0,rotate:null!==(s=e.rotate)&&void 0!==s?s:Ml(0),hidden:e.hidden,page:t.ref}),u=this.doc.context.register(l.dict);this.acroField.addWidget(u);var c=null!==(h=e.font)&&void 0!==h?h:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(l,c),t.node.addAnnot(u)},n.prototype.needsAppearancesUpdate=function(){var t;if(this.isDirty())return!0;for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){if(!((null===(t=e[n].getAppearances())||void 0===t?void 0:t.normal)instanceof To))return!0}return!1},n.prototype.defaultUpdateAppearances=function(t){Pn(t,"font",[[bd,"PDFFont"]]),this.updateAppearances(t)},n.prototype.updateAppearances=function(t,e){Pn(t,"font",[[bd,"PDFFont"]]),Dn(e,"provider",[Function]);for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r];this.updateWidgetAppearance(o,t,e)}this.markAsClean()},n.prototype.updateWidgetAppearance=function(t,e,n){var r=ad((null!=n?n:yd)(this,t,e));this.updateWidgetAppearanceWithFont(t,e,r)},n.of=function(t,e,r){return new n(t,e,r)},n}(Sd),zd=function(t){function n(e,n,r){var i=t.call(this,e,n,r)||this;return Pn(e,"acroRadioButton",[[Qh,"PDFAcroRadioButton"]]),i.acroField=e,i}return e(n,t),n.prototype.getOptions=function(){var t=this.acroField.getExportValues();if(t){for(var e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]=t[n].decodeText();return e}var i=this.acroField.getOnValues(),o=new Array(i.length);for(n=0,r=o.length;n<r;n++)o[n]=i[n].decodeText();return o},n.prototype.getSelected=function(){var t=this.acroField.getValue();if(t!==Co.of("Off")){var e=this.acroField.getExportValues();if(e)for(var n=this.acroField.getOnValues(),r=0,i=n.length;r<i;r++)if(n[r]===t)return e[r].decodeText();return t.decodeText()}},n.prototype.select=function(t){Pn(t,"option",["string"]);var e=this.getOptions();zn(t,"option",e),this.markAsDirty();var n=this.acroField.getOnValues(),r=this.acroField.getExportValues();if(r)for(var i=0,o=r.length;i<o;i++)r[i].decodeText()===t&&this.acroField.setValue(n[i]);else for(i=0,o=n.length;i<o;i++){var a=n[i];a.decodeText()===t&&this.acroField.setValue(a)}},n.prototype.clear=function(){this.markAsDirty(),this.acroField.setValue(Co.of("Off"))},n.prototype.isOffToggleable=function(){return!this.acroField.hasFlag(Nh.NoToggleToOff)},n.prototype.enableOffToggling=function(){this.acroField.setFlagTo(Nh.NoToggleToOff,!1)},n.prototype.disableOffToggling=function(){this.acroField.setFlagTo(Nh.NoToggleToOff,!0)},n.prototype.isMutuallyExclusive=function(){return!this.acroField.hasFlag(Nh.RadiosInUnison)},n.prototype.enableMutualExclusion=function(){this.acroField.setFlagTo(Nh.RadiosInUnison,!1)},n.prototype.disableMutualExclusion=function(){this.acroField.setFlagTo(Nh.RadiosInUnison,!0)},n.prototype.addOptionToPage=function(t,e,n){var r,i,o,a,s,h,l,u,c;Pn(t,"option",["string"]),Pn(e,"page",[[qd,"PDFPage"]]),kd(n);var d=this.createWidget({x:null!==(r=null==n?void 0:n.x)&&void 0!==r?r:0,y:null!==(i=null==n?void 0:n.y)&&void 0!==i?i:0,width:null!==(o=null==n?void 0:n.width)&&void 0!==o?o:50,height:null!==(a=null==n?void 0:n.height)&&void 0!==a?a:50,textColor:null!==(s=null==n?void 0:n.textColor)&&void 0!==s?s:tc(0,0,0),backgroundColor:null!==(h=null==n?void 0:n.backgroundColor)&&void 0!==h?h:tc(1,1,1),borderColor:null!==(l=null==n?void 0:n.borderColor)&&void 0!==l?l:tc(0,0,0),borderWidth:null!==(u=null==n?void 0:n.borderWidth)&&void 0!==u?u:1,rotate:null!==(c=null==n?void 0:n.rotate)&&void 0!==c?c:Ml(0),hidden:null==n?void 0:n.hidden,page:e.ref}),f=this.doc.context.register(d.dict),p=this.acroField.addWidgetWithOpt(f,Qo.fromText(t),!this.isMutuallyExclusive());d.setAppearanceState(Co.of("Off")),this.updateWidgetAppearance(d,p),e.node.addAnnot(f)},n.prototype.needsAppearancesUpdate=function(){for(var t,e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){var i=e[n],o=i.getAppearanceState(),a=null===(t=i.getAppearances())||void 0===t?void 0:t.normal;if(!(a instanceof zo))return!0;if(o&&!a.has(o))return!0}return!1},n.prototype.defaultUpdateAppearances=function(){this.updateAppearances()},n.prototype.updateAppearances=function(t){Dn(t,"provider",[Function]);for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){var i=e[n],o=i.getOnValue();o&&this.updateWidgetAppearance(i,o,t)}},n.prototype.updateWidgetAppearance=function(t,e,n){var r=ad((null!=n?n:fd)(this,t));this.updateOnOffWidgetAppearance(t,e,r)},n.of=function(t,e,r){return new n(t,e,r)},n}(Sd),Td=function(t){function n(e,n,r){var i=t.call(this,e,n,r)||this;return Pn(e,"acroSignature",[[Zh,"PDFAcroSignature"]]),i.acroField=e,i}return e(n,t),n.prototype.needsAppearancesUpdate=function(){return!1},n.of=function(t,e,r){return new n(t,e,r)},n}(Sd),Od=function(t){function n(e,n,r){var i=t.call(this,e,n,r)||this;return Pn(e,"acroText",[[Yh,"PDFAcroText"]]),i.acroField=e,i}return e(n,t),n.prototype.getText=function(){var t=this.acroField.getValue();if(!t&&this.isRichFormatted())throw new Zc(this.getName());return null==t?void 0:t.decodeText()},n.prototype.setText=function(t){Dn(t,"text",["string"]);var e=this.getMaxLength();if(void 0!==e&&t&&t.length>e)throw new Jc(t.length,e,this.getName());this.markAsDirty(),this.disableRichFormatting(),t?this.acroField.setValue(Qo.fromText(t)):this.acroField.removeValue()},n.prototype.getAlignment=function(){var t=this.acroField.getQuadding();return 0===t?Qu.Left:1===t?Qu.Center:2===t?Qu.Right:Qu.Left},n.prototype.setAlignment=function(t){zn(t,"alignment",Qu),this.markAsDirty(),this.acroField.setQuadding(t)},n.prototype.getMaxLength=function(){return this.acroField.getMaxLength()},n.prototype.setMaxLength=function(t){if(In(t,"maxLength",0,Number.MAX_SAFE_INTEGER),this.markAsDirty(),void 0===t)this.acroField.removeMaxLength();else{var e=this.getText();if(e&&e.length>t)throw new Qc(e.length,t,this.getName());this.acroField.setMaxLength(t)}},n.prototype.removeMaxLength=function(){this.markAsDirty(),this.acroField.removeMaxLength()},n.prototype.setImage=function(t){for(var e=this.getAlignment(),n=e===Qu.Center?$c.Center:e===Qu.Right?$c.Right:$c.Left,r=this.acroField.getWidgets(),i=0,o=r.length;i<o;i++){var a=r[i],s=this.createImageAppearanceStream(a,t,n);this.updateWidgetAppearances(a,{normal:s})}this.markAsClean()},n.prototype.setFontSize=function(t){Vn(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},n.prototype.isMultiline=function(){return this.acroField.hasFlag(Ph.Multiline)},n.prototype.enableMultiline=function(){this.markAsDirty(),this.acroField.setFlagTo(Ph.Multiline,!0)},n.prototype.disableMultiline=function(){this.markAsDirty(),this.acroField.setFlagTo(Ph.Multiline,!1)},n.prototype.isPassword=function(){return this.acroField.hasFlag(Ph.Password)},n.prototype.enablePassword=function(){this.acroField.setFlagTo(Ph.Password,!0)},n.prototype.disablePassword=function(){this.acroField.setFlagTo(Ph.Password,!1)},n.prototype.isFileSelector=function(){return this.acroField.hasFlag(Ph.FileSelect)},n.prototype.enableFileSelection=function(){this.acroField.setFlagTo(Ph.FileSelect,!0)},n.prototype.disableFileSelection=function(){this.acroField.setFlagTo(Ph.FileSelect,!1)},n.prototype.isSpellChecked=function(){return!this.acroField.hasFlag(Ph.DoNotSpellCheck)},n.prototype.enableSpellChecking=function(){this.acroField.setFlagTo(Ph.DoNotSpellCheck,!1)},n.prototype.disableSpellChecking=function(){this.acroField.setFlagTo(Ph.DoNotSpellCheck,!0)},n.prototype.isScrollable=function(){return!this.acroField.hasFlag(Ph.DoNotScroll)},n.prototype.enableScrolling=function(){this.acroField.setFlagTo(Ph.DoNotScroll,!1)},n.prototype.disableScrolling=function(){this.acroField.setFlagTo(Ph.DoNotScroll,!0)},n.prototype.isCombed=function(){return this.acroField.hasFlag(Ph.Comb)&&!this.isMultiline()&&!this.isPassword()&&!this.isFileSelector()&&void 0!==this.getMaxLength()},n.prototype.enableCombing=function(){if(void 0===this.getMaxLength()){console.warn("PDFTextFields must have a max length in order to be combed")}this.markAsDirty(),this.disableMultiline(),this.disablePassword(),this.disableFileSelection(),this.acroField.setFlagTo(Ph.Comb,!0)},n.prototype.disableCombing=function(){this.markAsDirty(),this.acroField.setFlagTo(Ph.Comb,!1)},n.prototype.isRichFormatted=function(){return this.acroField.hasFlag(Ph.RichText)},n.prototype.enableRichFormatting=function(){this.acroField.setFlagTo(Ph.RichText,!0)},n.prototype.disableRichFormatting=function(){this.acroField.setFlagTo(Ph.RichText,!1)},n.prototype.addToPage=function(t,e){var n,r,i,o,a,s,h;Pn(t,"page",[[qd,"PDFPage"]]),kd(e),e||(e={}),"textColor"in e||(e.textColor=tc(0,0,0)),"backgroundColor"in e||(e.backgroundColor=tc(1,1,1)),"borderColor"in e||(e.borderColor=tc(0,0,0)),"borderWidth"in e||(e.borderWidth=1);var l=this.createWidget({x:null!==(n=e.x)&&void 0!==n?n:0,y:null!==(r=e.y)&&void 0!==r?r:0,width:null!==(i=e.width)&&void 0!==i?i:200,height:null!==(o=e.height)&&void 0!==o?o:50,textColor:e.textColor,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:null!==(a=e.borderWidth)&&void 0!==a?a:0,rotate:null!==(s=e.rotate)&&void 0!==s?s:Ml(0),hidden:e.hidden,page:t.ref}),u=this.doc.context.register(l.dict);this.acroField.addWidget(u);var c=null!==(h=e.font)&&void 0!==h?h:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(l,c),t.node.addAnnot(u)},n.prototype.needsAppearancesUpdate=function(){var t;if(this.isDirty())return!0;for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){if(!((null===(t=e[n].getAppearances())||void 0===t?void 0:t.normal)instanceof To))return!0}return!1},n.prototype.defaultUpdateAppearances=function(t){Pn(t,"font",[[bd,"PDFFont"]]),this.updateAppearances(t)},n.prototype.updateAppearances=function(t,e){Pn(t,"font",[[bd,"PDFFont"]]),Dn(e,"provider",[Function]);for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r];this.updateWidgetAppearance(o,t,e)}this.markAsClean()},n.prototype.updateWidgetAppearance=function(t,e,n){var r=ad((null!=n?n:gd)(this,t,e));this.updateWidgetAppearanceWithFont(t,e,r)},n.of=function(t,e,r){return new n(t,e,r)},n}(Sd);!function(t){t.Courier="Courier",t.CourierBold="Courier-Bold",t.CourierOblique="Courier-Oblique",t.CourierBoldOblique="Courier-BoldOblique",t.Helvetica="Helvetica",t.HelveticaBold="Helvetica-Bold",t.HelveticaOblique="Helvetica-Oblique",t.HelveticaBoldOblique="Helvetica-BoldOblique",t.TimesRoman="Times-Roman",t.TimesRomanBold="Times-Bold",t.TimesRomanItalic="Times-Italic",t.TimesRomanBoldItalic="Times-BoldItalic",t.Symbol="Symbol",t.ZapfDingbats="ZapfDingbats"}(xd||(xd={}));var Rd,Bd=function(){function t(t,e){var n=this;this.embedDefaultFont=function(){return n.doc.embedStandardFont(xd.Helvetica)},Pn(t,"acroForm",[[ll,"PDFAcroForm"]]),Pn(e,"doc",[[Vd,"PDFDocument"]]),this.acroForm=t,this.doc=e,this.dirtyFields=new Set,this.defaultFontCache=Gn.populatedBy(this.embedDefaultFont)}return t.prototype.hasXFA=function(){return this.acroForm.dict.has(Co.of("XFA"))},t.prototype.deleteXFA=function(){this.acroForm.dict.delete(Co.of("XFA"))},t.prototype.getFields=function(){for(var t=this.acroForm.getAllFields(),e=[],n=0,r=t.length;n<r;n++){var i=t[n],o=i[0],a=i[1],s=Nd(o,a,this.doc);s&&e.push(s)}return e},t.prototype.getFieldMaybe=function(t){Pn(t,"name",["string"]);for(var e=this.getFields(),n=0,r=e.length;n<r;n++){var i=e[n];if(i.getName()===t)return i}},t.prototype.getField=function(t){Pn(t,"name",["string"]);var e=this.getFieldMaybe(t);if(e)return e;throw new Kc(t)},t.prototype.getButton=function(t){Pn(t,"name",["string"]);var e=this.getField(t);if(e instanceof Kd)return e;throw new Lc(t,Kd,e)},t.prototype.getCheckBox=function(t){Pn(t,"name",["string"]);var e=this.getField(t);if(e instanceof Fd)return e;throw new Lc(t,Fd,e)},t.prototype.getDropdown=function(t){Pn(t,"name",["string"]);var e=this.getField(t);if(e instanceof Cd)return e;throw new Lc(t,Cd,e)},t.prototype.getOptionList=function(t){Pn(t,"name",["string"]);var e=this.getField(t);if(e instanceof Ad)return e;throw new Lc(t,Ad,e)},t.prototype.getRadioGroup=function(t){Pn(t,"name",["string"]);var e=this.getField(t);if(e instanceof zd)return e;throw new Lc(t,zd,e)},t.prototype.getSignature=function(t){Pn(t,"name",["string"]);var e=this.getField(t);if(e instanceof Td)return e;throw new Lc(t,Td,e)},t.prototype.getTextField=function(t){Pn(t,"name",["string"]);var e=this.getField(t);if(e instanceof Od)return e;throw new Lc(t,Od,e)},t.prototype.createButton=function(t){Pn(t,"name",["string"]);var e=Pd(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=Jh.create(this.doc.context);return r.setPartialName(e.terminal),Dd(n,[r,r.ref],e.terminal),Kd.of(r,r.ref,this.doc)},t.prototype.createCheckBox=function(t){Pn(t,"name",["string"]);var e=Pd(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=Lh.create(this.doc.context);return r.setPartialName(e.terminal),Dd(n,[r,r.ref],e.terminal),Fd.of(r,r.ref,this.doc)},t.prototype.createDropdown=function(t){Pn(t,"name",["string"]);var e=Pd(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=_h.create(this.doc.context);return r.setPartialName(e.terminal),Dd(n,[r,r.ref],e.terminal),Cd.of(r,r.ref,this.doc)},t.prototype.createOptionList=function(t){Pn(t,"name",["string"]);var e=Pd(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=$h.create(this.doc.context);return r.setPartialName(e.terminal),Dd(n,[r,r.ref],e.terminal),Ad.of(r,r.ref,this.doc)},t.prototype.createRadioGroup=function(t){Pn(t,"name",["string"]);var e=Pd(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=Qh.create(this.doc.context);return r.setPartialName(e.terminal),Dd(n,[r,r.ref],e.terminal),zd.of(r,r.ref,this.doc)},t.prototype.createTextField=function(t){Pn(t,"name",["string"]);var e=Pd(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=Yh.create(this.doc.context);return r.setPartialName(e.terminal),Dd(n,[r,r.ref],e.terminal),Od.of(r,r.ref,this.doc)},t.prototype.flatten=function(t){void 0===t&&(t={updateFieldAppearances:!0}),t.updateFieldAppearances&&this.updateFieldAppearances();for(var e=this.getFields(),r=0,i=e.length;r<i;r++){for(var a=e[r],s=a.acroField.getWidgets(),h=0,l=s.length;h<l;h++){var u=s[h],c=this.findWidgetPage(u),d=this.findWidgetAppearanceRef(a,u),f=c.node.newXObject("FlatWidget",d),p=u.getRectangle(),g=o([fu(),tu(p.x,p.y)],Nc(n(n({},p),{rotation:0})),[Ku(f),pu()]).filter(Boolean);c.pushOperators.apply(c,g)}this.removeField(a)}},t.prototype.removeField=function(t){for(var e=t.acroField.getWidgets(),n=new Set,r=0,i=e.length;r<i;r++){var o=e[r],a=this.findWidgetAppearanceRef(t,o),s=this.findWidgetPage(o);n.add(s),s.node.removeAnnot(a)}n.forEach((function(e){return e.node.removeAnnot(t.ref)})),this.acroForm.removeField(t.acroField);for(var h=t.acroField.normalizedEntries().Kids,l=h.size(),u=0;u<l;u++){var c=h.get(u);c instanceof No&&this.doc.context.delete(c)}this.doc.context.delete(t.ref)},t.prototype.updateFieldAppearances=function(t){Dn(t,"font",[[bd,"PDFFont"]]),t=null!=t?t:this.getDefaultFont();for(var e=this.getFields(),n=0,r=e.length;n<r;n++){var i=e[n];i.needsAppearancesUpdate()&&i.defaultUpdateAppearances(t)}},t.prototype.markFieldAsDirty=function(t){Dn(t,"fieldRef",[[No,"PDFRef"]]),this.dirtyFields.add(t)},t.prototype.markFieldAsClean=function(t){Dn(t,"fieldRef",[[No,"PDFRef"]]),this.dirtyFields.delete(t)},t.prototype.fieldIsDirty=function(t){return Dn(t,"fieldRef",[[No,"PDFRef"]]),this.dirtyFields.has(t)},t.prototype.getDefaultFont=function(){return this.defaultFontCache.access()},t.prototype.findWidgetPage=function(t){var e=t.P(),n=this.doc.getPages().find((function(t){return t.ref===e}));if(void 0===n){var r=this.doc.context.getObjectRef(t.dict);if(void 0===r)throw new Error("Could not find PDFRef for PDFObject");if(void 0===(n=this.doc.findPageForAnnotationRef(r)))throw new Error("Could not find page for PDFRef "+r)}return n},t.prototype.findWidgetAppearanceRef=function(t,e){var n,r=e.getNormalAppearance();if(r instanceof zo&&(t instanceof Fd||t instanceof zd)){var i=t.acroField.getValue(),o=null!==(n=r.get(i))&&void 0!==n?n:r.get(Co.of("Off"));o instanceof No&&(r=o)}if(!(r instanceof No)){var a=t.getName();throw new Error("Failed to extract appearance ref for: "+a)}return r},t.prototype.findOrCreateNonTerminals=function(t){for(var e=[this.acroForm],n=0,r=t.length;n<r;n++){var i=t[n];if(!i)throw new _c(i);var o=e[0],a=e[1],s=this.findNonTerminal(i,o);if(s)e=s;else{var h=Xh.create(this.doc.context);h.setPartialName(i),h.setParent(a);var l=this.doc.context.register(h.dict);o.addField(l),e=[h,l]}}return e},t.prototype.findNonTerminal=function(t,e){for(var n=e instanceof ll?this.acroForm.getFields():tl(e.Kids()),r=0,i=n.length;r<i;r++){var o=n[r],a=o[0],s=o[1];if(a.getPartialName()===t){if(a instanceof Xh)return[a,s];throw new Hc(t)}}},t.of=function(e,n){return new t(e,n)},t}(),Nd=function(t,e,n){return t instanceof Jh?Kd.of(t,e,n):t instanceof Lh?Fd.of(t,e,n):t instanceof _h?Cd.of(t,e,n):t instanceof $h?Ad.of(t,e,n):t instanceof Yh?Od.of(t,e,n):t instanceof Qh?zd.of(t,e,n):t instanceof Zh?Td.of(t,e,n):void 0},Pd=function(t){if(0===t.length)throw new Error("PDF field names must not be empty strings");for(var e=t.split("."),n=0,r=e.length;n<r;n++)if(""===e[n])throw new Error('Periods in PDF field names must be separated by at least one character: "'+t+'"');return 1===e.length?{nonTerminal:[],terminal:e[0]}:{nonTerminal:e.slice(0,e.length-1),terminal:e[e.length-1]}},Dd=function(t,e,n){for(var r=t[0],i=t[1],o=e[0],a=e[1],s=r.normalizedEntries(),h=(tl("Kids"in s?s.Kids:s.Fields)),l=0,u=h.length;l<u;l++)if(h[l][0].getPartialName()===n)throw new Hc(n);r.addField(a),o.setParent(i)},jd={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],Executive:[521.86,756],Folio:[612,936],Legal:[612,1008],Letter:[612,792],Tabloid:[792,1224]};!function(t){t[t.Fastest=1/0]="Fastest",t[t.Fast=1500]="Fast",t[t.Medium=500]="Medium",t[t.Slow=100]="Slow"}(Rd||(Rd={}));var Ed,Id=function(){function t(t,e,n){this.alreadyEmbedded=!1,this.ref=t,this.doc=e,this.embedder=n}return t.prototype.embed=function(){return r(this,void 0,void 0,(function(){var t,e,n,r;return i(this,(function(i){switch(i.label){case 0:return this.alreadyEmbedded?[3,2]:[4,this.embedder.embedIntoContext(this.doc.context,this.ref)];case 1:t=i.sent(),this.doc.catalog.has(Co.of("Names"))||this.doc.catalog.set(Co.of("Names"),this.doc.context.obj({})),(e=this.doc.catalog.lookup(Co.of("Names"),zo)).has(Co.of("EmbeddedFiles"))||e.set(Co.of("EmbeddedFiles"),this.doc.context.obj({})),(n=e.lookup(Co.of("EmbeddedFiles"),zo)).has(Co.of("Names"))||n.set(Co.of("Names"),this.doc.context.obj([])),(r=n.lookup(Co.of("Names"),go)).push(Qo.fromText(this.embedder.fileName)),r.push(t),this.doc.catalog.has(Co.of("AF"))||this.doc.catalog.set(Co.of("AF"),this.doc.context.obj([])),this.doc.catalog.lookup(Co.of("AF"),go).push(t),this.alreadyEmbedded=!0,i.label=2;case 2:return[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}(),Md=function(){function t(t,e,n){this.alreadyEmbedded=!1,this.ref=t,this.doc=e,this.embedder=n}return t.prototype.embed=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,o,a,s;return i(this,(function(i){switch(i.label){case 0:return this.alreadyEmbedded?[3,2]:(t=this.doc,e=t.catalog,n=t.context,[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]);case 1:r=i.sent(),e.has(Co.of("Names"))||e.set(Co.of("Names"),n.obj({})),(o=e.lookup(Co.of("Names"),zo)).has(Co.of("JavaScript"))||o.set(Co.of("JavaScript"),n.obj({})),(a=o.lookup(Co.of("JavaScript"),zo)).has(Co.of("Names"))||a.set(Co.of("Names"),n.obj([])),(s=a.lookup(Co.of("Names"),go)).push(Qo.fromText(this.embedder.scriptName)),s.push(r),this.alreadyEmbedded=!0,i.label=2;case 2:return[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}(),Ud=function(){function t(t,e){this.script=t,this.scriptName=e}return t.for=function(e,n){return new t(e,n)},t.prototype.embedIntoContext=function(t,e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){return n=t.obj({Type:"Action",S:"JavaScript",JS:Qo.fromText(this.script)}),e?(t.assign(e,n),[2,e]):[2,t.register(n)]}))}))},t}(),Vd=function(){function t(t,e,n){var r=this;if(this.defaultWordBreaks=[" "],this.computePages=function(){var t=[];return r.catalog.Pages().traverse((function(e,n){if(e instanceof Wo){var i=r.pageMap.get(e);i||(i=qd.of(e,n,r),r.pageMap.set(e,i)),t.push(i)}})),t},this.getOrCreateForm=function(){var t=r.catalog.getOrCreateAcroForm();return Bd.of(t,r)},Pn(t,"context",[[Vo,"PDFContext"]]),Pn(e,"ignoreEncryption",["boolean"]),this.context=t,this.catalog=t.lookup(t.trailerInfo.Root),this.isEncrypted=!!t.lookup(t.trailerInfo.Encrypt),this.pageCache=Gn.populatedBy(this.computePages),this.pageMap=new Map,this.formCache=Gn.populatedBy(this.getOrCreateForm),this.fonts=[],this.images=[],this.embeddedPages=[],this.embeddedFiles=[],this.javaScripts=[],!e&&this.isEncrypted)throw new Uc;n&&this.updateInfoDict()}return t.load=function(e,n){return void 0===n&&(n={}),r(this,void 0,void 0,(function(){var r,o,a,s,h,l,u,c,d,f,p;return i(this,(function(i){switch(i.label){case 0:return r=n.ignoreEncryption,o=void 0!==r&&r,a=n.parseSpeed,s=void 0===a?Rd.Slow:a,h=n.throwOnInvalidObject,l=void 0!==h&&h,u=n.updateMetadata,c=void 0===u||u,d=n.capNumbers,f=void 0!==d&&d,Pn(e,"pdf",["string",Uint8Array,ArrayBuffer]),Pn(o,"ignoreEncryption",["boolean"]),Pn(s,"parseSpeed",["number"]),Pn(l,"throwOnInvalidObject",["boolean"]),p=X(e),[4,Rl.forBytesWithOptions(p,s,l,f).parseDocument()];case 1:return[2,new t(i.sent(),o,c)]}}))}))},t.create=function(e){return void 0===e&&(e={}),r(this,void 0,void 0,(function(){var n,r,o,a,s,h;return i(this,(function(i){return n=e.updateMetadata,r=void 0===n||n,o=Vo.create(),a=cl.withContext(o),s=o.register(a),h=ul.withContextAndPages(o,s),o.trailerInfo.Root=o.register(h),[2,new t(o,!1,r)]}))}))},t.prototype.registerFontkit=function(t){this.fontkit=t},t.prototype.getForm=function(){var t=this.formCache.access();return t.hasXFA()&&(console.warn("Removing XFA form data as pdf-lib does not support reading or writing XFA"),t.deleteXFA()),t},t.prototype.getTitle=function(){var t=this.getInfoDict().lookup(Co.Title);if(t)return Wd(t),t.decodeText()},t.prototype.getAuthor=function(){var t=this.getInfoDict().lookup(Co.Author);if(t)return Wd(t),t.decodeText()},t.prototype.getSubject=function(){var t=this.getInfoDict().lookup(Co.Subject);if(t)return Wd(t),t.decodeText()},t.prototype.getKeywords=function(){var t=this.getInfoDict().lookup(Co.Keywords);if(t)return Wd(t),t.decodeText()},t.prototype.getCreator=function(){var t=this.getInfoDict().lookup(Co.Creator);if(t)return Wd(t),t.decodeText()},t.prototype.getProducer=function(){var t=this.getInfoDict().lookup(Co.Producer);if(t)return Wd(t),t.decodeText()},t.prototype.getCreationDate=function(){var t=this.getInfoDict().lookup(Co.CreationDate);if(t)return Wd(t),t.decodeDate()},t.prototype.getModificationDate=function(){var t=this.getInfoDict().lookup(Co.ModDate);if(t)return Wd(t),t.decodeDate()},t.prototype.setTitle=function(t,e){Pn(t,"title",["string"]);var n=Co.of("Title");(this.getInfoDict().set(n,Qo.fromText(t)),null==e?void 0:e.showInWindowTitleBar)&&this.catalog.getOrCreateViewerPreferences().setDisplayDocTitle(!0)},t.prototype.setAuthor=function(t){Pn(t,"author",["string"]);var e=Co.of("Author");this.getInfoDict().set(e,Qo.fromText(t))},t.prototype.setSubject=function(t){Pn(t,"author",["string"]);var e=Co.of("Subject");this.getInfoDict().set(e,Qo.fromText(t))},t.prototype.setKeywords=function(t){Pn(t,"keywords",[Array]);var e=Co.of("Keywords");this.getInfoDict().set(e,Qo.fromText(t.join(" ")))},t.prototype.setCreator=function(t){Pn(t,"creator",["string"]);var e=Co.of("Creator");this.getInfoDict().set(e,Qo.fromText(t))},t.prototype.setProducer=function(t){Pn(t,"creator",["string"]);var e=Co.of("Producer");this.getInfoDict().set(e,Qo.fromText(t))},t.prototype.setLanguage=function(t){Pn(t,"language",["string"]);var e=Co.of("Lang");this.catalog.set(e,ia.of(t))},t.prototype.setCreationDate=function(t){Pn(t,"creationDate",[[Date,"Date"]]);var e=Co.of("CreationDate");this.getInfoDict().set(e,ia.fromDate(t))},t.prototype.setModificationDate=function(t){Pn(t,"modificationDate",[[Date,"Date"]]);var e=Co.of("ModDate");this.getInfoDict().set(e,ia.fromDate(t))},t.prototype.getPageCount=function(){return void 0===this.pageCount&&(this.pageCount=this.getPages().length),this.pageCount},t.prototype.getPages=function(){return this.pageCache.access()},t.prototype.getPage=function(t){var e=this.getPages();return En(t,"index",0,e.length-1),e[t]},t.prototype.getPageIndices=function(){return G(0,this.getPageCount())},t.prototype.removePage=function(t){var e=this.getPageCount();if(0===this.pageCount)throw new qc;En(t,"index",0,e-1),this.catalog.removeLeafNode(t),this.pageCount=e-1},t.prototype.addPage=function(t){return Pn(t,"page",["undefined",[qd,"PDFPage"],Array]),this.insertPage(this.getPageCount(),t)},t.prototype.insertPage=function(t,e){var n=this.getPageCount();if(En(t,"index",0,n),Pn(e,"page",["undefined",[qd,"PDFPage"],Array]),!e||Array.isArray(e)){var r=Array.isArray(e)?e:jd.A4;(e=qd.create(this)).setSize.apply(e,r)}else if(e.doc!==this)throw new Wc;var i=this.catalog.insertLeafNode(e.ref,t);return e.node.setParent(i),this.pageMap.set(e.node,e),this.pageCache.invalidate(),this.pageCount=n+1,e},t.prototype.copyPages=function(e,n){return r(this,void 0,void 0,(function(){var r,o,a,s,h,l,u,c;return i(this,(function(i){switch(i.label){case 0:return Pn(e,"srcDoc",[[t,"PDFDocument"]]),Pn(n,"indices",[Array]),[4,e.flush()];case 1:for(i.sent(),r=qo.for(e.context,this.context),o=e.getPages(),a=new Array(n.length),s=0,h=n.length;s<h;s++)l=o[n[s]],u=r.copy(l.node),c=this.context.register(u),a[s]=qd.of(u,c,this);return[2,a]}}))}))},t.prototype.copy=function(){return r(this,void 0,void 0,(function(){var e,n,r,o;return i(this,(function(i){switch(i.label){case 0:return[4,t.create()];case 1:return[4,(e=i.sent()).copyPages(this,this.getPageIndices())];case 2:for(n=i.sent(),r=0,o=n.length;r<o;r++)e.addPage(n[r]);return void 0!==this.getAuthor()&&e.setAuthor(this.getAuthor()),void 0!==this.getCreationDate()&&e.setCreationDate(this.getCreationDate()),void 0!==this.getCreator()&&e.setCreator(this.getCreator()),void 0!==this.getModificationDate()&&e.setModificationDate(this.getModificationDate()),void 0!==this.getProducer()&&e.setProducer(this.getProducer()),void 0!==this.getSubject()&&e.setSubject(this.getSubject()),void 0!==this.getTitle()&&e.setTitle(this.getTitle()),e.defaultWordBreaks=this.defaultWordBreaks,[2,e]}}))}))},t.prototype.addJavaScript=function(t,e){Pn(t,"name",["string"]),Pn(e,"script",["string"]);var n=Ud.for(e,t),r=this.context.nextRef(),i=Md.of(r,this,n);this.javaScripts.push(i)},t.prototype.attach=function(t,e,n){return void 0===n&&(n={}),r(this,void 0,void 0,(function(){var r,o,a,s;return i(this,(function(i){return Pn(t,"attachment",["string",Uint8Array,ArrayBuffer]),Pn(e,"name",["string"]),Dn(n.mimeType,"mimeType",["string"]),Dn(n.description,"description",["string"]),Dn(n.creationDate,"options.creationDate",[Date]),Dn(n.modificationDate,"options.modificationDate",[Date]),Tn(n.afRelationship,"options.afRelationship",Zo),r=X(t),o=ha.for(r,e,n),a=this.context.nextRef(),s=Id.of(a,this,o),this.embeddedFiles.push(s),[2]}))}))},t.prototype.embedFont=function(t,e){return void 0===e&&(e={}),r(this,void 0,void 0,(function(){var n,r,o,a,s,h,l,u,c,d;return i(this,(function(i){switch(i.label){case 0:return n=e.subset,r=void 0!==n&&n,o=e.customName,a=e.features,Pn(t,"font",["string",Uint8Array,ArrayBuffer]),Pn(r,"subset",["boolean"]),xn(t)?(s=$o.for(t,o),[3,7]):[3,1];case 1:return _(t)?(h=X(t),l=this.assertFontkit(),r?[4,aa.for(l,h,o,a)]:[3,3]):[3,6];case 2:return u=i.sent(),[3,5];case 3:return[4,oa.for(l,h,o,a)];case 4:u=i.sent(),i.label=5;case 5:return s=u,[3,7];case 6:throw new TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`");case 7:return c=this.context.nextRef(),d=bd.of(c,this,s),this.fonts.push(d),[2,d]}}))}))},t.prototype.embedStandardFont=function(t,e){if(Pn(t,"font",["string"]),!xn(t))throw new TypeError("`font` must be one of type `StandardFonts`");var n=$o.for(t,e),r=this.context.nextRef(),i=bd.of(r,this,n);return this.fonts.push(i),i},t.prototype.embedJpg=function(t){return r(this,void 0,void 0,(function(){var e,n,r,o;return i(this,(function(i){switch(i.label){case 0:return Pn(t,"jpg",["string",Uint8Array,ArrayBuffer]),e=X(t),[4,ca.for(e)];case 1:return n=i.sent(),r=this.context.nextRef(),o=wd.of(r,this,n),this.images.push(o),[2,o]}}))}))},t.prototype.embedPng=function(t){return r(this,void 0,void 0,(function(){var e,n,r,o;return i(this,(function(i){switch(i.label){case 0:return Pn(t,"png",["string",Uint8Array,ArrayBuffer]),e=X(t),[4,dh.for(e)];case 1:return n=i.sent(),r=this.context.nextRef(),o=wd.of(r,this,n),this.images.push(o),[2,o]}}))}))},t.prototype.embedPdf=function(e,n){return void 0===n&&(n=[0]),r(this,void 0,void 0,(function(){var r,o;return i(this,(function(i){switch(i.label){case 0:return Pn(e,"pdf",["string",Uint8Array,ArrayBuffer,[t,"PDFDocument"]]),Pn(n,"indices",[Array]),e instanceof t?(r=e,[3,3]):[3,1];case 1:return[4,t.load(e)];case 2:r=i.sent(),i.label=3;case 3:return o=H(r.getPages(),n),[2,this.embedPages(o)]}}))}))},t.prototype.embedPage=function(t,e,n){return r(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return Pn(t,"page",[[qd,"PDFPage"]]),[4,this.embedPages([t],[e],[n])];case 1:return[2,r.sent()[0]]}}))}))},t.prototype.embedPages=function(t,e,n){return void 0===e&&(e=[]),void 0===n&&(n=[]),r(this,void 0,void 0,(function(){var r,o,a,s,h,l,u,c,d,f,p,g,v;return i(this,(function(i){switch(i.label){case 0:if(0===t.length)return[2,[]];for(l=0,u=t.length-1;l<u;l++)if(r=t[l],o=t[l+1],r.node.context!==o.node.context)throw new tr;a=t[0].node.context,s=a===this.context?function(t){return t}:qo.for(a,this.context).copy,h=new Array(t.length),l=0,u=t.length,i.label=1;case 1:return l<u?(c=s(t[l].node),d=e[l],f=n[l],[4,Oh.for(c,d,f)]):[3,4];case 2:p=i.sent(),g=this.context.nextRef(),h[l]=md.of(g,this,p),i.label=3;case 3:return l++,[3,1];case 4:return(v=this.embeddedPages).push.apply(v,h),[2,h]}}))}))},t.prototype.flush=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.embedAll(this.fonts)];case 1:return t.sent(),[4,this.embedAll(this.images)];case 2:return t.sent(),[4,this.embedAll(this.embeddedPages)];case 3:return t.sent(),[4,this.embedAll(this.embeddedFiles)];case 4:return t.sent(),[4,this.embedAll(this.javaScripts)];case 5:return t.sent(),[2]}}))}))},t.prototype.save=function(t){return void 0===t&&(t={}),r(this,void 0,void 0,(function(){var e,n,r,o,a,s,h,l,u;return i(this,(function(i){switch(i.label){case 0:return e=t.useObjectStreams,n=void 0===e||e,r=t.addDefaultPage,o=void 0===r||r,a=t.objectsPerTick,s=void 0===a?50:a,h=t.updateFieldAppearances,l=void 0===h||h,Pn(n,"useObjectStreams",["boolean"]),Pn(o,"addDefaultPage",["boolean"]),Pn(s,"objectsPerTick",["number"]),Pn(l,"updateFieldAppearances",["boolean"]),o&&0===this.getPageCount()&&this.addPage(),l&&(u=this.formCache.getValue())&&u.updateFieldAppearances(),[4,this.flush()];case 1:return i.sent(),[2,(n?Jo:_o).forContext(this.context,s).serializeToBuffer()]}}))}))},t.prototype.saveAsBase64=function(t){return void 0===t&&(t={}),r(this,void 0,void 0,(function(){var e,n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return e=t.dataUri,n=void 0!==e&&e,r=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["dataUri"]),Pn(n,"dataUri",["boolean"]),[4,this.save(r)];case 1:return o=i.sent(),a=u(o),[2,n?"data:application/pdf;base64,"+a:a]}}))}))},t.prototype.findPageForAnnotationRef=function(t){for(var e=this.getPages(),n=0,r=e.length;n<r;n++){var i=e[n],o=i.node.Annots();if(void 0!==(null==o?void 0:o.indexOf(t)))return i}},t.prototype.embedAll=function(t){return r(this,void 0,void 0,(function(){var e,n;return i(this,(function(r){switch(r.label){case 0:e=0,n=t.length,r.label=1;case 1:return e<n?[4,t[e].embed()]:[3,4];case 2:r.sent(),r.label=3;case 3:return e++,[3,1];case 4:return[2]}}))}))},t.prototype.updateInfoDict=function(){var t="pdf-lib (https://github.com/Hopding/pdf-lib)",e=new Date,n=this.getInfoDict();this.setProducer(t),this.setModificationDate(e),n.get(Co.of("Creator"))||this.setCreator(t),n.get(Co.of("CreationDate"))||this.setCreationDate(e)},t.prototype.getInfoDict=function(){var t=this.context.lookup(this.context.trailerInfo.Info);if(t instanceof zo)return t;var e=this.context.obj({});return this.context.trailerInfo.Info=this.context.register(e),e},t.prototype.assertFontkit=function(){if(!this.fontkit)throw new Vc;return this.fontkit},t}();function Wd(t){if(!(t instanceof Qo||t instanceof ia))throw new Xn([Qo,ia],t)}!function(t){t.Normal="Normal",t.Multiply="Multiply",t.Screen="Screen",t.Overlay="Overlay",t.Darken="Darken",t.Lighten="Lighten",t.ColorDodge="ColorDodge",t.ColorBurn="ColorBurn",t.HardLight="HardLight",t.SoftLight="SoftLight",t.Difference="Difference",t.Exclusion="Exclusion"}(Ed||(Ed={}));var qd=function(){function t(t,e,n){this.fontSize=24,this.fontColor=tc(0,0,0),this.lineHeight=24,this.x=0,this.y=0,Pn(t,"leafNode",[[Wo,"PDFPageLeaf"]]),Pn(e,"ref",[[No,"PDFRef"]]),Pn(n,"doc",[[Vd,"PDFDocument"]]),this.node=t,this.ref=e,this.doc=n}return t.prototype.setRotation=function(t){var e=Ll(t);Mn(e,"degreesAngle",90),this.node.set(Co.of("Rotate"),this.doc.context.obj(e))},t.prototype.getRotation=function(){var t=this.node.Rotate();return Ml(t?t.asNumber():0)},t.prototype.setSize=function(t,e){Pn(t,"width",["number"]),Pn(e,"height",["number"]);var n=this.getMediaBox();this.setMediaBox(n.x,n.y,t,e);var r=this.getCropBox(),i=this.getBleedBox(),o=this.getTrimBox(),a=this.getArtBox(),s=this.node.CropBox(),h=this.node.BleedBox(),l=this.node.TrimBox(),u=this.node.ArtBox();s&&kn(r,n)&&this.setCropBox(n.x,n.y,t,e),h&&kn(i,n)&&this.setBleedBox(n.x,n.y,t,e),l&&kn(o,n)&&this.setTrimBox(n.x,n.y,t,e),u&&kn(a,n)&&this.setArtBox(n.x,n.y,t,e)},t.prototype.setWidth=function(t){Pn(t,"width",["number"]),this.setSize(t,this.getSize().height)},t.prototype.setHeight=function(t){Pn(t,"height",["number"]),this.setSize(this.getSize().width,t)},t.prototype.setMediaBox=function(t,e,n,r){Pn(t,"x",["number"]),Pn(e,"y",["number"]),Pn(n,"width",["number"]),Pn(r,"height",["number"]);var i=this.doc.context.obj([t,e,t+n,e+r]);this.node.set(Co.MediaBox,i)},t.prototype.setCropBox=function(t,e,n,r){Pn(t,"x",["number"]),Pn(e,"y",["number"]),Pn(n,"width",["number"]),Pn(r,"height",["number"]);var i=this.doc.context.obj([t,e,t+n,e+r]);this.node.set(Co.CropBox,i)},t.prototype.setBleedBox=function(t,e,n,r){Pn(t,"x",["number"]),Pn(e,"y",["number"]),Pn(n,"width",["number"]),Pn(r,"height",["number"]);var i=this.doc.context.obj([t,e,t+n,e+r]);this.node.set(Co.BleedBox,i)},t.prototype.setTrimBox=function(t,e,n,r){Pn(t,"x",["number"]),Pn(e,"y",["number"]),Pn(n,"width",["number"]),Pn(r,"height",["number"]);var i=this.doc.context.obj([t,e,t+n,e+r]);this.node.set(Co.TrimBox,i)},t.prototype.setArtBox=function(t,e,n,r){Pn(t,"x",["number"]),Pn(e,"y",["number"]),Pn(n,"width",["number"]),Pn(r,"height",["number"]);var i=this.doc.context.obj([t,e,t+n,e+r]);this.node.set(Co.ArtBox,i)},t.prototype.getSize=function(){var t=this.getMediaBox();return{width:t.width,height:t.height}},t.prototype.getWidth=function(){return this.getSize().width},t.prototype.getHeight=function(){return this.getSize().height},t.prototype.getMediaBox=function(){return this.node.MediaBox().asRectangle()},t.prototype.getCropBox=function(){var t,e=this.node.CropBox();return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:this.getMediaBox()},t.prototype.getBleedBox=function(){var t,e=this.node.BleedBox();return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:this.getCropBox()},t.prototype.getTrimBox=function(){var t,e=this.node.TrimBox();return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:this.getCropBox()},t.prototype.getArtBox=function(){var t,e=this.node.ArtBox();return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:this.getCropBox()},t.prototype.translateContent=function(t,e){Pn(t,"x",["number"]),Pn(e,"y",["number"]),this.node.normalize(),this.getContentStream();var n=this.createContentStream(fu(),tu(t,e)),r=this.doc.context.register(n),i=this.createContentStream(pu()),o=this.doc.context.register(i);this.node.wrapContentStreams(r,o)},t.prototype.scale=function(t,e){Pn(t,"x",["number"]),Pn(e,"y",["number"]),this.setSize(this.getWidth()*t,this.getHeight()*e),this.scaleContent(t,e),this.scaleAnnotations(t,e)},t.prototype.scaleContent=function(t,e){Pn(t,"x",["number"]),Pn(e,"y",["number"]),this.node.normalize(),this.getContentStream();var n=this.createContentStream(fu(),eu(t,e)),r=this.doc.context.register(n),i=this.createContentStream(pu()),o=this.doc.context.register(i);this.node.wrapContentStreams(r,o)},t.prototype.scaleAnnotations=function(t,e){Pn(t,"x",["number"]),Pn(e,"y",["number"]);var n=this.node.Annots();if(n)for(var r=0;r<n.size();r++){var i=n.lookup(r);i instanceof zo&&this.scaleAnnot(i,t,e)}},t.prototype.resetPosition=function(){this.getContentStream(!1),this.x=0,this.y=0},t.prototype.setFont=function(t){Pn(t,"font",[[bd,"PDFFont"]]),this.font=t,this.fontKey=this.node.newFontDictionary(this.font.name,this.font.ref)},t.prototype.setFontSize=function(t){Pn(t,"fontSize",["number"]),this.fontSize=t},t.prototype.setFontColor=function(t){Pn(t,"fontColor",[[Object,"Color"]]),this.fontColor=t},t.prototype.setLineHeight=function(t){Pn(t,"lineHeight",["number"]),this.lineHeight=t},t.prototype.getPosition=function(){return{x:this.x,y:this.y}},t.prototype.getX=function(){return this.x},t.prototype.getY=function(){return this.y},t.prototype.moveTo=function(t,e){Pn(t,"x",["number"]),Pn(e,"y",["number"]),this.x=t,this.y=e},t.prototype.moveDown=function(t){Pn(t,"yDecrease",["number"]),this.y-=t},t.prototype.moveUp=function(t){Pn(t,"yIncrease",["number"]),this.y+=t},t.prototype.moveLeft=function(t){Pn(t,"xDecrease",["number"]),this.x-=t},t.prototype.moveRight=function(t){Pn(t,"xIncrease",["number"]),this.x+=t},t.prototype.pushOperators=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];jn(t,"operator",[[Po,"PDFOperator"]]);var n=this.getContentStream();n.push.apply(n,t)},t.prototype.drawText=function(t,e){var n,r,i,o,a,s,h;void 0===e&&(e={}),Pn(t,"text",["string"]),Dn(e.color,"options.color",[[Object,"Color"]]),In(e.opacity,"opacity.opacity",0,1),Dn(e.font,"options.font",[[bd,"PDFFont"]]),Dn(e.size,"options.size",["number"]),Dn(e.rotate,"options.rotate",[[Object,"Rotation"]]),Dn(e.xSkew,"options.xSkew",[[Object,"Rotation"]]),Dn(e.ySkew,"options.ySkew",[[Object,"Rotation"]]),Dn(e.x,"options.x",["number"]),Dn(e.y,"options.y",["number"]),Dn(e.lineHeight,"options.lineHeight",["number"]),Dn(e.maxWidth,"options.maxWidth",["number"]),Dn(e.wordBreaks,"options.wordBreaks",[Array]),Tn(e.blendMode,"options.blendMode",Ed);for(var l=this.setOrEmbedFont(e.font),u=l.oldFont,c=l.newFont,d=l.newFontKey,f=e.size||this.fontSize,p=e.wordBreaks||this.doc.defaultWordBreaks,g=void 0===e.maxWidth?T(F(t)):N(t,p,e.maxWidth,(function(t){return c.widthOfTextAtSize(t,f)})),v=new Array(g.length),y=0,m=g.length;y<m;y++)v[y]=c.encodeText(g[y]);var b=this.maybeEmbedGraphicsState({opacity:e.opacity,blendMode:e.blendMode}),w=this.getContentStream();w.push.apply(w,kc(v,{color:null!==(n=e.color)&&void 0!==n?n:this.fontColor,font:d,size:f,rotate:null!==(r=e.rotate)&&void 0!==r?r:Ml(0),xSkew:null!==(i=e.xSkew)&&void 0!==i?i:Ml(0),ySkew:null!==(o=e.ySkew)&&void 0!==o?o:Ml(0),x:null!==(a=e.x)&&void 0!==a?a:this.x,y:null!==(s=e.y)&&void 0!==s?s:this.y,lineHeight:null!==(h=e.lineHeight)&&void 0!==h?h:this.lineHeight,graphicsState:b})),e.font&&(u?this.setFont(u):this.resetFont())},t.prototype.drawImage=function(t,e){var n,r,i,o,a,s,h;void 0===e&&(e={}),Pn(t,"image",[[wd,"PDFImage"]]),Dn(e.x,"options.x",["number"]),Dn(e.y,"options.y",["number"]),Dn(e.width,"options.width",["number"]),Dn(e.height,"options.height",["number"]),Dn(e.rotate,"options.rotate",[[Object,"Rotation"]]),Dn(e.xSkew,"options.xSkew",[[Object,"Rotation"]]),Dn(e.ySkew,"options.ySkew",[[Object,"Rotation"]]),In(e.opacity,"opacity.opacity",0,1),Tn(e.blendMode,"options.blendMode",Ed);var l=this.node.newXObject("Image",t.ref),u=this.maybeEmbedGraphicsState({opacity:e.opacity,blendMode:e.blendMode}),c=this.getContentStream();c.push.apply(c,Sc(l,{x:null!==(n=e.x)&&void 0!==n?n:this.x,y:null!==(r=e.y)&&void 0!==r?r:this.y,width:null!==(i=e.width)&&void 0!==i?i:t.size().width,height:null!==(o=e.height)&&void 0!==o?o:t.size().height,rotate:null!==(a=e.rotate)&&void 0!==a?a:Ml(0),xSkew:null!==(s=e.xSkew)&&void 0!==s?s:Ml(0),ySkew:null!==(h=e.ySkew)&&void 0!==h?h:Ml(0),graphicsState:u}))},t.prototype.drawPage=function(t,e){var n,r,i,o,a;void 0===e&&(e={}),Pn(t,"embeddedPage",[[md,"PDFEmbeddedPage"]]),Dn(e.x,"options.x",["number"]),Dn(e.y,"options.y",["number"]),Dn(e.xScale,"options.xScale",["number"]),Dn(e.yScale,"options.yScale",["number"]),Dn(e.width,"options.width",["number"]),Dn(e.height,"options.height",["number"]),Dn(e.rotate,"options.rotate",[[Object,"Rotation"]]),Dn(e.xSkew,"options.xSkew",[[Object,"Rotation"]]),Dn(e.ySkew,"options.ySkew",[[Object,"Rotation"]]),In(e.opacity,"opacity.opacity",0,1),Tn(e.blendMode,"options.blendMode",Ed);var s=this.node.newXObject("EmbeddedPdfPage",t.ref),h=this.maybeEmbedGraphicsState({opacity:e.opacity,blendMode:e.blendMode}),l=void 0!==e.width?e.width/t.width:void 0!==e.xScale?e.xScale:1,u=void 0!==e.height?e.height/t.height:void 0!==e.yScale?e.yScale:1,c=this.getContentStream();c.push.apply(c,Fc(s,{x:null!==(n=e.x)&&void 0!==n?n:this.x,y:null!==(r=e.y)&&void 0!==r?r:this.y,xScale:l,yScale:u,rotate:null!==(i=e.rotate)&&void 0!==i?i:Ml(0),xSkew:null!==(o=e.xSkew)&&void 0!==o?o:Ml(0),ySkew:null!==(a=e.ySkew)&&void 0!==a?a:Ml(0),graphicsState:h}))},t.prototype.drawSvgPath=function(t,e){var n,r,i,o,a,s,h,l,u;void 0===e&&(e={}),Pn(t,"path",["string"]),Dn(e.x,"options.x",["number"]),Dn(e.y,"options.y",["number"]),Dn(e.scale,"options.scale",["number"]),Dn(e.rotate,"options.rotate",[[Object,"Rotation"]]),Dn(e.borderWidth,"options.borderWidth",["number"]),Dn(e.color,"options.color",[[Object,"Color"]]),In(e.opacity,"opacity.opacity",0,1),Dn(e.borderColor,"options.borderColor",[[Object,"Color"]]),Dn(e.borderDashArray,"options.borderDashArray",[Array]),Dn(e.borderDashPhase,"options.borderDashPhase",["number"]),Tn(e.borderLineCap,"options.borderLineCap",El),In(e.borderOpacity,"options.borderOpacity",0,1),Tn(e.blendMode,"options.blendMode",Ed);var c=this.maybeEmbedGraphicsState({opacity:e.opacity,borderOpacity:e.borderOpacity,blendMode:e.blendMode});"color"in e||"borderColor"in e||(e.borderColor=tc(0,0,0));var d=this.getContentStream();d.push.apply(d,Rc(t,{x:null!==(n=e.x)&&void 0!==n?n:this.x,y:null!==(r=e.y)&&void 0!==r?r:this.y,scale:e.scale,rotate:null!==(i=e.rotate)&&void 0!==i?i:Ml(0),color:null!==(o=e.color)&&void 0!==o?o:void 0,borderColor:null!==(a=e.borderColor)&&void 0!==a?a:void 0,borderWidth:null!==(s=e.borderWidth)&&void 0!==s?s:0,borderDashArray:null!==(h=e.borderDashArray)&&void 0!==h?h:void 0,borderDashPhase:null!==(l=e.borderDashPhase)&&void 0!==l?l:void 0,borderLineCap:null!==(u=e.borderLineCap)&&void 0!==u?u:void 0,graphicsState:c}))},t.prototype.drawLine=function(t){var e,n,r,i,o;Pn(t.start,"options.start",[[Object,"{ x: number, y: number }"]]),Pn(t.end,"options.end",[[Object,"{ x: number, y: number }"]]),Pn(t.start.x,"options.start.x",["number"]),Pn(t.start.y,"options.start.y",["number"]),Pn(t.end.x,"options.end.x",["number"]),Pn(t.end.y,"options.end.y",["number"]),Dn(t.thickness,"options.thickness",["number"]),Dn(t.color,"options.color",[[Object,"Color"]]),Dn(t.dashArray,"options.dashArray",[Array]),Dn(t.dashPhase,"options.dashPhase",["number"]),Tn(t.lineCap,"options.lineCap",El),In(t.opacity,"opacity.opacity",0,1),Tn(t.blendMode,"options.blendMode",Ed);var a=this.maybeEmbedGraphicsState({borderOpacity:t.opacity,blendMode:t.blendMode});"color"in t||(t.color=tc(0,0,0));var s=this.getContentStream();s.push.apply(s,Cc({start:t.start,end:t.end,thickness:null!==(e=t.thickness)&&void 0!==e?e:1,color:null!==(n=t.color)&&void 0!==n?n:void 0,dashArray:null!==(r=t.dashArray)&&void 0!==r?r:void 0,dashPhase:null!==(i=t.dashPhase)&&void 0!==i?i:void 0,lineCap:null!==(o=t.lineCap)&&void 0!==o?o:void 0,graphicsState:a}))},t.prototype.drawRectangle=function(t){var e,n,r,i,o,a,s,h,l,u,c,d,f;void 0===t&&(t={}),Dn(t.x,"options.x",["number"]),Dn(t.y,"options.y",["number"]),Dn(t.width,"options.width",["number"]),Dn(t.height,"options.height",["number"]),Dn(t.rotate,"options.rotate",[[Object,"Rotation"]]),Dn(t.xSkew,"options.xSkew",[[Object,"Rotation"]]),Dn(t.ySkew,"options.ySkew",[[Object,"Rotation"]]),Dn(t.borderWidth,"options.borderWidth",["number"]),Dn(t.color,"options.color",[[Object,"Color"]]),In(t.opacity,"opacity.opacity",0,1),Dn(t.borderColor,"options.borderColor",[[Object,"Color"]]),Dn(t.borderDashArray,"options.borderDashArray",[Array]),Dn(t.borderDashPhase,"options.borderDashPhase",["number"]),Tn(t.borderLineCap,"options.borderLineCap",El),In(t.borderOpacity,"options.borderOpacity",0,1),Tn(t.blendMode,"options.blendMode",Ed);var p=this.maybeEmbedGraphicsState({opacity:t.opacity,borderOpacity:t.borderOpacity,blendMode:t.blendMode});"color"in t||"borderColor"in t||(t.color=tc(0,0,0));var g=this.getContentStream();g.push.apply(g,Ac({x:null!==(e=t.x)&&void 0!==e?e:this.x,y:null!==(n=t.y)&&void 0!==n?n:this.y,width:null!==(r=t.width)&&void 0!==r?r:150,height:null!==(i=t.height)&&void 0!==i?i:100,rotate:null!==(o=t.rotate)&&void 0!==o?o:Ml(0),xSkew:null!==(a=t.xSkew)&&void 0!==a?a:Ml(0),ySkew:null!==(s=t.ySkew)&&void 0!==s?s:Ml(0),borderWidth:null!==(h=t.borderWidth)&&void 0!==h?h:0,color:null!==(l=t.color)&&void 0!==l?l:void 0,borderColor:null!==(u=t.borderColor)&&void 0!==u?u:void 0,borderDashArray:null!==(c=t.borderDashArray)&&void 0!==c?c:void 0,borderDashPhase:null!==(d=t.borderDashPhase)&&void 0!==d?d:void 0,graphicsState:p,borderLineCap:null!==(f=t.borderLineCap)&&void 0!==f?f:void 0}))},t.prototype.drawSquare=function(t){void 0===t&&(t={});var e=t.size;Dn(e,"size",["number"]),this.drawRectangle(n(n({},t),{width:e,height:e}))},t.prototype.drawEllipse=function(t){var e,n,r,i,o,a,s,h,l,u,c;void 0===t&&(t={}),Dn(t.x,"options.x",["number"]),Dn(t.y,"options.y",["number"]),Dn(t.xScale,"options.xScale",["number"]),Dn(t.yScale,"options.yScale",["number"]),Dn(t.rotate,"options.rotate",[[Object,"Rotation"]]),Dn(t.color,"options.color",[[Object,"Color"]]),In(t.opacity,"opacity.opacity",0,1),Dn(t.borderColor,"options.borderColor",[[Object,"Color"]]),In(t.borderOpacity,"options.borderOpacity",0,1),Dn(t.borderWidth,"options.borderWidth",["number"]),Dn(t.borderDashArray,"options.borderDashArray",[Array]),Dn(t.borderDashPhase,"options.borderDashPhase",["number"]),Tn(t.borderLineCap,"options.borderLineCap",El),Tn(t.blendMode,"options.blendMode",Ed);var d=this.maybeEmbedGraphicsState({opacity:t.opacity,borderOpacity:t.borderOpacity,blendMode:t.blendMode});"color"in t||"borderColor"in t||(t.color=tc(0,0,0));var f=this.getContentStream();f.push.apply(f,Oc({x:null!==(e=t.x)&&void 0!==e?e:this.x,y:null!==(n=t.y)&&void 0!==n?n:this.y,xScale:null!==(r=t.xScale)&&void 0!==r?r:100,yScale:null!==(i=t.yScale)&&void 0!==i?i:100,rotate:null!==(o=t.rotate)&&void 0!==o?o:void 0,color:null!==(a=t.color)&&void 0!==a?a:void 0,borderColor:null!==(s=t.borderColor)&&void 0!==s?s:void 0,borderWidth:null!==(h=t.borderWidth)&&void 0!==h?h:0,borderDashArray:null!==(l=t.borderDashArray)&&void 0!==l?l:void 0,borderDashPhase:null!==(u=t.borderDashPhase)&&void 0!==u?u:void 0,borderLineCap:null!==(c=t.borderLineCap)&&void 0!==c?c:void 0,graphicsState:d}))},t.prototype.drawCircle=function(t){void 0===t&&(t={});var e=t.size,r=void 0===e?100:e;Dn(r,"size",["number"]),this.drawEllipse(n(n({},t),{xScale:r,yScale:r}))},t.prototype.setOrEmbedFont=function(t){var e=this.font,n=this.fontKey;return t?this.setFont(t):this.getFont(),{oldFont:e,oldFontKey:n,newFont:this.font,newFontKey:this.fontKey}},t.prototype.getFont=function(){if(!this.font||!this.fontKey){var t=this.doc.embedStandardFont(xd.Helvetica);this.setFont(t)}return[this.font,this.fontKey]},t.prototype.resetFont=function(){this.font=void 0,this.fontKey=void 0},t.prototype.getContentStream=function(t){return void 0===t&&(t=!0),t&&this.contentStream||(this.contentStream=this.createContentStream(),this.contentStreamRef=this.doc.context.register(this.contentStream),this.node.addContentStream(this.contentStreamRef)),this.contentStream},t.prototype.createContentStream=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this.doc.context.obj({}),r=Io.of(n,t);return r},t.prototype.maybeEmbedGraphicsState=function(t){var e=t.opacity,n=t.borderOpacity,r=t.blendMode;if(void 0!==e||void 0!==n||void 0!==r){var i=this.doc.context.obj({Type:"ExtGState",ca:e,CA:n,BM:r});return this.node.newExtGState("GS",i)}},t.prototype.scaleAnnot=function(t,e,n){for(var r=["RD","CL","Vertices","QuadPoints","L","Rect"],i=0,o=r.length;i<o;i++){var a=t.lookup(Co.of(r[i]));a instanceof go&&a.scalePDFNumbers(e,n)}var s=t.lookup(Co.of("InkList"));if(s instanceof go)for(i=0,o=s.size();i<o;i++){var h=s.lookup(i);h instanceof go&&h.scalePDFNumbers(e,n)}},t.of=function(e,n,r){return new t(e,n,r)},t.create=function(e){Pn(e,"doc",[[Vd,"PDFDocument"]]);var n=No.of(-1),r=Wo.withContextAndParent(e.context,n);return new t(r,e.context.register(r),e)},t}(),Kd=function(t){function n(e,n,r){var i=t.call(this,e,n,r)||this;return Pn(e,"acroButton",[[Jh,"PDFAcroPushButton"]]),i.acroField=e,i}return e(n,t),n.prototype.setImage=function(t,e){void 0===e&&(e=$c.Center);for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r],a=this.createImageAppearanceStream(o,t,e);this.updateWidgetAppearances(o,{normal:a})}this.markAsClean()},n.prototype.setFontSize=function(t){Vn(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},n.prototype.addToPage=function(t,e,n){var r,i,o,a,s,h,l,u,c,d,f;Dn(t,"text",["string"]),Dn(e,"page",[[qd,"PDFPage"]]),kd(n);var p=this.createWidget({x:(null!==(r=null==n?void 0:n.x)&&void 0!==r?r:0)-(null!==(i=null==n?void 0:n.borderWidth)&&void 0!==i?i:0)/2,y:(null!==(o=null==n?void 0:n.y)&&void 0!==o?o:0)-(null!==(a=null==n?void 0:n.borderWidth)&&void 0!==a?a:0)/2,width:null!==(s=null==n?void 0:n.width)&&void 0!==s?s:100,height:null!==(h=null==n?void 0:n.height)&&void 0!==h?h:50,textColor:null!==(l=null==n?void 0:n.textColor)&&void 0!==l?l:tc(0,0,0),backgroundColor:null!==(u=null==n?void 0:n.backgroundColor)&&void 0!==u?u:tc(.75,.75,.75),borderColor:null==n?void 0:n.borderColor,borderWidth:null!==(c=null==n?void 0:n.borderWidth)&&void 0!==c?c:0,rotate:null!==(d=null==n?void 0:n.rotate)&&void 0!==d?d:Ml(0),caption:t,hidden:null==n?void 0:n.hidden,page:e.ref}),g=this.doc.context.register(p.dict);this.acroField.addWidget(g);var v=null!==(f=null==n?void 0:n.font)&&void 0!==f?f:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(p,v),e.node.addAnnot(g)},n.prototype.needsAppearancesUpdate=function(){var t;if(this.isDirty())return!0;for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){if(!((null===(t=e[n].getAppearances())||void 0===t?void 0:t.normal)instanceof To))return!0}return!1},n.prototype.defaultUpdateAppearances=function(t){Pn(t,"font",[[bd,"PDFFont"]]),this.updateAppearances(t)},n.prototype.updateAppearances=function(t,e){Pn(t,"font",[[bd,"PDFFont"]]),Dn(e,"provider",[Function]);for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r];this.updateWidgetAppearance(o,t,e)}},n.prototype.updateWidgetAppearance=function(t,e,n){var r=ad((null!=n?n:pd)(this,t,e));this.updateWidgetAppearanceWithFont(t,e,r)},n.of=function(t,e,r){return new n(t,e,r)},n}(Sd);export{Zo as AFRelationship,Nh as AcroButtonFlags,Dh as AcroChoiceFlags,Bh as AcroFieldFlags,Ph as AcroTextFlags,vl as AnnotationFlags,Vh as AppearanceCharacteristics,Ed as BlendMode,Gn as Cache,wr as CharCodes,Mu as ColorTypes,Yc as CombedTextLayoutError,ir as CorruptPageTreeError,oa as CustomFontEmbedder,aa as CustomFontSubsetEmbedder,uh as Duplex,Uc as EncryptedPDFError,Jc as ExceededMaxLengthError,Hc as FieldAlreadyExistsError,Xc as FieldExistsAsNonTerminalError,ha as FileEmbedder,Vc as FontkitNotRegisteredError,Wc as ForeignPageError,$c as ImageAlignment,or as IndexOutOfBoundsError,ar as InvalidAcroFieldValueError,_c as InvalidFieldNamePartError,Qc as InvalidMaxLengthError,nr as InvalidPDFDateStringError,rr as InvalidTargetIndexError,ca as JpegEmbedder,El as LineCapStyle,hu as LineJoinStyle,Hn as MethodNotImplementedError,Jn as MissingCatalogError,hr as MissingDAEntryError,br as MissingKeywordError,Gc as MissingOnValueCheckError,mr as MissingPDFHeaderError,Qn as MissingPageContentsEmbeddingError,lr as MissingTfOperatorError,sr as MultiSelectValueError,dr as NextByteAssertionError,Kc as NoSuchFieldError,sh as NonFullScreenPageMode,ur as NumberParsingError,Kh as PDFAcroButton,Lh as PDFAcroCheckBox,Hh as PDFAcroChoice,_h as PDFAcroComboBox,Ih as PDFAcroField,ll as PDFAcroForm,$h as PDFAcroListBox,Xh as PDFAcroNonTerminal,Jh as PDFAcroPushButton,Qh as PDFAcroRadioButton,Zh as PDFAcroSignature,qh as PDFAcroTerminal,Yh as PDFAcroText,Uh as PDFAnnotation,go as PDFArray,er as PDFArrayIsNotRectangleError,yo as PDFBool,Kd as PDFButton,ul as PDFCatalog,Fd as PDFCheckBox,Io as PDFContentStream,Vo as PDFContext,Ko as PDFCrossRefSection,Yo as PDFCrossRefStream,zo as PDFDict,Vd as PDFDocument,Cd as PDFDropdown,md as PDFEmbeddedPage,Sd as PDFField,Eo as PDFFlateStream,bd as PDFFont,Bd as PDFForm,co as PDFHeader,Qo as PDFHexString,wd as PDFImage,Xo as PDFInvalidObject,pr as PDFInvalidObjectParsingError,Md as PDFJavaScript,Co as PDFName,Ao as PDFNull,po as PDFNumber,fo as PDFObject,qo as PDFObjectCopier,zl as PDFObjectParser,fr as PDFObjectParsingError,Ho as PDFObjectStream,Tl as PDFObjectStreamParser,Po as PDFOperator,jo as PDFOperatorNames,Ad as PDFOptionList,qd as PDFPage,Oh as PDFPageEmbedder,Wo as PDFPageLeaf,cl as PDFPageTree,Rl as PDFParser,cr as PDFParsingError,zd as PDFRadioGroup,Oo as PDFRawStream,No as PDFRef,Td as PDFSignature,To as PDFStream,gr as PDFStreamParsingError,Jo as PDFStreamWriter,ia as PDFString,Od as PDFTextField,Lo as PDFTrailer,Go as PDFTrailerDict,Wh as PDFWidgetAnnotation,_o as PDFWriter,Ol as PDFXRefStreamParser,tr as PageEmbeddingMismatchedContextError,jd as PageSizes,Rd as ParseSpeeds,dh as PngEmbedder,lh as PrintScaling,_n as PrivateConstructorError,hh as ReadingDirection,qc as RemovePageFromEmptyDocumentError,Yn as ReparseError,Zc as RichTextFieldReadError,Nl as RotationTypes,yr as StalledParserError,$o as StandardFontEmbedder,wn as StandardFontValues,xd as StandardFonts,Qu as TextAlignment,uu as TextRenderingMode,vr as UnbalancedParenthesisError,Lc as UnexpectedFieldTypeError,Xn as UnexpectedObjectTypeError,$n as UnrecognizedStreamTypeError,Zn as UnsupportedEncodingError,jh as ViewerPreferences,k as addRandomSuffix,Hl as adjustDimsForRotation,vu as appendBezierCurve,yu as appendQuadraticCurve,V as arrayAsString,jl as asNumber,Pl as asPDFName,Dl as asPDFNumber,jn as assertEachIs,Un as assertInteger,Pn as assertIs,zn as assertIsOneOf,Tn as assertIsOneOfOrUndefined,On as assertIsSubset,Mn as assertMultiple,Dn as assertOrUndefined,Vn as assertPositive,En as assertRange,In as assertRangeOrUndefined,Sn as backtick,Yu as beginMarkedContent,Ru as beginText,N as breakTextIntoLines,W as byAscendingId,ft as bytesFor,_ as canBeConvertedToUint8Array,R as charAtIndex,m as charFromCode,b as charFromHexCode,B as charSplit,F as cleanText,Xl as clip,Zl as clipEvenOdd,mu as closePath,ec as cmyk,hc as colorToComponents,sc as componentsToColor,$l as concatTransformationMatrix,x as copyStringIntoBuffer,el as createPDFAcroField,tl as createPDFAcroFields,Nn as createTypeErrorMsg,An as createValueErrorMsg,c as decodeFromBase64,f as decodeFromBase64DataUri,Th as decodePDFRawStream,pd as defaultButtonAppearanceProvider,dd as defaultCheckBoxAppearanceProvider,vd as defaultDropdownAppearanceProvider,yd as defaultOptionListAppearanceProvider,fd as defaultRadioGroupAppearanceProvider,gd as defaultTextFieldAppearanceProvider,Ml as degrees,Wl as degreesToRadians,jc as drawButton,Pc as drawCheckBox,Bc as drawCheckMark,Oc as drawEllipse,Tc as drawEllipsePath,Sc as drawImage,Cc as drawLine,kc as drawLinesOfText,Ku as drawObject,Mc as drawOptionList,Fc as drawPage,Dc as drawRadioButton,Ac as drawRectangle,Rc as drawSvgPath,xc as drawText,Ic as drawTextField,Ec as drawTextLines,u as encodeToBase64,Ju as endMarkedContent,Au as endPath,Bu as endText,pt as error,S as escapeRegExp,C as escapedNewlineChars,Fu as fill,Cu as fillAndStroke,j as findLastMatch,Rn as getType,$u as grayscale,$ as hasSurrogates,ut as hasUtf16BOM,tt as highSurrogate,z as isNewlineChar,xn as isStandardFont,Bn as isType,Q as isWithinBMP,E as last,id as layoutCombedText,rd as layoutMultilineText,od as layoutSinglelineText,T as lineSplit,wu as lineTo,et as lowSurrogate,M as mergeIntoTypedArray,O as mergeLines,U as mergeUint8Arrays,Tu as moveText,bu as moveTo,A as newlineChars,zu as nextLine,ad as normalizeAppearance,ct as numberToString,w as padStart,D as parseDate,Ln as pdfDocEncodingDecode,H as pluckIndices,pu as popGraphicsState,fu as pushGraphicsState,Il as radians,ql as radiansToDegrees,G as range,xu as rectangle,kn as rectanglesAreEqual,Gl as reduceRotation,su as restoreDashPattern,K as reverseArray,tc as rgb,qu as rotateAndSkewTextDegreesAndTranslate,Wu as rotateAndSkewTextRadiansAndTranslate,ru as rotateDegrees,Nc as rotateInPlace,nu as rotateRadians,_l as rotateRectangle,eu as scale,Pu as setCharacterSpacing,ju as setCharacterSqueeze,au as setDashPattern,Xu as setFillingCmykColor,oc as setFillingColor,Lu as setFillingGrayscaleColor,Hu as setFillingRgbColor,Nu as setFontAndSize,du as setGraphicsState,lu as setLineCap,Eu as setLineHeight,cu as setLineJoin,gu as setLineWidth,Zu as setStrokingCmykColor,ac as setStrokingColor,Gu as setStrokingGrayscaleColor,_u as setStrokingRgbColor,Vu as setTextMatrix,Uu as setTextRenderingMode,Iu as setTextRise,Du as setWordSpacing,Ou as showText,Fn as singleQuote,dt as sizeInBytes,ou as skewDegrees,iu as skewRadians,q as sortedUniq,ku as square,Su as stroke,L as sum,p as toCharCode,g as toCodePoint,Ll as toDegrees,y as toHexString,v as toHexStringOfMinLength,Kl as toRadians,X as toUint8Array,tu as translate,I as typedArrayFor,rt as utf16Decode,J as utf16Encode,Y as utf8Encode,bn as values,Z as waitForTick};
```

## `dist/writing-tools.css`

```css
.accent-bar{display:flex;flex-wrap:wrap;gap:4px;margin:5px 0 6px}
.accent-bar button{min-width:30px;min-height:29px;padding:2px 7px;font-size:14px;font-weight:650;line-height:1.2;color:#17314d;background:#edf5fc;border:1px solid #c5d4e2;border-radius:6px;cursor:pointer}
.accent-bar button:hover,.accent-bar button:focus-visible{background:#d9eaf7;border-color:#27658e}
.accent-field{min-width:0}
.y10-fiche .y10-vocab-note{margin:10px 12px 0;color:#354f65}
.y10-fiche .vocab-key{display:block;text-align:left;padding:4px 7px;font:inherit;border:1px solid #ccdce7;border-radius:5px;background:white;cursor:pointer}
.y10-fiche .vocab-key:hover,.y10-fiche .vocab-key:focus-visible{background:#e1f1ee;border-color:#176b64}
```

## `dist/writing-tools.js`

```javascript
(() => {
  const configuredLanguage = document.currentScript.dataset.language;
  const language = configuredLanguage === 'page' ? document.documentElement.lang : configuredLanguage;
  const accents = {
    fr: 'à â ç é è ê ë î ï ô ù û ü ÿ',
    es: 'á é í ó ú ü ñ',
  }[language];
  if (!accents) return;

  const fields = new WeakSet();
  const accentTargets = new WeakMap();

  function addAccentBars() {
    for (const field of document.querySelectorAll('textarea, input[data-field], input[data-name]')) {
      if (fields.has(field) || field.readOnly || field.disabled ||
          (field.tagName === 'INPUT' && field.type !== 'text') ||
          ['numeric', 'decimal'].includes(field.inputMode) ||
          field.lang === 'en' || field.dataset.field?.endsWith('English')) continue;
      fields.add(field);

      const bar = document.createElement('div');
      bar.className = 'accent-bar';
      bar.setAttribute('role', 'group');
      bar.setAttribute('aria-label', language === 'es' ? 'Caracteres españoles' : 'Caractères français');
      for (const letter of accents.split(' ')) {
        const key = document.createElement('button');
        key.type = 'button';
        key.dataset.accent = letter;
        key.textContent = letter;
        bar.append(key);
      }
      accentTargets.set(bar, field);

      const label = field.closest('label');
      if (label) {
        const group = document.createElement('div');
        group.className = 'accent-field';
        label.before(group);
        group.append(bar, label);
      } else {
        field.before(bar);
      }
    }
  }

  function insert(field, text, isVocabulary) {
    if (!field || field.disabled || field.readOnly) return;
    const start = field.selectionStart ?? field.value.length;
    const end = field.selectionEnd ?? start;
    const previous = field.value[start - 1];
    const next = field.value[end];
    const before = isVocabulary && previous && !/[\s’'(«-]/u.test(previous) && !/^[,.;:?!]/u.test(text) ? ' ' : '';
    const after = isVocabulary && next && !/[\s’',.;:?!»)\-]/u.test(next) ? ' ' : '';
    field.focus({preventScroll: true});
    field.setRangeText(before + text + after, start, end, 'end');
    const caret = start + before.length + text.length;
    field.setSelectionRange(caret, caret);
    field.dispatchEvent(new Event('input', {bubbles: true}));

    // The younger-year activities save on change and redraw the form.
    if (field.dataset.field && field.onchange) {
      field.dispatchEvent(new Event('change', {bubbles: true}));
      const replacement = document.querySelector(`input[data-field="${CSS.escape(field.dataset.field)}"]`);
      if (replacement && replacement !== field) {
        replacement.focus({preventScroll: true});
        replacement.setSelectionRange(caret, caret);
      }
    }
  }

  const keySelector = 'button[data-accent], button[data-insert-vocab]';
  document.addEventListener('pointerdown', event => {
    if (event.target.closest(keySelector)) event.preventDefault();
  });
  document.addEventListener('click', event => {
    const key = event.target.closest(keySelector);
    if (!key) return;
    const vocab = key.dataset.insertVocab;
    const field = vocab === undefined ? accentTargets.get(key.closest('.accent-bar')) : document.getElementById('answer');
    insert(field, vocab ?? key.dataset.accent, vocab !== undefined);
  });

  addAccentBars();
  new MutationObserver(addAccentBars).observe(document.body, {childList: true, subtree: true});
})();
```

## `dist/y10-bilan.js`

```javascript
function readBilanThemes(sections = Y10_CONVERSATION_THEMES) {
  return sections.flatMap(({title, store, questions}) => {
    const drafts = readBilanDrafts(store);
    const responses = questions.flatMap(({id, core, text}) => {
      const answer = drafts?.[id]?.answer;
      return typeof answer === 'string' && answer.trim()
        ? [{question: `${core}. ${text}`, answer: answer.trim()}] : [];
    });
    return responses.length ? [{title, responses}] : [];
  });
}

function readBilanDrafts(store) {
  try {
    return JSON.parse(localStorage.getItem(store) || 'null')?.drafts;
  } catch {
    return undefined;
  }
}

function wrapBilanLine(text, font, size, width) {
  const fits = value => font.widthOfTextAtSize(value, size) <= width;
  const lines = [];
  let line = '';
  for (let word of text.trim().split(/\s+/u)) {
    const joined = line ? `${line} ${word}` : word;
    if (fits(joined)) {
      line = joined;
      continue;
    }
    if (line) lines.push(line);
    line = '';
    while (!fits(word)) {
      let end = 1;
      while (end < word.length && fits(word.slice(0, end + 1))) end++;
      lines.push(word.slice(0, end));
      word = word.slice(end);
    }
    line = word;
  }
  return [...lines, line];
}

async function makeBilanPdf(student, themes, {PDFDocument, StandardFonts}, title = 'Bilan · General Conversation') {
  const pdf = await PDFDocument.create();
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const supported = new Set(regular.getCharacterSet());
  const content = [student, ...themes.flatMap(({title, responses}) =>
    [title, ...responses.flatMap(({question, answer}) => [question, answer])])];
  if (content.some(text => [...text.normalize('NFC')].some(char =>
    !/\s/u.test(char) && !supported.has(char.codePointAt(0))))) return null;

  const margin = 48;
  const width = 612;
  const height = 792;
  let page;
  let y;
  function newPage() {
    page = pdf.addPage([width, height]);
    y = height - margin;
  }
  function write(text, size, font = regular, gap = 0) {
    const leading = size * 1.4;
    for (const paragraph of text.normalize('NFC').split(/\r\n?|\n/u)) {
      for (const line of wrapBilanLine(paragraph, font, size, width - margin * 2)) {
        if (y - size < margin) newPage();
        if (line) page.drawText(line, {x: margin, y: y - size, size, font});
        y -= leading;
      }
    }
    y -= gap;
  }

  pdf.setTitle(title);
  pdf.setAuthor(student);
  newPage();
  write(title, 20, bold, 5);
  write(student, 13, regular, 16);
  for (const {title, responses} of themes) {
    if (y - margin < 85) newPage();
    write(title, 15, bold, 7);
    for (const {question, answer} of responses) {
      if (y - margin < 65) newPage();
      write(question, 11, bold, 3);
      write(answer, 11, regular, 11);
    }
  }
  return pdf.save();
}

function makePrintableBilan(student, themes, title = 'Bilan · General Conversation', language = 'fr') {
  const escape = text => text.replace(/[&<>]/gu, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;'})[char]);
  return `<!doctype html><html lang="${language}"><meta charset="utf-8"><title>${escape(title)}</title>
    <style>
      body{max-width:720px;margin:32px auto;padding:0 16px;font:16px/1.5 system-ui,sans-serif;color:#172b42}
      h1,h2,h3{break-after:avoid}h1{font-size:25px}h2{font-size:20px}h3{font-size:16px;margin-bottom:4px}
      .answer{margin-top:0;white-space:pre-wrap;overflow-wrap:anywhere}
      @media print{body{margin:0;max-width:none;padding:0;color:black}}
    </style><body><h1>${escape(title)}</h1><p>${escape(student)}</p>
    ${themes.map(({title, responses}) => `<section><h2>${escape(title)}</h2>
      ${responses.map(({question, answer}) => `<h3>${escape(question)}</h3><p class="answer">${escape(answer)}</p>`).join('')}
    </section>`).join('')}</body></html>`;
}

function bindBilanForm(bilanForm, sections, copy) {
  bilanForm.addEventListener('submit', async event => {
    event.preventDefault();
    const field = bilanForm.elements.student;
    const button = bilanForm.querySelector('button');
    const status = bilanForm.querySelector('[role="status"]');
    const student = field.value.trim();
    if (!student) {
      status.textContent = copy.missingName;
      field.focus();
      return;
    }
    if (button.disabled) return;

    button.disabled = true;
    status.textContent = '';
    try {
      const themes = readBilanThemes(sections);
      if (!themes.length) {
        status.textContent = copy.noAnswers;
        return;
      }
      const pdf = await makeBilanPdf(student, themes, await import('./vendor/pdf-lib.mjs'), copy.title);
      const blob = pdf
        ? new Blob([pdf], {type: 'application/pdf'})
        : new Blob([makePrintableBilan(student, themes, copy.title, copy.language)], {type: 'text/html;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const name = student.replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/gu, '') || copy.student;
      link.download = `${copy.filename}-${name}.${pdf ? 'pdf' : 'html'}`;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      if (!pdf) status.textContent = copy.printHelp;
    } catch {
      status.textContent = copy.failed;
    } finally {
      button.disabled = false;
    }
  });
}

bindBilanForm(document.getElementById('y10-bilan'), Y10_CONVERSATION_THEMES, {
  language: 'fr',
  title: 'Bilan · General Conversation',
  filename: 'bilan',
  student: 'élève',
  missingName: 'Indique ton nom et ton prénom.',
  noAnswers: 'Écris au moins une réponse avant de télécharger ton bilan.',
  printHelp: 'Ouvre le fichier téléchargé pour l’imprimer ou l’enregistrer en PDF.',
  failed: 'Le téléchargement a échoué. Réessaie dans un instant.',
});

bindBilanForm(document.getElementById('spanish-igcse-bilan'), SPANISH_IGCSE_PRACTICE, {
  language: 'es',
  title: 'Mis respuestas · IGCSE Spanish',
  filename: 'respuestas',
  student: 'estudiante',
  missingName: 'Escribe tu nombre y apellido.',
  noAnswers: 'Escribe al menos una respuesta antes de descargarla.',
  printHelp: 'Abre el archivo para imprimirlo o guardarlo como PDF.',
  failed: 'No se pudo descargar el archivo. Inténtalo otra vez.',
});
```

## `dist/y10-conversation.js`

```javascript
const Y10_FAMILY = 201;
const Y10_FRIENDSHIP = 203;
const Y10_TIME = 202;
const Y10_QUESTIONS = [
  {id: 204, core: 1, topic: 'relationships', text: 'Tu t’entends avec ta famille ?'},
  {id: 205, core: 2, topic: 'values', text: 'Quelles sont tes valeurs ou devises préférées ?'},
  {id: 206, core: 3, topic: 'bestFriend', text: 'Parle-moi de ton meilleur ami ou de ta meilleure amie. Comment l’as-tu rencontré(e) ?'},
  {id: 207, core: 4, topic: 'ideal', text: 'Comment serait ton ami idéal, ton amie idéale ou ta famille idéale ?'},
  {id: 208, core: 5, topic: 'preferences', text: 'Préfères-tu passer du temps en famille ou entre amis ? Pourquoi ?'},
  {id: 209, core: 6, topic: 'pastBirthday', text: 'Qu’est-ce que tu as fait l’année dernière pour fêter ton anniversaire ?'},
  {id: 210, core: 7, topic: 'futureBirthday', text: 'Qu’est-ce que tu vas faire cette année pour fêter ton anniversaire ?'},
  {id: Y10_FAMILY, core: 8, topic: 'family', text: 'Est-ce que la famille est importante pour toi ?'},
  {id: Y10_FRIENDSHIP, core: 8, topic: 'friendship', text: 'Est-ce que l’amitié est importante pour toi ?'},
  {id: Y10_TIME, core: 9, topic: 'time', text: 'Si tu avais plus de temps, que ferais-tu de différent ?'},
];
const Y10_WELLBEING_QUESTIONS = [
  {id: 220, core: 1, topic: 'hobbies', text: 'Quels sont tes passe-temps ?'},
  {id: 221, core: 2, topic: 'childhood-hobbies', text: 'Tes passe-temps ont-ils changé par rapport à quand tu étais un enfant ?'},
  {id: 222, core: 3, topic: 'next-weekend', text: 'Qu’est-ce que tu vas faire avec tes copains le week-end prochain ?'},
  {id: 223, core: 4, topic: 'ideal-day', text: 'Si tu avais le choix, comment serait ta journée idéale ?'},
  {id: 224, core: 5, topic: 'last-weekend', text: 'Qu’est-ce que tu as fait le week-end dernier ? C’était bien ?'},
  {id: 225, core: 6, topic: 'ideal-routine', text: 'Décris ta routine quotidienne idéale.'},
  {id: 226, core: 7, topic: 'wake-up', text: 'Es-tu plus quelqu’un qui se réveille toujours très tôt ou préfères-tu te réveiller plus tard le matin et pourquoi ?'},
  {id: 227, core: 8, topic: 'body-confidence', text: 'Parle-moi de l’importance de se sentir bien dans sa peau.'},
  {id: 228, core: 9, topic: 'balanced-diet', text: 'Pourquoi est-il important de bien manger ?'},
  {id: 229, core: 10, topic: 'sport-and-wellbeing', text: 'Que penses-tu du sport et du bien-être ?'},
];
const Y10_NEIGHBOURHOOD_QUESTIONS = [
  {id: 230, core: 1, topic: 'local-area', text: 'Comment est ta ville ou ton quartier ? Comment était ton quartier quand tu étais plus jeune ?'},
  {id: 231, core: 2, topic: 'local-pros-cons', text: 'Quels sont les avantages et les inconvénients de vivre dans ta région ?'},
  {id: 232, core: 3, topic: 'local-changes', text: 'Si tu pouvais changer un aspect de ta ville, que changerais-tu et pourquoi ?'},
  {id: 233, core: 4, topic: 'town-or-country', text: 'Préfères-tu vivre à la campagne ou en ville ? Pourquoi ?'},
  {id: 234, core: 5, topic: 'local-shops', text: 'Quels types de magasins y a-t-il près de chez toi ? Qu’as-tu acheté récemment ?'},
  {id: 235, core: 6, topic: 'local-transport', text: 'Quels sont les moyens de transport les plus pratiques dans ta ville ?'},
  {id: 236, core: 7, topic: 'compare-transport', text: 'À ton avis, les transports en commun sont-ils plus efficaces en France qu’aux Bermudes ?'},
  {id: 237, core: 8, topic: 'future-home', text: 'Où aimerais-tu habiter à l’avenir et pourquoi ?'},
  {id: 238, core: 9, topic: 'environment-problem', text: 'Selon toi, quel est le plus grand problème environnemental ?'},
  {id: 239, core: 10, topic: 'environment-actions', text: 'Qu’est-ce que tu fais pour protéger l’environnement ? Est-ce que tu recycles souvent ?'},
];
const Y10_MEDIA_QUESTIONS = [
  {id: 240, core: 1, topic: 'online-leisure', text: 'Que fais-tu en ligne pendant ton temps libre ?'},
  {id: 241, core: 2, topic: 'social-media', text: 'Quels sont les avantages et les inconvénients des réseaux sociaux ?'},
  {id: 242, core: 3, topic: 'phone-time', text: 'Penses-tu que les jeunes passent trop de temps sur leurs portables ?'},
  {id: 243, core: 4, topic: 'past-technology', text: 'Comment as-tu utilisé la technologie hier soir / le week-end dernier ?'},
  {id: 244, core: 5, topic: 'day-without-phone', text: 'As-tu déjà essayé d’arrêter d’utiliser ton téléphone pendant un jour ? Comment était l’expérience ?'},
  {id: 245, core: 6, topic: 'music', text: 'Quel genre de musique aimes-tu ?'},
  {id: 246, core: 7, topic: 'recent-television', text: 'Qu’est-ce que tu as regardé à la télé récemment ?'},
  {id: 247, core: 8, topic: 'week-without-phone', text: 'Si tu n’avais pas accès à ton téléphone pendant une semaine, que ferais-tu ?'},
  {id: 248, core: 9, topic: 'student-app', text: 'Si tu pouvais créer une appli utile pour les élèves francophones, que proposerais-tu ?'},
];
const Y10_STUDYING_QUESTIONS = [
  {id: 250, core: 1, topic: 'school-description', text: 'Parle-moi de ton collège / décris ton collège.'},
  {id: 251, core: 2, topic: 'school-routine', text: 'Parle-moi de ta routine journalière pendant une semaine typique.'},
  {id: 252, core: 3, topic: 'school-subjects', text: 'Parle-moi des matières que tu étudies.'},
  {id: 253, core: 4, topic: 'ideal-school', text: 'Comment serait ton école idéale ?'},
  {id: 254, core: 5, topic: 'education-value', text: 'L’éducation, c’est important pour toi ?'},
  {id: 255, core: 6, topic: 'school-rules', text: 'Parle-moi du règlement dans ton collège.'},
  {id: 256, core: 7, topic: 'describe-uniform', text: 'Décris ton uniforme scolaire. Qu’est-ce que tu aimerais porter au collège / comment serait ton uniforme idéal ?'},
  {id: 257, core: 8, topic: 'uniform-pros-cons', text: 'Quels sont les avantages et les inconvénients de porter un uniforme ?'},
  {id: 258, core: 9, topic: 'school-plans', text: 'Qu’est-ce que tu vas faire à l’école demain / après les examens ?'},
  {id: 259, core: 10, topic: 'further-study', text: 'Qu’est-ce que tu veux étudier après le lycée et pourquoi veux-tu étudier ça ?'},
];
const Y10_TRAVEL_QUESTIONS = [
  {id: 260, core: 1, topic: 'active-or-relaxing', text: 'Préfères-tu les vacances actives ou relaxantes ? Pourquoi ?'},
  {id: 261, core: 2, topic: 'ideal-holiday', text: 'Si tu gagnais le loto, où passerais-tu les vacances ? / Décris tes vacances idéales.'},
  {id: 262, core: 3, topic: 'accommodation', text: 'Tu préfères loger dans un hôtel ou dans un camping ? Pourquoi ?'},
  {id: 263, core: 4, topic: 'travel-abroad', text: 'Selon toi, quels sont les avantages de voyager à l’étranger ?'},
  {id: 264, core: 5, topic: 'last-holiday', text: 'Qu’est-ce que tu as fait en vacances l’année dernière et avec qui ?'},
  {id: 265, core: 6, topic: 'holiday-weather', text: 'Quel temps faisait-il pendant tes dernières vacances ?'},
  {id: 266, core: 7, topic: 'visit-france', text: 'Est-ce que tu voudrais visiter la France ? Pourquoi (pas) ?'},
  {id: 267, core: 8, topic: 'next-holiday', text: 'L’année prochaine, où vas-tu passer les vacances ?'},
  {id: 268, core: 9, topic: 'travel-transport', text: 'Quel est ton moyen de transport préféré ? Pourquoi ?'},
  {id: 269, core: 10, topic: 'sustainable-tourism', text: 'Comment les touristes peuvent-ils protéger l’environnement quand ils voyagent ?'},
];
const Y10_CONVERSATION_THEMES = [
  { id: 'y10', title: 'My personal world', store: 'atelier-y10-oral-v1', questions: Y10_QUESTIONS },
  { id: 'y10-wellbeing', title: 'Lifestyles and wellbeing', store: 'atelier-y10-wellbeing-v1', questions: Y10_WELLBEING_QUESTIONS },
  { id: 'y10-neighbourhood', title: 'My neighbourhood', store: 'atelier-y10-neighbourhood-v1', questions: Y10_NEIGHBOURHOOD_QUESTIONS },
  { id: 'y10-media', title: 'Media and technology', store: 'atelier-y10-media-v1', questions: Y10_MEDIA_QUESTIONS },
  { id: 'y10-studying', title: 'Studying and my future', store: 'atelier-y10-studying-v1', questions: Y10_STUDYING_QUESTIONS },
  { id: 'y10-travel', title: 'Travel and tourism', store: 'atelier-y10-travel-v1', questions: Y10_TRAVEL_QUESTIONS },
];
```

## `dist/y10-rehearsal.css`

```css
.y10-rehearsal-text {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  background: #edf6f4;
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  line-height: 1.9;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

[data-y10-speaking] {
  background: #ffdd78;
  color: #17314d;
  border-radius: 3px;
}

.y10-instructions [lang="en"] { color: #4d6274; }
.y10-rehearsal-text button { font: inherit; padding: 0 4px; }
.y10-kept-word { background: #d8f1e8; border-color: #72a89b; }
[data-y10-typing] { margin-top: 14px; }
[data-y10-typing] textarea { display: block; width: 100%; margin-bottom: 8px; }
.y10-translation-prompt { margin: 1rem 0; }
.y10-translation-prompt :is(button, input, label, summary, .muted) { font-size: 1rem; }
.y10-cue-source { margin: .5rem 0; }
[data-y10-manual-cue] input { display: block; margin: 6px 0; width: min(100%, 32rem); }
[data-y10-audio-status]:empty, [data-y10-rehearsal] .practice-feedback:empty { display: none; }
```

## `dist/y10-rehearsal.js`

```javascript
const Y10_REHEARSAL = [
  ['repeat', 'Écoute', 'Listen',
    'Écoute et suis les mots.', 'Listen and follow the words.'],
  ['y10-chunks', 'Groupes de mots', 'Chunks',
    'Lis le groupe. Écoute, puis répète à voix haute.', 'Read the chunk. Listen, then repeat it aloud.'],
  ['y10-initials', 'Initiales', 'Initials',
    'Dis tout le texte avec les premières lettres. Clique sur une lettre pour entendre le mot.',
    'Say the whole answer using the first letters. Click a letter to hear the word.'],
  ['y10-choose', 'Écoute et choisis', 'Listen and choose',
    'Écoute le groupe suivant. Trouve-le et clique dessus pour l’ajouter à ton texte.',
    'Listen to the next chunk. Find it and click it to add it to your text.'],
  ['y10-dictation', 'Écoute et écris', 'Listen and type',
    'Écoute le groupe de mots. Tape ce que tu entends en français.',
    'Listen to the chunk. Type what you hear in French.'],
  ['y10-remember', 'Souviens-toi de la suite', 'Remember what comes next',
    'Dis le groupe suivant de mémoire. Puis trouve-le et clique dessus. Si tu entends un bip, essaie encore.',
    'Say the next chunk from memory. Then find it and click it. If you hear a buzz, try again.'],
  ['y10-translate', 'De l’anglais au français', 'English to French',
    'Lis le groupe de mots en anglais. Tape-le en français.',
    'Read the chunk in English. Type it in French.'],
  ['y10-chunk-cues', 'Un mot par groupe', 'One word per chunk',
    'Choisis un mot dans chaque groupe. Puis dis tout ton texte avec ces mots.',
    'Choose one word from each chunk. Then say your whole answer using those words.'],
  ['y10-disappear', 'Mots qui disparaissent', 'Disappearing words',
    'Lis ton texte à voix haute. Clique sur un mot pour l’entendre et le cacher. Redis le texte. Recommence.',
    'Read your answer aloud. Click a word to hear it and hide it. Say the answer again. Repeat.'],
  ['y10-sentence-cues', 'Un mot par phrase', 'One word per sentence',
    'Choisis un mot dans chaque phrase. Puis dis tout ton texte avec ces mots.',
    'Choose one word from each sentence. Then say your whole answer using those words.'],
];

const SPANISH_REHEARSAL_COPY = {
  repeat: ['Escucha', 'Escucha y sigue las palabras.'],
  'y10-chunks': ['Grupos de palabras', 'Lee el grupo. Escúchalo y repítelo en voz alta.'],
  'y10-initials': ['Iniciales', 'Di todo el texto con las primeras letras. Haz clic en una letra para escuchar la palabra.'],
  'y10-choose': ['Escucha y elige', 'Escucha el siguiente grupo. Búscalo y haz clic para añadirlo a tu texto.'],
  'y10-dictation': ['Escucha y escribe', 'Escucha el grupo y escribe lo que oyes en español.'],
  'y10-remember': ['Recuerda lo que sigue', 'Di el siguiente grupo de memoria. Búscalo y haz clic. Si oyes un pitido, inténtalo otra vez.'],
  'y10-translate': ['Del inglés al español', 'Lee el grupo en inglés. Escríbelo en español.'],
  'y10-chunk-cues': ['Una palabra por grupo', 'Elige una palabra de cada grupo. Después, di todo el texto con esas palabras.'],
  'y10-disappear': ['Palabras que desaparecen', 'Lee el texto en voz alta. Haz clic en una palabra para oírla y ocultarla. Vuelve a decir el texto.'],
  'y10-sentence-cues': ['Una palabra por frase', 'Elige una palabra de cada frase. Después, di todo el texto con esas palabras.'],
};

const y10Rehearsals = new Map();
let y10AudioContext;

function isRehearsalMode(step) {
  return YEAR_TEN ? Y10_REHEARSAL.some(([id]) => id === step) : PRACTICE_STAGES.includes(step);
}

function y10Vocabulary() {
  const support = yearTenSupport().flatMap(([, ...slots]) => slots.flatMap(([, ...pairs]) => pairs));
  return [...support, ...yearTenConnectives()];
}

function y10Sentences(text) {
  return text.split(/\r?\n/u).flatMap(line => {
    if (typeof Intl.Segmenter === 'function') {
      return Array.from(new Intl.Segmenter(studyLanguage, {granularity: 'sentence'}).segment(line), item => item.segment);
    }
    return line.split(/(?<=[.!?…])\s+/u);
  }).map(line => line.trim()).filter(line => practiceWords(line).length);
}

function y10RehearsalState() {
  const text = draft().revision;
  if (y10Rehearsals.get(current)?.text !== text) {
    const vocabulary = y10Vocabulary().map(([french, english]) => [practiceCheckValue(french), english]);
    const phrases = [...new Set(vocabulary.map(([french]) => french))]
      .map(french => french.split(' ')).filter(words => words.length > 1)
      .sort((a, b) => b.length - a.length);
    const sentences = y10Sentences(text);
    y10Rehearsals.set(current, {
      text, sentences, vocabulary: new Map(vocabulary),
      chunks: sentences.flatMap(sentence => shortPhraseGroups(sentence, phrases, studyLanguage)),
      stages: new Map(),
    });
  }
  return y10Rehearsals.get(current);
}

function y10StageState(rehearsal) {
  if (!rehearsal.stages.has(mode)) {
    rehearsal.stages.set(mode, {picked: [], cues: new Map(), hidden: new Set(), order: null, heard: false, feedback: ''});
  }
  return rehearsal.stages.get(mode);
}

function y10WordMarkup(text, wordMarkup) {
  let end = 0;
  let html = '';
  for (const [index, match] of Array.from(text.matchAll(PRACTICE_WORD)).entries()) {
    html += esc(text.slice(end, match.index)) + wordMarkup(match[0], index, match.index);
    end = match.index + match[0].length;
  }
  return html + esc(text.slice(end));
}

function y10Listen(text) {
  return `<div class="y10-rehearsal-text" data-y10-highlight>${y10WordMarkup(text, (word, _, start) =>
    `<span data-y10-offset="${start}">${esc(word)}</span>`)}</div>
    <div class="actions"><button data-y10-play>▶ ${gcseText('Écouter / Listen','Escuchar')}</button><button data-action="stop">${gcseText('Arrêter / Stop','Parar')}</button></div>
    <p class="muted" data-y10-audio-status role="status"></p>`;
}

function y10Pager(count) {
  return `<div class="actions practice-pager">
    <button data-action="prev" ${part === 0 ? 'disabled' : ''}>← ${gcseText('Précédent / Back','Anterior')}</button>
    <span class="muted">${part + 1} / ${count}</span>
    <button data-action="next" ${part >= count - 1 ? 'disabled' : ''}>${gcseText('Suivant / Next','Siguiente')} →</button>
  </div>`;
}

function y10Shuffle(chunks) {
  const order = chunks.map((_, index) => index);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  if (order.every((index, position) => chunks[index] === chunks[position])) {
    const different = order.findIndex(index => chunks[index] !== chunks[order[0]]);
    if (different > 0) [order[0], order[different]] = [order[different], order[0]];
  }
  return order;
}

function y10OrderBoard(chunks, stage, remember) {
  stage.order ??= y10Shuffle(chunks);
  const built = stage.picked.map(index => chunks[index]).join(' ');
  const awaitingAudio = !remember && !stage.heard;
  return `<div class="practice-reorder-layout">
    <div>
      ${!remember && stage.picked.length < chunks.length
        ? `<div class="actions"><button data-y10-listen-next>▶ ${gcseText('Écouter le groupe suivant / Listen to the next chunk','Escuchar el siguiente grupo')}</button></div><p class="muted" data-y10-audio-status role="status"></p>` : ''}
      <div class="practice-word-bank" aria-label="${gcseText('Groupes de mots / Chunks','Grupos de palabras')}">${stage.order.map(index =>
        `<button data-y10-pick="${index}" ${awaitingAudio || stage.picked.includes(index) ? 'disabled' : ''}>${esc(chunks[index])}</button>`).join('')}</div>
      <p class="practice-feedback" role="status">${esc(stage.feedback)}</p>
    </div>
    <aside class="practice-reorder-progress" aria-label="${gcseText('Mon texte / My text','Mi texto')}">
      <h3>${gcseText('Mon texte <span lang="en">/ My text</span>','Mi texto')}</h3>
      <p>${esc(built || '…')}</p>
      <div class="actions">
        ${!remember && stage.picked.length === chunks.length ? `<button data-y10-read-built>▶ ${gcseText('Écouter mon texte / Listen to my text','Escuchar mi texto')}</button>` : ''}
        ${built ? y10ResetButton() : ''}
      </div>
    </aside>
  </div>`;
}

function y10Cues(units, stage) {
  return `<ol class="practice-cue-grid y10-cue-grid">${units.map((unit, i) => {
    const words = practiceWords(unit);
    const picked = stage.cues.get(i);
    return `<li><div class="practice-word-bank">${picked === undefined
      ? words.map((word, j) => `<button data-y10-cue="${i}" data-y10-word="${j}">${esc(word)}</button>`).join('')
      : `<button class="y10-kept-word" data-y10-clear-cue="${i}" aria-label="${esc(words[picked])} · ${gcseText('Modifier le mot / Change word','Cambiar la palabra')}">${esc(words[picked])}</button>`}</div></li>`;
  }).join('')}</ol>
  ${stage.cues.size ? y10ResetButton() : ''}`;
}

function y10ResetButton() {
  return `<button data-y10-reset>${gcseText('Recommencer / Start again','Empezar de nuevo')}</button>`;
}

function y10EnglishExercise(unit, rehearsal) {
  const french = practiceCheckValue(unit);
  const vocabulary = rehearsal.vocabulary;
  let cue = practiceClauseCue(unit).english || vocabulary.get(french);
  if (!cue && french.startsWith('si ')) {
    const condition = vocabulary.get(french.slice(3));
    if (condition) cue = `If ${condition}`;
  }
  if (cue) return y10Typing(`<div class="focus y10-translation-prompt" lang="en">${esc(cue)}</div>`);
  const translate = typeof Translator !== 'undefined';
  return `<div class="focus y10-translation-prompt">
    ${translate ? `<button data-y10-translate>${gcseText('Afficher l’anglais / Show English','Mostrar en inglés')}</button><p class="muted" data-y10-translation-status role="status"></p>`
      : `<p class="muted">${gcseText('Ajoute le sens en anglais pour continuer. <span lang="en">Add the English meaning to continue.</span>','Añade el significado en inglés para continuar.')}</p>`}
    <details ${translate ? '' : 'open'}>
      <summary>${gcseText('Ajouter un indice / Add a cue','Añadir una pista')}</summary>
      <p class="y10-cue-source" lang="${studyLanguage}">${esc(unit)}</p>
      <form data-y10-manual-cue>
        <label for="y10-cue-input">${gcseText('Sens en anglais / English meaning','Significado en inglés')}</label>
        <input id="y10-cue-input" name="cue" type="text" lang="en" required>
        <button type="submit">${gcseText('Enregistrer / Save','Guardar')}</button>
      </form>
    </details>
  </div>`;
}

function y10Typing(prompt) {
  return `${prompt}<form data-y10-typing>
    <label class="field-label" for="y10-typed">${gcseText('Ma réponse / My answer','Mi respuesta')}</label>
    <textarea id="y10-typed" name="response" rows="2" lang="${studyLanguage}" autocomplete="off" spellcheck="false" required></textarea>
    <button type="submit">${gcseText('Vérifier / Check','Comprobar')}</button>
    <div class="practice-feedback" role="status"></div>
  </form>`;
}

function y10Rehearsal() {
  const rehearsal = y10RehearsalState();
  const {text, chunks, sentences} = rehearsal;
  if (!chunks.length) return `<section class="simple-card card">${simpleHeading()}
    <p>${gcseText('Écris ta réponse pour commencer. <span lang="en">Write your answer to begin.</span>','Escribe tu respuesta para empezar.')}</p>
    <button class="primary" data-mode="edit">${gcseText('Écrire ma réponse / Write my answer','Escribir mi respuesta')}</button></section>`;

  const stage = y10StageState(rehearsal);
  const step = Y10_REHEARSAL.findIndex(([id]) => id === mode);
  const [, frenchTitle, englishTitle, frenchInstruction, englishInstruction] = Y10_REHEARSAL[step];
  const [spanishTitle, spanishInstruction] = SPANISH_REHEARSAL_COPY[mode];
  part = Math.max(0, Math.min(part, chunks.length - 1));
  const unit = chunks[part];
  wordTokens = [];
  let body;
  switch (mode) {
    case 'repeat':
      body = y10Listen(text);
      break;
    case 'y10-chunks':
      body = y10Listen(unit) + y10Pager(chunks.length);
      break;
    case 'y10-initials':
      body = `<div class="initials y10-rehearsal-text">${initialMarkup(text)}</div>`;
      break;
    case 'y10-choose':
    case 'y10-remember':
      body = y10OrderBoard(chunks, stage, mode === 'y10-remember');
      break;
    case 'y10-dictation':
      body = y10Typing(`<button type="button" data-y10-play>▶ ${gcseText('Écouter / Listen','Escuchar')}</button>`) + y10Pager(chunks.length);
      break;
    case 'y10-translate':
      body = y10EnglishExercise(unit, rehearsal) + y10Pager(chunks.length);
      break;
    case 'y10-chunk-cues':
    case 'y10-sentence-cues':
      body = y10Cues(mode === 'y10-chunk-cues' ? chunks : sentences, stage);
      break;
    case 'y10-disappear':
      body = `<div class="y10-rehearsal-text">${y10WordMarkup(text, (word, index) => stage.hidden.has(index)
        ? '–' : `<button data-y10-hide="${index}">${esc(word)}</button>`)}</div>
        ${stage.hidden.size ? y10ResetButton() : ''}`;
      break;
  }
  return `<section class="simple-card card" data-y10-rehearsal>
    ${simpleHeading()}
    <p class="muted practice-stage-count">${gcseText('Étape / Step','Etapa')} ${step + 1} / ${Y10_REHEARSAL.length}</p>
    <h3 id="practice-instruction" tabindex="-1">${gcseText(`${frenchTitle} <span lang="en">/ ${englishTitle}</span>`,spanishTitle)}</h3>
    <p class="y10-instructions">${gcseText(`${frenchInstruction}<br><span lang="en">${englishInstruction}</span>`,spanishInstruction)}</p>
    ${body}
    <div class="actions practice-controls">
      ${step > 0 ? `<button data-mode="${Y10_REHEARSAL[step - 1][0]}">${gcseText('Plus d’aide / More help','Más ayuda')}</button>` : ''}
      ${step < Y10_REHEARSAL.length - 1
        ? `<button class="primary" data-mode="${Y10_REHEARSAL[step + 1][0]}">${gcseText('Moins d’aide / Less help','Menos ayuda')} →</button>`
        : `<label class="check"><input type="checkbox" data-memorised ${draft().memorised ? 'checked' : ''}> ${gcseText('Je peux le dire seul(e). <span lang="en">I can say it on my own.</span>','Puedo decirlo sin ayuda.')}</label>`}
    </div>
  </section>`;
}

function y10PlayText(card, text) {
  const spans = Array.from(card.querySelectorAll('[data-y10-offset]'));
  const status = card.querySelector('[data-y10-audio-status]');
  let active;
  let tracked = false;
  if (status) status.textContent = '';
  speak(text, false, {
    rate: .75,
    boundary(event) {
      if (event.name === 'sentence') return;
      const word = spans.find(span => {
        const offset = Number(span.dataset.y10Offset);
        return event.charIndex >= offset && event.charIndex < offset + span.textContent.length;
      });
      if (!word) return;
      tracked = true;
      active?.removeAttribute('data-y10-speaking');
      active = word;
      active.setAttribute('data-y10-speaking', '');
    },
    finish(event) {
      active?.removeAttribute('data-y10-speaking');
      if (!status || !card.isConnected) return;
      if (event?.type === 'error') status.textContent = gcseText('Audio indisponible · Audio unavailable','Audio no disponible');
      else if (spans.length > 1 && !tracked) status.textContent =
        gcseText('Cette voix ne peut pas surligner les mots. · This voice cannot highlight individual words.','Esta voz no puede resaltar las palabras.');
    },
  });
}

async function y10Buzz() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    y10AudioContext ??= new AudioContext();
    if (y10AudioContext.state === 'suspended') await y10AudioContext.resume();
    const oscillator = y10AudioContext.createOscillator();
    const volume = y10AudioContext.createGain();
    const now = y10AudioContext.currentTime;
    oscillator.type = 'triangle';
    oscillator.frequency.value = 130;
    volume.gain.setValueAtTime(.12, now);
    volume.gain.exponentialRampToValueAtTime(.001, now + .18);
    oscillator.connect(volume).connect(y10AudioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + .18);
  } catch {
    // The visible retry message also works when sound is unavailable.
  }
}

function bindY10Rehearsal() {
  const card = document.querySelector('[data-y10-rehearsal]');
  if (!card) return;
  const rehearsal = y10RehearsalState();
  const {text, chunks} = rehearsal;
  const stage = y10StageState(rehearsal);
  const unit = chunks[part];
  const select = selector => card.querySelector(selector);
  function bindClick(selector, action) {
    card.querySelectorAll(selector).forEach(button => {
      button.onclick = () => action(button);
    });
  }
  bindClick('[data-y10-play]', () => y10PlayText(card, mode === 'repeat' ? text : unit));
  bindClick('[data-y10-listen-next]', () => {
    stage.heard = true;
    card.querySelectorAll('[data-y10-pick]').forEach(button => {
      button.disabled = stage.picked.includes(Number(button.dataset.y10Pick));
    });
    y10PlayText(card, chunks[stage.picked.length]);
  });
  bindClick('[data-y10-read-built]', () => speak(stage.picked.map(index => chunks[index]).join(' ')));
  bindClick('[data-y10-pick]', button => {
    if (mode === 'y10-choose' && !stage.heard) return;
    const index = Number(button.dataset.y10Pick);
    if (chunks[index] !== chunks[stage.picked.length]) {
      stage.feedback = gcseText('Essaie encore. · Try again.','Inténtalo otra vez.');
      select('.practice-feedback').textContent = stage.feedback;
      if (mode === 'y10-remember') y10Buzz();
      return;
    }
    stage.picked.push(index);
    stage.heard = false;
    stage.feedback = stage.picked.length === chunks.length
      ? gcseText('Bravo ! Dis le texte à voix haute. · Well done! Say the whole answer aloud.','¡Muy bien! Di todo el texto en voz alta.') : '';
    render();
    document.querySelector('[data-y10-listen-next]')?.focus({preventScroll: true});
  });
  bindClick('[data-y10-reset]', () => {
    rehearsal.stages.delete(mode);
    stopSpeech();
    render();
  });
  bindClick('[data-y10-cue]', button => {
    stage.cues.set(Number(button.dataset.y10Cue), Number(button.dataset.y10Word));
    render();
  });
  bindClick('[data-y10-clear-cue]', button => {
    stage.cues.delete(Number(button.dataset.y10ClearCue));
    render();
  });
  const words = practiceWords(text);
  bindClick('[data-y10-hide]', button => {
    const index = Number(button.dataset.y10Hide);
    stage.hidden.add(index);
    render();
    speak(words[index]);
  });
  const typing = select('[data-y10-typing]');
  if (typing) typing.onsubmit = event => {
    event.preventDefault();
    const feedback = typing.querySelector('[role="status"]');
    const correct = practiceCheckValue(typing.elements.response.value) === practiceCheckValue(unit);
    feedback.textContent = correct ? gcseText('Bravo ! Dis-le à voix haute. · Well done! Say it aloud.','¡Muy bien! Dilo en voz alta.')
      : gcseText('Compare avec ton texte, puis réessaie. · Compare with your text, then try again.','Compara con tu texto e inténtalo otra vez.');
    if (!correct) {
      const original = document.createElement('p');
      original.textContent = unit;
      feedback.append(original);
    }
  };
  const manualCue = select('[data-y10-manual-cue]');
  if (manualCue) manualCue.onsubmit = event => {
    event.preventDefault();
    const english = manualCue.elements.cue.value.trim();
    if (!english) return;
    savePracticeEnglish(draft(), unit, english);
    render();
    $('y10-typed')?.focus();
  };
  const translate = select('[data-y10-translate]');
  if (!translate) return;
  async function prepareEnglish() {
    if (translate.disabled) return;
    const target = draft();
    const status = select('[data-y10-translation-status]');
    translate.disabled = true;
    status.textContent = gcseText('Un instant… · One moment…','Un momento…');
    try {
      const english = (await translatePracticeClause(unit)).trim();
      if (!english) throw new Error('Empty translation');
      if (!practiceClauseCue(unit, target).english) savePracticeEnglish(target, unit, english);
      if (card.isConnected) {
        render();
        $('y10-typed')?.focus();
      }
    } catch {
      translate.disabled = false;
      status.textContent = gcseText('Ajoute un indice en anglais. · Add an English cue.','Añade una pista en inglés.');
      select('details').open = true;
    }
  }
  translate.onclick = prepareEnglish;
  if (englishTranslator || navigator.userActivation?.isActive) prepareEnglish();
}
```

## `dist/y10-support.js`

```javascript
const Y10_SUPPORT = {
  relationships: [
    ['Dire comment on s’entend',
      ['Pour commencer', ['Je m’entends', 'I get on'], ['On s’entend', 'We get on']],
      ['Comment ?', ['très bien', 'very well'], ['plutôt bien', 'quite well'], ['pas trop mal', 'not too badly'], ['assez mal', 'quite badly']],
      ['Avec qui ?', ['avec mes parents', 'with my parents'], ['avec mes grands-parents', 'with my grandparents'],
        ['avec mon frère', 'with my brother'], ['avec ma sœur', 'with my sister'], ['avec mes frères et sœurs', 'with my siblings']]],
    ['Expliquer pourquoi',
      ['Introduire la raison', ['parce que', 'because'], ['car', 'because']],
      ['Des raisons', ['mes parents m’écoutent', 'my parents listen to me'], ['mes frères m’encouragent', 'my brothers encourage me'],
        ['mes sœurs me comprennent', 'my sisters understand me'], ['ma famille me traite bien', 'my family treats me well'],
        ['nous nous soutenons', 'we support each other'], ['nous ne nous disputons pas souvent', 'we do not argue often']]],
    ['Décrire quelqu’un',
      ['Qui ?', ['ma mère est', 'my mum is'], ['mon père est', 'my dad is'], ['ma sœur est', 'my sister is'], ['mon frère est', 'my brother is']],
      ['Une qualité ou un défaut', ['sympa', 'nice'], ['à l’écoute', 'a good listener'], ['drôle', 'funny'], ['fiable', 'reliable'],
        ['honnête', 'honest'], ['égoïste', 'selfish'], ['autoritaire', 'bossy'], ['injuste', 'unfair']]],
    ['Parler du temps passé ensemble',
      ['Le début', ['On passe du temps à', 'We spend time'], ['On aime', 'We like to']],
      ['Activités', ['regarder des films', 'watch films'], ['faire du shopping', 'go shopping'], ['cuisiner', 'cook'], ['bavarder', 'chat']],
      ['L’effet', ['ce qui me fait du bien', 'which makes me feel good'], ['ce qui renforce notre lien', 'which strengthens our bond']]],
    ['Dire ce qu’on aimerait',
      ['Le début', ['J’aimerais', 'I would like']],
      ['Un changement', ['m’entendre mieux avec eux', 'to get on better with them'], ['passer plus de temps ensemble', 'to spend more time together'],
        ['qu’on se dispute moins', 'us to argue less'], ['qu’on se soutienne plus', 'us to support each other more']]],
  ],
  values: [
    ['Nommer une valeur',
      ['Le début', ['Pour moi,', 'For me,'], ['À mon avis,', 'In my opinion,'], ['Je crois que', 'I believe that']],
      ['Valeurs', ['le respect', 'respect'], ['l’égalité', 'equality'], ['la liberté', 'freedom'], ['la justice', 'justice'],
        ['la famille', 'family'], ['l’amitié', 'friendship'], ['le travail', 'work'], ['la santé', 'health']],
      ['Ton avis', ['compte beaucoup', 'matters a lot'], ['a beaucoup d’importance', 'is very important']]],
    ['Donner une devise',
      ['Le début', ['Ma devise, c’est simple :', 'My motto is simple:'], ['Il faut', 'We must'], ['On doit', 'We should']],
      ['Une action', ['aider les autres', 'help others'], ['respecter tout le monde', 'respect everyone'], ['protéger la planète', 'protect the planet'],
        ['dire la vérité', 'tell the truth'], ['soutenir sa famille', 'support one’s family'], ['partager avec les autres', 'share with others']]],
    ['Donner une raison',
      ['Pour relier', ['parce que', 'because'], ['car', 'because']],
      ['Pourquoi ?', ['ça fait une différence', 'it makes a difference'], ['ça aide les autres', 'it helps others'],
        ['ça améliore la situation', 'it improves things'], ['tout le monde est différent', 'everyone is different'],
        ['tout le monde n’a pas les mêmes chances', 'not everyone has the same opportunities']]],
    ['Expliquer le but',
      ['Pour introduire le but', ['pour', 'to']],
      ['Un objectif', ['vivre en paix', 'live in peace'], ['avoir une vie meilleure', 'have a better life'],
        ['rendre le monde meilleur', 'make the world better'], ['réussir dans la vie', 'succeed in life'], ['rester en bonne santé', 'stay healthy']]],
  ],
  bestFriend: [
    ['Présenter son ami ou son amie',
      ['De qui s’agit-il ?', ['mon meilleur ami', 'my best friend'], ['ma meilleure amie', 'my best friend']],
      ['Son prénom ou son âge', ['s’appelle', 'is called'], ['il s’appelle', 'his name is'], ['elle s’appelle', 'her name is'],
        ['il a', 'he is'], ['elle a', 'she is'], ['ans', 'years old']]],
    ['Décrire la personne',
      ['Le début', ['Il est', 'He is'], ['Elle est', 'She is'], ['Il a l’air', 'He seems'], ['Elle a l’air', 'She seems']],
      ['Une qualité', ['sympa', 'nice'], ['drôle', 'funny'], ['sociable', 'sociable'], ['timide', 'shy'],
        ['honnête', 'honest'], ['fiable', 'reliable'], ['calme', 'calm'], ['sportif', 'sporty'], ['sportive', 'sporty']],
      ['Autres détails', ['il a les cheveux bouclés', 'he has curly hair'], ['elle a les yeux marron', 'she has brown eyes'],
        ['il porte des lunettes', 'he wears glasses'], ['elle porte des boucles d’oreilles', 'she wears earrings']]],
    ['Raconter la rencontre',
      ['Le début', ['Je l’ai rencontré', 'I met him'], ['Je l’ai rencontrée', 'I met her']],
      ['Où ?', ['à l’école', 'at school'], ['en primaire', 'at primary school'], ['dans un club', 'in a club'],
        ['en vacances', 'on holiday'], ['en ligne', 'online']],
      ['Quand ?', ['il y a deux ans', 'two years ago'], ['quand j’avais dix ans', 'when I was ten'], ['le premier jour', 'on the first day']]],
    ['Raconter la suite',
      ['Pour continuer', ['Puis,', 'Then,'], ['Ensuite,', 'Next,']],
      ['Un événement', ['on a commencé à parler', 'we started talking'], ['on a joué ensemble', 'we played together'],
        ['on s’est bien entendus', 'we got on well'], ['on est devenus amis', 'we became friends'], ['on est devenues amies', 'we became friends']]],
    ['Dire ce que cette amitié apporte',
      ['Le début', ['Il me fait', 'He makes me'], ['Elle me fait', 'She makes me']],
      ['L’effet', ['rire', 'laugh'], ['sourire', 'smile'], ['réfléchir', 'think'], ['faire des efforts', 'make an effort']]],
  ],
  ideal: [
    ['Présenter la personne ou la famille',
      ['Le sujet', ['mon ami idéal', 'my ideal friend'], ['mon amie idéale', 'my ideal friend'], ['ma famille idéale', 'my ideal family']],
      ['Le verbe', ['serait', 'would be']],
      ['Une qualité', ['sympa', 'nice'], ['calme', 'calm'], ['fiable', 'reliable'], ['honnête', 'honest'], ['à l’écoute', 'a good listener']]],
    ['Dire ce qui compterait',
      ['Le verbe', ['il aurait', 'he would have'], ['elle aurait', 'she would have']],
      ['Un détail', ['du temps pour moi', 'time for me'], ['le sens de l’humour', 'a sense of humour'],
        ['les mêmes intérêts que moi', 'the same interests as me'], ['de bonnes idées', 'good ideas']]],
    ['Parler de ses goûts',
      ['Le début', ['Il aimerait', 'He would like to'], ['Elle aimerait', 'She would like to'], ['Elle voudrait', 'She would want to']],
      ['Activités ou valeurs', ['faire du sport', 'do sport'], ['écouter de la musique', 'listen to music'], ['passer du temps avec moi', 'spend time with me'],
        ['aider les autres', 'help others'], ['faire des efforts', 'make an effort']]],
    ['Imaginer ce qu’on ferait ensemble',
      ['Le début', ['On pourrait', 'We could'], ['On aimerait', 'We would like to']],
      ['Activités', ['faire des activités ensemble', 'do activities together'], ['regarder des films', 'watch films'],
        ['aller en ville', 'go into town'], ['partir en vacances', 'go on holiday'], ['faire nos devoirs ensemble', 'do our homework together']]],
    ['Dire ce que cela changerait',
      ['Le début', ['Il pourrait', 'He could'], ['Elle pourrait', 'She could']],
      ['L’effet', ['m’aider', 'help me'], ['me comprendre', 'understand me'], ['me faire rire', 'make me laugh'], ['me soutenir', 'support me']]],
  ],
  preferences: [
    ['Donner sa préférence',
      ['Le début', ['Je préfère', 'I prefer'], ['J’aime mieux', 'I prefer']],
      ['L’activité', ['passer du temps', 'spend time']],
      ['Avec qui ?', ['en famille', 'with family'], ['entre amis', 'with friends'], ['avec ma famille', 'with my family'], ['avec mes amis', 'with my friends']]],
    ['Comparer',
      ['Le début', ['Je passe', 'I spend']],
      ['La quantité', ['plus de temps', 'more time'], ['moins de temps', 'less time'], ['autant de temps', 'as much time']],
      ['La comparaison', ['en famille qu’entre amis', 'with family than / as with friends'], ['entre amis qu’en famille', 'with friends than / as with family']]],
    ['Expliquer pourquoi',
      ['Pour introduire la raison', ['parce que', 'because'], ['car', 'because']],
      ['Pourquoi ?', ['c’est amusant', 'it is fun'], ['c’est relaxant', 'it is relaxing'], ['ma famille me comprend', 'my family understands me'],
        ['mes amis me soutiennent', 'my friends support me'], ['nous avons les mêmes intérêts', 'we have the same interests']]],
    ['Donner un exemple',
      ['Quand ?', ['Le week-end,', 'At weekends,'], ['Après l’école,', 'After school,'], ['Pendant les vacances,', 'During the holidays,']],
      ['Que fait-on ?', ['on va au cinéma', 'we go to the cinema'], ['on écoute de la musique', 'we listen to music'],
        ['on cuisine ensemble', 'we cook together'], ['on joue aux jeux vidéo', 'we play video games'], ['on se promène', 'we go for walks']]],
    ['Expliquer ce que cela apporte',
      ['Le début', ['Ça me permet de', 'It allows me to']],
      ['L’effet', ['me détendre', 'relax'], ['me changer les idées', 'take my mind off things'], ['créer de bons souvenirs', 'make good memories'],
        ['renforcer nos relations', 'strengthen our relationships']]],
  ],
  pastBirthday: [
    ['Présenter la fête',
      ['Quand ?', ['L’année dernière,', 'Last year,'], ['Pour mon anniversaire,', 'For my birthday,']],
      ['Ce que j’ai fait', ['j’ai fêté mon anniversaire', 'I celebrated my birthday'], ['j’ai organisé une fête', 'I organised a party'],
        ['j’ai invité mes amis', 'I invited my friends'], ['j’ai reçu des cadeaux', 'I received presents'], ['j’ai ouvert mes cartes', 'I opened my cards']],
      ['Où ? Avec qui ?', ['chez moi', 'at my place'], ['avec mes amis', 'with my friends'], ['avec ma famille', 'with my family']]],
    ['Dire où on est allés',
      ['Le début', ['Ensuite,', 'Next,'], ['Puis,', 'Then,']],
      ['Le verbe', ['nous sommes allés', 'we went'], ['nous sommes allées', 'we went']],
      ['Où ?', ['au restaurant', 'to a restaurant'], ['au cinéma', 'to the cinema'], ['dans un parc', 'to a park'], ['en ville', 'into town']]],
    ['Décrire les activités',
      ['Ce qu’on a fait', ['nous avons mangé du gâteau', 'we ate cake'], ['nous avons bu du jus', 'we drank juice'],
        ['nous avons joué à des jeux', 'we played games'], ['nous avons écouté de la musique', 'we listened to music']],
      ['Pour terminer', ['nous avons fini par', 'we ended up']],
      ['La dernière activité', ['ouvrir les cadeaux', 'opening the presents'], ['manger le gâteau', 'eating the cake'], ['rentrer chez nous', 'going home']]],
    ['Donner son avis',
      ['Le début', ['C’était', 'It was'], ['L’ambiance était', 'The atmosphere was']],
      ['Avec les deux débuts', ['sympa', 'nice'], ['incroyable', 'incredible']],
      ['Après « c’était »', ['génial', 'great'], ['amusant', 'fun']],
      ['Après « l’ambiance était »', ['géniale', 'great'], ['détendue', 'relaxed']],
      ['Autre détail', ['il y avait beaucoup de monde', 'there were lots of people'], ['on s’est bien amusés', 'we had a good time']]],
  ],
  futureBirthday: [
    ['Présenter ses projets',
      ['Quand ?', ['Cette année,', 'This year,'], ['Le jour de mon anniversaire,', 'On my birthday,'], ['Le week-end prochain,', 'Next weekend,']],
      ['Le début', ['je vais', 'I am going to'], ['je compte', 'I intend to']],
      ['Les projets', ['fêter mon anniversaire', 'celebrate my birthday'], ['organiser une fête', 'organise a party'],
        ['inviter mes amis', 'invite my friends'], ['préparer un gâteau', 'make a cake'], ['décorer la maison', 'decorate the house']]],
    ['Dire où et avec qui',
      ['Où ?', ['chez moi', 'at my place'], ['chez un ami', 'at a friend’s house'], ['au restaurant', 'at a restaurant'],
        ['dans un parc', 'in a park'], ['à la plage', 'at the beach']],
      ['Avec qui ?', ['avec mes amis', 'with my friends'], ['avec ma famille', 'with my family'], ['avec mes proches', 'with my loved ones']]],
    ['Raconter le programme',
      ['Pour organiser', ['D’abord,', 'First,'], ['Ensuite,', 'Next,'], ['Enfin,', 'Finally,']],
      ['Le début', ['nous allons', 'we are going to']],
      ['Activités', ['jouer à des jeux', 'play games'], ['écouter de la musique', 'listen to music'], ['danser', 'dance'],
        ['manger ensemble', 'eat together'], ['prendre des photos', 'take photos'], ['regarder un film', 'watch a film']]],
    ['Dire ce qu’on aimerait',
      ['Le début', ['J’aimerais', 'I would like to'], ['Ça me ferait plaisir de', 'I would love to']],
      ['Une idée', ['recevoir mes amis chez moi', 'have my friends over'], ['passer une journée tranquille', 'spend a quiet day'],
        ['faire quelque chose de spécial', 'do something special'], ['créer des souvenirs', 'make memories']]],
    ['Dire ce qu’on attend de la fête',
      ['Le début', ['Ça va être', 'It is going to be']],
      ['Ton avis', ['génial', 'great'], ['amusant', 'fun'], ['spécial', 'special'], ['inoubliable', 'unforgettable']],
      ['Pour donner un but', ['pour m’amuser', 'to have fun'], ['pour passer du temps ensemble', 'to spend time together'], ['pour marquer le coup', 'to mark the occasion']]],
  ],
  family: [
    ['Donner son avis',
      ['Pour commencer', ['Pour moi,', 'For me,'], ['À mon avis,', 'In my opinion,']],
      ['Le sujet', ['la famille', 'family']],
      ['Ton avis', ['est importante', 'is important'], ['compte beaucoup', 'matters a lot'], ['est essentielle', 'is essential']]],
    ['Nuancer son avis',
      ['Pour nuancer', ['mais', 'but'], ['pourtant,', 'however,']],
      ['Exprimer un besoin', ['j’ai aussi besoin de', 'I also need'], ['j’ai vraiment besoin de', 'I really need']],
      ['Ce dont j’ai besoin', ['mon indépendance', 'my independence'], ['ma liberté', 'my freedom'],
        ['plus d’autonomie', 'more independence'], ['temps pour moi', 'time for myself'], ['mon espace', 'my own space']]],
    ['Décrire ses relations',
      ['Le verbe', ['je m’entends', 'I get on']],
      ['Comment ?', ['très bien', 'very well'], ['plutôt bien', 'quite well'], ['assez mal', 'quite badly']],
      ['Avec qui ?', ['avec mes parents', 'with my parents'], ['avec ma sœur', 'with my sister'],
        ['avec mon frère', 'with my brother'], ['avec mes grands-parents', 'with my grandparents']]],
    ['Expliquer pourquoi',
      ['La raison', ['parce que', 'because']],
      ['Ce que ma famille fait', ['mes parents m’écoutent', 'my parents listen to me'],
        ['ma sœur me soutient', 'my sister supports me'], ['nous nous comprenons bien', 'we understand each other well'],
        ['ma famille me donne des conseils', 'my family gives me advice'], ['je peux compter sur eux', 'I can count on them']],
      ['Dans quelle situation ?', ['quand j’ai un problème', 'when I have a problem'], ['même les jours difficiles', 'even on difficult days']]],
    ['Donner un exemple',
      ['Pour situer', ['Le week-end,', 'At weekends,'], ['Après les cours,', 'After school,'], ['En vacances,', 'On holiday,']],
      ['Pour introduire l’activité', ['on aime', 'we like to'], ['on préfère', 'we prefer to'], ['on peut', 'we can']],
      ['Activités', ['cuisiner ensemble', 'cook together'], ['partager un repas', 'share a meal'], ['regarder un film', 'watch a film'],
        ['jouer à des jeux de société', 'play board games'], ['bavarder', 'chat']]],
    ['Parler d’une difficulté',
      ['Pour faire un contraste', ['Même si', 'Even though']],
      ['Une difficulté', ['on se dispute parfois', 'we sometimes argue'], ['mes parents sont stricts', 'my parents are strict'],
        ['on n’est pas toujours d’accord', 'we don’t always agree']],
      ['Après la virgule', ['on se réconcilie vite', 'we soon make up'], ['on se soutient', 'we support each other'],
        ['je respecte leur avis', 'I respect their opinion']]],
  ],
  friendship: [
    ['Donner son avis',
      ['Pour commencer', ['Pour moi,', 'For me,'], ['À mon avis,', 'In my opinion,']],
      ['Le sujet', ['l’amitié', 'friendship'], ['mes amis', 'my friends']],
      ['Avec « l’amitié »', ['compte beaucoup', 'matters a lot'], ['est essentielle', 'is essential']],
      ['Avec « mes amis »', ['sont importants pour moi', 'are important to me'], ['comptent énormément', 'matter a great deal']]],
    ['Décrire un bon ami',
      ['Le début', ['un bon ami', 'a good friend'], ['une amie proche', 'a close friend']],
      ['Une qualité', ['est honnête', 'is honest'], ['est fidèle', 'is loyal'], ['est à l’écoute', 'is a good listener'],
        ['sait garder un secret', 'knows how to keep a secret'], ['ne me juge pas', 'doesn’t judge me']]],
    ['Expliquer pourquoi',
      ['La raison', ['parce que', 'because']],
      ['Ce que mes amis font', ['mes amis m’écoutent', 'my friends listen to me'], ['mes amis m’encouragent', 'my friends encourage me'],
        ['nous nous entraidons', 'we help each other'], ['nous rigolons ensemble', 'we have a laugh together'],
        ['je peux leur faire confiance', 'I can trust them']],
      ['Dans quelle situation ?', ['quand ça ne va pas', 'when things aren’t going well'], ['quand j’ai besoin d’aide', 'when I need help']]],
    ['Donner un exemple',
      ['Pour situer', ['Par exemple,', 'For example,'], ['La semaine dernière,', 'Last week,'], ['Un jour,', 'One day,']],
      ['Ce qui s’est passé', ['un ami m’a aidé', 'a friend helped me'], ['un ami m’a aidée', 'a friend helped me'], ['on a révisé ensemble', 'we revised together'],
        ['on est allés en ville', 'we went into town'], ['ils m’ont remonté le moral', 'they cheered me up']]],
    ['Nuancer son avis',
      ['Pour faire un contraste', ['Même si', 'Even though']],
      ['Une difficulté', ['on se voit rarement', 'we rarely see each other'], ['on n’a pas les mêmes goûts', 'we don’t have the same tastes'],
        ['on se dispute parfois', 'we sometimes argue']],
      ['Après la virgule', ['on reste en contact', 'we stay in touch'], ['on s’entend bien', 'we get on well'],
        ['on en parle', 'we talk about it']]],
    ['Dire ce que cela change',
      ['Pour imaginer', ['Sans mes amis,', 'Without my friends,']],
      ['Ce qui changerait', ['je me sentirais seul', 'I would feel lonely'], ['je me sentirais seule', 'I would feel lonely'], ['j’aurais moins confiance en moi', 'I would have less confidence in myself'],
        ['je rirais moins', 'I would laugh less']]],
  ],
  time: [
    ['Imaginer une situation · imparfait',
      ['Le début', ['Si', 'If']],
      ['Une situation, puis une virgule', ['j’avais plus de temps', 'I had more time'], ['j’avais moins de devoirs', 'I had less homework'],
        ['mes journées étaient moins chargées', 'my days were less busy'], ['je passais moins de temps en ligne', 'I spent less time online'],
        ['je finissais mes devoirs plus tôt', 'I finished my homework earlier'], ['je rentrais plus tôt', 'I got home earlier'],
        ['je m’organisais mieux', 'I organised myself better'], ['je pouvais choisir mes horaires', 'I could choose my hours'],
        ['j’étais moins occupé', 'I was less busy'], ['j’étais moins occupée', 'I was less busy'], ['je devais moins réviser', 'I had to revise less'],
        ['je travaillais moins le soir', 'I worked less in the evenings'], ['les vacances duraient plus longtemps', 'the holidays lasted longer']]],
    ['Dire ce que l’on ferait · conditionnel',
      ['Après la virgule', ['je ferais du sport', 'I would do some sport'], ['je verrais mes amis', 'I would see my friends'],
        ['j’irais à la plage', 'I would go to the beach'], ['j’apprendrais la guitare', 'I would learn the guitar'],
        ['je ferais du bénévolat', 'I would volunteer'], ['je lirais davantage', 'I would read more'],
        ['je jouerais au foot', 'I would play football'], ['je reprendrais la danse', 'I would take up dancing again'],
        ['je pourrais aider mes parents', 'I could help my parents'], ['je passerais du temps en famille', 'I would spend time with family'],
        ['je prendrais le temps de souffler', 'I would take time to unwind'], ['je regarderais des films', 'I would watch films'],
        ['je dormirais un peu plus', 'I would sleep a bit more'], ['je m’inscrirais à un club', 'I would join a club'],
        ['je participerais à des activités', 'I would take part in activities'], ['je profiterais de mes week-ends', 'I would enjoy my weekends']]],
    ['Ajouter un détail',
      ['Quand ?', ['après les cours', 'after school'], ['le samedi matin', 'on Saturday mornings'], ['pendant les vacances', 'during the holidays'],
        ['plus souvent', 'more often'], ['une fois par semaine', 'once a week']],
      ['Avec qui ?', ['avec mes amis', 'with my friends'], ['avec ma famille', 'with my family'], ['tout seul', 'on my own'], ['toute seule', 'on my own']]],
    ['Expliquer le problème actuel',
      ['Pour situer', ['En ce moment,', 'At the moment,'], ['En semaine,', 'During the week,']],
      ['L’obstacle', ['j’ai beaucoup de devoirs', 'I have a lot of homework'], ['je dois réviser', 'I have to revise'],
        ['je manque de temps', 'I’m short of time'], ['mes journées sont chargées', 'my days are busy']]],
    ['Expliquer les avantages',
      ['Pour introduire l’avantage', ['Cela me permettrait de', 'That would allow me to'], ['J’en profiterais pour', 'I would use the opportunity to']],
      ['Le résultat', ['me sentir moins stressé', 'feel less stressed'], ['me sentir moins stressée', 'feel less stressed'], ['voir mes grands-parents', 'see my grandparents'],
        ['rester en forme', 'stay in shape'], ['découvrir une nouvelle activité', 'discover a new activity'], ['trouver un meilleur équilibre', 'find a better balance']]],
    ['Dire ce qui changerait',
      ['Pour faire un contraste', ['Au lieu de', 'Instead of']],
      ['Ce que je ferais moins', ['rester chez moi', 'staying at home'], ['regarder mon téléphone', 'looking at my phone'],
        ['tout faire à la dernière minute', 'doing everything at the last minute']],
      ['Après la virgule', ['je sortirais plus souvent', 'I would go out more often'], ['je lirais un livre', 'I would read a book'],
        ['je m’organiserais mieux', 'I would organise myself better']]],
  ],
};

const Y10_CONNECTIVES = [
  ['et', 'and'], ['mais', 'but'], ['parce que', 'because'], ['car', 'because'],
  ['quand', 'when'], ['si', 'if'], ['même si', 'even if / even though'],
  ['donc', 'so'], ['de plus', 'in addition'], ['par exemple', 'for example'],
  ['pourtant', 'yet / however'], ['ce qui…', 'which…'], ['au lieu de…', 'instead of…'],
];

const Y10_STRETCH_CHUNKS = {
  although: ['Bien que…', 'Although…', 'Add who you’re talking about and a subjunctive verb, then give the contrast.'],
  sometimes: ['Il m’arrive de…', 'I sometimes…', 'Add an infinitive for something you sometimes do with your family.'],
  matters: ['Ce qui compte le plus à mes yeux, c’est de…', 'What matters most to me is to…', 'Add an infinitive to say what matters in practice.'],
  essential: ['Il est essentiel que…', 'It is essential that…', 'Add a subject and a subjunctive verb to say what people should do.'],
  knownFor: ['Ça fait… que l’on se connaît.', 'We’ve known each other for…', 'Put a length of time in the gap. Keep « se connaît » in the present.'],
  backThen: ['À l’époque où…', 'Back when…', 'Use the imperfect to set the scene, then the passé composé to say what happened.'],
  ideally: ['Dans l’idéal, il faudrait que…', 'Ideally, it would be necessary for…', 'Add a subject and a subjunctive verb to say what would need to happen.'],
  relyOn: ['sur qui je pourrais compter', 'whom I could rely on', 'Insert after a person or group, e.g. « un ami » or « des proches ».'],
  depends: ['Tout dépend de…', 'It all depends on…', 'Name what affects your choice, then say when you prefer each option.'],
  evenThough: ['J’ai beau…, …', 'Even though I…, …', 'Add an infinitive for something you enjoy or try, then give a contrasting opinion.'],
  wouldHaveLiked: ['J’aurais aimé…, mais c’était…', 'I would have liked to…, but it was…', 'Add an infinitive for what you wanted to do and a detail about what got in the way.'],
  after: ['Après avoir…', 'After having…', 'Add a past participle, e.g. « terminé », then say what happened or would happen next.'],
  asFarAsIKnow: ['Pour autant que je sache, …', 'As far as I know, …', 'Keep « je sache » as it is. « Sache » is the subjunctive of « savoir ». Continue with a detail about the plans.'],
  lookingForward: ['J’ai hâte de…', 'I’m looking forward to…', 'Add an infinitive for the part of your birthday you’re most excited about.'],
  without: ['Sans…, je…', 'Without…, I…', 'Name who or what you would be without, then use the conditional to say how life would be different.'],
};

const Y10_STRETCH_BY_QUESTION = {
  1: ['although', 'sometimes'],
  2: ['matters', 'essential'],
  3: ['knownFor', 'backThen'],
  4: ['ideally', 'relyOn'],
  5: ['depends', 'evenThough'],
  6: ['wouldHaveLiked', 'after'],
  7: ['asFarAsIKnow', 'lookingForward'],
  8: ['matters', 'without'],
  9: ['ideally', 'after'],
};

const Y10_SUBJUNCTIVE_MODELS = {
  1: {although: [
    ['mes parents soient parfois stricts', 'my parents are sometimes strict'],
    ['nous ayons des avis différents', 'we have different opinions'],
  ]},
  2: {essential: [
    ['tout le monde puisse participer', 'everyone can take part'],
    ['chacun fasse un effort', 'everyone makes an effort'],
  ]},
  4: {ideally: [
    ['cette personne soit à l’écoute', 'this person is a good listener'],
    ['nous ayons des intérêts en commun', 'we have interests in common'],
  ]},
  7: {asFarAsIKnow: [
    ['Pour autant que je sache, la fête aura lieu…', 'As far as I know, the party will take place…'],
    ['Pour autant que je sache, mes amis pourront…', 'As far as I know, my friends will be able to…'],
  ]},
  9: {ideally: [
    ['je puisse mieux m’organiser', 'I can organise my time better'],
    ['j’aie moins de devoirs', 'I have less homework'],
  ]},
};

function yearTenLevelUp() {
  const {id, core, topic} = question();
  const chunks = SPANISH_IGCSE_LEVEL_UP[id] ?? Y10_TOPIC_LEVEL_UP[topic] ?? Y10_WELLBEING_LEVEL_UP[topic] ?? Y10_STRETCH_BY_QUESTION[core].map(key => [
    ...Y10_STRETCH_CHUNKS[key], Y10_SUBJUNCTIVE_MODELS[core]?.[key],
  ]);
  return `<aside class="y10-level-up" aria-labelledby="y10-level-up-title">
    <h3 id="y10-level-up-title">${spanishPractice ? '<span class="badge">Sube de nivel</span>' : '<img src="assets/level-up.svg" width="124" height="36" alt="Level Up" lang="en">'}</h3>
    <p lang="${gcseText('en','es')}">${gcseText('Build on a chunk or find a place for it in your answer.','Completa una expresión o añádela a tu respuesta.')}</p>
    <ul>${chunks.map(([french, english, cue, models]) => {
      const parts = french.split('…').map(part => {
        const words = part.trim();
        return /\p{L}/u.test(words)
          ? `<button type="button" class="vocab-key" data-insert-vocab="${esc(words)}" aria-controls="answer">${esc(words)}</button>`
          : esc(words);
      });
      return `<li><div class="y10-stretch-phrase">${parts.join('<span>…</span>')}</div>
        <small lang="en">${esc(english)}</small><p lang="${gcseText('en','es')}">${esc(cue)}</p>
        ${models ? `<div class="y10-subjunctive-models">${models.map(([model, gloss]) =>
          `<div><strong>${esc(model)}</strong><small lang="en">${esc(gloss)}</small></div>`).join('')}</div>` : ''}</li>`;
    }).join('')}</ul>
  </aside>`;
}

function yearTenSupport() {
  const {id, topic} = question();
  return SPANISH_IGCSE_VOCABULARY[id] ?? Y10_TOPIC_SUPPORT[topic] ?? Y10_WELLBEING_SUPPORT[topic] ?? Y10_SUPPORT[topic];
}

function yearTenConnectives() {
  return spanishPractice ? SPANISH_IGCSE_CONNECTIVES : Y10_CONNECTIVES;
}

function yearTenFiche() {
  const support = yearTenSupport();
  const pairs = rows => rows.map(([french, english]) =>
    `<li><button type="button" class="vocab-key" data-insert-vocab="${esc(french.replace(/…$/u, ''))}" aria-controls="answer">
      <strong>${esc(french)}</strong><small lang="en">${esc(english)}</small>
    </button></li>`).join('');
  const title = gcseText('Aide à l’écriture', 'Ayuda para escribir');
  return `<aside class="oral-fiche y10-fiche" aria-label="${title}">
    <h3>${title}</h3>
    <p class="y10-vocab-note">${gcseText('Clique sur un mot ou une expression pour l’ajouter à ta réponse.','Haz clic en una palabra o expresión para añadirla a tu respuesta.')}</p>
    <div class="y10-fiche-columns">
      ${support.map(([title, ...slots]) => `<section>
        <h4>${esc(title)}</h4>
        ${slots.map(([label, ...chunks]) => `<div class="y10-chunk-slot">
          <h5>${esc(label)}</h5><ul>${pairs(chunks)}</ul>
        </div>`).join('')}
      </section>`).join('')}
    </div>
    <section class="y10-connectives"><h4>${gcseText('Conjonctions et connecteurs','Conjunciones y conectores')}</h4><ul>${pairs(yearTenConnectives())}</ul></section>
  </aside>`;
}

function yearTenSiGuide() {
  return `<aside class="y10-si-guide" aria-labelledby="y10-si-title">
    <h3 id="y10-si-title">Si + imparfait → conditionnel</h3>
    <p lang="en">After <em>si</em>, use the <strong>imparfait</strong> for the imaginary situation. Use the <strong>conditionnel</strong> for what would happen.</p>
    <div class="y10-si-example">
      <strong>Si <mark class="y10-si-if">j’avais</mark> plus de temps, <mark class="y10-si-result">je ferais</mark> plus de sport.</strong>
      <small lang="en"><b>j’avais</b> (imparfait) imagines having more time. <b>je ferais</b> (conditionnel) says what I would do.</small>
    </div>
    <div class="y10-si-example">
      <strong>Si mes journées <mark class="y10-si-if">étaient</mark> moins chargées, <mark class="y10-si-result">je passerais</mark> plus de temps avec mes amis.</strong>
      <small lang="en"><b>étaient</b> (imparfait) imagines less busy days. <b>je passerais</b> (conditionnel) says how I would spend the time.</small>
    </div>
  </aside>`;
}
```

## `dist/y10-topic-support.js`

```javascript
const Y10_TOPIC_SUPPORT = {
  "local-area": [
    ["Décrire le quartier aujourd’hui",
      ["Où et comment ?",
        ["j’habite près de la mer","I live near the sea"],
        ["c’est un quartier calme","it’s a quiet neighbourhood"],
        ["il y a beaucoup de commerces","there are lots of shops"],
        ["les rues sont animées","the streets are lively"],
        ["je suis à dix minutes du centre","I’m ten minutes from the centre"],
      ],
    ],
    ["Comparer avec avant",
      ["À l’imparfait",
        ["il y avait moins de circulation","there was less traffic"],
        ["les magasins étaient plus petits","the shops were smaller"],
        ["je jouais dehors","I used to play outside"],
        ["on connaissait tous les voisins","we knew all the neighbours"],
        ["le quartier a beaucoup changé","the neighbourhood has changed a lot"],
      ],
    ],
  ],
  "local-pros-cons": [
    ["Présenter les avantages",
      ["Ce qui te plaît",
        ["il y a des espaces verts","there are green spaces"],
        ["les voisins sont accueillants","the neighbours are welcoming"],
        ["tout est à proximité","everything is nearby"],
        ["on peut aller à la plage","you can go to the beach"],
      ],
    ],
    ["Parler des inconvénients",
      ["Ce qui te gêne",
        ["il y a des embouteillages","there are traffic jams"],
        ["les logements sont chers","housing is expensive"],
        ["les bus sont peu fréquents","buses are infrequent"],
        ["il n’y a pas grand-chose à faire","there isn’t much to do"],
        ["c’est bruyant le soir","it’s noisy in the evening"],
      ],
    ],
  ],
  "local-changes": [
    ["Proposer un changement",
      ["Au conditionnel",
        ["je créerais plus d’espaces verts","I would create more green spaces"],
        ["j’ajouterais des pistes cyclables","I would add cycle lanes"],
        ["j’améliorerais les transports","I would improve public transport"],
        ["je construirais un centre sportif","I would build a sports centre"],
        ["je planterais des arbres","I would plant trees"],
      ],
    ],
    ["Expliquer pourquoi",
      ["Les effets possibles",
        ["pour réduire la circulation","to reduce traffic"],
        ["pour aider les jeunes à se déplacer","to help young people get around"],
        ["on pourrait faire plus de sport","people could do more sport"],
        ["ce serait plus agréable","it would be more pleasant"],
        ["il y aurait moins de pollution","there would be less pollution"],
      ],
    ],
  ],
  "town-or-country": [
    ["Choisir un lieu",
      ["Dire ta préférence",
        ["je préfère vivre à la campagne","I prefer living in the countryside"],
        ["je préfère vivre en ville","I prefer living in town"],
        ["j’aime être près de la nature","I like being close to nature"],
        ["j’aime l’ambiance des grandes villes","I like the atmosphere of big cities"],
      ],
    ],
    ["Comparer les deux",
      ["Les raisons",
        ["c’est plus tranquille","it’s quieter"],
        ["il y a plus de choses à faire","there’s more to do"],
        ["on peut se déplacer à pied","you can get around on foot"],
        ["on dépend plus de la voiture","you depend more on the car"],
        ["les magasins sont plus proches","the shops are closer"],
      ],
    ],
  ],
  "local-shops": [
    ["Décrire les commerces",
      ["Près de chez toi",
        ["il y a une boulangerie","there’s a bakery"],
        ["il y a un supermarché","there’s a supermarket"],
        ["il y a une pharmacie","there’s a pharmacy"],
        ["un magasin de vêtements","a clothes shop"],
        ["à deux pas de chez moi","a stone’s throw from my home"],
      ],
    ],
    ["Raconter un achat",
      ["Au passé composé",
        ["j’ai acheté un cadeau","I bought a present"],
        ["j’ai choisi des baskets","I chose some trainers"],
        ["j’ai pris du pain","I got some bread"],
        ["j’ai trouvé un pantalon en solde","I found a pair of trousers in the sale"],
        ["ça m’a coûté vingt dollars","it cost me twenty dollars"],
      ],
    ],
  ],
  "local-transport": [
    ["Décrire les trajets",
      ["Les moyens de transport",
        ["je prends le bus","I take the bus"],
        ["je vais à pied","I walk"],
        ["je me déplace à vélo","I get around by bike"],
        ["on peut prendre le ferry","you can take the ferry"],
        ["mes parents m’emmènent en voiture","my parents drive me"],
      ],
    ],
    ["Justifier ton choix",
      ["Temps et facilité",
        ["c’est rapide","it’s quick"],
        ["c’est moins cher","it’s cheaper"],
        ["l’arrêt est tout près","the stop is very close"],
        ["je n’ai pas besoin de me garer","I don’t need to park"],
        ["ça dépend de la distance","it depends on the distance"],
      ],
    ],
  ],
  "compare-transport": [
    ["Comparer la France et les Bermudes",
      ["Points de comparaison",
        ["en France","in France"],
        ["aux Bermudes","in Bermuda"],
        ["dans une grande ville","in a big city"],
        ["plus de correspondances","more connections"],
        ["des bus plus fréquents","more frequent buses"],
        ["moins de temps d’attente","less waiting time"],
      ],
    ],
    ["Nuancer ton avis",
      ["Comparaisons et exemples",
        ["ça dépend de la région","it depends on the area"],
        ["pour les petits trajets","for short journeys"],
        ["le ferry peut être pratique","the ferry can be convenient"],
        ["les horaires comptent beaucoup","timetables matter a lot"],
        ["aussi pratique que le bus","as convenient as the bus"],
      ],
    ],
  ],
  "future-home": [
    ["Imaginer ton futur logement",
      ["Où habiter ?",
        ["j’aimerais vivre près de la mer","I’d like to live near the sea"],
        ["je voudrais rester aux Bermudes","I’d like to stay in Bermuda"],
        ["je préférerais habiter à l’étranger","I’d prefer to live abroad"],
        ["dans une maison avec un jardin","in a house with a garden"],
        ["dans un appartement en ville","in a flat in town"],
      ],
    ],
    ["Donner tes raisons",
      ["Ce qui compte pour toi",
        ["pour être près de ma famille","to be close to my family"],
        ["pour découvrir une autre culture","to discover another culture"],
        ["pour avoir plus d’indépendance","to have more independence"],
        ["je pourrais me déplacer à pied","I could get around on foot"],
        ["j’aurais plus d’espace","I would have more space"],
      ],
    ],
  ],
  "environment-problem": [
    ["Nommer le problème",
      ["L’environnement",
        ["le changement climatique","climate change"],
        ["la pollution de l’air","air pollution"],
        ["la pollution des océans","ocean pollution"],
        ["les déchets en plastique","plastic waste"],
        ["la perte de biodiversité","loss of biodiversity"],
      ],
    ],
    ["Expliquer pourquoi",
      ["Les conséquences",
        ["ça menace les animaux","it threatens animals"],
        ["ça touche beaucoup de personnes","it affects lots of people"],
        ["ça abîme les plages","it damages beaches"],
        ["les températures augmentent","temperatures are rising"],
        ["on peut agir ensemble","we can take action together"],
      ],
    ],
  ],
  "environment-actions": [
    ["Décrire tes habitudes",
      ["Ce que tu fais",
        ["je trie mes déchets","I sort my rubbish"],
        ["je recycle le papier","I recycle paper"],
        ["je réutilise les sacs","I reuse bags"],
        ["j’utilise une gourde","I use a reusable water bottle"],
        ["je ramasse les déchets","I pick up litter"],
      ],
    ],
    ["Dire à quelle fréquence",
      ["Fréquence et raisons",
        ["presque tous les jours","almost every day"],
        ["chaque semaine","every week"],
        ["quand c’est possible","when possible"],
        ["pour utiliser moins de plastique","to use less plastic"],
        ["je pourrais faire plus d’efforts","I could make more effort"],
      ],
    ],
  ],

  "online-leisure": [
    ["Décrire ce que tu fais",
      ["Activités en ligne",
        ["je regarde des vidéos","I watch videos"],
        ["j’écoute des podcasts","I listen to podcasts"],
        ["je joue en ligne","I play online"],
        ["j’envoie des messages","I send messages"],
        ["je suis des tutoriels","I follow tutorials"],
      ],
    ],
    ["Ajouter des détails",
      ["Quand et pourquoi ?",
        ["après les cours","after lessons"],
        ["avec mes amis","with my friends"],
        ["pour me détendre","to relax"],
        ["pour apprendre quelque chose de nouveau","to learn something new"],
        ["j’y passe une demi-heure","I spend half an hour on it"],
      ],
    ],
  ],
  "social-media": [
    ["Parler des avantages",
      ["Ce qui est utile",
        ["rester en contact","to keep in touch"],
        ["partager des photos","to share photos"],
        ["découvrir de nouvelles idées","to discover new ideas"],
        ["trouver des conseils","to find advice"],
        ["suivre l’actualité","to follow the news"],
      ],
    ],
    ["Parler des inconvénients",
      ["Ce qui pose problème",
        ["perdre du temps","to waste time"],
        ["se comparer aux autres","to compare yourself with others"],
        ["les fausses informations","false information"],
        ["le cyberharcèlement","cyberbullying"],
        ["protéger sa vie privée","to protect your privacy"],
      ],
    ],
  ],
  "phone-time": [
    ["Donner ton avis",
      ["Le temps d’écran",
        ["à mon avis,","in my opinion,"],
        ["on passe trop de temps sur son portable","people spend too much time on their phones"],
        ["ça dépend de l’usage","it depends on how you use it"],
        ["les notifications nous distraient","notifications distract us"],
      ],
    ],
    ["Donner un exemple",
      ["Habitudes et solutions",
        ["on peut mettre le téléphone de côté","you can put your phone aside"],
        ["j’éteins mon téléphone pendant les repas","I switch off my phone during meals"],
        ["je limite mon temps d’écran","I limit my screen time"],
        ["le portable peut être utile pour réviser","a phone can be useful for revising"],
      ],
    ],
  ],
  "past-technology": [
    ["Raconter ce que tu as fait",
      ["Au passé composé",
        ["j’ai envoyé un message","I sent a message"],
        ["j’ai appelé un ami","I called a friend"],
        ["j’ai fait des recherches","I did some research"],
        ["j’ai téléchargé une appli","I downloaded an app"],
        ["j’ai joué en ligne","I played online"],
      ],
    ],
    ["Développer ton récit",
      ["Moment, outil et but",
        ["hier soir","last night"],
        ["le week-end dernier","last weekend"],
        ["sur mon ordinateur","on my computer"],
        ["pour préparer un devoir","to prepare an assignment"],
        ["pour organiser une sortie","to arrange an outing"],
      ],
    ],
  ],
  "day-without-phone": [
    ["Dire ce qui s’est passé",
      ["L’expérience",
        ["j’ai laissé mon téléphone à la maison","I left my phone at home"],
        ["je l’ai éteint toute la journée","I switched it off for the whole day"],
        ["j’ai lu un livre","I read a book"],
        ["je n’ai jamais essayé","I’ve never tried"],
      ],
    ],
    ["Expliquer ton ressenti",
      ["Avant et après",
        ["au début, c’était difficile","at first it was hard"],
        ["j’avais envie de regarder mes messages","I wanted to check my messages"],
        ["je me sentais plus calme","I felt calmer"],
        ["j’ai mieux dormi","I slept better"],
        ["j’aimerais essayer","I’d like to try"],
      ],
    ],
  ],
  "music": [
    ["Présenter tes goûts",
      ["Les genres",
        ["j’aime le rap","I like rap"],
        ["je préfère la pop","I prefer pop"],
        ["j’écoute du reggae","I listen to reggae"],
        ["j’adore le rock","I love rock"],
        ["j’écoute un peu de tout","I listen to a bit of everything"],
      ],
    ],
    ["Expliquer tes préférences",
      ["Le rythme et l’ambiance",
        ["j’aime les paroles","I like the lyrics"],
        ["le rythme me donne de l’énergie","the beat gives me energy"],
        ["ça me met de bonne humeur","it puts me in a good mood"],
        ["j’écoute de la musique pour me détendre","I listen to music to relax"],
      ],
    ],
  ],
  "recent-television": [
    ["Raconter ce que tu as regardé",
      ["Au passé composé",
        ["j’ai regardé une série","I watched a series"],
        ["j’ai vu un documentaire","I watched a documentary"],
        ["j’ai regardé un match","I watched a match"],
        ["j’ai vu un film d’aventure","I watched an adventure film"],
        ["j’ai suivi une émission de cuisine","I watched a cooking show"],
      ],
    ],
    ["Dire ce que tu en as pensé",
      ["Ton opinion",
        ["ça parlait de…","it was about…"],
        ["les personnages étaient attachants","the characters were likeable"],
        ["la fin m’a surpris","the ending surprised me"],
        ["la fin m’a surprise","the ending surprised me"],
        ["je le recommanderais","I would recommend it"],
      ],
    ],
  ],
  "week-without-phone": [
    ["Imaginer une semaine sans téléphone",
      ["Au conditionnel",
        ["je lirais plus souvent","I would read more often"],
        ["je ferais plus de sport","I would do more sport"],
        ["je verrais mes amis en personne","I would see my friends in person"],
        ["j’utiliserais mon ordinateur","I would use my computer"],
      ],
    ],
    ["Expliquer ce qui changerait",
      ["Les effets",
        ["mes messages me manqueraient","I would miss my messages"],
        ["je me concentrerais mieux","I would concentrate better"],
        ["j’aurais plus de temps libre","I would have more free time"],
        ["ce serait difficile au début","it would be difficult at first"],
      ],
    ],
  ],
  "student-app": [
    ["Présenter ton idée",
      ["Au conditionnel",
        ["je créerais une appli de révision","I would create a revision app"],
        ["j’ajouterais des quiz","I would add quizzes"],
        ["on pourrait écouter des exemples","you could listen to examples"],
        ["l’appli proposerait des jeux","the app would offer games"],
      ],
    ],
    ["Expliquer l’utilité",
      ["Pour les élèves",
        ["pour apprendre du vocabulaire","to learn vocabulary"],
        ["pour améliorer la prononciation","to improve pronunciation"],
        ["pour suivre ses progrès","to track your progress"],
        ["elle serait gratuite","it would be free"],
        ["elle fonctionnerait sans connexion","it would work offline"],
      ],
    ],
  ],

  "school-description": [
    ["Présenter le collège",
      ["Lieu et taille",
        ["mon collège se trouve à…","my school is located in…"],
        ["c’est un établissement assez grand","it’s quite a large school"],
        ["il y a beaucoup d’élèves","there are lots of pupils"],
        ["les bâtiments sont modernes","the buildings are modern"],
      ],
    ],
    ["Décrire les installations",
      ["Ce qu’on y trouve",
        ["une bibliothèque","a library"],
        ["une salle de sport","a gym"],
        ["des laboratoires de sciences","science labs"],
        ["une cour de récréation","a playground"],
        ["l’ambiance est accueillante","the atmosphere is welcoming"],
      ],
    ],
  ],
  "school-routine": [
    ["Décrire le début de la journée",
      ["Horaires et trajet",
        ["je me lève à six heures","I get up at six"],
        ["je prends le bus","I take the bus"],
        ["j’arrive au collège à huit heures","I arrive at school at eight"],
        ["les cours commencent à…","lessons start at…"],
      ],
    ],
    ["Décrire la suite",
      ["Pendant et après les cours",
        ["je mange avec mes amis","I eat with my friends"],
        ["j’ai deux cours l’après-midi","I have two lessons in the afternoon"],
        ["je fais du sport après les cours","I do sport after lessons"],
        ["je fais mes devoirs en rentrant","I do my homework when I get home"],
        ["le mercredi, je finis plus tôt","on Wednesdays, I finish earlier"],
      ],
    ],
  ],
  "school-subjects": [
    ["Nommer les matières",
      ["Ce que tu étudies",
        ["j’étudie le français","I study French"],
        ["je fais de l’histoire","I do history"],
        ["j’ai des cours de maths","I have maths lessons"],
        ["les sciences","science"],
        ["l’éducation physique","PE"],
      ],
    ],
    ["Donner ton avis",
      ["Les raisons",
        ["ma matière préférée, c’est…","my favourite subject is…"],
        ["j’aime résoudre des problèmes","I enjoy solving problems"],
        ["je trouve cette matière difficile","I find this subject difficult"],
        ["le cours est intéressant","the lesson is interesting"],
        ["ça me sera utile plus tard","it’ll be useful to me later"],
      ],
    ],
  ],
  "ideal-school": [
    ["Imaginer une école",
      ["Au conditionnel",
        ["les cours commenceraient plus tard","lessons would start later"],
        ["il y aurait moins de devoirs","there would be less homework"],
        ["les élèves choisiraient plus de matières","pupils would choose more subjects"],
        ["on ferait plus d’activités pratiques","we’d do more practical activities"],
      ],
    ],
    ["Décrire ce qui changerait",
      ["Les avantages",
        ["des salles de classe lumineuses","bright classrooms"],
        ["une pause déjeuner plus longue","a longer lunch break"],
        ["on pourrait apprendre à son rythme","you could learn at your own pace"],
        ["on aurait plus de temps pour poser des questions","we’d have more time to ask questions"],
      ],
    ],
  ],
  "education-value": [
    ["Donner ton avis",
      ["Pourquoi l’éducation compte",
        ["l’éducation est importante pour moi","education matters to me"],
        ["ça ouvre des portes","it opens doors"],
        ["on apprend à réfléchir","we learn to think"],
        ["on découvre de nouvelles idées","we discover new ideas"],
      ],
    ],
    ["Développer ta réponse",
      ["Exemples et nuances",
        ["trouver un métier qui me plaît","to find a job I like"],
        ["apprendre à travailler en équipe","to learn to work in a team"],
        ["on apprend aussi en dehors de l’école","we also learn outside school"],
        ["les notes ne disent pas tout","grades don’t tell the whole story"],
      ],
    ],
  ],
  "school-rules": [
    ["Présenter des règles",
      ["Obligations et interdictions",
        ["il faut arriver à l’heure","you have to arrive on time"],
        ["on doit porter l’uniforme","you have to wear uniform"],
        ["il est interdit de courir dans les couloirs","running in the corridors is forbidden"],
        ["on n’a pas le droit d’utiliser son portable en classe","you’re not allowed to use your phone in class"],
      ],
    ],
    ["Dire ce que tu en penses",
      ["Justifier ou changer une règle",
        ["cette règle est raisonnable","that rule is reasonable"],
        ["ça évite les distractions","it prevents distractions"],
        ["certaines règles sont trop strictes","some rules are too strict"],
        ["j’autoriserais les portables à la pause","I would allow phones at break"],
      ],
    ],
  ],
  "describe-uniform": [
    ["Décrire ce que tu portes",
      ["Vêtements et couleurs",
        ["je porte une chemise blanche","I wear a white shirt"],
        ["un pantalon gris","grey trousers"],
        ["une jupe bleue","a blue skirt"],
        ["une cravate","a tie"],
        ["des chaussures noires","black shoes"],
      ],
    ],
    ["Imaginer un uniforme idéal",
      ["Au conditionnel",
        ["je porterais des baskets","I would wear trainers"],
        ["je choisirais un polo","I would choose a polo shirt"],
        ["mon uniforme serait plus confortable","my uniform would be more comfortable"],
        ["on pourrait choisir la couleur","we could choose the colour"],
      ],
    ],
  ],
  "uniform-pros-cons": [
    ["Expliquer les avantages",
      ["Ce qui aide",
        ["on gagne du temps le matin","we save time in the morning"],
        ["tout le monde est habillé de la même façon","everyone is dressed the same way"],
        ["on se sent membre du collège","you feel part of the school"],
        ["il y a moins de pression pour suivre la mode","there’s less pressure to follow fashion"],
      ],
    ],
    ["Expliquer les inconvénients",
      ["Ce qui gêne",
        ["il peut coûter cher","it can be expensive"],
        ["ce n’est pas toujours confortable","it isn’t always comfortable"],
        ["on a moins de choix","we have less choice"],
        ["il peut faire trop chaud","it can be too hot"],
      ],
    ],
  ],
  "school-plans": [
    ["Parler de demain",
      ["Futur proche",
        ["je vais réviser pour un contrôle","I’m going to revise for a test"],
        ["on va faire une expérience","we’re going to do an experiment"],
        ["je vais retrouver mes amis à la pause","I’m going to meet my friends at break"],
        ["je vais rendre mon devoir","I’m going to hand in my assignment"],
      ],
    ],
    ["Parler de l’après-examens",
      ["Les projets",
        ["je vais participer à une sortie scolaire","I’m going to go on a school trip"],
        ["je vais faire un stage","I’m going to do work experience"],
        ["j’aimerais me reposer","I’d like to rest"],
        ["je vais fêter la fin des examens","I’m going to celebrate the end of the exams"],
      ],
    ],
  ],
  "further-study": [
    ["Parler de tes projets",
      ["Études et formations",
        ["je voudrais étudier le droit","I’d like to study law"],
        ["j’aimerais faire des études de médecine","I’d like to study medicine"],
        ["je veux étudier les langues","I want to study languages"],
        ["j’aimerais faire une formation professionnelle","I’d like to do vocational training"],
        ["je n’ai pas encore décidé","I haven’t decided yet"],
      ],
    ],
    ["Expliquer ton choix",
      ["Intérêts et métier",
        ["cette matière me passionne","I’m passionate about this subject"],
        ["je voudrais travailler avec des enfants","I’d like to work with children"],
        ["j’aime aider les autres","I enjoy helping people"],
        ["j’aimerais acquérir de l’expérience","I’d like to gain experience"],
        ["ça m’aiderait à trouver un métier qui me plaît","it would help me find a job I like"],
      ],
    ],
  ],

  "active-or-relaxing": [
    ["Exprimer ta préférence",
      ["Activités et détente",
        ["je préfère les vacances actives","I prefer active holidays"],
        ["j’aime les vacances tranquilles","I like quiet holidays"],
        ["je fais de la randonnée","I go hiking"],
        ["je visite des endroits nouveaux","I visit new places"],
        ["je me repose au bord de la mer","I relax by the sea"],
      ],
    ],
    ["Justifier ta préférence",
      ["Les raisons",
        ["j’aime bouger","I like being active"],
        ["ça me permet de décompresser","it lets me unwind"],
        ["j’aime avoir un peu de temps pour moi","I like having some time to myself"],
        ["ça dépend de mon humeur","it depends on my mood"],
      ],
    ],
  ],
  "ideal-holiday": [
    ["Imaginer une destination",
      ["Au conditionnel",
        ["je passerais mes vacances au Canada","I would spend my holiday in Canada"],
        ["j’irais au Japon","I would go to Japan"],
        ["je ferais le tour du monde","I would travel around the world"],
        ["je logerais près de la plage","I would stay near the beach"],
      ],
    ],
    ["Décrire le séjour idéal",
      ["Activités et personnes",
        ["je voyagerais avec mes amis","I would travel with my friends"],
        ["je goûterais aux spécialités locales","I would try the local specialities"],
        ["je visiterais des musées","I would visit museums"],
        ["je resterais deux semaines","I would stay for two weeks"],
      ],
    ],
  ],
  "accommodation": [
    ["Comparer deux logements",
      ["Hôtel et camping",
        ["je préfère loger à l’hôtel","I prefer staying in a hotel"],
        ["je préfère faire du camping","I prefer camping"],
        ["dormir sous la tente","to sleep in a tent"],
        ["avoir une chambre confortable","to have a comfortable room"],
      ],
    ],
    ["Donner les raisons",
      ["Confort et coût",
        ["c’est plus économique","it’s cheaper"],
        ["on est plus près de la nature","you’re closer to nature"],
        ["on a plus de confort","you have more comfort"],
        ["on peut cuisiner soi-même","you can cook for yourself"],
        ["ça dépend de la météo","it depends on the weather"],
      ],
    ],
  ],
  "travel-abroad": [
    ["Parler des avantages",
      ["Culture et découvertes",
        ["découvrir une autre culture","to discover another culture"],
        ["pratiquer une langue étrangère","to practise a foreign language"],
        ["goûter de nouveaux plats","to try new dishes"],
        ["rencontrer de nouvelles personnes","to meet new people"],
      ],
    ],
    ["Développer ton avis",
      ["Ce que le voyage t’apporte",
        ["mieux comprendre les autres","to understand others better"],
        ["devenir plus indépendant","to become more independent"],
        ["devenir plus indépendante","to become more independent"],
        ["sortir de sa zone de confort","to step out of your comfort zone"],
        ["voir les choses autrement","to see things differently"],
      ],
    ],
  ],
  "last-holiday": [
    ["Raconter tes dernières vacances",
      ["Au passé composé",
        ["j’ai passé une semaine à…","I spent a week in…"],
        ["je suis allé à l’étranger","I went abroad"],
        ["je suis allée à l’étranger","I went abroad"],
        ["j’ai visité un musée","I visited a museum"],
        ["j’ai pris beaucoup de photos","I took lots of photos"],
        ["on s’est baignés","we went swimming"],
      ],
    ],
    ["Dire avec qui et donner ton avis",
      ["Compagnie et impressions",
        ["avec ma famille","with my family"],
        ["avec mes cousins","with my cousins"],
        ["avec une amie","with a friend"],
        ["je me suis bien amusé","I had a good time"],
        ["je me suis bien amusée","I had a good time"],
      ],
    ],
  ],
  "holiday-weather": [
    ["Décrire le temps",
      ["À l’imparfait",
        ["il faisait beau","the weather was nice"],
        ["il faisait très chaud","it was very hot"],
        ["il pleuvait souvent","it often rained"],
        ["il y avait du vent","it was windy"],
        ["le ciel était couvert","it was cloudy"],
      ],
    ],
    ["Dire ce que tu as fait",
      ["La météo et les activités",
        ["on a passé la journée à la plage","we spent the day at the beach"],
        ["on est restés à l’intérieur","we stayed indoors"],
        ["on a changé nos plans","we changed our plans"],
        ["le temps s’est amélioré","the weather improved"],
        ["on a quand même profité du séjour","we still made the most of the trip"],
      ],
    ],
  ],
  "visit-france": [
    ["Dire si tu voudrais y aller",
      ["Où et pourquoi ?",
        ["j’aimerais visiter Paris","I’d like to visit Paris"],
        ["je voudrais découvrir le sud de la France","I’d like to explore southern France"],
        ["je préférerais visiter un autre pays","I’d prefer to visit another country"],
        ["pour parler français","to speak French"],
      ],
    ],
    ["Ajouter des détails",
      ["Ce que tu ferais",
        ["je goûterais aux spécialités régionales","I would try the regional specialities"],
        ["je visiterais un château","I would visit a castle"],
        ["je ferais une randonnée dans les Alpes","I would go hiking in the Alps"],
        ["les grandes villes m’attirent moins","I’m less drawn to big cities"],
      ],
    ],
  ],
  "next-holiday": [
    ["Présenter tes projets",
      ["Futur proche",
        ["je vais passer les vacances aux Bermudes","I’m going to spend the holidays in Bermuda"],
        ["je vais aller en France","I’m going to go to France"],
        ["nous allons rendre visite à ma famille","we’re going to visit my family"],
        ["je vais rester chez moi","I’m going to stay at home"],
      ],
    ],
    ["Développer tes projets",
      ["Durée et activités",
        ["pendant une semaine","for a week"],
        ["au début de l’été","at the start of summer"],
        ["on va découvrir la région","we’re going to explore the area"],
        ["j’ai hâte de partir","I can’t wait to go"],
        ["je ne sais pas encore","I don’t know yet"],
      ],
    ],
  ],
  "travel-transport": [
    ["Présenter ton choix",
      ["Moyens de transport",
        ["je préfère prendre le train","I prefer taking the train"],
        ["j’aime voyager en avion","I like travelling by plane"],
        ["je préfère voyager en voiture","I prefer travelling by car"],
        ["j’aime prendre le ferry","I like taking the ferry"],
      ],
    ],
    ["Expliquer ta préférence",
      ["Comparer les trajets",
        ["le trajet est plus rapide","the journey is quicker"],
        ["je peux admirer le paysage","I can enjoy the scenery"],
        ["je peux m’arrêter quand je veux","I can stop whenever I want"],
        ["il y a moins d’attente","there’s less waiting"],
        ["ça dépend du prix du billet","it depends on the ticket price"],
      ],
    ],
  ],
  "sustainable-tourism": [
    ["Proposer des gestes",
      ["Réduire les déchets",
        ["utiliser une gourde","to use a reusable water bottle"],
        ["éviter les emballages jetables","to avoid disposable packaging"],
        ["ramasser ses déchets","to pick up your rubbish"],
        ["respecter les animaux","to respect wildlife"],
      ],
    ],
    ["Proposer d’autres choix",
      ["Transports et lieux",
        ["se déplacer à pied ou à vélo","to get around on foot or by bike"],
        ["prendre les transports en commun","to use public transport"],
        ["rester sur les sentiers","to stay on the paths"],
        ["soutenir les commerces locaux","to support local businesses"],
      ],
    ],
  ],
};

const Y10_TOPIC_LEVEL_UP = {
  "local-area": [
    ["Autrefois, il y avait…, alors qu’aujourd’hui…", "There used to be…, whereas nowadays…", "Contrast a detail in the imperfect with a detail about now."],
    ["Ce qui a le plus changé, c’est…", "What’s changed the most is…", "Pick a specific change in your neighbourhood."],
  ],
  "local-pros-cons": [
    ["D’un côté…, mais de l’autre…", "On the one hand…, but on the other…", "Give one advantage and one drawback."],
    ["Bien que mon quartier soit…, il…", "Although my neighbourhood is…, it…", "Keep « soit », the subjunctive of « être », and add a contrast.", [
      ["soit un peu bruyant","is a bit noisy"],
      ["soit assez isolé","is quite isolated"],
    ]],
  ],
  "local-changes": [
    ["Si j’en avais la possibilité, je…", "If I had the chance, I would…", "Say what you would change using the conditional."],
    ["Cela permettrait aux habitants de…", "That would allow residents to…", "Follow « de » with an infinitive."],
  ],
  "town-or-country": [
    ["Ce qui me plaît à la campagne, c’est…", "What I like about the countryside is…", "Name something you enjoy, or add an infinitive."],
    ["Si je devais choisir, je…", "If I had to choose, I would…", "Give your preference using the conditional."],
  ],
  "local-shops": [
    ["Le magasin où j’ai acheté…, c’est…", "The shop where I bought… is…", "Use « où » to link the shop to your purchase."],
    ["J’y suis allé(e) pour…", "I went there to…", "« Y » replaces the place. Follow « pour » with an infinitive."],
  ],
  "local-transport": [
    ["Pour me rendre à…, je…", "To get to…, I…", "Give a destination and say how you get there."],
    ["Le trajet est moins long quand…", "The journey is shorter when…", "Explain when the journey is quicker."],
  ],
  "compare-transport": [
    ["Il me semble que…", "It seems to me that…", "Give your view and name the places you’re comparing."],
    ["Même si… est plus fréquent, …", "Even if… is more frequent, …", "Compare one feature, then give a detail that complicates the comparison."],
  ],
  "future-home": [
    ["Ce qui compte le plus pour moi, c’est de…", "What matters most to me is to…", "Follow « de » with an infinitive."],
    ["Si je vivais…, je pourrais…", "If I lived…, I could…", "Name a place and follow « je pourrais » with an infinitive."],
  ],
  "environment-problem": [
    ["Ce qui m’inquiète le plus, c’est…", "What worries me most is…", "Name the problem and give a specific reason."],
    ["Si on ne fait rien, …", "If we do nothing, …", "Say what you think will happen using the future."],
  ],
  "environment-actions": [
    ["En utilisant…, je peux…", "By using…, I can…", "Use an infinitive after « je peux » to say what your habit changes."],
    ["J’essaie de… chaque fois que je peux.", "I try to… whenever I can.", "Add an infinitive for one habit you have."],
  ],

  "online-leisure": [
    ["Ce que je fais le plus souvent en ligne, c’est…", "What I do most often online is…", "Follow with an infinitive and add a reason."],
    ["Quand j’ai un moment de libre, j’en profite pour…", "When I have a free moment, I use it to…", "Follow « pour » with an infinitive."],
  ],
  "social-media": [
    ["Les réseaux sociaux permettent de…, mais ils peuvent aussi…", "Social media lets us…, but it can also…", "Use an infinitive in each gap to contrast the effects."],
    ["Il faut que…", "We need to…", "Add a suggestion with the subjunctive.", [
      ["l’on vérifie les informations","we check information"],
      ["chacun protège ses données","everyone protects their data"],
    ]],
  ],
  "phone-time": [
    ["Plus on passe de temps sur son téléphone, moins on…", "The more time we spend on our phones, the less we…", "Describe one effect in the present."],
    ["Si les jeunes limitaient leur temps d’écran, ils pourraient…", "If young people limited their screen time, they could…", "Follow « pourraient » with an infinitive."],
  ],
  "past-technology": [
    ["Après avoir…, j’ai…", "After having…, I…", "Add a past participle, then say what you did next."],
    ["Je me suis servi(e) de… pour…", "I used… to…", "Name the device or tool and use an infinitive for the purpose."],
  ],
  "day-without-phone": [
    ["Au début, je pensais que…, mais finalement…", "At first I thought…, but in the end…", "Contrast an expectation with the outcome."],
    ["Si j’essayais à nouveau, je…", "If I tried again, I would…", "Say what you would do using the conditional."],
  ],
  "music": [
    ["Le genre que j’écoute le plus, c’est…", "The genre I listen to most is…", "Use « que » to link the genre to « j’écoute »."],
    ["Ce qui me plaît dans cette musique, c’est…", "What I like about this music is…", "Explain what stands out to you."],
  ],
  "recent-television": [
    ["Même si j’ai trouvé le début…, …", "Even though I found the start…, …", "Give a first impression and add a contrast."],
    ["Ce qui m’a le plus marqué(e), c’est…", "What stayed with me most was…", "Give one detail about the programme and explain why."],
  ],
  "week-without-phone": [
    ["Au lieu de passer du temps sur mon téléphone, je…", "Instead of spending time on my phone, I would…", "Use the conditional to say what you’d do."],
    ["Sans mon portable, j’aurais plus de temps pour…", "Without my phone, I’d have more time to…", "Add an infinitive for an activity."],
  ],
  "student-app": [
    ["Mon appli permettrait aux élèves de…", "My app would allow pupils to…", "Follow « de » with an infinitive."],
    ["Il faudrait que l’appli…", "The app would need to…", "Use the subjunctive to suggest a feature.", [
      ["soit facile à utiliser","be easy to use"],
      ["puisse fonctionner hors ligne","be able to work offline"],
    ]],
  ],

  "school-description": [
    ["Ce qui distingue mon collège, c’est…", "What makes my school stand out is…", "Pick one feature and say why it matters."],
    ["Il y a une salle où on peut…", "There’s a room where we can…", "Use « où » to say what you can do there."],
  ],
  "school-routine": [
    ["Avant de…, je…", "Before…, I…", "Follow « de » with an infinitive, then say what you do first."],
    ["Une fois que je suis rentré(e), je…", "Once I’m back home, I…", "Say what you do when you get home."],
  ],
  "school-subjects": [
    ["La matière que je préfère, c’est…", "The subject I prefer is…", "Name a subject and give a specific reason."],
    ["Bien que… soit parfois difficile, …", "Although… is sometimes difficult, …", "Keep « soit », the subjunctive of « être », and explain a benefit.", [
      ["soit parfois difficile","is sometimes difficult"],
      ["soit assez exigeant(e)","is quite demanding"],
    ]],
  ],
  "ideal-school": [
    ["Si je pouvais créer mon école idéale, je…", "If I could create my ideal school, I would…", "Say what you would change using the conditional."],
    ["Il faudrait que les élèves…", "Pupils would need to…", "Use the subjunctive to describe your ideal school.", [
      ["puissent choisir leurs matières","be able to choose their subjects"],
      ["aient plus de temps pour déjeuner","have more time for lunch"],
    ]],
  ],
  "education-value": [
    ["Grâce à l’école, j’ai appris à…", "Thanks to school, I’ve learnt to…", "Follow « à » with an infinitive and give an example."],
    ["Il est essentiel que…", "It’s essential that…", "Use the subjunctive to say what every pupil should be able to do.", [
      ["chacun puisse apprendre","everyone can learn"],
      ["tous les élèves aient les mêmes chances","all pupils have the same opportunities"],
    ]],
  ],
  "school-rules": [
    ["Il est interdit de…, ce qui…", "It’s forbidden to…, which…", "Follow « de » with an infinitive and explain the effect."],
    ["Si je pouvais modifier le règlement, je…", "If I could change the rules, I would…", "Use the conditional to suggest one change."],
  ],
  "describe-uniform": [
    ["Au lieu de porter…, je préférerais…", "Instead of wearing…, I’d prefer…", "Compare a current item with your ideal choice."],
    ["Ce que je changerais en premier, c’est…", "The first thing I’d change is…", "Choose one part of the uniform and justify your choice."],
  ],
  "uniform-pros-cons": [
    ["D’un côté, l’uniforme permet de…, de l’autre…", "On one hand, uniform helps us…, on the other…", "Follow « de » with an infinitive and add a drawback."],
    ["Même si l’uniforme coûte parfois cher, …", "Even though uniform is sometimes expensive, …", "Give a reason someone might support it."],
  ],
  "school-plans": [
    ["Une fois les examens terminés, je vais…", "Once the exams are over, I’m going to…", "Use the near future to describe a plan."],
    ["J’en profiterai pour…", "I’ll take the opportunity to…", "Follow « pour » with an infinitive."],
  ],
  "further-study": [
    ["Ce qui m’attire dans ce domaine, c’est…", "What draws me to this field is…", "Explain what interests you about it."],
    ["Si j’en avais l’occasion, j’aimerais…", "If I had the opportunity, I’d like to…", "Add an infinitive to describe your next step."],
  ],

  "active-or-relaxing": [
    ["Ce que je recherche en vacances, c’est…", "What I look for on holiday is…", "Name what matters to you and give an example."],
    ["Après avoir passé la journée à…, j’aime…", "After spending the day…, I like to…", "Follow « à » with an infinitive, then explain how you unwind."],
  ],
  "ideal-holiday": [
    ["Si je gagnais le loto, je…", "If I won the lottery, I would…", "Keep the imperfect after « si » and use the conditional for the result."],
    ["Ce qui rendrait ce séjour inoubliable, ce serait…", "What would make this trip unforgettable would be…", "Describe one special detail."],
  ],
  "accommodation": [
    ["Si je partais avec des amis, je choisirais…", "If I went away with friends, I would choose…", "Give a choice of accommodation and a reason."],
    ["Même si le camping est moins cher, …", "Even though camping is cheaper, …", "Explain why someone might choose something else."],
  ],
  "travel-abroad": [
    ["En voyageant à l’étranger, on apprend à…", "By travelling abroad, you learn to…", "Follow « à » with an infinitive and give an example."],
    ["Voyager permet non seulement de…, mais aussi de…", "Travelling allows you both to… and to…", "Use an infinitive in each gap to give two benefits."],
  ],
  "last-holiday": [
    ["Pendant que j’étais à…, j’ai…", "While I was in…, I…", "Use the imperfect for the setting and the perfect tense for the activity."],
    ["Le meilleur souvenir que je garde, c’est…", "My best memory is…", "Describe one moment and say who was there."],
  ],
  "holiday-weather": [
    ["Comme il faisait…, on a décidé de…", "As the weather was…, we decided to…", "Use the imperfect for the weather and add an infinitive for the activity."],
    ["Même s’il pleuvait, on a quand même…", "Even though it was raining, we still…", "Add a past participle to say what you did despite the rain."],
  ],
  "visit-france": [
    ["Si j’allais en France, je pourrais…", "If I went to France, I could…", "Follow « je pourrais » with an infinitive."],
    ["Ce que j’aimerais surtout découvrir, c’est…", "What I’d especially like to discover is…", "Name a place, a tradition or a kind of food."],
  ],
  "next-holiday": [
    ["Une fois arrivé(e), je vais…", "Once I get there, I’m going to…", "Follow « je vais » with an infinitive."],
    ["J’en profiterai pour…", "I’ll take the opportunity to…", "Say what you’ll make time for using an infinitive."],
  ],
  "travel-transport": [
    ["Le moyen de transport qui me convient le mieux, c’est…", "The way of travelling that suits me best is…", "Name your preferred transport and explain why."],
    ["Si le trajet était plus court, je préférerais…", "If the journey were shorter, I’d prefer…", "Explain how the length of the journey affects your choice."],
  ],
  "sustainable-tourism": [
    ["Au lieu de…, les touristes pourraient…", "Instead of…, tourists could…", "Use an infinitive in each gap to suggest a change."],
    ["Il faudrait que les touristes…", "Tourists would need to…", "Use the subjunctive to give a practical suggestion.", [
      ["fassent attention à leurs déchets","pay attention to their rubbish"],
      ["soient attentifs aux règles locales","pay attention to local rules"],
    ]],
  ],
};
```

## `dist/y10-wellbeing-support.js`

```javascript
const Y10_WELLBEING_SUPPORT = {
  hobbies: [
    ['Dire ce que tu fais',
      ['Pour commencer', ['Pendant mon temps libre,', 'In my free time,'], ['D’habitude,', 'Usually,'], ['Quand j’ai du temps libre,', 'When I have some free time,']],
      ['Activités', ['je joue au foot', 'I play football'], ['je fais du vélo', 'I cycle'], ['je fais de la danse', 'I dance'], ['je dessine', 'I draw'], ['je lis des romans', 'I read novels'], ['j’écoute de la musique', 'I listen to music'], ['je joue aux jeux vidéo', 'I play video games']]],
    ['Développer ta réponse',
      ['Fréquence', ['le week-end', 'at weekends'], ['après les cours', 'after school'], ['une fois par semaine', 'once a week']],
      ['Avec qui ?', ['avec mes amis', 'with my friends'], ['en famille', 'with my family'], ['tout seul', 'on my own'], ['toute seule', 'on my own']],
      ['Pourquoi ?', ['ça me détend', 'it helps me relax'], ['ça me change les idées', 'it takes my mind off things'], ['je peux être créatif', 'I can be creative'], ['je peux être créative', 'I can be creative'], ['ça me donne de l’énergie', 'it gives me energy']]],
  ],
  'childhood-hobbies': [
    ['Parler d’avant',
      ['À quel moment ?', ['Quand j’étais plus jeune,', 'When I was younger,'], ['À l’école primaire,', 'At primary school,'], ['À l’époque,', 'Back then,']],
      ['À l’imparfait', ['je jouais souvent dehors', 'I often played outside'], ['je lisais des bandes dessinées', 'I used to read comics'], ['je faisais de la natation', 'I used to swim'], ['j’aimais dessiner', 'I used to enjoy drawing'], ['je ne faisais pas beaucoup de sport', 'I didn’t do much sport']]],
    ['Comparer avec aujourd’hui',
      ['Pour faire le lien', ['Aujourd’hui,', 'Nowadays,'], ['Par contre,', 'On the other hand,'], ['mes goûts ont changé', 'my tastes have changed'], ['j’aime toujours', 'I still like']],
      ['Maintenant', ['je fais du théâtre', 'I do drama'], ['je préfère lire', 'I prefer reading'], ['je fais plus de sport', 'I do more sport'], ['je joue moins souvent', 'I play less often']],
      ['Ce qui a changé', ['j’ai découvert un nouveau loisir', 'I discovered a new hobby'], ['j’ai moins de temps libre', 'I have less free time'], ['mes amis m’ont donné envie d’essayer', 'my friends made me want to try']]],
  ],
  'next-weekend': [
    ['Présenter les projets',
      ['Quand ?', ['samedi matin', 'on Saturday morning'], ['dimanche après-midi', 'on Sunday afternoon'], ['s’il fait beau', 'if the weather is nice'], ['s’il pleut', 'if it rains']],
      ['Futur proche', ['je vais retrouver mes amis', 'I’m going to meet my friends'], ['on va aller à la plage', 'we’re going to go to the beach'], ['on va jouer au basket', 'we’re going to play basketball'], ['nous allons voir un film', 'we’re going to see a film'], ['on va préparer un pique-nique', 'we’re going to prepare a picnic']]],
    ['Donner plus de détails',
      ['Pour organiser la réponse', ['D’abord,', 'First,'], ['Ensuite,', 'Then,'], ['Pour finir,', 'To finish,']],
      ['Où ?', ['chez un copain', 'at a friend’s house'], ['chez une copine', 'at a friend’s house'], ['au cinéma', 'at the cinema'], ['en ville', 'in town']],
      ['Comment tu te sens', ['j’ai hâte de les voir', 'I can’t wait to see them'], ['ça va être sympa', 'it’s going to be fun'], ['on pourra se détendre', 'we’ll be able to relax']]],
  ],
  'ideal-day': [
    ['Imaginer la journée',
      ['Pour commencer', ['Si j’avais le choix,', 'If I had the choice,'], ['Dans l’idéal,', 'Ideally,'], ['ma journée idéale commencerait', 'my ideal day would start']],
      ['Le matin', ['je me lèverais tard', 'I would get up late'], ['je prendrais un bon petit déjeuner', 'I would have a good breakfast'], ['je ferais une promenade', 'I would go for a walk']],
      ['Plus tard', ['je retrouverais mes amis', 'I would meet my friends'], ['je passerais l’après-midi à la plage', 'I would spend the afternoon at the beach'], ['je regarderais un film', 'I would watch a film'], ['je dînerais avec ma famille', 'I would have dinner with my family']]],
    ['Expliquer tes choix',
      ['Ce qui compte', ['sans me presser', 'without rushing'], ['loin de mon téléphone', 'away from my phone'], ['je prendrais le temps de me détendre', 'I would take time to relax']],
      ['Pourquoi ?', ['ça me ferait du bien', 'it would do me good'], ['j’aurais moins de stress', 'I would feel less stressed'], ['je profiterais de la journée', 'I would make the most of the day']]],
  ],
  'last-weekend': [
    ['Raconter les activités',
      ['Pour situer', ['samedi dernier', 'last Saturday'], ['dimanche matin', 'on Sunday morning'], ['le soir', 'in the evening']],
      ['Au passé composé', ['j’ai joué au tennis', 'I played tennis'], ['j’ai fait mes devoirs', 'I did my homework'], ['j’ai regardé une série', 'I watched a series'], ['on a mangé ensemble', 'we ate together'], ['je suis allé à la plage', 'I went to the beach'], ['je suis allée à la plage', 'I went to the beach'], ['je suis resté chez moi', 'I stayed at home'], ['je suis restée chez moi', 'I stayed at home']]],
    ['Dire si ça t’a plu',
      ['Pour décrire', ['il faisait beau', 'the weather was nice'], ['il pleuvait', 'it was raining'], ['c’était génial', 'it was great'], ['c’était un peu ennuyeux', 'it was a bit boring']],
      ['Donner ton avis', ['je me suis bien amusé', 'I had a good time'], ['je me suis bien amusée', 'I had a good time'], ['j’ai passé un bon moment', 'I had a good time'], ['j’étais de bonne humeur', 'I was in a good mood'], ['j’aurais préféré sortir', 'I would have preferred to go out']]],
  ],
  'ideal-routine': [
    ['Décrire ta routine',
      ['Organiser la journée', ['le matin', 'in the morning'], ['avant les cours', 'before lessons'], ['après l’école', 'after school'], ['avant de me coucher', 'before going to bed']],
      ['Le matin', ['je me réveillerais à sept heures', 'I would wake up at seven'], ['je me préparerais sans me presser', 'I would get ready without rushing'], ['je prendrais le temps de manger', 'I would take time to eat']],
      ['Plus tard', ['je ferais mes devoirs en rentrant', 'I would do my homework when I got home'], ['je ferais un peu d’exercice', 'I would do some exercise'], ['je limiterais le temps passé sur mon téléphone', 'I would limit the time I spend on my phone'], ['je me coucherais tôt', 'I would go to bed early']]],
    ['Parler de l’équilibre',
      ['Ce qui aiderait', ['j’aurais des horaires réguliers', 'I would have a regular schedule'], ['je dormirais assez', 'I would get enough sleep'], ['je ferais des pauses', 'I would take breaks']],
      ['L’effet', ['je me sentirais mieux', 'I would feel better'], ['je serais plus calme', 'I would be calmer'], ['j’aurais plus d’énergie', 'I would have more energy']]],
  ],
  'wake-up': [
    ['Dire ce que tu préfères',
      ['Ton choix', ['je préfère me réveiller tôt', 'I prefer to wake up early'], ['je préfère me réveiller plus tard', 'I prefer to wake up later'], ['je suis plutôt du matin', 'I’m more of a morning person'], ['j’aime faire la grasse matinée', 'I like to have a lie-in']],
      ['Faire la différence', ['en semaine', 'on weekdays'], ['pendant les vacances', 'during the holidays'], ['ça dépend du jour', 'it depends on the day']]],
    ['Expliquer pourquoi',
      ['Les avantages', ['j’ai le temps de me préparer', 'I have time to get ready'], ['je profite du calme', 'I enjoy the peace and quiet'], ['je peux dormir plus longtemps', 'I can sleep for longer'], ['je me sens moins fatigué', 'I feel less tired'], ['je me sens moins fatiguée', 'I feel less tired']],
      ['L’autre côté', ['j’ai du mal à sortir du lit', 'I find it hard to get out of bed'], ['je me couche assez tard', 'I go to bed quite late'], ['il me faut du temps pour me réveiller', 'I need time to wake up']]],
  ],
  'body-confidence': [
    ['Expliquer ce que ça veut dire',
      ['Pour commencer', ['se sentir bien dans sa peau', 'to feel comfortable in your own skin'], ['avoir confiance en soi', 'to have self-confidence'], ['s’accepter comme on est', 'to accept yourself as you are']],
      ['Parler de soi', ['je me sens à l’aise', 'I feel comfortable'], ['je peux être moi-même', 'I can be myself'], ['j’ose essayer de nouvelles choses', 'I dare to try new things']]],
    ['Expliquer pourquoi c’est important',
      ['Les défis', ['la pression des réseaux sociaux', 'pressure from social media'], ['se comparer aux autres', 'to compare yourself with others'], ['avoir peur du regard des autres', 'to worry what others think']],
      ['Ce qui aide', ['parler à quelqu’un de confiance', 'to talk to someone you trust'], ['passer du temps avec des amis', 'to spend time with friends'], ['prendre du temps pour soi', 'to take time for yourself'], ['se rappeler ses qualités', 'to remember your strengths']]],
  ],
  'balanced-diet': [
    ['Dire pourquoi bien manger compte',
      ['Pour commencer', ['une alimentation équilibrée', 'a balanced diet'], ['manger de tout', 'to eat a variety of foods'], ['avoir de bonnes habitudes', 'to have good habits']],
      ['Les raisons', ['avoir assez d’énergie', 'to have enough energy'], ['mieux me concentrer en classe', 'to concentrate better in class'], ['rester en bonne santé', 'to stay healthy'], ['éviter d’avoir faim en cours', 'to avoid getting hungry in lessons']]],
    ['Donner des exemples',
      ['Les habitudes', ['je bois de l’eau', 'I drink water'], ['je mange des fruits et des légumes', 'I eat fruit and vegetables'], ['je prends un petit déjeuner', 'I have breakfast'], ['je prépare un repas simple', 'I make a simple meal']],
      ['Nuancer', ['de temps en temps', 'from time to time'], ['je me fais plaisir', 'I treat myself'], ['tout est une question d’équilibre', 'it’s all about balance']]],
  ],
  'sport-and-wellbeing': [
    ['Donner ton avis',
      ['Pour commencer', ['À mon avis,', 'In my opinion,'], ['le sport me fait du bien', 'sport does me good'], ['je préfère les sports d’équipe', 'I prefer team sports'], ['je ne suis pas très sportif', 'I’m not very sporty'], ['je ne suis pas très sportive', 'I’m not very sporty']],
      ['Les effets', ['rester en forme', 'to stay fit'], ['évacuer le stress', 'to relieve stress'], ['avoir plus confiance en moi', 'to feel more confident'], ['passer du temps avec mes amis', 'to spend time with my friends']]],
    ['Illustrer et nuancer',
      ['Des exemples', ['je vais me promener', 'I go for a walk'], ['je joue dans une équipe', 'I play on a team'], ['je fais du sport pour le plaisir', 'I do sport for fun']],
      ['Une nuance', ['la compétition peut être stressante', 'competition can be stressful'], ['chacun a ses goûts', 'everyone has their own tastes'], ['le repos compte aussi', 'rest matters too'], ['il y a plusieurs façons de bouger', 'there are different ways to be active']]],
  ],
};

const Y10_WELLBEING_LEVEL_UP = {
  hobbies: [
    ['Ce qui me plaît le plus, c’est…', 'What I like most is…', 'Name your favourite activity or use an infinitive.'],
    ['Même quand je n’ai pas beaucoup de temps, je…', 'Even when I don’t have much time, I…', 'Say what you still make time to do.'],
  ],
  'childhood-hobbies': [
    ['Alors qu’avant je…, maintenant je…', 'Whereas I used to…, now I…', 'Use the imperfect for before and the present for now.'],
    ['Depuis que j’ai découvert…, je…', 'Since I discovered…, I…', 'Use the perfect tense for the discovery and the present for the habit.'],
  ],
  'next-weekend': [
    ['S’il fait beau, on…', 'If the weather is nice, we…', 'Use the present after « si », then the future for the plan.'],
    ['J’ai hâte de… parce que…', 'I’m looking forward to… because…', 'Add an infinitive after « de », then give a reason.'],
  ],
  'ideal-day': [
    ['Si je pouvais organiser ma journée comme je voulais, je…', 'If I could plan my day however I wanted, I would…', 'Use the conditional after « je ». Try « je passerais » or « je ferais ».'],
    ['Ce qui rendrait ma journée parfaite, ce serait…', 'What would make my day perfect would be…', 'Name one thing that would make the day special.'],
  ],
  'last-weekend': [
    ['Comme il faisait…, j’ai décidé de…', 'As the weather was…, I decided to…', 'Set the scene in the imperfect, then add an action in the perfect tense.'],
    ['Ce que j’ai préféré, c’est…', 'What I liked best was…', 'Pick out one moment and explain why you enjoyed it.'],
  ],
  'ideal-routine': [
    ['Après avoir…, je…', 'After having…, I would…', 'Add a past participle, such as « terminé », then say what you would do next.'],
    ['Il faudrait que…', 'It would be necessary for…', 'Use the subjunctive to say what would need to happen.', [
      ['je sois plus organisé(e)', 'I be more organised'],
      ['j’aie des horaires réguliers', 'I have a regular schedule'],
    ]],
  ],
  'wake-up': [
    ['Bien que…, je préfère…', 'Although…, I prefer…', 'Use the subjunctive after « bien que », then give your preference.', [
      ['je sois du matin', 'I’m a morning person'],
      ['j’aie du mal à me lever', 'I find it hard to get up'],
    ]],
    ['Si je me réveillais plus tôt, je pourrais…', 'If I woke up earlier, I could…', 'Follow « je pourrais » with an infinitive.'],
  ],
  'body-confidence': [
    ['Il est important que…', 'It’s important that…', 'Use the subjunctive to say what helps people feel good about themselves.', [
      ['chacun puisse être soi-même', 'everyone can be themselves'],
      ['on ait confiance en soi', 'we have confidence in ourselves'],
    ]],
    ['Moins on se compare aux autres, plus on…', 'The less we compare ourselves with others, the more we…', 'Say what gets easier.'],
  ],
  'balanced-diet': [
    ['En mangeant de façon équilibrée, on peut…', 'By eating a balanced diet, we can…', 'Follow « on peut » with an infinitive.'],
    ['Il faut que…', 'We need to…', 'Use the subjunctive to give a practical suggestion.', [
      ['l’on boive assez d’eau', 'we drink enough water'],
      ['l’on ait des repas variés', 'we have varied meals'],
    ]],
  ],
  'sport-and-wellbeing': [
    ['Si je faisais moins de sport, je…', 'If I did less sport, I would…', 'Use the conditional to imagine what would change.'],
    ['Bien que le sport puisse être…, il…', 'Although sport can be…, it…', 'Use « puisse », the subjunctive of « pouvoir », then contrast a difficulty with a benefit.', [
      ['puisse être fatigant', 'can be tiring'],
      ['puisse être stressant', 'can be stressful'],
    ]],
  ],
};
```

## `dist/y12-chunks.js`

```javascript
function clauseChunks(text){return text.split(/(?<=[,;:.!?…\n])\s+|(?=\b(?:parce que|même si|bien que|ce qui|ce que|alors que|tandis que|mais|pourtant|donc|cependant|en revanche|par conséquent|(?<!même )(?<!comme )si|quand|lorsque)\b)/giu).map(t=>t.trim()).filter(Boolean)}

const CHUNK_DETERMINERS = new Set('le la les un une des du ce cet cette ces chaque quelques plusieurs tout toute tous toutes'.split(' '));
const CHUNK_POSSESSIVES = new Set('mon ma mes ton ta tes son sa ses notre nos votre vos leur leurs'.split(' '));
const CHUNK_PRONOUNS = new Set('je tu il elle on nous vous ils elles me te se en y ça cela'.split(' '));
const CHUNK_VERB_PREFIXES = new Set('ne me te se le la les lui leur nous vous y en'.split(' '));
const CHUNK_NEGATION = new Set(['pas', 'jamais', 'plus', 'rien', 'guère']);
const CHUNK_VERB_ADVERBS = new Set([...BETWEEN_VERB_WORDS, 'presque', 'absolument', 'très', 'rarement', 'totalement', 'certainement', 'peut-être']);
const CHUNK_EXTRA_VERBS = new Map([
  ['avoir', 'aie aies ait ayons ayez aient avoir eu'],
  ['être', 'sois soit soyons soyez soient être été'],
  ['aller', 'aille ailles aillent'],
  ['pouvoir', 'puisse puisses puissions puissiez puissent'],
  ['encourager', 'encourage encourages encourageons encouragez encouragent'],
  ['entourer', 'entoure entoures entourons entourez entourent'],
].flatMap(([verb, forms]) => forms.split(' ').map(form => [form, verb])));
const CHUNK_FINITE_ENDING = /\p{L}{3,}(?:aient|ais|ait|erons|eront|erait|irait|eraient|iraient)$/u;
const CHUNK_MODAL_VERBS = new Set(['aller', 'pouvoir', 'vouloir', 'devoir']);
const CHUNK_PARTICIPLE_ENDING = /\p{L}{2,}(?:é|ée|és|ées|i|ie|is|ies|u|ue|us|ues)$/u;
const CHUNK_SUBJECT_INTRODUCERS = new Set('que quand lorsque si puisque quoique dont où comme car'.split(' '));
const CHUNK_PUNCTUATION = /[,:;.!?…]$/u;
const CHUNK_PREPOSITIONS = new Set('à au aux de du des avec dans sur sous chez entre pour sans dès par vers depuis pendant contre'.split(' '));
const CHUNK_CONJUNCTIONS = new Set('et ou mais puis ni car'.split(' '));
const CHUNK_DEGREE = new Set('très assez trop plutôt moins plus tellement'.split(' '));
const CHUNK_ADJECTIVES = /^(?:bons?|bonnes?|mauvaises?|mauvais|grands?|grandes?|petits?|petites?|nombreux|nombreuses|nouvelles?|nouveaux|beaux|belles?|différentes?|différents?|vrais?|vraies?|meilleurs?|meilleures?)$/u;
const CHUNK_INFINITIVE = /^(?:[a-zà-ÿ]+(?:er|ir|re)|être|avoir)$/u;
const CHUNK_DEPENDENT_LINKS = new Set(['parce que', 'même si', 'comme si', 'bien que', 'alors que', 'tandis que', 'pour que']);
const CHUNK_EXPRESSIONS = [
  'grâce à', 'à cause de', 'au lieu de', 'en train de', 'tendance à', 'eu tendance à',
  'à force de', 'à propos de', 'à partir de', 'afin de', 'au fil de', 'au sein de',
  'par rapport à', 'en raison de', 'en fonction de', 'malgré tout', 'tout en',
  ...CHUNK_DEPENDENT_LINKS, 'en revanche', 'par conséquent', 'ce qui', 'ce que', 'de plus en plus',
  'ce dont', 'ce à quoi', 'en fait', 'en effet', 'par exemple', 'tout à fait',
  'petit à petit', 'de temps en temps', 'à mon avis', 'en ce qui concerne',
  'faire partie de', 'fais partie de', 'fait partie de', 'faisait partie de',
  'rendre compte', 'rends compte', 'rendu compte', 'prise de conscience',
  'à l’aise', "à l'aise", 'sens à l’aise', "sens à l'aise", 'confiance en',
].map(expression => expression.split(' '));

function chunkVerbForm(word) {
  const bare = word.replace(/^(?:(?:j|n|m|t|s|l|c|qu)[’'])+/u, '');
  const verb = VERB_FORMS.present.get(bare) || VERB_FORMS.imperfect.get(bare) ||
    VERB_FORMS.conditional.get(bare) || VERB_FORMS.future.get(bare) || CHUNK_EXTRA_VERBS.get(bare) ||
    (Object.hasOwn(REVIEW_VERBS, bare) ? bare : undefined);
  return {bare, verb, finite: Boolean(verb && bare !== verb && bare !== 'eu' && bare !== 'été') || CHUNK_FINITE_ENDING.test(bare)};
}

function protectVerbGroups(words, clean, costs) {
  const forms = clean.map(chunkVerbForm);
  const relative = clean.findIndex(word => word === 'qui' || word === 'que' || word === 'dont');
  const startsWithSubject = CHUNK_DETERMINERS.has(clean[0]) || CHUNK_POSSESSIVES.has(clean[0]) || /^l[’']/u.test(clean[0]);
  const firstFinite = forms.findIndex(form => form.finite);
  let lastFinite = -1;
  for (const [index, {bare, verb, finite}] of forms.entries()) {
    if (finite) {
      let verbStart = index;
      while (CHUNK_VERB_PREFIXES.has(clean[verbStart - 1]) || /^n[’']/u.test(clean[verbStart - 1])) verbStart--;
      let subjectStart = verbStart;
      if (!/^(?:j[’']|c[’']|qu[’'])/u.test(clean[index])) {
        // Keep short subjects attached and allow a breath after a longer noun phrase.
        for (let left = index - 1; left >= 0; left--) {
          const word = clean[left];
          if (CHUNK_PUNCTUATION.test(words[left]) || CHUNK_SUBJECT_INTRODUCERS.has(word) || forms[left].finite) break;
          if (CHUNK_CONJUNCTIONS.has(word) && (word !== 'et' || lastFinite >= 0)) break;
          costs[left + 1] = Infinity;
          subjectStart = left;
          if (word === 'qui' || (CHUNK_PRONOUNS.has(word) && !CHUNK_VERB_PREFIXES.has(word))) break;
          const determiner = CHUNK_DETERMINERS.has(word) || CHUNK_POSSESSIVES.has(word) || /^l[’']/u.test(word);
          const complement = /^(?:du|des|d[’'])/u.test(word) || /^(?:de|du|des)$/u.test(clean[left - 1]);
          const coordinated = clean[left - 1] === 'et' && lastFinite < 0;
          if (determiner && !complement && !coordinated && left < verbStart) break;
        }
      }

      if (verbStart - subjectStart >= 5) costs[verbStart] = -5;
      if (startsWithSubject && relative > 0 && lastFinite > relative && firstFinite === lastFinite &&
          !words.slice(0, index).some(word => CHUNK_PUNCTUATION.test(word))) {
        // In a long subject, give the relative and the main verb room to breathe.
        costs[relative] = -5;
        costs[verbStart] = -5;
      }
      const negative = clean.slice(verbStart, index + 1).some(word => word === 'ne' || /^n[’']/u.test(word));
      if (negative && CHUNK_NEGATION.has(clean[index + 1]) && !CHUNK_PUNCTUATION.test(words[index])) costs[index + 1] = Infinity;
    }
    if (finite) lastFinite = index;

    const compound = verb === 'avoir' || verb === 'être';
    if (!compound && !CHUNK_MODAL_VERBS.has(verb || PARTICIPLES.get(bare))) continue;
    let end = index + 1;
    while (end < clean.length && !CHUNK_PUNCTUATION.test(words[end - 1])) {
      if (CHUNK_VERB_ADVERBS.has(clean[end]) || CHUNK_VERB_PREFIXES.has(clean[end])) end++;
      else if (clean[end] === 'sans' && clean[end + 1] === 'doute') end += 2;
      else break;
    }
    if (end === clean.length || CHUNK_PUNCTUATION.test(words[end - 1])) continue;
    const target = forms[end].bare;
    const matches = compound
      ? PARTICIPLES.has(target) || CHUNK_PARTICIPLE_ENDING.test(target) || /^(?:été|eu|dit|dits|dites|ouvert|offert|mort|né)[es]*$/u.test(target)
      : CHUNK_INFINITIVE.test(target);
    if (matches) {
      for (let cut = index + 1; cut <= end; cut++) costs[cut] = Infinity;
    }
  }
}

function chunkBoundaries(words, vocabulary = []) {
  const clean = words.map(word => word.toLocaleLowerCase('fr').replace(/^[«“(\[]+|[»”)\],:;.!?…]+$/gu, ''));
  const costs = Array(words.length + 1).fill(0);
  for (let cut = 1; cut < words.length; cut++) {
    const [previous, before, after, next] = [clean[cut - 2], clean[cut - 1], clean[cut], clean[cut + 1]];
    if (CHUNK_PUNCTUATION.test(words[cut - 1])) {
      costs[cut] = -4;
    } else if (CHUNK_DETERMINERS.has(before) || CHUNK_POSSESSIVES.has(before) ||
        CHUNK_CONJUNCTIONS.has(before) || CHUNK_PRONOUNS.has(before) ||
        CHUNK_SUBJECT_INTRODUCERS.has(before) || before === 'qui' ||
        CHUNK_DEGREE.has(before) ||
        (CHUNK_ADJECTIVES.test(before) && (CHUNK_DETERMINERS.has(previous) || CHUNK_POSSESSIVES.has(previous) || previous === 'de'))) {
      costs[cut] = Infinity;
    } else if (before === 'à' && CHUNK_INFINITIVE.test(after)) {
      costs[cut] = -2;
    } else if (CHUNK_PREPOSITIONS.has(before)) {
      costs[cut] = 8;
    } else if (CHUNK_CONJUNCTIONS.has(after)) {
      costs[cut] = -4;
    } else if (CHUNK_POSSESSIVES.has(after) || (after === 'de' && CHUNK_ADJECTIVES.test(next))) {
      costs[cut] = -3;
    } else if (/^(?:(?:me|te|se|y|en)$|[mts][’'])/u.test(after) &&
        (CHUNK_DETERMINERS.has(previous) || CHUNK_POSSESSIVES.has(previous))) {
      costs[cut] = 3;
    } else if (CHUNK_PRONOUNS.has(after) || /^(?:j|m|s|t|n)[’']/u.test(after)) {
      costs[cut] = -1.5;
    }
  }

  protectVerbGroups(words, clean, costs);

  for (let start = 0; start < clean.length; start++) {
    for (const expression of CHUNK_EXPRESSIONS) {
      if (!expression.every((word, offset) => clean[start + offset] === word)) continue;
      const end = start + expression.length;
      for (let cut = start + 1; cut < end; cut++) costs[cut] = Infinity;
      if (end < clean.length && CHUNK_DEPENDENT_LINKS.has(expression.join(' '))) costs[end] = Infinity;
      if (start && costs[start] !== Infinity) costs[start] = Math.min(costs[start], -6);
    }
  }
  return protectVocabularyBoundaries(words, clean, costs, vocabulary);
}

function protectVocabularyBoundaries(words, clean, costs, vocabulary) {
  if (!vocabulary.length) return costs;
  const normalized = clean.map(word => word.replaceAll('’', "'"));
  for (let start = 0; start < clean.length; start++) {
    const phrase = vocabulary.find(phrase => phrase.every((word, offset) =>
      normalized[start + offset] === word && (offset === 0 || !CHUNK_PUNCTUATION.test(words[start + offset - 1]))));
    if (!phrase) continue;
    const end = start + phrase.length;
    for (let cut = start + 1; cut < end; cut++) costs[cut] = Infinity;
    for (const cut of [start, end]) {
      if (cut > 0 && cut < clean.length && costs[cut] !== Infinity) costs[cut] = Math.min(costs[cut], -7);
    }
    start = end - 1;
  }
  return costs;
}

const SPANISH_CHUNK_LINKS = new Set(
  'a al ante bajo con contra de del desde durante en entre hacia hasta para por según sin sobre tras el la los las un una unos unas mi mis tu tus su sus nuestro nuestra nuestros nuestras este esta estos estas ese esa esos esas y e o u ni que si aunque porque cuando mientras como donde me te se nos os lo le les no yo tú él ella nosotros vosotros ellos ellas usted ustedes'.split(' ')
);
const SPANISH_CHUNK_AUXILIARIES = new Set('he has ha hemos habéis han había habías habíamos habían habría habríais habrían'.split(' '));

function spanishChunkBoundaries(words, vocabulary) {
  const clean = words.map(word => word.toLocaleLowerCase('es').replace(/^[¿¡«“(\[]+|[»”)\],:;.!?…]+$/gu, ''));
  const costs = Array(words.length + 1).fill(0);
  for (let cut = 1; cut < words.length; cut++) {
    const before = clean[cut - 1];
    const after = clean[cut];
    if (CHUNK_PUNCTUATION.test(words[cut - 1])) costs[cut] = -5;
    else if (SPANISH_CHUNK_LINKS.has(before) || SPANISH_CHUNK_AUXILIARIES.has(before)) costs[cut] = Infinity;
    else if (/^(?:y|pero|porque|aunque|para|mientras|cuando|desde)$/u.test(after)) costs[cut] = -3;
  }
  return protectVocabularyBoundaries(words, clean, costs, vocabulary);
}

function shortPhraseGroups(phrase, vocabulary = [], language = 'fr') {
  const words = phrase.match(/\S+(?:[ \t]+[?!:;,…]+(?=\s|$))?/gu) || [];
  if (!words.length) return [];

  // Five words is a target. Extend to the next boundary when a phrase needs more room.
  const boundaries = language === 'es' ? spanishChunkBoundaries(words, vocabulary) : chunkBoundaries(words, vocabulary);
  const costs = Array(words.length + 1).fill(Infinity);
  const nextCuts = Array(words.length);
  costs[words.length] = 0;
  for (let start = words.length - 1; start >= 0; start--) {
    for (let end = start + 1; end <= words.length; end++) {
      if (boundaries[end] === Infinity) continue;
      const size = end - start;
      const lengthCost = size === 1 ? 8 : 1 + 0.45 * (size - 3.5) ** 2;
      const cost = lengthCost + boundaries[end] + costs[end];
      if (cost < costs[start]) {
        costs[start] = cost;
        nextCuts[start] = end;
      }
      if (size >= 5) break;
    }
  }
  const groups = [];
  for (let start = 0; start < words.length; start = nextCuts[start]) {
    groups.push(words.slice(start, nextCuts[start]).join(' '));
  }
  return groups;
}

function suggestChunks(text) {
  return clauseChunks(text).flatMap(phrase => shortPhraseGroups(phrase));
}
```

## `dist/y12-draft-review.js`

```javascript
const REVIEW_CARDS = [
  ['present', 'Présent', 'Relis le sujet et la terminaison. Ce temps convient-il à ton opinion ou à une habitude actuelle ?'],
  ['past', 'Passé composé', 'Vérifie l’auxiliaire et le participe passé, puis l’accord s’il est nécessaire.'],
  ['imperfect', 'Imparfait', 'Vérifie que tu décris un contexte, une habitude ou un état passé.'],
  ['conditional', 'Conditionnel', 'Vérifie la formation et le sens. Dans une hypothèse avec si, relis les temps des deux propositions.'],
  ['future', 'Futur', 'Vérifie que la forme exprime un projet ou une conséquence à venir.'],
  ['other', 'Autres formes verbales', 'Vérifie le déclencheur du subjonctif ou l’ordre des événements au plus-que-parfait.'],
  ['topic', 'Vocabulaire du sujet', 'Garde les mots précis qui servent ton idée. Tu peux ajouter d’autres exemples de ton brouillon.'],
  ['repeated', 'Répétitions à examiner', 'Garde les répétitions utiles. Si un mot revient sans apporter de précision, essaie de le varier ou de reformuler.'],
  ['complex', 'Structures complexes', 'Vérifie la phrase entière. Une relative, une concession ou une hypothèse doit clarifier le lien entre tes idées.'],
  ['idioms', 'Expressions idiomatiques', 'Vérifie le sens, la préposition et le contexte de chaque expression.']
];

const REVIEW_VERBS = {
  être: ['suis es est sommes êtes sont', 'ét', 'ser', 'été'],
  avoir: ['ai as a avons avez ont', 'av', 'aur', 'eu'],
  aller: ['vais vas va allons allez vont', 'all', 'ir', 'allé'],
  faire: ['fais fais fait faisons faites font', 'fais', 'fer', 'fait'],
  pouvoir: ['peux peux peut pouvons pouvez peuvent', 'pouv', 'pourr', 'pu'],
  vouloir: ['veux veux veut voulons voulez veulent', 'voul', 'voudr', 'voulu'],
  devoir: ['dois dois doit devons devez doivent', 'dev', 'devr', 'dû'],
  savoir: ['sais sais sait savons savez savent', 'sav', 'saur', 'su'],
  prendre: ['prends prends prend prenons prenez prennent', 'pren', 'prendr', 'pris'],
  apprendre: ['apprends apprends apprend apprenons apprenez apprennent', 'appren', 'apprendr', 'appris'],
  comprendre: ['comprends comprends comprend comprenons comprenez comprennent', 'compren', 'comprendr', 'compris'],
  venir: ['viens viens vient venons venez viennent', 'ven', 'viendr', 'venu'],
  devenir: ['deviens deviens devient devenons devenez deviennent', 'deven', 'deviendr', 'devenu'],
  mettre: ['mets mets met mettons mettez mettent', 'mett', 'mettr', 'mis'],
  voir: ['vois vois voit voyons voyez voient', 'voy', 'verr', 'vu'],
  dire: ['dis dis dit disons dites disent', 'dis', 'dir', 'dit'],
  lire: ['lis lis lit lisons lisez lisent', 'lis', 'lir', 'lu'],
  choisir: ['choisis choisis choisit choisissons choisissez choisissent', 'choisiss', 'choisir', 'choisi'],
  finir: ['finis finis finit finissons finissez finissent', 'finiss', 'finir', 'fini'],
  vivre: ['vis vis vit vivons vivez vivent', 'viv', 'vivr', 'vécu'],
  ressentir: ['ressens ressens ressent ressentons ressentez ressentent', 'ressent', 'ressentir', 'ressenti'],
  réfléchir: ['réfléchis réfléchis réfléchit réfléchissons réfléchissez réfléchissent', 'réfléchiss', 'réfléchir', 'réfléchi'],
  sentir: ['sens sens sent sentons sentez sentent', 'sent', 'sentir', 'senti'],
  sortir: ['sors sors sort sortons sortez sortent', 'sort', 'sortir', 'sorti'],
  partir: ['pars pars part partons partez partent', 'part', 'partir', 'parti'],
  découvrir: ['découvre découvres découvre découvrons découvrez découvrent', 'découvr', 'découvrir', 'découvert'],
  grandir: ['grandis grandis grandit grandissons grandissez grandissent', 'grandiss', 'grandir', 'grandi'],
  falloir: ['faut', 'fall', 'faudr', 'fallu'],
  manger: ['mange manges mange mangeons mangez mangent', 'mang', 'manger', 'mangé'],
  acheter: ['achète achètes achète achetons achetez achètent', 'achet', 'achèter', 'acheté'],
  préférer: ['préfère préfères préfère préférons préférez préfèrent', 'préfér', 'préférer', 'préféré']
};
const REVIEW_REGULAR = 'aimer parler penser expliquer donner porter habiter rester arriver entrer rentrer retourner passer trouver montrer accepter refuser aider ajouter souhaiter écouter éviter travailler développer respecter partager influencer sembler présenter participer porter juger adapter comparer consommer gaspiller changer pratiquer compter utiliser étudier observer regretter demander proposer regarder'.split(' ').map(verb => verb.slice(0, -2));
const REVIEW_ENDINGS = {
  imperfect: ['ais','ais','ait','ions','iez','aient'],
  conditional: ['ais','ais','ait','ions','iez','aient'],
  future: ['ai','as','a','ons','ez','ont']
};
const VERB_FORMS = {present:new Map(), imperfect:new Map(), conditional:new Map(), future:new Map()};
const PARTICIPLES = new Map();

function addReviewVerb(infinitive, present, imperfect, future, participle) {
  const forms = {
    present: present.split(' '),
    imperfect: REVIEW_ENDINGS.imperfect.map(end => imperfect + (imperfect.endsWith('g') && end.startsWith('a') ? 'e' : '') + end),
    conditional: REVIEW_ENDINGS.conditional.map(end => future + end),
    future: REVIEW_ENDINGS.future.map(end => future + end)
  };
  for (const [kind, items] of Object.entries(forms)) {
    for (const item of items) VERB_FORMS[kind].set(item, infinitive);
  }
  const feminine = participle === 'pris' ? 'prise' : participle === 'appris' ? 'apprise' : participle === 'compris' ? 'comprise' :
    participle === 'mis' ? 'mise' : participle === 'fait' ? 'faite' : participle === 'dit' ? 'dite' :
    participle === 'découvert' ? 'découverte' : participle === 'dû' ? 'due' : participle + 'e';
  for (const form of [participle, participle + 's', feminine, feminine + 's']) PARTICIPLES.set(form, infinitive);
}
for (const [infinitive, forms] of Object.entries(REVIEW_VERBS)) addReviewVerb(infinitive, ...forms);
for (const stem of REVIEW_REGULAR) {
  addReviewVerb(stem + 'er', ['e','es','e','ons','ez','ent'].map(end => stem + (stem.endsWith('g') && end === 'ons' ? 'e' : '') + end).join(' '), stem, stem + 'er', stem + 'é');
}

const REVIEW_STRUCTURES = [
  ['Hypothèse', /(?<!même )(?<!comme )\bsi\s+(?:j[’']|je |tu |il |elle |on |nous |vous |ils |elles )[^.!?]{3,100}/giu],
  ['Concession', /\b(?:bien que|même si|quoique)\s+[^.!?,;]{3,72}/giu],
  ['Condition ou but', /\b(?:à condition que|pour que)\s+[^.!?,;]{3,72}/giu],
  ['Contraste', /\b(?:tandis que|alors que)\s+[^.!?,;]{3,72}/giu],
  ['Mise en relief ou relative', /\b(?:ce (?:qui|que|dont)|dont|c[’']est [^.!?,;]{2,30} que)\s+[^.!?,;]{3,72}/giu],
  ['Cause ou conséquence', /\b(?:parce que|puisque|si bien que|de sorte que)\s+[^.!?,;]{3,72}/giu],
  ['Gérondif', /\ben\s+(?:écoutant|parlant|faisant|prenant|choisissant|changeant|partageant|restant|observant|comparant|évitant|achetant|consommant|regardant)\b/giu],
  ['Subordonnée introduite par que', /\b(?:il faut|il faudrait|je veux|j[’']aimerais|je souhaite|je ne pense pas) que\s+[^.!?,;]{3,72}/giu],
  ['Infinitif passé', /\baprès (?:avoir|être|s[’']être)\s+\p{L}+/giu]
];
const REVIEW_IDIOMS = [
  /\b(?:me |te |se |nous |vous )?sen(?:tir|s|t|tons|tez|tent|tais|tait|tent) bien dans (?:ma|ta|sa|notre|votre|leur) peau\b/giu,
  /\b(?:prendre|prends|prend|prenons|prennent|pris|prenais) du recul\b/giu,
  /\b(?:avoir|ai|as|a|avons|ont|avais|avait) tendance à\b/giu,
  /\b(?:rester|reste|restes|restent|resté[e]?) fidèle à\b/giu,
  /\b(?:trouver|trouve|trouves|trouvent|trouvé[e]?) (?:ma|ta|sa|notre|votre|leur) place\b/giu,
  /\b(?:changer|change|changes|changent|changé[e]?) (?:d[’']avis|de regard)\b/giu,
  /\b(?:se |me |te |nous |vous )remet(?:tre|s|tons|tent)? en question\b/giu,
  /\b(?:avoir|ai|as|a|avons|ont) (?:les pieds sur terre|(?:mon|ton|son|notre|votre|leur) mot à dire)\b/giu,
  /\b(?:prendre|prends|prend|pris) conscience de\b/giu,
  /\b(?:tenir|tiens|tient) à (?:mes|tes|ses|nos|vos|leurs) valeurs\b/giu,
  /\b(?:mettre|mets|met|mis) l[’']accent sur\b/giu,
  /\b(?:se |me |te )donne(?:r|s|nt)? bonne conscience\b/giu,
  /\bà force de\b/giu,
  /\bde peur de\b/giu,
  /\bd[’']un côté\b/giu,
  /\bd[’']un autre côté\b/giu
];

const REVIEW_STOP = new Set('avec pour dans sans mais très plus moins tout tous toute toutes même cette comme donc alors aussi encore lorsque quand selon ainsi cela ceci ceux elles leur leurs nous vous autre autres entre avant après depuis parce puis que qui quoi dont elle ils une les des du aux sur est sont être était étaient été avoir avais avait ai aux ses mes tes son mon ton nos vos ces cet ce ça il on je tu ne pas par mal bien fait faire peut peux ont ans jour jours chez grâce où là chaque parce quelques parfois souvent toujours jamais vraiment beaucoup surtout plutôt enfin seulement'.split(' '));
const BETWEEN_VERB_WORDS = new Set('pas jamais plus déjà souvent beaucoup bien mal vraiment encore toujours enfin aussi seulement vite récemment parfois tout simplement dûment moins rien'.split(' '));
const ETRE_MOVEMENT = new Set('aller venir devenir arriver entrer rentrer retourner rester partir sortir'.split(' '));
const REFLEXIVE = new Set(['m','t','s','me','te','se','nous','vous']);

function reviewWords(text) {
  return Array.from(text.matchAll(/\p{L}[\p{L}\p{M}]*/gu), m => ({
    value:m[0].toLocaleLowerCase('fr'), start:m.index, end:m.index + m[0].length
  }));
}

function collectVerbExamples(text, add) {
  const words = reviewWords(text);
  const compoundTenses = {present:'past', imperfect:'other', conditional:'conditional', future:'future'};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const kind = Object.keys(VERB_FORMS).find(key => VERB_FORMS[key].has(word.value));
    if (!kind) continue;
    const verb = VERB_FORMS[kind].get(word.value);
    let j = i + 1;
    while (j < words.length && j <= i + 3 && BETWEEN_VERB_WORDS.has(words[j].value)) j++;
    const next = words[j];
    let start = i && /^[’'\s]+$/u.test(text.slice(words[i-1].end, word.start)) &&
      /^(?:j|je|tu|il|elle|on|nous|vous|ils|elles|m|t|s|me|te|se)$/.test(words[i-1].value) ? words[i-1].start : word.start;
    const previous = words[i-1]?.value;
    const beforePrevious = words[i-2]?.value;
    const hasSubject = /^(?:j|je|tu|il|elle|on|nous|vous|ils|elles)$/.test(beforePrevious || '');
    if (/^(?:un|une|le|la|les|du|des|mon|ma|mes|son|sa|ses|ce|cette)$/.test(previous || '') &&
        !hasSubject && !REFLEXIVE.has(beforePrevious)) continue;
    if (i >= 2 && /^(?:ne|n)$/.test(previous) && hasSubject &&
        /^[’'\s]+$/u.test(text.slice(words[i-2].end, word.start).replace(/\bne?\b/iu,''))) {
      start = words[i-2].start;
    }
    const connected = next && !/[.!?;:,\n]/u.test(text.slice(word.end, next.start));
    const pp = connected && PARTICIPLES.get(next.value);
    const reflexive = i && REFLEXIVE.has(words[i-1].value);
    if (pp && (verb === 'avoir' || (verb === 'être' && (reflexive || ETRE_MOVEMENT.has(pp))))) {
      add(compoundTenses[kind], text.slice(start,next.end), kind === 'imperfect' ? 'Plus-que-parfait possible' : '');
      i = j;
    } else if (connected && verb === 'aller' && kind === 'present' &&
        (next.value in REVIEW_VERBS || REVIEW_REGULAR.some(stem => stem + 'er' === next.value))) {
      add('future', text.slice(start,next.end),'Futur proche possible');
      i = j;
    } else {
      add(kind,text.slice(start,word.end));
    }
  }
}

function reviewDraft(text, vocabulary) {
  const results = Object.fromEntries(REVIEW_CARDS.map(([key]) => [key,[]]));
  const add = (key, quote, detail = '') => {
    const value = quote.trim();
    if (value && !results[key].some(item => item.quote.toLocaleLowerCase('fr') === value.toLocaleLowerCase('fr'))) {
      results[key].push({quote:value,detail});
    }
  };
  collectVerbExamples(text, add);
  for (const [name,pattern] of REVIEW_STRUCTURES) {
    for (const m of text.matchAll(pattern)) add('complex',m[0],name);
  }
  for (const m of text.matchAll(/\b(?:bien que|pour que|à condition que|il faut que|je souhaite que|je ne pense pas que)\s+(?:j[’']|je |tu |il |elle |on |nous |vous |ils |elles )(?:ne\s+|n[’'])?(?:sois|soit|soyons|soyez|soient|aie|aies|ait|ayons|ayez|aient|puisse|puisses|puissions|puissiez|puissent|fasse|fasses|fassions|fassiez|fassent|aille|ailles|allions|alliez|aillent)\b/giu)) add('other',m[0],'Subjonctif possible');
  for (const pattern of REVIEW_IDIOMS) {
    for (const m of text.matchAll(pattern)) add('idioms',m[0]);
  }
  for (const phrase of vocabulary) {
    const stem = phrase.replace(/^(?:les|le|la|un|une|des)\s+|^l[’']/iu,'');
    const escaped = stem.replace(/[.*+?^$\x7b\x7d()|[\]\\]/g,'\\$&').replace(/[’']/g,"[’']");
    const pattern = new RegExp('(?<!\\p{L})'+escaped+'(?!\\p{L})','iu');
    const match = text.match(pattern);
    if (match) add('topic',match[0],phrase);
  }
  const frequency = new Map();
  for (const {value} of reviewWords(text)) {
    if (value.length < 4 || REVIEW_STOP.has(value)) continue;
    frequency.set(value,(frequency.get(value)||0)+1);
  }
  for (const [word,count] of [...frequency].filter(([,count]) => count > 1).sort((a,b) => b[1]-a[1])) {
    add('repeated',word,count + ' occurrences');
  }
  for (const expression of ['je pense que','à mon avis','je trouve que','il y a']) {
    const count = [...text.matchAll(new RegExp('\\b'+expression+'\\b','giu'))].length;
    if (count > 1) add('repeated',expression,count + ' occurrences');
  }
  return results;
}
```

## `dist/y12-practice.js`

```javascript
const PRACTICE_STAGES = [
  'repeat', 'reorder', 'dictation', 'initials', 'chunk-first', 'clause-initials',
  'type-initials', 'clause-first', 'clause-english', 'clause-keyword', 'solo',
];
const PRACTICE_WORD = /[\p{L}\p{N}][\p{L}\p{M}\p{N}]*(?:[’'\-‐‑][\p{L}\p{M}\p{N}]+)*/gu;
const PRACTICE_INSTRUCTIONS = {
  repeat: 'Écoute, répète chaque groupe, puis reprends les groupes ensemble.',
  reorder: 'Remets les mots de la proposition dans l’ordre, puis dis-la à voix haute. Les propositions réussies s’ajoutent à ton texte.',
  dictation: 'Écoute la proposition. Tape ce que tu entends, vérifie, puis dis-la à voix haute.',
  initials: 'Redis chaque groupe à partir des initiales. Clique sur une lettre pour entendre le mot.',
  'chunk-first': 'Redis chaque groupe à partir de son premier mot.',
  'clause-initials': 'Redis chaque proposition d’une traite. Clique sur une lettre pour entendre le mot.',
  'type-initials': 'Tape la proposition à partir des initiales, vérifie, puis dis-la à voix haute.',
  'clause-first': 'Redis chaque proposition à partir de son premier mot.',
  'clause-english': 'Retrouve le français à voix haute à partir du sens en anglais.',
  'clause-keyword': 'Redis chaque proposition à partir d’un seul mot clé.',
  solo: 'Écoute la question et donne ta réponse complète à voix haute.',
};
let reorderExercise;
let englishTranslator;
const englishCueJobs = new Map();

function practiceClauses(text) {
  const clauses = [];
  let opening = '';
  for (const clause of clauseChunks(text.replace(/\s*\r?\n\s*/gu, '\n '))) {
    const unit = opening + clause;
    if (wordCount(unit) < 5 && /[,;:]$/u.test(unit) &&
        !reviewWords(unit).some(({value}) => chunkVerbForm(value).finite)) {
      opening = unit + ' ';
    } else {
      clauses.push(unit);
      opening = '';
    }
  }
  if (opening) clauses.push(opening.trim());
  return clauses;
}

function practiceWords(text) {
  return text.match(PRACTICE_WORD) || [];
}

function practiceCheckValue(text) {
  return practiceWords(text.normalize('NFC').replace(/[’]/gu, "'")).join(' ').toLocaleLowerCase(studyLanguage);
}

function practicePager(label, count) {
  return `<div class="actions practice-pager">
    <button data-action="prev" ${part === 0 ? 'disabled' : ''}>← Précédent</button>
    <span class="muted">${label} ${part + 1} / ${count}</span>
    <button data-action="next" ${part === count - 1 ? 'disabled' : ''}>Suivant →</button>
  </div>`;
}

function practiceCueGrid(units, label, cue) {
  return `<ol class="practice-cue-grid" aria-label="${label}">${units.map((unit, index) =>
    `<li><span class="muted">${index + 1}</span><div>${cue(unit, index)}</div></li>`).join('')}</ol>`;
}

function practiceClauseCue(clause, d = draft()) {
  const entries = d.clauseCues;
  return Array.isArray(entries) ? entries.find(entry => entry?.clause === clause) || {} : {};
}

function practiceKeyword(clause, index, count) {
  const manual = draft().cues.split(/\n/u).map(cue => cue.trim()).filter(Boolean);
  if (manual.length === count && practiceWords(manual[index]).length === 1) return manual[index];
  const words = practiceWords(clause);
  const vocabulary = new Set(reviewVocabulary().flatMap(practiceWords).map(word => word.toLocaleLowerCase('fr')));
  return words.find(word => vocabulary.has(word.toLocaleLowerCase('fr')) && !REVIEW_STOP.has(word.toLocaleLowerCase('fr'))) ||
    words.filter(word => word.length > 3 && !REVIEW_STOP.has(word.toLocaleLowerCase('fr')) &&
      !chunkVerbForm(word.toLocaleLowerCase('fr')).finite).sort((a, b) => b.length - a.length)[0] ||
    words.at(-1) || clause;
}

function savePracticeEnglish(d, clause, english) {
  const entries = Array.isArray(d.clauseCues) ? d.clauseCues : [];
  d.clauseCues = entries.filter(entry => entry?.clause !== clause);
  d.clauseCues.push({clause, english});
  save();
}

function practiceEnglish(clause) {
  const cue = practiceClauseCue(clause).english;
  const prompt = cue ? `<div class="focus" lang="en">${esc(cue)}</div>` : typeof Translator !== 'undefined'
    ? `<div data-english-translation>
      <button data-prepare-english>Afficher l’indice en anglais</button>
      <p class="muted" role="status"></p>
    </div>`
    : '<p class="muted">La traduction sur cet appareil est indisponible. Ouvre l’activité dans une version récente de Chrome ou Edge sur ordinateur, utilise un indice préparé ou passe à l’étape suivante.</p>';
  return `${prompt}
    <details class="simple-details"><summary>${cue ? 'Modifier l’indice' : 'Ajouter un indice préparé'}</summary>
      <p lang="fr">${esc(clause)}</p>
      <form data-clause-cue="english"><label for="clause-cue">Indice en anglais</label>
        <input id="clause-cue" name="cue" type="text" lang="en" value="${esc(cue || '')}" required>
        <button type="submit">Enregistrer</button>
      </form>
    </details>`;
}

function translatePracticeClause(clause) {
  if (!englishCueJobs.has(clause)) {
    englishTranslator ??= Translator.create({sourceLanguage: studyLanguage, targetLanguage: 'en'}).catch(error => {
      englishTranslator = undefined;
      throw error;
    });
    const job = englishTranslator.then(translator => translator.translate(clause))
      .finally(() => englishCueJobs.delete(clause));
    englishCueJobs.set(clause, job);
  }
  return englishCueJobs.get(clause);
}

function bindPracticeEnglish(container, clause) {
  const button = container.querySelector('[data-prepare-english]');
  const status = container.querySelector('[role="status"]');
  const d = draft();
  async function prepare() {
    if (button.disabled) return;
    button.disabled = true;
    status.textContent = 'Préparation de l’indice sur cet appareil. Le premier téléchargement peut prendre un moment.';
    try {
      const english = (await translatePracticeClause(clause)).trim();
      if (!english) throw new Error('Empty translation');
      if (!practiceClauseCue(clause, d).english) savePracticeEnglish(d, clause, english);
      if (container.isConnected) render();
    } catch {
      button.disabled = false;
      status.textContent = 'La traduction sur cet appareil est indisponible. Réessaie, utilise un indice préparé ou passe à l’étape suivante.';
    }
  }
  button.onclick = prepare;
  if (englishTranslator || navigator.userActivation?.isActive) prepare();
}

function practiceReorder(group) {
  if (reorderExercise?.group === group && reorderExercise.question === current && reorderExercise.part === part) return reorderExercise;
  const words = practiceWords(group);
  const order = words.map((_, index) => index);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const original = words.join(' ');
  if (order.map(index => words[index]).join(' ') === original) {
    const different = order.findIndex(index => words[index] !== words[order[0]]);
    if (different > 0) [order[0], order[different]] = [order[different], order[0]];
  }
  reorderExercise = {group, question: current, part, words, order, picked: []};
  return reorderExercise;
}

function practiceOrderBoard(group) {
  const {words, order, picked} = practiceReorder(group);
  return `<div class="practice-word-bank" aria-label="Mots à choisir">${order.map(index =>
    `<button data-pick-word="${index}" ${picked.includes(index) ? 'disabled' : ''}>${esc(words[index])}</button>`).join('')}</div>
    <div class="practice-word-bank practice-picked" aria-label="Mon ordre">${picked.length ? picked.map(index =>
      `<button data-return-word="${index}" aria-label="Retirer ${esc(words[index])}">${esc(words[index])}</button>`).join('')
      : '<span class="muted">Choisis le premier mot.</span>'}</div>
    <button data-check-order ${picked.length !== words.length ? 'disabled' : ''}>Vérifier</button>
    <div class="practice-feedback" role="status"></div>`;
}

function practiceCompletedText(clauses, completed = []) {
  return clauses.map((clause, index) => completed.includes(index)
    ? (index > 0 && !completed.includes(index - 1) ? '… ' : '') + clause
    : '').filter(Boolean).join(' ');
}

function practiceFeedback(value, target, container) {
  const correct = practiceCheckValue(value) === practiceCheckValue(target);
  container.textContent = correct ? 'C’est exact. Dis-le maintenant à voix haute.' : 'Compare avec ta réponse et réessaie.';
  if (!correct) {
    const answer = document.createElement('p');
    answer.textContent = target;
    container.append(answer);
  }
  return correct;
}

function bindPracticeStage() {
  const card = document.querySelector('[data-practice-card]');
  if (!card) return;
  const clauses = practiceClauses(draft().revision);
  const clause = clauses[part];
  const orderBoard = card.querySelector('[data-order-board]');
  if (orderBoard) {
    orderBoard.onclick = event => {
      const button = event.target.closest('button');
      if (!button) return;
      const exercise = reorderExercise;
      if (button.hasAttribute('data-check-order')) {
        const correct = practiceFeedback(exercise.picked.map(index => exercise.words[index]).join(' '),
          exercise.group, orderBoard.querySelector('.practice-feedback'));
        if (correct) {
          const d = draft();
          d.reorderCompleted ??= [];
          if (!d.reorderCompleted.includes(part)) {
            d.reorderCompleted.push(part);
            save();
            card.querySelector('[data-reorder-progress]').textContent = practiceCompletedText(clauses, d.reorderCompleted);
          }
        }
        return;
      }
      if (button.hasAttribute('data-pick-word')) exercise.picked.push(+button.dataset.pickWord);
      if (button.hasAttribute('data-return-word')) exercise.picked = exercise.picked.filter(index => index !== +button.dataset.returnWord);
      orderBoard.innerHTML = practiceOrderBoard(exercise.group);
      orderBoard.querySelector('button:not(:disabled)')?.focus({preventScroll: true});
    };
  }

  const typing = card.querySelector('[data-practice-typing]');
  if (typing) typing.onsubmit = event => {
    event.preventDefault();
    practiceFeedback(typing.elements.response.value, clause, typing.querySelector('.practice-feedback'));
  };
  const listen = card.querySelector('[data-listen-clause]');
  if (listen) listen.onclick = () => speak(clause);

  const cue = card.querySelector('[data-clause-cue]');
  if (cue) cue.onsubmit = event => {
    event.preventDefault();
    const value = cue.elements.cue.value.trim();
    if (!value) return;
    savePracticeEnglish(draft(), clause, value);
    render();
    $('practice-instruction')?.focus({preventScroll: true});
  };
  const english = card.querySelector('[data-english-translation]');
  if (english) bindPracticeEnglish(english, clause);
}

function simplePractice() {
  const d = draft();
  const isPilot = current === PILOT_QUESTION;
  if (!d.revision.trim()) return `<section class="simple-card card">
    ${simpleHeading()}<p>${YEAR_TEN ? 'Écris ta réponse pour commencer.' : 'Prépare ta version retravaillée.'}</p>
    <button class="primary" data-mode="${YEAR_TEN ? 'edit' : isPilot ? 'review' : 'revise'}">${YEAR_TEN ? 'Écrire ma réponse' : 'Améliorer ma réponse'}</button>
  </section>`;

  const chunks = practiceChunks();
  const clauses = practiceClauses(d.revision);
  wordTokens = [];
  const step = PRACTICE_STAGES.indexOf(mode);
  const units = mode === 'repeat' ? chunks : clauses;
  part = Math.min(Math.max(0, part), units.length - 1);
  const unit = units[part];
  const first = text => esc(practiceWords(text)[0] || text);
  const initials = text => `<div class="initials">${initialMarkup(text)}</div>`;
  let body;
  switch (mode) {
    case 'repeat':
      body = `<div class="focus">${esc(unit)}</div><button data-action="repeat-part">▶ Écouter deux fois</button>${practicePager('Groupe', units.length)}`;
      break;
    case 'reorder':
      body = `<div class="practice-reorder-layout">
        <div><div data-order-board>${practiceOrderBoard(unit)}</div>${practicePager('Proposition', units.length)}</div>
        <aside class="practice-reorder-progress" aria-label="Mon texte reconstitué">
          <h3>Mon texte reconstitué</h3>
          <p data-reorder-progress aria-live="polite">${esc(practiceCompletedText(clauses, d.reorderCompleted) || 'Les propositions apparaissent ici quand tu les réussis.')}</p>
        </aside>
      </div>`;
      break;
    case 'dictation':
    case 'type-initials':
      body = `${mode === 'dictation' ? '<button data-listen-clause>▶ Écouter la proposition</button>' : initials(unit)}
        <form data-practice-typing><label class="field-label" for="practice-response">Ma réponse</label>
          <textarea id="practice-response" name="response" rows="2" lang="fr" autocomplete="off" spellcheck="false" required></textarea>
          <button type="submit">Vérifier</button><div class="practice-feedback" role="status"></div>
        </form>${practicePager('Proposition', units.length)}`;
      break;
    case 'initials':
    case 'chunk-first':
      body = practiceCueGrid(chunks, 'Groupes', mode === 'initials' ? initials : first);
      break;
    case 'clause-initials':
    case 'clause-first':
      body = practiceCueGrid(clauses, 'Propositions', mode === 'clause-initials' ? initials : first);
      break;
    case 'clause-english':
      body = practiceEnglish(unit) + practicePager('Proposition', units.length);
      break;
    case 'clause-keyword':
      body = practiceCueGrid(clauses, 'Propositions', (clause, index) => esc(practiceKeyword(clause, index, clauses.length)));
      break;
    case 'solo':
      body = `${revealMarkup()}<label class="check"><input type="checkbox" data-memorised ${d.memorised ? 'checked' : ''}> Je peux répondre sans texte ni audio.</label>`;
      break;
  }

  return `<section class="simple-card card" data-practice-card>
    ${simpleHeading()}
    <div class="actions"><button data-action="listen-question">▶ Écouter la question</button></div>
    <p class="muted practice-stage-count">Étape ${step + 1} / ${PRACTICE_STAGES.length}</p>
    <p id="practice-instruction" tabindex="-1">${PRACTICE_INSTRUCTIONS[mode]}</p>
    ${body}
    <div class="actions practice-controls">
      ${step > 0 ? `<button data-mode="${PRACTICE_STAGES[step - 1]}">Plus d’aide</button>` : ''}
      ${mode === 'solo' ? `<button class="primary" data-mode="select">${YEAR_TEN ? 'Revenir à mes réponses' : 'Revenir à mes questions'}</button>` :
        `<button class="primary" data-mode="${PRACTICE_STAGES[step + 1]}">Moins d’aide →</button>`}
    </div>
    ${mode === 'clause-keyword' ? `<details class="simple-details"><summary>Ajuster mes mots clés</summary>
      <label class="field-label" for="practice-keywords">Mes mots clés</label>
      <p class="muted">Écris un seul mot par ligne, dans l’ordre des propositions (${clauses.length} en tout).</p>
      <textarea id="practice-keywords" data-draft="cues" rows="3">${esc(d.cues)}</textarea>
      <div class="actions"><button data-action="apply-keywords">Appliquer</button></div>
    </details>` : ''}
  </section>`;
}
```

## `dist/y12-simple.js`

```javascript
const PILOT_QUESTION = 101;

function resumeQuestion(id) {
  current = id;
  const d = draft();
  const saved = id === PILOT_QUESTION ? d.pilotStep : d.practiceStep;
  if (YEAR_TEN) {
    const next = mode === 'edit' ? 'edit' : isRehearsalMode(saved) ? saved : 'repeat';
    setMode(next, true);
    return;
  }
  const savedStep = saved === 'cues' ? 'clause-keyword' : saved;
  const allowed = id === PILOT_QUESTION ? ['edit', 'review', ...PRACTICE_STAGES] : PRACTICE_STAGES;
  setMode(allowed.includes(savedStep) ? savedStep : id === PILOT_QUESTION && d.revision.trim() ? 'review' : 'edit', true);
}

function questionProgress(id) {
  const d = draft(id);
  if (d.memorised) return 'Prêt(e) sans texte';
  if (d.revision.trim() && PRACTICE_STAGES.includes(id === PILOT_QUESTION ? d.pilotStep : d.practiceStep)) return 'Entraînement en cours';
  if (d.revision.trim()) return 'Version retravaillée';
  return d.answer.trim() ? 'Brouillon enregistré' : 'À préparer';
}

function questionListButton(id) {
  return `<button class="question-link" data-core="${id}">
    <span><small>${esc(questionLabel(id))}</small><strong>${esc(question(id).text)}</strong></span>
    <span class="question-progress">${questionProgress(id)} <span aria-hidden="true">→</span></span>
  </button>`;
}

function questionList() {
  const choices = choiceIds();
  return `<section class="simple-card card">
    <h2>Mes questions</h2>
    <h3>Questions communes</h3>
    <div class="question-links">${CORE_IDS.map(questionListButton).join('')}</div>
    ${choices.length ? `<h3 class="section-title">Mes choix</h3><div class="question-links">${choices.map(questionListButton).join('')}</div>` : ''}
    <details id="choose-questions" class="simple-details"${chooserOpen?' open':''}>
      <summary>${choices.length===5?'Modifier mes cinq choix':'Choisir mes cinq questions'} · ${choices.length}/5</summary>
      <div class="bank-head"><input type="text" id="search" placeholder="Rechercher une question ou un numéro" aria-label="Rechercher une question" value="${esc(search)}"></div>
      <div class="bank" id="bank">${bankItems()}</div>
    </details>
    <div class="actions">${answered().length ? '<button class="primary" data-mode="random">Réviser mes questions</button>' : ''}</div>
    <details class="simple-details"><summary>Imprimer mes réponses</summary>
      <label class="field-label" for="student-name">Prénom / nom</label>
      <input type="text" id="student-name" data-name value="${esc(state.name)}">
      <div class="actions"><button data-action="print">Imprimer</button></div>
    </details>
  </section>`;
}

function simpleToolbar() {
  if (mode === 'select') return '<span class="status" id="save-status">Enregistré sur cet appareil</span>';
  if (mode === 'random') return '<button data-mode="select">← Mes questions</button>';
  const step = isRehearsalMode(mode) ? 'repeat' : mode;
  const tabs = YEAR_TEN ? [['edit',gcseText('1. Écrire','1. Escribir')],['repeat',gcseText('2. S’entraîner','2. Practicar')]]
    : [['edit','1. Écrire'],['review','2. Améliorer'],['repeat','3. S’entraîner']];
  return `${YEAR_TEN ? '' : '<button data-mode="select">← Mes questions</button>'}
    <div class="simple-steps" aria-label="${gcseText('Étapes','Etapas')}">
      ${tabs.map(([id,label]) =>
        `<button data-mode="${id}"${step===id?' class="active" aria-current="step"':''}>${label}</button>`).join('')}
    </div>
    <span class="status" id="save-status">${gcseText('Enregistré sur cet appareil','Guardado en este dispositivo')}</span>`;
}

function simpleHeading() {
  const q = question();
  const topics = YEAR_TEN && (current === Y10_FAMILY || current === Y10_FRIENDSHIP) ? `<div class="actions" role="group" aria-label="Choisir le sujet de la question ${q.core}">
    <button data-y10-topic="${Y10_FAMILY}" aria-pressed="${current === Y10_FAMILY}">La famille</button>
    <button data-y10-topic="${Y10_FRIENDSHIP}" aria-pressed="${current === Y10_FRIENDSHIP}">L’amitié</button>
  </div>` : '';
  return `<span class="badge">${esc(questionLabel())}</span><h2>${esc(q.text)}</h2>${topics}`;
}

function yearTenWriting() {
  const d = draft();
  return `<div class="y10-writing"><section class="card">
    ${simpleHeading()}
    ${current === Y10_TIME ? yearTenSiGuide() : ''}
    <label class="field-label" for="answer">${gcseText('Ma réponse','Mi respuesta')}</label>
    <textarea id="answer" class="answer simple-answer" data-draft="answer" placeholder="${gcseText('Écris ta réponse en français.','Escribe tu respuesta en español.')}">${esc(d.answer)}</textarea>
    <div class="word-count" id="word-count">${wordCount(d.answer)} ${gcseText('mots','palabras')}</div>
    <div class="actions"><button class="primary" data-mode="repeat">${gcseText('M’entraîner','Practicar')} →</button></div>
  </section><div>${yearTenLevelUp()}${yearTenFiche()}</div></div>`;
}

function simpleDraft() {
  const d = draft();
  return `<section class="simple-card card">
    ${simpleHeading()}
    ${commonFiche()}
    <label class="field-label" for="answer">Mon premier brouillon</label>
    <textarea id="answer" class="answer simple-answer" data-draft="answer" placeholder="Réponds à la question avec tes propres idées.">${esc(d.answer)}</textarea>
    <div class="word-count" id="word-count">${wordCount(d.answer)} mots</div>
    <div class="actions"><button class="primary" data-mode="review">Améliorer ma réponse →</button></div>
  </section>`;
}

function simpleReview() {
  const d = draft();
  const revision = draftChangedSinceRevision(d) ? d.answer : d.revision || d.answer;
  if (!d.answer.trim() && !d.revision.trim()) return `<section class="simple-card card">
    ${simpleHeading()}<p>Écris d’abord ton brouillon.</p><button class="primary" data-mode="edit">Écrire mon brouillon</button>
  </section>`;
  const evidence = reviewDraft(d.answer, reviewVocabulary());
  const examples = ['complex','idioms','repeated','past','imperfect','conditional','future','other','present','topic']
    .filter(key => evidence[key].length)
    .slice(0,3)
    .map(key => ({label:REVIEW_CARDS.find(card => card[0]===key)[1], ...evidence[key][0]}));
  return `<section class="simple-card card">
    ${simpleHeading()}
    <div class="quick-review">
      <section><h3>Langue</h3>
        <p>Vérifie les pistes repérées dans leur phrase.</p>
        ${examples.length ? `<ul>${examples.map(item => `<li><strong>${esc(item.label)}</strong> · « ${esc(item.quote)} »${item.detail ? ` <small>(${esc(item.detail)})</small>` : ''}</li>`).join('')}</ul>` : '<p>Relis tes verbes, tes accords et le choix de tes mots.</p>'}
      </section>
      <section><h3>Message</h3>${checks.filter(([key])=>['content','example'].includes(key)).map(([key,label])=>`
        <label class="check"><input type="checkbox" data-check="${key}" ${d.checks[key]?'checked':''}>${esc(label)}</label>`).join('')}</section>
    </div>
    <details class="simple-details"><summary>Voir le détail</summary>${reviewEvidenceCards(evidence,d)}</details>
    <label class="field-label" for="targets">Mes deux priorités</label>
    <textarea id="targets" data-draft="targets" rows="2" placeholder="1. …&#10;2. …">${esc(d.targets)}</textarea>
    <details class="simple-details"><summary>Voir mon brouillon</summary><div class="draft-excerpt">${esc(d.answer)}</div>
      ${d.answer.trim() && revision !== d.answer ? '<button data-action="copy-draft">Repartir de mon brouillon</button>' : ''}
    </details>
    <label class="field-label" for="revision">Ma réponse retravaillée</label>
    <textarea id="revision" class="answer simple-answer" data-draft="revision">${esc(revision)}</textarea>
    <div class="word-count" id="word-count">${wordCount(revision)} mots</div>
    <div class="actions"><button class="primary" data-mode="repeat">M’entraîner →</button></div>
  </section>`;
}
```

## `dist/y12-styles-support.js`

```javascript
const STYLES_SUPPORT = {
  "1": [
    [
      "Distinction",
      "prendre soin de soi sans aller jusqu’à…",
      "les normes de beauté",
      "to look after yourself without going as far as…",
      "beauty standards"
    ],
    [
      "Concession",
      "si séduisant que soit le résultat, …",
      "le regard des autres",
      "however appealing the result is, …",
      "other people’s judgement"
    ],
    [
      "Expression",
      "se sentir bien dans sa peau sans…",
      "l’estime de soi",
      "to feel comfortable in your own skin without…",
      "self-esteem"
    ]
  ],
  "2": [
    [
      "Description",
      "un corps présenté comme étant…",
      "une silhouette",
      "a body portrayed as being…",
      "a figure"
    ],
    [
      "Contraste",
      "là où l’on valorise… chez les hommes, …",
      "la minceur",
      "where… is valued in men, …",
      "slimness"
    ],
    [
      "Nuance",
      "des images retouchées qui donnent l’impression de…",
      "la musculature",
      "edited images that give the impression of…",
      "muscular build"
    ]
  ],
  "3": [
    [
      "Mécanisme",
      "à force de se comparer à…, on risque de…",
      "un filtre",
      "by constantly comparing yourself to…, you risk…",
      "a filter"
    ],
    [
      "Nuance",
      "difficile de parler d’obsession lorsque…",
      "la pression sociale",
      "hard to call it an obsession when…",
      "social pressure"
    ],
    [
      "Indice",
      "cela se remarque notamment quand…",
      "une image idéalisée",
      "you notice it especially when…",
      "an idealised image"
    ]
  ],
  "4": [
    [
      "Représentation",
      "on montre souvent les femmes dans le rôle de…",
      "une publicité sexiste",
      "women are often shown in the role of…",
      "a sexist advert"
    ],
    [
      "Exemple",
      "une publicité où l’on attend d’une femme qu’elle…",
      "une injonction",
      "an advert where a woman is expected to…",
      "a demand placed on someone"
    ],
    [
      "Évolution",
      "certaines campagnes remettent en cause…",
      "la répartition des rôles",
      "some campaigns challenge…",
      "the division of roles"
    ]
  ],
  "5": [
    [
      "Réaction",
      "il m’arrive de me demander si je devrais…",
      "la comparaison",
      "I sometimes wonder whether I should…",
      "comparison"
    ],
    [
      "Recul",
      "quand je remarque le procédé, j’arrive à…",
      "un sentiment d’insécurité",
      "when I spot the technique, I manage to…",
      "a feeling of insecurity"
    ],
    [
      "Expression",
      "ne pas me laisser dicter… par une publicité",
      "l’image de soi",
      "to refuse to let an advert dictate…",
      "self-image"
    ]
  ],
  "6": [
    [
      "Représentation",
      "un homme mis en scène comme s’il devait…",
      "la virilité",
      "a man portrayed as if he had to…",
      "manliness"
    ],
    [
      "Attente",
      "on s’attend à ce qu’il paraisse…",
      "la retenue émotionnelle",
      "he’s expected to seem…",
      "holding back emotions"
    ],
    [
      "Contrepoint",
      "des campagnes qui s’éloignent du cliché de…",
      "un modèle masculin",
      "campaigns that move away from the cliché of…",
      "a male role model"
    ]
  ],
  "7": [
    [
      "Effet",
      "cela peut me pousser à cacher… de peur de…",
      "la peur du jugement",
      "that can push me to hide… for fear of…",
      "fear of judgement"
    ],
    [
      "Passé composé",
      "j’ai déjà ressenti cette pression lorsque…",
      "la vulnérabilité",
      "I’ve felt this pressure before when…",
      "vulnerability"
    ],
    [
      "Nuance",
      "sur ce point, je me reconnais peu dans…",
      "une attente implicite",
      "on this point, I don’t see much of myself in…",
      "an unspoken expectation"
    ]
  ],
  "8": [
    [
      "Cause",
      "une pratique devenue plus visible grâce à…",
      "un tatouage",
      "a practice made more visible by…",
      "a tattoo"
    ],
    [
      "Motif",
      "une façon de marquer… ou de montrer…",
      "un piercing",
      "a way to mark… or show…",
      "a piercing"
    ],
    [
      "Expression",
      "se démarquer tout en appartenant à…",
      "un signe distinctif",
      "to stand out while belonging to…",
      "a distinguishing feature"
    ]
  ],
  "9": [
    [
      "Distinction",
      "faire la différence entre reconstruire… et modifier…",
      "une intervention",
      "to distinguish between rebuilding… and changing…",
      "a procedure"
    ],
    [
      "Condition",
      "à condition que la décision vienne de…",
      "le consentement",
      "provided the decision comes from…",
      "consent"
    ],
    [
      "Réserve",
      "je serais plus réservé(e) si la demande venait de…",
      "la pression de l’entourage",
      "I’d have more reservations if the request came from…",
      "pressure from people around you"
    ]
  ],
  "10": [
    [
      "But",
      "pour que chacun puisse commencer la journée avec…",
      "un petit déjeuner équilibré",
      "so that everyone can start the day with…",
      "a balanced breakfast"
    ],
    [
      "Choix",
      "en le proposant à tous, on éviterait de…",
      "la stigmatisation",
      "by offering it to everyone, we’d avoid…",
      "stigmatisation"
    ],
    [
      "Faisabilité",
      "encore faudrait-il prévoir…",
      "le budget de la cantine",
      "we’d still need to plan for…",
      "the canteen budget"
    ]
  ],
  "11": [
    [
      "Observation",
      "chez nous, les restes finissent…",
      "les restes alimentaires",
      "at our school, leftovers end up…",
      "food leftovers"
    ],
    [
      "Prévention",
      "adapter les portions en fonction de…",
      "le gaspillage alimentaire",
      "to adjust portions according to…",
      "food waste"
    ],
    [
      "Alternative",
      "avant de jeter les surplus, on pourrait envisager…",
      "une portion",
      "before throwing surplus food away, we could consider…",
      "a serving"
    ]
  ],
  "12": [
    [
      "Avantage",
      "indiquer les calories pourrait aider à…",
      "l’affichage nutritionnel",
      "displaying calories might help with…",
      "nutrition labelling"
    ],
    [
      "Limite",
      "un chiffre à lui seul ne permet pas de savoir…",
      "la valeur nutritionnelle",
      "one number alone can’t tell you…",
      "nutritional value"
    ],
    [
      "Alternative",
      "je préférerais une information qui explique…",
      "la composition d’un plat",
      "I’d prefer information that explains…",
      "what goes into a dish"
    ]
  ],
  "13": [
    [
      "Habitude",
      "le repas peut être vu comme un moment pour…",
      "la convivialité",
      "a meal can be seen as a time to…",
      "a warm, sociable atmosphere"
    ],
    [
      "Illustration",
      "cela se voit notamment dans la place de…",
      "un repas partagé",
      "this shows especially in the role of…",
      "a shared meal"
    ],
    [
      "Nuance",
      "éviter de tirer des conclusions à partir de…",
      "le rythme des repas",
      "to avoid drawing conclusions from…",
      "meal routines"
    ]
  ],
  "14": [
    [
      "Description",
      "un plat à base de… que l’on sert surtout…",
      "une spécialité locale",
      "a dish made with… usually served…",
      "a local speciality"
    ],
    [
      "Transmission",
      "j’aimerais apprendre à le préparer avec…",
      "une recette de famille",
      "I’d like to learn how to make it with…",
      "a family recipe"
    ],
    [
      "Réserve",
      "même si je n’en cuisine pas souvent, …",
      "un ingrédient du terroir",
      "even if I don’t cook it often, …",
      "a locally produced ingredient"
    ]
  ],
  "15": [
    [
      "Critère",
      "ce qui mériterait d’être reconnu, ce serait…",
      "le patrimoine culinaire",
      "what would deserve recognition would be…",
      "culinary heritage"
    ],
    [
      "Exemple",
      "une tradition qui se transmet lors de…",
      "un savoir-faire culinaire",
      "a tradition passed on during…",
      "culinary know-how"
    ],
    [
      "Nuance",
      "au-delà du plat lui-même, la manière de…",
      "un rituel à table",
      "beyond the dish itself, the way people…",
      "a dining tradition"
    ]
  ],
  "16": [
    [
      "Mécanisme",
      "plus les mêmes enseignes s’implantent, plus…",
      "une chaîne internationale",
      "the more the same chains expand, the more…",
      "an international chain"
    ],
    [
      "Contrepoint",
      "même un plat importé peut être adapté à…",
      "l’uniformisation des goûts",
      "even an imported dish can be adapted to…",
      "the growing sameness of tastes"
    ],
    [
      "Action",
      "faire vivre les recettes locales en…",
      "les habitudes alimentaires",
      "to keep local recipes alive by…",
      "eating habits"
    ]
  ],
  "17": [
    [
      "Critère",
      "à prix comparable, je privilégierais…",
      "un circuit court",
      "at a similar price, I’d prioritise…",
      "a short supply chain"
    ],
    [
      "Contrepoint",
      "la provenance compte, tout comme la façon dont…",
      "un produit de saison",
      "origin matters, as does how…",
      "seasonal produce"
    ],
    [
      "Compromis",
      "acheter local lorsque c’est possible, quitte à…",
      "le coût du transport",
      "to buy locally when possible, even if it means…",
      "transport costs"
    ]
  ],
  "18": [
    [
      "Obstacle",
      "à budget serré, difficile de consacrer plus à…",
      "le pouvoir d’achat",
      "on a tight budget, it’s hard to spend more on…",
      "purchasing power"
    ],
    [
      "Comparaison",
      "cela dépend de l’écart de prix entre… et…",
      "un surcoût",
      "it depends on the price difference between… and…",
      "an extra cost"
    ],
    [
      "Accès",
      "rendre ces produits plus abordables en…",
      "un panier de courses",
      "to make these products more affordable by…",
      "a basket of groceries"
    ]
  ],
  "19": [
    [
      "Intention",
      "acheter pour soutenir… plutôt que pour…",
      "un label équitable",
      "to buy to support… rather than to…",
      "a fair-trade label"
    ],
    [
      "Vérification",
      "encore faut-il savoir quelle part revient à…",
      "la rémunération des producteurs",
      "you still need to know what share goes to…",
      "what producers are paid"
    ],
    [
      "Expression",
      "se donner bonne conscience sans remettre en cause…",
      "les conditions de production",
      "to ease your conscience without questioning…",
      "production conditions"
    ]
  ],
  "20": [
    [
      "Position",
      "je mange… mais j’essaie de réduire…",
      "un régime végétarien",
      "I eat… but I try to cut down on…",
      "a vegetarian diet"
    ],
    [
      "Motif",
      "ce choix tient surtout à…",
      "un produit d’origine animale",
      "this choice is mainly due to…",
      "an animal-derived product"
    ],
    [
      "Évolution",
      "si je changeais d’habitudes, je commencerais par…",
      "une alternative végétale",
      "if I changed my habits, I’d start by…",
      "a plant-based alternative"
    ]
  ],
  "21": [
    [
      "Motifs",
      "les motivations vont de… à…",
      "le bien-être animal",
      "reasons range from… to…",
      "animal welfare"
    ],
    [
      "Événement",
      "il suffit parfois d’une prise de conscience pour…",
      "une conviction éthique",
      "sometimes it just takes a realisation to…",
      "an ethical belief"
    ],
    [
      "Progression",
      "commencer par supprimer… avant de renoncer à…",
      "l’impact environnemental",
      "to start by cutting out… before giving up…",
      "environmental impact"
    ]
  ],
  "22": [
    [
      "Distinction",
      "on peut faire un choix alimentaire sans vouloir…",
      "un accessoire en cuir",
      "you can make a dietary choice without wanting to…",
      "a leather accessory"
    ],
    [
      "Cohérence",
      "si sa priorité est…, je comprendrais qu’il ou elle…",
      "la cohérence",
      "if their priority is…, I’d understand why they…",
      "consistency"
    ],
    [
      "Conseil",
      "je lui demanderais d’abord ce qui motive…",
      "une matière de substitution",
      "I’d first ask them what motivates…",
      "an alternative material"
    ]
  ],
  "23": [
    [
      "Proposition",
      "instaurer une journée sans viande afin de…",
      "un menu sans viande",
      "to introduce a meat-free day in order to…",
      "a meat-free menu"
    ],
    [
      "Condition",
      "à condition que le plat proposé soit…",
      "les légumineuses",
      "provided the dish on offer is…",
      "pulses"
    ],
    [
      "Contrepoint",
      "mieux accepté si les élèves peuvent…",
      "la variété des menus",
      "better received if students can…",
      "menu variety"
    ]
  ],
  "24": [
    [
      "Conditionnel",
      "je goûterais volontiers si on me les servait…",
      "un insecte comestible",
      "I’d happily try them if they were served…",
      "an edible insect"
    ],
    [
      "Réserve",
      "ce qui me freinerait serait plutôt…",
      "le dégoût",
      "what would put me off would be…",
      "disgust"
    ],
    [
      "Nuance",
      "entre goûter une fois et en manger régulièrement, …",
      "une habitude culturelle",
      "between trying them once and eating them regularly, …",
      "a cultural habit"
    ]
  ],
  "25": [
    [
      "Mécanisme",
      "à force de voir les mêmes tenues sur…, …",
      "l’effet de groupe",
      "from seeing the same outfits on… over and over, …",
      "the group effect"
    ],
    [
      "Motif",
      "on cherche parfois à passer inaperçu en…",
      "un code vestimentaire",
      "sometimes you try to blend in by…",
      "a dress code"
    ],
    [
      "Nuance",
      "semblables au premier regard, mais…",
      "une tendance",
      "similar at first glance, but…",
      "a trend"
    ]
  ],
  "26": [
    [
      "Définition",
      "pour moi, être à la mode ne se limite pas à…",
      "une pièce tendance",
      "for me, being fashionable goes beyond…",
      "a trendy item"
    ],
    [
      "Critère",
      "ce qui fait qu’une tenue paraît actuelle, c’est…",
      "un style personnel",
      "what makes an outfit look current is…",
      "a personal style"
    ],
    [
      "Expression",
      "mettre une tendance à sa sauce en…",
      "une touche personnelle",
      "to put your own spin on a trend by…",
      "a personal touch"
    ]
  ],
  "27": [
    [
      "Origine",
      "une tendance peut naître dans… avant de…",
      "la mode de rue",
      "a trend can emerge in… before…",
      "street fashion"
    ],
    [
      "Circulation",
      "reprise par… puis diffusée sur…",
      "un défilé",
      "picked up by… then spread on…",
      "a runway show"
    ],
    [
      "Retour",
      "des styles que l’on croyait dépassés peuvent…",
      "un retour en vogue",
      "styles people thought were outdated can…",
      "a comeback"
    ]
  ],
  "28": [
    [
      "Influence",
      "je donnerais plus de poids à… qu’à…",
      "un créateur / une créatrice",
      "I’d give more weight to… than to…",
      "a designer"
    ],
    [
      "Relais",
      "une idée lancée par… puis reprise par…",
      "un influenceur / une influenceuse",
      "an idea started by… then picked up by…",
      "an influencer"
    ],
    [
      "Critère",
      "l’influence se mesure aussi à la capacité de…",
      "la visibilité",
      "influence also depends on being able to…",
      "visibility"
    ]
  ],
  "29": [
    [
      "Fonction",
      "une manière de montrer qui l’on est sans…",
      "l’expression de soi",
      "a way to show who you are without…",
      "self-expression"
    ],
    [
      "Variation",
      "elle prend plus d’importance chez ceux qui…",
      "un groupe de pairs",
      "it matters more to those who…",
      "a peer group"
    ],
    [
      "Nuance",
      "un moyen de s’intégrer, quitte à…",
      "le sentiment d’appartenance",
      "a way to fit in, even if it means…",
      "a sense of belonging"
    ]
  ],
  "30": [
    [
      "Limite",
      "l’influence devient excessive à partir du moment où…",
      "la pression des pairs",
      "influence becomes excessive once…",
      "peer pressure"
    ],
    [
      "Contrepoint",
      "s’inspirer de quelqu’un sans forcément…",
      "le jugement",
      "to take inspiration from someone without necessarily…",
      "judgement"
    ],
    [
      "Expression",
      "oser aller à contre-courant lorsque…",
      "le besoin d’approbation",
      "to dare to go against the flow when…",
      "the need for approval"
    ]
  ],
  "31": [
    [
      "Mécanisme",
      "lorsqu’une tendance se transforme en obligation de…",
      "le conformisme",
      "when a trend turns into an obligation to…",
      "conformity"
    ],
    [
      "Conséquence",
      "au point de se sentir exclu(e) si…",
      "l’exclusion",
      "to the point of feeling excluded if…",
      "exclusion"
    ],
    [
      "Résistance",
      "reprendre la main sur ses choix en…",
      "une norme imposée",
      "to regain control of your choices by…",
      "an imposed standard"
    ]
  ],
  "32": [
    [
      "Habitude",
      "je pioche dans les tendances sans…",
      "une tenue décontractée",
      "I pick things I like from trends without…",
      "a casual outfit"
    ],
    [
      "Description",
      "je porte surtout des pièces que je peux…",
      "une coupe ample",
      "I mainly wear pieces I can…",
      "a loose fit"
    ],
    [
      "Contraste",
      "plutôt… au quotidien, mais… pour…",
      "une tenue habillée",
      "more… day to day, but… for…",
      "a dressy outfit"
    ]
  ],
  "33": [
    [
      "Priorité",
      "je regarde d’abord…, surtout si…",
      "le rapport qualité-prix",
      "I look at… first, especially if…",
      "value for money"
    ],
    [
      "Arbitrage",
      "je serais prêt(e) à payer plus pour un vêtement qui…",
      "la provenance",
      "I’d pay more for a garment that…",
      "where something comes from"
    ],
    [
      "Expression",
      "ne pas acheter les yeux fermés sous prétexte que…",
      "la durabilité",
      "to avoid buying blindly just because…",
      "durability"
    ]
  ],
  "34": [
    [
      "Habitude",
      "quand je ne porte plus un vêtement, je le…",
      "un don",
      "when I no longer wear something, I… it",
      "a donation"
    ],
    [
      "Alternative",
      "plutôt que de le jeter, on peut lui donner…",
      "la revente",
      "instead of throwing it away, you can give it…",
      "reselling"
    ],
    [
      "Expression",
      "donner une seconde vie à… en le transformant en…",
      "la retouche",
      "to give… a second life by turning it into…",
      "alteration"
    ]
  ],
  "35": [
    [
      "Mécanisme",
      "renouveler les collections si vite incite à…",
      "la mode jetable",
      "refreshing collections so quickly encourages…",
      "throwaway fashion"
    ],
    [
      "Concession",
      "aussi tentants que soient les prix, …",
      "un achat impulsif",
      "however tempting the prices are, …",
      "an impulse buy"
    ],
    [
      "Alternative",
      "faire durer ce qu’on possède en…",
      "la seconde main",
      "to make what you own last by…",
      "second-hand goods"
    ]
  ],
  "36": [
    [
      "Décision",
      "avant d’acheter chez une marque mise en cause, …",
      "le travail des enfants",
      "before buying from a brand facing allegations, …",
      "child labour"
    ],
    [
      "Responsabilité",
      "demander aux marques de rendre compte de…",
      "la chaîne d’approvisionnement",
      "to ask brands to account for…",
      "the supply chain"
    ],
    [
      "Subjonctif",
      "pour que les fournisseurs respectent…, il faudrait…",
      "un contrôle indépendant",
      "for suppliers to comply with…, we’d need…",
      "an independent inspection"
    ]
  ],
  "37": [
    [
      "Appréciation",
      "j’y vois autant un travail d’artiste qu’un…",
      "une création sur mesure",
      "I see as much artistic work in it as…",
      "a made-to-measure design"
    ],
    [
      "Réserve",
      "admirer le travail sans avoir envie de…",
      "une pièce unique",
      "to admire the work without wanting to…",
      "a one-off piece"
    ],
    [
      "Critère",
      "ce qui justifie le prix, à mes yeux, c’est…",
      "les finitions",
      "what justifies the price, in my view, is…",
      "the finishing details"
    ]
  ],
  "38": [
    [
      "Transmission",
      "un métier dont les techniques se transmettent…",
      "un atelier de couture",
      "a craft whose techniques are passed on…",
      "a dressmaking workshop"
    ],
    [
      "Histoire",
      "le rôle qu’ont joué… dans la réputation de…",
      "une maison de couture",
      "the role… played in the reputation of…",
      "a fashion house"
    ],
    [
      "Continuité",
      "faire évoluer un savoir-faire sans perdre…",
      "les métiers d’art",
      "to develop a craft without losing…",
      "traditional skilled crafts"
    ]
  ],
  "39": [
    [
      "Hypothèse",
      "si j’arrivais habillé(e) en…, mes parents…",
      "un changement radical",
      "if I turned up dressed in…, my parents would…",
      "a dramatic change"
    ],
    [
      "Réaction",
      "ils seraient surtout surpris que je…",
      "une remarque",
      "they’d mainly be surprised that I…",
      "a comment"
    ],
    [
      "Nuance",
      "passé le premier étonnement, ils finiraient par…",
      "la liberté de s’habiller",
      "after the initial surprise, they’d eventually…",
      "freedom to choose what to wear"
    ]
  ],
  "40": [
    [
      "Critère",
      "cela dépend de la raison pour laquelle…",
      "une tenue appropriée",
      "it depends on the reason why…",
      "appropriate clothing"
    ],
    [
      "Distinction",
      "une question de sécurité plutôt que de…",
      "un règlement intérieur",
      "a matter of safety rather than of…",
      "school rules"
    ],
    [
      "Équité",
      "appliquer la même règle à… et à…",
      "un traitement équitable",
      "to apply the same rule to… and…",
      "fair treatment"
    ]
  ],
  "41": [
    [
      "But",
      "atténuer les différences visibles entre…",
      "un uniforme scolaire",
      "to reduce visible differences between…",
      "a school uniform"
    ],
    [
      "Contrepoint",
      "en imposant une tenue, l’école limite aussi…",
      "la liberté d’expression",
      "by requiring a uniform, the school also limits…",
      "freedom of expression"
    ],
    [
      "Compromis",
      "je serais pour un uniforme à condition qu’il soit…",
      "le coût pour les familles",
      "I’d support a uniform provided it was…",
      "the cost to families"
    ]
  ],
  "42": [
    [
      "Définition",
      "garder surtout ce dont on se sert ou ce à quoi…",
      "l’essentiel",
      "to keep mainly what you use or what you…",
      "the essentials"
    ],
    [
      "Distinction",
      "réduire ses achats par choix plutôt que par…",
      "la sobriété",
      "to buy less by choice rather than out of…",
      "simplicity"
    ],
    [
      "Expression",
      "se recentrer sur ce qui compte en…",
      "un besoin réel",
      "to refocus on what matters by…",
      "a genuine need"
    ]
  ],
  "43": [
    [
      "Nuance",
      "posséder… peut apporter de la sécurité sans…",
      "le confort matériel",
      "owning… can bring security without…",
      "material comfort"
    ],
    [
      "Préférence",
      "je serais plus heureux / heureuse si je pouvais…",
      "le temps pour soi",
      "I’d be happier if I could…",
      "time for yourself"
    ],
    [
      "Expression",
      "mettre son énergie dans… plutôt que dans…",
      "l’épanouissement",
      "to put your energy into… rather than…",
      "fulfilment"
    ]
  ],
  "44": [
    [
      "Premier pas",
      "je commencerais par faire le tri dans…",
      "le désencombrement",
      "I’d start by sorting through…",
      "decluttering"
    ],
    [
      "Habitude",
      "attendre quelques jours avant d’acheter…",
      "un achat réfléchi",
      "to wait a few days before buying…",
      "a considered purchase"
    ],
    [
      "Progression",
      "m’habituer à emprunter ou à réparer…",
      "la réparation",
      "to get used to borrowing or repairing…",
      "repair"
    ]
  ],
  "45": [
    [
      "Revenu",
      "quand je reçois de l’argent, j’en mets… de côté",
      "l’argent de poche",
      "when I get money, I set… aside",
      "pocket money"
    ],
    [
      "Dépenses",
      "la plus grande part de mon budget va à…",
      "un petit boulot",
      "the largest part of my budget goes on…",
      "a casual job"
    ],
    [
      "Interprétation",
      "ma façon de dépenser montre que j’accorde…",
      "une dépense",
      "my spending shows that I give…",
      "an expense"
    ]
  ],
  "46": [
    [
      "Définition",
      "je parlerais de réussite quand on arrive à…",
      "un objectif personnel",
      "I’d call it success when you manage to…",
      "a personal goal"
    ],
    [
      "Contraste",
      "davantage lié à… qu’à ce que les autres…",
      "la réussite professionnelle",
      "more to do with… than with what others…",
      "career success"
    ],
    [
      "Bilan",
      "pouvoir regarder en arrière sans regretter de…",
      "un sentiment d’accomplissement",
      "to be able to look back without regretting…",
      "a sense of achievement"
    ]
  ],
  "47": [
    [
      "Comparaison",
      "pour quelqu’un qui privilégie…, réussir serait…",
      "une priorité",
      "for someone who values…, success would be…",
      "a priority"
    ],
    [
      "Évolution",
      "ce qui paraît essentiel à vingt ans peut…",
      "une étape de la vie",
      "what seems essential at twenty may…",
      "a stage in life"
    ],
    [
      "Exemple",
      "deux parcours différents peuvent avoir en commun…",
      "une ambition",
      "two different paths can have… in common",
      "an ambition"
    ]
  ]
};
```

## `dist/y12-styles.html`

```html
<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Year 12 · Identités · Styles de vie</title><style>
:root{font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#17314d;background:#f4f7fb}*{box-sizing:border-box}body{margin:0}button,input,textarea,select{font:inherit}button{cursor:pointer;border:1px solid #c5d4e2;border-radius:10px;background:white;color:#17314d;padding:10px 13px}button:hover{border-color:#27658e;background:#edf5fc}button:disabled{cursor:default;opacity:.5}button:focus-visible,a:focus-visible,textarea:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid #347dba;outline-offset:3px}.primary,.active{background:#173d66!important;color:white!important;border-color:#173d66}.toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:16px 20px;background:white;border-bottom:1px solid #d6e0ea}.toolbar .status{margin-left:auto}.status,.muted{color:#536b80;font-size:13px}.wrap{padding:20px;max-width:1450px;margin:auto}.card{padding:22px;background:white;border:1px solid #d9e3ed;border-radius:14px;margin-bottom:16px}.card h2,.card h3{margin-top:0}.card h2{font-size:21px;line-height:1.45}.layout{display:grid;grid-template-columns:220px minmax(0,1fr);gap:16px;align-items:start}.answer-layout{display:grid;grid-template-columns:minmax(0,1fr) 285px;gap:16px;align-items:start}.sidebar{display:grid;gap:8px;position:sticky;top:12px}.sidebar button{text-align:left;line-height:1.4;font-size:13px}.sidebar small{display:block;margin-top:4px;color:#60778c}.sidebar .active small{color:#d4e1ed}textarea,input[type=text]{width:100%;border:1px solid #bccddd;border-radius:10px;padding:12px;background:#fff;line-height:1.65;color:#17314d}textarea{resize:vertical;min-height:100px}textarea.answer{min-height:340px;font-size:17px}label.field-label{display:block;font-size:14px;font-weight:650;margin:18px 0 7px}.actions{display:flex;flex-wrap:wrap;gap:8px;margin:15px 0}.bank{display:grid;gap:8px}.question-option{display:flex;gap:12px;align-items:flex-start;padding:13px;border:1px solid #d9e3ed;border-radius:10px;background:white;line-height:1.5}.question-option input{margin-top:6px;flex-shrink:0;width:18px;height:18px}.bank-head{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:15px}.bank-head input{flex:1;min-width:180px}.count{font-weight:700;color:#24597f}.sticky-actions{position:sticky;bottom:0;padding:12px;background:#f4f7fbf2;border-top:1px solid #d9e3ed;display:flex;gap:10px;align-items:center;flex-wrap:wrap}details{border-top:1px solid #d9e3ed;padding:13px 0}details:first-of-type{border-top:0}summary{font-weight:650;cursor:pointer;line-height:1.4}details p,details li{font-size:14px;line-height:1.6}details ul{padding-left:20px}.model{display:block;padding:10px;background:#edf4fa;border-radius:8px;margin:9px 0;font-size:14px;line-height:1.55}.badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#a33d4a;margin-bottom:9px}.focus{font-size:22px;line-height:1.7;background:#edf5fc;padding:22px;border-radius:12px;min-height:110px;white-space:pre-wrap;overflow-wrap:anywhere}.initials{white-space:pre-wrap;line-height:2.2;font-size:22px}.initial-word{font-size:22px;border:0;border-bottom:2px solid #aec5d9;border-radius:4px;padding:0 3px;margin:0 1px;min-width:22px;background:#edf5fc}.sentence{padding:14px;border:1px solid #d9e3ed;border-radius:10px;margin:12px 0;white-space:pre-wrap;overflow-wrap:anywhere}.sentence-tools{display:flex;gap:8px;margin-top:8px}.sentence-tools button{font-size:12px;padding:7px 9px}.check{display:flex;gap:9px;font-size:14px;line-height:1.5;margin:10px 0}.check input{flex-shrink:0;margin-top:5px}a{color:#1d6394}.reveal{white-space:pre-wrap;line-height:1.75;background:#fff8e8;padding:18px;border-radius:10px;margin-top:15px}.empty{padding:25px;background:#edf4fa;border-radius:10px;line-height:1.6}.hidden{display:none!important}.print-only{display:none}.progress{height:6px;background:#e1ebf4;border-radius:8px;overflow:hidden;margin:14px 0}.progress>span{height:100%;background:#3777a8;display:block}#notice{padding:0 20px;color:#a33d4a;font-size:14px}.word-count{text-align:right;font-size:12px;color:#60778c;margin-top:5px}.help .card{padding:17px}.self{margin-top:20px}h3{font-size:16px}p{line-height:1.6}.section-title{margin:22px 0 12px;font-size:17px}
@media(max-width:900px){.answer-layout{grid-template-columns:1fr}.help{display:grid;grid-template-columns:1fr}.layout{grid-template-columns:195px minmax(0,1fr)}}@media(max-width:650px){.wrap{padding:12px}.layout{grid-template-columns:130px minmax(0,1fr);gap:10px}.sidebar button{font-size:12px;padding:9px}.card{padding:14px}.card h2{font-size:18px}.focus{font-size:18px;padding:14px}.toolbar{padding:12px}.toolbar button{font-size:12px;padding:9px}.toolbar .status{width:100%;margin:0}.bank-head{display:block}.bank-head input{margin-top:10px}.answer-layout{display:block}.initial-word{font-size:20px}.card textarea.answer{font-size:15px}}
@media print{body{background:white;color:black}body>*:not(#printArea){display:none!important}#printArea{display:block!important;font-family:Arial,sans-serif;padding:15px}#printArea article{break-inside:avoid;margin:22px 0}#printArea .printed-answer{white-space:pre-wrap;line-height:1.6}#printArea h1{font-size:22px}#printArea h2{font-size:16px}#printArea .comments{margin-top:20px;border-bottom:1px solid #aaa;min-height:50px;font-size:13px}}

.toolbar{display:block}.step-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.step-row+.step-row{margin-top:10px}.practice-row>strong{font-size:13px;margin-right:4px}.draft-excerpt{white-space:pre-wrap;line-height:1.6;background:#f4f7fb;border:1px solid #dce6ee;border-radius:10px;padding:14px;margin:12px 0;overflow-wrap:anywhere}.review-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:12px}.review-card{border:1px solid #dce6ee;border-radius:12px;padding:15px;min-width:0}.review-card h3{margin:0 0 8px}.evidence{list-style:none;padding:0;display:grid;gap:7px}.evidence button{text-align:left;max-width:100%;overflow-wrap:anywhere;font-size:13px;padding:5px 8px}.evidence small{display:block;margin:4px 0;color:#53687b}.model small{color:#53687b}

.simple-toolbar{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.simple-toolbar .status{margin-left:auto}.simple-toolbar:has(> .status:only-child){padding-block:7px}
.simple-steps{display:flex;flex-wrap:wrap;gap:6px}.simple-card{max-width:760px;margin-inline:auto}
.question-links{display:grid;gap:8px}.question-link{display:flex;justify-content:space-between;align-items:center;text-align:left;gap:12px;padding:12px 14px}
.question-link small,.question-progress{font-size:12px;color:#506579}.question-link strong{display:block;font-size:15px}
.question-progress{flex-shrink:0}.simple-details{margin:12px 0}.simple-details[open]>.bank{max-height:360px;overflow:auto;padding:4px}
.simple-answer{min-height:145px}.quick-review{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.quick-review>section{border:1px solid #dce6ee;border-radius:12px;padding:13px}
.quick-review h3{margin:0}.quick-review ul{padding-left:18px;margin-bottom:0}.quick-review li+li{margin-top:6px}
.practice-controls{border-top:1px solid #dce6ee;padding-top:12px}
@media(max-width:580px){.quick-review{grid-template-columns:1fr}.question-link{align-items:flex-start;flex-direction:column;gap:4px}.simple-toolbar .status{width:100%;margin:0}}

@font-face{font-family:Fiche Sans;src:url("assets/fiche/dejavu-sans.woff") format("woff");font-weight:400;font-display:swap}
@font-face{font-family:Fiche Sans;src:url("assets/fiche/dejavu-sans-bold.woff") format("woff");font-weight:700;font-display:swap}
.oral-fiche{container-type:inline-size;overflow:hidden;margin:10px 0 15px;border:1.5px solid #d9e0e9;border-radius:13px;background:#fff;color:#162842;font:400 13px/1.2 "Fiche Sans","DejaVu Sans",sans-serif}
.oral-fiche h3{display:flex;align-items:baseline;gap:19px;margin:0;border-radius:11px;background:#e9f4f1;padding:11px 15px;font:700 15px/1.3 "Fiche Sans","DejaVu Sans",sans-serif}
.oral-fiche h3 span,.oral-fiche h4{color:#176b64}
.oral-fiche-columns{display:grid;grid-template-columns:62% 38%;padding:9px 15px;min-height:140px}
.oral-fiche h4{margin:0 0 3px;text-transform:uppercase;font-size:11px;line-height:1.25}
.oral-fiche-phrases{padding-right:14px}
.oral-fiche-vocab{border-left:1px solid #d9e0e9;padding-left:15px}
.oral-fiche-phrase{display:grid;grid-template-columns:19% 1fr;gap:8px;margin-bottom:5px}
.oral-fiche-phrase>strong{font-size:10px;color:#43546b}
.oral-fiche small{display:block;color:#526680;font-size:10.5px;line-height:1.3}
.oral-fiche-vocab>div+div{margin-top:4px}
@container(max-width:490px){
  .oral-fiche-columns{grid-template-columns:1fr}
  .oral-fiche-phrases{padding-right:0}
  .oral-fiche-vocab{border-left:0;border-top:1px solid #d9e0e9;padding:9px 0 0;margin-top:7px}
}
@container(max-width:330px){.oral-fiche-phrase{grid-template-columns:1fr;gap:1px}}
[data-practice-card]{max-width:none}
.wrap:has([data-practice-card]){max-width:none}
.practice-stage-count{margin:14px 0 0}.practice-stage-count+p{margin-top:6px}
.practice-cue-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:9px;margin:12px 0 18px;padding:0;list-style:none}
.practice-cue-grid li{display:flex;align-items:baseline;gap:9px;min-width:0;padding:9px 11px;border:1px solid #dce6ee;border-radius:10px;background:#f7fafd}
.practice-cue-grid li>.muted{font-size:12px}.practice-cue-grid .initials{font-size:inherit;line-height:1.3}
.practice-cue-grid .initial-word{padding:3px 5px;min-width:24px;margin:2px 0}
.practice-pager{align-items:center}.practice-pager .muted{min-width:110px;text-align:center}
.practice-word-bank{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin:9px 0}
.practice-picked{padding:9px;min-height:52px;border:1px solid #dce6ee;border-radius:10px;background:#f7fafd}
.practice-feedback:not(:empty){margin:10px 0;padding:9px 11px;border-radius:10px;background:#edf5fc}
.practice-feedback p{margin:5px 0 0}
[data-practice-typing] textarea{display:block;min-height:60px;margin:5px 0 9px}
[data-clause-cue]{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
[data-clause-cue] input{flex:1;min-width:min(100%,230px)}
.y10-writing{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,6fr);gap:16px;align-items:start}
.y10-level-up{padding:12px;margin-bottom:16px;border:1px solid #dfc77c;border-radius:12px;background:#fff8e4;color:#17314d;font-size:13px;line-height:1.45}
.y10-level-up h3{margin:0}
.y10-level-up img{display:block}
.y10-level-up p{margin:5px 0 9px}
.y10-level-up ul{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,185px),1fr));gap:8px;padding:0;margin:0;list-style:none}
.y10-level-up li{padding:8px 10px;border:1px solid #eadfbd;border-radius:8px;background:#fffdf7}
.y10-level-up li p{margin:4px 0 0}
.y10-level-up small{display:block;margin-top:4px;color:#495972;font-size:12px}
.y10-stretch-phrase{display:flex;flex-wrap:wrap;align-items:center;gap:3px}
.y10-stretch-phrase .vocab-key{padding:3px 6px;border-color:#d2bb77;font-size:13px;font-weight:700}
.y10-stretch-phrase .vocab-key:hover,.y10-stretch-phrase .vocab-key:focus-visible{border-color:#806621;background:#fff0c1}
.y10-subjunctive-models{display:grid;gap:6px;margin-top:8px;padding-left:8px;border-left:2px solid #d2bb77}
.y10-subjunctive-models small{margin-top:0}
[data-y10-topic][aria-pressed="true"]{border-color:#176b64;background:#e9f4f1;color:#154b46;font-weight:700}
.y10-fiche{margin:0 0 16px;font-size:13px;line-height:1.35}
.y10-fiche h3{font-size:16px}
.y10-fiche-columns{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:12px}
.y10-fiche section{padding:10px;border-radius:9px;background:#f1f6fc}
.y10-fiche section:nth-child(even){background:#f5f2fb}
.y10-fiche section:nth-child(3n){background:#edf7f2}
.y10-chunk-slot+.y10-chunk-slot{margin-top:10px}
.y10-chunk-slot h5{margin:0 0 5px;font-size:11px;color:#354f65}
.y10-fiche .y10-chunk-slot ul{display:flex;flex-wrap:wrap;gap:5px}
@media(min-width:1081px){.y10-writing>.card{position:sticky;top:12px}}
.y10-fiche h4{margin-bottom:7px}
.y10-fiche ul{padding:0;margin:0;list-style:none;display:grid;gap:6px}
.y10-fiche small{font-size:11px}
.y10-fiche .y10-connectives{background:#fcf4e8;margin:0 12px 12px}
.y10-connectives ul{display:flex;flex-wrap:wrap;gap:7px 12px}
.y10-si-guide{padding:12px;margin:0 0 15px;border:1px solid #bbdbd4;border-radius:10px;background:#edf7f4;font-size:13px;line-height:1.4}
.y10-si-guide h3{margin:0;color:#154b46;font-size:15px}
.y10-si-guide p{margin:6px 0 9px}
.y10-si-example+.y10-si-example{margin-top:8px}
.y10-si-example small{display:block;color:#354f65}
.y10-si-example mark{padding:0 2px;border-radius:3px;color:inherit}
.y10-si-if{background:#cce5fa}.y10-si-result{background:#fbe0ba}
@media(max-width:1080px){.y10-writing{grid-template-columns:1fr}}
@container(max-width:330px){.y10-fiche-columns{grid-template-columns:1fr}}
.practice-reorder-layout{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,2fr);align-items:start;gap:16px}
.practice-reorder-progress{padding:14px;border:1px solid #bbdbd4;border-radius:10px;background:#edf7f4;overflow-wrap:anywhere}
.practice-reorder-progress h3{margin:0;font-size:15px;color:#154b46}
.practice-reorder-progress p{margin:7px 0 0;line-height:1.55}
@media(max-width:900px){.practice-reorder-layout{grid-template-columns:1fr}}
.y10-sidebar{max-height:calc(100dvh - 24px);overflow:auto}
</style><link rel="stylesheet" href="writing-tools.css"><link rel="stylesheet" href="y10-rehearsal.css"><script src="writing-tools.js" data-language="page" defer></script></head><body><nav class="toolbar" id="toolbar" aria-label="Étapes"></nav><p id="notice" role="status"></p><main class="wrap" id="app"></main><div id="printArea" class="print-only"></div><script src="y12-styles-support.js"></script><script src="y12-draft-review.js"></script><script src="y12-writing.js"></script><script src="y10-conversation.js"></script><script src="spanish-igcse-questions.js"></script><script src="spanish-igcse-support.js"></script><script src="y10-wellbeing-support.js"></script><script src="y10-topic-support.js"></script><script src="y10-support.js"></script><script src="y12-simple.js"></script><script src="y12-chunks.js"></script><script src="y12-practice.js"></script><script src="y10-rehearsal.js"></script><script>
const pageParams = new URLSearchParams(window.location.search);
const spanishPractice = SPANISH_IGCSE_PRACTICE.find(section => section.id === pageParams.get('spanish'));
const studyLanguage = spanishPractice ? 'es' : 'fr';
const gcseText = (french, spanish) => spanishPractice ? spanish : french;
const YEAR_TEN = pageParams.get('year') === '10' || Boolean(spanishPractice);
const conversationTheme = spanishPractice || Y10_CONVERSATION_THEMES.find(theme => theme.id === pageParams.get('theme')) ||
  Y10_CONVERSATION_THEMES[0];
if (YEAR_TEN) {
  const courseTitle = gcseText('GCSE French', 'IGCSE Spanish');
  document.title = courseTitle + ' · ' + conversationTheme.title;
  if (spanishPractice) {
    document.documentElement.lang = studyLanguage;
    document.getElementById('toolbar').setAttribute('aria-label', 'Etapas');
  }
}
const QUESTIONS=YEAR_TEN ? [] : [{"id": 1, "text": "Certains disent qu’ « il faut souffrir pour être belle/beau. » Qu’en penses-tu ?"}, {"id": 2, "text": "Quel est l’idéal de beauté masculine/féminine présenté dans les médias ?"}, {"id": 3, "text": "Trouves-tu qu’aujourd’hui les jeunes sont obsédés par la perfection physique ?"}, {"id": 4, "text": "Quels stéréotypes la publicité véhicule-t-elle sur les femmes ?"}, {"id": 5, "text": "De quelle façon ces stéréotypes t’influencent-ils ?"}, {"id": 6, "text": "Quels stéréotypes la publicité véhicule-t-elle sur les hommes?"}, {"id": 7, "text": "De quelle façon ces stéréotypes t’influencent-ils ?"}, {"id": 8, "text": "Qu’est-ce qui explique la mode des tatouages et des piercings ?"}, {"id": 9, "text": "Selon toi, y a-t-il des cas où la chirurgie esthétique est acceptable ? Si oui, peux-tu donner des exemples ? Sinon, pourquoi pas ?"}, {"id": 10, "text": "Les cantines scolaires devraient-elles proposer un petit déjeuner gratuit pour tous les élèves ? Pourquoi (pas) ?"}, {"id": 11, "text": "Que fait-on à la cantine de la nourriture qui n’y est pas consommée ? Comment pourrait-on faire pour ne pas y gaspiller de nourriture ?"}, {"id": 12, "text": "Beaucoup de jeunes sont aujourd’hui en surpoids. Devrait-on indiquer le nombre de calories sur chaque plat ou chaque menu servi à la cafétéria de l’école ? Pourquoi (pas) ?"}, {"id": 13, "text": "Quel rapport les Français ont-ils avec la nourriture ?"}, {"id": 14, "text": "Quels sont les plats typiques de ta région / de ton pays ? Est-il important pour toi d’apprendre à les cuisiner ?"}, {"id": 15, "text": "La gastronomie française fait maintenant partie du « patrimoine de l’humanité ». D’après toi, la cuisine de ton pays mérite-t-elle aussi cette distinction ? Pourquoi (pas) ?"}, {"id": 16, "text": "Penses-tu que maintenant partout dans le monde nous mangions tous la même chose ? Comment expliquer ce phénomène ? Faut-il y résister ? Si oui, comment ?"}, {"id": 17, "text": "Faut-il acheter des produits qui viennent de son pays plutôt que ceux qui viennent de loin ? Pourquoi ?"}, {"id": 18, "text": "L’achat de produits biologiques est-il réservé aux riches ?"}, {"id": 19, "text": "Privilégier le commerce équitable, est-ce une manière facile de se donner bonne conscience ?"}, {"id": 20, "text": "Es-tu végétarien(ne) ou végétalien(ne) ? Pourquoi (pas) ?"}, {"id": 21, "text": "Pourquoi certaines personnes décident-elles de devenir végétariennes ou végétaliennes ?"}, {"id": 22, "text": "Penses-tu que quelqu’un qui est végétarien devrait porter des chaussures et un sac en cuir ? Pourquoi (pas) ? Que lui dirais-tu ?"}, {"id": 23, "text": "Certaines cantines proposent des journées sans viande. Es-tu d’accord avec cette initiative ? Pourquoi (pas) ?"}, {"id": 24, "text": "Les insectes comestibles sont riches en protéines, plus riches que la viande. Serais-tu prêt(e) à en manger ? Pourquoi (pas) ?"}, {"id": 25, "text": "Comment se fait-il que les jeunes s’habillent tous plus ou moins de la même manière ?"}, {"id": 26, "text": "Qu’est-ce qu’ « être à la mode » veut dire pour toi ?"}, {"id": 27, "text": "D’où vient la mode ?"}, {"id": 28, "text": "Qui influence le plus la mode ?"}, {"id": 29, "text": "Est-ce que la mode est importante pour les jeunes ? Pourquoi ?"}, {"id": 30, "text": "Les jeunes sont-ils trop influencés par les autres ?"}, {"id": 31, "text": "La mode exerce-t-elle une tyrannie ?"}, {"id": 32, "text": "Suis-tu la mode ? Comment définirais-tu ton style ?"}, {"id": 33, "text": "Qu’est-ce qui t’importe le plus quand tu achètes un vêtement : le coût, la marque, la provenance… ? Pourquoi ?"}, {"id": 34, "text": "Que fais-tu de tes vêtements dont tu ne sers plus ? Existe-t-il d’autres solutions que de les jeter ?"}, {"id": 35, "text": "Que penses-tu de la mode express ? Est-il vraiment nécessaire de constamment suivre la mode et de renouveler ses habits si souvent ?"}, {"id": 36, "text": "Certaines marques de vêtements ont été accusées de faire vivre leurs employés dans de mauvaises conditions ou même d’employer de jeunes enfants. Achètes-tu de vêtements de ces marques ? Que fait-on pour les empêcher d’imposer de mauvaises conditions de travail ?"}, {"id": 37, "text": "Que penses-tu de la haute couture ?"}, {"id": 38, "text": "Pourquoi la haute couture fait-elle partie des traditions françaises ?"}, {"id": 39, "text": "Comment réagiraient tes parents si tu t’habillais tout à fait différemment ?"}, {"id": 40, "text": "D’après toi, y a-t-il des vêtements qu’il convient de ne pas porter à l’école ? Si oui, lesquels et pourquoi ?"}, {"id": 41, "text": "Pourquoi certaines écoles exigent-elles le port d’un uniforme ? Es-tu favorable à ce règlement ?"}, {"id": 42, "text": "Qu’est-ce que le minimalisme ?"}, {"id": 43, "text": "Posséder une voiture, une maison… nous rend-il plus heureux / heureuse? Sinon, quel(s) style(s) de vie pourraient te rendre personnellement heureux / heureuse ?"}, {"id": 44, "text": "Que devrais-tu faire pour avoir un style de vie minimaliste ?"}, {"id": 45, "text": "Reçois-tu de l’argent de poche ? Travailles-tu pendant les vacances? Comment dépenses-tu ton argent ? Qu’est-ce que cela nous dit au sujet de ton style de vie ?"}, {"id": 46, "text": "Pour toi, qu’est-ce que réussir sa vie ?"}, {"id": 47, "text": "Penses-tu que le concept d’une vie réussie puisse changer d’une personne à l’autre ? Donne des exemples."}];
const REQUIRED=YEAR_TEN ? conversationTheme.questions : [{"id": 101, "text": "Qu’est-ce qui fait de toi la personne que tu es ?", "core": 1}, {"id": 102, "text": "Peut-on faire partie d’un groupe tout en restant soi-même ?", "core": 2}, {"id": 103, "text": "Est-ce qu’il y a eu un moment où un groupe ou une communauté a influencé ta façon de penser ou de te comporter ?", "core": 3}];const CORE_IDS=REQUIRED.map(q=>q.id);QUESTIONS.unshift(...REQUIRED);
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const STORE=YEAR_TEN ? conversationTheme.store : 'atelier-y12-styles-v1';let state={selected:[],drafts:{},name:''},mode='edit',current=CORE_IDS[0],part=0,randomOrder=[],randomIndex=0,search='';let speechToken=0,wordTokens=[];
let chooserOpen=false;
try{let saved=JSON.parse(localStorage.getItem(STORE)||'null');if(saved&&typeof saved==='object'){state.selected=Array.isArray(saved.selected)?[...new Set(saved.selected.filter(id=>QUESTIONS.some(q=>q.id===id)))].slice(0,8):[];state.drafts=saved.drafts&&typeof saved.drafts==='object'?saved.drafts:{};state.name=typeof saved.name==='string'?saved.name:'';if(YEAR_TEN)state.y10FirstQuestion=saved.y10FirstQuestion;}}catch(e){$('notice').textContent='Les données enregistrées ne sont pas disponibles. Tu peux commencer une nouvelle sélection.'}
if (YEAR_TEN && conversationTheme.id === 'y10') {
  const previous = state.drafts[Y10_FAMILY];
  if (previous?.topic === 'friendship' && !state.drafts[Y10_FRIENDSHIP]) {
    state.drafts[Y10_FRIENDSHIP] = previous;
    delete state.drafts[Y10_FAMILY];
    state.y10FirstQuestion ??= Y10_FRIENDSHIP;
  }
  if (state.y10FirstQuestion !== Y10_FRIENDSHIP) state.y10FirstQuestion = Y10_FAMILY;
}
for (const savedDraft of Object.values(state.drafts)) {
  if (savedDraft && typeof savedDraft === 'object' && typeof savedDraft.revision !== 'string') {
    savedDraft.revision = typeof savedDraft.answer === 'string' ? savedDraft.answer : '';
  }
}
if(state.selected.filter(id=>!CORE_IDS.includes(id)).length>5)$('notice').textContent='Les trois questions communes ont été ajoutées. Tes cinq premiers choix ont été conservés. Les autres réponses restent enregistrées : sélectionne leur question pour les retrouver.';state.selected=[...CORE_IDS,...state.selected.filter(id=>!CORE_IDS.includes(id)).slice(0,5)];if(!state.selected.includes(current))current=CORE_IDS[0];
function choiceIds(){return state.selected.filter(id=>!CORE_IDS.includes(id))}function questionLabel(id=current){return CORE_IDS.includes(id)?(YEAR_TEN?gcseText('Question ', 'Pregunta '):'Question commune ')+question(id).core:'Banque '+id}function toggleChoice(id,checked){if(CORE_IDS.includes(id)||!QUESTIONS.some(q=>q.id===id))return;if(checked&&!state.selected.includes(id)&&choiceIds().length<5)state.selected.push(id);if(!checked)state.selected=state.selected.filter(x=>x!==id);state.selected=[...CORE_IDS,...choiceIds().sort((a,b)=>a-b)];chooserOpen = $('choose-questions')?.open ?? chooserOpen;save();render()}
function draft(id=current){if(!state.drafts[id]||typeof state.drafts[id]!=='object')state.drafts[id]={};let d=state.drafts[id];for(const k of ['answer','notes','cues','targets','revision'])if(typeof d[k]!=='string')d[k]='';if(!d.review||typeof d.review!=='object')d.review={};if(!d.checks||typeof d.checks!=='object')d.checks={};return d}
function save(){try{localStorage.setItem(STORE,JSON.stringify(state));let s=$('save-status');if(s)s.textContent=gcseText('Enregistré sur cet appareil', 'Guardado en este dispositivo');return true}catch(e){$('notice').textContent=YEAR_TEN?gcseText('Enregistrement indisponible. Copie ta réponse pour la garder.', 'No se pudo guardar. Copia tu respuesta para conservarla.'):'Enregistrement indisponible : imprime tes réponses pour en garder une copie.';return false}}
function question(id=current) {
  return QUESTIONS.find(q => q.id === id);
}
function answered(){return state.selected.filter(id=>draft(id).revision.trim())}
function stopSpeech() {
  speechToken++;
  document.querySelector('[data-y10-speaking]')?.removeAttribute('data-y10-speaking');
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}
function speak(text, twice = false, options = {}) {
  stopSpeech();
  if (!String(text).trim()) return;
  if (!('speechSynthesis' in window)) {
    $('notice').textContent = gcseText('Audio indisponible · Audio unavailable', 'Audio no disponible');
    return;
  }
  const token = speechToken;
  function play(again) {
    if (token !== speechToken) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = gcseText('fr-FR', 'es-ES');
    utterance.rate = options.rate ?? .85;
    const voices = speechSynthesis.getVoices();
    const languageVoices = voices.filter(voice => voice.lang.toLowerCase().split('-')[0] === studyLanguage);
    const matchesRegion = voice => voice.lang.toLowerCase() === utterance.lang.toLowerCase();
    const voice = (YEAR_TEN && languageVoices.find(voice => voice.localService && matchesRegion(voice))) ||
      languageVoices.find(matchesRegion) || languageVoices[0];
    if (voice) utterance.voice = voice;
    else if (spanishPractice && voices.length) {
      $('notice').textContent = 'Activa una voz en español en tu dispositivo.';
      return;
    }
    if (options.boundary) utterance.onboundary = event => {
      if (token === speechToken) options.boundary(event);
    };
    utterance.onend = () => {
      if (token !== speechToken) return;
      options.finish?.();
      if (again) setTimeout(() => play(false), 1700);
    };
    if (options.finish) utterance.onerror = event => {
      if (token === speechToken) options.finish(event);
    };
    speechSynthesis.speak(utterance);
  }
  play(twice);
}
function practiceChunks() {
  return suggestChunks(draft().revision);
}
function initialMarkup(text){const re=/\p{L}[\p{L}\p{M}\p{N}]*(?:[’'\-‐‑][\p{L}\p{M}\p{N}]+)*|\p{N}+/gu;let out='',last=0;for(const m of text.matchAll(re)){out+=esc(text.slice(last,m.index));const idx=wordTokens.push(m[0])-1;out+=`<button class="initial-word" data-word="${idx}" aria-label="${gcseText('Écouter le mot', 'Escuchar la palabra')} ${idx+1}">${esc([...m[0]][0])}</button>`;last=m.index+m[0].length}return out+esc(text.slice(last))}
const checks=[['content','J’ai répondu à toute la question et développé mes idées.'],['example','J’ai donné un exemple précis et expliqué sa pertinence.'],['accuracy','J’ai vérifié les verbes, les accords et l’ordre des mots.'],['range','J’ai varié le vocabulaire et utilisé des structures complexes adaptées.'],['idiom','Mes expressions sont naturelles et je comprends ce que j’ai écrit.'],['culture','J’ai envisagé un lien culturel ou une comparaison, si cela aide ma réponse.']];
function corePlanning(){
  return `<details><summary>Notes de préparation</summary><label class="field-label" for="notes">Idée · raison · exemple · nuance · culture si pertinente</label><textarea id="notes" data-draft="notes">${esc(draft().notes)}</textarea></details>`;
}
function helpPanel(){const pilot=current===32;return `<aside class="help" aria-label="Aide pour la réponse"><div class="card"><span class="badge">${pilot?'Question 32 · Fiche et conseils':'Fiche Styles de vie'}</span><h3>Construire ma réponse</h3>${ficheSupport()}
<details open><summary>Répondre et développer</summary>${pilot?`<ul><li>Réponds aux deux parties : suis-tu la mode ? Quel est ton style ?</li><li>Explique ce qui guide tes choix : confort, prix, originalité, amis…</li><li>Décris un vêtement ou un achat récent.</li><li>Ajoute une nuance : dans quelles situations tes choix changent-ils ?</li></ul>`:`<ul><li>Réponds directement à chaque partie de la question.</li><li>Explique pourquoi et donne un exemple précis.</li><li>Ajoute une nuance ou une conséquence.</li></ul>`}</details>
<details><summary>Grammaire essentielle</summary>${pilot?`<span class="model">Je porte souvent…<br>Je ne suis pas toujours la mode.<br>J’ai acheté un pantalon…</span><p><strong>Attention :</strong> je <em>suis</em> la mode (suivre) ; je <em>porte</em> un vêtement. Un pantalon noir / des chaussures noires. Au passé composé : <em>j’ai acheté</em>, avec l’auxiliaire.</p>`:`<p>Vérifie le sujet et le verbe, les auxiliaires, les participes passés, les accords et la place de la négation.</p><span class="model">Je pense… / Nous pensons…<br>J’ai changé d’avis.<br>Je ne partage pas cet avis.</span>`}</details>
<details><summary>Structures complexes</summary>${pilot?`<span class="model">Ce qui compte pour moi, c’est le confort.</span><p>Pour mettre en relief ta priorité : <em>Ce qui… c’est…</em></p><span class="model">Même si mes amis suivent les tendances, je préfère choisir moi-même.</span><p><em>Même si</em> + indicatif : une concession.</p><span class="model">Si j’avais davantage d’argent, j’achèterais des vêtements plus durables.</span><p><em>Si</em> + imparfait → conditionnel. Pas de conditionnel immédiatement après <em>si</em>.</p>`:`<span class="model">Ce qui me paraît essentiel, c’est…<br>Même si…, je…<br>Si j’avais…, je pourrais…</span><p>Choisis une structure qui exprime réellement ton idée. Vérifie la construction avant de l’utiliser.</p>`}</details>
<details><summary>Vocabulaire et expressions</summary>${pilot?`<p><strong>Décrire :</strong> décontracté, classique, original, confortable, un vêtement d’occasion, la marque, la provenance.</p><span class="model">avoir son propre style — choisir un style personnel<br>avoir tendance à — faire souvent quelque chose<br>subir la pression du groupe — se sentir poussé à imiter les autres<br>prendre du recul — réfléchir sans suivre immédiatement les autres</span><p><em>J’ai tendance à privilégier les vêtements confortables.</em></p>`:`<span class="model">Cela s’explique notamment par…<br>Il faut toutefois reconnaître que…<br>avoir tendance à + infinitif<br>prendre du recul</span><p>Utilise un vocabulaire précis et évite de répéter les mêmes débuts de phrase. Les expressions doivent servir ton idée.</p>`}</details>
<details><summary>Culture et comparaison</summary>${pilot?`<p>En France, l’ADEME encourage l’achat de vêtements de seconde main et leur réparation pour prolonger leur utilisation.</p><p><a href="https://agirpourlatransition.ademe.fr/particuliers/mieux-consommer/mode/solutions-choisir-entretenir-vetements" target="_blank" rel="noopener noreferrer">Source : ADEME · Choisir et entretenir ses vêtements</a></p><p>Si cela rejoint ton style, explique pourquoi. Compare avec tes propres possibilités d’achat ou d’échange aux Bermudes, sans généraliser à tout le pays.</p><span class="model">Dans mon entourage aux Bermudes…, tandis que…</span>`:`<p>Si cela enrichit ta réponse, utilise un exemple francophone étudié en classe ou une source vérifiée. Explique le lien avec ton idée, puis compare avec une expérience précise aux Bermudes.</p><p>Un lien culturel n’est pas obligatoire dans chaque réponse.</p>`}</details>
<details><summary>À l’oral</summary><p>Regroupe les mots par idées, fais une pause entre les arguments et articule les mots clés. Les expressions doivent rester compréhensibles et naturelles.</p></details></div></aside>`}
function sidebar() {
  const hiddenVariant = state.y10FirstQuestion === Y10_FAMILY ? Y10_FRIENDSHIP : Y10_FAMILY;
  const ids = YEAR_TEN ? CORE_IDS.filter(id => id !== hiddenVariant) : state.selected;
  return `<aside class="sidebar${YEAR_TEN ? ' y10-sidebar' : ''}" aria-label="${gcseText('Mes questions', 'Mis preguntas')}">${ids.map(sidebarButton).join('')}</aside>`;
}
function sidebarButton(id){return `<button data-question="${id}" class="${id===current?'active':''}"><strong>${esc(questionLabel(id))}.</strong> ${esc(question(id).text)}<small>${draft(id).memorised?gcseText('Prêt(e) sans texte', 'Lista para decirla'):draft(id).revision.trim()?(YEAR_TEN?gcseText('Réponse enregistrée', 'Respuesta guardada'):'Version retravaillée'):draft(id).answer.trim()?gcseText('Brouillon enregistré', 'Borrador guardado'):gcseText('À préparer', 'Por preparar')}</small></button>`}
function bankItems(){return QUESTIONS.filter(q=>!CORE_IDS.includes(q.id)).filter(q=>!search||q.text.toLocaleLowerCase('fr').includes(search.toLocaleLowerCase('fr'))||String(q.id)===search).map(q=>`<label class="question-option"><input type="checkbox" data-select="${q.id}" ${state.selected.includes(q.id)?'checked':''} ${choiceIds().length>=5&&!state.selected.includes(q.id)?'disabled':''}><span><strong>${q.id}.</strong> ${esc(q.text)}${q.id===32?' <span class="badge">Aide détaillée</span>':''}</span></label>`).join('')}
function wordCount(t){return t.trim()?t.trim().split(/\s+/u).length:0}
function revealMarkup(){return `<div class="actions"><button data-action="reveal">Afficher / masquer ma réponse</button></div><div id="revealed" class="reveal hidden">${esc(draft().revision)}</div>`}
function randomPractice() {
  const d = draft(), q = question();
  return `<section class="card"><span class="badge">${esc(questionLabel())}</span><h2>${esc(q.text)}</h2>
    <div class="actions"><button data-action="listen-question">▶ Écouter la question</button><button data-action="stop">Arrêter l’audio</button></div>
    <p>Écoute la question, puis réponds à voix haute.</p>${revealMarkup()}
    <label class="check"><input type="checkbox" data-memorised ${d.memorised?'checked':''}> Je peux répondre sans texte ni audio.</label>
    <div class="actions"><button class="primary" data-action="random-next">Question suivante →</button></div>
    <p class="muted">Question ${randomIndex+1} / ${randomOrder.length} · uniquement tes questions préparées.</p></section>`;
}
function randomise(){randomOrder=[...answered()];for(let i=randomOrder.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[randomOrder[i],randomOrder[j]]=[randomOrder[j],randomOrder[i]]}randomIndex=0;if(randomOrder.length)current=randomOrder[0]}
function setMode(next, resume = false) {
  stopSpeech();
  const previous = mode;
  if (YEAR_TEN && next === 'select') next = 'edit';
  mode = next;
  part = 0;
  if (next === 'random') randomise();
  const practicing = isRehearsalMode(next);
  const pilot = current === PILOT_QUESTION;
  if ((pilot && !['select','random'].includes(next)) || practicing) {
    const d = draft();
    if (YEAR_TEN && practicing && d.answer !== d.revision) {
      updateRevision(d, d.answer);
      mode = next = 'repeat';
      resume = false;
    } else if (practicing && draftChangedSinceRevision(d)) {
      updateRevision(d, d.answer);
      if (resume) {
        mode = next = 'repeat';
        resume = false;
      }
    } else if (pilot && next === 'repeat' && previous === 'review' && !d.revision.trim()) {
      updateRevision(d, d.answer);
    }
    const savedPart = pilot ? d.pilotPart : d.practicePart;
    if (resume && practicing && Number.isInteger(savedPart) && savedPart >= 0) part = savedPart;
    if (pilot) {
      d.pilotStep = next;
      if (practicing) d.pilotPart = part;
    } else {
      d.practiceStep = next;
      d.practicePart = part;
    }
    save();
  }
  render();
  if (!resume && practicing && previous !== next) $('practice-instruction')?.focus();
}
function render() {
  if (mode !== 'select' && !state.selected.includes(current)) current = state.selected[0] || PILOT_QUESTION;
  const simple = YEAR_TEN || mode === 'select' || mode === 'random' || current === PILOT_QUESTION;
  $('toolbar').classList.toggle('simple-toolbar',simple);
  if (simple) $('toolbar').innerHTML = simpleToolbar();
  else toolbars();
  if (mode === 'select') $('app').innerHTML = questionList();
  else if (mode === 'random') $('app').innerHTML = randomOrder.length
    ? `<div class="simple-card">${randomPractice()}</div>`
    : '<section class="simple-card card"><p>Prépare au moins une réponse pour commencer.</p><button data-mode="select">Revenir à mes questions</button></section>';
  else {
    const page = YEAR_TEN
      ? (mode === 'edit' ? yearTenWriting() : y10Rehearsal())
      : current === PILOT_QUESTION
        ? (mode === 'edit' ? simpleDraft() : mode === 'review' ? simpleReview() : simplePractice())
        : (mode === 'edit' ? editing() : mode === 'review' ? analysisPage() : mode === 'revise' ? revisionPage() : simplePractice());
    $('app').innerHTML = `<div class="layout">${sidebar()}<div>${page}</div></div>`;
  }
  bind();
  if (YEAR_TEN) bindY10Rehearsal();
  else bindPracticeStage();
  if ($('choose-questions')) $('choose-questions').ontoggle = e => { chooserOpen = e.currentTarget.open; };
}
function printAnswers(){stopSpeech();$('printArea').innerHTML=`<h1>Year 12 · Identités · Styles de vie</h1><p>Mme Neill · ${esc(state.name||'Nom : ____________________')}</p>${state.selected.map(id=>`<article><h2>${esc(questionLabel(id))}. ${esc(question(id).text)}</h2><div class="printed-answer">${esc(draft(id).revision||draft(id).answer||'Réponse à préparer.')}</div><div class="comments">Commentaires / corrections :</div></article>`).join('')}`;window.print()}
function bind(){document.querySelectorAll('[data-core]').forEach(b=>b.onclick=()=>resumeQuestion(+b.dataset.core));document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));document.querySelectorAll('[data-question]').forEach(b=>b.onclick=()=>{stopSpeech();current=+b.dataset.question;part=0;if(YEAR_TEN||current===PILOT_QUESTION||PRACTICE_STAGES.includes(mode)){resumeQuestion(current);return}render()});document.querySelectorAll('[data-select]').forEach(el=>el.onchange=()=>toggleChoice(+el.dataset.select,el.checked));const searchEl=$('search');if(searchEl)searchEl.oninput=()=>{const caret=searchEl.selectionStart;search=searchEl.value;$('bank').innerHTML=bankItems();bindBank()};const name=document.querySelector('[data-name]');if(name)name.oninput=()=>{state.name=name.value;save()};bindWriting();document.querySelectorAll('[data-check]').forEach(el=>el.onchange=()=>{draft().checks[el.dataset.check]=el.checked;save()});document.querySelectorAll('[data-word]').forEach(b=>b.onclick=()=>speak(wordTokens[+b.dataset.word]));document.querySelectorAll('[data-chunk]').forEach(b=>b.onclick=()=>speak(practiceChunks()[+b.dataset.chunk]));document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{const a=b.dataset.action;if(a==='apply-keywords'){render();return}if(a==='copy-draft'&&draft().answer.trim()){updateRevision(draft(),draft().answer);save();render()}if(a==='start'){current=state.selected[0];setMode('edit')}if(a==='listen-draft')speak(draft().answer);if(a==='listen-answer')speak($('revision')?.value ?? draft().revision);if(a==='listen-question')speak(question().text);if(a==='stop')stopSpeech();if(a==='repeat-part')speak(practiceChunks()[part],true);if(a==='prev'||a==='next'){stopSpeech();part+=a==='prev'?-1:1;if(current===PILOT_QUESTION)draft().pilotPart=part;else draft().practicePart=part;save();render()}if(a==='reveal')$('revealed').classList.toggle('hidden');if(a==='print')printAnswers();if(a==='random-next'){stopSpeech();randomIndex++;if(randomIndex>=randomOrder.length)randomise();else current=randomOrder[randomIndex];render()}})}
function bindBank(){document.querySelectorAll('[data-select]').forEach(el=>el.onchange=()=>toggleChoice(+el.dataset.select,el.checked))}
window.addEventListener('pagehide',stopSpeech);render();
</script></body></html>
```

## `dist/y12-writing.js`

```javascript
const COMMON_FICHE = {
  101: [
    ['Identité','ce qui me définit le plus, c’est…','les valeurs','what defines me most is…','values'],
    ['Influence','j’ai appris l’importance de… grâce à…','l’éducation','I learnt the importance of… thanks to…','upbringing'],
    ['Nuance','même si j’ai hérité de certaines valeurs, …','les origines','even though I inherited certain values, …','roots']
  ],
  102: [
    ['Opinion','on peut faire partie d’un groupe tout en…','le sentiment d’appartenance','you can belong to a group while…','a sense of belonging'],
    ['Concession','bien que mes amis ne soient pas toujours d’accord avec moi, je…','l’entraide','although my friends don’t always agree with me, I…','mutual support'],
    ['Hypothèse','si je devais renoncer à mes valeurs, je préférerais prendre mes distances plutôt que de…','la pression du groupe','if I had to give up my values, I would rather distance myself than…','peer pressure']
  ],
  103: [
    ['Avant','avant de rejoindre ce groupe, je pensais que…','un préjugé','before joining that group, I thought that…','a preconceived idea'],
    ['Déclic','ce qui m’a poussé(e) à remettre en question ce que je tenais pour acquis, c’est…','un déclic','what made me question what I took for granted was…','a turning point'],
    ['Bilan','si je n’avais pas fait partie de ce groupe, je n’aurais sans doute jamais pris conscience de…','une prise de conscience','if I hadn’t been part of that group, I would probably never have become aware of…','a realisation']
  ]
};

function commonFiche() {
  const rows = COMMON_FICHE[current];
  const q = question();
  return `<section class="oral-fiche" aria-label="Fiche d’aide à l’oral">
    <h3><span>${String(q.core).padStart(2,'0')}</span>${esc(q.text)}</h3>
    <div class="oral-fiche-columns">
      <div class="oral-fiche-phrases">
        <h4>Tournures à réutiliser</h4>
        ${rows.map(([label,phrase,,gloss])=>`<div class="oral-fiche-phrase">
          <strong>${esc(label)}</strong><div>${esc(phrase)}<small lang="en">${esc(gloss)}</small></div>
        </div>`).join('')}
      </div>
      <div class="oral-fiche-vocab">
        <h4>Vocabulaire clé</h4>
        ${rows.map(([, ,word,,gloss])=>`<div><strong>${esc(word)}</strong><small lang="en">${esc(gloss)}</small></div>`).join('')}
      </div>
    </div>
  </section>`;
}

function commonAid() {
  return `<details class="simple-details"><summary>Aide</summary>${commonFiche()}</details>`;
}

function reviewVocabulary() {
  if (YEAR_TEN) return yearTenSupport().flatMap(([, ...slots]) => slots.flatMap(([, ...chunks]) => chunks.map(([french]) => french)));
  return (STYLES_SUPPORT[current] || COMMON_FICHE[current] || []).map(row => row[2]);
}

function ficheSupport() {
  const rows = STYLES_SUPPORT[current];
  if (!rows) return '';
  return `<details open><summary>Tournures de la fiche</summary>
    <p>Choisis une ou deux tournures et complète-les avec tes propres idées.</p>
    ${rows.map(([use, french, , english]) => `<div class="model"><strong>${esc(use)}</strong><br>${esc(french)}<br><small>${esc(english)}</small></div>`).join('')}
    </details><details open><summary>Vocabulaire du sujet</summary>
    <ul>${rows.map(([, , french, , english]) => `<li><strong>${esc(french)}</strong><br><small>${esc(english)}</small></li>`).join('')}</ul>
    </details>`;
}

function toolbars() {
  const workflow = [['select','Mes questions'], ['edit','1. Brouillon'], ['review','2. Analyser'], ['revise','3. Retravailler']];
  workflow.push(['repeat', '4. M’entraîner']);
  const buttons = tabs => tabs.map(([id,label]) => `<button data-mode="${id}" class="${mode===id || (id==='repeat' && PRACTICE_STAGES.includes(mode)) ? 'active' : ''}"${mode===id || (id==='repeat' && PRACTICE_STAGES.includes(mode)) ? ' aria-current="step"' : ''}>${label}</button>`).join('');
  $('toolbar').innerHTML = `<div class="step-row" aria-label="Préparer ma réponse">${buttons(workflow)}<button data-action="print">Imprimer</button><span class="status" id="save-status">Enregistré sur cet appareil</span></div>`;
}

function editing() {
  const d = draft();
  const common = CORE_IDS.includes(current);
  return `<div class="${common?'common-answer':'answer-layout'}"><section class="card">
    <span class="badge">1. Brouillon · ${esc(questionLabel())}</span>
    <h2>${esc(question().text)}</h2>
    ${common?commonFiche():corePlanning()}
    <label class="field-label" for="answer">Mon premier brouillon</label>
    <textarea id="answer" class="answer" data-draft="answer" placeholder="Réponds directement, explique ton idée et donne un exemple précis.">${esc(d.answer)}</textarea>
    <div class="word-count" id="word-count">${wordCount(d.answer)} mots</div>
    <div class="actions"><button data-action="listen-draft">▶ Écouter mon brouillon</button><button class="primary" data-mode="review">Analyser mon brouillon →</button></div>
  </section>${common?'':helpPanel()}</div>`;
}

function analysisPage() {
  const d = draft();
  if (!d.answer.trim()) return `<section class="card"><h2>${esc(question().text)}</h2>
    <p>Écris un premier brouillon pour pouvoir l’analyser.</p><button class="primary" data-mode="edit">Rédiger mon brouillon</button></section>`;
  const vocab = reviewVocabulary();
  const evidence = reviewDraft(d.answer, vocab);
  return `<section class="card">
    <span class="badge">2. Analyser · ${esc(questionLabel())}</span>
    <h2>${esc(question().text)}</h2>
    <h3>Mon brouillon à relire</h3>
    <div class="draft-excerpt">${esc(d.answer)}</div>
    <h3 class="section-title">A · Langue</h3>
    <p>Les extraits repérés sont des pistes. Vérifie chaque forme dans sa phrase avant de retenir un exemple. Ajoute aussi tes propres exemples ou corrections.</p>
    ${reviewEvidenceCards(evidence,d)}
    <h3 class="section-title">B2 · Message</h3>
    ${checks.filter(([key])=>['content','example','culture'].includes(key)).map(([key,label])=>`
      <label class="check"><input type="checkbox" data-check="${key}" ${d.checks[key]?'checked':''}><span>${esc(label)}</span></label>`).join('')}
    <p class="muted">La prononciation et l’intonation (A), ainsi que la compréhension et l’interaction (C), se vérifient à l’oral. Ce bilan porte sur ton texte et ne donne pas de note.</p>
    <label class="field-label" for="targets">Mes deux priorités pour la réécriture</label>
    <textarea id="targets" data-draft="targets" rows="2" placeholder="Par exemple, préciser mon exemple et vérifier mes accords.">${esc(d.targets)}</textarea>
    <div class="actions"><button data-mode="edit">Revenir au brouillon</button><button class="primary" data-mode="revise">Retravailler ma réponse →</button></div>
  </section>`;
}

function draftChangedSinceRevision(d) {
  return d.answer.trim() && typeof d.revisionSource === 'string' && d.revisionSource !== d.answer;
}

function updateRevision(d, text) {
  if (d.revision !== text) delete d.reorderCompleted;
  d.revision = text;
  d.revisionSource = d.answer;
  d.memorised = false;
}

function revisionPage() {
  const d = draft();
  const revision = draftChangedSinceRevision(d) ? d.answer : d.revision;
  const common = CORE_IDS.includes(current);
  return `<div class="${common?'common-answer':'answer-layout'}"><section class="card">
    <span class="badge">3. Retravailler · ${esc(questionLabel())}</span>
    <h2>${esc(question().text)}</h2>
    ${common?commonAid():''}
    ${d.targets.trim()?`<h3>Mes priorités</h3><div class="draft-excerpt">${esc(d.targets)}</div>`:''}
    <details><summary>Comparer avec mon premier brouillon</summary><div class="draft-excerpt">${esc(d.answer || 'Brouillon à rédiger.')}</div></details>
    ${!revision.trim()&&d.answer.trim()?'<button data-action="copy-draft">Partir de mon brouillon</button>':''}
    <label class="field-label" for="revision">Ma réponse retravaillée</label>
    <textarea id="revision" class="answer" data-draft="revision" placeholder="Colle ta version corrigée ou retravaille ton brouillon ici.">${esc(revision)}</textarea>
    <div class="word-count" id="word-count">${wordCount(revision)} mots</div>
    <div class="actions"><button data-action="listen-answer">▶ Écouter ma réponse</button><button data-action="stop">Arrêter</button></div>
    <label class="field-label" for="cues">Mes repères</label>
    <p class="muted">Note les idées ou expressions qui te rappelleront la suite, une par ligne.</p>
    <textarea id="cues" data-draft="cues" placeholder="Mon avis&#10;Un exemple&#10;Une nuance">${esc(d.cues)}</textarea>
    <div class="actions"><button data-mode="review">Revoir mon analyse</button><button class="primary" data-mode="repeat">M’entraîner avec cette version →</button></div>
  </section>${common?'':helpPanel()}</div>`;
}

function bindWriting() {
  if (YEAR_TEN) document.querySelectorAll('[data-y10-topic]').forEach(button => button.onclick = () => {
    const id = Number(button.dataset.y10Topic);
    if (id === current) return;
    state.y10FirstQuestion = id;
    resumeQuestion(id);
    if (mode === 'edit') save();
    document.querySelector('[data-y10-topic][aria-pressed="true"]')?.focus();
  });
  document.querySelectorAll('[data-draft]').forEach(el => el.oninput = () => {
    const key = el.dataset.draft;
    const d = draft();
    if (key === 'answer' && el.value !== d.answer && d.revision.trim()) {
      d.revisionSource ??= d.answer;
      d.memorised = false;
    }
    if (key === 'revision') updateRevision(d, el.value);
    else d[key] = el.value;
    if (key === 'answer' || key === 'revision') $('word-count').textContent = wordCount(el.value) + gcseText(' mots', ' palabras');
    save();
  });
  document.querySelectorAll('[data-review]').forEach(el => el.oninput = () => {
    draft().review[el.dataset.review] = el.value;
    save();
  });
  document.querySelectorAll('[data-keep]').forEach(button => button.onclick = () => {
    const field = $('review-' + button.dataset.keep);
    const quote = '« ' + button.dataset.excerpt + ' »';
    if (!field.value.includes(quote)) {
      field.value = [field.value.trim(), quote].filter(Boolean).join('\n');
      field.oninput();
    }
    field.focus();
  });
  document.querySelectorAll('[data-memorised]').forEach(el => el.onchange = () => {
    draft().memorised = el.checked;
    save();
    render();
  });
}

function reviewEvidenceCards(evidence,d) {
  return `<div class="review-grid">${REVIEW_CARDS.map(([key,label,prompt]) => `
      <section class="review-card">
        <h3>${esc(label)}</h3><p class="muted">${esc(prompt)}</p>
        <ul class="evidence">${evidence[key].length ? evidence[key].map(({quote,detail})=>`
          <li><button type="button" data-keep="${key}" data-excerpt="${esc(quote)}" aria-label="Ajouter ${esc(quote)} à mes exemples">« ${esc(quote)} » <span aria-hidden="true">＋</span></button>${detail ? `<small>${esc(detail)}</small>` : ''}</li>`).join('') : '<li class="muted">Aucun exemple repéré. Tu peux ajouter le tien.</li>'}</ul>
        <label class="field-label" for="review-${key}">Mes exemples vérifiés et mes corrections</label>
        <textarea id="review-${key}" data-review="${key}" rows="2" placeholder="Ajoute un extrait et explique ce que tu gardes ou corriges.">${esc(d.review[key]||'')}</textarea>
      </section>`).join('')}</div>`;
}
```

## `dist/y9-french.js`

```javascript
const YEAR_NINE_FRENCH = (() => {
  const pairs = {};
  const input = (key, label, initial) => [key, label, 'text', initial];
  const select = (key, label, options) => {
    pairs[key] = new Map(options);
    return [key, label, 'select', options.map(([fr]) => fr).join('|')];
  };
  const openSelect = (key, label, options) => select(key, label, [...options, ['Other','']]);
  const numbers = (start, end) =>
    Array.from({length: end - start + 1}, (_, i) => [String(start + i), String(start + i)]);
  const months = [
    ['janvier','January'], ['février','February'], ['mars','March'],
    ['avril','April'], ['mai','May'], ['juin','June'], ['juillet','July'], ['août','August'],
    ['septembre','September'], ['octobre','October'], ['novembre','November'], ['décembre','December'],
  ];
  const qualities = [
    ['sympathique','nice'], ['drôle','funny'], ['timide','shy'], ['sportif','sporty'],
    ['sportive','sporty'], ['bavard','chatty'], ['bavarde','chatty'], ['gentil','kind'], ['gentille','kind'],
  ];
  const adjectives = [
    ['passionnant','exciting'], ['super','great'], ['difficile','difficult'],
    ['facile','easy'], ['bon pour la santé','good for your health'],
  ];
  const reasons = [
    ['j’adore ça','I love it'], ['j’aime passer du temps avec mes amis','I like spending time with my friends'],
    ['je me passionne pour le sport','I’m passionate about sport'], ['c’est mon passe-temps préféré','it’s my favourite hobby'],
  ];
  const connectors = [['parce que','because'], ['car','because'], ['puisque','since']];
  const pets = [['un chien','a dog'], ['un chat','a cat'], ['un lapin','a rabbit'], ['un hamster','a hamster'], ['un poisson','a fish']];
  const noExtra = ['',''];
  const familyOptions = [
    ['ma mère','my mum'], ['mon père','my dad'],
    ['mon grand frère','my older brother'], ['mon petit frère','my younger brother'],
    ['ma grande sœur','my older sister'], ['ma petite sœur','my younger sister'],
    ['mon frère jumeau','my twin brother'], ['ma sœur jumelle','my twin sister'],
    ['mon frère','my brother'], ['ma sœur','my sister'], ['mes deux frères','my two brothers'],
    ['ma grand-mère','my grandma'], ['mon grand-père','my grandad'],
    ['ma belle-mère','my stepmum'], ['mon beau-père','my stepdad'],
    ['ma tante','my aunt'], ['mon oncle','my uncle'],
    ['mon cousin','my cousin'], ['ma cousine','my cousin'],
  ];
  const previousFamilyChoices = {
    'mes parents, ma sœur et moi': ['ma mère','mon père','ma sœur'],
    'ma mère, mon frère et moi': ['ma mère','mon frère'],
    'mon père et moi': ['mon père'],
    'mes parents et moi': ['ma mère','mon père'],
    'mes parents, mes deux frères et moi': ['ma mère','mon père','mes deux frères'],
    '': [],
  };
  const familySelection = d => Array.isArray(d.familyPeople)
    ? d.familyPeople
    : previousFamilyChoices[d.familyMembers] ?? previousFamilyChoices['mes parents, ma sœur et moi'];

  function familyChecklist(label, d, escape) {
    const selected = familySelection(d);
    return `<fieldset class="family-checklist">
      <legend>${escape(label)}</legend>
      <div class="family-people">${familyOptions.map(([fr]) =>
        `<label lang="fr"><input type="checkbox" data-family-person value="${escape(fr)}"${selected.includes(fr) ? ' checked' : ''}> ${escape(fr)}</label>`
      ).join('')}</div>
    </fieldset>`;
  }

  function familyChunk(d) {
    const people = familyOptions.filter(([fr]) => familySelection(d).includes(fr));
    const extra = d.familyExtra.trim();
    if (extra) people.push([extra, d.familyExtraEnglish.trim() || 'my other relatives']);
    if (!people.length) return null;
    const joinWith = (members, conjunction, me) => members.join(', ') + ' ' + conjunction + ' ' + me;
    return {
      fr: 'Il y a ' + joinWith(people.map(([fr]) => fr), 'et', 'moi') + '.',
      en: 'That’s ' + joinWith(people.map(([,en]) => en), 'and', 'me') + '.',
    };
  }

  const groups = [
    {
      question: 'Comment tu t’appelles ? Comment ça s’écrit ?',
      fields: [input('first','First name','Alex'),input('nickname','What your friends call you','')],
    },
    {
      question: 'Il y a combien de personnes dans ta famille ?',
      fields: [
        select('familySize','Number of people',numbers(4,12).concat(numbers(1,3))),
        ['familyPeople','Who is in your family?', 'checklist', ''],
        input('familyExtra','Anyone else? (in French)',''),
        input('familyExtraEnglish','English meaning for Guided',''),
        select('getAlong','How do you get on?',[
          ['Je m’entends bien','I get on well'], ['Je m’entends mieux','I get on better'], ['Je ne m’entends pas bien','I don’t get on well'],
        ]),
        select('relative','With whom?',[
          ['avec ma sœur','with my sister'], ['avec mon frère','with my brother'], ['avec ma mère','with my mother'],
          ['avec mon père','with my father'], ['avec mes parents','with my parents'],
        ]),
      ],
    },
    {
      question: 'Tu as quel âge ? C’est quand ton anniversaire ?',
      fields: [
        select('age','Your age',numbers(13,18).concat(numbers(11,12))),
        select('birthdayDay','Birthday day',numbers(1,31)),
        select('birthdayMonth','Birthday month',months),
        select('birthdayFeeling','How do you feel about it?',[noExtra,
          ['J’ai hâte de fêter mon anniversaire','I’m looking forward to celebrating my birthday'],
          ['Je n’ai pas envie de fêter mon anniversaire','I don’t feel like celebrating my birthday'],
        ]),
      ],
    },
    {
      question: 'Comment s’appellent tes frères et sœurs ?',
      fields: [
        select('siblings','Brothers and sisters',[
          ['Ma sœur s’appelle','My sister is called'], ['Mon frère s’appelle','My brother is called'],
          ['Mes frères et sœurs s’appellent','My brothers and sisters are called'],
          ['Ma sœur aînée s’appelle','My older sister is called'], ['Mon frère cadet s’appelle','My younger brother is called'],
          ['Ma sœur jumelle s’appelle','My twin sister is called'], ['Mon frère jumeau s’appelle','My twin brother is called'],
          ['Je suis fils unique','I’m an only child'], ['Je suis fille unique','I’m an only child'],
        ]),
        input('siblingNames','Name(s), if applicable','Camille'),
      ],
    },
    {
      question: 'Tu as un animal domestique ?',
      fields: [
        select('pet','Pet you have',[...pets,['aucun animal','no pet']]),
        select('pastPet','Pet you used to have',[noExtra,...pets]),
        select('futurePet','Pet you will have or would like',[noExtra,...pets]),
        select('petFutureForm','Future or wish',[['j’aurai','I will have'],['j’aimerais avoir','I would like to have']]),
      ],
    },
    {
      question: 'Tu es comment ? Fais-moi une description d’un(e) de tes ami(e)s.',
      fields: [
        select('intensity','How much?',[
          ['plutôt','rather'], ['vraiment','really'], ['assez','quite'], ['un peu','a little'], ['trop','too'],
        ]),
        select('self','An adjective for you',qualities),
        select('selfExtension','Add a contrast',[noExtra,
          ['Je ne suis jamais en retard','I’m never late'],
          ['Je ne suis ni timide ni bavard','I’m neither shy nor chatty'],
          ['Je ne suis ni timide ni bavarde','I’m neither shy nor chatty'],
          ['J’aimerais être plus sportif','I’d like to be sportier'],
          ['J’aimerais être plus sportive','I’d like to be sportier'],
        ]),
        select('friend','Who are you describing?',[['Mon ami','My friend'],['Mon amie','My friend']]),
        input('friendName','Friend’s name',''),
        select('friendQuality','An adjective for your friend',qualities),
        select('friendExtension','Add a detail about your friend',[noExtra,
          ['Il a tendance à beaucoup parler','He tends to talk a lot'], ['Elle a tendance à beaucoup parler','She tends to talk a lot'],
          ['Il n’est jamais en retard','He’s never late'], ['Elle n’est jamais en retard','She’s never late'],
        ]),
      ],
    },
    {
      question: 'Qu’est-ce que tu fais avec tes amis après le collège ?',
      fields: [openSelect('afterSchool','What you normally do',[
        ['on bavarde','we chat'], ['on prend le bus','we take the bus'],
        ['on va chez Lindos pour acheter des collations','we go to Lindos to buy snacks'],
        ['on va au club de foot','we go to football club'], ['on va au club de volley','we go to volleyball club'],
        ['on va au club de netball','we go to netball club'], ['on va au club de cricket','we go to cricket club'],
        ['je ne fais rien de spécial et je rentre chez moi','I don’t do anything special and I go home'],
      ])],
    },
    {
      question: 'Qu’est-ce que tu vas faire samedi prochain ? Pourquoi ?',
      fields: [
        openSelect('nextSaturday','Next Saturday’s activity',[
          ['aller en ville','go into town'], ['faire du vélo','go cycling'],
          ['passer du temps avec mes amis','spend time with my friends'], ['jouer au foot','play football'],
          ['nager','go swimming'], ['faire de la voile','go sailing'],
          ['regarder un film sur Netflix','watch a film on Netflix'], ['surfer sur Internet','surf the internet'],
        ]),
        select('futureOpinion','What will it be like?',adjectives),
        select('futureConnector','Link your reason',connectors),
        openSelect('futureReason','Why?',reasons),
      ],
    },
    {
      question: 'Qu’est-ce que tu as fait avec tes amis le week-end dernier ?',
      fields: [
        openSelect('lastWeekendPlace','Where did you go?',[
          ['à Hamilton','to Hamilton'], ['à la plage','to the beach'], ['au stade','to the stadium'],
          ['chez mon ami','to my friend’s house'], ['chez mon amie','to my friend’s house'],
        ]),
        select('went','Form of “I went”',[['Je suis allé','I went'],['Je suis allée','I went']]),
        openSelect('pastSport','What did you play?',[
          ['au foot','football'], ['au squash','squash'], ['au cricket','cricket'], ['au rugby','rugby'], noExtra,
        ]),
        select('pastOpinion','What was it like?',adjectives),
        select('pastConnector','Link your reason',connectors),
        openSelect('pastReason','Why?',reasons),
      ],
    },
  ];

  function chunks(d, questionIndex, numberWord) {
    const result = [];
    const add = (fr,en) => result.push({fr,en});
    const french = key => d[key] === 'Other' ? (d[key + 'Custom']?.trim() || '…') : d[key];
    const english = key => d[key] === 'Other'
      ? (d[key + 'English']?.trim() || '…')
      : (pairs[key].get(d[key]) ?? '…');
    const choice = (key, punctuation = '') => add(french(key) + punctuation, english(key) + punctuation);
    const name = key => d[key].trim() || '…';
    switch (questionIndex) {
      case 0: {
        add('Je m’appelle ' + name('first') + '.', 'My name is ' + name('first') + '.');
        const spelling = [...name('first').toUpperCase()].filter(letter => /[\p{L}-]/u.test(letter)).join(' – ') || '…';
        add('Ça s’écrit ' + spelling + '.', 'It’s spelt ' + spelling + '.');
        if (d.nickname.trim()) add('Mes amis m’appellent ' + name('nickname') + '.', 'My friends call me ' + name('nickname') + '.');
        break;
      }
      case 1: {
        add('Dans ma famille, il y a ' + numberWord(d.familySize) + ' personne' + (d.familySize === '1' ? '' : 's') + '.',
            'In my family, there ' + (d.familySize === '1' ? 'is one person.' : 'are ' + d.familySize + ' people.'));
        const family = familyChunk(d);
        if (family) result.push(family);
        choice('getAlong');
        choice('relative','.');
        break;
      }
      case 2:
        add('J’ai ' + numberWord(d.age) + ' ans.', 'I’m ' + d.age + ' years old.');
        add('J’aurai ' + numberWord(Number(d.age) + 1) + ' ans', 'I’ll be ' + (Number(d.age) + 1));
        add('le ' + (d.birthdayDay === '1' ? 'premier' : numberWord(d.birthdayDay)) + ' ' + d.birthdayMonth + '.',
            'on ' + d.birthdayDay + ' ' + english('birthdayMonth') + '.');
        if (d.birthdayFeeling) choice('birthdayFeeling','.');
        break;
      case 3:
        if (d.siblings.startsWith('Je suis')) {
          add('Je n’ai ni frère ni sœur.', 'I don’t have any brothers or sisters.');
          choice('siblings','.');
        } else {
          add(d.siblings + ' ' + name('siblingNames') + '.', english('siblings') + ' ' + name('siblingNames') + '.');
        }
        break;
      case 4:
        if (d.pet === 'aucun animal') add('Je n’ai pas d’animal chez moi.', 'I don’t have a pet at home.');
        else add('Oui, j’ai ' + d.pet + '.', 'Yes, I have ' + english('pet') + '.');
        if (d.pastPet) add('Avant, j’avais ' + d.pastPet + '.', 'I used to have ' + english('pastPet') + '.');
        if (d.futurePet) add('Dans l’avenir, ' + d.petFutureForm + ' ' + d.futurePet + '.',
          'In the future, ' + english('petFutureForm') + ' ' + english('futurePet') + '.');
        break;
      case 5:
        add('Je suis ' + d.intensity + ' ' + d.self + '.', 'I’m ' + english('intensity') + ' ' + english('self') + '.');
        if (d.selfExtension) choice('selfExtension','.');
        add([d.friend,d.friendName.trim(),'est assez',d.friendQuality].filter(Boolean).join(' ') + '.',
          [english('friend'),d.friendName.trim(),'is quite',english('friendQuality')].filter(Boolean).join(' ') + '.');
        if (d.friendExtension) choice('friendExtension','.');
        break;
      case 6:
        add('Normalement,', 'Normally,');
        choice('afterSchool','.');
        break;
      case 7:
        add('Samedi prochain, je vais', 'Next Saturday, I’m going to');
        choice('nextSaturday','.');
        add('Je pense que ce sera ' + d.futureOpinion, 'I think it’ll be ' + english('futureOpinion'));
        add(d.futureConnector + ' ' + french('futureReason') + '.', english('futureConnector') + ' ' + english('futureReason') + '.');
        break;
      case 8:
        add('Le week-end dernier,', 'Last weekend,');
        add(d.went.toLowerCase() + ' ' + french('lastWeekendPlace') + '.', 'I went ' + english('lastWeekendPlace') + '.');
        if (d.pastSport) add('J’ai joué ' + french('pastSport') + '.', 'I played ' + english('pastSport') + '.');
        add('Je pense que c’était ' + d.pastOpinion, 'I think it was ' + english('pastOpinion'));
        add(d.pastConnector + ' ' + french('pastReason') + '.', english('pastConnector') + ' ' + english('pastReason') + '.');
        break;
    }
    return result;
  }

  return {groups,chunks,familyChecklist};
})();
```

