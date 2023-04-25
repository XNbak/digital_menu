const nodeLibsBrowser = require('node-libs-browser');

module.exports = {
  // ... other webpack configuration options ...
  resolve: {
    fallback: nodeLibsBrowser()
  }
};