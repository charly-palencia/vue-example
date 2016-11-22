# vue-app

> Test for vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
yarn run build

# run unit tests
yarn run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

##Test Environment Issues

### Import babel-polyfill for unit test 

#### Description
When i run my unit test i receive this error:

`Error: [vuex] vuex requires a Promise polyfill in this browser.`

#### Solution

install `babelpolyfill`

`yarn add babel-polyfill -D`

add polyfill to unit folder

`test/unit/index.js`

```
import 'babel-polyfill';// eslint-disable-line import/no-extraneous-dependencies
// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind'); // eslint-disable-line import/no-extraneous-dependencies
```
