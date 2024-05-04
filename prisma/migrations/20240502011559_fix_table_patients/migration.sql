-- CreateTable
CREATE TABLE "patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "data_birth" DATETIME NOT NULL,
    "genre" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cellphone" INTEGER NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "patients_cpf_key" ON "patients"("cpf");
