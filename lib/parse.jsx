const parse = data => {
  try {
    console.log('parseData', data);
    return JSON.parse(data);
  } catch (e) {
    console.log('parseError', e);
    return undefined;
  }
};

export default parse;
