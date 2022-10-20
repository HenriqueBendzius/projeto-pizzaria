const bcrypt =require('bcrypt');
const fs = require('fs');
const usuarios = require('../databases/usuarios.json');

const listarUsuario = require('..databases/usuarios.json');

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

function salvar(arrayDeUsuarios){
    // Seu código aqui
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


let usuario = {
nome: "Nome do Usuário",
email:"email@dousuario.com",
senha: 123456,
endereco: ["Rua dos usuários, nº 256. Usuariolândia-BA"] ,

}

cadastrar(Usuario);





function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
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