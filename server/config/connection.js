const { connect, connection } = require('mongoose');
require('dotenv').config()


connect( process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/trailreview_DB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



module.exports = connection;