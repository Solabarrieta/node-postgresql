const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'oier',
    password: '1234',
    database: 'my_store'
  })

  client.connect()
  return client
}

module.exports = getConnection



