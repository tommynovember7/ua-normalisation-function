const { getLabel } = require('./src/UserAgent');

exports.handler = (event, context, callback) => {
  const { request } = event.Records[0].cf;
  const AGENT_HEADER = 'User-Agent';
  const agentHeaderKey = AGENT_HEADER.toLowerCase();
  const agentString = agentHeaderKey in request.headers ? request.headers[agentHeaderKey][0].value : '';

  const device = {
    key: AGENT_HEADER,
    value: getLabel(agentString),
  };
  request.headers[agentHeaderKey] = [device];

  callback(null, request);
};
