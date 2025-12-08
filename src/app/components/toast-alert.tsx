"use client";

import * as Toast from "@radix-ui/react-toast";
import { ReactNode } from "react";

export default function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <Toast.Provider swipeDirection="right">
      {children}
      <Toast.Viewport className="fixed bottom-5 right-5 w-96 z-50" />
    </Toast.Provider>
  );
}
