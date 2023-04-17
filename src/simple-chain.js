const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.links.reverse();
    return this;

  },
  finishChain() {
    const link = this.links.join('~~');
    this.links.length = 0;
    return link;
  }
};

module.exports = {
  chainMaker
};
