import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const iconClass = "text-2xl text-gray-600 hover:text-orange-500 transition";
  return (
    <div className="flex flex-col h-full justify-around px-3 py-4 gap-2">
        <div className="flex justify-between">
          <div>
            <p>Call us</p>
            <p>+91 63647 63744</p>
          </div>
          <div>
            <Image
              src="/logo.png"
              alt="my logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/rudiraconsultancyandtraining" target="_blank" className={iconClass}>
        <FaFacebookF />
      </a>
      <a href="https://twitter.com/rudira_overseas" target="_blank" className={iconClass}>
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/rudiraconsultancyandtraining" target="_blank" className={iconClass}>
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/company/rudira-consultancy-training" target="_blank" className={iconClass}>
        <FaLinkedinIn />
      </a>
          </div>
        </div>
        <hr/>
      <div className="flex justify-between">
        <div>
          <div className="text-xl font-bold">Get In Touch</div>
          <div><span className="font-bold">Telephone :</span>+91 63647 63744</div>
          <div className="text-xl font-bold">Our Email</div>
          <div className="font-bold">General Inquiries</div>
          <div>contact@rudiraconsultancy.com</div>
          <div className="font-bold">Partner with us​</div>
          <div>partner@rudiraconsultancy.com</div>
        </div>
        <div>
          <div className="text-xl font-bold">Countries</div>
          <Link
            className="flex flex-col"
            key="germany"
            href="/pages/study-in-germany"
          >
            GERMANY
          </Link>
          <Link
            className="flex flex-col"
            key="france"
            href="/pages/study-in-france"
          >
            FRANCE
          </Link>
          <Link
            className="flex flex-col"
            key="sweden"
            href="/pages/study-in-sweden"
          >
            SWEDEN
          </Link>
          <Link
            className="flex flex-col"
            key="netherland"
            href="/pages/study-in-netherland"
          >
            NETHERLANDS
          </Link>
          <Link
            className="flex flex-col"
            key="ireland"
            href="/pages/study-in-ireland"
          >
            IRELAND
          </Link>
          <Link className="flex flex-col" key="uk" href="/pages/study-in-uk">
            UNITED KINGDOM
          </Link>
        </div>
      </div>
    </div>
  );
}
