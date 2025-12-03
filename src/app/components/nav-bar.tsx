import NavLinks from '@/app/components/nav-links';
import Image from "next/image";
import UserButton from '@/app/components/login/user-button';

export default function NavBar() {
  return (
    <div className="flex h-full justify-between">
        <Image
          src="/logo.png"
          alt="my logo"
          width={200}
          height={40}
          priority
        />
        <div className="flex items-center">
        <NavLinks />
        <UserButton/>
        </div>
    </div>
  );
}