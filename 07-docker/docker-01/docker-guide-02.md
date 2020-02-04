# Guide extracted from: https://docker-curriculum.com

## Playing with Busybox

* The pull command fetches the busybox image from the Docker registry and saves it to our system:
```
	$ docker pull busybox
```
* Please review Docker registry at: https://hub.docker.com/explore/

## Docker Run

* Run and what happened?
```
	$ docker run busybox
```
* Run again
```
	$ docker run busybox echo "hello from busybox"
```
* Run (this is equivalent to 'docker container' command) what did you get?:
```
	$ docker ps
```
* Run (this is equivalent to 'docker container -all' command) what did you get?:
```
	$ docker ps -a
```
* Run docker interactive tty in the container.... what is going on?:
```
	$ docker run -it busybox sh
	/# ls
	/# uptime
```

## Cleanning my environment

* Run (this is equivalent to 'docker container -all' command) what did you get?:
```
	$ docker ps -a
```
many containers are still there, eating up your disk space, we need remove all of them

* Remove one by one
```
	$ docker rm <CONTAINER ID>
```

* Remove all of them
```
	$ docker rm $(docker ps -a -q -f status=exited)
```

## Terminology

* Images - The blueprints of our application which form the basis of containers. In the demo above, we used the docker pull command to download the busybox image.

* Containers - Created from Docker images and run the actual application. We create a container using docker run which we did using the busybox image that we downloaded. A list of running containers can be seen using the docker ps command.

* Docker Daemon - The background service running on the host that manages building, running and distributing Docker containers. The daemon is the process that runs in the operating system to which clients talk to.

* Docker Client - The command line tool that allows the user to interact with the daemon. More generally, there can be other forms of clients too - such as Kitematic which provide a GUI to the users.

* Docker Hub - A registry of Docker images. You can think of the registry as a directory of all available Docker images. If required, one can host their own Docker registries and can use them for pulling images.
