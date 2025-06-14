import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post)
    return <section className="section container">Post not found.</section>;
  return (
    <article className="section">
      <div className="container max-w-3xl">
        <Link to="/blog" className="text-indigo-600">
          ← Back to Blog
        </Link>
        <h1 className="h1 mt-4">{post.title}</h1>
        <div className="text-sm text-slate-500 mt-2">
          {post.author} • {new Date(post.date).toLocaleDateString()}
        </div>
        <img src={post.cover} alt="" className="w-full rounded-lg my-6" />
        <p className="lead">
          This is placeholder content mirroring the AppCo “Blog Details” page.
        </p>
        <p className="mt-4 text-slate-700">
          Add your long-form content here. You can render Markdown if you like.
        </p>
      </div>
    </article>
  );
}
