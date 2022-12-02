/*
  Warnings:

  - You are about to drop the `data_aspek` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "data_aspek" DROP CONSTRAINT "data_aspek_id_parameter_fkey";

-- DropTable
DROP TABLE "data_aspek";

-- CreateTable
CREATE TABLE "data" (
    "id_data" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "id_parameter" TEXT NOT NULL,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id_data")
);

-- CreateTable
CREATE TABLE "temp_data" (
    "id_temp_data" TEXT NOT NULL,
    "id_alat" TEXT NOT NULL,
    "id_data" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "temp_data_pkey" PRIMARY KEY ("id_temp_data")
);

-- CreateTable
CREATE TABLE "uji" (
    "id" TEXT NOT NULL,
    "id_alat" TEXT NOT NULL,
    "id_inventor" TEXT NOT NULL,
    "nilai" INTEGER,
    "Status" TEXT NOT NULL,

    CONSTRAINT "uji_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "data" ADD CONSTRAINT "data_id_parameter_fkey" FOREIGN KEY ("id_parameter") REFERENCES "parameter"("id_parameter") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "uji" ADD CONSTRAINT "uji_id_alat_fkey" FOREIGN KEY ("id_alat") REFERENCES "alat"("id_alat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "uji" ADD CONSTRAINT "uji_id_inventor_fkey" FOREIGN KEY ("id_inventor") REFERENCES "inventor"("id_inventor") ON DELETE RESTRICT ON UPDATE CASCADE;
