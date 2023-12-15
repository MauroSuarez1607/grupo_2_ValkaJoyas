const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("keywords").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgErr-keywords").innerHTML = "Ingrese un producto";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgErr-keywords").innerHTML = "Minimo dos letras";
        this.classList.add("is-invalid");
        break;
      case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
        $("msgErr-keywords").innerHTML = "Solo se permiten letras";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgErr-keywords").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("formKeywords").addEventListener("submit", function(event) {
    event.preventDefault()
    let error = false;
    if (!$("keywords").value.trim() || $("keywords").classList.contains('is-invalid')) {
        error = true
        $("msgErr-keywords").innerHTML = null;
        this.classList.remove("is-invalid");
        $("msgErr-empty").innerHTML = "Debe colocar un producto";
    }
    !error && this.submit();

  })
};
