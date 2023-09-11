-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "idCompany" TEXT;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_idCompany_fkey" FOREIGN KEY ("idCompany") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
