# Forge documentation

Forge is a easy to use combination of the most modern frameworks to create custom 
web-applications. The frontend is based on vue.js and tailwind while the backend 
is based on django. All components run in docker containers, so there is no need 
to install anything else than docker to use forge.

## Project setup
### Pontsun
The Forge project is designed to work with Pontsun, a local development environment maintained by Liip. Before you can use Forge you have to make sure you have Pontsun configured and running.
How to get started with Pontsun: https://github.com/liip/pontsun

### Forge
Once you have Ponstun up and running you can start the Forge docker containers. 
1. Make a copy of the `.env.dist` file and name it `.env`.
2. Adapt the environment variables to your needs
3. Run `INITIAL=1 docker-compose up` (if you use the fish shell you can run `set -x INITIAL 1; docker-compose up`)

Note the `INITIAL` flag should not be set for subsequent container starts unless you want to reset the database.

After starting the containers you should have the following services avalable:
- Django backend application: https://api.forge.docker.test
- PgAdmin GUI Tool: https://pgadmin.forge.docker.test
 
### Add git config                                                                
```                                                                             
mkdir -p .git/hooks/ && ln -f templates/git/hooks/commit-msg .git/hooks/commit-msg
``` 
## Use the Makefile to run docker-compose commands
To avoid some typing there is a Makefile that includes the most frequent 
commands to control the application.

- `make start` will start your docker containers
- `make stop` will stop your docker containers
- `make status` will show you the current status of your containers
- `make restart` will run `make stop` and `make start`
- `make clean` will remove your docker containers and all the `*.pyc` files
- `make logs` will show you the tail of all the container logs
- `make migrate` will run migrations inside your `backend` django container
- `make superuser` will create a superuser inside your `backend` django container
