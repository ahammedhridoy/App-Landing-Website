import PricingTable from "../components/PricingTable";
import Faq from "../components/Faq";
export default function Pricing() {
  return (
    <>
      <header className="section bg-white">
        <div className="container">
          <h1 className="h1">Pricing</h1>
          <p className="lead mt-2">Start free, grow when you’re ready.</p>
        </div>
      </header>
      <PricingTable />
      <Faq />
    </>
  );
}
