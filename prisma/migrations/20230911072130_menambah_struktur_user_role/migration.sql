/*
  Warnings:

  - Added the required column `alias` to the `ProjectStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectStatus" ADD COLUMN     "alias" TEXT NOT NULL;
