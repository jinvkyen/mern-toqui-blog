import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className='h-full flex items-center bg-toquiPrimary'>
      <div className='container'>
        {/* Left column - Text content */}
        <div className='flex-1 max-w-xl'>
          <h1 className='text-4xl md:text-6xl font-normal text-left text-white mb-6'>
            Her name is <span className='font-bold'>Toqui.</span>
          </h1>
          <p className='text-xl text-gray-50 mb-8'>
            A charming New Zealand rabbit with a soft, snowy-white coat and a gentle personality. Playful yet calm, she
            loves hopping around, munching on fresh veggies, and snuggling in cozy spots.
          </p>
          <button className='bg-white text-toquiPrimary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-md'>
            Get Started
          </button>
        </div>

        {/* Right column - Image */}
        <div className='flex-1 flex justify-center md:justify-end'>
          <div className='relative w-full max-w-lg'>
            <img
              src='/assets/images/hero-toqs.png'
              alt='Toqui the rabbit'
              className='relative w-full h-full object-cover scale-125'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
