'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Cookies() {
  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[80rem]">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">Cookie Policy</h1>
          <p className="text-gray-400 text-lg mb-4">We use essential cookies only to deliver core functionality and remember preferences.</p>
          <p className="text-gray-500">You can disable cookies in your browser. Some features may not function without them.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}