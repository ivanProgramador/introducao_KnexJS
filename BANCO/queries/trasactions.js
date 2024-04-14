
  /*
  Trasactions 
    Basicamente são queries executadas em sequencia so que a difereça e que a execução de uma esta ligada a outra.
    O objetivo disso e proteger a integridade dos dados regsitrados na base por exemplo no caso de uma transação de
    pagamento.

    1 - registra dados do cliente 
    2 - registra forma de pagamento (falha)
    3 - registra data hora do pagamento

    se o passo 2 do registro falhar eu vou ter um cliente pagante regitrado, não vou saber como ele pagou 
    mas vou ter a data e hora do pagamento, isso não faz sentido para sistema de pagamentos, se falha acontecesse,
    no primeiro passo eos outros 2 falhassem eu teria um pagamento mas não saberia quem foi que fez, isso tambem não 
    faz sentido.
    
    Por isso as transactions em caso de falha não executam nenhuma das etapas para evitar registros inconsistentes

    No codigo abaixo eu estou inserindo uma lista de estudios na tabela mas como se tratad e um transaction se uma 
    das inserções falhar nenhum dado será registrado 
  */

    async function testeTransacao(){

        try {
   
          await knex.transaction(async trans =>{
             
             await knex.insert({nome:'Rockstar nort'}).table('estudios');
             await knex.insert({nome:'Pixar'}).table('estudios');
             await knex.insert({nome:'poliphone'}).table('estudios');
             await knex.insert({nome:'Rare'}).table('estudios');
             await knex.insert({nome:'Aklain studios'}).table('estudios');
   
          });
         
        } catch (err) {
          console.log(err)
         
        }
   
     }
   