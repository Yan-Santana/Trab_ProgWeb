function getOnlyNumbers(value) {
  let treatedValue = value.replace('R$', '').trim();
  treatedValue = treatedValue == '- 0,0' ? '0' : treatedValue;
  let onlyNumbers = value.replace(/\D/g, '');

  return Number(onlyNumbers);
}

function parseNumberToBRL(value) {
  return (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
