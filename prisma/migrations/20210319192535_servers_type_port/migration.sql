-- AlterTable
ALTER TABLE "Server" ADD COLUMN     "port" INTEGER NOT NULL DEFAULT 7777,
ADD COLUMN     "type" INTEGER NOT NULL DEFAULT 0;