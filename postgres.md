# postgres

## select

```
-- simple query
SELECT * FROM "User" ORDER BY "User".id DESC;

-- concantenate attributes
SELECT
  "User".id,
  concat("User"."firstName", ' ', "User"."lastName") AS "name"
FROM "User";

-- count number of Post records by Post.type value
SELECT
  "Post".type,
  COUNT("Post".id) as "count"
FROM "Post"
  GROUP BY "Post".type
  ORDER BY "Post".type;

-- count associated Installations to each User
SELECT
  row_number() OVER (ORDER BY "User"."id") AS "#",
  "User"."name",
  COUNT("Installation"."id") AS "installations"
FROM "User"
  LEFT JOIN "Installation" ON "User".id = "Installation"."userId"
  GROUP BY "User"."id";

-- select records with empty or NULL string
SELECT * FROM "User" WHERE ("User"."email" = '') IS NOT FALSE;

-- check for duplicate emails in User table
SELECT "User"."email", COUNT(*)
  FROM "User"
  GROUP BY "User"."email"
  HAVING COUNT(*) > 1;

-- select unique Users from all Subscriptions to id=1
SELECT DISTINCT "User".*
FROM "User"
  INNER JOIN "Subscription" ON "Subscription"."userId"="User".id
WHERE "Subscription"."influencerId"=1
ORDER BY "User".id;

-- get 5 longest strings
SELECT "Workout"."name", char_length("Workout"."name") as length
  FROM "Workout"
  ORDER BY length DESC
  LIMIT 5;
```

## insert

```
INSERT INTO books (id, title, author_id, subject_id)
  VALUES (41472, 'Practical PostgreSQL', 1212, 4);
```

## update

```
-- update attribute value on all records
UPDATE "Installation" SET "deviceToken"='';

UPDATE "User" SET "campaignWelcome" = 2 WHERE "User".id = 112;
```

## delete

```
-- delete records by attribute value
DELETE FROM "User" WHERE "User"."username"='nikola@tesla.com';

-- delete child records based on parent's attribute value
DELETE FROM "ReceiptItem" WHERE "ReceiptItem"."receiptId" IN (
  SELECT "Receipt".id
  FROM "Receipt"
  WHERE "Receipt"."userId"=112
);
```


## analysis

```
-- get 20 largest tables
SELECT nspname || '.' || relname AS "relation",
    pg_size_pretty(pg_total_relation_size(C.oid)) AS "total_size"
  FROM pg_class C
  LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
  WHERE nspname NOT IN ('pg_catalog', 'information_schema')
    AND C.relkind <> 'i'
    AND nspname !~ '^pg_toast'
  ORDER BY pg_total_relation_size(C.oid) DESC
  LIMIT 20;
```

## operations

```
#!bash
$ createdb dbname
$ createdb -O usrname dbname #create database with specific owner
$ dropdb dbname
$ createuser -s -r postgres #creates postgres user & role
$ createuser usrname -W #create user and present a password prompt
$ dropuser usrname
$ psql dbname #enter console
  dbname=# \q  #quit console
  dbname=# \l  #list databases & owners
  select CURRENT_USER; #who am i
```


## backup, import, export

```
#!bash
#http://www.postgresql.org/docs/9.1/static/backup-dump.html
pg_dump dbname > outfile
pg_dump dbname | gzip > filename.gz
psql dbname < infile #restoring the dump
psql --set ON_ERROR_STOP=on dbname < infile #if you want to stop on error
gunzip -c filename.gz | psql dbname #reload from gz
pg_dump -h host1 dbname | psql -h host2 dbname #dump from server to replicate on another
pg_dumpall > outfile #dump whole database cluster
```


## osx installation

```
brew update
brew install redis
brew install postgres
mkdir -p ~/Library/LaunchAgents
ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
createdb orange

psql postgres -c 'CREATE EXTENSION "adminpack";')

## psql --dbname=orange
## psql --dbname=postgres
## CREATE ROLE orange WITH LOGIN ENCRYPTED PASSWORD 'correcthorsebatterystaple' CREATEDB;
## \q
```


## query optimization

(source: https://wiki.postgresql.org/wiki/FAQ)

* Creation of indexes, including expression and partial indexes
* Use of COPY instead of multiple INSERTs
* Grouping of multiple statements into a single transaction to reduce commit overhead
* Use of CLUSTER when retrieving many rows from an index
* Use of LIMIT for returning a subset of a query's output
* Use of Prepared queries
* Use of ANALYZE to maintain accurate optimizer statistics
* Regular use of VACUUM or pg_autovacuum
* Dropping of indexes during large data changes


## references

* https://wiki.postgresql.org/wiki/FAQ
* http://www.postgresql.org/docs/9.3/static/high-availability.html
* https://wiki.postgresql.org/wiki/Replication,_Clustering,_and_Connection_Pooling
