'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[80rem]">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">Terms of Service</h1>
          <p className="text-gray-400 text-lg mb-4">Use our products responsibly. By accessing our services, you agree to our terms.</p>
          <p className="text-gray-500">All content is provided as‑is. We reserve the right to update these terms at any time.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}