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

  /*
  Usar where no knex é um tarefa simples também o codigo abaixo mostra uma select com duas condições
  */

//essa querie é mais simples porque aqui eu procuro um jogo pelo nome

knex.select().where({nome:'Sea of Thieves'}).table('games').then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
   
});


/*
No cadigo abaixo eu estou colocando duas condições na busca alem do nome 
eu quero um jogo onde o valor seja menor doque 120 reais por questões de organização 
é importante evoitar usar mais que um select por isso a função whereRaw() como o nome
ja diz aceita o sql cru.

isso possibilista usar queries bem mais complexas sem sair do js 

*/

knex.select()
    .whereRaw("nome= 'Sea of Thieves' OR preco > 120 ")
    .table('games')
    .then(data=>{

     console.log(data);
  })
  .catch(err=>{
    console.log(err);
   
  });

