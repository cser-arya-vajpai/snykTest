const _ = require('lodash');
const minimist = require('minimist');
const serialize = require('serialize-javascript');

console.log('--- Vulnerable Snyk Test App ---');

// Demonstration of lodash usage
const defaults = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
console.log('lodash defaults output:', defaults);

// Demonstration of minimist usage
const args = minimist(['--x', 'y']);
console.log('minimist parsed args:', args);

// Demonstration of serialize-javascript usage
const serialized = serialize({ foo: /bar/ });
console.log('serialized output:', serialized);
