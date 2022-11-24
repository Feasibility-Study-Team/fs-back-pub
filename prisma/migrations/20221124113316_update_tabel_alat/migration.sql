/*
  Warnings:

  - You are about to drop the column `id_alat` on the `pengujian` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pengujian" DROP CONSTRAINT "pengujian_id_alat_fkey";

-- AlterTable
ALTER TABLE "pengujian" DROP COLUMN "id_alat";

-- CreateTable
CREATE TABLE "_alatTopengujian" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_alatTopengujian_AB_unique" ON "_alatTopengujian"("A", "B");

-- CreateIndex
CREATE INDEX "_alatTopengujian_B_index" ON "_alatTopengujian"("B");

-- AddForeignKey
ALTER TABLE "_alatTopengujian" ADD CONSTRAINT "_alatTopengujian_A_fkey" FOREIGN KEY ("A") REFERENCES "alat"("id_alat") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_alatTopengujian" ADD CONSTRAINT "_alatTopengujian_B_fkey" FOREIGN KEY ("B") REFERENCES "pengujian"("id_pengujian") ON DELETE CASCADE ON UPDATE CASCADE;
