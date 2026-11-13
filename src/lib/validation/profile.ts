import { z } from 'zod';

export const profileSchema = z.object({
  firstName: z.string().trim().min(1, 'Enter your first name.').max(50, 'Use 50 characters or fewer.'),
  lastName: z.string().trim().min(1, 'Enter your last name.').max(50, 'Use 50 characters or fewer.'),
  yearGroupId: z.string().uuid('Choose your current year.'),
  languageIds: z.array(z.string().uuid()).min(1, 'Choose at least one language.'),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
