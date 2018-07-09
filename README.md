# node-cd-pipeline
Continuous Delivery Pipeline for Node.js Application

## Requirements
* Node.js version v8.11.3
* NPM version 5.6.0
* Mocha version 3.5.0


## Useful Links
* Node.js: https://nodejs.org
* NPM: https://www.npmjs.com/
* Docker: https://www.docker.com/
* Jenkins: https://jenkins.io/
* Jenkins Pipeline: https://jenkins.io/doc/book/pipeline/
* Mocha: https://mochajs.org/

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
The docker image is described in docker/Dockerfile and based on Jenkins Community Docker image.
The image will run Jenkins, with Node.js and NPM installed. It will also have the jenkins plugins specified in jenkins-plugins.txt file installed and the jenkins jobs restored from there configuration. This should require minimum configuration effort of Jenkins to get the CD pipeline up and running.

* Build the image (without cache) from folder _docker/_:
```
docker build --no-cache -t jenkins-nodejs .
```

* Run the image (detached mode and automatic restart):
```
docker run -d --restart always -p 8080:8080 -p 50000:50000 jenkins-nodejs
```

## Configure jenkins
* Install plugins required by the pipeline:
..* Pipeline Plugin
..* Git Plugin
..* GitHub
..* SSH Agent

* Configure credentials for connecting to git repository (e.g. ssh) with ID GIT_CREDENTIALS.
* Configure global environment variables GIT_USERNAME and GIT_EMAIL that will be used for setting up the Git repository.

### Tips for Jenkins
* List Jenkins Plugins using a script from _http://{jenkins-host}/script_
```
Jenkins.instance.pluginManager.plugins.each{
  plugin ->
    println ("${plugin.getShortName()}:${plugin.getVersion()}")
}
```
> Store the list of plugins to docker/jenkins-plugins.txt so that these plugins get installed when creating the docker image.

* Access Job Configuration from _http://{jenkins-host}/{job-name}/config.xml_
> Copy the configuration files to docker/{job-name}-config.xml so that the jobs are restored when creating the docker image.
