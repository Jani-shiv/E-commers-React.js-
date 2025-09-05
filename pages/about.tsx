import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - E-commers Pro</title>
        <meta name="description" content="Learn about E-commers Pro and our mission to provide the best shopping experience" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">About E-commers Pro</h1>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                E-commers Pro is a cutting-edge e-commerce platform built for 2025 and beyond. We combine modern technology 
                with exceptional user experience to create the ultimate online shopping destination.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">🛒 Advanced Shopping</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Smart cart management, wishlist, and personalized recommendations
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">🔒 Secure Payments</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Multiple payment gateways with bank-level security
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">📱 PWA Support</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Install as app, offline support, push notifications
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">🌍 Global Ready</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Multi-language, multi-currency, worldwide shipping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
