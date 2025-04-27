"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import VerificationModal from './VerificationModal';
import TittleHead from "@/components/sign-up/TittleHead";
import { useRouter } from 'next/navigation';
import VerificationCodeForm from './VerificationCodeForm';

const PhoneNumberForm = () => {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showVerificationCode, setShowVerificationCode] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phoneNumber) {
            toast.error('Please enter your phone number');
            return;
        }
        if (!/^[0-9]{10,11}$/.test(phoneNumber)) {
            toast.error('Please enter a valid phone number');
            return;
        }
        setShowVerificationModal(true);
    };

    const handleModalClose = () => {
        setShowVerificationModal(false);
        router.push(`/sign-up?step=verify-phone-code&phone=${encodeURIComponent(phoneNumber)}`);
    };

    if (showVerificationCode) {
        return <VerificationCodeForm fromPhone={true} contactInfo={phoneNumber} />;
    }

    return (
        <div>
            <TittleHead
                title="Verify your phone number"
                subtitle="FOUND-FOR-FOUND"
            />
            <div className="flex items-center justify-center mt-[70px]">
                <div className="max-w-md w-full space-y-8 p-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#644FC1]">
                            Enter your phone number
                        </h2>
                        <p className="mt-2 text-gray-600">
                            We'll send you a verification code
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#644FC1] focus:border-[#644FC1]"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#644FC1] hover:bg-[#644FC1]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#644FC1]"
                        >
                            Continue
                        </button>
                    </form>
                </div>

                {showVerificationModal && (
                    <VerificationModal
                        phoneNumber={phoneNumber}
                        onClose={handleModalClose}
                    />
                )}
            </div>
        </div>
    );
};

export default PhoneNumberForm; 