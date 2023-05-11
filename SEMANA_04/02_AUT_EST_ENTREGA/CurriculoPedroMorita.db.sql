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
CREATE TABLE IF NOT EXISTS "person" (
	"idp"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	"photo"	BLOB,
	"role"	TEXT,
	PRIMARY KEY("idp" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "training" (
	"idt"	INTEGER NOT NULL,
	"date_init_training"	TEXT NOT NULL,
	"date_end_training"	TEXT,
	"description_training"	TEXT,
	"idp"	INTEGER,
	FOREIGN KEY("idp") REFERENCES "person"("idp"),
	PRIMARY KEY("idt" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "skills" (
	"ids"	INTEGER NOT NULL,
	"name_skill"	TEXT NOT NULL,
	"idp"	INTEGER NOT NULL,
	"level_skill"	INTEGER,
	FOREIGN KEY("idp") REFERENCES "person"("idp"),
	PRIMARY KEY("ids" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "personality" (
	"idper"	INTEGER NOT NULL,
	"name_trait"	TEXT NOT NULL,
	"idp"	INTEGER NOT NULL,
	"level_trait"	INTEGER,
	FOREIGN KEY("idp") REFERENCES "person"("idp"),
	PRIMARY KEY("idper" AUTOINCREMENT)
);
INSERT INTO "about" VALUES ('',0,'','0',NULL);
INSERT INTO "about" VALUES ('',0,'','0',NULL);
INSERT INTO "person" VALUES (18,'Maria','???','Cientist');
INSERT INTO "person" VALUES (19,'Pedro','teste','Designer');
INSERT INTO "person" VALUES (20,'Pedro','dsadasd','Designer');
INSERT INTO "person" VALUES (21,'Lucas','ffffff','Gamer');
COMMIT;
