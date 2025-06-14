import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/feature", label: "Feature" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/elements", label: "Elements" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const LinkC = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md ${
          isActive ? "text-indigo-600" : "text-slate-700 hover:text-indigo-600"
        }`
      }
    >
      {label}
    </NavLink>
  );
  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur border-b ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="font-extrabold text-xl">
          AppCo
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <LinkC key={n.to} {...n} />
          ))}
          <Link to="/pricing" className="btn ml-2">
            Get the App
          </Link>
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-2 flex flex-col">
            {nav.map((n) => (
              <LinkC key={n.to} {...n} />
            ))}
            <Link to="/pricing" className="btn my-2">
              Get the App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
