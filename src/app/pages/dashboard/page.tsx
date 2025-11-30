"use client";

import PageHeader from "@/app/components/page-header";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    getSession().then((session: any) => {
      if (!session?.user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <div>
        <PageHeader><div className="text-6xl absolute bottom-1 font-bold">Dashboard</div></PageHeader>
    </div>
  );
}
