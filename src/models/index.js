const { Address } = require('./address');
const { Order } = require('./order');
const { OrderProduct } = require('./orderProduct');
const { Payment } = require('./payment');
const { Photo } = require('./photo');
const { Product } = require('./product');
const { ProductCart } = require('./productCart');
const { User } = require('./user');

const syncdatabase = async () => {
  await Address.sync();
  await User.sync();
  await Product.sync();
  await Order.sync();
  await OrderProduct.sync();
  await Payment.sync();
  await Photo.sync();
  await ProductCart.sync();
};

module.exports = { syncdatabase };
