// Enlaces específicos para cada receta
const enlacesRecetas = {
    'plato1-1': 'https://www.receta1.com',
    'plato3-2': 'https://www.receta2.com',
    'plato5-1': 'https://www.receta3.com',
    'plato7-2': 'https://www.receta4.com',
  };

  // Función para mostrar detalles adicionales al hacer clic en una receta, limitando a un clic
  document.querySelectorAll('.plato1-1, .plato3-2, .plato5-1, .plato7-2').forEach((elemento) => {
    elemento.addEventListener('click', function() {
      if (!this.classList.contains('clicked')) {
        const id = this.classList[0]; // Obtener el identificador de la receta (ej. plato1-1)
        const detalle = document.createElement('p');
        detalle.innerHTML = `Si deseas tener más conocimiento de las recetas, da <a href="${enlacesRecetas[id]}" target="_blank" style="color: #FFD700; text-decoration: underline;">click aquí</a>.`;
        detalle.style.color = '#FFD700';
        this.appendChild(detalle);
        this.classList.add('clicked'); // Marcar como clickeado
      }
    });
  });

