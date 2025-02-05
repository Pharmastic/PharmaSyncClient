import * as v from 'valibot';

export const categorySchema = v.object({
  name: v.string(),
  description: v.string(),
});
