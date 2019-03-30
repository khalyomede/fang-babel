import * as babel from "@babel/core";
import { basename } from "path";

interface Options {}

/**
 * Transpiles a javascript file using babel.
 *
 * @param {Object} options The options to customize the behavior of babel.
 * @param {String} options.cwd
 * @param {Object} options.caller
 * @param {String} options.caller.name
 * @param {Boolean} options.caller.supportsStaticESM
 * @param {Array} options.plugins
 * @param {Array} options.presets
 * @param {Boolean} options.passPerPreset
 * @param {Boolean | String} options.sourceMaps
 * @param {String} options.sourceType
 * @param {Boolean} options.highlightCode
 * @param {Object} options.parserOpts
 * @param {Object} options.generatorOpts
 * @param {Boolean} options.retainLines
 * @param {Boolean | String} options.compact
 * @param {Boolean} options.minified
 * @param {String} options.auxiliaryCommentBefore
 * @param {String} options.auxiliaryCommentAfter
 * @param {Boolean} options.comments
 * @param {Function} options.shouldPrintComment
 * @param {Boolean} options.moduleIds
 * @param {String} options.moduleId
 * @param {Function} options.getModuleId
 * @param {String} options.moduleRoot
 * @return {Object}
 * @see https://babeljs.io/docs/en/next/options For a list of available babel options.
 */
const fangBabel = (options: Options): Object => fang => {
	fang.pluginName = "fang-babel";

	fang.files.forEach(file => {
		const additionalOptions = {
			filename: basename(file.path),
			code: true,
			ast: false
		};

		file.content = Buffer.from(
			babel.transformSync(file.content.toString(), {
				...options,
				...additionalOptions
			}).code
		);

		return file;
	});

	return fang;
};

export = fangBabel;
