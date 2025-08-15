import React from 'react';
import { CheckCircle, Phone, Mail } from 'lucide-react';

const SuccessMessage: React.FC = () => {
  return (
    <div className="text-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Choice Saved Successfully!
        </h2>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for choosing Asian Paints Beautiful Homes. Our design expert will contact you soon to discuss your room transformation.
        </p>
        
        <div className="bg-orange-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">What happens next?</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-orange-500" />
              <span>Our agent will call you within 24 hours</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-orange-500" />
              <span>You'll receive a detailed design proposal</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => window.location.reload()}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
        >
          Start New Design
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;