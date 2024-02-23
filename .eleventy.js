module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/_data/patents.json")

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
