import React from 'react';
import { Palette } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <Palette className="w-8 h-8 mr-3" />
        <div className="text-center">
          <h1 className="text-3xl font-bold">Asian Paints</h1>
          <p className="text-orange-100 text-sm mt-1">Beautiful Homes Designer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;