let countries = [];
let displayedCountries = [];
let itemsPerPage = 20;
let currentPage = 1;
let filteredCountries = [];

// Fetch countries from the API
async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    countries = data;
    filteredCountries = [...countries]; // Initialize filteredCountries
    populateSubregions();
    displayCountries();
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

// Populate the subregion filter
function populateSubregions() {
  const subregions = new Set();
  countries.forEach((country) => subregions.add(country.subregion));
  const subregionFilter = document.getElementById("subregionFilter");
  subregions.forEach((subregion) => {
    if (subregion) {
      const option = document.createElement("option");
      option.value = subregion;
      option.textContent = subregion;
      subregionFilter.appendChild(option);
    }
  });
}

// Display countries on the page
function displayCountries() {
  const countryList = document.getElementById("countryList");
  countryList.innerHTML = ""; // Clear the list before displaying new countries

  displayedCountries.forEach((country) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <img src="${country.flags.png}" alt="${country.name.common}">
            <span>${country.name.common} - Capital: ${
      country.capital || "N/A"
    } - Region: ${
      country.region
    } - Population: ${country.population.toLocaleString()}</span>
            <button onclick="showCountryDetails('${
              country.cca3
            }')">Details</button>
        `;
    countryList.appendChild(listItem);
  });

  toggleLoadMoreButton();
}

// Load more countries for pagination
function loadMoreCountries() {
  const startIndex = displayedCountries.length; // Começa do fim dos países já exibidos
  const endIndex = startIndex + itemsPerPage; // Define o novo final
  displayedCountries = displayedCountries.concat(
    filteredCountries.slice(startIndex, endIndex)
  );
  displayCountries();
  currentPage++;
}

// Search countries by name and apply filters
function searchCountries(event) {
  applyFilters();
}

// Apply filters and search together
function applyFilters() {
  const regionFilter = document.getElementById("regionFilter").value;
  const subregionFilter = document.getElementById("subregionFilter").value;
  const populationFilter = document.getElementById("populationFilter").value;
  const sortOrder = document.getElementById("sortOrder").value;
  const searchTerm = document.getElementById("search").value.toLowerCase(); // Pega o valor da caixa de pesquisa

  // Filtrar países pela pesquisa e os filtros aplicados
  filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm); // Verifica se corresponde à pesquisa
    const matchesRegion = regionFilter ? country.region === regionFilter : true;
    const matchesSubregion = subregionFilter
      ? country.subregion === subregionFilter
      : true;
    const matchesPopulation = filterByPopulation(
      country.population,
      populationFilter
    );
    return (
      matchesSearch && matchesRegion && matchesSubregion && matchesPopulation
    );
  });

  // Ordenar conforme a escolha do usuário
  if (sortOrder === "name") {
    filteredCountries.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  } else if (sortOrder === "population") {
    filteredCountries.sort((a, b) => a.population - b.population);
  } else if (sortOrder === "area") {
    filteredCountries.sort((a, b) => a.area - b.area);
  }

  // Resetar a paginação e exibir os resultados filtrados
  resetPagination();
  displayCountries();
}

// Filter by population range
function filterByPopulation(population, filter) {
  if (!filter) return true;
  if (filter === "<1000000") return population < 1000000;
  if (filter === "1000000-10000000")
    return population >= 1000000 && population <= 10000000;
  if (filter === "10000000-100000000")
    return population >= 10000000 && population <= 100000000;
  if (filter === ">100000000") return population > 100000000;
}

// Show country details page
function showCountryDetails(cca3) {
  window.location.href = `details.html?cca3=${cca3}`;
}

// Toggle visibility of the "Load More" button based on the current state
function toggleLoadMoreButton() {
  const loadMoreButton = document.getElementById("loadMore");
  if (displayedCountries.length < filteredCountries.length) {
    loadMoreButton.style.display = "block"; // Show button if there are more countries to load
  } else {
    loadMoreButton.style.display = "none"; // Hide button if all countries are loaded
  }
}

// Reset pagination when applying filters or performing a search
function resetPagination() {
  currentPage = 1;
  displayedCountries = filteredCountries.slice(0, itemsPerPage);
}

// Event listeners
document.getElementById("search").addEventListener("input", searchCountries);
document
  .getElementById("regionFilter")
  .addEventListener("change", applyFilters);
document
  .getElementById("subregionFilter")
  .addEventListener("change", applyFilters);
document
  .getElementById("populationFilter")
  .addEventListener("change", applyFilters);
document.getElementById("sortOrder").addEventListener("change", applyFilters);
document
  .getElementById("loadMore")
  .addEventListener("click", loadMoreCountries);

// Initial fetch
fetchCountries();
