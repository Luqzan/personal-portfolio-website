import Link from "next/link";
import {
  Language,
  DownloadForOffline,
  GitHub,
  Article,
} from "@mui/icons-material";

export default function ProjectLinkIcon({ href, type }) {
  const iconClassName = "text-foreground size-8 active:text-accent-600";
  let icon;

  switch (type) {
    case "live":
      icon = <Language className={iconClassName} />;
      break;
    case "github":
      icon = <GitHub className={iconClassName} />;
      break;
    case "api":
      icon = <Article className={iconClassName} />;
      break;
    case "download":
      icon = <DownloadForOffline className={iconClassName} />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <Link
      href={href}
      target="_blank"
      className="hover:-translate-y-1 hover:scale-110 transition ease-out duration-300"
    >
      {icon}
    </Link>
  );
}
