export default function SectionTitle({ eyebrow, title, text, center }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="uppercase tracking-wide text-indigo-600 font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="h2 mt-2">{title}</h2>
      {text && <p className="lead mt-3">{text}</p>}
    </div>
  );
}
