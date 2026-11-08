# Docker
## Important Commands
All of our tooling will be available in Docker containers. This means that, unless you want to install `node`, `go`, a DB and possibly other tools locally,
you should get familiar with the basics:
- Running a container: `docker run <image name>`. MANY options, such as `-v` for mounts, `-p` for ports, `--name` for name, `--rm` to remove it when it exits, `-it` to attach, etc
- Updating / pulling an image: `docker pull <image name>`
- View running containers: `docker ps` (add `-a` to also show stopped containers)
- View images: `docker image ls` (add `-a` to also show untagged images (i.e. old ones in most cases))
- Stop container: `docker stop <container name or hash>`
- Start existing container: `docker start <container name or hash>`
- Delete container: `docker rm <container name or hash>`
- Delete image: `docker rmi <image name or hash>`

## Docker compose
To make your life a bit easier, I will be providing a `docker-compose.yml` file.

In that case, instead of running all the docker commands above on a regular basis (which will be quite a bit longer than what you can see there, but I'll also provide those),
you can rely on running `docker compose up -d` in the folder where that file is located to start everything you need and `docker compose down` to clean up after the fact.
To update the images, run `docker compose pull` to update the images.

To periodically clean up dangling images, run
```bash
docker image prune
```
