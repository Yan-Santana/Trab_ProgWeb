function returnToNotFound() {
  window.location.href = '../not-found';
}

function getProductID() {
  const params = new URLSearchParams(window.location.search);
  const productID = params.get('id');

  if (!productID) {
    returnToNotFound();
  }

  return Number(productID);
}

async function findAndLoadProduct() {
  const productID = getProductID();
  const product = await (await fetch(`http://localhost:3000/api/products/${productID}`)).json();

  if (!product) {
    returnToNotFound();
  }

  const name = document.getElementById('name');
  const rating = document.getElementById('rating');
  const price = document.getElementById('price');
  const image = document.getElementById('image');

  name.textContent = product.name;
  rating.textContent = getStarRating(product.rating);
  price.textContent = parseNumberToBRL(product.price);
  image.setAttribute('src', product.photo.url);
}

document.getElementById('addProductToCartButton').addEventListener('click', addProductToCart);

async function addProductToCart() {
  const productID = getProductID();
  const response = await fetch(`http://localhost:3000/api/carts/add-product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ product_id: productID, quantity: 1 }),
  });

  if (response.status === 201) {
    showSuccessToast('Produto adicionado ao carrinho com sucesso!');
  } else {
    showErrorToast('Erro ao adicionar produto ao carrinho!');
  }
}

findAndLoadProduct();
