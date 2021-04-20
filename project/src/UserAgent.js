const keywords = [
  new RegExp('iPhone', 'i'),
  new RegExp('iPod', 'i'),
  new RegExp('Android.*Mobile', 'i'),
  new RegExp('blackberry9\d+', 'i'),
  new RegExp('CUPCAKE', 'i'),
  new RegExp('dream', 'i'),
  new RegExp('incognito', 'i'),
  new RegExp('Presto', 'i'),
  new RegExp('webmate', 'i'),
  new RegExp('webOS', 'i'),
  new RegExp('Windows.*Phone', 'i')
];
const isMobileViewer = (userAgentString) => {
  return keywords.some((pattern) => pattern.test(userAgentString));
};
const getLabel = (userAgentString) => {
  return isMobileViewer(userAgentString) ? 'iPhone' : 'Chrome';
};

module.exports = {
  getLabel,
  isMobileViewer
};
