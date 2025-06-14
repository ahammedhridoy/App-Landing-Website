import { Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Elements from "./pages/Elements";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
