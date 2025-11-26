

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-[calc(100vh-6rem-15rem)]">{children}</div>;
}
