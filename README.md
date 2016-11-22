# vue-app

Poke Simple website as [vue.js](https://vuejs.org/)  testing 

The project was created with a `webpack` ([vue-loader](http://vuejs.github.io/vue-loader)) configuration and using the `ESlint AirBnb` ( [Details Here](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))
# Checklist

- [x] Install Vue.js using the [vue-cli](https://github.com/vuejs/vue-cli)
- [x] Install [Vue chrome extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [x] Create some components
- [x] Include routes with [vue-route](http://router.vuejs.org/en/)
- [x] Implement Redux with [vuex](http://vuex.vuejs.org/en)
- [ ] Create some unit and E2E tests
- [ ] Add more complexity

Live Demo [Here](https://charly-palencia.github.io/vue-example/#/)

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

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
