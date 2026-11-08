# Backend
> [!NOTE]
> This is a more technical description than for the frontend. You most likely don't need to worry about *most* things here

## Starting
You can start the backend via `docker`.
The following command will give you a running backend, but ideally you want to use the provided `compose.yml` file in the frontend repo (see [here](./frontend)).
```bash
docker run -p 8080:8080 --rm ghcr.io/studyphoenix/backend
```


## API docs
API documentation is available at `<url>/swagger/index.html`, for local development typically at [http://localhost:8080/swagger/index.html](http://localhost:8080/swagger/index.html)


## Working on the backend
See the `README` in the backend repo. It describes how to run the test suite and more.
If you can't figure out how to run it from that, don't waste your time on it.
