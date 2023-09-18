/*
  Warnings:

  - You are about to drop the column `idUser` on the `Profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_idUser_fkey";

-- DropIndex
DROP INDEX "Profile_idUser_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "idUser";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "idProfile" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idProfile_fkey" FOREIGN KEY ("idProfile") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
