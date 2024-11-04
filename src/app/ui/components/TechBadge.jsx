import Image from "next/image";

export default function TechBadge({ technology }) {
  return (
    <div
      className="w-fit flex gap-2 items-center py-1 px-2 border rounded-lg flex-shrink-0"
      style={{ borderColor: technology.color }}
    >
      <Image
        src={technology.src}
        height={18}
        width={18}
        alt={`${technology.label} Logo`}
        className="h-4 w-auto"
      />

      <p className="tracking-widest text-xs text-nowrap">{technology.label}</p>
    </div>
  );
}
