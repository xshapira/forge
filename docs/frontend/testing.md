# Testing

So far we have the setup and knowledge to run unit tests. E2E tests as in
Nightwatch aren't set up yet.

The unit tests can be used to either test components or stuff like the store,
services etc.

## Running tests

In order to run tests, simply invoke `npm run test`.

All the tests in `tests/` are collected and run. To only run one test, you can
use the option `-d` and provide a search string.

## Resources

* [Jest](https://jestjs.io/) is used as the general testing framework
* [vue-test-utils](https://vue-test-utils.vuejs.org/) provides very helpful
   tools related to testing vue components
* [Faker.js](https://github.com/marak/Faker.js/) Faker js helps generate
   massive amounts of data
  