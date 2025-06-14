import SectionTitle from "../components/SectionTitle";
export default function Elements() {
  return (
    <section className="section">
      <div className="container space-y-10">
        <SectionTitle title="Elements" text="Quick preview of UI components." />
        <div className="card p-6 space-y-3">
          <div className="flex gap-3">
            <button className="btn">Primary</button>
            <button className="btn btn-outline">Outline</button>
          </div>
          <input className="rounded-md border-slate-300" placeholder="Input" />
          <select className="rounded-md border-slate-300">
            <option>Option</option>
          </select>
          <progress className="w-full" max="100" value="66"></progress>
        </div>
      </div>
    </section>
  );
}
