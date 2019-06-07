const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471811",
    name: "Men Polo Shirt",
    price: 35,
    category: "Men",
    image: require("../data/images/image1.jpeg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Women Jeans",
    price: 20,
    category: "Women",
    image: require("../data/images/image2.jpeg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Men Jeans",
    price: 40,
    category: "Men",
    image: require("../data/images/image3.jpeg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471824",
    name: "Dress",
    price: 20,
    category: "Kids",
    image: require("../data/images/image4.jpeg"),
    numOfItemsInCart: 0,
    liked: true
  }
];

export function getProducts() {
  return products;
}
