const config = require('../config.js');
const {dest, src} = require('gulp');
const minify = require('gulp-minify');

const scripts = () => {
  return src(config.scripts.sourcePaths)
    .pipe(minify({
      ext:{
        min:'.min.js'
    },
      exclude: ['vendor'],
      ignoreFiles: ['min.js'],
      noSource: true,
    }))
    .pipe(dest(config.scripts.exportPath));
};

module.exports = scripts;
