/*
  Warnings:

  - Made the column `id_inventor` on table `alat` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "alat" DROP CONSTRAINT "alat_id_inventor_fkey";

-- AlterTable
ALTER TABLE "alat" ALTER COLUMN "id_inventor" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "alat" ADD CONSTRAINT "alat_id_inventor_fkey" FOREIGN KEY ("id_inventor") REFERENCES "inventor"("id_inventor") ON DELETE RESTRICT ON UPDATE CASCADE;
