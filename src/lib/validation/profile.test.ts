import { describe, expect, it } from 'vitest';
import { profileSchema } from './profile';

const validProfile = {
  firstName: 'Alex',
  lastName: 'Brown',
  yearGroupId: '00000000-0000-4000-8000-000000000001',
  languageIds: ['00000000-0000-4000-8000-000000000002'],
};

describe('profileSchema', () => {
  it('trims names and accepts one selected language', () => {
    expect(profileSchema.parse({ ...validProfile, firstName: ' Alex ' }).firstName).toBe('Alex');
  });

  it('rejects blank or overlong names and an empty language selection', () => {
    expect(profileSchema.safeParse({ ...validProfile, firstName: '  ' }).success).toBe(false);
    expect(profileSchema.safeParse({ ...validProfile, lastName: 'x'.repeat(51) }).success).toBe(false);
    expect(profileSchema.safeParse({ ...validProfile, languageIds: [] }).success).toBe(false);
  });
});
