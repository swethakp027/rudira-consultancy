import * as React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const initials = (name: any) => {
  return name
    .split(" ")
    .map((n: any) => n[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
};

const AvatarImg = ({ name, src }: { name?: string; src: any }) => (
  <div style={{ display: "flex", gap: 20 }}>
    <Avatar.Root className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 overflow-hidden">
      <Avatar.Image
        className="w-full h-full object-cover"
        src={src}
        alt={name}
      />
      <Avatar.Fallback className="text-purple-700 font-semibold" delayMs={600}>
        {initials(name)}
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarImg;
