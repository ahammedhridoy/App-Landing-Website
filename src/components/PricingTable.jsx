import SectionTitle from "./SectionTitle";
import { tiers } from "../data/pricing";
export default function PricingTable() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          center
        />
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`card p-6 ${
                t.featured ? "ring-2 ring-indigo-600" : ""
              }`}
            >
              <h3 className="font-semibold">{t.name}</h3>
              <div className="mt-3 text-4xl font-extrabold">
                ${t.price}
                <span className="text-base font-medium text-slate-500">
                  /mo
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button className="btn mt-6 w-full">{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
