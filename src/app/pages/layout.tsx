import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-24 relative">
      <Image
        src="/icon-3.png"
        alt="icon"
        className="absolute top-30 left-30 z-50 animate-[spin_6s_linear_infinite]"
        width={70}
        height={70}
        priority
      />
      <Image
        src="/icon-12.png"
        alt="icon"
        className="absolute top-30 right-160 z-50"
        width={100}
        height={100}
        priority
      />
      <Image
        src="/icon-3.png"
        alt="icon"
        className="absolute top-50 right-30 z-50 animate-[spin_6s_linear_infinite]"
        width={70}
        height={70}
        priority
      />
      {children}
    </div>
  );
}
