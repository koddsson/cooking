module.exports = {
  eleventyComputed: {
    something: data => {
      console.log(data)
      return 'poop'
    }
  }
};
