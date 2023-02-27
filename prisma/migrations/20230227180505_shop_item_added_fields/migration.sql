/*
  Warnings:

  - Added the required column `price` to the `ShopItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ShopItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShopItem" ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
