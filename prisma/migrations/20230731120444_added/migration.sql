/*
  Warnings:

  - A unique constraint covering the columns `[attributeId]` on the table `ProductList` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ManufacturingDeatils` to the `ProductList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SKU` to the `ProductList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SpecialFeatures` to the `ProductList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attributeId` to the `ProductList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `ProductList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialUsed` to the `ProductList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductList" ADD COLUMN     "ManufacturingDeatils" TEXT NOT NULL,
ADD COLUMN     "SKU" TEXT NOT NULL,
ADD COLUMN     "SpecialFeatures" TEXT NOT NULL,
ADD COLUMN     "attributeId" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "materialUsed" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CERT" (
    "id" TEXT NOT NULL,
    "certName" TEXT NOT NULL,
    "issuedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productListId" TEXT,

    CONSTRAINT "CERT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductList_attributeId_key" ON "ProductList"("attributeId");

-- AddForeignKey
ALTER TABLE "ProductList" ADD CONSTRAINT "ProductList_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "ProductAttribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CERT" ADD CONSTRAINT "CERT_productListId_fkey" FOREIGN KEY ("productListId") REFERENCES "ProductList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
