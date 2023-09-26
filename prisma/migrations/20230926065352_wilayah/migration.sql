/*
  Warnings:

  - You are about to drop the column `isACTived` on the `Notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "isACTived",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "Negara" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Negara_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provinsi" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Provinsi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kabupaten" (
    "id" SERIAL NOT NULL,
    "idProvinsi" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Kabupaten_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kecamatan" (
    "id" SERIAL NOT NULL,
    "idKabupaten" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Kecamatan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Kabupaten" ADD CONSTRAINT "Kabupaten_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "Provinsi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kecamatan" ADD CONSTRAINT "Kecamatan_idKabupaten_fkey" FOREIGN KEY ("idKabupaten") REFERENCES "Kabupaten"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
