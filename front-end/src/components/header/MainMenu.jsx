import React from 'react';
import Link from 'next/link';

export default function MainMenu() {
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '/about-us', label: 'About Us' },
    { href: '/help-support', label: 'Help & Support' }
  ];

  return (
    <nav className="hidden md:flex col-span-8 justify-center space-x-8">
      {menuItems.map((item) => (
        <Link 
          key={item.href} 
          href={item.href} 
          className="text-gray-700 hover:text-gray-900 font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#644FC1] after:transition-all after:duration-300 hover:after:w-full"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
} 