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
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
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
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "bName" TEXT,
    "bEmail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReadPermission" (
    "id" TEXT NOT NULL,
    "categorySetup" BOOLEAN,
    "categories" BOOLEAN,
    "subCategories" BOOLEAN,
    "productSetup" BOOLEAN,
    "productList" BOOLEAN,
    "productAttribute" BOOLEAN,
    "productSKU" BOOLEAN,
    "userManagement" BOOLEAN,
    "vendorSetup" BOOLEAN,
    "vendorRoles" BOOLEAN,
    "orderManagement" BOOLEAN,

    CONSTRAINT "ReadPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WritePermission" (
    "id" TEXT NOT NULL,
    "categorySetup" BOOLEAN,
    "categories" BOOLEAN,
    "subCategories" BOOLEAN,
    "productSetup" BOOLEAN,
    "productList" BOOLEAN,
    "productAttribute" BOOLEAN,
    "productSKU" BOOLEAN,
    "userManagement" BOOLEAN,
    "vendorSetup" BOOLEAN,
    "vendorRoles" BOOLEAN,
    "orderManagement" BOOLEAN,

    CONSTRAINT "WritePermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusPermission" (
    "id" TEXT NOT NULL,
    "categorySetup" BOOLEAN,
    "categories" BOOLEAN,
    "subCategories" BOOLEAN,
    "productSetup" BOOLEAN,
    "productList" BOOLEAN,
    "productAttribute" BOOLEAN,
    "productSKU" BOOLEAN,
    "userManagement" BOOLEAN,
    "vendorSetup" BOOLEAN,
    "vendorRoles" BOOLEAN,
    "orderManagement" BOOLEAN,

    CONSTRAINT "StatusPermission_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "Brand_email_key" ON "Brand"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_vendorPhone_key" ON "Vendor"("vendorPhone");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_userName_key" ON "Vendor"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_brandId_key" ON "Vendor"("brandId");

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_categoryId_key" ON "SubCategory"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAttribute_attributeCategoryId_key" ON "ProductAttribute"("attributeCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSKU_SKUCategoryId_key" ON "ProductSKU"("SKUCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

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
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAttribute" ADD CONSTRAINT "ProductAttribute_attributeCategoryId_fkey" FOREIGN KEY ("attributeCategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSKU" ADD CONSTRAINT "ProductSKU_SKUCategoryId_fkey" FOREIGN KEY ("SKUCategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_readPermissionId_fkey" FOREIGN KEY ("readPermissionId") REFERENCES "ReadPermission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_writePermissionId_fkey" FOREIGN KEY ("writePermissionId") REFERENCES "WritePermission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_statusPermissionId_fkey" FOREIGN KEY ("statusPermissionId") REFERENCES "StatusPermission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillofMaterial" ADD CONSTRAINT "BillofMaterial_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
