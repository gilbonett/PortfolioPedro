 export default function validacaoForm (){

 }

 //Primeiro passo é não deixar enviar o formulario se nao tiver preenchido e com as validaçoes

 
const form = document.querySelector(".form-contact");
const name = document.querySelector("#nome")
const email = document.querySelector("#email")
const telefone = document.querySelector("#telefone")
const mensage = document.querySelector("#mensage")

 form.addEventListener("submit", (e) => {
    e.preventDefault()

    verifyInputs()
 })

 const expresiones = {
	nome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefone: /^\d{7,14}$/ // 7 a 14 numeros.
}


 function verifyInputs(){
    const valorName = name.value 
    const valorEmail = email.value 
    const valorTelefone = telefone.value 
    const valorMensage = mensage.value 

    //Verificação de todos os campos para eles não estiver vazios
    /* if (valorName === "" || valorEmail === "" || valorTelefone === "" || valorMensage === "" ) {
        //mostrar campo vacio 1era verificacion de todos los campos
        mostrarError (name, "Preencha todos os campos")
    } else {
        mostrarSuccess (name)
    } */

    //Verificação do campo name
    if (!expresiones.nome.test(valorName)) {
        mostrarError (name, "`Preencha o campo corretamente")
    } else if (valorName === ""){
        mostrarError (name, "Nome não pode estar vazio")
    } else {
        mostrarSuccess (name)

    }  
    
    //Verificação do campo email

    if (!expresiones.email.test(valorEmail)) {
        mostrarError (email, "Preencha o email corretamente")
    } else if (valorEmail === "") {
        mostrarError (email, "Email não pode estar vazio")
    } else{
        mostrarSuccess (email)
    }
        
    
    //Verificação do campo telefone

    if (!expresiones.telefone.test(valorTelefone)) {
        mostrarError (telefone, "Preencha o telefone corretamente")
    } else if (valorTelefone === "") {
        mostrarError (telefone, "Telefone não pode estar vazio")
    } else {
        mostrarSuccess (telefone)
    }
    
    //Verificação do campo mensage

    if (valorMensage === "") {
        mostrarError (mensage, "Este Campo não pode estar Vazio")
    } else {
        mostrarSuccess (mensage)
    }

    

    //Crear funciones para mostrar mensaje al tener error
     
    
function mostrarError (input, message) {
    const formContato = input.parentElement;
    const $span = formContato.querySelector('span')

    $span.textContent = message

    formContato.className = 'form-error'
}

function mostrarSuccess (input) {
    const formContato = input.parentElement;

    formContato.className = 'form-success'
}

 }
 