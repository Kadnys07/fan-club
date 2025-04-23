function validaCadastro() {

var nome = document.getElementById("nome").value;
var expRegNome = /^[A-zA-u]{3,}([ ]{1}[A-zÀ-ü]{2,})+$/;

if (!expRegNome.test(nome)) {
    alert("Preencha o campo Nome corretamente");
    document.getElementById("nome").focus();
    return false;
}

 // Validação do sexo
 var sexoMasculino = document.getElementById("masculino").checked;
 var sexoFeminino = document.getElementById("feminino").checked;
 if (!sexoMasculino && !sexoFeminino) {
     alert("Selecione uma opção de Sexo");
     return false;
 }

 // Validação da data de nascimento
 var nascimento = document.getElementById("nascimento").value;
 if (nascimento == "") {
     alert("Preencha o campo Data de Nascimento");
     document.getElementById("nascimento").focus();
     return false;
 }
 
var fone = document.getElementById("fone").value;
var expRegFone = /^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$/;
if (!expRegFone.test(fone)) {
    alert("Preencha o campo Telefone");
    document.getElementById("fone").focus();
    return false;
}
if (document.getElementById("email").value == "") {
    alert("Preencha o campo E-mail");
    document.getElementById("email").focus();
    return false;
}
if (document.getElementById("motivo").value == "") {
    alert("Preencha o campo Motivo");
    document.getElementById("motivo").focus();
    return false;
}
if (document.getElementById("produtoOpcao").value == "") {
    alert("Preencha o campo Opção Produto");
    document.getElementById("produtoOpcao").focus();
    return false;
}
if (document.getElementById("comentario").value == "") {
    alert("Preencha o campo Comentário");
    document.getElementById("comentario").focus();
    return false;
}

return true;
}

$(document).ready(function() {
$("header").load("pages/general/cabecalho.html");
});