'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[80rem]">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-lg mb-4">We respect your privacy. We collect only what is necessary to operate and improve our services.</p>
          <p className="text-gray-500">No tracking beyond essential analytics. No selling of data. Contact us if you have any questions.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}