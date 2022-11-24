/*
  Warnings:

  - You are about to drop the `photoAlat` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_role` to the `inventor` table without a default value. This is not possible if the table is not empty.
  - Made the column `id_institusi` on table `inventor` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `id_role` to the `penguji` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "inventor" DROP CONSTRAINT "inventor_id_institusi_fkey";

-- DropForeignKey
ALTER TABLE "photoAlat" DROP CONSTRAINT "photoAlat_id_alat_fkey";

-- AlterTable
ALTER TABLE "inventor" ADD COLUMN     "id_role" TEXT NOT NULL,
ALTER COLUMN "id_institusi" SET NOT NULL;

-- AlterTable
ALTER TABLE "penguji" ADD COLUMN     "id_role" TEXT NOT NULL;

-- DropTable
DROP TABLE "photoAlat";

-- CreateTable
CREATE TABLE "role" (
    "id_role" TEXT NOT NULL,
    "nama_role" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "photo_alat" (
    "id_photo" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "id_alat" TEXT,

    CONSTRAINT "photo_alat_pkey" PRIMARY KEY ("id_photo")
);

-- AddForeignKey
ALTER TABLE "inventor" ADD CONSTRAINT "inventor_id_institusi_fkey" FOREIGN KEY ("id_institusi") REFERENCES "institusi"("id_institusi") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventor" ADD CONSTRAINT "inventor_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "role"("id_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photo_alat" ADD CONSTRAINT "photo_alat_id_alat_fkey" FOREIGN KEY ("id_alat") REFERENCES "alat"("id_alat") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penguji" ADD CONSTRAINT "penguji_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "role"("id_role") ON DELETE RESTRICT ON UPDATE CASCADE;
