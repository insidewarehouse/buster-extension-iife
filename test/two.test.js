var TWO = "two";

buster.testCase("two", {

	"should not have globals from one.test.js": function () {
		buster.referee.expect(typeof(ONE)).toEqual("undefined");
	}

});
