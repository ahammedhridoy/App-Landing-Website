import SectionTitle from "./SectionTitle";
import { services } from "../data/services";
export default function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Services" title="What we offer" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
