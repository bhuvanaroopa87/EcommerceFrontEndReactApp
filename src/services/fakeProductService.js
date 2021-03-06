const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471811",
    name: "Men Polo Shirt",
    price: 35,
    category: { _id: "6b21ca3eeb7f6fbccd471811", name: "Men" },
    image: require("../data/images/image1.jpeg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Women Jeans",
    price: 20,
    category: { _id: "6b21ca3eeb7f6fbccd471812", name: "Women" },
    image: require("../data/images/image2.jpeg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Men Jeans",
    price: 40,
    category: { _id: "6b21ca3eeb7f6fbccd471811", name: "Men" },
    image: require("../data/images/image3.jpeg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471824",
    name: "Dress",
    price: 20,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "Baby&Kids" },
    image: require("../data/images/image4.jpeg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    name: "Lenovo Laptop",
    price: 20,
    category: { _id: "6b21ca3eeb7f6fbccd471814", name: "Electronics" },
    image: require("../data/images/lenovo.jpeg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471826",
    name: "furniture",
    price: 20,
    category: { _id: "6b21ca3eeb7f6fbccd471815", name: "Home&Furniture" },
    image: require("../data/images/furniture.jpeg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471827",
    name: "Washing Machine",
    price: 20,
    category: { _id: "6b21ca3eeb7f6fbccd471816", name: "TVs&Appliances" },
    image: require("../data/images/lavalange.jpeg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471828",
    name: "Samsung Tab",
    price: 20,
    category: { _id: "6b21ca3eeb7f6fbccd471814", name: "Electronics" },
    image: require("../data/images/samsungTab.jpeg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471829",
    name: "CricketBat",
    price: 20,
    category: { _id: "6b21ca3eeb7f6fbccd471817", name: "Sports&Books" },
    image: require("../data/images/bat.jpeg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471830",
    name: "Books",
    price: 20,
    category: { _id: "6b21ca3eeb7f6fbccd471817", name: "Sports&Books" },
    image: require("../data/images/secret-rahasya.jpeg"),
    numOfItemsInCart: 0
  }
];

export function getProducts() {
  return products;
}
