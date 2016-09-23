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
FLUSHDB   # Delete all keys in current DB
FLUSHALL  # Nuke everything
```

## references
* http://redis.io/topics/rediscli
* https://github.com/NodeRedis/node_redis
* http://redis.io/topics/data-types-intro
* http://www.cheatography.com/tasjaevan/cheat-sheets/redis/
