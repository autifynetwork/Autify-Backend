/*
  Warnings:

  - Added the required column `expiryDate` to the `ProductList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `ProductList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductList" ADD COLUMN     "expiryDate" TEXT NOT NULL,
ADD COLUMN     "unit" INTEGER NOT NULL;
