# node-cd-pipeline
Continuous Delivery Pipeline for Node.js Application

## Requirements
* Node.js version v6.11.2
* NPM version 3.10.10

## Install, Test and Run The Application
* Install the application:
```
npm install
```
* Test the application:
```
npm Test
```
* Run the application:
```
npm start
```

## Generate Docker Image for Running Jenkins with Node.js
The docker image is described in docker/Dockerfile.

* Build the image:
```
docker build -t jenkins-nodejs docker/
```

* Run the image:
```
docker run -d --restart always -p 8080:8080 -p 50000:50000 jenkins-nodejs
```
