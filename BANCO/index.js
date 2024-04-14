
//configurando o acesso a base de dados 

var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '1234',
      database: 'knexjs',
    },
  });

  knex.select(["games.*","estudios.nome as estudio_nome"])
      .table("games")
      .innerJoin("estudios","estudios.game_id","games.id")
      .where("games.id",5)
      .then(data=>{console.log(data)})
      .catch(err=>{console.log(err)});




























