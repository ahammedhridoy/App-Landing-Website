import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="section text-center">
      <div className="container">
        <h1 className="h1">404</h1>
        <p className="lead mt-2">This page took a detour.</p>
        <Link to="/" className="btn mt-6">
          Back Home
        </Link>
      </div>
    </section>
  );
}
