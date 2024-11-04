/*
  Warnings:

  - Added the required column `officialLink` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Technology" ADD COLUMN     "officialLink" TEXT NOT NULL;
