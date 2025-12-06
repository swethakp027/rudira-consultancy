import CircleBox from "@/app/components/circle-box";
import PageHeader from "@/app/components/page-header";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <PageHeader>
        <div className="text-6xl absolute bottom-1 font-bold">Destinations</div>
      <CircleBox/>
      </PageHeader>
      <div className="relative bg-white text-center p-30">
        <div className="text-4xl font-bold">Countries</div>
        <p className="py-6">
          A destination is never a place but a new way of seeing things. Explore
          universities, courses, and campuses around the world without leaving
          home.
        </p>
        <div className="grid grid-cols-2 gap-12 pt-4">
          <div className="flex flex-col bg-amber-50">
            <Image
                      src="/Germany.jpeg"
                      alt="Germany"
                      className="h-full"
                      width={700}
                      height={350}
                      priority
                    />
                    <h1 className="text-center font-bold text-2xl py-8">GERMANY</h1>
          </div>

          <div className="flex flex-col bg-amber-50">
            <Image
                      src="/france.jpeg"
                      alt="France"
                      className="h-full"
                      width={700}
                      height={350}
                      priority
                    />
                    <h1 className="text-center font-bold text-2xl py-8">FRANCE</h1>
          </div>
          <div className="flex flex-col bg-amber-50">
            <Image
                      src="/sweden.jpeg"
                      alt="Sweden"
                      className="h-full"
                      width={700}
                      height={350}
                      priority
                    />
                    <h1 className="text-center font-bold text-2xl py-8">SWEDEN</h1>
          </div>

          <div className="flex flex-col bg-amber-50">
            <Image
                      src="/netherlands.webp"
                      alt="Netherlands"
                      className="h-full"
                      width={700}
                      height={350}
                      priority
                    />
                    <h1 className="text-center font-bold text-2xl py-8">NETHERLANDS</h1>
          </div>
          <div className="flex flex-col bg-amber-50">
            <Image
                      src="/ireland.jpeg"
                      alt="Ireland"
                      className="h-full"
                      width={700}
                      height={350}
                      priority
                    />
                    <h1 className="text-center font-bold text-2xl py-8">IRELAND</h1>
          </div>

          <div className="flex flex-col bg-amber-50">
            <Image
                      src="/united-kingdom.jpeg"
                      alt="United kingdom"
                      className="h-full"
                      width={700}
                      height={350}
                      priority
                    />
                    <h1 className="text-center font-bold text-2xl py-8">UNITED KINGDOM</h1>
          </div>

        </div>
      </div>
    </div>
  );
}
