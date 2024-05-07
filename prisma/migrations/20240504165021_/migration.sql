/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `patients` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "patients_cpf_key" ON "patients"("cpf");
