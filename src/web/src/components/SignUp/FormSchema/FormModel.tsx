export default {
  displayName: {
    name: 'displayName',
    label: 'Display Name',
    invalidErrorMsg: 'Display name is taken',
  },
  firstName: {
    name: 'firstName',
    label: 'First name',
    requiredErrorMsg: 'First name is required',
    invalidErrorMsg: 'Fist name must contain 2-16 characters',
  },
  lastName: {
    name: 'lastName',
    label: 'Last name',
    requiredErrorMsg: 'Last name is required',
    invalidErrorMsg: 'Last name must contain 2-16 characters',
  },
  email: {
    name: 'email',
    label: 'Email',
  },
  github: {
    name: 'github',
    label: 'Github Data`',
    invalidErrorMsg: 'Invalid GitHub profile',
  },
  githubUserName: {
    name: 'githubUsername',
    label: 'Github username',
    requiredErrorMsg: 'Github account is required',
  },
  githubOwnership: {
    name: 'githubOwnership',
    label: 'I declare that I’m the owner and the maintainer of this GitHub account',
    invalidErrorMsg: 'You must be the owner of this account',
  },
  blogUrl: {
    name: 'blogUrl',
    label: 'Blog URl',
    requiredErrorMsg: 'Blog Url is required',
    invalidErrorMsg: 'Invalid URl',
  },
  feeds: {
    name: 'feeds',
    label: 'RSS Feeds',
    invalidErrorMsg: 'RSS feeds missing',
  },
  blogOwnership: {
    name: 'githubUsername',
    label: 'I declare that I’m the owner and the maintainer of this blog account',
    invalidErrorMsg: 'You must be the owner of this account',
  },
};
