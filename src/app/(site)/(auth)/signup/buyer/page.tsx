import BuyerSignup from "@/components/Auth/Signup/BuyerSignup";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signup Page | Sayur Lokal",
  description: "This is Signup Page for Sayur Lokal",
  // other metadata
};

const SignupPage = () => {
  return (
    <main>
      <BuyerSignup />
    </main>
  );
};

export default SignupPage;
