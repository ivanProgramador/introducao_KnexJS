//usando order by para definir a ordem em que os registros devem ser retornados
//o codigo abaixo abaixo executa uma consulta na qual o retorno dos dados deve ser decrescente
//com base no nome dos jogos

knex.select().table('games').orderBy('nome','desc').then(data=>{
    console.log(data)
  }).catch(err=>{
    console.log(err)
  })