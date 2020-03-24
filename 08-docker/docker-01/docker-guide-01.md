# Guide extracted from: https://docker-curriculum.com

## Setting up your computer

* Please install docker preferably on Linux following: https://www.docker.com/products/docker#/linux
* Run:
```
	$ docker info
```
* List all docker images:
```
	$ docker images ls
```
* List all docker containers (running):
```
	$ docker container ls
```

## Installing & Running my first image and container

* Test that your installation works by running the simple Docker image, hello-world
```
	$ docker run hello-world
```
* List again all docker images.... what do you notice?:
```
	$ docker images ls
```

## Recap and cheat sheet

```
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq
```