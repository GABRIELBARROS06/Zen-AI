'use strict'

const inputUsuario = document.getElementById('email')
const inputSenha = document.getElementById('senha')

const btn = document.getElementById('button')
btn.addEventListener('click', validarLogin)

inputUsuario||inputSenha.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        validarLogin()
    }
})

async function validarLogin() {
    const url = 'https://back-login.vercel.app/usuarios'
    const response = await fetch(url)
    const usuarios = await response.json()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if(email == '' || senha == ''){
        alert('Preencha todos os campos!!')
    }
    else{
       let validaUser = false
       
        usuarios.forEach(element => {
            if (email === element.nome && senha === element.senha) {
                alert('Usuário logado com sucesso!!!')
                window.location.href = '../home.html'
            }
        });
        if (validaUser) {
            alert('Por favor verifique o email')
        }
    
    }

   
}