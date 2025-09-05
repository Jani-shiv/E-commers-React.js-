import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commers Pro - Professional E-commerce for 2025</title>
        <meta name="description" content="A professional, modern e-commerce platform with cutting-edge features for 2025" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to E-commers Pro 2025</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A professional, fully-featured e-commerce platform built with Next.js, TypeScript, TailwindCSS, and modern best practices.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">Smart Shopping</h3>
              <p className="text-sm opacity-80">Advanced cart, wishlist, and product catalog</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-sm opacity-80">Stripe, PayPal, and multiple payment options</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">PWA Ready</h3>
              <p className="text-sm opacity-80">Install as app, offline support, push notifications</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
