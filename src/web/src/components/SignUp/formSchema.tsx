import * as Yup from 'yup';

import formFields from './formFields';

const { firstName, lastName, displayName, githubUserName, github, feeds, blogUrl } = formFields;

const checkLength = (min: number, max: number) => (val: string | undefined): boolean =>
  val !== undefined && val.length >= min && val.length <= max;

export default [
  // Fist step has no validation logic
  Yup.object().shape({}),

  // Validation schema for fistName, lastName, and displayName
  Yup.object().shape({
    [firstName.name]: Yup.string()
      .required(`${firstName.requiredErrorMsg}`)
      .test('len', firstName.invalidErrorMsg, checkLength(2, 16)),
    [lastName.name]: Yup.string()
      .required(`${lastName.requiredErrorMsg}`)
      .test('len', lastName.invalidErrorMsg, checkLength(2, 16)),
    [displayName.name]: Yup.string()
      .default('')
      .test('len', displayName.invalidErrorMsg, checkLength(6, 18)),
  }),

  // Github username and github data
  Yup.object().shape({
    [githubUserName.name]: Yup.string().required(`${githubUserName.requiredErrorMsg}`),
    [github.name]: Yup.object()
      .shape({
        username: Yup.string().required(),
        avatarUrl: Yup.string().url().required(),
      })
      .required(github.invalidErrorMsg),
  }),

  // Blog URL and RSS feeds
  Yup.object().shape({
    [blogUrl.name]: Yup.string().url().required(`${blogUrl.requiredErrorMsg}`),
    [feeds.name]: Yup.array().of(Yup.string()).min(1, feeds.invalidErrorMsg),
  }),

  // Reviewing step has no validation logic
  Yup.object().shape({}),
];
