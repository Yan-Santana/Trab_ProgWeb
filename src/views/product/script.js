function returnToCatalog(){
  window.location.href = "../catalog";
}

function getProductID(){
  const params = new URLSearchParams(window.location.search);
  const productID = params.get("id");

  if (!productID){
    returnToCatalog();
  }

  return Number(productID);
}

async function findAndLoadProduct(){
  const productID = getProductID();
  const product = await (await fetch(`http://localhost:3000/api/products/${productID}`)).json();

  if (!product){
    returnToCatalog();
  }

  const name = document.getElementById('name');
  const rating = document.getElementById('rating');
  const price = document.getElementById('price');
  const image = document.getElementById('image');

  name.textContent = product.name;
  rating.textContent = getStarRating(product.rating);
  price.textContent = parseNumberToBRL(product.price);
  image.setAttribute("src", product.photo.url);

}

findAndLoadProduct();
