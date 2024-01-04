const crypto = require('crypto');

const generateRandomToken = (length) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(length, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        const token = buffer.toString('hex');
        resolve(token);
      }
    });
  });
};

const generateVerificationToken = () => {
  const token = crypto.randomBytes(20).toString('hex');
  return token;
};


module.exports = { generateRandomToken, generateVerificationToken };
