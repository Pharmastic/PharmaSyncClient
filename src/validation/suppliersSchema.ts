import * as v from 'valibot';
import { nameSchema } from './authSchemas';
import { emailSchema } from './authSchemas';
export const phoneSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please enter your phone number.'),
  // v.regex(/^\+[0-9]{2,3}-[0-9]{3,4}-[0-9]{4,5}$/, 'Please enter a valid phone number.'),
  v.maxLength(20, 'Your phone number must have 20 characters or less.'),
);
export const addressSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please enter your address.'),
  v.maxLength(50, 'Your address must have 50 characters or less.'),
);
export const SuppliersSchema = v.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  address: addressSchema,
});
