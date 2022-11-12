-- CreateTable
CREATE TABLE "inventor" (
    "id_inventor" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nama_lengkap" TEXT NOT NULL,
    "id_institusi" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "nomor" TEXT NOT NULL,

    CONSTRAINT "inventor_pkey" PRIMARY KEY ("id_inventor")
);
