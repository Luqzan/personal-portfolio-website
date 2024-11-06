import { PermPhoneMsg, Email, LinkedIn, GitHub } from "@mui/icons-material";
import Link from "next/link";

export default function ContactDetail({ type, href, display }) {
  const iconClassName =
    "text-foreground size-6 group-hover:text-accent-200 transition ease-out duration-300";
  let icon;

  switch (type) {
    case "tel":
      icon = <PermPhoneMsg className={iconClassName} />;
      break;
    case "email":
      icon = <Email className={iconClassName} />;
      break;
    case "linkedin":
      icon = <LinkedIn className={iconClassName} />;
      break;
    case "github":
      icon = <GitHub className={iconClassName} />;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <Link
      href={href}
      target="_blank"
      className="flex flex-row gap-4 items-center hover:text-accent-200 hover:-translate-y-1 transition ease-out duration-300 w-fit group"
    >
      <div className="size-6 flex items-center justify-center">{icon}</div>

      <p className="font-sans font-light text-md tracking-wider">{display}</p>
    </Link>
  );
}
