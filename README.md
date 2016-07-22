# parse-server-sendmail-adapter

Used to send Parse Server password reset and email verification emails though sendmail

## Installation

```
npm install parse-server-sendmail-adapter --save
```

## Usage:

```
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
    module: 'simple-sendmail-adapter',
    options: {
      // The address that your emails come from
      fromAddress: 'no-reply@yourdomain.com'
    }
  }
});
```

## License
MIT
