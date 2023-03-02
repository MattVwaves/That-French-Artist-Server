-- AlterTable
ALTER TABLE "ShopItem" ADD COLUMN     "basketId" INTEGER;

-- CreateTable
CREATE TABLE "Basket" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShopItem" ADD CONSTRAINT "ShopItem_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "Basket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
