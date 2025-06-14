import FeatureGrid from "../components/FeatureGrid";
import Stats from "../components/Stats";
export default function Feature() {
  return (
    <>
      <header className="section bg-white">
        <div className="container">
          <h1 className="h1">Feature</h1>
          <p className="lead mt-2">Deep dive into the product.</p>
        </div>
      </header>
      <FeatureGrid id={null} />
      <Stats />
    </>
  );
}
