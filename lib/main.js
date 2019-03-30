"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var babel = require("@babel/core");
var path_1 = require("path");
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
var fangBabel = function (options) { return function (fang) {
    fang.pluginName = "fang-babel";
    fang.files.forEach(function (file) {
        var additionalOptions = {
            filename: path_1.basename(file.path),
            code: true,
            ast: false
        };
        file.content = Buffer.from(babel.transformSync(file.content.toString(), __assign({}, options, additionalOptions)).code);
        return file;
    });
    return fang;
}; };
module.exports = fangBabel;
