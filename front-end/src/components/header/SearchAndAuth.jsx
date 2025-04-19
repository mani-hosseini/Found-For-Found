import React from 'react';

export default function SearchAndAuth() {
  return (
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search brand , category, or..." 
        className="pl-10 pr-4 h-[42px] rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D7CFF9] focus:border-transparent shadow-sm w-[250px] text-sm"
      />
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
    </div>
  );
} 