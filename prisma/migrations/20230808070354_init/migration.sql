-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "whitelist" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "categoryImgUrl" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" TEXT NOT NULL,
    "subCategoryName" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductList" (
    "id" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "unit" INTEGER NOT NULL,
    "productDesc" TEXT,
    "expiryDate" TEXT,
    "materialUsed" TEXT,
    "location" TEXT,
    "manfactDetail" TEXT,
    "attributes" TEXT,
    "sku" TEXT,
    "specialFeature" TEXT,
    "cartificate" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductAttribute" (
    "id" TEXT NOT NULL,
    "attributeName" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "attributeCategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSKU" (
    "id" TEXT NOT NULL,
    "productsku" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "SKUCategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductSKU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_VendorBrand" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_email_key" ON "Brand"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_categoryId_key" ON "SubCategory"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAttribute_attributeCategoryId_key" ON "ProductAttribute"("attributeCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSKU_SKUCategoryId_key" ON "ProductSKU"("SKUCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "_VendorBrand_AB_unique" ON "_VendorBrand"("A", "B");

-- CreateIndex
CREATE INDEX "_VendorBrand_B_index" ON "_VendorBrand"("B");

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAttribute" ADD CONSTRAINT "ProductAttribute_attributeCategoryId_fkey" FOREIGN KEY ("attributeCategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSKU" ADD CONSTRAINT "ProductSKU_SKUCategoryId_fkey" FOREIGN KEY ("SKUCategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VendorBrand" ADD CONSTRAINT "_VendorBrand_A_fkey" FOREIGN KEY ("A") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VendorBrand" ADD CONSTRAINT "_VendorBrand_B_fkey" FOREIGN KEY ("B") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;
