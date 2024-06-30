const filters = {};

document.getElementById('categoryfilter').addEventListener('change', (event) => {
  setCategoryFilter(event.target.value);
});

document.querySelector('.searchBarContainer').addEventListener('input', (event) => {
  if (!event.target.value) {
    delete filters.name;
  } else {
    filters.name = event.target.value;
  }
  fetchProducts();
});

document.addEventListener('DOMContentLoaded', () => {
  setCategoryFilter();
});

function fetchProducts() {
  fetch(window.location.origin + '/api/products?' + new URLSearchParams(filters))
    .then((response) => response.json())
    .then((data) => {
      const productsContainer = document.getElementById('productsContainer');
      productsContainer.innerHTML = '';

      data.forEach((product) => {
        const productElement = createProductElement(product);
        productsContainer.appendChild(productElement);
      });
    })
    .catch((error) => console.error('Error fetching products:', error));
}

function setCategoryFilter(category) {
  if (category !== undefined) {
    if (!category) {
      delete filters.category;
    } else {
      filters.category = category;
    }
    return fetchProducts();
  }

  const params = new URLSearchParams(window.location.search);
  const categoryByURL = params.get('category');

  if (categoryByURL) {
    filters.category = categoryByURL;
    document.getElementById('categoryfilter').value = categoryByURL;
  }

  return fetchProducts();
}

function createProductElement(product) {
  const hasDiscount = product.old_price && product.old_price > product.price;

  const productContainer = document.createElement('a');
  productContainer.classList.add('productCardContainer');
  productContainer.href = `${window.location.origin}/product?id=${product.id}`;
  productContainer.innerHTML = `
    <div class="productCardImageContainer">

      ${
        hasDiscount
          ? `<span class="discountPercentageContainer">${getDiscount(product.price, product.old_price)}%</span>`
          : ' '
      }

      <img src="${product.photo.url}" alt="Produto" />
    </div>
    <span class="productNameContainer">${product.name}</span>
    <div>
      <b>${parseNumberToBRL(product.price)}</b>

      ${hasDiscount ? `<span class="discountContainer">${parseNumberToBRL(product.old_price)}</span>` : ' '}
    </div>
    <span class="starsContainer">${getStarRating(product.rating)}</span>
  `;
  return productContainer;
}

fetchProducts();
