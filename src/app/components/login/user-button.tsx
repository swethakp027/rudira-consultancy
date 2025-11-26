import { auth } from "../../../../auth.config";
import Popover from "../popover";
import Image from "next/image";

import { SignIn, SignOut } from "./auth-component";

export default async function UserButton() {
  const session = await auth();

  if (!session?.user) return <SignIn />;
  return (
    <div
      className="flex gap-2 items-center"
      style={{ width: "45px", height: "45px" }}
    >
      <Popover
        trigger={
          session.user.image &&
          session.user.name && (
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-full"
            />
          )
        }
      >
        <div>
          <h3 className="font-semibold mb-1">{session.user.name}</h3>
          <p className="text-sm text-gray-600 pb-5">{session.user.email}</p>
          <hr />
          <SignOut />
        </div>
      </Popover>
    </div>
  );
}