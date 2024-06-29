document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
});

function fetchProducts() {
  fetch(window.location.origin + '/api/products') // TODO: Verificar com o Felipe se vai ser essa rota mesmo da Api
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
