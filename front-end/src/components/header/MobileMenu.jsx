"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import {
    ArrowRightIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const menuItems = [
    {href: "/", label: "Home", hasIcon: true},
    {href: "/explore", label: "Explore", hasIcon: true},
    {href: "/about-us", label: "About Us"},
    {href: "/help-support", label: "Help & Support"},
];

const SearchInput = ({ onClose }) => (
    <div className="relative flex-1">
        <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#D7CFF9] focus:outline-none focus:ring-2 focus:ring-[#D7CFF9]"
            autoFocus
            aria-label="Search"
        />
        <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#644FC1]" />
        <button
            onClick={onClose}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#644FC1]"
            aria-label="Close search"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    </div>
);

const MenuButton = ({ isOpen, onClick }) => (
    <button
        onClick={onClick}
        className="text-[#644FC1] focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
    >
        {isOpen ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        )}
    </button>
);

const MobileMenuContent = ({ onClose }) => (
    <div className="fixed inset-0 bg-white z-50 mt-16 animate-fadeIn">
        <div className="p-4 shadow-xl rounded-b-4xl animate-slideDown">
            <div className="border-t border-[#E7E7E7] pt-4 pb-12">
                {menuItems.map((item) => (
                    <div key={item.href} className="py-3">
                        <Link
                            href={item.href}
                            onClick={onClose}
                            className="flex justify-between items-center text-[#644FC1] hover:text-[#644FC1]/80 font-medium transition-colors duration-200"
                        >
                            <span>{item.label}</span>
                            {item.hasIcon && <ArrowRightIcon className="h-5 w-5" />}
                        </Link>
                    </div>
                ))}
            </div>

            <div className="w-full border-t border-gray-200 pt-4 mt-4">
                <div className="px-4 py-7 space-y-4">
                    <Link
                        href="/login-signup"
                        onClick={onClose}
                        className="w-full py-2 px-4 rounded-lg border border-[#AA99EC] bg-[#EDE9FE] text-[#644FC1] font-medium hover:bg-[#EDE9FE]/90 transition-colors duration-200 inline-flex items-center justify-center"
                    >
                        Login/Signup
                    </Link>

                    <Link
                        href="/signin"
                        onClick={onClose}
                        className="w-full py-2 px-4 rounded-lg border border-[#644FC1] bg-[#644FC1] text-white font-medium hover:bg-[#644FC1]/90 transition-colors duration-200 inline-flex items-center justify-center"
                    >
                        Start
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleMenuToggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const handleSearchToggle = useCallback(() => {
        setShowSearch(prev => !prev);
    }, []);

    return (
        <div className="md:hidden">
            <div className="flex items-center space-x-4">
                {showSearch ? (
                    <SearchInput onClose={handleSearchToggle} />
                ) : (
                    <button
                        onClick={handleSearchToggle}
                        className="text-[#644FC1] focus:outline-none"
                        aria-label="Open search"
                    >
                        <MagnifyingGlassIcon className="h-6 w-6"/>
                    </button>
                )}
                <MenuButton isOpen={isOpen} onClick={handleMenuToggle} />
            </div>

            {isOpen && <MobileMenuContent onClose={handleClose} />}
        </div>
    );
};

export default MobileMenu;