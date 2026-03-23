export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  kaspiLink: string;
  categoryId: number;
  likes: number;
}