BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "about" (
	"adress"	TEXT NOT NULL,
	"telephone"	INTEGER NOT NULL,
	"email"	TEXT NOT NULL,
	"description_about"	TEXT NOT NULL,
	"idp"	INTEGER,
	FOREIGN KEY("idp") REFERENCES "person"("idp")
);
CREATE TABLE IF NOT EXISTS "accomplishments" (
	"idac"	INTEGER NOT NULL,
	"name_accomplishments"	TEXT NOT NULL,
	"date_accomplishments"	TEXT NOT NULL,
	"idp"	INTEGER,
	FOREIGN KEY("idp") REFERENCES "person"("idp"),
	PRIMARY KEY("idac" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "training" (
	"idt"	INTEGER NOT NULL,
	"date_init_training "	TEXT NOT NULL,
	"date_end_training"	TEXT,
	"description_training"	TEXT,
	"idp"	INTEGER,
	FOREIGN KEY("idp") REFERENCES "person"("idp"),
	PRIMARY KEY("idt" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "expirience" (
	"ide"	INTEGER NOT NULL,
	"enterprise_name"	TEXT,
	"role"	TEXT,
	"date_init_work"	TEXT NOT NULL,
	"date_end_work"	TEXT NOT NULL,
	"idp"	INTEGER,
	FOREIGN KEY("idp") REFERENCES "person"("idp"),
	PRIMARY KEY("ide")
);
CREATE TABLE IF NOT EXISTS "personality" (
	"idper"	INTEGER NOT NULL,
	"per1"	INTEGER,
	"per2"	INTEGER,
	"per3"	INTEGER,
	"per4"	INTEGER,
	"per5"	INTEGER,
	"idp"	INTEGER NOT NULL,
	FOREIGN KEY("idp") REFERENCES "person"("idp"),
	PRIMARY KEY("idper" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "skills" (
	"ids"	INTEGER NOT NULL,
	"skill1"	INTEGER,
	"skill2"	INTEGER,
	"skill3"	INTEGER,
	"skill4"	INTEGER,
	"skill5"	INTEGER,
	"idp"	INTEGER NOT NULL,
	FOREIGN KEY("idp") REFERENCES "person"("idp"),
	PRIMARY KEY("ids" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "person" (
	"idp"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	"photo"	BLOB,
	"role"	TEXT,
	PRIMARY KEY("idp" AUTOINCREMENT)
);
INSERT INTO "about" VALUES ('',0,'','0',NULL);
INSERT INTO "about" VALUES ('',0,'','0',NULL);
INSERT INTO "person" VALUES (1,'Pedro','',NULL);
INSERT INTO "person" VALUES (2,'','',NULL);
INSERT INTO "person" VALUES (3,'','',NULL);
INSERT INTO "person" VALUES (4,'','',NULL);
INSERT INTO "person" VALUES (5,'','',NULL);
INSERT INTO "person" VALUES (6,'','',NULL);
COMMIT;
