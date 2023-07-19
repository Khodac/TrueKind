const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario .formulario__input');

const expresiones = {

	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	//telefono: /^\d{9,14}$/, // 7 a 14 numeros.
	telefono: /^\d{9}$/,
	comentario: /^[a-zA-Z0-9À-ÿ\s]{3,100}$/
	//comentario:/^[a-z]/
}

const campos = {
	nombre: false,
	apellido:false,
	correo: false,
	telefono: false,
	comentario:false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			//alert(e.target.name);
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;

		case "correo":
			//alert(e.target.name);
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

		case "comentario":
			//alert('entra en comentario');
			validarCampo(expresiones.comentario, e.target, 'comentario');
		break;
		
        case "email":
			console.log('expresion: '+expresiones.email+'input: '+ e.target +'campo: '+campos);
			validarCampo(expresiones.email, e.target, 'email');
		break;
		
        case "comentario":
			console.log('expresion: '+expresiones.comentario+'input: '+ e.target +'campo: '+campos);
			validarCampo(expresiones.comentario, e.target, 'comentario');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	/*alert("validacion"+expresion.test(input.value));*/
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellido && campos.correo && campos.comentario && campos.telefono && terminos.checked ){
		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
		campos.nombre=false;
		campos.apellido=false;
		campos.correo=false;
		campos.telefono=false;
		campos.comentario=false;
	} else {
		//alert("falta rrellenra formulario");
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 2000);
		
		if (!campos.nombre){
			document.getElementById("nombre").focus();
		}
		if (!campos.apellido){
			document.getElementById("apellido").focus();
		}
		if (!campos.telefono){
			document.getElementById("telefono").focus();
		}
		if (!campos.correo){
			document.getElementById("correo").focus();
		}
		if (!campos.comentario){
			document.getElementById("comentario").focus();
		}
		if (!terminos.checked){
			document.getElementById("terminos").focus();
		}

	}
});




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

function mensajePagado(){
  if(totalCard == 0){
    alert('No hay nada en el carrito')
  }else{
  alert(`¡Gracias por la compra! Pago de: ${totalCard}€`);
  }
}

function showCart(x){
            document.getElementById("products-id").style.display = "block";
        }
        function closeBtn(){
            document.getElementById("products-id").style.display = "none";
        }


loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
    
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
    }
    //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}€</h5>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value=${amount} class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

//SUMAR Y RESTAR CANTIDAD 

        const plusIcon = row.querySelector('.sumar-cantidad');
        const minusIcon = row.querySelector('.restar-cantidad');
        const amountInput = row.querySelector('.carrito-item-cantidad');

        plusIcon.addEventListener('click', () => {
            product.amount++;
            amountInput.value = product.amount;
            totalCard = parseFloat(totalCard) + parseFloat(price);
            totalCard = totalCard.toFixed(2);
            priceTotal.innerHTML = totalCard;
        });

        minusIcon.addEventListener('click', () => {
            if (product.amount > 1) {
                product.amount--;
                amountInput.value = product.amount;
                totalCard = parseFloat(totalCard) - parseFloat(price);
                totalCard = totalCard.toFixed(2);
                priceTotal.innerHTML = totalCard;
            }
        });

        containerBuyCart.appendChild(row);
    });


 
}
        
function clearHtml(){
    containerBuyCart.innerHTML = '';
}
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
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

