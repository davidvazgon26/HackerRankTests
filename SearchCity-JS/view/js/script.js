document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos del DOM
  var input = document.getElementById('input');
  var button = document.getElementById('button');
  var resultsTable = document.getElementById('results');

  // Manejador de evento clic para el botón de búsqueda
  button.addEventListener('click', function() {
    var searchText = input.value.trim();

    if (searchText === '') {
      alert('Please provide valid input');
      return;
    }

    // Limpiar la tabla de resultados
    resultsTable.innerHTML = '';

    // Realizar la solicitud a la API
    var url = 'https://jsonmock.hackerrank.com/api/cities/?city=' + searchText;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var cities = data.data;

        // Mostrar el total de ciudades encontradas
        var totalCount = document.createElement('div');
        totalCount.className = 'totalCount';
        totalCount.textContent = 'Total cities found: ' + cities.length;
        resultsTable.appendChild(totalCount);

        // Mostrar las ciudades encontradas en la tabla
        cities.forEach(function(city) {
          var row = document.createElement('tr');

          var cityCell = document.createElement('td');
          cityCell.textContent = city.city;
          row.appendChild(cityCell);

          var stateCell = document.createElement('td');
          stateCell.textContent = city.state;
          row.appendChild(stateCell);

          resultsTable.appendChild(row);
        });
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  });
});

