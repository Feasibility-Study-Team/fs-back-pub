/*
  Warnings:

  - You are about to drop the column `id_role` on the `inventor` table. All the data in the column will be lost.
  - You are about to drop the column `id_role` on the `penguji` table. All the data in the column will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `inventor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `penguji` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "inventor" DROP CONSTRAINT "inventor_id_role_fkey";

-- DropForeignKey
ALTER TABLE "penguji" DROP CONSTRAINT "penguji_id_role_fkey";

-- AlterTable
ALTER TABLE "inventor" DROP COLUMN "id_role",
ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "penguji" DROP COLUMN "id_role",
ADD COLUMN     "role" TEXT NOT NULL;

-- DropTable
DROP TABLE "role";
