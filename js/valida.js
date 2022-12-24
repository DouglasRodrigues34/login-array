const usuarios = [
    {
        login: 'douglas',
        pass: 'douglas'
    },
    {
        login: 'barbara',
        pass: 'barbara'
    },
    {
        login: 'arthur',
        pass: 'arthur'
    }
]

let botao = document.getElementById('btn-logar')

botao.addEventListener('click', function logar(){
    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false

    for(let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }
    }

    if(validaLogin == true){
        location.href = 'index.html'
    }else{
        alert('usuário e senha incorretos')
    }
})

