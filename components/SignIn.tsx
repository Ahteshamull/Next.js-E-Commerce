
import { SignInButton } from "@clerk/nextjs";
import React from "react";

export default function SignIn() {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-LightColor hover:cursor-pointer hover:text-darkColor hoverEffect">
        Login
      </button>
    </SignInButton>
  );
}