const products = [
  {
    id: 1, name: "i1",
    category: "food",
    price: 123,
    stock: 100
  },
  {
    id: 2,
    name: "i2",
    category: "food",
    price: 231,
    stock: 100 },
  {
    id: 3,
    name: "i3",
    category: "food",
    price: 312,
    stock: 100
  }]

const orders = [
  {
    id: 1,
    status: "pending",
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 4 }
    ]},
  {
    id: 2,
    status: "pending",
    items: [
      { productId: 3, quantity: 1 }
    ]
  }
]

function getProducts(){
  return products
}
function getProductById(id) {
  const foundProduct = products.find((product) => product.id === id);
  return foundProduct
}

function getOrders() {
  return orders;
}


module.exports = { getProducts, getProductById, getOrders };
