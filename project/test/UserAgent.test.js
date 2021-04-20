const userAgents = require('./_fixture/userAgents.json');
const userAgent = require('../src/UserAgent');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

describe('Mobile UA Detection Tests', () => {
  test('Find Safari', () => {
    const UAString = userAgents.mobile[0][1];
    expect(userAgent.isMobileViewer(UAString)).toBeTruthy();
    expect(userAgent.getLabel(UAString)).toEqual('iPhone');
  });
  test('Find Chrome Mobile', () => {
    const UAString = userAgents.mobile[2][1];
    expect(userAgent.isMobileViewer(UAString)).toBeTruthy();
    expect(userAgent.getLabel(UAString)).toEqual('iPhone');
  });
  test('Find One of the Mobile Agents', () => {
    const key = getRandomInt(userAgents.mobile.length);
    const UAString = userAgents.mobile[key][1];
    console.log(UAString);
    expect(userAgent.isMobileViewer(UAString)).toBeTruthy();
    expect(userAgent.getLabel(UAString)).toEqual('iPhone');
  });
  test('Find No Mobile Agents', () => {
    const key = getRandomInt(userAgents.others.length);
    const UAString = userAgents.others[key][1];
    console.log(UAString);
    expect(userAgent.isMobileViewer(UAString)).toBeFalsy();
    expect(userAgent.getLabel(UAString)).toEqual('Chrome');
  });
  test('Find none of the Mobile Agents', () => {
    let result = false;
    result = userAgents.others.every((UA) => userAgent.isMobileViewer(UA[1]));
    expect(result).toBeFalsy();
  });
});
