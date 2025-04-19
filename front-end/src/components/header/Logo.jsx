import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="col-span-2">
      <Link href="/" className="text-xl font-bold">
        <img 
          src="/image/logo/Vector.png" 
          alt="Kelasor Logo" 
          className="h-10 w-auto"
        />
      </Link>
    </div>
  );
} 