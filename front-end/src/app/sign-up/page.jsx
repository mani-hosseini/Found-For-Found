"use client";

import React from 'react';
import Google from "@/components/sign-up/Google";
import SignupForm from "@/components/sign-up/Form";
import { useEffect } from 'react';

export default function Signup() {
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

    return (
        <section className={'px-6 pb-20'}>
            <div className="container mx-auto">
                <SignupForm/>
            </div>
        </section>
    );
} 