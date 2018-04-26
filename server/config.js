ServiceConfiguration.configurations.remove({
	service: "facebook"
});

ServiceConfiguration.configurations.insert({
	service: "facebook",
	appId: "1767392246824711",
	secret: "acc7d1a6dafefc0e524c72042d3ac46d"
});

console.log("Facebook login configuration inserted");

ServiceConfiguration.configurations.remove({
	service:'google'
});

ServiceConfiguration.configurations.insert({
	service:'google',
	clientId:'964360777763-io7s738uh938a7nn6svvnrq7csd0o014.apps.googleusercontent.com',
  	secret: 'VK-3CxICVvHP-YZLzLu5UFS7'
});

console.log("Google login configuration inserted");

ServiceConfiguration.configurations.remove({
	service:'twitter'
});

ServiceConfiguration.configurations.insert({
	service:'twitter',
	consumerKey:'2GvvTpv2UCTXguOuNrnMyDlRR',
  	secret: 'LJ1VDzHgYU0vh8Tx01oGiPyOPeo1BbIpwGSVPm9oGt4HPWFSTp'
});

console.log("Twitter login configuration inserted");