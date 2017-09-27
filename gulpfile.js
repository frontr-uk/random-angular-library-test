const path = require('path');

// Register TS compilation.
require('ts-node').register({
  project: path.join(__dirname, 'tools/gulp')
});

require('./tools/gulp/gulpfile');
