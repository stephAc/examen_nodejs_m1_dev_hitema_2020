const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, contents) => {
      if (err) reject();
      const res = Buffer.from(contents.toString(), 'hex').toString();
      resolve(res);
    });
  });
};
