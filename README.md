This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It provides an example of how to use serve a React app with Docker.

### Building an image
```bash
$ docker build -t mseymour/myapp .
```

### Running a container
```bash
$ docker run -p 8000:8000 -ti mseymour/myapp
```
