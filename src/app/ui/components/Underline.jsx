export default function Underline({ children }) {
  return (
    <span className="font-light text-nowrap underline underline-offset-[6px] decoration-1 decoration-accent-500">
      {children}
    </span>
  );
}
