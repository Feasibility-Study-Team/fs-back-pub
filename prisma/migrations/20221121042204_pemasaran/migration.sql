/*
  Warnings:

  - Added the required column `pemasaran` to the `alat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alat" ADD COLUMN     "pemasaran" BOOLEAN NOT NULL;
