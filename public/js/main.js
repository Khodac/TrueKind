




const addEventOnElem = function (elem, type, callback) {
if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener(type, callback);
    }
} else {
    elem.addEventListener(type, callback);
}
};

//navbar toggle

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

//activar header cuando la ventana de desplaza hacia abajo

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElemOnScroll);

/*==========================
  ====JAVASCRIPT PRODUCTOS==
  ==========================*/ 

//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');

let alertPagado = document.querySelector('.btnPagar')



let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//functions


//SEARCH 
document.getElementById('buscarBtn').addEventListener('click', filterProducts);

function filterProducts() {
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  const estadoFilter = document.getElementById('estadoFilter').value.toLowerCase();
  const edadFilter = document.getElementById('edadFilter').value;

  const products = document.querySelectorAll('.carts');

  products.forEach(product => {
    const estado = product.getAttribute('data-estado').toLowerCase();
    const edad = parseInt(product.getAttribute('data-edad'));
    const nombre = product.getAttribute('data-nombre').toLowerCase();

    const estadoMatch = estado.includes(estadoFilter) || estadoFilter === '';
    const edadMatch = edadFilter === '' || (edad && edad >= parseInt(edadFilter));
    const nombreMatch = nombre.includes(searchTerm) || searchTerm === '';

    if (estadoMatch && edadMatch && nombreMatch) {
      product.classList.remove('hidden'); // Mostrar el producto que coincide con el filtro
    } else {
      product.classList.add('hidden'); // Ocultar el producto que no coincide con el filtro
    }
  });
}

// Mostrar todos los productos al cargar la página
filterProducts();


//ADD FAVORITES

document.addEventListener('DOMContentLoaded', () => {
  // Datos de los productos
  const productsData = [
    {
      id: 1,
      estado: 'new',
      edad: 3,
      nombre: 'Toy Car',
      tituloItem: 'Infant',
      imagen: 'img/toycar.jpg',
      tituloProducto: 'Infant Toy Car - Blue',

    },
    {
      id: 2,
      estado: 'used',
      edad: 5,
      nombre: 'Stuffed Toy',
      tituloItem: 'Kidz',
      imagen: 'img/toycar.jpg',
      tituloProducto: 'Kidz Stuffed Toy - Bear',

    },
    {
      id: 3,
      estado: 'new',
      edad: 8,
      nombre: 'Building Blocks',
      tituloItem: 'KidsWorld',
      imagen: 'img/toycar.jpg',
      tituloProducto: 'KidsWorld Building Blocks - 100 Pieces',

    },
    {
      id: 4,
      estado: 'new',
      edad: 8,
      nombre: 'Sneakers',
      tituloItem: 'Footstep',
      imagen: 'img/toycar.jpg',
      tituloProducto: 'Footstep Sneakers - Black',
    },
    {
      id: 5,
      estado: 'new',
      edad: 8,
      nombre: "Kids Dress",
      tituloItem: "TinyTots",
      imagen: 'img/toycar.jpg',
      tituloProducto: "TinyTots Kids Dress - Floral Print",
    },
    {
      id: 6,
      estado: 'new',
      edad: 8,
      nombre: "Children's Bag",
      tituloItem: "Kiddie",
      imagen: 'img/toycar.jpg',
      tituloProducto: "Kiddie Children's Bag - Pink",
    },
   
  ];

  const carritoLink = document.getElementById('carritoLink');
  const productsContainer = document.querySelector('.products');


  productsData.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('carts');
    productDiv.setAttribute('data-id', product.id);
    productDiv.setAttribute('data-estado', product.estado);
    productDiv.setAttribute('data-edad', product.edad);
    productDiv.setAttribute('data-nombre', product.nombre);
    productDiv.innerHTML = `
      <span class="titulo-item">${product.tituloItem}</span>
      <div>
        <img src="${product.imagen}" alt="${product.nombre}">
      </div>
      <p class="title">${product.tituloProducto}</p>
      
      <a href="/favorites" class="btn-add-cart">Add favorites</a><br>
      <a href="/details" class="btn-add-cart">View details</a>
    `;

    productDiv.querySelector('.btn-add-cart').addEventListener('click', () => {
      addToCart(product);
    });

    productsContainer.appendChild(productDiv);
  });

  // Función para agregar productos al carrito
  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to favorites');
  }

  // carritoLink.addEventListener('click', () => {
  //   window.location.href = 'favorites.html';
  // });
});


//CAMBIO DE IDIOMA

// i18next.use(i18nextBrowserLanguageDetector).init({
//   resources: {
//     en: {
//       translation: {
//         "title": "Title of the page",
//         "description": "This is the sample text."
//       }
//     },
//     fr: {
//       translation: {
//         "title": "Titre de la page",
//         "description": "Ceci est le texte d'exemple."
//       }
//     },
//     es: {
//       translation: {
//         "title": "Título de la página",
//         "description": "Este es el texto de ejemplo."
//       }
//     },
//     ar: {
//       translation: {
//         "title": "عنوان الصفحة",
//         "description": "هذا هو نص العينة."
//       }
//     },
//     ja: {
//       translation: {
//         "title": "ページのタイトル",
//         "description": "これはサンプルテキストです。"
//       }
//     }
//   },
//   fallbackLng: 'en',
//   debug: true,
// });

// function changeLanguage(lang) {
//   i18next.changeLanguage(lang, () => {
//     translateElements();
//   });
// }

// function translateElements() {
//   const elements = document.querySelectorAll('[data-i18n]');
//   elements.forEach(element => {
//     const key = element.dataset.i18n;
//     element.textContent = i18next.t(key);
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   translateElements();
// });
