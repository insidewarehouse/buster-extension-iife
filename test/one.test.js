var ONE = "one";

buster.testCase("one", {

	"should not have globals from two.test.js": function () {
		buster.referee.expect(typeof(TWO)).toEqual("undefined");
	}

});
