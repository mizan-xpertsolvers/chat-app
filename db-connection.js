const mongoose = require("mongoose");

const remoteConnection = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: mongoose,
      settings: {
        uri: 'mongodb+srv://doadmin:5748lspm1qxVH962@getaclue-db-a370fada.mongo.ondigitalocean.com/',
        srv: true,
        port: 27017,
        database: 'admin',
      },
      options: {
        authenticationDatabase: null,
        ssl: true,
        sslCA: 'ca-certificate.crt',
      },
    },
  },
})

module.exports = {remoteConnection}