const path = require('path');

module.exports = ({ env }) => ({
  upload: {
    provider: 'local',
    providerOptions: {
      path: path.join('/data/uploads'), // Persistent disk path
      sizeLimit: 1000000, // Adjust size limit if needed
    },
  },
});
