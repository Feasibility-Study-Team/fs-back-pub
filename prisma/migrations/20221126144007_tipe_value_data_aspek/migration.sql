/*
  Warnings:

  - Added the required column `tipe` to the `data_aspek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `data_aspek` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "data_aspek" ADD COLUMN     "tipe" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;
