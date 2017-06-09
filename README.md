An example of how to serve a React app (built with [Create React App](https://github.com/facebookincubator/create-react-app)) using Docker.

### Building an image
```bash
$ docker build -t mseymour/myapp .
```

### Running a container
```bash
$ docker run -p 8000:8000 -ti mseymour/myapp
```
