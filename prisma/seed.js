const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const technologies = [
  {
    name: "alpinejs",
    label: "AlpineJS",
    src: "/logos/alpinejs.svg",
    color: "#77c1d2",
  },
  {
    name: "clerk",
    label: "Clerk",
    src: "/logos/clerk.png",
    color: "#9785ff",
  },
  {
    name: "javascript",
    label: "JavaScript",
    src: "/logos/javascript.svg",
    color: "#f0db4f",
  },
  {
    name: "jquery",
    label: "jQuery",
    src: "/logos/jquery.svg",
    color: "#0868ac",
  },
  {
    name: "laravel",
    label: "Laravel",
    src: "/logos/laravel.svg",
    color: "#FF2D20",
  },
  {
    name: "livewire",
    label: "Livewire",
    src: "/logos/livewire.svg",
    color: "#fb70a9",
  },
  {
    name: "mysql",
    label: "MySQL",
    src: "/logos/mysql.png",
    color: "#4479a1",
  },
  {
    name: "nextjs",
    label: "NextJS",
    src: "/logos/nextjs.svg",
    color: "#ffffff",
  },
  {
    name: "nodejs",
    label: "NodeJS",
    src: "/logos/nodejs.svg",
    color: "#5FA04E",
  },
  {
    name: "php",
    label: "PHP",
    src: "/logos/php.svg",
    color: "#777bb3",
  },
  {
    name: "postgresql",
    label: "PostgreSQL",
    src: "/logos/postgresql.png",
    color: "#336791",
  },
  {
    name: "prismaorm",
    label: "PrismaORM",
    src: "/logos/prismaorm.svg",
    color: "#4c51bf",
  },
  {
    name: "reactjs",
    label: "ReactJS",
    src: "/logos/reactjs.svg",
    color: "#00D8FF",
  },
  {
    name: "reactnative",
    label: "ReactNative",
    src: "/logos/reactnative.svg",
    color: "#00D8FF",
  },
  {
    name: "sequelize",
    label: "Sequelize",
    src: "/logos/sequelize.svg",
    color: "#03afef",
  },
  {
    name: "tailwindcss",
    label: "TailwindCSS",
    src: "/logos/tailwindcss.svg",
    color: "#06B6D4",
  },
  {
    name: "typescript",
    label: "TypeScript",
    src: "/logos/typescript.svg",
    color: "#3178c6",
  },
];

async function main() {
  try {
    const returnedData = await prisma.technology.createMany({
      data: technologies,
      skipDuplicates: true,
    });

    console.log({
      message: "Technologies successfully seeded.",
      data: returnedData,
    });
  } catch (err) {
    console.log(err);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
