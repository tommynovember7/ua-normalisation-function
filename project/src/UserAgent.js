const keywords = [
  new RegExp('iPhone', 'i'),
  new RegExp('iPod', 'i'),
  new RegExp('Android.*Mobile', 'i'),
  new RegExp('BB[0-9]+.\\s*Kbd', 'i'),
  new RegExp('blackberry\\s?[0-9]+', 'i'),
  new RegExp('CUPCAKE', 'i'),
  new RegExp('dream', 'i'),
  new RegExp('incognito', 'i'),
  new RegExp('Presto', 'i'),
  new RegExp('webmate', 'i'),
  new RegExp('webOS', 'i'),
  new RegExp('Windows.*Phone', 'i'),
];
const isMobileViewer = (userAgentString) => {
  if (!userAgentString) {
    return true;
  }
  return keywords.some((pattern) => pattern.test(userAgentString));
};
const getLabel = (userAgentString) => (isMobileViewer(userAgentString) ? 'iPhone' : 'Chrome');

module.exports = {
  getLabel,
  isMobileViewer,
};
