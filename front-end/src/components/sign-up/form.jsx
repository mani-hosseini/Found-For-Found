import React from 'react';

export default function Form() {
    return (
        <div className="flex items-center justify-center mt-10">
            <form className="flex flex-col space-y-3 w-[383px]">
                <div>
                    <label htmlFor="firstName" className="block text-gray-800 font-medium">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="mt-2 px-4 py-2 w-full border-2 border-[#8D75F7] focus:outline-none rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-gray-800 font-medium">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="mt-2 px-4 py-2 w-full border-2 border-[#8D75F7] focus:outline-none rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-800 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="mt-2 px-4 py-2 w-full border-2 border-[#8D75F7] focus:outline-none rounded-md"
                    />
                </div>
                <span className={'text-[#644FC1] text-xs'}>we will send you 6 digits to your email</span>
                <button
                    type="submit"
                    className="mt-4 cursor-pointer px-6 py-2 bg-[#644FC1] text-white rounded-md hover:bg-[#5c3ec4]"
                >
                    Continue
                </button>
            </form>
        </div>
    );
}
