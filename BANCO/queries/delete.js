 //executando um query delete
  //primiero eu chamo o knex que esta apontando para a base de dados 
  // depois eu informo os parametros de seleção do registro 
  // depois eu infomo oque eu quero fazer com ele 
  //depois eu informo a tabela onde o registro esta 

  knex.where({id:3}).delete().table("games").then(data=>{
    console.log(data); //se o registro for apagado com sucesso ele retorna 1 que eo numerop de colunas afetadas
  }).catch(err=>{
    console.log(err); //se não ele mostra porque não foi possivel deletar
  });