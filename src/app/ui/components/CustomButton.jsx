import clsx from "clsx";
import Link from "next/link";

export default function CustomButton({
  children,
  isFilled = false,
  isIconOnly = false,
  iconRight = null,
  className = "",
  link = "#",
  onMouseOver,
  onMouseLeave,
}) {
  return (
    <Link
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      href={link}
      className={clsx(
        `flex w-fit uppercase font-mono text-lg tracking-widest py-1 font-medium hover:-translate-y-1 hover:scale-110 transition ease-out duration-300 ${className}`,
        {
          "border-b border-foreground text-foreground": !isFilled,
          "bg-foreground text-background rounded-lg": isFilled,
          "px-4": isFilled && !isIconOnly,
          "px-2": isFilled && isIconOnly,
        }
      )}
    >
      <div className="flex flex-row items-center gap-2 text-nowrap">
        {children}

        {iconRight}
      </div>
    </Link>
  );
}
