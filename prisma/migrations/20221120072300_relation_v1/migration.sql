/*
  Warnings:

  - You are about to drop the column `id_aspek` on the `pengujian` table. All the data in the column will be lost.
  - You are about to drop the column `id_penguji` on the `transaksi` table. All the data in the column will be lost.
  - You are about to drop the column `id_pengujian` on the `transaksi` table. All the data in the column will be lost.
  - Added the required column `photo` to the `penguji` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alat" ALTER COLUMN "id_inventor" DROP NOT NULL;

-- AlterTable
ALTER TABLE "inventor" ALTER COLUMN "id_institusi" DROP NOT NULL;

-- AlterTable
ALTER TABLE "penguji" ADD COLUMN     "photo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pengujian" DROP COLUMN "id_aspek";

-- AlterTable
ALTER TABLE "transaksi" DROP COLUMN "id_penguji",
DROP COLUMN "id_pengujian";

-- CreateTable
CREATE TABLE "_aspekTopengujian" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_pengujianTotransaksi" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_pengujiTotransaksi" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_aspekTopengujian_AB_unique" ON "_aspekTopengujian"("A", "B");

-- CreateIndex
CREATE INDEX "_aspekTopengujian_B_index" ON "_aspekTopengujian"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_pengujianTotransaksi_AB_unique" ON "_pengujianTotransaksi"("A", "B");

-- CreateIndex
CREATE INDEX "_pengujianTotransaksi_B_index" ON "_pengujianTotransaksi"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_pengujiTotransaksi_AB_unique" ON "_pengujiTotransaksi"("A", "B");

-- CreateIndex
CREATE INDEX "_pengujiTotransaksi_B_index" ON "_pengujiTotransaksi"("B");

-- AddForeignKey
ALTER TABLE "inventor" ADD CONSTRAINT "inventor_id_institusi_fkey" FOREIGN KEY ("id_institusi") REFERENCES "institusi"("id_institusi") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alat" ADD CONSTRAINT "alat_id_inventor_fkey" FOREIGN KEY ("id_inventor") REFERENCES "inventor"("id_inventor") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parameter" ADD CONSTRAINT "parameter_id_aspek_fkey" FOREIGN KEY ("id_aspek") REFERENCES "aspek"("id_aspek") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_aspek" ADD CONSTRAINT "data_aspek_id_parameter_fkey" FOREIGN KEY ("id_parameter") REFERENCES "parameter"("id_parameter") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pengujian" ADD CONSTRAINT "pengujian_id_alat_fkey" FOREIGN KEY ("id_alat") REFERENCES "alat"("id_alat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penguji" ADD CONSTRAINT "penguji_id_institusi_fkey" FOREIGN KEY ("id_institusi") REFERENCES "institusi"("id_institusi") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_aspekTopengujian" ADD CONSTRAINT "_aspekTopengujian_A_fkey" FOREIGN KEY ("A") REFERENCES "aspek"("id_aspek") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_aspekTopengujian" ADD CONSTRAINT "_aspekTopengujian_B_fkey" FOREIGN KEY ("B") REFERENCES "pengujian"("id_pengujian") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pengujianTotransaksi" ADD CONSTRAINT "_pengujianTotransaksi_A_fkey" FOREIGN KEY ("A") REFERENCES "pengujian"("id_pengujian") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pengujianTotransaksi" ADD CONSTRAINT "_pengujianTotransaksi_B_fkey" FOREIGN KEY ("B") REFERENCES "transaksi"("id_transaksi") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pengujiTotransaksi" ADD CONSTRAINT "_pengujiTotransaksi_A_fkey" FOREIGN KEY ("A") REFERENCES "penguji"("id_penguji") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pengujiTotransaksi" ADD CONSTRAINT "_pengujiTotransaksi_B_fkey" FOREIGN KEY ("B") REFERENCES "transaksi"("id_transaksi") ON DELETE CASCADE ON UPDATE CASCADE;
