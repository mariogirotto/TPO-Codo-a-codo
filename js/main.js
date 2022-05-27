var headCodeBlock = '<meta charset="UTF-8">'+
                        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
                        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
                        '<title>Pastelería Codo a codo</title>'+                        
                        '<link rel="shortcut icon" href="./Imagenes/icono.png" type="image/x-icon">'+
                        '<link rel="preconnect" href="https://fonts.googleapis.com">'+
                        '<link rel="preconnect" href="https://fonts.googleapis.com">'+
                        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'+
                        '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300&family=Updock&display=swap" rel="stylesheet">'+
                        '<link rel="stylesheet" href="./css/main.css">';

document.querySelector("head").innerHTML = headCodeBlock                    

var headerCodeBlock = '<nav class="box">'+
                        '<a class="nav" href="index.html">Home</a>'+
                        '<a class="nav" href="acercade.html">Nosotros</a>'+
                        '<a class="nav" href="contacto.html">Contacto</a>'+
                        '<a class="nav" href="recetas.html">Recetas</a>'+
                        '<a class="nav" href="registro.html">Registro</a>'+
                        '<a class="nav" href="sucursales.html" title="Sucursales">Sucursales</a>'+
                        '</nav>'+
                        '<h1>Pasteleria Codo a codo</h1>';

var footerCodeBlock = '<nav>'+
                        '<a class="socials" href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook-square fa-2x"></i></a>&emsp;'+
                        '<a class="socials" href="https://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter-square fa-2x"></i></a>&emsp;'+
                        '<a class="socials" href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram-square fa-2x"></i></a>'+
                        '</nav>'+
                        '<p>Derechos reservados 2022</p>';

// Inserting the code block to wrapper element

document.querySelector("header").innerHTML = headerCodeBlock
document.querySelector("footer").innerHTML = footerCodeBlock

function validateForm() {
    let x = document.forms["registroForm"]["txtNombre"].value;
    if (x == "") {
      alert("Debe ingresar el nombre");
      return false;
    }
    x = document.forms["registroForm"]["txtApellido"].value;
    if (x == "") {
      alert("Debe ingresar el apellido");
      return false;
    }
    x = document.forms["registroForm"]["txtCalle"].value;
    if (x == "") {
      alert("Debe ingresar la calle");
      return false;
    }
    x = document.forms["registroForm"]["nmbrAltura"].value;
    if (x == "") {
      alert("Debe ingresar la altura");
      return false;
    }
    x = document.forms["registroForm"]["txtCiudad"].value;
    if (x == "") {
      alert("Debe ingresar la ciudad");
      return false;
    }
    x = document.forms["registroForm"]["txtTelefono"].value;
    if (x == "") {
      alert("Debe ingresar un telefono");
      return false;
    }
    x = document.forms["registroForm"]["txtEmail"].value;
    if (x == "") {
      alert("Debe ingresar un email");
      return false;
    }
  }