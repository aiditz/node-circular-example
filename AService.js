const bServiceModule = require('./BService');

class AService {
  hello() {
    console.log('Hello A');
  }

  helloFromB() {
    new bServiceModule.BService().hello();
  }
}

module.exports.AService = AService;
