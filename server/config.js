ServiceConfiguration.configurations.remove({
	service: "facebook"
});

ServiceConfiguration.configurations.insert({
	service: "facebook",
	appId: "1767392246824711",
	secret: "acc7d1a6dafefc0e524c72042d3ac46d"
});

console.log("Facebook login configuration inserted");