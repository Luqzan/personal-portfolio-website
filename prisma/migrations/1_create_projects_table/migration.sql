-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('Ongoing', 'Completed', 'Abandoned');

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "github_link" TEXT NOT NULL,
    "status" "ProjectStatus" NOT NULL,
    "start_date" DATE NOT NULL,
    "finish_date" DATE NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL,
    "deleted_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectPictures" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL,
    "deleted_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectPictures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectPictures" ADD CONSTRAINT "ProjectPictures_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

