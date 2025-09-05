import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commers Pro</title>
        <meta name="description" content="A professional e-commerce site for 2025" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-primary to-accent text-dark">
        <h1 className="text-4xl font-bold text-center py-10">Welcome to E-commers Pro</h1>
        {/* Product listing, features, etc. will go here */}
      </main>
      <Footer />
    </>
  );
}
