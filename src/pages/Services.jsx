import ServicesGrid from "../components/ServicesGrid";
export default function Services() {
  return (
    <>
      <header className="section bg-white">
        <div className="container">
          <h1 className="h1">Services</h1>
          <p className="lead mt-2">Everything around your app launch.</p>
        </div>
      </header>
      <ServicesGrid />
    </>
  );
}
