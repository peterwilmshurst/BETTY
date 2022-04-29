# BETTY
##### v2.0

Cheeky little task runner.

## Config
A config.js file is required to set the project source and export paths required for the tasks detailed below. The config file should be placed in the 'gulp' folder. An example of this file can be seen below.

Remember to include your Project Folder as the `baseName` and add your fonts to `fontUrl` *e.g. https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap*

```js
const baseName = '';

module.exports = {
    app: { name: `${baseName}`},
    css: {
        sourcePaths: [
            `../${baseName}/src/scss/**/*.scss`,
        ],
        exportPath: `../${baseName}/marketplace_builder/assets/css/`
    },
    scripts: {
        sourcePaths: [
            `../${baseName}/src/js/**/*.js`,
        ],
        exportPath: `../${baseName}/marketplace_builder/assets/js/`
    },
    images: {
        sourcePaths: [
            `../${baseName}/src/images/**/*`,
        ],
        exportPath: `../${baseName}/marketplace_builder/assets/images/`
    },
    fonts: {
        exportPath: `../${baseName}/marketplace_builder/assets/fonts/`,
        fontUrl: ``
    }
};
```

## Tasks

### Fonts

`$ gulp fonts`

This task will download fonts from google fonts and produce a fonts stylesheet which can be applied to a web page after load. This improves performance because we can serve the fonts locally.

Example usage for loading after content:

`<link rel="stylesheet" media="print" href="{{ '/fonts/fonts.css' | asset_url }}" onload="this.media='all'" />`

---

### Images

`$ gulp images`

This task will take any compare images from the src folder with the assets folder based on last modification date. If an image in src is newer it will optimise the image and send it to the assets folder.

---

### Sass

`$ gulp sass`

This task compiles and minifies sass from the src folder into css in the assets folder. When the production flag is set to false the files will include source maps.

---

### Scripts

`$ gulp scripts`

This task will take javascript files from src/js, minify them if they are not already minified and move into the assets folder. The task will not modify any files which come under src/js/vendor, it will move them directly into the assets.

---

### Watcher

`$ gulp watch`

This task runs images, sass and scripts when changes are made in the respective source folders.