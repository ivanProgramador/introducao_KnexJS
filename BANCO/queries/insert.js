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


//inserindo dados na tabela 
//aqui eu estou fazendo um inserção em massa de 3 jogos ao mesmo tempo 

dados=[
    {nome:'Sea of Thieves',preco:17.50},
    {nome:'NFS Underground',preco:30.50},
    {nome:'God of War',preco:45.50}
]

//a função isert do knex consegue processar um array de objetos e inserir linha a linha 

knex('games').insert(dados).then(() => console.log('inserted row'));