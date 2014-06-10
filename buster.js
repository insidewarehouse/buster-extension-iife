var config = module.exports;

config["iife-tests"] = {
	rootPath: ".",
	environment: "browser",
	tests: [
		"test/*.test.js"
	],
	extensions: [ require("./index") ]
};
