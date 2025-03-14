import React from "react";

const FeaturedSection: React.FC = () => {
  return (
    <section className='py-12'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Featured Content</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Featured cards */}
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-xl font-semibold mb-4'>Pet Care Tips</h3>
          <p className='text-gray-600'>Essential tips for taking care of your pets.</p>
        </div>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-xl font-semibold mb-4'>Community Stories</h3>
          <p className='text-gray-600'>Stories from our pet-loving community.</p>
        </div>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-xl font-semibold mb-4'>Latest Updates</h3>
          <p className='text-gray-600'>Stay updated with the latest pet news.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
