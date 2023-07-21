<!DOCTYPE html>
<html>
<head>
  <title>Formulario de Donación</title>
  <link rel="stylesheet" href="fo">
  <style>
   
.donation-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f2f2f2;
}

.donation-form h1 {
  text-align: center;
  margin-bottom: 20px;
}

.donation-form h2, .donation-form h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}

.donation-form label {
  display: block;
  margin-bottom: 5px;
}

.donation-form input[type="text"],
.donation-form input[type="email"],
.donation-form input[type="number"],
.donation-form input[type="tel"],
.donation-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.donation-form textarea {
  height: 80px;
}

.donation-form hr {
  margin: 20px 0;
  border: 1px solid #ccc;
}

.donation-form input[type="submit"] {
  background-color: orangered;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

/* Estilos para la imagen del artículo */
.donation-image {
  max-width: 100%;
  margin-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* Estilos para los campos relacionados con tarjeta */
.donation-form .tarjeta-fields {
  display: none;
}

/* Estilos para los campos relacionados con tarjeta cuando se selecciona la opción "Donar con Tarjeta" */
.donation-form .donar-con-tarjeta:checked ~ .tarjeta-fields {
  display: block;
}
  </style>


<script>
    function mostrarAlerta() {
      alert("¡Donación realizada correctamente! Gracias por tu generosidad.");
    }
  </script>
</head>
<body>
  <div class="donation-form">
    <h1>Formulario de Donación</h1>

    <img class="donation-image" src="ruta_de_la_imagen_del_articulo.jpg" alt="Imagen del Artículo">

    <form action="procesar_donacion.php" method="post">
      <h2>Donar Dinero</h2>
      <label for="monto_donacion">Monto de la Donación:</label>
      <input type="number" id="monto_donacion" name="monto_donacion" required>

      <h3>Información Bancaria</h3>
      <label for="nombre_banco">Nombre del Banco:</label>
      <input type="text" id="nombre_banco" name="nombre_banco" required>

      <label for="numero_cuenta">Número de Cuenta:</label>
      <input type="text" id="numero_cuenta" name="numero_cuenta" required>

      <label for="titular_cuenta">Titular de la Cuenta:</label>
      <input type="text" id="titular_cuenta" name="titular_cuenta" required>

      <label for="codigo_swift">Código SWIFT:</label>
      <input type="text" id="codigo_swift" name="codigo_swift" required>

      <hr>


      <h2>Donar con Tarjeta</h2>
      <label for="nombre_tarjeta">Nombre en la Tarjeta:</label>
      <input type="text" id="nombre_tarjeta" name="nombre_tarjeta" required>

      <label for="numero_tarjeta">Número de Tarjeta:</label>
      <input type="text" id="numero_tarjeta" name="numero_tarjeta" required>

      <label for="fecha_vencimiento">Fecha de Vencimiento:</label>
      <input type="text" id="fecha_vencimiento" name="fecha_vencimiento" required>

      <label for="codigo_cvv">Código CVV:</label>
      <input type="text" id="codigo_cvv" name="codigo_cvv" required>

      <!-- Otros campos relacionados con la tarjeta, como dirección de facturación, etc. -->

      <h3>Información del Donante</h3>
      <label for="nombre_donante">Nombre Completo:</label>
      <input type="text" id="nombre_donante" name="nombre_donante" required>

      <label for="correo_donante">Correo Electrónico:</label>
      <input type="email" id="correo_donante" name="correo_donante" required>

      <label for="telefono_donante">Teléfono:</label>
      <input type="tel" id="telefono_donante" name="telefono_donante" required>

      <hr>

      <input type="submit" value="Realizar Donación">
    </form>
  </div>
</body>
</html>