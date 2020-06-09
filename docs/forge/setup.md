# Project setup

## Pontsun
The Forge project is designed to work with Pontsun, a local development environment maintained by Liip. Before you can use Forge you have to make sure you have Pontsun configured and running.
How to get started with Pontsun: https://github.com/liip/pontsun

## Forge
Once you have Ponstun up and running you can start the Forge docker containers. 
1. Make a copy of the `.env.dist` file and name it `.env`.
2. Adapt the environment variables to your needs
3. Run `INITIAL=1 docker-compose up` (if you use the fish shell you can run `set -x INITIAL 1; docker-compose up`)

Note the `INITIAL` flag should not be set for subsequent container starts unless you want to reset the database.

After starting the containers you should have the following services avalable:
- Django backend application: https://backend.docker.test
- PgAdmin GUI Tool: https://pgadmin.docker.test
 
## Add git config                                                                
```                                                                             
mkdir -p .git/hooks/ && ln -f templates/git/hooks/commit-msg .git/hooks/commit-msg
``` 
