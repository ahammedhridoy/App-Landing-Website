import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-lg">AppCo</h4>
          <p className="mt-2 text-slate-600">Get things done with style.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-slate-600">
            <li>
              <Link to="/feature">Feature</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Resources</h5>
          <ul className="space-y-2 text-slate-600">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/elements">Elements</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Newsletter</h5>
          <form className="flex gap-2">
            <input
              className="input input-bordered flex-1 rounded-md border-slate-300"
              placeholder="Email address"
            />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t text-center py-6 text-slate-500 text-sm">
        © {new Date().getFullYear()} AppCo
      </div>
    </footer>
  );
}
