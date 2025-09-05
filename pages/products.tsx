import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Products - E-commers Pro</title>
        <meta name="description" content="Browse our extensive collection of premium products" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Products</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Advanced product catalog with filters, search, and pagination coming soon...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
