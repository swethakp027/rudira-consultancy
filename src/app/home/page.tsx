"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import SendMail from "../components/send-mail";
import dynamic from "next/dynamic";
import { useToast } from "../components/custom-hooks/use-toast";

const WorldMap = dynamic(() => import("../components/world-map"), {
  ssr: false,
});

export default function HomePage() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const { showToast, ToastComponent } = useToast();

  const subscribeNewsLetter = async() => {
    const res = await fetch("/api/subscribedNewsLetterUsersMailIds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail:subscribedEmail, date:new Date().toISOString() }),
    });
    const data = await res.json();
    if(data.success){
      setSubscribedEmail("");
      showToast("Subscribed to News Letter!!")
    }
  };

  return (
    <>
    <ToastComponent />
      <div className="pl-30 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="">
          <h1 className="text-4xl font-black">
            We help build your dream career
          </h1>
          <p className="py-8">
            Simplifying your abroad education journey with right resources
          </p>
          <p className="font-bold text-3xl">Planning to Study Abroad ?</p>
          <div className="py-5">
            <SendMail onSuccessMail={(e:any)=>showToast("Main Sent Sucessfully!!")}>
              <button
                type="button"
                className="flex gap-1 w-fit text-lg px-4 py-5 font-bold text-stone-50 rounded-sm bg-orange-400  hover:bg-orange-500"
              >
                Enquire Now{` `}
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
            </SendMail>
          </div>
          <p className="font-bold text-3xl">
            Find Jobs Overseas In one {` `}
            <span className="bg-amber-100 p-1">click</span>
          </p>
        </div>
        <div>
          <Image
            src="/world.gif"
            alt="my logo"
            width={1250}
            height={1000}
            priority
          />
        </div>
      </div>

      <div>
        <h1 className="font-extrabold text-4xl text-center">
          Adventure is the best way to learn.
        </h1>
        <p className="text-center">Explore Destinations</p>
      </div>

      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="">
          <WorldMap />
        </div>
        <div className="px-5">
          <h1 className="font-bold text-4xl text-center pb-8 flex items-center justify-center">
            Study In {` `}
            <span className="text-sky-400 px-5 underline underline-offset-8">{`Germany`}</span>
            <Image
              src="/Germany.gif"
              alt="Germany Flag"
              width={100}
              height={100}
              priority
            ></Image>
          </h1>
          <p className="py-4">
            If you are thinking about studying in Germany, don’t think twice. It
            is a super study overseas vacation spot for international students.
          </p>
          <div className="flex gap-8 pb-15">
            <div className="flex flex-col justify-center items-end  rounded-md h-40 w-1/3 bg-orange-100">
              <p className="text-5xl font-black">400+</p>
              <p className="font-light">UNIVERSITIES</p>
            </div>
            <div className="flex flex-col justify-center items-end  rounded-md h-40 w-1/3 bg-fuchsia-100">
              <p className="text-5xl font-black">200+</p>
              <p className="font-light">COURSES</p>
            </div>
            <div className="flex flex-col justify-center items-end  rounded-md h-40 w-1/3 bg-teal-50">
              <p className="text-5xl font-black">3M</p>
              <p className="font-light">Over 3 Million Students</p>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="w-fit px-7 py-4 rounded-sm text-white bg-sky-300  hover:bg-sky-400"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="gap-10 pl-30 pb-10 pt-10 items-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="px-5">
          <h1 className="font-bold text-4xl py-4">
            Now Make Your Abroad Study / Job Search In one Click
          </h1>
          <p className="py-4">
            Choosing to study overseas is one of the most exciting and
            life-changing commitments you’ll ever make – we’re here to walk you
            through the process step by step
          </p>

          <div className="flex p-8 mb-8 shadow-md rounded-md flex-col md:flex-row md:items-start lg:flex-row justify-center lg:items-start">
            <div className="w-full md:w-1/4 lg:w-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#73b4b3"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 6h4"></path>
                <path d="M2 10h4"></path>
                <path d="M2 14h4"></path>
                <path d="M2 18h4"></path>
                <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                <path d="M16 2v20"></path>
              </svg>
            </div>
            <div className="w-full md:w-3/4 lg:w-3/4">
              <h1 className="font-bold text-xl">Supportive Counselors</h1>
              <p className="py-5">
                You’re not alone. We’re here to make sure you identify and
                secure the university or college where you can thrive.
              </p>
            </div>
          </div>

          <div className="flex p-8 mb-8 shadow-md rounded-md flex-col md:flex-row md:items-start lg:flex-row justify-center lg:items-start">
            <div className="w-full md:w-1/4 lg:w-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d48ce1"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 13a3 3 0 1 0-6 0"></path>
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                <circle cx="12" cy="8" r="2"></circle>
              </svg>
            </div>
            <div className="w-full md:w-3/4 lg:w-3/4">
              <h1 className="font-bold text-xl">
                Carefully Designed Resources
              </h1>
              <p className="py-5">
                Our support does not end when you receive your university
                acceptance letter.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Image
              src="/think.gif"
              alt="thinker"
              width={600}
              height={250}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="relative py-8 h-180 bg-orange-50">
            <Image
              src="/jumping-partners.gif"
              alt="jumping-partners"
              width={600}
              height={250}
              priority
            />
          </div>
          <div className="flex p-8 shadow-md rounded-md">
            <div className="w-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#71b3ed"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 21a8 8 0 0 1 10.821-7.487"></path>
                <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                <circle cx="10" cy="8" r="5"></circle>
              </svg>
            </div>
            <div className="w-3/4">
              <h1 className="font-bold text-xl">Job Overseas</h1>
              <p className="py-5">
                Get in Touch with our experts to know more about abroad Jobs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-sky-100 text-center px-30">
        <h1 className="font-bold text-4xl">
          Reimagining what it means to study abroad
        </h1>
        <p className="py-5">
          Going abroad for a degree is a complex process. Rudira brings all the
          information you need in one place, assists you in the entire process
          and connects you to alumni and experts for questions, and helps you
          simplify your study abroad experience.
        </p>
        <div className="gap-8 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="bg-white rounded-sm px-8 py-10 flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl">Abroad Admission Guidance</h1>
            <div>
              <Image
                src="/education-blue.gif"
                alt="education blue"
                width={300}
                height={200}
                priority
              />
            </div>
            <p>
              We pay close attention to your application, ensuring your required
              documents are thoroughly compiled and attested
            </p>
          </div>
          <div className="bg-white rounded-sm px-8 py-10 flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl">Test Preparation</h1>
            <div>
              <Image
                src="/exam-preparation.gif"
                alt="exam preparation"
                width={300}
                height={200}
                priority
              />
            </div>
            <p>
              Every student is unique, and we use a mentoring model in which
              each student receives personalised attention.
            </p>
          </div>
          <div className="bg-white rounded-sm px-8 py-10 flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl">Career Counselling</h1>
            <div>
              <Image
                src="/career.gif"
                alt="career"
                width={300}
                height={200}
                priority
              />
            </div>
            <p>
              We lead you through a maze of questions in order to find solutions
              that are best suited to your profile.
            </p>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="w-fit px-7 py-4 rounded-sm text-white bg-sky-300  hover:bg-sky-400"
          >
            Free Consultation
          </button>
        </div>
      </div>

      <div className="px-30 pt-15 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="">
          <h1 className="font-bold text-4xl">
            You have a dream. We have a plan.
          </h1>
          <p className="py-5">
            It’s going to be okay. We have been there and we totally get what
            you’re going through. So we are ready to give you individualized
            attention to get admits to your dream university. Get started with a
            free consultation.
          </p>
          <div>
            <Image
              src="/study.gif"
              alt="study"
              width={500}
              height={250}
              priority
            />
          </div>
        </div>
        <div className=" flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-start lg:flex-row justify-center lg:items-start p-8 shadow-md rounded-md">
            <div className="w-full md:w-1/5 lg:w-1/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#50a9a5"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M16 18h.01"></path>
              </svg>
            </div>
            <div className="w-full md:w-4/5 lg:w-4/5">
              <h1 className="font-bold text-xl">Upcoming Events</h1>
              <p className="py-1">No event found!</p>
              <button className="text-orange-400 pr-1">Explore</button>
              <Image
                className="inline"
                src="/arrow-2.png"
                alt="arrow"
                width={25}
                height={25}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row justify-center md:items-start lg:items-start p-8 shadow-md rounded-md">
            <div className="w-full md:w-1/5 lg:w-1/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d48ce1"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path>
              </svg>
            </div>
            <div className="w-full md:w-4/5 lg:w-4/5">
              <h1 className="font-bold text-xl">General Inquiries</h1>
              <p className="py-1">contact@rudiraconsultancy.com</p>
              <h4 className="font-semibold text-lg">
                Partner with us​ / Join us:
              </h4>
              <p className="py-1">partner@rudiraconsultancy.com</p>
              <p>
                <span className="font-bold">Phone:</span> +91 63647 63744
              </p>
              <button className="text-orange-400 pr-1">Explore</button>
              <Image
                className="inline"
                src="/arrow-2.png"
                alt="arrow"
                width={25}
                height={25}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row justify-center md:items-start lg:items-start p-8 shadow-md rounded-md">
            <div className="w-full md:w-1/5 lg:w-1/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64a6d9"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                <path d="M18 14h-8"></path>
                <path d="M15 18h-5"></path>
                <path d="M10 6h8v4h-8V6Z"></path>
              </svg>
            </div>
            <div className="w-full md:w-4/5 lg:w-4/5">
              <h1 className="font-bold text-xl">Signup to our newsletter</h1>
              <fieldset className="flex gap-2 py-2">
                <input
                  className="p-5 w-3/4 rounded-sm bg-sky-100 outline-0"
                  name="email"
                  type="text"
                  placeholder="Enter your email Address"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                />
                <button className="bg-orange-500 rounded-xl" onClick={subscribeNewsLetter}>
                  <ChevronRight className="w-18 h-15 text-white" />
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
