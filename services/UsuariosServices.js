// const bcrypt =require('bcrypt');
const fs = require('fs');
const usuarios = require('../databases/usuarios.json');



function listar(){
    // Seu código aqui
    console.table(usuarios.map(u => {
        return {
            id:u.id,
            nome: u.nome,
            email: u.email

        }
    }


    ));

}
function listarNomes(){
  const retornaNome = usuario =>{
    return usuario.nome;

  }
    let nomeDosUsuarios = usuarios.map(retornaNome);
    console.table(nomeDosUsiuarios);
    
}

function buscar(trecho){
   let temTrechoNome = usuario => usuario.nome.includes(trecho);
   let usuarioscomnomesbuscados = usuarios.filter(temTrechoNoNome);
   return usuarioscomnomesbuscados;
    
}


function salvar(arrayDeUsuarios){
    // Seu código aqui
    const fs =require('fs');
    fs.writeFileSync('./databases/usuarios.json' , JASON.stringify(arrayDeUsuarios ,null,4));

}


function cadastrar(objeto){
// Seu código aqui

let senhaCripto = bcrypt.hashSync(objeto.senha, 10);

let novoId = Usuarios[Usuarios.length-1].id+1;
  let usuario = {

    id: novoId,
    nome: objeto.nome,
    email: objeto.email,
    senha: senhaCripto,
    endereco: [objeto.endereco]
   
}
usuarios.push(usuario);
fs.writFileSync('./databases/usuarios.json', JSON.stringify(Usuarios,null,4));
}




// cadastrar(Usuario);





function detalhar(idUsuario){
// Seu código aqui
    let usuarioAchado=dadosUsuarios.find(u => u.id == idUsuario)

    console.log(`nome: ${usuarioAchado.nome}`);
    console.log(`email:${usuarioAchado}`);
    console.log(`endereços`);
    console.table(usuarioAchado.endereco);
    console.log(`\n`);
    console.log(`formasDePagamento`);
    console.table(usuarioAchado.formasDePagamento)
            




}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui

    let removerId = removerId.map(function(objeto){
        if(objeto.id != id)
        return objeto;
        else {
            return false;
        }
    })


}

function alterar(novosDados, idUsuario){
    // Seu código aqui
let index = dadosUsuarios.findIndex(u=> u.id == idUsuario)

    dadosUsuarios[index].nome = novosDados.nome
    dadosUsuarios[index].email = novosDados.email
    dadosUsuarios[index].senha = novosDados.senha
    salvar(dadosUsuarios)

}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
    let index = dadosUsuarios.findIndex(u=> u.id == idUsuario)
    dadosUsuarios[index].endereco.push(novoEndereco)
    salvar(dadosUsuarios)

    

}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
    let index = dadosUsuarios.findIndex(u => u.id == idUsuario)
    dadosUsuarios[index].enderecos.splice(posicaoDoEndereco,1)
    salvar(dadosUsuarios)




}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
let index = dadosUsuarios.findIndex(u => u.id == idUsuario)
dadosUsuarios[index].enderecos.splice(posicaoDoEndereco,1 , novoEndereco)
salvar(dadosUsuarios)


}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
    let index = dadosUsuarios.findIndex(u => u.id == idUsuario)
    dadosUsuarios[index].formasDePagamento.push(novaFormaDePagamento)
    salvar(dadosUsuarios)


}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
    let index = dadosUsuarios.findIndex(u => u.id == idUsuario)
    dadosUsuarios[index].formasDePagamento.splice(posicaoDaFormaDePagamento ,1)
    salvar(dadosUsuarios)


}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
    let index = dadosUsuarios.findIndex(u => u.id == idUsuario)
    dadosUsuarios[index].formasDePagamento.splice(posicaoDaFormaDePagamento ,1 , novaFormaDePagamento)
    salvar(dadosUsuarios)



}

const UsuariosServices = {
    cadastrar,
    listar,
    listarNomes,
    salvar,
    buscar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;