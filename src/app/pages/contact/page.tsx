"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CONSTANTS } from "@/app/lib/constants";
import PageHeader from "@/app/components/page-header";
import CircleBox from "@/app/components/circle-box";
import { useToast } from "@/app/components/custom-hooks/use-toast";

export default function Page() {
  const router = useRouter();
  const [generating, setGenerating] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    question: "",
    comment: "",
  });
  const { showToast, ToastComponent } = useToast();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
          debugger

    console.log(formData);
    if (!allFieldsFilled(formData)) {
      setShowErrorText(true);
    } else {
      sendEmail(e);
      setShowErrorText(false);
    }  
  };

    function allFieldsFilled(obj: Record<string, any>) {
      const requiredObj = JSON.parse(JSON.stringify(obj))
      delete requiredObj.comment;
      delete requiredObj.question;
    return Object.values(requiredObj).every((value) => {
      if (typeof value === "string") return value.trim() !== "";
      return value !== null && value !== undefined;
    });
  }

  const generateContent = async () => {
    setGenerating(true);
    if (!formData?.question) {
      return false;
    }

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ prompt: CONSTANTS.PROMPT + formData?.question }),
    });

    const data = await res.json();
    setGenerating(false);
    setFormData((prev) => ({ ...prev, comment: data.reply }));
  };

    const sendEmail = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        subject: "User contacted",
        message: formData,
      }),
    });

    const data = await res.json();
    if (data.success) {
      setFormData({
        name: "",
        email: "",
        mobile: "",
        question: "",
        comment: "",
      });
      showToast("Message sent successfully!!");
      setTimeout(() => {
        // router.push("/");
      }, 1000);
    } else {
      console.error("Failed to send email.");
    }
  };

  return (
    <div>
      <ToastComponent />
      <PageHeader>
        <div className="text-6xl absolute bottom-1 font-bold z-9">Get in touch</div>
      <CircleBox/>
      </PageHeader>
      <div className="relative bg-white justify-around p-30 gap-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="relative">
          <div className="bg-sky-100 px-15 py-20 relative z-2">
            <p className="text-emerald-500 font-medium py-4">GET IN TOUCH</p>
            <h1 className="font-bold text-4xl">
              Visit one of our agency contact us today
            </h1>
          </div>
          <div className="bg-orange-50 w-140 h-140 rounded-full absolute -top-40 -left-20"></div>
        </div>

        <div className="bg-white">
          <h2 className="text-3xl mb-10 font-bold">Leave A Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {showErrorText && (
                <p className="text-red-500 py-4 ">Please fill all the fields.</p>
              )}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-sm bg-gray-100 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-sm bg-gray-100 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-4 rounded-sm bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="question"
                name="question"
                placeholder="Ask AI"
                value={formData.question}
                onChange={handleChange}
                className="w-full p-4 rounded-sm bg-gray-100 focus:outline-none"
              />
              <button onClick={generateContent} type="button" className="absolute right-1 top-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="black"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 12-4-4-4 4"></path>
                  <path d="M12 16V8"></path>
                </svg>
              </button>
              {generating && (
                <p className="font-semibold">Generating content...</p>
              )}
            </div>
            <div>
              <textarea
                id="comment"
                name="comment"
                placeholder="Comment"
                rows={5}
                value={formData.comment}
                onChange={handleChange}
                className="w-full p-4 rounded-sm bg-gray-100 focus:outline-none"
              ></textarea>
            </div>
            <div className="pt-3">
              <button
                type="submit"
                className="text-white px-12 py-4 rounded-sm bg-orange-400  hover:bg-orange-500"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
