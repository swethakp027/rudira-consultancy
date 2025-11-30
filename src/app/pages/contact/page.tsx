"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CONSTANTS } from "@/app/lib/constants";
import PageHeader from "@/app/components/page-header";

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
    <PageHeader><div className="text-6xl absolute bottom-1 font-bold">Get in touch</div></PageHeader>
    <div className="flex justify-around px-30 py-5 gap-2">
    <div className="w-1/2">
      <p>GET IN TOUCH</p>
      <div>Visit one of our agency contact us today</div>
    </div>
    <div className="bg-white p-8 rounded shadow w-1/2">
      <h2 className="text-2xl mb-4 text-purple-700">Leave a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="question" className="block font-medium">
            Question:
          </label>
          <input
            type="text"
            id="question"
            name="question"
            placeholder="ex:top 5 german university"
            value={formData.question}
            onChange={handleChange}
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="comment" className="block font-medium">
            Comment:
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            value={formData.comment}
            onChange={handleChange}
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
          ></textarea>
          {generating && (
            <p className="text-purple-700 my-1">Generating content...</p>
          )}
          <button
            onClick={generateContent}
            type="button"
            className="text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700"
          >
            Generate Content
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}
