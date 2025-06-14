export default function Stats() {
  const items = [
    { k: "1M+", v: "Downloads" },
    { k: "4.9★", v: "App Store" },
    { k: "120+", v: "Integrations" },
    { k: "99.9%", v: "Uptime" },
  ];
  return (
    <section className="section">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.k} className="card p-6 text-center">
            <div className="text-3xl font-extrabold">{i.k}</div>
            <div className="text-slate-500 mt-1">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
