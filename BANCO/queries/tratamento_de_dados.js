
/*
   Relacionamento de um para muitos.
     Nesse caso eu vou tratar um jogo que tem varios estudios, eu preciso retornar o jogo e sua e lista de estúdios.

     só que nesse caso o knex traz todos os dados se eu quiser os dados de um jeito especifico eu tenho que tratar.
*/


knex.select(["games.*","estudios.nome as estudio_nome"])
   .table("games")
   .innerJoin("estudios","estudios.game_id","games.id")
   .then(data=>{
         //essa variavel recebe os dados 
          var estudiosGamesArray = data;
        
        //aqui eu crio um objeto que vai recebre o nome eo id do jogo
        //e um sub array que vasio receber os estudios

          var game ={
            id:0,
            nome:"",
            estudios:[]
          }
         
          game.id = data[0].id; // aqui eu coloco o id do jogo que vem dentro do array data na posição 0
          game.nome  = data[0].nome; // aqui eu coloco o nome do jogo que vem no array data na posição 0 tambem
          
          //aqui eu percorro todo o array de estudios
          data.forEach(estudio=>{
              //e para cada estudio encontrado eu coloco no sub array de estudios  
              estudiosGamesArray.estudios.push({nome: estudio.estudio_nome})
          })
          //a agora eu cosigo mostrar o jogo e os estudios soa quais ele pertence 
          console.log(game);


        })
    .catch(err=>{console.log(err)});