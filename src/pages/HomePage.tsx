import FilterTabs from "../components/layout/FilterTabs";
import MapSection from "../components/layout/MapSection";
import VehicleTable from "../components/layout/VehicleTable";
import Header from "../components/ui/Header";

function HomePage() {
  return (
    <main className="min-h-screen bg-secondary text-slate-50 flex flex-col">
      <Header title="Geferson Lopes" />
      <FilterTabs />

      <section className="mx-auto w-full max-w-7xl px-8 pb-28">
        <MapSection />
        <VehicleTable />
      </section>
    </main>
  );
}

export default HomePage;
