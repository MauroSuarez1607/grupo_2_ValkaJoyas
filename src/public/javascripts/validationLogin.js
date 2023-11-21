
const $ = id => document.getElementById(id);

window.onload = function(){

    // Validacion de Email 

    $('email').addEventListener('focus',function(e){
        $('msgError-email').innerHTML = null
        this.classList.remove('is-invalid')
    })

    $('email').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-email').innerHTML = "Debes ingresar tu email de registro"
                this.classList.add('is-invalid')
                break;
            case !isValidEmail(this.value):
                $('msgError-email').innerHTML = "El formato del correo electrónico no es válido"
                this.classList.add('is-invalid')
                break;
            default:
                break;
        }
    })

    function isValidEmail(email) {
        // Expresión regular para validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    // Validacion de Password

    $('password').addEventListener('focus',function(e){
        $('msgError-password').innerHTML = null
        this.classList.remove('is-invalid')
    })

    $('password').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-password').innerHTML = "Debes ingresar tu contraseña"
                this.classList.add('is-invalid')
                break;
            case this.value.length < 6:
                $('msgError-password').innerHTML = "La contraseña debe tener al menos 6 caracteres"
            this.classList.add('is-invalid')
                break;
            default:
                break;
        }
    })



}