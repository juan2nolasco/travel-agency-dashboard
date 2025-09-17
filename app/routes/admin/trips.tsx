import { Header } from "components";

const Trips = () => {
  return (
    <main className="all-users wrapper">
      <Header
        title="Trips"
        description="View and Edit AI-generated travel plans"
        ctaText="Create trip"
        ctaUrl="/trips/create"
      />
    </main>
  );
};

export default Trips;
