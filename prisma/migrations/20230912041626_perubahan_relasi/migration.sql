/*
  Warnings:

  - You are about to drop the column `idUserClients` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `idUserClients` on the `ProjectHistory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_idUserClients_fkey";

-- DropForeignKey
ALTER TABLE "ProjectHistory" DROP CONSTRAINT "ProjectHistory_idUserClients_fkey";

-- DropForeignKey
ALTER TABLE "Reimbursement" DROP CONSTRAINT "Reimbursement_idImgReimbursement_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "idUserClients",
ADD COLUMN     "idUserClient" TEXT,
ALTER COLUMN "idUserBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProjectHistory" DROP COLUMN "idUserClients",
ADD COLUMN     "idUserClient" TEXT,
ALTER COLUMN "idUserBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reimbursement" ADD COLUMN     "idImgPayment" TEXT,
ALTER COLUMN "idImgReimbursement" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Reimbursement" ADD CONSTRAINT "RembursementImg" FOREIGN KEY ("idImgReimbursement") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reimbursement" ADD CONSTRAINT "PaymentImg" FOREIGN KEY ("idImgPayment") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "ClientUser" FOREIGN KEY ("idUserClient") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "ByUser" FOREIGN KEY ("idUserBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectHistory" ADD CONSTRAINT "ClientUserHistory" FOREIGN KEY ("idUserClient") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectHistory" ADD CONSTRAINT "ByUserHistory" FOREIGN KEY ("idUserBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
