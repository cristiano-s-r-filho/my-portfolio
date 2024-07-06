-- CreateTable
CREATE TABLE "Counter" (
    "idCount" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "peopleSum" INTEGER NOT NULL,
    "breadSum" INTEGER NOT NULL,
    "entry" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "breads" INTEGER NOT NULL,
    "cash" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_id_key" ON "Customer"("id");
