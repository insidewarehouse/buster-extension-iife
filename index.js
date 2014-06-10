module.exports = {
	name: "buster-extension-iife",

	create: function () {
		return Object.create(this);
	},

	configure: function (config) {
		config.on("load:tests", function (resourceSet) {
			resourceSet.addProcessor(function (resource, content) {
				return "(function () { " + content + " }());";
			});
		});
	}
};
