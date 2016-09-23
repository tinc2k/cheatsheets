# redis

## install/run
### windows
```
choco install redis-64
C:\ProgramData\chocolatey\lib\redis-64\redis-server.exe
C:\ProgramData\chocolatey\lib\redis-64\redis-cli.exe
```

### debian
```
apt-get install -y redis-server
```


## redis-cli
```
SET key 'value'
GET key
EXPIRE key sec  # returns 1 on success, 0 if !exists or failed
PEXPIRE key ms  
SAVE            # manual snapshot
FLUSHDB         # delete all keys in current db
FLUSHALL        # nuke from orbit
```

## references
* http://redis.io/topics/rediscli
* https://github.com/NodeRedis/node_redis
* http://redis.io/topics/data-types-intro
* http://www.cheatography.com/tasjaevan/cheat-sheets/redis/
