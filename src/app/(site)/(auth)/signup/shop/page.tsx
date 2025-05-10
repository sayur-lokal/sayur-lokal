import ShopSignup from "@/components/Auth/Signup/ShopSignup";
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
      <ShopSignup />
    </main>
  );
};

export default SignupPage;
