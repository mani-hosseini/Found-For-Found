"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Logo from '@/components/header/Logo';
import MainMenu from '@/components/header/MainMenu';
import SearchAndAuth from '@/components/header/SearchAndAuth';
import SignInButton from '@/components/header/SignInButton';

const MobileMenu = dynamic(() => import('@/components/header/MobileMenu'), {
  ssr: false,
  loading: () => <div className="w-6 h-6" /> // Placeholder while loading
});

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="w-full md:border-b-2 border-[#D7CFF9]">
        <div className="w-[85%] mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <MainMenu />
              <div className="flex items-center space-x-4">
                <SearchAndAuth />
                <SignInButton />
              </div>
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 