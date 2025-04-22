"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TittleHead from "@/components/sign-up/TittleHead";
import { useRouter } from "next/navigation";
import PhoneNumberForm from "./PhoneNumberForm";
import SetPasswordForm from "./SetPasswordForm";

export default function VerificationCodeForm({ fromPhone = false, contactInfo = "" }) {
    const router = useRouter();
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [showPhoneVerification, setShowPhoneVerification] = useState(false);
    const [showSetPassword, setShowSetPassword] = useState(false);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length <= 1 && /^[0-9]*$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                document.getElementById(`code-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            document.getElementById(`code-${index - 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullCode = code.join("");
        if (fullCode.length === 6) {
            toast.success("Code verified successfully!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                onClose: () => {
                    if (fromPhone) {
                        setShowSetPassword(true);
                    } else {
                        setShowPhoneVerification(true);
                    }
                }
            });
        } else {
            toast.error("Please enter the complete 6-digit code");
        }
    };

    if (showPhoneVerification) {
        return <PhoneNumberForm />;
    }

    if (showSetPassword) {
        return <SetPasswordForm />;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <TittleHead
                title={fromPhone ? "" : "Confirm your email"}
                subtitle="FOUND-FOR-FOUND"
            />
            <section className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-3xl font-bold text-[#644FC1] mb-6">Enter confirmation code</h2>
                <p className="text-gray-400 text-center text-sm mb-8">
                    {fromPhone 
                        ? `Enter the code sent to your phone number ${contactInfo}`
                        : `Enter the code sent to your email ${contactInfo}`
                    }
                </p>
                <form onSubmit={handleSubmit} className="flex lg:px-0 px-4 flex-col items-center space-y-6 w-[383px]">
                    <div className="flex space-x-2">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                id={`code-${index}`}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-10 h-12 text-center text-xl border-b-2 border-[#8D75F7] bg-transparent focus:outline-none focus:border-[#5c3ec4]"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="mt-14 cursor-pointer px-6 py-2 bg-[#644FC1] text-white rounded-md hover:bg-[#5c3ec4] w-full"
                    >
                        Continue
                    </button>
                </form>
            </section>
            <ToastContainer />
        </div>
    );
}