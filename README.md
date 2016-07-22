# parse-server-sendmail-adapter

Used to send Parse Server password reset and email verification emails though sendmail

## Installation

```
npm install parse-server-sendmail-adapter --save
```

## Usage:

```
var server = ParseServer({
  ...
  // App Name
  appName: 'YourAppName',
  // Environment where the user can confirm his e-mail address or reset his password (most likely the same as your 'serverURL')
  publicServerURL: 'YourPublicServerURL',
  emailAdapter: {
    module: 'simple-sendmail-adapter',
    options: {
      // The address that your emails come from
      fromAddress: 'no-reply@yourdomain.com'
    }
  }
  ...
});
```

## License
MIT
