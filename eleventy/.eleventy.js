const HtmlMin = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');

module.exports = eleventyConfig => {
    eleventyConfig.setTemplateFormats(['njk']);

    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/css/styles.css');
    eleventyConfig.addPassthroughCopy('src/images');

    eleventyConfig.addPlugin(ErrorOverlay);
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
        if (outputPath.endsWith('.html')) {
            let minified = HtmlMin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }
        return content;
    });
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_templates',
            data: '_data',
        },
        jsDataFileSuffix: '.data',
    };
};