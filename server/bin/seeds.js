// DB connection
const mongoose = require('mongoose')
const dbName = 'phonecave'
mongoose.connect(`mongodb+srv://barbara:reto-web-pwd@cluster0.bzzsl.mongodb.net/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Seed here!
const Phone = require('../models/phone.model')

const phones = [
  {
    phone_id: 0,
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description:
      'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
    color: 'black',
    price: 769,
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1616079511/web-test/IPhone_7_chey7n.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
  {
    phone_id: 1,
    name: 'Galaxy S7',
    manufacturer: 'Samsung',
    description:
      'Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.',
    color: 'grey',
    price: 209,
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1616079512/web-test/Galaxy_S7_zjixw2.jpg',
    screen: '5,1 inch Quad-HD',
    processor: 'Snapdragon 820',
    ram: 4,
  },
  {
    phone_id: 2,
    name: 'Honor 10',
    manufacturer: 'Huawei',
    description: 'Great phone with an excellent interface. One of the best mid price range phones in the market.',
    color: 'blue',
    price: 399,
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1616079511/web-test/Honor_10_c8ymig.jpg',
    screen: '5,84 inch Full-HD',
    processor: 'Kirin 970',
    ram: 6,
  },
  {
    phone_id: 3,
    name: 'P10 Lite',
    manufacturer: 'Huawei',
    description: 'Great phone with an excellent interface. One of the best mid price range phones in the market.',
    color: 'white',
    price: 249,
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1616079511/web-test/P10_Lite_dtswx2.jpg',
    screen: '5,2 inch Full-HD',
    processor: 'Kirin 658',
    ram: 4,
  },
  {
    phone_id: 4,
    name: 'Nokia 7.1',
    manufacturer: 'Nokia',
    description: 'Great phone with an excellent interface. One of the best mid price range phones in the market.',
    color: 'black',
    price: 275,
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1616079511/web-test/Nokia_7.1_vzyvst.jpg',
    screen: '5,84 inch Full-HD',
    processor: 'Octa-core',
    ram: 4,
  },
  {
    phone_id: 5,
    name: 'Zen Phone 5',
    manufacturer: 'Asus',
    description: 'Great phone with an excellent interface. One of the best mid price range phones in the market.',
    color: 'black',
    price: 359,
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1616079512/web-test/ZenPhone_5_x5y4rk.jpg',
    screen: '6,2 inch Full-HD',
    processor: 'Snapdragon 636',
    ram: 6,
  },
  {
    phone_id: 6,
    name: 'MI A2',
    manufacturer: 'Xiaomi',
    description: 'Great phone with an excellent interface. One of the best mid price range phones in the market.',
    color: 'black',
    price: 179,
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1616079512/web-test/Xiaomi_MI_A2_extckt.jpg',
    screen: '5,99 inch Full-HD',
    processor: 'Snapdragon 660',
    ram: 6,
  },
  {
    phone_id: 7,
    name: 'Moto G6',
    manufacturer: 'Motorola',
    description: 'Great phone with an excellent interface. One of the best mid price range phones in the market.',
    color: 'black',
    price: 199,
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1616079512/web-test/Moto_G6_w17a0t.png',
    screen: '5,7 inch Full-HD',
    processor: 'Snapdragon 450',
    ram: 3,
  },
]

Phone.create(phones)
  .then(() => mongoose.connection.close())
  .catch((err) => console.error(`Following error occured: \n ${err}`))
