-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('Web Application', 'Mobile Application', 'Website');

-- CreateEnum
CREATE TYPE "ProjectRole" AS ENUM ('Full-Stack Developer', 'Front-End Developer', 'Back-End Developer', 'Designer');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('Ongoing', 'Completed', 'Abandoned');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "ProjectType" NOT NULL,
    "role" "ProjectRole" NOT NULL,
    "status" "ProjectStatus" NOT NULL,
    "liveLink" TEXT,
    "githubLink" TEXT,
    "downloadLink" TEXT,
    "startDate" DATE NOT NULL,
    "finishDate" DATE,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3),
    "deletedDate" TIMESTAMP(3),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectPictures" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "ProjectPictures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3),
    "deletedDate" TIMESTAMP(3),

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechnologiesOnProjects" (
    "projectId" INTEGER NOT NULL,
    "technologyId" INTEGER NOT NULL,

    CONSTRAINT "TechnologiesOnProjects_pkey" PRIMARY KEY ("projectId","technologyId")
);

-- AddForeignKey
ALTER TABLE "ProjectPictures" ADD CONSTRAINT "ProjectPictures_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnologiesOnProjects" ADD CONSTRAINT "TechnologiesOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnologiesOnProjects" ADD CONSTRAINT "TechnologiesOnProjects_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

