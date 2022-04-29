const config = require('../config.js');
const {dest, src} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sassProcessor = require('gulp-sass')(require('sass'));

// Flags wether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

// The main Sass method grabs all root Sass files,
// processes them, then sends them to the output calculator
const sass = () => {
  return src(config.css.sourcePaths)
    .pipe(sassProcessor().on('error', sassProcessor.logError))
    .pipe(cleanCSS(isProduction ? {level: {2: {removeDuplicateRules: true, specialComments: 0}}} : {}))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest( config.css.exportPath, {sourceMaps: !isProduction}));
};

module.exports = sass;
