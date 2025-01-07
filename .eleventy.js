module.exports = function (eleventyConfig) {
  // Copy directories to the output
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('img');
  // copy favicons
  eleventyConfig.addPassthroughCopy('site.webmanifest');
  eleventyConfig.addPassthroughCopy('*.ico');
  eleventyConfig.addPassthroughCopy('*.png');


  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('css');
  eleventyConfig.addWatchTarget('js');
  eleventyConfig.addWatchTarget('img');
  eleventyConfig.addWatchTarget('site.webmanifest');
};