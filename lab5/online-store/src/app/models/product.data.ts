import { Product } from './product.model';
import { Category } from './category.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones', icon: '📱' },
  { id: 2, name: 'Laptops', icon: '💻' },
  { id: 3, name: 'Headphones', icon: '🎧' },
  { id: 4, name: 'Tablets', icon: '📟' }
];

export const PRODUCTS: Product[] = [
  // ============ SMARTPHONES (Category 1) - 5 products ============
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max',
    description: '256GB, Natural Titanium, 6.7" Super Retina XDR display, A17 Pro chip, 48MP camera',
    price: 649900,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/haf/64503528718366.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/hf6/83559848214558.png',
      'https://resources.cdn-kaspi.kz/img/m/p/h81/hf7/83559848247326.png'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/FgrZ9pNRMmvikNV',
    categoryId: 1,
    likes: 0
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    description: '512GB, Titanium Black, 6.8" Dynamic AMOLED 2X, 200MP camera, S Pen included',
    price: 599900,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h7b/h3e/84963248439326.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf1/h42/84963248504862.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd8/h43/84963248570398.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/9ABeD1BWKWtVQ25',
    categoryId: 1,
    likes: 0
  },
  {
    id: 3,
    name: 'Xiaomi 14 Ultra',
    description: '512GB, Black, 6.73" AMOLED, Snapdragon 8 Gen 3, 50MP Leica quad camera',
    price: 499990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pe3/p87/67214848.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc7/hf6/85322630856734.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf2/h10/85322630922270.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h08/h11/85322630987806.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/6SAv9sHVHsiEmzB',
    categoryId: 1,
    likes: 0
  },
  {
    id: 4,
    name: 'Google Pixel 9 Pro',
    description: '256GB, Obsidian, 6.7" Super Actua display, Google Tensor G3, 50MP camera',
    price: 449990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hd0/86895796617246.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h82/h54/84222921621534.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/h62/84222921687070.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h51/h63/84222921752606.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/FnzjpwN6hYCL8vy',
    categoryId: 1,
    likes: 0
  },
  {
   id: 5,
    name: 'Apple iPhone 14 Pro Max',
    description: '256GB, Deep Purple, 6.7" Super Retina XDR display, A16 Bionic chip, 48MP camera',
    price: 549900,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/haf/64503528718366.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf2/h3f/65290967070750.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h3c/h15/65290967103518.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h39/hf1/65290967136286.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/6G1asWw4xbGawqK',
    categoryId: 1,
    likes: 0
  },

  // ============ LAPTOPS (Category 2) - 5 products ============
  {
    id: 6,
    name: 'Apple MacBook Pro 16" M3',
    description: 'M3 Max chip, 48GB RAM, 1TB SSD, Space Black, 16.2" Liquid Retina XDR',
    price: 1899990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/pb7/15675993.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h6c/hd9/84908030427166.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h13/hdb/84908030492702.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h73/hdc/84908030558238.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/Fp4E7QTe1rnAcQk',
    categoryId: 2,
    likes: 0
  },
  {
    id: 7,
    name: 'ASUS ROG Strix G18',
    description: '18" QHD+, Intel Core i9-14900HX, 32GB RAM, 1TB SSD, RTX 4080',
    price: 1299990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ped/p6a/109509105.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h52/h2b/85245904470046.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h0b/h2c/85245904535582.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/h2d/85245904601118.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/AhR4g7HAUKhnxg9',
    categoryId: 2,
    likes: 0
  },
  {
    id: 8,
    name: 'Lenovo Legion 9i',
    description: '16" 3.2K Mini-LED, Intel Core i9-13980HX, 64GB RAM, 2TB SSD, RTX 4090',
    price: 1499990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p66/104153549.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/hbb/84577430306846.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd9/hbc/84577430372382.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc0/hbd/84577430437918.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/FDUKYEzFLTn4XUH',
    categoryId: 2,
    likes: 0
  },
  {
    id: 9,
    name: 'Dell XPS 15',
    description: '15.6" OLED, Intel Core i9-13900H, 32GB RAM, 1TB SSD, RTX 4060',
    price: 999990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hb8/67728241262622.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb4/h27/84532345045022.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/h28/84532345110558.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h44/h29/84532345176094.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/4ncjQc6RHzzkFuH',
    categoryId: 2,
    likes: 0
  },
  {
    id: 10,
    name: 'HP Spectre x360 16"',
    description: '16" 2.8K OLED touch, Intel Core i7-13700H, 16GB RAM, 1TB SSD',
    price: 799990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p01/17948532.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfd/h7c/84698791444510.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h0e/h7d/84698791510046.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h2e/h7e/84698791575582.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/AfU43MCqaHXgq9k',
    categoryId: 2,
    likes: 0
  },

  // ============ HEADPHONES (Category 3) - 5 products ============
  {
    id: 11,
    name: 'Sony WH-1000XM5',
    description: 'Wireless noise-cancelling headphones, 30h battery, LDAC, 4 microphones',
    price: 149990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf7/h2c/84708149243742.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf8/h2d/84708149327182.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf9/h2e/84708149410742.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/Gjww14XqBPprxij',
    categoryId: 3,
    likes: 0
  },
  {
    id: 12,
    name: 'Apple AirPods Max',
    description: 'Wireless over-ear headphones, Active Noise Cancellation, Spatial Audio',
    price: 279990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h0c/64412427321374.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h43/hc8/64412427354142.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h52/hd5/64412427386910.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/HmALugpvYNQ6EKN',
    categoryId: 3,
    likes: 0
  },
  {
    id: 13,
    name: 'Bose QuietComfort Ultra',
    description: 'Wireless noise-cancelling headphones, Spatial Audio, 24h battery',
    price: 159990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pe4/pc5/88935838.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc4/hb8/85096967553054.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h30/hb9/85096967618590.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h4a/hba/85096967684126.jpg'
    ],
    kaspiLink: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=gallery-medium',
    categoryId: 3,
    likes: 0
  },
  {
    id: 14,
    name: 'Sennheiser Momentum 4',
    description: 'Wireless headphones, 60h battery, Adaptive Noise Cancellation',
    price: 129990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/ha0/86334264967198.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf9/hc0/67370686627870.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc5/hcc/67370686660638.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h40/hcd/67370686693406.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/Gj64x1rhABeJ3RT',
    categoryId: 3,
    likes: 0
  },
  {
    id: 15,
    name: 'JBL Tour One M2',
    description: 'Wireless adaptive noise cancelling headphones, 50h battery, Hi-Res Audio',
    price: 89990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h29/h67/81468757114910.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h6f/h9b/85089344225310.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h7a/h9c/85089344290846.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h3f/h9d/85089344356382.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/2eGWKXSvekqGtaB',
    categoryId: 3,
    likes: 0
  },

  // ============ TABLETS (Category 4) - 5 products ============
  {
    id: 16,
    name: 'Apple iPad Pro 13" M4',
    description: '512GB, Space Black, 13" Ultra Retina XDR, M4 chip, 5G',
    price: 849990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p8c/pd5/76283643.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf6/h26/85434969112606.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb5/h27/85434969178142.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hf0/h28/85434969243678.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/HCy7ZFZM4CGjf5Y',
    categoryId: 4,
    likes: 0
  },
  {
    id: 17,
    name: 'Samsung Galaxy Tab S9 Ultra',
    description: '512GB, Graphite, 14.6" Dynamic AMOLED 2X, Snapdragon 8 Gen 2, S Pen included',
    price: 649990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h30/h67/84907493539870.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h1f/h68/84907493605406.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/he3/h69/84907493670942.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/EcBtMT27MXdfJzY',
    categoryId: 4,
    likes: 0
  },
   {
    id: 18,
    name: 'Samsung Galaxy Tab A9 Lite',
    description: '64GB, Silver, 8.7" display, MediaTek Helio G99, 4GB RAM, LTE',
    price: 89990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h23/h3f/84959514443806.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h1d/h40/84959514509342.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb4/h41/84959514574878.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/EWd2Rwhn4LRbsS8',
    categoryId: 4,
    likes: 0
  },
  {
    id: 19,
    name: 'Lenovo Tab M11',
    description: '128GB, Arctic Grey, 11" display, MediaTek Helio G88, 8GB RAM',
    price: 109990,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pd5/p70/95713234.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc6/hd9/85029126848542.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h63/hda/85029126914078.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h3f/hdb/85029126979614.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/4QwNiJFhKUGT1G7',
    categoryId: 4,
    likes: 0
  },
  {
    id: 20,
    name: 'Xiaomi Pad 6',
    description: '128GB, Gray, 11" 144Hz display, Snapdragon 870, 6GB RAM',
    price: 169990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/p5e/66279423.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hac/h09/80754625544222.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h8b/h0a/80754625609758.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h0e/h0b/80754625675294.jpg'
    ],
    kaspiLink: 'https://l.kaspi.kz/shop/HbBsqc3yMFmbTyC',
    categoryId: 4,
    likes: 0
  }
];