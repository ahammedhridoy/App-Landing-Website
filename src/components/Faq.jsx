import { faqs } from "../data/faqs";
export default function Faq() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="h2 mb-6 text-center">Frequently asked questions</h2>
        <div className="mx-auto max-w-3xl divide-y">
          {faqs.map((f, i) => (
            <details key={i} className="p-4 group">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
