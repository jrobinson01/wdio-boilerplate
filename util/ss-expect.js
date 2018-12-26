module.exports = function(results) {
  results.forEach(r => expect(r.isExactSameImage).toBe(true, 'not the same image!'));
};
