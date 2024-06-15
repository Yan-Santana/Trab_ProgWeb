document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
});

function fetchProducts() {
  fetch('/api/products') // TODO: Verificar com o Felipe se vai ser essa rota mesmo da Api
    .then((response) => response.json())
    .then((data) => {
      const catalogContainer = document.getElementById('catalogo');
      catalogContainer.innerHTML = '';

      data.forEach((product) => {
        const productElement = createProductElement(product);
        catalogContainer.appendChild(productElement);
      });
    })
    .catch((error) => console.error('Error fetching products:', error));
}

function createProductElement(product) {
  const productContainer = document.createElement('div');
  productContainer.className = 'catalogSubConteiner';

  const productImg = document.createElement('div');
  productImg.className = 'produtoImg';
  const img = document.createElement('img');
  img.src = `../src/images/${product.image}`;
  img.alt = product.name;
  productImg.appendChild(img);

  const productText = document.createElement('div');
  productText.className = 'produtoText';
  const link = document.createElement('a');
  link.href = `product.html?id=${product.id}`;
  link.textContent = product.name;
  productText.appendChild(link);

  productContainer.appendChild(productImg);
  productContainer.appendChild(productText);

  return productContainer;
}

