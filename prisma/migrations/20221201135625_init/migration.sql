/*
  Warnings:

  - Changed the type of `deskripsi_alat` on the `alat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "alat" ADD COLUMN     "spesifikasi_alat" JSONB,
DROP COLUMN "deskripsi_alat",
ADD COLUMN     "deskripsi_alat" JSONB NOT NULL;
