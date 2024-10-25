import clsx from "clsx";
import Image from "next/image";

export default function TechBadge({ brand }) {
  let src;
  let alt;
  let label;

  switch (brand) {
    case "nextjs":
      src = "/nextjs-logo.svg";
      alt = "NextJS Logo";
      label = "NextJS";
      break;
    case "typescript":
      src = "/typescript-logo.svg";
      alt = "TypeScript Logo";
      label = "TypeScript";
      break;
    case "tailwind":
      src = "/tailwind-logo.svg";
      alt = "TailwindCSS Logo";
      label = "TailwindCSS";
      break;
    case "postgres":
      src = "/postgres-logo.png";
      alt = "PostgresSQL Logo";
      label = "PostgresSQL";
      break;
  }

  return (
    <div
      className={clsx(
        "w-fit flex gap-2 items-center py-2 px-3 border rounded-lg flex-shrink-0",
        {
          "border-foreground": brand === "nextjs",
          "border-tailwind": brand === "tailwind",
          "border-typescript": brand === "typescript",
          "border-postgres": brand === "postgres",
        }
      )}
    >
      <Image src={src} height={18} width={18} alt={alt} />

      <p className="tracking-widest text-xs text-nowrap">{label}</p>
    </div>
  );
}
