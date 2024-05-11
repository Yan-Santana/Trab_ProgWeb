const { Address } = require('./address');
const { Order } = require('./order');
const { OrderProduct } = require('./orderProduct');
const { Payment } = require('./payment');
const { Photo } = require('./photo');
const { Product } = require('./product');
const { ProductCart } = require('./productCart');
const { User } = require('./user');

const syncdatabase = async () => {
  await User.sync( {force: true} );
  await Address.sync( {force: true} );
  await Photo.sync({force: true});
  await Product.sync({force: true});
  await ProductCart.sync({force: true}); // User e Product
  await Payment.sync({force: true});
  await Order.sync({force: true});
  await OrderProduct.sync({force: true}); // Order e Product
};

module.exports = { syncdatabase };
