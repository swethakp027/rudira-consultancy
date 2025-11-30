"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  const handleSignout = async () => {
    await signOut({ redirect: false });
    window.location.reload();
  };
  return (
    <button className="w-full p-0 border-0" onClick={handleSignout}>
      Sign Out
    </button>
  );
}
