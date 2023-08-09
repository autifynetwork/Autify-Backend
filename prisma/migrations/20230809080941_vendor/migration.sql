/*
  Warnings:

  - You are about to drop the `_VendorBrand` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_VendorBrand" DROP CONSTRAINT "_VendorBrand_A_fkey";

-- DropForeignKey
ALTER TABLE "_VendorBrand" DROP CONSTRAINT "_VendorBrand_B_fkey";

-- DropTable
DROP TABLE "_VendorBrand";

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "vendorName" TEXT NOT NULL,
    "vendorPhone" TEXT NOT NULL,
    "contract" TEXT,
    "vendorEntityName" TEXT,
    "vendorTaxDetails" TEXT,
    "AdditionalInfo" TEXT,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "whiteList" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "roleName" TEXT NOT NULL,
    "readPermissionId" TEXT,
    "writePermissionId" TEXT,
    "statusPermissionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillofMaterial" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "vendorId" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3),
    "instructions" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BillofMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_userName_key" ON "Vendor"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_brandId_key" ON "Vendor"("brandId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_readPermissionId_key" ON "Role"("readPermissionId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_writePermissionId_key" ON "Role"("writePermissionId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_statusPermissionId_key" ON "Role"("statusPermissionId");

-- CreateIndex
CREATE UNIQUE INDEX "BillofMaterial_vendorId_key" ON "BillofMaterial"("vendorId");

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_readPermissionId_fkey" FOREIGN KEY ("readPermissionId") REFERENCES "ReadPermission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_writePermissionId_fkey" FOREIGN KEY ("writePermissionId") REFERENCES "WritePermission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_statusPermissionId_fkey" FOREIGN KEY ("statusPermissionId") REFERENCES "StatusPermission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillofMaterial" ADD CONSTRAINT "BillofMaterial_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
