const { Address } = require('./address');
const { Order } = require('./order');
const { OrderProduct } = require('./orderProduct');
const { Payment } = require('./payment');
const { Photo } = require('./photo');
const { Product } = require('./product');
const { ProductCart } = require('./productCart');
const { User } = require('./user');

const syncdatabase = async () => {
  await User.sync();
  await Address.sync();
  await Photo.sync();
  await Product.sync();
  await ProductCart.sync(); // User e Product
  await Payment.sync();
  await Order.sync();
  await OrderProduct.sync(); // Order e Product
};

module.exports = { syncdatabase };
