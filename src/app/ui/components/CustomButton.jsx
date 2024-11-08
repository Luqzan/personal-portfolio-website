import clsx from "clsx";
import Link from "next/link";

export default function CustomButton({
  children,
  isFilled = false,
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
        `flex w-fit font-mono text-lg tracking-widest py-1 font-medium hover:-translate-y-1 hover:scale-110 transition ease-out duration-300 ${className}`,
        {
          "border-b border-foreground text-foreground hover:text-accent-200 hover:border-accent-200":
            !isFilled,
          "bg-foreground text-background px-4 rounded-lg hover:bg-accent-600 hover:text-foreground":
            isFilled,
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
