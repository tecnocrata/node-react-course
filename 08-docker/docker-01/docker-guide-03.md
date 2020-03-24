# Guide extracted from: https://docker-curriculum.com

## Static Sites with Docker

* The first thing we're going to look at is how we can run a dead-simple static website. We're going to pull a Docker image from Docker Hub, run the container and see how easy it is to run a webserver.

* The image that we are going to use is a single-page website that I've already created for the purpose of this demo and hosted on the registry - prakhar1989/static-site. We can download and run the image directly in one go using docker run. As noted above, the --rm flag automatically removes the container when it exits:
```
	$ docker run --rm prakhar1989/static-site
```
* Hit Ctrl+C to stop the container

* The client is not exposing any ports so we need to re-run the docker run command to publish ports.

* In the below command, -d will detach our terminal, -P will publish all exposed ports to random ports and finally --name corresponds to a name we want to give. Now we can see the ports by running the docker port [CONTAINER] command
```
	$ docker run -d -P --name static-site prakhar1989/static-site
	$ docker port static-site
	$ docker ps
	$ docker stop static-site
```