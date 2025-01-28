import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="mt-4">We provide the best document generation tools.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="mt-4">Email: support@docgen.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Products & Pricing</h3>
          <p className="mt-4">Check out our pricing plans and features.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;