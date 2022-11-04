// 1 importar o express
const express = require('express');

// 2 criar o(servidor) ou aplicação app
const servidor = express();

// 3 definir uma rota para o servidor 
//endereço  ,  método  ,  função callback (a ação que o servidor vai realizar quando rep chegar)

servidor.get('/usuarios' , (req, res)=>{console.log("chegou uma requisição"); 
console.log("vou te enviar uma lista de usuários...");
return res.send("permaneça em linha...");
});




// 4 por o servidor para rodar "aguardando requisição"
 servidor.listen(3000);




