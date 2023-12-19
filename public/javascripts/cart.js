const $ = (id) => document.getElementById(id);

const showProductInCart = (products, total) => {
  if (products.length) {
    if ($("cart-table")) {
      $("cart-table").innerHTML = null;
      products.forEach(({ id, image, name, price, discount, quantity }) => {
        $("cart-table").innerHTML += `
        <article class="carrito_producto position-relative">
        <a href="#" class="carrito_producto_borrar" onclick="removeAllItem(${id})"><i class="fas fa-times"></i></a>
        <h5 class="carrito_producto_nombre">
        ${name}
          
        </h5>
                        <div class="d-flex flex-column align-items-center mt-5">
                        
                      
                          <figure style="width: 100px;" class="carrito_producto_imagen">
                            <img src="/images/${image}" class="img-fluid">
                          </figure>
                        </div>
       
                        <div>
                          <small>precio:</small>
                          <h5> $${price}</h5>
                        </div>

                        <div class="carrito_producto_cantidad">

                          <button class="mr-2 ${
                            quantity === 1 && "disabled"
                          }"  onclick="removeItemToCart(${id},${quantity})" ><i class="fas fa-minus"></i></button>
                          <h4>${quantity}</h4>
                          <button onclick="addItemToCart(1, ${id})" >  <i class="fas fa-plus"></i></button>

                        </div>

                        <div class="carrito_producto_subtotal">
                          <small>subtotal</small>
                          <h5>
                            $${price * quantity}
                          </h5>
                        </div>
                      </article>
        `;
      });
      $("showTotal").innerHTML = total;
    }
  } else {
    $("cart-body").innerHTML = `
  <div class="alert alert-warning" role="alert">
      No hay productos en el carrito.
  </div>
`;
  }
};

const showCountCart = (products) => {
  sessionStorage.setItem(
    "countCart",
    products.map((product) => product.quantity).reduce((a, b) => a + b, 0)
  );
  $("show-count-cart").innerHTML = sessionStorage.getItem("countCart");
};

const showMessageInfo = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "info",
    title: message,
  });
};

const addItemToCart = async (quantity, product) => {
  try {
    const response = await fetch("/cart", {
      method: "POST",
      body: JSON.stringify({
        quantity,
        product: +product,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const {
      ok,
      cart: { products, total },
      message,
    } = await response.json();

    if (!ok) {
      throw new Error(message);
    }

    showProductInCart(products, total);
    showCountCart(products);
    showMessageInfo(message);
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

const removeItemToCart = async (id, quantity) => {
  if (quantity > 1) {
    try {
      const response = await fetch(`/cart?product=${id}`, {
        method: "DELETE",
      });

      const {
        ok,
        cart: { products, total },
        message,
      } = await response.json();

      if (!ok) {
        throw new Error(message);
      }
      showProductInCart(products, total);
      showCountCart(products);
      showMessageInfo(message);
    } catch (error) {
      Swal.fire({
        title: "Upss",
        text: error.message,
        icon: "error",
      });
    }
  }
};

const removeAllItem = async (id) => {
  try {
    const response = await fetch(`/cart/item-all?product=${id}`, {
      method: "DELETE",
    });
    const {
      ok,
      cart: { products, total },
      message,
    } = await response.json();

    if (!ok) {
      throw new Error(message);
    }

    showProductInCart(products, total);
    showCountCart(products);
    showMessageInfo(message);
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

const emptyCart = async () => {
  try {
    const response = await fetch("/cart/all", {
      method: "delete",
    });

    const {
      ok,
      cart: { products, total },
      message,
    } = await response.json();

    if (!ok) {
      throw new Error(message);
    }

    showProductInCart(products, total);
    showCountCart(products);
    showMessageInfo(message);
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

window.onload = function () {
  sessionStorage.setItem("countCart", sessionStorage.getItem("countCart") || 0);
  $("show-count-cart").innerHTML = sessionStorage.getItem("countCart");
  $("show-count-cart").hidden = false;

  $("btn-cart").addEventListener("click", async function (e) {
    try {
      const response = await fetch("/cart");
      const { ok, cart, message } = await response.json();

      if (ok) {
        if (cart.products.length) {
          $("cart-body").innerHTML = `
            
                    <section id="cart-table">
                     
                    </section>
                    <section id="cart-resumen">
                      <div class="carrito_compra_cuadro">
                        <div class="carrito_compra_total">
                          <p>TOTAL A PAGAR</p>
                          <h4>$<span id="showTotal"></span></h4>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mt-3" style="background-color:rgb(228 241 245);">
                        <button  onclick="emptyCart()" class="carrito_compra_pagar">Vaciar carrito</button>
                        <button class="carrito_compra_pagar">Proceder al Pago</button>
                      </div>

                    </section>
            `;

          showProductInCart(cart.products, cart.total);
        } else {
          $("cart-body").innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        No hay productos en el carrito.
                    </div>
                  `;
        }
      } else {
        throw new Error(message);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Upss",
        text: message,
        icon: "error",
      });
    }
  });
};
