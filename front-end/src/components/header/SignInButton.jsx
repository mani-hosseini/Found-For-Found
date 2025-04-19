import React from 'react';
import Link from 'next/link';

export default function SignInButton() {
  return (
    <Link href="/signin">
      <button className="h-[42px] min-w-[100px] px-4 rounded-lg border border-[#644FC1] bg-[#644FC1] text-white font-medium hover:bg-[#5a47b0] transition-colors cursor-pointer">
        Sign-in
      </button>
    </Link>
  );
} 