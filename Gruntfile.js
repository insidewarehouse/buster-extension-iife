module.exports = function (grunt) {
	grunt.initConfig({
		buster: {
			dist: {
				reporter: "specification"
			}
		}
	});
	grunt.loadNpmTasks('grunt-buster');

	grunt.registerTask("default", ["test"]);
	grunt.registerTask("test", ["buster"]);
};
