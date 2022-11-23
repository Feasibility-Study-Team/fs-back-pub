-- CreateTable
CREATE TABLE "photoAlat" (
    "id_photo" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "id_alat" TEXT,

    CONSTRAINT "photoAlat_pkey" PRIMARY KEY ("id_photo")
);

-- AddForeignKey
ALTER TABLE "photoAlat" ADD CONSTRAINT "photoAlat_id_alat_fkey" FOREIGN KEY ("id_alat") REFERENCES "alat"("id_alat") ON DELETE SET NULL ON UPDATE CASCADE;
