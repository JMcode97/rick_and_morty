export default function validate(data) {
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regExPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,10}$/
    let errors = {
        email:'',
        password: '',
    }
    if(!regExEmail.test(data.email) || !data.email || data.email.length > 34) errors.email = 'Email inválido'
    else errors.email = ''
    if(!regExPassword.test(data.password)) errors.password = 'Contraseña inválida'
    else errors.password = ''

    return errors
}
