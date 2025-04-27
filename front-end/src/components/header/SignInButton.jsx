import React from 'react';
import Link from 'next/link';

const SignInButton = () => {
  return (
    <Link 
      href="/sign-up"
      className="h-[42px] min-w-[100px] px-4 rounded-lg border border-[#644FC1] bg-[#644FC1] text-white font-medium hover:bg-[#5a47b0] transition-colors inline-flex items-center justify-center"
    >
      Sign-in
    </Link>
  );
};

export default SignInButton; 