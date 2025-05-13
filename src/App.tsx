import React from 'react';
import Header from './components/Header';
import ZodiacFinder from './components/ZodiacFinder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 text-white relative overflow-hidden">
      <div className="stars absolute inset-0"></div>
      <div className="twinkle absolute inset-0"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <ZodiacFinder />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;