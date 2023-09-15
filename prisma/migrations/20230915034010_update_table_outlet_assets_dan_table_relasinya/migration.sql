/*
  Warnings:

  - You are about to drop the column `idCompany` on the `Assets` table. All the data in the column will be lost.
  - You are about to drop the column `idCompany` on the `Bill` table. All the data in the column will be lost.
  - You are about to drop the column `affiliation` on the `Outlet` table. All the data in the column will be lost.
  - You are about to drop the column `idCategory` on the `Outlet` table. All the data in the column will be lost.
  - You are about to drop the column `idCompany` on the `Outlet` table. All the data in the column will be lost.
  - You are about to drop the column `idCompany` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `idCompany` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `idCompany` on the `ProjectHistory` table. All the data in the column will be lost.
  - You are about to drop the column `idCompany` on the `Reimbursement` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OutletCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cost` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimension` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiredDate` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idClient` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minimumQty` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qty` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `safetyQty` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sku` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idWarehouse` to the `AssetsLocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idClient` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consumerGroup` to the `Outlet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idClient` to the `Outlet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licenseType` to the `Outlet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idClient` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idClient` to the `ProjectHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idClient` to the `Reimbursement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Assets" DROP CONSTRAINT "Assets_idCompany_fkey";

-- DropForeignKey
ALTER TABLE "Bill" DROP CONSTRAINT "Bill_idCompany_fkey";

-- DropForeignKey
ALTER TABLE "Outlet" DROP CONSTRAINT "Outlet_idCategory_fkey";

-- DropForeignKey
ALTER TABLE "Outlet" DROP CONSTRAINT "Outlet_idCompany_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_idCompany_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_idCompany_fkey";

-- DropForeignKey
ALTER TABLE "ProjectHistory" DROP CONSTRAINT "ProjectHistory_idCompany_fkey";

-- DropForeignKey
ALTER TABLE "Reimbursement" DROP CONSTRAINT "Reimbursement_idCompany_fkey";

-- AlterTable
ALTER TABLE "Assets" DROP COLUMN "idCompany",
ADD COLUMN     "cost" BIGINT NOT NULL,
ADD COLUMN     "dimension" INTEGER NOT NULL,
ADD COLUMN     "expiredDate" DATE NOT NULL,
ADD COLUMN     "handlingInstruction" TEXT,
ADD COLUMN     "idBrand" INTEGER,
ADD COLUMN     "idClient" TEXT NOT NULL,
ADD COLUMN     "idSupplier" INTEGER,
ADD COLUMN     "minimumQty" INTEGER NOT NULL,
ADD COLUMN     "price" BIGINT NOT NULL,
ADD COLUMN     "qty" INTEGER NOT NULL,
ADD COLUMN     "safetyQty" INTEGER NOT NULL,
ADD COLUMN     "sku" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AssetsLocation" ADD COLUMN     "idWarehouse" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Bill" DROP COLUMN "idCompany",
ADD COLUMN     "idClient" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Outlet" DROP COLUMN "affiliation",
DROP COLUMN "idCategory",
DROP COLUMN "idCompany",
ADD COLUMN     "agreement" TEXT,
ADD COLUMN     "consumerGroup" TEXT NOT NULL,
ADD COLUMN     "contactName" TEXT,
ADD COLUMN     "contactPhone" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "idClient" TEXT NOT NULL,
ADD COLUMN     "licenseType" TEXT NOT NULL,
ADD COLUMN     "link" TEXT,
ADD COLUMN     "promotionalActivities" TEXT,
ADD COLUMN     "size" TEXT,
ADD COLUMN     "visibility" TEXT,
ALTER COLUMN "pic" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "idCompany",
ADD COLUMN     "idClient" TEXT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "idCompany",
ADD COLUMN     "idClient" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProjectHistory" DROP COLUMN "idCompany",
ADD COLUMN     "idClient" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reimbursement" DROP COLUMN "idCompany",
ADD COLUMN     "idClient" TEXT NOT NULL;

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "OutletCategory";

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutletBrand" (
    "id" TEXT NOT NULL,
    "idOutlet" TEXT NOT NULL,
    "idBrand" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OutletBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarehouseLocation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WarehouseLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetsAttributes" (
    "id" TEXT NOT NULL,
    "idAssets" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetsAttributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetsDimension" (
    "id" TEXT NOT NULL,
    "idAssets" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetsDimension_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reimbursement" ADD CONSTRAINT "Reimbursement_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outlet" ADD CONSTRAINT "Outlet_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutletBrand" ADD CONSTRAINT "OutletBrand_idOutlet_fkey" FOREIGN KEY ("idOutlet") REFERENCES "Outlet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutletBrand" ADD CONSTRAINT "OutletBrand_idBrand_fkey" FOREIGN KEY ("idBrand") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assets" ADD CONSTRAINT "Assets_idBrand_fkey" FOREIGN KEY ("idBrand") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assets" ADD CONSTRAINT "Assets_idSupplier_fkey" FOREIGN KEY ("idSupplier") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assets" ADD CONSTRAINT "Assets_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetsLocation" ADD CONSTRAINT "AssetsLocation_idWarehouse_fkey" FOREIGN KEY ("idWarehouse") REFERENCES "WarehouseLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetsAttributes" ADD CONSTRAINT "AssetsAttributes_idAssets_fkey" FOREIGN KEY ("idAssets") REFERENCES "Assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetsDimension" ADD CONSTRAINT "AssetsDimension_idAssets_fkey" FOREIGN KEY ("idAssets") REFERENCES "Assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectHistory" ADD CONSTRAINT "ProjectHistory_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
