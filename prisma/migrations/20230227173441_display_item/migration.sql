-- CreateTable
CREATE TABLE "DisplayItem" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,

    CONSTRAINT "DisplayItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DisplayItem_description_key" ON "DisplayItem"("description");
