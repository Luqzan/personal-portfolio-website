export default function ProjectInfo({ header, info }) {
  return (
    <div className="flex-1 flex flex-col">
      <h4 className="uppercase font-sans font-medium opacity-50 text-xs text-foreground tracking-widest leading-none">
        {header}:
      </h4>

      <p className="font-mono font-extralight text-lg tracking-wide leading-none">
        {info}
      </p>
    </div>
  );
}
