module.exports = function (eleventyConfig) {
  // Copy directories to the output
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('img');
  // copy favicons
  eleventyConfig.addPassthroughCopy('site.webmanifest');
  eleventyConfig.addPassthroughCopy('*.ico');
  eleventyConfig.addPassthroughCopy('*.png');

  // Watch directories for changes
  eleventyConfig.addWatchTarget('css');
  eleventyConfig.addWatchTarget('js');
  eleventyConfig.addWatchTarget('img');
  eleventyConfig.addWatchTarget('site.webmanifest');

  // FILTERS
  eleventyConfig.addFilter("notExpired", function(items) {
    const today = new Date();

    return items.filter(item => {
      if (!item.itemDateExpire) return true; // no date; always show

      const expireDate = new Date(item.itemDateExpire);
      
      if (expireDate >= today) {
        return true;
      } else{
        return false;
      }
    });
  });
};
