// Update with your config settings.

module.exports = {


  client: 'postgresql',
  connection: {
    host : 'ec2-3-234-22-132.compute-1.amazonaws.com',
    user : 'xgpjvrusfpowfm',
    password : 'fed01ca765c0246feecd31e3af63b037f597f8e4d9804416929477a3f19026f9',
    database : 'd8tmtok9n98ud0'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
