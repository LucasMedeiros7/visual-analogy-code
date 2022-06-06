function mostraErro() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (senha.value == '' || senha.value.length < 6) {
    senha.style.border = '1px solid red'
    senha.classList.add('is-invalid')
    erroSenha.style.visibility = 'visible'
  }

  if (email.value == '' || regex.test(email.value) == false) {
    email.style.border = '1px solid red'
    email.classList.add('is-invalid')
    erroEmail.style.visibility = 'visible'
  }

}

function limpaEstilos() {
  email.style.border = '1px solid #28A745'
  senha.style.border = '1px solid #28A745'
  erroEmail.style.visibility = 'hidden'
  erroSenha.style.visibility = 'hidden'
  email.classList.remove('is-invalid')
  senha.classList.remove('is-invalid')
  senha.classList.add('is-valid')
}

function validaInput() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let emailValor = email.value
  let senhaValor = senha.value

  if (emailValor == '')
    mostraErro()

  else if (regex.test(emailValor)) {
    if (senhaValor == '')
      mostraErro()
    else if (senhaValor.length >= 6) {
      limpaEstilos()
      modal.style.display = 'block'
    } else mostraErro()
  }

  else
    mostraErro()
}


function recuperarSenha() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let emailValor = email.value

  if (emailValor == '' || regex.test(email.value) == false) {
      email.style.border = '1px solid red'
      email.classList.add('is-invalid')
      erroEmail.style.visibility = 'visible'
  } else {
    modal.style.display = 'block'
    setTimeout( () => window.location.href = ('./login.html'), 3000)
  }
    
}