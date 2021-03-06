var define = require('node-define').requirejs.define;
var testSetup = require('setup-referee-sinon');
var referee = testSetup.referee;

define('referee', function() { return referee; });
define('assert', function() { return referee.assert; });
define('refute', function() { return referee.refute; });
define('expect', function() { return referee.expect; });
define('sinon', function() { return testSetup.sinon; });
