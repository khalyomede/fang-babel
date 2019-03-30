const fang = require("@khalyomede/fang");
const babel = require("./lib/main");

const js = () =>
	fang
		.from("example/src/js/**/*.js")
		.do(babel())
		.save("example/dist/js");

const build = [js];

module.exports = { build };
