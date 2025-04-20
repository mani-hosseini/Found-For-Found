import React from 'react';
import TittleSignUp from "@/components/sign-up/tittle";
import Logo from "@/components/header/Logo";
import Formsignup from "@/components/sign-up/form";

export default function Signin() {
    return (
        <section className={'px-6 '}>
            <div className="container mx-auto">
                <TittleSignUp/>
                <Formsignup/>
            </div>
        </section>
    );
} 