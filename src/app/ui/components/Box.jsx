export default function Box({ children, className }) {
  return (
    <article
      className={`w-full max-w-lg max-h-[585px] border rounded-lg p-4 sm:p-8 bg-background overflow-y-scroll ${className}`}
    >
      {children}
    </article>
  );
}
