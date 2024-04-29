
/*

Relacionamento de um para muitos.
     Nesse caso eu vou tratar um jogo que tem vários estúdios, eu preciso retornar o jogo e sua e lista de estúdios.

     só que nesse caso o knex traz todos os dados, mostrando uma lista de relacionamentos no terminal, se eu quiser os dados de um jeito especifico eu tenho que tratar.

    A ideia principal e trazer um jogo e uma lista de estúdios que desenvolveram ele.

*/


knex.select(["games.*","estudios.nome as estudio_nome"]).table("games").innerJoin("estudios","estudios.game_id","games.id").then(data=>{

         //essa variavel recebe os dados 
          var estudiosGamesArray = data;

         //aqui eu crio um objeto que vai receber o nome eo id do jogo

        //e um sub-array que vazio receber os estudios

          var game ={
            id:0,
            nome:"",
            estudios:[]
          }

      game.id = data[0].id; // id do jogo
      game.nome  = data[0].nome; // nome do jogo
          
 //escaneado o array para pagar os dados 

      data.forEach(estudio=>{

//cada dado encontrado entra no índice dosub-array
              estudiosGamesArray.estudios.push({nome: estudio.estudio_nome})
          })

/* mostrando um objeto game com os     estúdiosresponsáveis por ele
*/ 
      console.log(game);

}).catch(err=>{console.log(err)});