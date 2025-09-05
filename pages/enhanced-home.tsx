import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../src/contexts/store';
import { addToCart } from '../src/features/cart/cartSlice';
import { toggleTheme } from '../src/features/theme/themeSlice';
import ProductCard from '../src/components/ProductCard';
import { Product } from '../src/features/products/types';

// Mock data for demonstration
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound.',
    price: 199.99,
    originalPrice: 249.99,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'],
    category: 'Electronics',
    brand: 'AudioTech',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    stockCount: 25,
    tags: ['electronics', 'audio', 'wireless'],
    featured: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: '2',
    name: 'Stylish Backpack',
    description: 'Modern and functional backpack perfect for work, travel, and everyday use.',
    price: 79.99,
    originalPrice: 99.99,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'],
    category: 'Fashion',
    brand: 'UrbanStyle',
    rating: 4.2,
    reviewCount: 89,
    inStock: true,
    stockCount: 15,
    tags: ['fashion', 'accessories', 'travel'],
    featured: false,
    createdAt: '2024-01-02',
    updatedAt: '2024-01-02',
  },
  {
    id: '3',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart rate monitoring, and smartphone connectivity.',
    price: 299.99,
    images: ['https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400'],
    category: 'Electronics',
    brand: 'TechWear',
    rating: 4.7,
    reviewCount: 256,
    inStock: false,
    stockCount: 0,
    tags: ['electronics', 'fitness', 'smartwatch'],
    featured: true,
    createdAt: '2024-01-03',
    updatedAt: '2024-01-03',
  },
];

export default function EnhancedHomePage() {
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state: RootState) => state.cart);
  const { mode } = useSelector((state: RootState) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    }));
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Enhanced Header */}
        <header className="bg-gradient-to-r from-primary to-accent text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">E-commers Pro</h1>
              
              <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 rounded-lg text-gray-900 w-64 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                
                {/* Theme Toggle */}
                <button
                  onClick={handleToggleTheme}
                  className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                >
                  {mode === 'light' ? '🌙' : '☀️'}
                </button>
                
                {/* Cart Icon */}
                <div className="relative">
                  <span className="text-lg">🛒</span>
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {itemCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Welcome to E-commers Pro 2025</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover premium products with modern shopping experience, secure payments, and lightning-fast delivery.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Why Choose E-commers Pro?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚚</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fast Shipping</h4>
                <p className="text-gray-600 dark:text-gray-300">Free shipping on orders over $50. Express delivery available.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Secure Payments</h4>
                <p className="text-gray-600 dark:text-gray-300">SSL encrypted transactions with multiple payment options.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Premium Quality</h4>
                <p className="text-gray-600 dark:text-gray-300">Curated products from trusted brands with quality guarantee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Products</h3>
              <span className="text-gray-600 dark:text-gray-300">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">No products found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white text-lg mb-8">Get the latest deals and product updates delivered to your inbox.</p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none"
              />
              <button className="bg-accent text-white px-6 py-3 rounded-r-lg hover:bg-accent-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
