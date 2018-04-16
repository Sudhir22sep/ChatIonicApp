# ChatIonicApp
An ionic chat application using the socket.io


![](https://s3-us-west-2.amazonaws.com/app-screenshot/socket-chat.gif)

It is obvious that we need npm and nodejs with the [ionic](https://ionicframework.com/docs/intro/installation/) installed on our machine to run this app.

# Building our Node Chat Server
This tutorial starts with the actual backend for our app.
It’s good to have some Node skills so you could potentially build your own little backend from time to time.
First of all we create a new folder and inside an NPM package file,
where we also install Express as a minimal framework for our backend:


```bash
$ mkdir SocketServer && cd SocketServer
```

```bash
$ npm init
```

```bash
$ npm install --save express socket.io
```

After creating and installing you should have a package.json inside that file.
Make sure inside that file the main file is set to index.js so the scripts knows which file to start!

```bash
{
  "name": "socket-server",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "express": "^4.15.3",
    "socket.io": "^2.0.3"
  }
  
  ```
  # Git clone this repo or download
  ```bash
  $ git clone path  
  ```
  download and install npm to it and run first the backend server and later run this repo app then you can access the chat application.
  
  Enjoy, have a nice day...
