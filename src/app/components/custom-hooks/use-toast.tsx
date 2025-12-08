import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

export function useToast() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function showToast(msg: string) {
    setMessage(msg);
    setOpen(false);
    setTimeout(() => {
      setOpen(true);
    }, 10);
  }

  const ToastComponent = () => (
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="bg-orange-400 text-white px-4 py-3 rounded-md shadow-lg"
      >
        <Toast.Title className="font-medium">{message}</Toast.Title>
      </Toast.Root>
  )

  return { showToast, ToastComponent };
}
