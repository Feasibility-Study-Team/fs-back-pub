/*
  Warnings:

  - The primary key for the `admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `alat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `aspek` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `data_aspek` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `institusi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `parameter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `penguji` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pengujian` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `transaksi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `photo` to the `inventor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" DROP CONSTRAINT "admin_pkey",
ALTER COLUMN "id_admin" DROP DEFAULT,
ALTER COLUMN "id_admin" SET DATA TYPE TEXT,
ADD CONSTRAINT "admin_pkey" PRIMARY KEY ("id_admin");
DROP SEQUENCE "admin_id_admin_seq";

-- AlterTable
ALTER TABLE "alat" DROP CONSTRAINT "alat_pkey",
ALTER COLUMN "id_alat" DROP DEFAULT,
ALTER COLUMN "id_alat" SET DATA TYPE TEXT,
ALTER COLUMN "id_inventor" SET DATA TYPE TEXT,
ADD CONSTRAINT "alat_pkey" PRIMARY KEY ("id_alat");
DROP SEQUENCE "alat_id_alat_seq";

-- AlterTable
ALTER TABLE "aspek" DROP CONSTRAINT "aspek_pkey",
ALTER COLUMN "id_aspek" DROP DEFAULT,
ALTER COLUMN "id_aspek" SET DATA TYPE TEXT,
ADD CONSTRAINT "aspek_pkey" PRIMARY KEY ("id_aspek");
DROP SEQUENCE "aspek_id_aspek_seq";

-- AlterTable
ALTER TABLE "data_aspek" DROP CONSTRAINT "data_aspek_pkey",
ALTER COLUMN "id_data_aspek" DROP DEFAULT,
ALTER COLUMN "id_data_aspek" SET DATA TYPE TEXT,
ALTER COLUMN "id_parameter" SET DATA TYPE TEXT,
ADD CONSTRAINT "data_aspek_pkey" PRIMARY KEY ("id_data_aspek");
DROP SEQUENCE "data_aspek_id_data_aspek_seq";

-- AlterTable
ALTER TABLE "institusi" DROP CONSTRAINT "institusi_pkey",
ALTER COLUMN "id_institusi" DROP DEFAULT,
ALTER COLUMN "id_institusi" SET DATA TYPE TEXT,
ADD CONSTRAINT "institusi_pkey" PRIMARY KEY ("id_institusi");
DROP SEQUENCE "institusi_id_institusi_seq";

-- AlterTable
ALTER TABLE "inventor" ADD COLUMN     "photo" TEXT NOT NULL,
ALTER COLUMN "id_institusi" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "parameter" DROP CONSTRAINT "parameter_pkey",
ALTER COLUMN "id_parameter" DROP DEFAULT,
ALTER COLUMN "id_parameter" SET DATA TYPE TEXT,
ALTER COLUMN "id_aspek" SET DATA TYPE TEXT,
ADD CONSTRAINT "parameter_pkey" PRIMARY KEY ("id_parameter");
DROP SEQUENCE "parameter_id_parameter_seq";

-- AlterTable
ALTER TABLE "penguji" DROP CONSTRAINT "penguji_pkey",
ALTER COLUMN "id_penguji" DROP DEFAULT,
ALTER COLUMN "id_penguji" SET DATA TYPE TEXT,
ALTER COLUMN "id_institusi" SET DATA TYPE TEXT,
ADD CONSTRAINT "penguji_pkey" PRIMARY KEY ("id_penguji");
DROP SEQUENCE "penguji_id_penguji_seq";

-- AlterTable
ALTER TABLE "pengujian" DROP CONSTRAINT "pengujian_pkey",
ALTER COLUMN "id_pengujian" DROP DEFAULT,
ALTER COLUMN "id_pengujian" SET DATA TYPE TEXT,
ALTER COLUMN "id_aspek" SET DATA TYPE TEXT,
ALTER COLUMN "id_alat" SET DATA TYPE TEXT,
ADD CONSTRAINT "pengujian_pkey" PRIMARY KEY ("id_pengujian");
DROP SEQUENCE "pengujian_id_pengujian_seq";

-- AlterTable
ALTER TABLE "transaksi" DROP CONSTRAINT "transaksi_pkey",
ALTER COLUMN "id_transaksi" DROP DEFAULT,
ALTER COLUMN "id_transaksi" SET DATA TYPE TEXT,
ALTER COLUMN "id_pengujian" SET DATA TYPE TEXT,
ALTER COLUMN "id_penguji" SET DATA TYPE TEXT,
ADD CONSTRAINT "transaksi_pkey" PRIMARY KEY ("id_transaksi");
DROP SEQUENCE "transaksi_id_transaksi_seq";
