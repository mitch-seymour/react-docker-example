An example of how to serve a React app (built with [Create React App](https://github.com/facebookincubator/create-react-app)) using Docker.

### Building an image
```bash
$ docker build -t mseymour/myapp .
```

### Running a container
```bash
$ docker run -p 8000:8000 -ti mseymour/myapp
```

You should see the following output.

```bash
┌────────────────────────────────────────────────┐
│                                                │
│   Serving!                                     │
│                                                │
│   - Local:            http://localhost:8000    │
│   - On Your Network:  http://172.17.0.2:8000   │
│                                                │
└────────────────────────────────────────────────┘
```
