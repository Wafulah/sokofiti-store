export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  quantity: string;
  description: string;
  size: Size;
  color: Color;
  images: Image[];
}

export interface ProductCart {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  quantity: string;
  description: string;
  items: string;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Store {
  id: string;
  name: string;
  description: string;
  images: Image[];
  products: Product[];
  categories: Category[];
  counties: County[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Order {
  id: string;
  store: Store[];
  isPaid: boolean;
  phone: string;
  county: County[];
  createdAt: string; 
  orderItems:Product[];
}

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password?: string;
}

export interface UserProfile {
  id?: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  billboard: Billboard;
}
export interface Offer {
  id: string;
  name: string;
  imageUrl: string;
  href: string;
}

export interface County {
  id: string;
  name: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
