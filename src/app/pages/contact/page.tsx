"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CONSTANTS } from "@/app/lib/constants";
import PageHeader from "@/app/components/page-header";
import CircleBox from "@/app/components/circle-box";

export default function Page() {
  const router = useRouter();
  const [generating, setGenerating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
    comment: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    router.push("/");
  };

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

  return (
    <div>
      <PageHeader>
        <div className="text-6xl absolute bottom-1 font-bold z-9">Get in touch</div>
      <CircleBox/>
      </PageHeader>
      <div className="relative bg-white flex justify-around p-30 gap-25">
        <div className="w-1/2 relative">
          <div className="bg-sky-100 px-15 py-20">
            <p className="text-emerald-500 font-medium py-4">GET IN TOUCH</p>
            <h1 className="font-bold text-4xl">
              Visit one of our agency contact us today
            </h1>
          </div>
          <div className="bg-orange-50 w-140 h-140 rounded-full absolute -top-40 -left-20 -z-1"></div>
        </div>

        <div className="bg-white w-1/2">
          <h2 className="text-3xl mb-10 font-bold">Leave A Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
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
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
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
