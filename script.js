// Array para almacenar las ciudades seleccionadas
let ciudadesSeleccionadas = [];

// Función para votar una ciudad
function votar(ciudad) {
  if (ciudadesSeleccionadas.length < 3) {
    ciudadesSeleccionadas.push(ciudad);
    actualizarCiudadesSeleccionadas();
    actualizarTextoCiudadesFavoritas();
  } else {
    alert('Ya has seleccionado tus 3 ciudades favoritas.');
  }
}

// Función para actualizar la lista de ciudades seleccionadas en la pantalla
function actualizarCiudadesSeleccionadas() {
    const lista = document.getElementById('ciudades-seleccionadas');
    lista.innerHTML = '';
  
    for (let i = 0; i < ciudadesSeleccionadas.length; i++) {
      const item = document.createElement('li');
      item.textContent = `${i + 1}. ${ciudadesSeleccionadas[i]}`;
      lista.appendChild(item);
    }
  }
  
// Función para actualizar el texto de las ciudades favoritas en la parte derecha
function actualizarTextoCiudadesFavoritas() {
    const numerosCiudades = document.getElementById('numeros-ciudades');
    const noFavoritas = document.getElementById('no-favoritas');
    const vaciarBtn = document.getElementById('vaciar-btn');
  
    if (ciudadesSeleccionadas.length > 0) {
      numerosCiudades.textContent = ciudadesSeleccionadas.length;
      noFavoritas.style.display = 'none';
      vaciarBtn.style.display = 'block';
    } else {
      numerosCiudades.textContent = '';
      noFavoritas.style.display = 'block';
      vaciarBtn.style.display = 'none';
    }
  }
  
// Función para vaciar la lista de ciudades seleccionadas
function vaciarLista() {
  ciudadesSeleccionadas = [];
  actualizarCiudadesSeleccionadas();
  actualizarTextoCiudadesFavoritas();
}

// Actualizar el texto de las ciudades favoritas al cargar la página
actualizarTextoCiudadesFavoritas();

