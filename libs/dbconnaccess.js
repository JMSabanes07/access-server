const adodb = require('node-adodb')
const config = require('../config.json')

// se necesita instalar unas weas de microsoft para que esto funcione
class AccessConnection {
  constructor() {
    this.connectionString = `Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${config.databaseLocation};true`
    this.connection = adodb.open(this.connectionString)
  }

  async query(sql) {
    try {
      return await this.connection.query(sql)
    } catch (error) {
      throw error.process.message
    }
  }
}

module.exports = AccessConnection
