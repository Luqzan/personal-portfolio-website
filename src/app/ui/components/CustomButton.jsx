export default function CustomButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="hover:-translate-y-1 hover:scale-110 transition-transform ease-out duration-300"
    >
      {children}
    </button>
  );
}
