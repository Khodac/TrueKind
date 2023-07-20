// document.addEventListener('DOMContentLoaded', () => {
//   const carritoContainer = document.querySelector('.carrito-container');
//   const totalPrecio = document.getElementById('totalPrecio');

//   // Obtener productos del LocalStorage
//   const cart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Mostrar los productos en el carrito
//   cart.forEach(product => {
//     const productDiv = document.createElement('div');
//     productDiv.classList.add('carts');
//     productDiv.setAttribute('data-id', product.id);
//     productDiv.setAttribute('data-nombre', product.nombre);
//     productDiv.innerHTML = `
//       <span class="titulo-item">Item Title</span>
//       <div>
//         <img src="img/toycar.jpg" alt="Nombre Producto">
//       </div>
//       <p class="title">${product.nombre}</p>
      
//       <a href="#" class="btn-add-cart">Add favorites</a><br>
//       <a href="#" class="btn-add-cart">View details</a>
//     `;

//     carritoContainer.appendChild(productDiv);
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const carritoContainer = document.querySelector('.carrito-container');
  const totalPrecio = document.getElementById('totalPrecio');

  // Obtener productos del LocalStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Mostrar los productos en el carrito
  cart.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('carts');
    productDiv.setAttribute('data-id', product.id);
    productDiv.setAttribute('data-nombre', product.nombre);
    productDiv.innerHTML = `
      <span class="titulo-item">Item Title</span>
      <div>
        <img src="img/toycar.jpg" alt="Nombre Producto">
      </div>
      <p class="title">${product.nombre}</p>
      
      <a href="#" class="btn-remove-cart">Remove from favorites</a><br>
      <a href="#" class="btn-add-cart">View details</a>
    `;

    
    const btnRemoveCart = productDiv.querySelector('.btn-remove-cart');
    btnRemoveCart.addEventListener('click', () => {
      removeFromCart(product.id);
      productDiv.remove(); 
    });

    carritoContainer.appendChild(productDiv);
  });

 
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product removed from favorites');
  }
});




 