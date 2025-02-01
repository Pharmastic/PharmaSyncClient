import * as v from 'valibot';
const emailSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please enter your email.'),
  v.email('Please enter a valid email.'),
  v.maxLength(50, 'Your email must have 50 characters or less.'),
);

const passwordSchema = v.pipe(
  v.string(),
  v.minLength(8, 'Your password must have 8 characters or more.'),
  // v.regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   'Your password must have at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.',
  // ),
  v.maxLength(20, 'Your password must have 20 characters or less.'),
);
const nameSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please enter your name.'),
  v.minLength(3, 'Your name must have 3 characters or more.'),
  v.maxLength(30, 'Your name must have 30 characters or less.'),
  v.regex(/^[a-zA-Z\s]*$/, 'Your name must contain only letters and spaces.'),
);

const roleSchema = v.pipe(v.string(), v.nonEmpty('Please enter your role.'));

export const LoginSchema = v.object({
  email: emailSchema,
  password: passwordSchema,
});

export const SignUpSchema = v.object({
  email: emailSchema,
  password: passwordSchema,
  firstName: nameSchema,
  lastName: nameSchema,
  role: roleSchema,
});
