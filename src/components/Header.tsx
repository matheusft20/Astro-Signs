import React from 'react';
import { MoonStar } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center gap-3">
          <MoonStar className="h-8 w-8 text-yellow-300" />
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
            Astro Signs
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;