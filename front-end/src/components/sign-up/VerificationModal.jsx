"use client";

import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

const VerificationModal = ({ phoneNumber, onClose }) => {
    const router = useRouter();

    const handleContinue = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
            <div className="bg-white rounded-2xl p-6 w-[422px] mx-4 animate-fadeIn">
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[#EDE9FE] p-3 rounded-full mb-4">
                        <CheckCircleIcon className="h-8 w-8 text-[#644FC1]" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#644FC1] mb-2">
                        Login code text massage sent
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                        We sent a 6 digit code to {phoneNumber}
                    </p>

                    <div className="w-full border-t border-gray-200 my-4"></div>

                    <button
                        onClick={handleContinue}
                        className="mt-4 cursor-pointer  text-[#644FC1]  rounded-md text:bg-[#5c3ec4] w-full"
                    >
                        OK Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerificationModal; 