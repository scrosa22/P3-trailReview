const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'developer.nps.gov/api/v1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
