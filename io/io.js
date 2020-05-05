const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'hex');
    const convert = (from, to) => (str) => Buffer.from(str, from).toString(to);
    const utf8ToHex = convert('utf8', 'hex');
    const hexToUtf8 = convert('hex', 'utf8');
  });
};
