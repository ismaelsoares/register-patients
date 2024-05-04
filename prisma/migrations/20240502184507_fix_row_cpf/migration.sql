/*
  Warnings:

  - You are about to alter the column `cellphone` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "date_birth" DATETIME NOT NULL,
    "genre" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cellphone" BIGINT NOT NULL,
    "address" TEXT NOT NULL
);
INSERT INTO "new_patients" ("address", "cellphone", "cpf", "date_birth", "genre", "id", "name") SELECT "address", "cellphone", "cpf", "date_birth", "genre", "id", "name" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
