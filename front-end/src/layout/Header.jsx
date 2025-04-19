"use client";

import React from 'react';
import Logo from '../components/header/Logo';
import MainMenu from '../components/header/MainMenu';
import SearchAndAuth from '../components/header/SearchAndAuth';
import MobileMenu from '../components/header/MobileMenu';
import SignInButton from '../components/header/SignInButton';

export default function Header() {
  return (
    <header className="w-full bg-white">
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
} 