/*
  Warnings:

  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "test";

-- CreateTable
CREATE TABLE "report" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "cf" BIGINT,
    "copol" JSON,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sat" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "position" VARCHAR,

    CONSTRAINT "sat_pkey" PRIMARY KEY ("id")
);
