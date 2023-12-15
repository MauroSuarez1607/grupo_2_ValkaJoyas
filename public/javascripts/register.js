const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("name").addEventListener("focus", function (e) {
    $("msgErr-name").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgErr-name").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgErr-name").innerHTML = "Minimo dos letras";
        this.classList.add("is-invalid");
        break;
      case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
        $("msgErr-name").innerHTML = "Solo se permiten letras";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgErr-name").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("surname").addEventListener("focus", function (e) {
    $("msgErr-surname").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("surname").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgErr-surname").innerHTML = "El apellido es obligatorio";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgErr-surname").innerHTML = "Minimo dos letras";
        this.classList.add("is-invalid");
        break;
      case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
        $("msgErr-surname").innerHTML = "Solo se permiten letras";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgErr-surname").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("email").addEventListener("focus", function (e) {
    $("msgErr-email").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("email").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgErr-email").innerHTML = "El email es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value.trim()):
        $("msgErr-email").innerHTML = "El formato es invalido";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgErr-email").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("email").addEventListener("change", async function (e) {
    try {
      const response = await fetch(
        `/apis/checkEmail?email=${this.value.trim()}`
      );
      const result = await response.json();

      if (result.data) {
        $("msgErr-email").innerHTML = "El email ya se encuentra registrado";
        this.classList.add("is-invalid");
      }
    } catch (error) {
      console.log(error);
    }
  });

  $("image").addEventListener("focus", function (e) {
    $("msgErr-image").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("image").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgErr-image").innerHTML = "La imagen es obligatoria";
        this.classList.add("is-invalid");
        break;
      case !/.*(png|jpg|jpeg|gif)$/.test(this.value):
        $("msgErr-image").innerHTML =
          "Solo se permite formato PNG, JPG, JPEG, GIF";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgErr-image").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("password").addEventListener("focus", function (e) {
    $("msgErr-password").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("password").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgErr-password").innerHTML = "La contraseña es obligatoria";
        this.classList.add("is-invalid");
        break;
      case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(
        this.value.trim()
      ):
        $("msgErr-password").innerHTML =
          "La contraseña debe tener entre 6 y 12 caracteres, minuscula, mayuscula, numero y caracter especial";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgErr-password").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("viewPassword").addEventListener("click", function (e) {
    $("msgErr-password").innerHTML = null;
    $("password").classList.remove("is-invalid");
    $("password").classList.remove("is-valid");

    $("password").type = $("password").type === "text" ? "password" : "text";

    this.classList.toggle("fa");
    this.classList.toggle("fa-eye");

    this.classList.toggle("fa-solid");
    this.classList.toggle("fa-eye-slash");
  });

  $("password2").addEventListener("focus", function (e) {
    $("msgErr-password2").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("password2").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgErr-password2").innerHTML = "Debes confirmar tu contraseña";
        this.classList.add("is-invalid");
        break;
      case this.value.trim() !== $("password").value.trim():
        $("msgErr-password2").innerHTML = "Las contraseñas no coinciden";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgErr-password2").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("formRegister").addEventListener("submit", function (event) {
    event.preventDefault();

    const elementForm = this.elements;
    let error = false;

    for (let i = 0; i < elementForm.length - 1; i++) {
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
};
