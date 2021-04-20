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

exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const AGENT_HEADER = 'User-Agent';
  const agentHeaderKey = AGENT_HEADER.toLowerCase();
  const agentString = request.headers[agentHeaderKey][0]['value'];

  if (agentString) {
    const device = {
      'key': AGENT_HEADER,
      'value': getLabel(agentString)
    };
    request.headers[agentHeaderKey] = [device];
  }
  callback(null, request);
};
