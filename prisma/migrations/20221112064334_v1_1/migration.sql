-- CreateTable
CREATE TABLE "admin" (
    "id_admin" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "institusi" (
    "id_institusi" SERIAL NOT NULL,
    "nama_institusi" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "nomor" TEXT NOT NULL,

    CONSTRAINT "institusi_pkey" PRIMARY KEY ("id_institusi")
);

-- CreateTable
CREATE TABLE "alat" (
    "id_alat" SERIAL NOT NULL,
    "nama_alat" TEXT NOT NULL,
    "deskripsi_alat" TEXT NOT NULL,
    "id_inventor" INTEGER NOT NULL,
    "gambar_alat" TEXT NOT NULL,

    CONSTRAINT "alat_pkey" PRIMARY KEY ("id_alat")
);

-- CreateTable
CREATE TABLE "aspek" (
    "id_aspek" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "aspek_pkey" PRIMARY KEY ("id_aspek")
);

-- CreateTable
CREATE TABLE "parameter" (
    "id_parameter" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "id_aspek" INTEGER NOT NULL,

    CONSTRAINT "parameter_pkey" PRIMARY KEY ("id_parameter")
);

-- CreateTable
CREATE TABLE "data_aspek" (
    "id_data_aspek" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "id_parameter" INTEGER NOT NULL,

    CONSTRAINT "data_aspek_pkey" PRIMARY KEY ("id_data_aspek")
);

-- CreateTable
CREATE TABLE "pengujian" (
    "id_pengujian" SERIAL NOT NULL,
    "id_aspek" INTEGER NOT NULL,
    "id_alat" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "hasil_uji" TEXT NOT NULL,

    CONSTRAINT "pengujian_pkey" PRIMARY KEY ("id_pengujian")
);

-- CreateTable
CREATE TABLE "transaksi" (
    "id_transaksi" SERIAL NOT NULL,
    "id_pengujian" INTEGER NOT NULL,
    "id_penguji" INTEGER NOT NULL,

    CONSTRAINT "transaksi_pkey" PRIMARY KEY ("id_transaksi")
);

-- CreateTable
CREATE TABLE "penguji" (
    "id_penguji" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nama_lengkap" TEXT NOT NULL,
    "id_institusi" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "nomor" TEXT NOT NULL,

    CONSTRAINT "penguji_pkey" PRIMARY KEY ("id_penguji")
);
