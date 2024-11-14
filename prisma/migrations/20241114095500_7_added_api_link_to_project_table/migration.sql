-- AlterEnum
ALTER TYPE "ProjectType" ADD VALUE 'API';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "apiLink" TEXT;
