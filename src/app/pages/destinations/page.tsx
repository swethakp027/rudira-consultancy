import PageHeader from "@/app/components/page-header";

export default function Page() {
  return (
    <div>
      <PageHeader>
        <div className="text-6xl absolute bottom-1 font-bold">Destinations</div>
      </PageHeader>
      <div className="text-center">
        <div className="text-4xl">Countries</div>
        <p className="py-6">
          A destination is never a place but a new way of seeing things. Explore
          universities, courses, and campuses around the world without leaving
          home.
        </p>
      </div>
    </div>
  );
}
