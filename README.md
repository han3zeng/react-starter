# react_starter


## How to use it
* Development (view the tool)
    * run
        1. `npm i`
        2. `npm run dev`
        3. browse `localhost:3001`
    * test
        1. `npm i`
        2. `npm run test`

* Production (build and release)
    * build and publish to npm cloud server
        1. `npm i`
        2. `npm run build`
        3. `npm run publish:customized`


## Things I should Include
* package
    * [ ] react
    * [ ] react router
    * [ ] webpack
    * [ ] typescript
    * [ ] styled-component

* server
    * [ ] express

* code style
    * [ ] eslint
    * [ ] prettier

* api || state management
    * [ ] graphql + apollo

* testing
    * [x] Jest + react testing library
    * [ ] cypress
* style
    * [ ] storybook

* config (prod and dev)
    * extract common setting from both prod and dev to base config
        * [webpack-merge](https://github.com/survivejs/webpack-merge)

## Implementation
1. [ ] Server-Side-Rendering
2. [ ] hot module reload
    * when error occurs
3. [ ] PWA
4. [ ] AMP
5. [ ] code splitting + tree shaking
6. [X] use [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)+ exress to replace webpack-dev-server
    * for consistent future SSR in both dev and prod mode

## Note
* you may need [es6 promise](https://github.com/stefanpenner/es6-promise) + [promise-polyfill](https://github.com/taylorhakes/promise-polyfill) for older browser.
    * import() calls use promises internally. If you use import() with older browsers (e.g., IE 11), remember to shim Promise using a polyfill such as es6-promise or promise-polyfill.

## References
* [react official](https://reactjs.org/docs/create-a-new-react-app.html)
