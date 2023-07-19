document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos del DOM
  var input = document.getElementById('input');
  var button = document.getElementById('button');
  var resultsTable = document.getElementById('results');

  // click
  button.addEventListener('click', function() {
    console.log(input.value)
    var searchText = input.value.trim();

    if (searchText === "") {
      alert('Please provide the valid input');
      return;
    }
    var regex = /\s|\d/;
    console.log(regex.test(searchText))
    if (regex.test(searchText)) {
        alert('Please provide the valid input');
        return;
    }
    
    // API
    var url = 'https://jsonmock.hackerrank.com/api/cities/?city=' + searchText;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var cities = data.data;
        console.log(cities.length);
        console.log(cities);

        var totalCountElement = document.querySelector('.totalCount');
        totalCountElement.textContent = 'Total cities found: ' + cities.length;

        //Clear Table
        resultsTable.innerHTML = '';
       
        //Table Cities
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


/*const boton = document.getElementById("button");

boton.addEventListener("click", async () => {
  const input = document.getElementById("input");
  const inputValue = input.value.trim();
  if (!inputValue) {
    alert("Please provide the valid input");
  } else {
    const isValid = inputValue
      .split("")
      .some((element) => !isNaN(element) || /\s/.test(element));

    if (isValid) {
      alert("'Please provide the valid input'");
      return;
    }
    console.log("no entro");
    Search(inputValue)
  }
});


const Search = (text)=>{

   var url = 'https://jsonmock.hackerrank.com/api/cities/?city=' + searchText;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var cities = data.data;
  
}

*/

/*

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




*/
