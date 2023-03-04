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
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "whitelist" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_email_key" ON "Brand"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_email_key" ON "Vendor"("email");
