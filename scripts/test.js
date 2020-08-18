const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfigFile('src/test/jasmine.json');

jasmine.execute();