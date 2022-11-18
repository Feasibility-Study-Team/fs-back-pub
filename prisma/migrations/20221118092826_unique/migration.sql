/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `inventor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `inventor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `penguji` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `penguji` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "inventor_username_key" ON "inventor"("username");

-- CreateIndex
CREATE UNIQUE INDEX "inventor_email_key" ON "inventor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "penguji_username_key" ON "penguji"("username");

-- CreateIndex
CREATE UNIQUE INDEX "penguji_email_key" ON "penguji"("email");
