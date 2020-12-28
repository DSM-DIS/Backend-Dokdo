const { stringLen } = require('../../config');
const { BadRequest } = require('../../errors'); 
const { checkStringArg } = require('./');

const checkContent = (content) => {
  checkStringArg(content);
  if (content.length > stringLen.content) {
    throw BadRequest;
  }
};

module.exports = checkContent;