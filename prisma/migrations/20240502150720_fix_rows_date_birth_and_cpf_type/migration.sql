/*
  Warnings:

  - You are about to drop the column `data_birth` on the `patients` table. All the data in the column will be lost.
  - You are about to alter the column `cpf` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `date_birth` to the `patients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "date_birth" DATETIME NOT NULL,
    "genre" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "cellphone" INTEGER NOT NULL,
    "address" TEXT NOT NULL
);
INSERT INTO "new_patients" ("address", "cellphone", "cpf", "genre", "id", "name") SELECT "address", "cellphone", "cpf", "genre", "id", "name" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
CREATE UNIQUE INDEX "patients_cpf_key" ON "patients"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
