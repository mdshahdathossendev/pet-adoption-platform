import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (
        <div className='mt-25'>
            <div className="flex items-center justify-center min-h-[60vh] px-4">
  <div className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">

    {/* Glow Effect */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-300 opacity-20 blur-3xl rounded-full"></div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>

    {/* Icon */}
    <div className="flex justify-center mb-6">
      <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
        <span className="text-5xl">🔍</span>
      </div>
    </div>

    {/* Title */}
    <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
      No Data Found
    </h1>

    {/* Description */}
    <p className="text-gray-500 text-lg leading-relaxed mb-8">
      We couldn’t find any matching results.  
      Try searching with different keywords.
    </p>

    {/* Button */}
    <button className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
      <Link href={'/'}>Back to Home</Link>
    </button>
  </div>
</div>
        </div>
    );
};

export default notFoundPage;