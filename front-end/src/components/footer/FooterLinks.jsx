import React from 'react';
import Link from 'next/link';

const FooterLinks = ({links}) => (
    <nav className="flex items-center space-x-6" aria-label="Legal links">
        {links.map((link) => (
            <Link key={link.href} href={link.href} className="md:text-sm text-xs text-gray-600 hover:text-indigo-600 hover:underline transition-colors duration-200">
                {link.label}
            </Link>
        ))}
    </nav>
);

export default FooterLinks; 