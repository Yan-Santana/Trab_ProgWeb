let productImage = null;

document.getElementById('productPrice').addEventListener('input', function (event) {
  event.target.value = parseNumberToBRL(getOnlyNumbers(event.target.value));
});

document.getElementById('productStock').addEventListener('input', function (event) {
  event.target.value = getOnlyNumbers(event.target.value);
});

document.getElementById('productImageInput').onchange = async (event) => {
  const file = event.target.files[0];
  const fileReader = new FileReader();

  fileReader.onloadend = function (fileLoadedEvent) {
    const base64 = fileLoadedEvent.target.result;
    document.getElementById('productImage').src = base64;
  };

  productImage = file;
  fileReader.readAsDataURL(file);
};

document.getElementById('productForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const productName = document.getElementById('productName').value.trim();
  const productPrice = getOnlyNumbers(document.getElementById('productPrice').value);
  const productStock = getOnlyNumbers(document.getElementById('productStock').value);
  const productCategory = document.getElementById('productCategory').value;

  if (!productIsValida(productName, productPrice, productStock)) return;

  const productData = new FormData();
  productData.append('name', productName);
  productData.append('category', productCategory);
  productData.append('price', productPrice);
  productData.append('old_price', Math.floor(productPrice - productPrice * 0.15));
  productData.append('stock', productStock);
  productData.append('rating', 4);

  if (productImage) productData.append('photo', productImage);

  await fetch('http://localhost:3000/api/products', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: productData,
  });

  showSuccessToast('Produto cadastrado com sucesso');
  document.getElementById('productForm').reset();
});

function productIsValida(productName, productPrice, productStock) {
  if (!productName) return showErrorToast('Nome do produto é obrigatório');
  if (productName.length < 3) return showErrorToast('Nome do produto deve ter no mínimo 3 caracteres');

  if (!productPrice) return showErrorToast('O preço deve ser maior que 0 (Zero)');
  if (!productStock) return showErrorToast('O estoque deve ser maior que 0 (Zero)');

  return true;
}
