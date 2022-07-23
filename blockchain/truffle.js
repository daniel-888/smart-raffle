require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      from: process.env.RINKEBY_FROM, // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4000000 // Gas limit used for deploys
    }
  }
};