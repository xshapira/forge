# Forge

[![Frontend Build Status](https://travis-ci.org/liip-amboss/forge.svg?branch=master)](https://travis-ci.org/liip-amboss/forge)<br />
Styleguide: https://amboss-forge.netlify.com [![Netlify Status](https://api.netlify.com/api/v1/badges/6d9b0ae6-809a-4bc3-b5af-ad3bdd80d6f4/deploy-status)](https://app.netlify.com/sites/amboss-forge/deploys)<br />
Docs: https://amboss-forge-docs.netlify.com [![Netlify Status](https://api.netlify.com/api/v1/badges/a37f08ab-7987-400b-8005-6f4728dd8976/deploy-status)](https://app.netlify.com/sites/amboss-forge-docs/deploys)<br />


## Project setup
The Forge project is designed to work with Pontsun, a local development environment maintained by Liip. Before you can use Forge you have to make sure you have Pontsun configured and running.
How to get started with Pontsun: https://github.com/liip/pontsun

Once you have Ponstun up and running you can start the Forge docker containers. 
1. Make a copy of the `config/.env.dist` file and name it `config/.env`.
2. Adapt the environment variables to your needs
3. Run `INITIAL=1 docker-compose up` (if you use the fish shell you can run `set -x INITIAL 1; docker-compose up`)

Note the `INITIAL` flag should not be set for subsequent container starts unless you want to reset the database.

After starting the containers you should have the following services avalable:
- Django backend application: https://backend.docker.test
- PgAdmin GUI Tool: https://pgadmin.docker.test

### Add remote interpreter to pyCharm
To add the virtualenv from inside the `backend` docker container as a remote interpreter in pyCharm you can follow this guide:
https://www.jetbrains.com/help/pycharm/using-docker-compose-as-a-remote-interpreter.html#docker-compose-remote
 
### Add git config                                                                
```                                                                             
mkdir -p .git/hooks/ && ln -f templates/git/hooks/commit-msg .git/hooks/commit-msg
``` 

### Use the Makefile to run docker-compose commands
To avoid some typing there is a Makefile that includes the most frequent commands to control the application.
- `make start` will start your docker containers
- `make stop` will stop your docker containers
- `make status` will show you the current status of your containers
- `make restart` will run `make stop` and `make start`
- `make clean` will remove your docker containers and all the `*.pyc` files
- `make logs` will show you the tail of all the container logs
- `make migrate` will run migrations inside your `backend` django container
- `make superuser` will create a superuser inside your `backend` django container
