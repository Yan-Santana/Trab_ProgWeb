async function fetchAndRenderProducts (){

  const response = await (await fetch('http://localhost:3000/api/carts', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })).json();

  const productsContainer = document.getElementById('containerProducts');
  productsContainer.innerHTML = '';

  response.products.forEach((product) => {
    const productElement = createProductElement(product);
    productsContainer.appendChild(productElement);
  });

  const discount = document.getElementById("discount");
  const price = document.getElementById("price");

  discount.textContent = parseNumberToBRL(response.discount);
  price.textContent = parseNumberToBRL(response.total);

}

function createProductElement(data){
  const productContainer = document.createElement('div')
  productContainer.classList.add('subProducts')

  productContainer.innerHTML = `
    <img src="${data.product.photo.url}" alt="imagem do produto">
    <div>
        <span class="name">${data.product.name}</span>
        <span class="price">${parseNumberToBRL(data.product.price)}</span>
    </div>
  `
  return productContainer;

}

fetchAndRenderProducts();
