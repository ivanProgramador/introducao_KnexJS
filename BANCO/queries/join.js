
  /*
  Nesse caso foi criada uma outra tabela dentro da base de dados chamada estudios,
  cada estudio tem id,nome e id_game que é o id do jogo que pertence a ele, em um contexto 
  real um estudio nunca produz somente um jogo porém eu fiz isso somente como demonstração
  para que possa executar consultas usando o join com o knex.
  
  No caso abaixo eu vou consultar duas tabelas a tela de estudios e a tabela de jogos
  dentro do select eu estou buscando o 
  - id dos jogos
  eo o id dos estudios poré como nas duas tabelas o campo id tem o mesmo nome eu 
  preciso criar um alias para que o knex nmão traga só um.Ea mesma coisa eu faço com o nome do jogo 
  porque o campo nome tambem existe na tabela estudios se eu não especificar ele so traz um 

  e é assim que se faz um join de tabelas no Knex.
  */

  knex.select(
    [
      'games.id',
      'estudios.id as estudio_id',
      'games.nome as game_nome'
    ])
      .table('games').then(data=>{
        console.log(data);
  }).catch(err=>{
     console.log(err);
  });