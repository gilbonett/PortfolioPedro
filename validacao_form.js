 export default function validacaoForm (){
    const form = document.querySelector(".form-contact");
    const name = document.querySelector("#nome")
    const email = document.querySelector("#email")
    const telefone = document.querySelector("#telefone")
    const mensage = document.querySelector("#mensage")
    
     const expresiones = {
        nome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefone: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const datosform = {
        nome: false,
        email: false,
        telefone: false,
        mensaje: false
    }
    
    
     function verifyInputs(){
        const valorName = name.value 
        const valorEmail = email.value 
        const valorTelefone = telefone.value 
        const valorMensage = mensage.value 
    
        
        //Verificação do campo name
        if (!expresiones.nome.test(valorName)) {
            mostrarError (name, "Nome só pode conter letras")
        } else if (valorName === ""){
            mostrarError (name, "Nome não pode estar vazio")
        } else {
            mostrarSuccess (name)
            datosform.nome = true;
        }  
        
        //Verificação do campo email
    
        if (!expresiones.email.test(valorEmail)) {
            mostrarError (email, "O email dever conter @")
        } else if (valorEmail === "") {
            mostrarError (email, "Email não pode estar vazio")
        } else{
            mostrarSuccess (email)
            datosform.email = true;
        }
            
        
        //Verificação do campo telefone
    
        if (!expresiones.telefone.test(valorTelefone)) {
            mostrarError (telefone, "Só pode conter entre 7 e 14 numeros")
        } else if ( valorTelefone === "") {
            mostrarError (telefone, "Telefone não pode estar vazio")
        } else {
            mostrarSuccess (telefone)
            datosform.telefone = true;
        }
        
        //Verificação do campo mensage
    
        if (valorMensage === "") {
            mostrarError (mensage, "Este Campo não pode estar Vazio")
        } else {
            mostrarSuccess (mensage)
            datosform.mensaje = true;
        }
        
        //Crear funciones para mostrar mensaje al tener error
         
        
    function mostrarError (input, message) {
        const formContato = input.parentElement;
        const $span = formContato.querySelector('span')
    
        $span.textContent = message
    
        formContato.className = 'formulario error'
    }
    
    function mostrarSuccess (input) {
        const formContato = input.parentElement;
    
        formContato.className = 'formulario sucess'
    }
    
     }

     form.addEventListener("submit", (e) => {
        e.preventDefault(); //Para no procesar formulario0
        verifyInputs()

        const loader = document.querySelector(".loader"),
        response = document.querySelector(".contact-response"),
        responseError = document.querySelector(".contact-response-erro")

        

        if (datosform.nome && datosform.email && datosform.telefone && datosform.mensaje) {
     /* Simulacion de peticion */
            setTimeout(() => {
                loader.classList.add("none"); //Ocultar el loader
                response.classList.remove("none"); //ocultar la respuesta
                form.reset(); //resetear el formulario

                setTimeout(() => response.classList.add("none"), 3000); //Ocultar mensaje despues de 3 segundos
            }, 3000)
           loader.classList.remove("none"); 
        } else {
           responseError.classList.remove("none");
           setTimeout(() => responseError.classList.add("none"), 3000);
        }
        
           
    })
 }

 //Primeiro passo é não deixar enviar o formulario se nao tiver preenchido e com as validaçoes


 