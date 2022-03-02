const SHOP_DATA = [
	{
		id: 1,
		title: 'Hats',
		routeName: 'hats',
		items: [
			{
				id: 1,
				name: 'Brown Brim',
				imageUrl: 'https://i.imgur.com/K22CNhZ.jpg',
				price: 25
			},
			{
				id: 2,
				name: 'Blue Beanie',
				imageUrl: 'https://i.imgur.com/KCJScrF.jpg',
				price: 18
			},
			{
				id: 3,
				name: 'Brown Cowboy',
				imageUrl: 'https://i.imgur.com/C3zqZEI.jpg',
				price: 35
			},
			{
				id: 4,
				name: 'Grey Brim',
				imageUrl: 'https://i.imgur.com/4wJsGpq.jpg',
				price: 25
			},
			{
				id: 5,
				name: 'Green Beanie',
				imageUrl: 'https://i.imgur.com/Epxbbf9.jpeg',
				price: 18
			},
			{
				id: 6,
				name: 'Palm Tree Cap',
				imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
				price: 14
			},
			{
				id: 7,
				name: 'Red Beanie',
				imageUrl: 'https://i.imgur.com/lhkaJym.jpg',
				price: 18
			},
			{
				id: 8,
				name: 'Wolf Cap',
				imageUrl: 'https://i.imgur.com/XGbZL1F.jpg',
				price: 14
			},
			{
				id: 9,
				name: 'Blue Snapback',
				imageUrl: 'https://i.imgur.com/gleoSnQ.jpg',
				price: 16
			}
		]
	},
	{
		id: 2,
		title: 'Sneakers',
		routeName: 'sneakers',
		items: [
			{
				id: 1,
				name: 'Adidas NMD',
				imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
				price: 220
			},
			{
				id: 2,
				name: 'Adidas Yeezy',
				imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
				price: 280
			},
			{
				id: 3,
				name: 'Black Converse',
				imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
				price: 110
			},
			{
				id: 4,
				name: 'Nike White AirForce',
				imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
				price: 160
			},
			{
				id: 5,
				name: 'Nike Red High Tops',
				imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
				price: 160
			},
			{
				id: 6,
				name: 'Nike Brown High Tops',
				imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
				price: 160
			},
			{
				id: 7,
				name: 'Air Jordan Limited',
				imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
				price: 190
			},
			{
				id: 8,
				name: 'Timberlands',
				imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
				price: 200
			}
		]
	},
	{
		id: 3,
		title: 'Jackets',
		routeName: 'jackets',
		items: [
			{
				id: 1,
				name: 'Black Jean Shearling',
				imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
				price: 125
			},
			{
				id: 2,
				name: 'Blue Jean Jacket',
				imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
				price: 90
			},
			{
				id: 3,
				name: 'Grey Jean Jacket',
				imageUrl: 'https://i.imgur.com/JPIL9zY.jpeg',
				price: 90
			},
			{
				id: 4,
				name: 'Brown Shearling',
				imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
				price: 165
			},
			{
				id: 5,
				name: 'Tan Trench',
				imageUrl: 'https://i.imgur.com/gjPvyyR.jpg',
				price: 185
			}
		]
	},
	{
		id: 4,
		title: 'Jeans',
		routeName: 'jeans',
		items: [
			{
				id: 1,
				name: 'Blue Tanktop',
				imageUrl: 'https://i.imgur.com/5rwM60k.jpeg',
				price: 25
			},
			{
				id: 2,
				name: 'Floral Blouse',
				imageUrl: 'https://i.imgur.com/0I8R7KY.jpeg',
				price: 20
			},
			{
				id: 3,
				name: 'Floral Dress',
				imageUrl: 'https://i.imgur.com/xP2KCj8.jpg',
				price: 80
			},
			{
				id: 4,
				name: 'Red Dots Dress',
				imageUrl: 'https://i.imgur.com/nxEWk1i.jpg',
				price: 80
			},
			{
				id: 5,
				name: 'Striped Sweater',
				imageUrl: 'https://i.imgur.com/O3mI8lD.jpg',
				price: 45
			},
			{
				id: 6,
				name: 'Yellow Track Suit',
				imageUrl: 'https://i.imgur.com/VKg4dcW.jpg',
				price: 135
			},
			{
				id: 7,
				name: 'White Blouse',
				imageUrl: 'https://i.imgur.com/g4uxSGF.jpg',
				price: 20
			}
		]
	},
	{
		id: 5,
		title: 'Hoodies',
		routeName: 'hoddies',
		items: [
			{
				id: 1,
				name: 'Camo Down Vest',
				imageUrl: 'https://i.imgur.com/mnIWT6h.jpg',
				price: 325
			},
			{
				id: 2,
				name: 'Floral T-shirt',
				imageUrl: 'https://i.imgur.com/7XOGMYh.jpg',
				price: 20
			},
			{
				id: 3,
				name: 'Black & White Longsleeve',
				imageUrl: 'https://i.imgur.com/Zfq7gYm.jpg',
				price: 25
			},
			{
				id: 4,
				name: 'Pink T-shirt',
				imageUrl: 'https://i.imgur.com/E3OlTNo.jpg',
				price: 25
			},
			{
				id: 5,
				name: 'Jean Long Sleeve',
				imageUrl: 'https://i.imgur.com/BSpp7SX.jpg',
				price: 40
			},
			{
				id: 6,
				name: 'Burgundy T-shirt',
				imageUrl: 'https://i.imgur.com/L64Plgm.jpg',
				price: 25
			}
		]
	}
];

export default SHOP_DATA;
