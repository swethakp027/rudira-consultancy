import PageHeader from "@/app/components/page-header";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <PageHeader>
        <div className="text-6xl absolute bottom-1 font-bold">About us</div>
      </PageHeader>
      <div className="flex px-30 items-center">
        <div className="w-1/2">
          <h1 className="font-bold text-4xl py-2">About Us</h1>
          <p className="py-4">
            Rudira Consultancy Private Limited is one of the leading Immigration
            & Visa Consultants based in Bangalore, India. Our expert career
            counsellors with years of experience help students make wiser
            academic decisions about pursuing education in overseas
            institutions.
          </p>
          <p className="py-4">
            We have been in the business scenario intending to serve students
            with proper guidance in identifying courses best suited to him/her
            based on individual strengths, needs, and personal goals because
            each individual has different goals and different paths to those
            goals.
          </p>
          <p className="py-4">
            We are in partnership with top global institutions across the world
            and our excellent reputation helps us to deliver top-quality
            overseas education. We provide information on higher education in
            various countries such as Germany, UK, Canada, the USA, Australia,
            Singapore, Ireland, France, Malaysia, Netherland, and many more.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="/about-us.gif"
            alt="about us"
            width={800}
            height={500}
            priority
          />
        </div>
      </div>

      <div className="flex justify-end pr-8">
        <div className="w-1/2 flex p-6 bg-orange-500 rounded-md text-white font-bold text-4xl">
          "Follow your dreams. They know the way."
        </div>
      </div>

      <div className="flex gap-20">
        <div className="pl-30 w-2/5">
          <div>
            <h1 className="font-bold text-4xl py-4">Our Mission</h1>
            <p className="py-3">
              Our Mission is to provide the best possible guidance to students
              from India who intend to study abroad. we are passionate and
              committed to helping you achieve your dreams in higher education
              and career.
            </p>
            <p className="py-3">
              We emphasize on best guidance to students from India who intend to
              study abroad and improve the lives of students while preparing
              them to be globally successful citizens.
            </p>
          </div>

          <div className="flex py-3">
            <div className="w-1/5"></div>
            <div className="w-4/5">
              <h1 className="font-bold text-xl">Our Vision</h1>
              <p className="py-2">
                To be the premier source for Overseas Education Consultation by
                offering end to end comprehensive service and guiding students
                to achieve their full potential
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/5"></div>
            <div className="w-4/5">
              <h1 className="font-bold text-xl">We Value</h1>

              <p className="py-2">
                Transparency, Reliability, Accountability, Integrity, Passion,
                Teamwork, Time, Honesty, Commitment
              </p>
            </div>
          </div>

          <div className="hidden">
            <Image
            src="/consult-3.jpg"
            alt="consult"
            width={1000}
            height={300}
            priority
          />
          </div>
        </div>

        <div className="w-3/5">
          <Image
            src="/analytical-thinking-illustration.gif"
            alt="analytical thinking illustration"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>

      <div className="p-30 bg-teal-50">
        <p className="text-orange-500 font-bold">Our Team</p>
        <h1 className="font-bold text-3xl py-3">Collaborative Experts Working Towards Your Success</h1>
        <p className="pb-4">
          The major component for the success of our company is our team.
          Traveling from home country to a foreign country at first feels
          difficult to adjust and transform to a new style of living in a
          completely different nation. Our team helps students at the initial
          phase of arrival by guiding them through accommodation or hostel
          facility, health insurance, and giving a briefing on local transport
          and regulation. We have an excellent team who knows the value of your
          abroad studies and strives delicately to achieve goals. Our team
          members have years of experience which helps students recognize a
          course and university that perfectly suits their academic and
          financial background.
        </p>
      </div>

      <div className="flex px-30 gap-20 items-center">
        <div className="w-2/5">
        <h1 className="font-bold text-4xl">You Have A Dream. We Have A Plan.</h1>
        <p>
          It’s going to be okay. We have been there and we totally get what
          you’re going through. So we are ready to give you individualized
          attention to get admits to your dream university. Get started with a
          free consultation.
        </p>
        </div>
        <div className="w-3/5">
        <Image
            src="/dreamy-network.gif"
            alt="dreamy network"
            width={600}
            height={150}
            priority
          />
        </div>
      </div>
    </div>
  );
}
