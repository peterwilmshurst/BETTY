const config = require('../config.js');
const GetGoogleFonts = require('get-google-fonts');

const fonts = async () => {
  // Setup of the library instance by setting where we want
  // the output to go. CSS is relative to output font directory
  const instance = new GetGoogleFonts({
    outputDir: config.fonts.exportPath,
    cssFile: './fonts.css'
  });

  // Grabs fonts and CSS from google and puts in the dist folder
  const result = await instance.download(config.fonts.fontUrl);

  return result;
};

module.exports = fonts;