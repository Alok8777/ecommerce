const products = [
    {
      name: "English navi",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/14/bc9a3560-c2fe-43db-b73f-bbd812c306271581635929942-2.jpg",
      description:
        "Black solid formal shirt, has a spread collar, long sleeves, button placket, and straight hem",
      price: 499,
      countInStock: 15,
    },
    {
      name: "JAINISH",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/1/17/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.jpg",
      description:
        "Grey solid formal shirt, has a button-down collar, long sleeves, button placket, straight hem, and 1 patch pocket",
      price: 399,
      countInStock: 10,
    },
    {
      name: "Shaftesbury London",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/998931/2015/9/24/11443094063436-Shaftesbury-London-Men-Shirts-9251443094063091-1.jpg",
      description:
        "White formal shirt, has a spread collar, long sleeves, a full button placket, a patch pocket",
      price: 300,
      countInStock: 5,
    },
    {
      name: "Hancock",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5394086/2018/4/20/11524224859040-Hancock-Men-Black-Slim-Fit-Solid-Formal-Shirt-3071524224858865-1.jpg",
      description:
        "Black solid formal shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hem",
      price: 350,
      countInStock: 25,
    },
    {
      name: "DENNISON",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11166464/2019/12/23/2a8849a0-713b-4f90-ae30-2ecbb983005b1577105787982-DENNISON-Men-Purple-Comfort-Slim-Fit-Solid-Formal-Shirt-2301-1.jpg",
      description:
        "Wine-coloured solid formal shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket",
      price: 599,
      countInStock: 4,
    },
    {
      name: "JAINISH",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/27/f06c3c6c-311e-4d8a-9551-13edab7863311582758864952-1.jpg",
      description:
        "Navy Blue solid formal shirt, has a slim collar, button placket, 1 pocket, long sleeves, curved hem",
      price: 749,
      countInStock: 10,
    },
    {
      name: "Sztori",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12190754/2020/12/10/025ca78b-35ad-4816-89d4-43c352dec1861607591239086-Sztori-Men-Plus-Size-White--Navy-Blue-Regular-Fit-Disty-Prin-1.jpg",
      description:
        "White and navy blue ditsy printed formal shirt, has a spread collar, long sleeves, button placket, and curvedComes with a matching mask",
      price: 719, 
      countInStock: 12,
    },
    {
      name: "Louis Philippe",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13305584/2021/1/6/cf650a7d-14dc-4113-ab9a-37ab4b88fc4d1609935592780LouisPhilippeMenBurgundyBlueRegularFitCheckedFormalShirt1.jpg",
      description:
        "Burgundy and Blue checked formal shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket",
      price: 1749,
      countInStock: 19,
    },
    {
      name: "WROGN",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2478263/2020/3/10/bfa8931b-c4b4-4788-a8c2-5c5abc2dcda51583836541684-WROGN-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-21215838-1.jpg",
      description:
      "Black and grey checked casual shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hemManufacturer Info: DJS Clothing Country of Origin: India",
      price: 1209,
      countInStock: 10,
    },
    {
      name: "RAMRAJ COTTON",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/29/b473938c-6486-497b-aa39-7ff6d5284a9e1609232599608-1.jpg",
      description:
        "Peach-Coloured solid formal shirt, has a spread collar, short sleeves, button placket, straight hem, and 1 patch pocket",
      price: 749,
      countInStock: 10,
    },
    {
      name: "Campus Sutra",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg",
      description:
        "Navy blue and grey colourblocked casual shirt, has a spread collar, long sleeves, button placket, and curved hem",
      price: 599,
      countInStock: 40,
    },
    {
      name: "HERE&NOW",
      imageUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg",
      description:
        "Red and black checked casual shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hemManufacturer Info: Sixth Sense",
      price: 549,
      countInStock: 10,
    },
  ];
  
  module.exports = products;