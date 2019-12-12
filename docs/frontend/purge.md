# Purge
Forge uses [purge](https://www.purgecss.com/) to optimize css sizes on production. Be aware that purge will remove any styling on any libraries you use that arent whitelisted, in order to add your selectors to the whitelist see the postcss.config.js and push your selectors to the array.
