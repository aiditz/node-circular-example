const {AService} = require('./AService');
const {BService} = require('./BService');

new AService().helloFromB();
new BService().helloFromA();
