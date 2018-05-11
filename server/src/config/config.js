module.exports = {
  port: process.env.PORT || 8081,

  db: {
    database: process.env.DB_NAME || 'pulse',
    User: process.env.DB_USER || 'pulse',
    password: process.env.DB_PASS || 'pulse',
    options: {
        dialect: 'sqlite',
        storage: './pulse.sqlite',


    }
  }
}
