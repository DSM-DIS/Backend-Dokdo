const { BadRequest } = require('../../errors');

const checkIntegerArg = (num) => {
  const isFloatExp = /[*.*]/;

  if (isNaN(num) || isFloatExp.test(num) || num < 1) {
    throw BadRequest;
  }
};

module.exports = checkIntegerArg;