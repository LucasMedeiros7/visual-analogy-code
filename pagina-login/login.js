const email = document.getElementById('email')
const senha = document.getElementById('senha')
const erroEmail = document.getElementById('erro-email')
const erroSenha = document.getElementById('erro-senha')

document.getElementById('btn-login').addEventListener('click', (e) => {
  e.preventDefault()
  validaInput()
})