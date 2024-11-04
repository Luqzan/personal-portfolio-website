/*
  Warnings:

  - You are about to drop the column `alt` on the `ProjectPictures` table. All the data in the column will be lost.
  - You are about to drop the column `src` on the `ProjectPictures` table. All the data in the column will be lost.
  - Added the required column `fileHash` to the `ProjectPictures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `key` to the `ProjectPictures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ProjectPictures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `ProjectPictures` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TechnologiesOnProjects" DROP CONSTRAINT "TechnologiesOnProjects_projectId_fkey";

-- AlterTable
ALTER TABLE "ProjectPictures" DROP COLUMN "alt",
DROP COLUMN "src",
ADD COLUMN     "fileHash" TEXT NOT NULL,
ADD COLUMN     "key" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TechnologiesOnProjects" ADD CONSTRAINT "TechnologiesOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
