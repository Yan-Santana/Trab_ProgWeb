document.getElementById('productForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;
  const productPrice = document.getElementById('productPrice').value;
  const productCategory = document.getElementById('productCategory').value;

  const productItem = document.createElement('li');
  productItem.textContent = `Nome: ${productName}, 
                            Descrição: ${productDescription}, 
                            Preço: R$ ${productPrice}, 
                            Categoria: ${productCategory}`;

  document.getElementById('products').appendChild(productItem);

  document.getElementById('productForm').reset();
});

