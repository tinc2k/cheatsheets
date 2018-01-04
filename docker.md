# docker

## quick and dirty
```
# delete all stopped containers (errors printed for running)
docker ps -aq --no-trunc | xargs docker rm

# delete all dangling/untagged images
docker images -q --filter dangling=true | xargs docker rmi
```

## container ops
```
# list compiled images
docker images

# remove image
docker rmi {image_name}

# list running and non-running containers
docker ps -a

# build
docker build -t {container_name} /home/orange/api/

# build w/ specific Dockerfile
docker build -t {container_name} -f '/Users/tinc2k/projects/orange/monitor/Dockerfile_dev' /Users/tinc2k/projects/orange/monitor/

# stop & remove container
docker stop {container_name} && docker rm {container_name}

# run detached
docker run -d -p 80:80 -p 443:443 --name api --link redis:redis --link postgres:postgres orange/api

# see container logs
docker logs {container_name}

# follow container logs
docker logs -f {container_name}

# run interactive
docker run -i -t -p 80:80 -p 443:443 orange/api

# run stuff in container
docker exec -i -t api bash
docker exec postgres pg_dump orange > here.sql
docker cp api:/orange/logs /home/logs/

```


## docker-machine
```
# see host machine IP (development environment only)
docker-machine ls

# upgrade
docker-machine upgrade default
```


## refs
https://docs.docker.com/engine/installation/windows/
https://github.com/wsargent/docker-cheat-sheet
https://docs.docker.com/engine/userguide/networking/default_network/dockerlinks/#updating-the-etchosts-file
