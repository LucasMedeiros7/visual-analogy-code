function mostraErro() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (email.value == '' || regex.test(email.value) == false)
    email.style.border = '1px solid red'
    email.classList.add('is-invalid')
    erroEmail.style.visibility = 'visible'
  if (senha.value == '' || senha.value.length < 6)
    senha.style.border = '1px solid red'
    senha.classList.add('is-invalid')
    erroSenha.style.visibility = 'visible'
}

function limpaEstilos() {
  email.style.border = 'initial'
  senha.style.border = 'initial'
  erroEmail.style.visibility = 'hidden'
  erroSenha.style.visibility = 'hidden'
  email.classList.remove('is-invalid')
  senha.classList.remove('is-invalid')
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
      alert('login com sucesso')
    } else mostraErro()
  }

  else
    mostraErro()
}
