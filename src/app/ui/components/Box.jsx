export default function Box({ children, className }) {
  return (
    <article
      className={`w-full max-w-lg border rounded-lg p-8 bg-background overflow-clip ${className}`}
    >
      {children}
    </article>
  );
}
