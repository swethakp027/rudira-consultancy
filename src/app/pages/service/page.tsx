"use client";
import PageHeader from "@/app/components/page-header";
import ShowMoreText from "@/app/components/show-more-text";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <PageHeader>
        <div className="text-6xl absolute bottom-1 font-bold">Services</div>
      </PageHeader>
      <div className="text-center pt-30">
        <div className="text-orange-600 font-bold">Fast Process</div>
        <div className="font-bold text-4xl py-4">
          Start Your Higher Education Journey {` `}
          <span className="text-sky-400 underline underline-offset-8">
            {`With Rudira`}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-30 py-10">
        <div>
          Congratulations on deciding to pursue higher education! Here are some
          steps to help you start your journey.
        </div>
        <div>
          <span className="font-bold">Choose your field of study:</span> The
          first step in starting your higher education journey is to choose your
          field of study. This is an important decision as it will shape your
          career path. We help you research different fields and their
          requirements to find the one that aligns with your interests and
          goals.
        </div>
        <div>
          <span className="font-bold">Research institutions: </span>Once you
          have decided on a field of study, We start researching institutions
          that offer programs in that field. Consider factors like location,
          reputation, cost, and program offerings at suit best for you.
        </div>
        <div>
          <span className="font-bold">Check admission requirements: </span> Each
          institution will have its own admission requirements, We at rudira
          will guide you through the process and make it easy for You. Further,
          help you in submitting transcripts, essays, or letters of
          recommendation.
        </div>
        <div>
          <span className="font-bold">Apply for financial aid:</span> Higher
          education can be expensive, so make sure to apply for financial aid
          early. We help you by providing the right assistance in applying for
          federal grants and loans, as well as scholarships and grants from the
          institution or outside organizations.
        </div>
        <div>
          <span className="font-bold">Submit your application: </span>Once you
          have completed the necessary steps, submit your application. We make
          sure to double-check all of your information and meet any application
          deadlines. Remember, higher education is a significant investment, but
          it can also be a rewarding one. Stay focused and committed to your
          goals, and don't hesitate to ask for help or advice along the way.
        </div>
        <div className="px-10">
          <Image
            src="/service-flow.png"
            alt="service flow"
            width={1000}
            height={300}
            priority
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="w-fit px-7 py-4 rounded-sm bg-sky-400  hover:bg-sky-500"
          >
            Enquire Now
          </button>
        </div>
      </div>

      <div className="bg-sky-100 p-30 mx-15 mt-15">
        <div className="text-4xl font-bold">
          The Comprehensive Guide to Studying Abroad:
          <p>From Application to Arrival.</p>
        </div>
        <p className="py-4">Making Your Abroad Study Dreams a Reality</p>

        <div className="grid grid-cols-4 gap-8">
          <div className="p-8 bg-white rounded-md">
            <h1 className="font-bold text-2xl py-4">Selection of course</h1>
            <ShowMoreText
              text={
                "Selecting the right course is the foundation for your future we at rudira understand better than others. Our experts analyze the latest industry and trending courses and guide students through the course selection process on their personal interests. The course selected must help you grow professionally and course assure you a job once you graduate."
              }
              maxLength={250}
            />
          </div>

          <div className="p-8 bg-white rounded-md">
            <h1 className="font-bold text-2xl py-4">Education counselling</h1>
            <ShowMoreText
              text={`Planning international education and Choosing the right course, university, the country can be very stressful and confusing. The list of worries continues with questions like what is the document required, will abroad study help, admission process, visa formalities, and most important is choosing a course which suits you. We provide an answer to all your question and worries.`}
              maxLength={250}
            />
          </div>
          <div className="p-8 bg-white rounded-md">
            <h1 className="font-bold text-2xl py-4">Country information</h1>
            <ShowMoreText
              text={`The first & important is choosing a country which suits you. We provide information on the education system, climate, people, culture, demography, visa availability. Counselors take account of your ambition, scholarship, and financial background in choosing an appropriate country and provide regularly updated information about the various countries through the website, alumni groups. The country selected must offer multiple employment opportunities for your course.`}
              maxLength={250}
            />
          </div>
          <div className="p-8 bg-white rounded-md">
            <h1 className="font-bold text-2xl py-4">Admission guidance</h1>
            <ShowMoreText
              text={`Admission process may differ from one university to other which can cause confusion among students. Our team gets regular update on the admission process with university and we guide in selecting the right course and university based on your academic qualification, test score and interests options best suited your profile. Our expert advisors provide one to one counselling and provide hassle free admission process and ensure a high success rate in admission. `}
              maxLength={250}
            />
          </div>

          <div className="p-8 bg-white rounded-md">
            <h1 className="font-bold text-2xl py-4">VISA Assistance</h1>
            <ShowMoreText
              text={`Student is worried about visa been rejected as they are not aware of the process, our expert team guide you through documentation preparation for visa filing and give an update with changing regulation and procedure. Guiding student how to prepare for a visa interview process and ensure high visa success rates.`}
              maxLength={250}
            />
          </div>
          <div className="p-8 bg-white rounded-md">
            <h1 className="font-bold text-2xl py-4">Financial estimation</h1>
            <ShowMoreText
              text={`It is essential to have an idea of the overall expense involved in abroad study at a particular destination. Our team help in calculating you an anticipated cost of living, transportation, utilities and fee structure of the university. Guiding through scholarship opportunities and bank loan with private and national banks to ensure to meet education expenses overseas. `}
              maxLength={250}
            />
          </div>
          <div className="p-8 bg-white rounded-md">
            <h1 className="font-bold text-2xl py-4">Accommodation Guidance</h1>
            <ShowMoreText
              text={`Finding accommodation abroad can be challenging, each county offers a different budget and accommodation condition. Plenty of option is available on the internet which can cost expensive, with proper assistance you can save money on accommodation and find the best location having access to transport.`}
              maxLength={250}
            />
          </div>
          <div className="p-8 bg-white rounded-md">
            <h1 className="font-bold text-2xl py-4">Travel guidance</h1>
            <ShowMoreText
              text={`We assist students with the best airfare in suitable airlines as there is a huge fluctuation in the airfare. Moving to a different country is not an easy task, we understand the stress and pressure. Our support does not end here, we provide pick-up service at the destination airport. Guidance to the local transport system for daily usage.`}
              maxLength={250}
            />
          </div>
        </div>
      </div>

      <div className="p-30">
        <h1 className="font-bold text-4xl py-4">
          How do we help? (How we work)
        </h1>
        <div className="flex gap-10">
          <div className="w-1/2">
            <h1 className="font-bold text-2xl py-4">Pre Admission</h1>
            <div className="flex flex-col gap-4">
              <p>
                Knowing your passion, goal, aspiration and interest we help in
                selecting right course, university, country and career.
              </p>
              <p>
                Our team will review your eligibility, requirements and
                shortlist the best option for you.
              </p>
              <p>Provide checklist of documents required for application.</p>
              <p>Apply to right University and Course that meets your needs.</p>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="font-bold text-2xl py-4">Post Admission</h1>
            <div className="flex flex-col gap-4">
              <p>
                On Accept and Confirmation of your offer letter from the
                University, we will guide you through visa process.
              </p>
              <p>
                We will provide you a checklist of documents required for visa
                process.
              </p>
              <p>Provide information on air tickets at economical rates.</p>
              <p>Facilitate travel insurance.</p>
              <p>Health insurance</p>
              <p>Accommodation</p>
              <p>Block account opening</p>
              <p>Foreign Exchange Requirements.</p>
              <p>Airport Pickups at destination airport</p>
              <p>Grooming session for easy international adaptation.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sky-100 p-30 text-center">
        <h1 className="font-bold text-4xl py-4">Job Overseas Start your Dream Job Now</h1>
        <p className="py-4 pb-10">
          Job opportunities overseas can be exciting and challenging. Working
          abroad offers the chance to gain new skills, experience different
          cultures, and expand your professional network. However, it's
          important to do your research and be prepared for the potential
          challenges of living and working in a foreign country. Language
          barriers, cultural differences, and adjusting to a new environment can
          be difficult, but the rewards of international work can be well worth
          the effort. It's also essential to consider the legal and visa
          requirements of the country you're interested in working in. With
          careful planning and preparation, working overseas can be a fulfilling
          and life-changing experience.
        </p>
        <div className="text-center">
            <button
              type="button"
              className="w-fit px-7 py-4 rounded-sm text-white bg-sky-300  hover:bg-sky-400"
            >
              Enquire Now
            </button>
          </div>
      </div>
    </div>
  );
}
