import clsx from "clsx";
import Image from "next/image";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";

export default function TechBadge({ brand }) {
  let src;
  let alt;
  let label;

  switch (brand) {
    case "alpinejs":
      src = "/logos/alpinejs.svg";
      alt = "AlpineJS Logo";
      label = "AlpineJS";
      break;
    case "clerk":
      src = "/logos/clerk.png";
      alt = "Clerk Logo";
      label = "Clerk";
      break;
    case "javascript":
      src = "/logos/javascript.svg";
      alt = "JavaScript Logo";
      label = "JavaScript";
      break;
    case "jquery":
      src = "/logos/jquery.svg";
      alt = "jQuery Logo";
      label = "jQuery";
      break;
    case "laravel":
      src = "/logos/laravel.svg";
      alt = "Laravel Logo";
      label = "Laravel";
      break;
    case "livewire":
      src = "/logos/livewire.svg";
      alt = "Livewire Logo";
      label = "Livewire";
      break;
    case "mysql":
      src = "/logos/mysql.png";
      alt = "MySQL Logo";
      label = "MySQL";
      break;
    case "nextjs":
      src = "/logos/nextjs.svg";
      alt = "NextJS Logo";
      label = "NextJS";
      break;
    case "nodejs":
      src = "/logos/nodejs.svg";
      alt = "NodeJS Logo";
      label = "NodeJS";
      break;
    case "php":
      src = "/logos/php.svg";
      alt = "PHP Logo";
      label = "PHP";
      break;
    case "postgresql":
      src = "/logos/postgresql.png";
      alt = "PostgreSQL Logo";
      label = "PostgreSQL";
      break;
    case "prismaorm":
      src = "/logos/prismaorm.svg";
      alt = "PrismaORM Logo";
      label = "PrismaORM";
      break;
    case "reactjs":
      src = "/logos/reactjs.svg";
      alt = "ReactJS Logo";
      label = "ReactJS";
      break;
    case "reactnative":
      src = "/logos/reactnative.svg";
      alt = "ReactNative Logo";
      label = "ReactNative";
      break;
    case "sequelize":
      src = "/logos/sequelize.svg";
      alt = "Sequelize Logo";
      label = "Sequelize";
      break;
    case "tailwindcss":
      src = "/logos/tailwindcss.svg";
      alt = "TailwindCSS Logo";
      label = "TailwindCSS";
      break;
    case "typescript":
      src = "/logos/typescript.svg";
      alt = "TypeScript Logo";
      label = "TypeScript";
      break;
    default:
      src = null;
      alt = "error";
      label = "";
      break;
  }

  return (
    <div
      className={clsx(
        "w-fit flex gap-2 items-center py-1 px-2 border rounded-lg flex-shrink-0",
        {
          "border-brand-alpinejs": brand === "alpinejs",
          "border-brand-clerk": brand === "clerk",
          "border-brand-javascript": brand === "javascript",
          "border-brand-jquery": brand === "jquery",
          "border-brand-laravel": brand === "laravel",
          "border-brand-livewire": brand === "livewire",
          "border-brand-mysql": brand === "mysql",
          "border-brand-nextjs": brand === "nextjs",
          "border-brand-nodejs": brand === "nodejs",
          "border-brand-php": brand === "php",
          "border-brand-postgresql": brand === "postgresql",
          "border-brand-prisma": brand === "prisma",
          "border-brand-reactjs": brand === "reactjs",
          "border-brand-reactnative": brand === "reactnative",
          "border-brand-sequelize": brand === "sequelize",
          "border-brand-tailwindcss": brand === "tailwindcss",
          "border-brand-typescript": brand === "typescript",
        }
      )}
    >
      {src ? (
        <Image src={src} height={18} width={18} alt={alt} className="h-4 w-4" />
      ) : (
        <BrokenImageOutlinedIcon sx={{ height: 18, width: 18 }} />
      )}

      <p className="tracking-widest text-xs text-nowrap">{label}</p>
    </div>
  );
}
