 /*
  Relacionamento de muitos para muitos
  Nesse contexto o relaciomento vai ser de muitos para muitos,
  onde varios estudios tem varios jogos.

  no caso para fazer um relaciomento de muitos para muitos deve existir uma terceira 
  tabela que faça essa ligação, eu chemei ela de games_estudios ela liga o id do estudio com o id do jogo
  ,assim em uma consulta só eu consigo trazer todos os dados do jogo e do estudio.

  no codigo abaixo eu usao a clasula where para filtrar apenas as relações do estudio 2 
  mas caso eu tire esse filtor todos os relacionemntos seram exibidos no console.
  
  
  */

  knex.select([
    "estudios.nome as estudio_nome",
    "games.nome as game_nome",
    "games.preco"
    ])
    .table("games_estudios")
    .innerJoin("games","games.id","games_estudios.game_id")
    .innerJoin("estudios","estudios.id","games_estudios.estudio_id")
    .where("estudios.id",2)
    .then(data=>{
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })