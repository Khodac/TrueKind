document.addEventListener('DOMContentLoaded', () => {
    const carritoContainer = document.querySelector('.carrito-container');
    const totalPrecio = document.getElementById('totalPrecio');

    // Obtener productos del LocalStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Mostrar los productos en el carrito
    cart.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('producto-carrito');
      productDiv.innerHTML = `
        <p>${product.nombre}</p>
      `;

      carritoContainer.appendChild(productDiv);
    });

    // Calcular el precio total del carrito
    const total = cart.reduce((acc, product) => acc + (product.precio * product.quantity), 0);
    totalPrecio.textContent = total.toFixed(2);
  });