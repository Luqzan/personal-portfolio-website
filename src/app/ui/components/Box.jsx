export default function Box({ children, className }) {
  return (
    <div
      className={`w-full max-w-lg border rounded-lg p-8 bg-background ${className}`}
    >
      {children}
    </div>
  );
}
