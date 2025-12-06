import { useState, useRef, ReactNode } from "react";
import DialogModal from "./dialog";
import Dropdown from "./dropdown";

export default function SendMail({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("Choose Your Service");
  const [open, setOpen] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
  });
  const triggerRef = useRef<HTMLDivElement>(null);
  let width1 = Number(triggerRef.current?.getBoundingClientRect().width);

  const handleSelect = (value: string) => {
    setService(value);
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function allFieldsFilled(obj: Record<string, any>) {
    return Object.values(obj).every((value) => {
      if (typeof value === "string") return value.trim() !== "";
      return value !== null && value !== undefined;
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!allFieldsFilled(formData)) {
      setShowErrorText(true);
    } else {
      sendEmail(e);
      setShowErrorText(false);
    }
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        subject: "User contacted",
        message: formData,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      console.log("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "",
      });
      setService("Choose Your Service");
      setOpen(false);
    } else {
      console.log("Failed to send email.");
    }
  };
  return (
    <DialogModal
      trigger={children}
      title={"Send Mail"}
      open={open}
      setOpen={setOpen}
    >
      <div className="flex flex-col gap-4 py-4">
        {showErrorText && (
          <p className="text-red-500 py-4 ">Please fill all the fields.</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <fieldset className="flex gap-2 w-full">
              <input
                className="p-4 w-full bg-sky-100 outline-0 rounded-sm"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="flex gap-2">
              <input
                className="p-4 w-full bg-sky-100 outline-0 rounded-sm"
                id="mobile"
                name="mobile"
                placeholder="Enter Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="flex gap-2 col-span-2">
              <input
                className="p-4 w-full bg-sky-100 outline-0 rounded-sm"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </fieldset>
            <div className="col-span-2" ref={triggerRef}>
              <Dropdown
                width={`${width1}px`}
                label={service}
                options={[
                  "I am looking for Consulting Service",
                  "I am looking for Visa Processing",
                  "I am looking for Study IELTS/PTE",
                  "Other inquiries",
                ]}
                onSelect={handleSelect}
              />
            </div>
          </div>
          <div className="py-4">
            <button
              className="text-white text-lg px-8 py-4 rounded-sm bg-orange-400  hover:bg-orange-500 flex gap-2"
              onClick={handleSubmit}
            >
              Submit
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  stroke="#fb923c"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="16" height="13" x="6" y="4" rx="2"></rect>
                  <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"></path>
                  <path d="M2 8v11c0 1.1.9 2 2 2h14"></path>
                </svg>
            </button>
          </div>
        </form>
      </div>
    </DialogModal>
  );
}
