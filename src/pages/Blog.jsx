import { posts } from "../data/posts";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Blog</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {posts.map((p) => (
            <article key={p.slug} className="card overflow-hidden">
              <img src={p.cover} alt="" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="text-sm text-slate-500">
                  {new Date(p.date).toLocaleDateString()}
                </div>
                <h3 className="font-semibold text-lg mt-1">{p.title}</h3>
                <p className="text-slate-600 mt-2">{p.excerpt}</p>
                <Link className="btn mt-4" to={`/blog/${p.slug}`}>
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
