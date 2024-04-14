
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

//no select eu posso configurar quais os dados eu quero ver 
//no exemplo abaixo eu quero ver so o id eo preço 
/*
  knex.select(["id","preco"]).table('games').then(data=>{
     console.log(data)
  }).catch(err=>{
    console.log(err)
  })
*/

//executando um querie dupla 
//aqui eu executo a função de inserir e logo depois ei faço a consulta

knex('games').insert({nome:'Gears of war',preco:95.50}).then(data=>{
    knex.select(["id","preco"]).table('games').then(data=>{
        console.log(data)
     }).catch(err=>{
       console.log(err)
     })
    
}).catch(err=>{
    console.log(err);
});






