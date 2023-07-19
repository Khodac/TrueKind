// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario .formulario__input');

// const expresiones = {

// 	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
// 	apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	//telefono: /^\d{9,14}$/, // 7 a 14 numeros.
// 	telefono: /^\d{9}$/,
// 	comentario: /^[a-zA-Z0-9À-ÿ\s]{3,100}$/
// 	//comentario:/^[a-z]/
// }

// const campos = {
// 	nombre: false,
// 	apellido:false,
// 	correo: false,
// 	telefono: false,
// 	comentario:false
// }

// const validarFormulario = (e) => {
// 	switch (e.target.name) {
// 		case "nombre":
// 			//alert(e.target.name);
// 			validarCampo(expresiones.nombre, e.target, 'nombre');
// 		break;
		
// 		case "apellido":
// 			validarCampo(expresiones.apellido, e.target, 'apellido');
// 		break;
		
// 		case "telefono":
// 			validarCampo(expresiones.telefono, e.target, 'telefono');
// 		break;

// 		case "correo":
// 			//alert(e.target.name);
// 			validarCampo(expresiones.correo, e.target, 'correo');
// 		break;

// 		case "comentario":
// 			//alert('entra en comentario');
// 			validarCampo(expresiones.comentario, e.target, 'comentario');
// 		break;
		
//         case "email":
// 			console.log('expresion: '+expresiones.email+'input: '+ e.target +'campo: '+campos);
// 			validarCampo(expresiones.email, e.target, 'email');
// 		break;
		
//         case "comentario":
// 			console.log('expresion: '+expresiones.comentario+'input: '+ e.target +'campo: '+campos);
// 			validarCampo(expresiones.comentario, e.target, 'comentario');
// 		break;
// 	}
// }

// const validarCampo = (expresion, input, campo) => {
// 	/*alert("validacion"+expresion.test(input.value));*/
// 	if(expresion.test(input.value)){
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 		campos[campo] = true;
// 	} else {
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
// 		campos[campo] = false;
// 	}
// }

// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulario);
// 	input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const terminos = document.getElementById('terminos');
// 	if(campos.nombre && campos.apellido && campos.correo && campos.comentario && campos.telefono && terminos.checked ){
// 		formulario.reset();
// 		document.getElementById('formulario__mensaje-exito').classList.add('activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje-exito').classList.remove('activo');
// 		}, 5000);

// 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
// 			icono.classList.remove('formulario__grupo-correcto');
// 		});
// 		campos.nombre=false;
// 		campos.apellido=false;
// 		campos.correo=false;
// 		campos.telefono=false;
// 		campos.comentario=false;
// 	} else {
// 		//alert("falta rrellenra formulario");
// 		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
// 		}, 2000);
		
// 		if (!campos.nombre){
// 			document.getElementById("nombre").focus();
// 		}
// 		if (!campos.apellido){
// 			document.getElementById("apellido").focus();
// 		}
// 		if (!campos.telefono){
// 			document.getElementById("telefono").focus();
// 		}
// 		if (!campos.correo){
// 			document.getElementById("correo").focus();
// 		}
// 		if (!campos.comentario){
// 			document.getElementById("comentario").focus();
// 		}
// 		if (!terminos.checked){
// 			document.getElementById("terminos").focus();
// 		}

// 	}
// });




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
  console.log("Filtering products...");
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
      imagen: '../assets/img/toycar.jpg',
      tituloProducto: 'Infant Toy Car - Blue',

    },
    {
      id: 2,
      estado: 'used',
      edad: 5,
      nombre: 'Stuffed Toy',
      tituloItem: 'Kidz',
      imagen: '../assets/img/toycar.jpg',
      tituloProducto: 'Kidz Stuffed Toy - Bear',

    },
    {
      id: 3,
      estado: 'new',
      edad: 8,
      nombre: 'Building Blocks',
      tituloItem: 'KidsWorld',
      imagen: '../assets/img/toycar.jpg',
      tituloProducto: 'KidsWorld Building Blocks - 100 Pieces',

    },
    {
      id: 4,
      estado: 'new',
      edad: 8,
      nombre: 'Sneakers',
      tituloItem: 'Footstep',
      imagen: '../assets/img/toycar.jpg',
      tituloProducto: 'Footstep Sneakers - Black',
    },
    {
      id: 5,
      estado: 'new',
      edad: 8,
      nombre: "Kids Dress",
      tituloItem: "TinyTots",
      imagen: '../assets/img/toycar.jpg',
      tituloProducto: "TinyTots Kids Dress - Floral Print",
    },
    {
      id: 6,
      estado: 'new',
      edad: 8,
      nombre: "Children's Bag",
      tituloItem: "Kiddie",
      imagen: '../assets/img/toycar.jpg',
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
      
      <a href="#" class="btn-add-cart">Add favorites</a>
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
    alert('Producto agregado al carrito');
  }

  carritoLink.addEventListener('click', () => {
    window.location.href = 'carrito.html';
  });
});

