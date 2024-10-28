import clsx from "clsx";
import Link from "next/link";

export default function CustomButton({
  children,
  isFilled = false,
  iconRight = null,
  className = "",
  link = "#",
  setIconColor,
}) {
  return (
    <Link
      onMouseOver={() => {
        setIconColor ? setIconColor("#ededed") : null;
      }}
      onMouseLeave={() => {
        setIconColor ? setIconColor("#0a0a0a") : null;
      }}
      href={link}
      className={clsx(
        `flex w-fit font-mono text-lg tracking-widest py-1 font-extralight ${className}`,
        {
          "border-b border-foreground text-foreground hover:text-accent-600 hover:border-accent-600":
            !isFilled,
          "bg-foreground text-background px-4 rounded-lg font-semibold hover:bg-accent-600 hover:text-foreground":
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
