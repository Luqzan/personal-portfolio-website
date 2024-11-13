const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const technologies = [
  {
    name: "alpinejs",
    label: "AlpineJS",
    src: "/logos/alpinejs.svg",
    color: "#77C1D2",
    officialLink: "https://alpinejs.dev/",
    relevanceRank: 7,
  },
  {
    name: "clerk",
    label: "Clerk",
    src: "/logos/clerk.png",
    color: "#9785FF",
    officialLink: "https://clerk.com/",
    relevanceRank: 7,
  },
  {
    name: "javascript",
    label: "JavaScript",
    src: "/logos/javascript.svg",
    color: "#F0DB4F",
    officialLink: "https://www.javascript.com/",
    relevanceRank: 3,
  },
  {
    name: "jquery",
    label: "jQuery",
    src: "/logos/jquery.svg",
    color: "#0868AC",
    officialLink: "https://jquery.com/",
    relevanceRank: 7,
  },
  {
    name: "laravel",
    label: "Laravel",
    src: "/logos/laravel.svg",
    color: "#FF2D20",
    officialLink: "https://laravel.com/",
    relevanceRank: 1,
  },
  {
    name: "livewire",
    label: "Livewire",
    src: "/logos/livewire.svg",
    color: "#FB70A9",
    officialLink: "https://laravel-livewire.com/",
    relevanceRank: 2,
  },
  {
    name: "mysql",
    label: "MySQL",
    src: "/logos/mysql.png",
    color: "#4479A1",
    officialLink: "https://www.mysql.com/",
    relevanceRank: 5,
  },
  {
    name: "nextjs",
    label: "NextJS",
    src: "/logos/nextjs.svg",
    color: "#FFFFFF",
    officialLink: "https://nextjs.org/",
    relevanceRank: 1,
  },
  {
    name: "nodejs",
    label: "NodeJS",
    src: "/logos/nodejs.svg",
    color: "#5FA04E",
    officialLink: "https://nodejs.org/",
    relevanceRank: 7,
  },
  {
    name: "php",
    label: "PHP",
    src: "/logos/php.svg",
    color: "#777BB3",
    officialLink: "https://www.php.net/",
    relevanceRank: 3,
  },
  {
    name: "postgresql",
    label: "PostgreSQL",
    src: "/logos/postgresql.png",
    color: "#336791",
    officialLink: "https://www.postgresql.org/",
    relevanceRank: 5,
  },
  {
    name: "prismaorm",
    label: "PrismaORM",
    src: "/logos/prismaorm.svg",
    color: "#4C51BF",
    officialLink: "https://www.prisma.io/",
    relevanceRank: 6,
  },
  {
    name: "reactjs",
    label: "ReactJS",
    src: "/logos/reactjs.svg",
    color: "#00D8FF",
    officialLink: "https://react.dev/",
    relevanceRank: 2,
  },
  {
    name: "reactnative",
    label: "ReactNative",
    src: "/logos/reactnative.svg",
    color: "#00D8FF",
    officialLink: "https://reactnative.dev/",
    relevanceRank: 1,
  },
  {
    name: "sequelize",
    label: "Sequelize",
    src: "/logos/sequelize.svg",
    color: "#03AFEF",
    officialLink: "https://sequelize.org/",
    relevanceRank: 6,
  },
  {
    name: "tailwindcss",
    label: "TailwindCSS",
    src: "/logos/tailwindcss.svg",
    color: "#06B6D4",
    officialLink: "https://tailwindcss.com/",
    relevanceRank: 4,
  },
  {
    name: "typescript",
    label: "TypeScript",
    src: "/logos/typescript.svg",
    color: "#3178C6",
    officialLink: "https://www.typescriptlang.org/",
    relevanceRank: 3,
  },
  {
    name: "uploadthing",
    label: "UploadThing",
    src: "/logos/uploadthing.svg",
    color: "#DC2626",
    officialLink: "https://uploadthing.com/",
    relevanceRank: 7,
  },
  {
    name: "zod",
    label: "Zod",
    src: "/logos/zod.svg",
    color: "#3068B7",
    officialLink: "https://zod.dev/",
    relevanceRank: 7,
  },
];

async function main() {
  try {
    const technologyCreate = await prisma.technology.createMany({
      data: technologies,
      skipDuplicates: true,
    });

    console.log(
      technologyCreate
        ? "Seeding technologies success"
        : "Seeding technologies failed"
    );

    const projectCreate = await prisma.project.create({
      data: {
        title: "portfolio-web-app",
        type: "WebApplication",
        role: "FullStackEngineer",
        status: "Ongoing",
        liveLink: "https://portfolio.luqzanariff.com",
        githubLink: "https://github.com/PixelMY/personal-portfolio-website",
        startDate: "2024-10-23T00:00:00.000Z",
        technologies: {
          connect: [
            { id: 2 },
            { id: 3 },
            { id: 8 },
            { id: 9 },
            { id: 11 },
            { id: 12 },
            { id: 13 },
            { id: 16 },
            { id: 18 },
            { id: 19 },
          ],
        },
      },
    });

    console.log(
      projectCreate ? "Seeding project success" : "Seeding project failed"
    );
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
