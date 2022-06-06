const email = document.getElementById('email')
const senha = document.getElementById('senha')
const erroEmail = document.getElementById('erro-email')
const erroSenha = document.getElementById('erro-senha')
const modal = document.querySelector('#modal')
const btnHome = document.getElementById('btn-home')


document.getElementById('btn-login').addEventListener('click', (e) => {
  e.preventDefault()
  if(senha != null)
    validaInput()
  else 
    recuperarSenha()
})

modal.onclick = () => modal.style.display = 'none'
btnHome.onclick = () => window.location.href = ('../index.html')



