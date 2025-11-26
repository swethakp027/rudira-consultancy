import NavLinks from '@/app/components/nav-links';
import Image from "next/image";
import UserButton from '@/app/components/login/user-button';

export default function NavBar() {
  return (
    <div className="flex h-full justify-between px-3 py-4 md:px-2">
        <Image
          src="/logo.png"
          alt="my logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex items-center">
        <NavLinks />
        <UserButton/>
        </div>
    </div>
  );
}