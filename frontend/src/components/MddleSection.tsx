import React from 'react';

const MiddleSection: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Easy to Use</h2>
          <p className="mt-4">Intuitive interface for quick document generation.</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Multiple Formats</h2>
          <p className="mt-4">Export your documents in PDF, DOCX, and more.</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Secure</h2>
          <p className="mt-4">Your data is safe with our encryption technology.</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;