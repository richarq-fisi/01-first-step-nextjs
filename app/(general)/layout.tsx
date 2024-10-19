import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-24">
        <div>layout general</div>
        {children}
      </div>
    </>
  );
}
