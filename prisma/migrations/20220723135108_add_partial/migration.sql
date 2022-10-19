-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "building" TEXT,
    "floor" TEXT,
    "area" REAL,
    "price" DECIMAL NOT NULL DEFAULT 0,
    "bookingOpen" INTEGER NOT NULL DEFAULT 0,
    "parentRoomId" INTEGER,
    CONSTRAINT "Room_parentRoomId_fkey" FOREIGN KEY ("parentRoomId") REFERENCES "Room" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Room" ("area", "bookingOpen", "building", "floor", "id", "name", "parentRoomId", "price") SELECT "area", "bookingOpen", "building", "floor", "id", "name", "parentRoomId", "price" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room_name_key" ON "Room"("name");
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationToken" TEXT,
    "firstname" TEXT,
    "lastname" TEXT,
    "password" TEXT,
    "address" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("address", "email", "firstname", "id", "isAdmin", "lastname", "password") SELECT "address", "email", "firstname", "id", "isAdmin", "lastname", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_StaticEquipment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "roomId" INTEGER,
    CONSTRAINT "StaticEquipment_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_StaticEquipment" ("id", "name", "roomId") SELECT "id", "name", "roomId" FROM "StaticEquipment";
DROP TABLE "StaticEquipment";
ALTER TABLE "new_StaticEquipment" RENAME TO "StaticEquipment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
