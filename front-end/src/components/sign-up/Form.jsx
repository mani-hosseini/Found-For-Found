"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useRouter} from "next/navigation";
import VerificationCodeForm from "./VerificationCodeForm";
import Google from "@/components/sign-up/Google";

export default function SignupForm() {
    const router = useRouter();
    const [showVerification, setShowVerification] = useState(false);
    const [email, setEmail] = useState("");

    const schema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email("Please enter a valid email").required("Email is required"),
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        setEmail(data.email);
        toast.success("We will send code in email", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            onClose: () => {
                router.push(`/sign-up?step=verify-email&email=${encodeURIComponent(data.email)}`);
            }
        });
    };

    if (showVerification) {
        return <VerificationCodeForm contactInfo={email} />;
    }

    return (
        <div>
            <Google/>
            <div className="flex items-center justify-center mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3 w-[383px]">
                    <div>
                        <label htmlFor="firstName" className="block text-gray-800 font-medium">
                            First Name
                        </label>
                        <input
                            {...register("firstName")}
                            type="text"
                            id="firstName"
                            placeholder="Enter your first name"
                            className="mt-2 px-4 py-2 w-full border-2 border-[#8D75F7] focus:outline-none rounded-md"
                        />
                        {errors.firstName && (
                            <span className="text-red-500 text-sm">{errors.firstName.message}</span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-gray-800 font-medium">
                            Last Name
                        </label>
                        <input
                            {...register("lastName")}
                            type="text"
                            id="lastName"
                            placeholder="Enter your last name"
                            className="mt-2 px-4 py-2 w-full border-2 border-[#8D75F7] focus:outline-none rounded-md"
                        />
                        {errors.lastName && (
                            <span className="text-red-500 text-sm">{errors.lastName.message}</span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-800 font-medium">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-2 px-4 py-2 w-full border-2 border-[#8D75F7] focus:outline-none rounded-md"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                    </div>

                    <span className="text-[#644FC1] text-xs">
                        We will send you 6 digits to your email
                    </span>

                    <button
                        type="submit"
                        className="mt-4 cursor-pointer px-6 py-2 bg-[#644FC1] text-white rounded-md hover:bg-[#5c3ec4]"
                    >
                        Continue
                    </button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    );
}