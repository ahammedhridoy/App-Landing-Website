import SectionTitle from "./SectionTitle";
import { features } from "../data/features";
export default function FeatureGrid({ id = "features" }) {
  return (
    <section id={id} className="section bg-white">
      <div className="container">
        <SectionTitle
          eyebrow="Features"
          title="Some of the best features of our app"
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="font-semibold text-lg mt-3">{f.title}</h3>
              <p className="text-slate-600 mt-2">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
