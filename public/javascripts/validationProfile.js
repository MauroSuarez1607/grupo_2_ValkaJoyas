const $ = id => document.getElementById(id);

window.onload = async function(e){

    // Validacion name

    $('name').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-name').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-name').innerHTML = "Solo se permiten letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-name').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    // Validacion Apellido

    $('surname').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-surname').innerHTML = "El apellido es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-surname').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-surname').innerHTML = "Solo se permiten letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-surname').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    // Validacion Nacimiento

    $('birthday').addEventListener('blur', function(e){
        
        const birthday = moment(this.value);
        const minDate = moment().subtract(100,'years');
        const currentDate = moment();

        switch (true) {

            case birthday.isBefore(minDate):
                $('msgError-birthday').innerHTML = "Ingresa una fecha valida";
                this.classList.add('is-invalid')
                break
            case birthday.isAfter(currentDate):
                $('msgError-birthday').innerHTML = "Ingresa una fecha valida";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-birthday').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });
    
    $("formProfile").addEventListener("submit", function (event) {
        event.preventDefault();
    
        const elementForm = this.elements;
        let error = false;
    
        for (let i = 0; i < elementForm.length - 4; i++) {
          if (
            !elementForm[i].value.trim() ||
            elementForm[i].classList.contains("is-invalid")
          ) {
            error = true;
            elementForm[i].classList.add("is-invalid");
            $("msgErr-empty").innerHTML = "EL FORMULARIO TIENE ERRORES";
          }
        }
    
        !error && this.submit();
      });

}