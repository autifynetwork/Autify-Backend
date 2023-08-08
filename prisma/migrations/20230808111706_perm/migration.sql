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
