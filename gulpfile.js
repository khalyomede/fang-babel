const { src, dest, watch, series } = require("gulp");
const typescript = require("gulp-typescript");
const plumber = require("gulp-plumber");

const js = () =>
	src("src/main.ts")
		.pipe(plumber())
		.pipe(typescript())
		.pipe(dest("lib"));
const start = () => watch("src/**/*.ts", js);
const build = series(js);

module.exports = { start, build };
