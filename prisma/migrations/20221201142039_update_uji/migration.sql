-- DropForeignKey
ALTER TABLE "uji" DROP CONSTRAINT "uji_id_inventor_fkey";

-- AlterTable
ALTER TABLE "uji" ALTER COLUMN "id_inventor" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "uji" ADD CONSTRAINT "uji_id_inventor_fkey" FOREIGN KEY ("id_inventor") REFERENCES "inventor"("id_inventor") ON DELETE SET NULL ON UPDATE CASCADE;
