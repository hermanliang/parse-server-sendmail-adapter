# parse-server-sendmail-adapter

[![npm version](https://img.shields.io/npm/v/parse-server-sendmail-adapter.svg?style=flat)](https://www.npmjs.com/package/parse-server-sendmail-adapter)

Used to send Parse Server password reset and email verification emails though sendmail

## Installation

```
npm install parse-server-sendmail-adapter --save
```

## Usage:

```javascript
var server = ParseServer({
  ...otherOptions,
  // Enable email verification
  verifyUserEmails: true,

  // if `verifyUserEmails` is `true` and
  //     if `emailVerifyTokenValidityDuration` is `undefined` then
  //        email verify token never expires
  //     else
  //        email verify token expires after `emailVerifyTokenValidityDuration`
  //
  // `emailVerifyTokenValidityDuration` defaults to `undefined`
  //
  // email verify token below expires in 2 hours (= 2 * 60 * 60 == 7200 seconds)
  emailVerifyTokenValidityDuration: 2 * 60 * 60, // in seconds (2 hours = 7200 seconds)

  // set preventLoginWithUnverifiedEmail to false to allow user to login without verifying their email
  // set preventLoginWithUnverifiedEmail to true to prevent user from login if their email is not verified
  preventLoginWithUnverifiedEmail: false, // defaults to false

  // The public URL of your app.
  // This will appear in the link that is used to verify email addresses and reset passwords.
  // Set the mount path as it is in serverURL
  publicServerURL: 'https://example.com/parse',
  // Your apps name. This will appear in the subject and body of the emails that are sent.
  appName: 'Parse App',
  // The email adapter
  emailAdapter: {
    module: 'parse-server-sendmail-adapter',
    options: {
      // The address that your emails come from
      fromAddress: 'no-reply@yourdomain.com'
    }
  }
});
```

## Setup Email Template

```javascript
var server = ParseServer({
  ...
  emailAdapter: {
    module: 'parse-server-sendmail-adapter',
    options: {
      // The address that your emails come from
      fromAddress: 'no-reply@yourdomain.com',
      // Verification email subject
      verificationSubject: 'Please verify your e-mail for %appname%',
      // Verification email body
      verificationBody: 'Hi,\n\nYou are being asked to confirm the e-mail address %email% with %appname%\n\nClick here to confirm it:\n%link%',
      // Password reset email subject
      passwordResetSubject: 'Password Reset Request for %appname%',
      // Password reset email body
      passwordResetBody: 'Hi,\n\nYou requested a password reset for %appname%.\n\nClick here to reset it:\n%link%'
    }
  }
});
```

## License
MIT
