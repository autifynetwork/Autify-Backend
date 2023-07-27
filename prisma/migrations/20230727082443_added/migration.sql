/*
  Warnings:

  - Added the required column `productDesc` to the `ProductList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductList" ADD COLUMN     "productDesc" TEXT NOT NULL;
