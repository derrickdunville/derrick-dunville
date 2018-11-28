# React-Redux-React Router Boilerplate

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

* React 16
* Redux
* Webpack 3
* Babel 6
* CSS modules
* React Router
* Connected Router (react router + redux)
* Redux DevTools
* Eslint
* Jest & Enzyme
* Express

And optional (just install missing dependencies):

* Sass/SCSS - `npm i node-sass sass-loader --save`

## Running
Application has very few dependencies, so it’s most probably very easy to understand when you scan through the code, but there is at least few steps you should know

### Start front-end React application
Application is divided into two parts. One is pure React front-end, powered by `webpack-dev-server` in development mode.

To start this application run command below and open your app on `http://localhost:8080`

```javascript
npm start
```

To test your application, run

* `npm run test` - single run - good for CI or precook
* `npm run test:watch` - watches for changes, good for development


## Production

Running `npm run build` will create production ready application into your `dist` folder. All you need to do is make this `dist` folder publicly available. You can use `surge.sh` as described bellow to do so.

Included Express server is preconfigured to serve `/dist` folder. All you need to do is run `npm run server` on your production server. The same is happening automatically, when you deploy to Heroku (It executes this command from `Procfile`

This is also good to run on your local computer to ensure, that your application is running as it should.

### Heroku

Heroku works out of the box, just use "deploy to heroku" button


## Tools
This project works with ReduxDevtool extension for chrome. [Read more](https://github.com/zalmoxisus/redux-devtools-extension)

## License
MIT
