import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="font-bold text-xl">E-commers Pro</div>
      <div className="space-x-4">
        <Link href="/">
          <span className="hover:underline">Home</span>
        </Link>
        <Link href="/products">
          <span className="hover:underline">Products</span>
        </Link>
        <Link href="/cart">
          <span className="hover:underline">Cart</span>
        </Link>
        <Link href="/profile">
          <span className="hover:underline">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
