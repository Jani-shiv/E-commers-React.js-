import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../contexts/store';
import { toggleTheme } from '../features/theme/themeSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state: RootState) => state.cart);
  const { mode } = useSelector((state: RootState) => state.theme);
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="bg-primary text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl">
          E-commers Pro
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-200 transition-colors">
            Products
          </Link>
          <Link href="/about" className="hover:text-gray-200 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition-colors">
            Contact
          </Link>
          
          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
            aria-label="Toggle theme"
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
          
          {/* Cart */}
          <Link href="/cart" className="relative hover:text-gray-200 transition-colors">
            <span className="text-xl">🛒</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {itemCount}
              </span>
            )}
          </Link>
          
          {/* User Menu */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm">Welcome, {user?.name}</span>
              <Link href="/profile" className="hover:text-gray-200 transition-colors">
                Profile
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/login" className="hover:text-gray-200 transition-colors">
                Login
              </Link>
              <Link href="/register" className="bg-accent px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
