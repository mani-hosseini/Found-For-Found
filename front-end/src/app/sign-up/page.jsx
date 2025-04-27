"use client";

import { useSearchParams } from 'next/navigation';
import SignupForm from "@/components/sign-up/Form";
import VerificationCodeForm from "@/components/sign-up/VerificationCodeForm";
import PhoneNumberForm from "@/components/sign-up/PhoneNumberForm";
import SetPasswordForm from "@/components/sign-up/SetPasswordForm";
import { useEffect } from "react";

export default function Signup() {
    const searchParams = useSearchParams();
    const step = searchParams.get('step');
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');

    useEffect(() => {
        const footer = document.querySelector('footer');
        if (footer) {
            footer.style.display = 'none';
        }
        return () => {
            if (footer) {
                footer.style.display = '';
            }
        };
    }, []);

    const renderStep = () => {
        switch (step) {
            case 'verify-email':
                return <VerificationCodeForm contactInfo={email} />;
            case 'verify-phone':
                return <PhoneNumberForm />;
            case 'verify-phone-code':
                return <VerificationCodeForm fromPhone={true} contactInfo={phone} />;
            case 'set-password':
                return <SetPasswordForm />;
            default:
                return <SignupForm />;
        }
    };

    return (
        <section className={'px-6 pb-20'}>
            <div className="container mx-auto">
                {renderStep()}
            </div>
        </section>
    );
} 