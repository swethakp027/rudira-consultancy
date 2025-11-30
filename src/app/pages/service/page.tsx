import PageHeader from "@/app/components/page-header";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <PageHeader>
        <div className="text-6xl absolute bottom-1 font-bold">Services</div>
      </PageHeader>
      <div className="text-center">
        <div className="text-orange-600 font-bold">Fast Process</div>
        <div className="font-bold text-4xl py-4">
          Start Your Higher Education Journey{" "}
          <span className="text-sky-400">With Rudira</span>
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

      <div className="text-4xl font-bold">
        The Comprehensive Guide to Studying Abroad:
        <p>From Application to Arrival.</p>
      </div>
      <p className="py-4">Making Your Abroad Study Dreams a Reality</p>
    </div>
  );
}
