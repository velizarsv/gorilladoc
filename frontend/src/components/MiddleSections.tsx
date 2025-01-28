import React from 'react';

const MiddleSections: React.FC = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="container py-20 bg-blue-100">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold">Section 1: Easy to Use</h2>
          <p className="mt-4 text-lg">
            Our document generator is designed to be intuitive and user-friendly.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20 bg-green-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Section 2: Multiple Formats</h2>
          <p className="mt-4 text-lg">
            Export your documents in PDF, DOCX, TXT, and more.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 bg-yellow-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Section 3: Secure & Reliable</h2>
          <p className="mt-4 text-lg">
            Your data is safe with our advanced encryption technology.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-20 bg-purple-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Section 4: Collaboration</h2>
          <p className="mt-4 text-lg">
            Work with your team in real-time to create documents.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-20 bg-pink-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Section 5: Affordable Pricing</h2>
          <p className="mt-4 text-lg">
            Choose from our flexible pricing plans to suit your needs.
          </p>
        </div>
      </section>
    </>
  );
};

export default MiddleSections;