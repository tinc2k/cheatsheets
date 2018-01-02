# postgres


## snippets

```
SELECT * FROM "User" ORDER BY "User".id DESC;

DELETE FROM "User" WHERE "User"."username"='nikola@tesla.com';

/* count Installations by user*/
SELECT
	row_number() OVER (ORDER BY "User"."id") AS "#",
	"User"."username",
	COUNT("Installation"."deviceToken") AS "tokens"
FROM "User"
	LEFT JOIN "Installation" ON "User".id = "Installation"."userId"
	GROUP BY "User"."id";


/* select records with empty or NULL string */
SELECT * FROM "User" WHERE ("User"."email" = '') IS NOT FALSE;

/* select duplicate emails in User table */
SELECT "User"."email", COUNT(*)
  FROM "User"
  GROUP BY "User"."email"
  HAVING COUNT(*) > 1;	

/* get 5 longest strings */
SELECT "Workout"."name", char_length("Workout"."name") as length
  FROM "Workout"
  ORDER BY length DESC
  LIMIT 5;
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
