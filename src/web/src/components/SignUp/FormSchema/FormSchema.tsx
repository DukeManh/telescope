import * as Yup from 'yup';

import formModels from './FormModel';

const {
  firstName,
  lastName,
  displayName,
  githubUserName,
  github,
  githubOwnership,
  feeds,
  blogUrl,
  blogOwnership,
} = formModels;

const validateLength = (min: number, max: number) => (val: string | undefined): boolean =>
  val !== undefined && val.length >= min && val.length <= max;

const validateCheckBox = (val: boolean | undefined) => !!val;

export default [
  // First step has no validation logic
  Yup.object().shape({}),

  // firstName, lastName, and displayName schemas
  Yup.object().shape({
    [firstName.name]: Yup.string()
      .required(`${firstName.requiredErrorMsg}`)
      .test('len', firstName.invalidErrorMsg, validateLength(2, 16)),
    [lastName.name]: Yup.string()
      .required(`${lastName.requiredErrorMsg}`)
      .test('len', lastName.invalidErrorMsg, validateLength(2, 16)),
    [displayName.name]: Yup.string().default(''),
  }),

  // Github username and github data schema
  Yup.object().shape({
    [githubUserName.name]: Yup.string().required(`${githubUserName.requiredErrorMsg}`),
    [github.name]: Yup.object()
      .shape({
        username: Yup.string().required(),
        avatarUrl: Yup.string().url().required(),
      })
      .required(github.invalidErrorMsg),
    [githubOwnership.name]: Yup.boolean().test(
      'agreed',
      githubOwnership.invalidErrorMsg,
      validateCheckBox
    ),
  }),
  // Blog URL and RSS feeds
  Yup.object().shape({
    [blogUrl.name]: Yup.string().url().required(`${blogUrl.requiredErrorMsg}`),
    [feeds.name]: Yup.array().of(Yup.string()).min(1, feeds.invalidErrorMsg),
    [blogOwnership.name]: Yup.boolean().test(
      'agreed',
      blogOwnership.invalidErrorMsg,
      validateCheckBox
    ),
  }),

  // Reviewing step has no validation logic
  Yup.object().shape({}),
];
