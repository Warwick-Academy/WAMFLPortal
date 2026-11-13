import { describe, expect, it } from 'vitest';
import { isWarwickEmail } from './email';

describe('isWarwickEmail', () => {
  it('accepts Warwick Academy addresses regardless of case or surrounding whitespace', () => {
    expect(isWarwickEmail('student@warwick.bm')).toBe(true);
    expect(isWarwickEmail(' Teacher@WARWICK.BM ')).toBe(true);
  });

  it('rejects other domains and missing email values', () => {
    expect(isWarwickEmail('student@warwick.bm.example.org')).toBe(false);
    expect(isWarwickEmail('student@example.org')).toBe(false);
    expect(isWarwickEmail(null)).toBe(false);
    expect(isWarwickEmail(undefined)).toBe(false);
  });
});
