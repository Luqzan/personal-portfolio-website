-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('Ongoing', 'Completed', 'Abandoned');

-- CreateEnum
CREATE TYPE "Technology" AS ENUM ('nextjs', 'postgresql', 'tailwindcss', 'typescript', 'javascript');

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "technologies" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "github_link" TEXT,
    "status" "ProjectStatus" NOT NULL,
    "start_date" DATE NOT NULL,
    "finish_date" DATE,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3),
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technologies" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "technology" "Technology" NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3),
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "Technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectPictures" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3),
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "ProjectPictures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Technologies" ADD CONSTRAINT "Technologies_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectPictures" ADD CONSTRAINT "ProjectPictures_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

