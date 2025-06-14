import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase font-semibold text-indigo-600">
            App Landing Page
          </p>
          <h1 className="h1 mt-3">
            Get things done <br className="hidden md:block" />
            with AppCo
          </h1>
          <p className="lead mt-4">
            A clean, modern app landing template rebuilt in React.
          </p>
          <div className="mt-6 flex gap-3">
            <Link className="btn" to="/pricing">
              Download
            </Link>
            <a className="btn btn-outline" href="#features">
              Learn more
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full rounded-xl shadow"
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400"
            alt="App preview"
          />
        </div>
      </div>
    </section>
  );
}
