//atualizando dados 

knex.where({id:5}).update({preco:40}).table('games').then(data=>{
    console.log(data)
  }).catch(err=>{
    console.log(err)
     
  });