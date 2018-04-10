const aServiceModule = require('./AService');

class BService {
  hello() {
    console.log('Hello B');
  }

  helloFromA() {
    new aServiceModule.AService().hello();
  }
}

module.exports.BService = BService;
