# parse-server-sendmail-adapter

Mail adapter for Parse Server through sendmail

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
