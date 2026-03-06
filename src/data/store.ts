export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  features?: string[];
  specs?: Record<string, string>;
  stock: number;
  status: 'active' | 'inactive';
  rating: number;
  reviewCount: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: { name: string; avatar: string };
  date: string;
  readTime: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const products: Product[] = [
  {
    id: '1', name: 'Brother MFC-L3770CDW', brand: 'Brother', category: 'Printers',
    price: 45999, originalPrice: 52999, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop',
    description: 'All-in-one color laser printer with wireless connectivity, duplex printing, and advanced scanning features.',
    features: ['Wireless Printing', 'Duplex Printing', 'Color Laser', 'ADF Scanner'],
    specs: { 'Print Speed': '24 ppm', 'Resolution': '2400x600 dpi', 'Connectivity': 'WiFi, USB, Ethernet', 'Paper Capacity': '250 sheets' },
    stock: 15, status: 'active', rating: 4.5, reviewCount: 128
  },
  {
    id: '2', name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', category: 'Smartphones',
    price: 169999, originalPrice: 189999, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    description: 'Premium flagship smartphone with S Pen, 200MP camera, and titanium frame.',
    features: ['200MP Camera', 'S Pen Included', 'Titanium Frame', '5000mAh Battery'],
    specs: { 'Display': '6.8" Dynamic AMOLED', 'Processor': 'Snapdragon 8 Gen 3', 'RAM': '12GB', 'Storage': '256GB' },
    stock: 25, status: 'active', rating: 4.8, reviewCount: 342
  },
  {
    id: '3', name: 'TCL 55" 4K Smart TV', brand: 'TCL', category: 'Smart TVs',
    price: 54999, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    description: 'Immersive 4K HDR Smart TV with Google TV built-in and Dolby Vision.',
    features: ['4K HDR', 'Google TV', 'Dolby Vision', 'Chromecast Built-in'],
    specs: { 'Screen Size': '55 inches', 'Resolution': '3840x2160', 'HDR': 'Dolby Vision, HDR10', 'Smart Platform': 'Google TV' },
    stock: 10, status: 'active', rating: 4.3, reviewCount: 89
  },
  {
    id: '4', name: 'Hikvision 8CH CCTV Kit', brand: 'Hikvision', category: 'CCTV',
    price: 38999, originalPrice: 44999, image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=400&fit=crop',
    description: 'Complete 8-channel security camera system with night vision and remote viewing.',
    features: ['8 Cameras', 'Night Vision', 'Remote Viewing', '1TB Storage'],
    specs: { 'Channels': '8', 'Resolution': '2MP Full HD', 'Night Vision': '30m IR', 'Storage': '1TB HDD' },
    stock: 8, status: 'active', rating: 4.6, reviewCount: 67
  },
  {
    id: '5', name: 'iPhone 15 Pro Max', brand: 'Apple', category: 'Smartphones',
    price: 199999, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
    description: 'Apple\'s most advanced iPhone with titanium design, A17 Pro chip, and pro camera system.',
    features: ['A17 Pro Chip', 'Titanium Design', '48MP Camera', 'USB-C'],
    specs: { 'Display': '6.7" Super Retina XDR', 'Chip': 'A17 Pro', 'Camera': '48MP Main', 'Battery': 'Up to 29h video' },
    stock: 20, status: 'active', rating: 4.9, reviewCount: 512
  },
  {
    id: '6', name: 'Anker PowerCore 26800', brand: 'Anker', category: 'Accessories',
    price: 5999, originalPrice: 7499, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    description: 'High-capacity portable charger with dual USB ports and fast charging.',
    features: ['26800mAh', 'Dual USB', 'Fast Charging', 'PowerIQ'],
    specs: { 'Capacity': '26800mAh', 'Output': '2x USB-A', 'Input': 'Micro-USB', 'Weight': '495g' },
    stock: 50, status: 'active', rating: 4.4, reviewCount: 234
  },
  {
    id: '7', name: 'Xiaomi Redmi Note 13 Pro', brand: 'Xiaomi', category: 'Smartphones',
    price: 32999, originalPrice: 36999, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    description: 'Feature-packed mid-range smartphone with 200MP camera and AMOLED display.',
    features: ['200MP Camera', 'AMOLED Display', '67W Fast Charging', '5000mAh Battery'],
    specs: { 'Display': '6.67" AMOLED', 'Processor': 'Snapdragon 7s Gen 2', 'RAM': '8GB', 'Storage': '256GB' },
    stock: 30, status: 'active', rating: 4.5, reviewCount: 178
  },
  {
    id: '8', name: 'Samsung 65" QLED 4K TV', brand: 'Samsung', category: 'Smart TVs',
    price: 109999, originalPrice: 129999, image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&h=400&fit=crop',
    description: 'Premium QLED Smart TV with quantum dot technology and Tizen OS.',
    features: ['QLED Display', 'Quantum Processor', 'Tizen OS', 'Ambient Mode'],
    specs: { 'Screen Size': '65 inches', 'Resolution': '3840x2160', 'Panel': 'QLED', 'Smart Platform': 'Tizen' },
    stock: 5, status: 'active', rating: 4.7, reviewCount: 156
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1', slug: 'best-smartphones-2024-kenya',
    title: 'Best Smartphones to Buy in Kenya 2024',
    excerpt: 'Our comprehensive guide to the top smartphones available in Kenya, covering every budget range.',
    content: 'Full article content here...',
    category: 'Product Guides',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
    author: { name: 'James Mwangi', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    date: '2024-03-15', readTime: '8 min read'
  },
  {
    id: '2', slug: 'home-security-cctv-guide',
    title: 'Complete Guide to Home Security & CCTV',
    excerpt: 'Everything you need to know about setting up a CCTV system for your home or business.',
    content: 'Full article content here...',
    category: 'Industry News',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
    author: { name: 'Sarah Wanjiku', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    date: '2024-03-10', readTime: '6 min read'
  },
  {
    id: '3', slug: 'printer-buying-guide',
    title: 'How to Choose the Right Printer for Your Office',
    excerpt: 'Laser vs inkjet, single function vs multifunction - we break down everything for you.',
    content: 'Full article content here...',
    category: 'Product Guides',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=400&fit=crop',
    author: { name: 'David Ochieng', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    date: '2024-03-05', readTime: '5 min read'
  },
];

export const categories = ['All', 'Printers', 'Smartphones', 'Smart TVs', 'CCTV', 'Accessories'];
export const brands = ['Samsung', 'Apple', 'Huawei', 'Xiaomi', 'Tecno', 'Infinix', 'Brother', 'Hikvision', 'Anker', 'TCL'];
