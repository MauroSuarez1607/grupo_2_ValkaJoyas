// const $ = (id) => document.getElementById(id);

// window.onload = function () {
//   $("formName").addEventListener("focus", function (e) {
//     $("msg-name").innerHTML = null;
//     this.classList.remove("is-invalid");
//   });

//   $("formName").addEventListener("blur", function (e) {
//     switch (true) {
//       case !this.value.trim():
//         $("msg-name").innerHTML = "Debes ingresar un nombre";
//         this.classList.add("is-invalid");
//         break;
//       case this.value.trim().length < 5:
//         $("msg-name").innerHTML = "Debes ingresar como minimo 5 caracteres";
//         this.classList.add("is-invalid");
//         break;
//       case !/^[a-zA-Z0-9]*$/.test(this.value.trim()):
//         $("msg-name").innerHTML = "Solo se permiten letras y números";
//         this.classList.add("is-invalid");
//         break;
//       default:
//         $("msg-name").innerHTML = null;
//         this.classList.add("is-valid");
//         this.classList.remove("is-invalid");
//         break;
//     }
//   });

//   $("category").addEventListener("focus", function (e) {
//     $("msg-category").innerHTML = null;
//     this.classList.remove("is-invalid");
//   });

//   $("category").addEventListener("blur", function (e) {
//     switch (true) {
//       case !this.value:
//         $("msg-category").innerHTML = "Debes seleccionar una categoría";
//         this.classList.add("is-invalid");
//         break;
//       default:
//         $("msg-category").innerHTML = null;
//         this.classList.add("is-valid");
//         this.classList.remove("is-invalid");
//         break;
//     }
//   });

//   $("brand").addEventListener("focus", function (e) {
//     $("msg-brand").innerHTML = null;
//     this.classList.remove("is-invalid");
//   });

//   $("brand").addEventListener("blur", function (e) {
//     switch (true) {
//       case !this.value:
//         $("msg-brand").innerHTML = "Debes seleccionar una categoría";
//         this.classList.add("is-invalid");
//         break;
//       default:
//         $("msg-brand").innerHTML = null;
//         this.classList.add("is-valid");
//         this.classList.remove("is-invalid");
//         break;
//     }
//   });

//   $("price").addEventListener("focus", function (e) {
//     $("msg-price").innerHTML = null;
//     this.classList.remove("is-invalid");
//   });

//   $("price").addEventListener("blur", function (e) {
//     switch (true) {
//       case !this.value:
//         $("msg-price").innerHTML = "El producto debe tener un precio";
//         this.classList.add("is-invalid");
//         break;
//       case !/^[0-9]+$/.test(this.value.trim()):
//         $("msg-price").innerHTML = "Recuerda que debe ser un número";
//         this.classList.add("is-invalid");
//         break;
//       case this.value <= 0:
//         $("msg-price").innerHTML = "El numero no puede ser negativo";
//         this.classList.add("is-invalid");
//         break;

//       default:
//         $("msg-price").innerHTML = null;
//         this.classList.add("is-valid");
//         this.classList.remove("is-invalid");
//         break;
//     }
//   });

//   $("discount").addEventListener("focus", function (e) {
//     $("msg-discount").innerHTML = null;
//     this.classList.remove("is-invalid");
//   });

//   $("discount").addEventListener("blur", function (e) {
//     switch (true) {
//       case !/^[0-9]+$/.test(this.value.trim()):
//         $("msg-discount").innerHTML = "Recuerda que debe ser un número";
//         this.classList.add("is-invalid");
//         break;
//       case this.value < 0:
//         $("msg-discount").innerHTML = "El descuento debe ser positivo";
//         this.classList.add("is-invalid");
//         break;
//       case this.value > 100:
//         $("msg-discount").innerHTML = "El descuento no puede superar el 100%";
//         this.classList.add("is-invalid");
//         break;

//       default:
//         $("msg-discount").innerHTML = null;
//         this.classList.add("is-valid");
//         this.classList.remove("is-invalid");
//         break;
//     }
//   });

//   // Cuenta cantidad de caracteres y lo resta.
//   $("numWrite").innerText = 0;

//   $("description").addEventListener("focus", function (e) {
//     window.addEventListener("keyup", function (e) {
//         let liveKey = $("description").value.length;
//         let textArea = $("description").value
//         console.log(e.key);
//         if(liveKey < 350){
//             $("numWrite").innerText = liveKey;
//         }else{
//             $("description").value = textArea.substring(0,350);
//             e.preventDefault()
//         }
//     })

//     $("msg-description").innerHTML = null;
//     this.classList.remove("is-invalid");
//   });

//   $("description").addEventListener("blur", function (e) {
//     switch (true) {
//       case !/^[a-zA-Z0-9\s]*$/.test(this.value.trim()):
//         $("msg-description").innerHTML = "Solo se permiten letras y números";
//         this.classList.add("is-invalid");
//         break;
//       case !this.value:
//         $("msg-description").innerHTML =
//           "Debes ingresar una descripción del producto";
//         this.classList.add("is-invalid");
//         break;
//       case this.value.trim().length < 20:
//         $("msg-description").innerHTML =
//           "Debes escribir mas acerca del producto";
//         this.classList.add("is-invalid");
//         break;
//       case this.value.trim().length > 351:
//         $("msg-description").innerHTML =
//           "Solo se permiten hasta 500 caracteres";
//         this.classList.add("is-invalid");
//         break;

//       default:
//         $("msg-description").innerHTML = null;
//         this.classList.add("is-valid");
//         this.classList.remove("is-invalid");
//         break;
//     }
//   });

//   $("formCreateProduct").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const elementsFormProduct = this.elements;
//     let error = false;

//     for (let i = 0; i < elementsFormProduct.length - 1; i++) {
//         console.log(elementsFormProduct[i])
//       if (
//         elementsFormProduct[i].classList.contains("is-invalid")
//       ) {
//         error = true;
//         elementsFormProduct[i].classList.add("is-invalid");
//         $("msg-ErrorAllElemments").innerHTML = "Por favor verifique el formulario";
//       }
//     }

//     !error && this.submit()
//   });
  

// };