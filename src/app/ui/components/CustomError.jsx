export default function CustomError({ error }) {
  return (
    <p className="font-sans font-light text-red-500 text-sm tracking-widest">
      {error}
    </p>
  );
}
