"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TittleHead from "@/components/sign-up/TittleHead";
import { useRouter } from "next/navigation";
import { LockClosedIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(12, "Password must not exceed 12 characters")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Passwords do not match")
});

export default function SetPasswordForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        toast.success("Password set successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            onClose: () => {
                router.push("/welcome");
            }
        });
        setTimeout(() => {
            router.push("/welcome");
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center mt-10">
                <div className="bg-[#EDE9FE] p-4 rounded-full mb-6">
                    <LockClosedIcon className="h-12 w-12 text-[#644FC1]" />
                </div>
                <h2 className="text-3xl font-bold text-[#644FC1] mb-6">Set your password</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex lg:px-0 px-4 flex-col items-center space-y-6 w-[383px]">
                    <div className="w-full">
                        <label htmlFor="password" className="block text-gray-800 font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                {...register("password")}
                                className="mt-2 px-4 py-2 w-full border-2 border-[#8D75F7] focus:outline-none rounded-md"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                    <EyeSlashIcon className="h-5 w-5" />
                                ) : (
                                    <EyeIcon className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                        <ul className="mt-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Password must be 8-12 characters
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Must contain numbers and special characters
                            </li>
                        </ul>
                    </div>

                    <div className="w-full">
                        <label htmlFor="confirmPassword" className="block text-gray-800 font-medium">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                {...register("confirmPassword")}
                                className="mt-2 px-4 py-2 w-full border-2 border-[#8D75F7] focus:outline-none rounded-md"
                                placeholder="Confirm your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? (
                                    <EyeSlashIcon className="h-5 w-5" />
                                ) : (
                                    <EyeIcon className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-4 cursor-pointer px-6 py-2 bg-[#644FC1] text-white rounded-md hover:bg-[#5c3ec4] w-full"
                    >
                        Continue
                    </button>
                </form>
            </section>
            <ToastContainer />
        </div>
    );
} 