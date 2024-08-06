CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"email_verified" boolean,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
