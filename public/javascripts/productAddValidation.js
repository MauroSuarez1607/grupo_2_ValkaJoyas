const $ = (id) => document.getElementById(id);
const textarea = document.querySelector('textarea');

window.onload = function () {
  textarea.addEventListener("focus", function (e) {
    window.addEventListener("keyup", function (e) {
      let liveKey = textarea.value.length;
      let textareaValue = textarea.value;
      console.log(e.key);

      if (liveKey < 350) {
        $("numTotal").innerText = liveKey;
      } else {
        textarea.value = textareaValue.substring(0, 300);
        e.preventDefault();
      }
    });

    $("msg-description").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  textarea.addEventListener("blur", function (e) {
    switch (true) {
      case !/^[a-zA-Z0-9\sáéíóúüñÁÉÍÓÚÜÑ]*$/.test(this.value.trim()):
      $("msg-description").innerHTML = "Solo se permiten letras, números y letras con acentos";
      this.classList.add("is-invalid");
        break;
      case !this.value:
        $("msg-description").innerHTML = "Debes ingresar una descripción del producto";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length <= 20:
        $("msg-description").innerHTML = "Describa sobre el producto (mínimo 20 caracteres)";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length > 300:
        $("msg-description").innerHTML = "Unicamente hasta 300 caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-description").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $("formName").addEventListener("focus", function (e) {
    $("msg-name").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("formName").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-name").innerHTML = "Debes ingresar un nombre";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 5:
        $("msg-name").innerHTML = "Debes ingresar como minimo 5 caracteres";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9\sáéíóúñ]*$/.test(this.value.trim()):
        $("msg-name").innerHTML = "Solo se permiten letras y números";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-name").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

    // ----------------marca
  $("brand").addEventListener("focus", function (e) {
    $("msg-brand").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("brand").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-brand").innerHTML = "Debes ingresar una marca";
        this.classList.add("is-invalid");
        break;
    
      case this.value.trim().length > 25:
        $("msg-brand").innerHTML = "Unicamente hasta 25 caracteres";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9\sáéíóúñ]*$/.test(this.value.trim()):
        $("msg-brand").innerHTML = "Solo se permiten letras y números";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-brand").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  // ----------------modelo
  $("model").addEventListener("focus", function (e) {
    $("msg-model").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("model").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-model").innerHTML = "Debes ingresar un modelo";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length > 25:
        $("msg-model").innerHTML = "Unicamente hasta 25 caracteres";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9\sáéíóúñ]*$/.test(this.value.trim()):
        $("msg-model").innerHTML = "Solo se permiten letras y números";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-model").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

    // ----------------colección
  $("collection").addEventListener("focus", function (e) {
    $("msg-collection").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("collection").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-collection").innerHTML = "Debes ingresar una colección";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length > 25:
        $("msg-collection").innerHTML = "Unicamente hasta 25 caracteres";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9\sáéíóúñ]*$/.test(this.value.trim()):
        $("msg-collection").innerHTML = "Solo se permiten letras y números";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-collection").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  // ------------------------- CLASIFICACIÓN ---------------------------------------
  // ----------------metal
  $("metal").addEventListener("focus", function (e) {
    $("msg-metal").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("metal").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value:
        $("msg-metal").innerHTML = "Debes seleccionar un tipo de metal";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-metal").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  // ----------------numero de piedras
  $("countStones").addEventListener("focus", function (e) {
    $("msg-countStones").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("countStones").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value:
        $("msg-countStones").innerHTML = "Se debe poner el numero de piedras";
        this.classList.add("is-invalid");
        break;
      case !/^[0-9]+$/.test(this.value.trim()):
        $("msg-countStones").innerHTML = "Recuerda que debe ser un número entero no negativo";
        this.classList.add("is-invalid");
        break;
      case this.value < 0:
        $("msg-countStones").innerHTML = "El numero debe ser entero (0 o positivo)";
        this.classList.add("is-invalid");
        break;

      default:
        $("msg-countStones").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });
//----------------------------------piedras (tipos checkbox)
function validarPiedras() {
  const checkboxes = document.getElementsByName('stones');
  const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

  if (!isChecked) {
      $("msg-stones").innerHTML = 'Debes marcar al menos una opción de piedra.';
  } else {
      $("msg-stones").innerHTML = ''; 
  }
}

// función de validación y evento blur (checkboxes)
const piedrasCheckboxes = document.getElementsByName('stones');
piedrasCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('blur', validarPiedras);
});



// ----------------tamaño
$("size").addEventListener("focus", function (e) {
  $("msg-size").innerHTML = null;
  this.classList.remove("is-invalid");
});

  $("size").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-size").innerHTML = "Debes ingresar un tamaño";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length > 15:
        $("msg-size").innerHTML = "Unicamente hasta 15 caracteres";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9]*$/.test(this.value.trim()):
        $("msg-size").innerHTML = "Solo se permiten letras y números";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-size").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });
// ----------------medida
  $("measures_mm").addEventListener("focus", function (e) {
    $("msg-measures_mm").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("measures_mm").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value:
        $("msg-measures_mm").innerHTML = "El producto debe tener una medida";
        this.classList.add("is-invalid");
        break;
      case !/^[0-9]+$/.test(this.value.trim()):
        $("msg-measures_mm").innerHTML = "Recuerda que debe ser un número (en milimetros)";
        this.classList.add("is-invalid");
        break;
      case this.value <= 0:
        $("msg-measures_mm").innerHTML = "El numero no puede ser negativo";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-measures_mm").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });


// ----------------------------------- ECONOMIA ----------------------------------------
// ----------------precio
$("price").addEventListener("focus", function (e) {
  $("msg-price").innerHTML = null;
  this.classList.remove("is-invalid");
});

$("price").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value:
      $("msg-price").innerHTML = "El producto debe tener un precio";
      this.classList.add("is-invalid");
      break;
    case !/^[0-9]+$/.test(this.value.trim()):
      $("msg-price").innerHTML = "Recuerda que debe ser un número";
      this.classList.add("is-invalid");
      break;
    case this.value <= 0:
      $("msg-price").innerHTML = "El numero no puede ser negativo";
      this.classList.add("is-invalid");
      break;

    default:
      $("msg-price").innerHTML = null;
      this.classList.add("is-valid");
      this.classList.remove("is-invalid");
      break;
  }
});

// ----------------descuento

$("discount").addEventListener("focus", function (e) {
  $("msg-discount").innerHTML = null;
  this.classList.remove("is-invalid");
});

$("discount").addEventListener("blur", function (e) {
  switch (true) {
    case !/^[0-9]+$/.test(this.value.trim()):
      $("msg-discount").innerHTML = "Debe ser un número o 0 (cero) sin descuento";
      this.classList.add("is-invalid");
      break;
    case this.value < 0:
      $("msg-discount").innerHTML = "El descuento debe ser positivo";
      this.classList.add("is-invalid");
      break;
    case this.value > 100:
      $("msg-discount").innerHTML = "El descuento no puede superar el 100%";
      this.classList.add("is-invalid");
      break;

    default:
      $("msg-discount").innerHTML = null;
      this.classList.add("is-valid");
      this.classList.remove("is-invalid");
      break;
  }
});

// ----------------stock
$("stock").addEventListener("focus", function (e) {
  $("msg-stock").innerHTML = null;
  this.classList.remove("is-invalid");
});

$("stock").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value:
      $("msg-stock").innerHTML = "Se debe indicar el stock disponible";
      this.classList.add("is-invalid");
      break;
    case !/^[0-9]+$/.test(this.value.trim()):
      $("msg-stock").innerHTML = "Recuerda que debe ser un número (unidades)";
      this.classList.add("is-invalid");
      break;
    case this.value < 1:
      $("msg-stock").innerHTML = "El numero no puede ser negativo o 0 (cero) ";
      this.classList.add("is-invalid");
      break;

    default:
      $("msg-stock").innerHTML = null;
      this.classList.add("is-valid");
      this.classList.remove("is-invalid");
      break;
  }
});


// ----------------------------------------FINAL-------------------------------------------

  $("productAdd").addEventListener("submit", function (event) {
    event.preventDefault();

    const elementsFormProduct = this.elements;
    let error = false;

    for (let i = 0; i < elementsFormProduct.length - 1; i++) {
        console.log(elementsFormProduct[i])
      if (
        elementsFormProduct[i].classList.contains("is-invalid")
      ) {
        error = true;
        elementsFormProduct[i].classList.add("is-invalid");
        $("msg-ErrorAllElemments").innerHTML = "Por favor verifique el formulario";
      }
    }

    !error && this.submit()
  });
  
};