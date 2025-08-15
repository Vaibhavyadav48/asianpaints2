import React from 'react';
import { Check } from 'lucide-react';
import { DesignOption } from '../types';

interface DesignOptionsProps {
  options: DesignOption[];
  selectedOption: string | null;
  onOptionSelect: (optionId: string) => void;
}

const DesignOptions: React.FC<DesignOptionsProps> = ({
  options,
  selectedOption,
  onOptionSelect
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {options.map((option) => (
        <div
          key={option.id}
          className={`relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all transform hover:scale-105 ${
            selectedOption === option.id
              ? 'ring-4 ring-orange-500 ring-opacity-50'
              : 'hover:shadow-lg'
          }`}
          onClick={() => onOptionSelect(option.id)}
        >
          {selectedOption === option.id && (
            <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white p-2 rounded-full">
              <Check className="w-5 h-5" />
            </div>
          )}
          
          <div className="aspect-w-16 aspect-h-12">
            <img
              src={option.image}
              alt={option.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800';
              }}
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {option.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {option.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignOptions;