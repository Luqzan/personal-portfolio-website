/*
  Warnings:

  - The values [Full-Stack Developer,Front-End Developer,Back-End Developer] on the enum `ProjectRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `TechnologiesOnProjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProjectRole_new" AS ENUM ('Full-Stack Engineer', 'Front-End Engineer', 'Back-End Engineer', 'Designer');
ALTER TABLE "Project" ALTER COLUMN "role" TYPE "ProjectRole_new" USING ("role"::text::"ProjectRole_new");
ALTER TYPE "ProjectRole" RENAME TO "ProjectRole_old";
ALTER TYPE "ProjectRole_new" RENAME TO "ProjectRole";
DROP TYPE "ProjectRole_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "TechnologiesOnProjects" DROP CONSTRAINT "TechnologiesOnProjects_projectId_fkey";

-- DropForeignKey
ALTER TABLE "TechnologiesOnProjects" DROP CONSTRAINT "TechnologiesOnProjects_technologyId_fkey";

-- AlterTable
ALTER TABLE "ProjectPictures" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "TechnologiesOnProjects";

-- CreateTable
CREATE TABLE "_ProjectToTechnology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTechnology_AB_unique" ON "_ProjectToTechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTechnology_B_index" ON "_ProjectToTechnology"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
