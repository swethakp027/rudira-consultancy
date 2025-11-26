"use client";

import { getSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";



export default function Page() {
 const router = useRouter();
      useEffect(() => {
    console.log("API KEY", process.env.OPENAI_API_KEY)
    getSession().then((session:any) => {
      if (!session?.user) {
        router.push('/');
      }
    })
  }, []);
  return (
    <div>
      <h1 className="text-purple-800">Dashboard</h1>
    </div>
  );
}