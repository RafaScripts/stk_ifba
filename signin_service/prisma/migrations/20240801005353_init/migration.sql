-- CreateTable
CREATE TABLE "prices" (
    "id" TEXT NOT NULL,
    "coin" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "change" TEXT NOT NULL,
    "iconUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prices_pkey" PRIMARY KEY ("id")
);
