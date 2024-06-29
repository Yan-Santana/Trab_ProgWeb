function getOnlyNumbers(value) {
  let treatedValue = value.replace('R$', '').trim();
  treatedValue = treatedValue == '- 0,0' ? '0' : treatedValue;
  let onlyNumbers = value.replace(/\D/g, '');

  return Number(onlyNumbers);
}

function parseNumberToBRL(value) {
  return (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getDiscount(value, oldValue) {
  const discount = ((oldValue - value) / oldValue) * 100;
  return Math.round(discount);
}

function getStarRating(value) {
  switch (value) {
    default:
    case 0:
      return '☆☆☆☆☆';

    case 1:
      return '★☆☆☆☆';

    case 2:
      return '★★☆☆☆';

    case 3:
      return '★★★☆☆';

    case 4:
      return '★★★★☆';

    case 5:
      return '★★★★★';
  }
}
