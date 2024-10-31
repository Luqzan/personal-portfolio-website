/*
  Warnings:

  - You are about to drop the column `createdDate` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `deletedDate` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `updatedDate` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `createdDate` on the `Technology` table. All the data in the column will be lost.
  - You are about to drop the column `deletedDate` on the `Technology` table. All the data in the column will be lost.
  - You are about to drop the column `updatedDate` on the `Technology` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectPictures" DROP CONSTRAINT "ProjectPictures_projectId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "createdDate",
DROP COLUMN "deletedDate",
DROP COLUMN "updatedDate",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "createdDate",
DROP COLUMN "deletedDate",
DROP COLUMN "updatedDate",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "ProjectPictures" ADD CONSTRAINT "ProjectPictures_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
