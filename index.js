sendmail = require('sendmail')();
 
var SimpleSendmailAdapter = sendmailOptions => {
	if (!sendmailOptions.fromAddress) {
		throw 'SimpleSendmailAdapter requires fromAddress.';
	}
  
	sendmailOptions.verificationSubject =
		sendmailOptions.verificationSubject ||
		'Please verify your e-mail for %appname%';
	sendmailOptions.verificationBody =
		sendmailOptions.verificationBody ||
		'Hi,\n\nYou are being asked to confirm the e-mail address %email% ' +
		'with %appname%\n\nClick here to confirm it:\n%link%';
	sendmailOptions.passwordResetSubject =
		sendmailOptions.passwordResetSubject ||
		'Password Reset Request for %appname%';
	sendmailOptions.passwordResetBody =
		sendmailOptions.passwordResetBody ||
		'Hi,\n\nYou requested a password reset for %appname%.\n\nClick here ' +
		'to reset it:\n%link%';
    
	function fillVariables(text, options) {
		text = text.replace("%username%", options.user.get("username"));
		text = text.replace("%email%", options.user.get("email"));
		text = text.replace("%appname%", options.appName);
		text = text.replace("%link%", options.link);
		return text;
	}
	
	var sendVerificationEmail = options => {
		return new Promise((resolve, reject) => {
			sendmail({
				from: sendmailOptions.fromAddress,
				to: options.user.get("email"),
				subject: fillVariables(sendmailOptions.verificationSubject, options),
				content: fillVariables(sendmailOptions.verificationBody, options)
			}, function(err, reply) {
				if (err) {
					reject(err);
				}
				resolve(reply);
			});
		});
	}
	
	var sendPasswordResetEmail = options => {
		return new Promise((resolve, reject) => {
			sendmail({
				from: sendmailOptions.fromAddress,
				to: options.user.get("email"),
				subject: fillVariables(sendmailOptions.passwordResetSubject, options),
				content: fillVariables(sendmailOptions.passwordResetBody, options)
			}, function(err, reply) {
				if (err) {
					reject(err);
				}
				resolve(reply);
			});
		});
	}

	var sendMail = mail => {
		return new Promise((resolve, reject) => {
			sendmail({
				from: sendmailOptions.fromAddress,
				to: mail.to,
				subject: mail.subject,
				content: mail.text
			}, function(err, reply) {
				if (err) {
					reject(err);
				}
				resolve(reply);
			});
		});
	}

	return Object.freeze({
		sendVerificationEmail: sendVerificationEmail,
		sendPasswordResetEmail: sendPasswordResetEmail,
		sendMail: sendMail
	});
}

module.exports = SimpleSendmailAdapter