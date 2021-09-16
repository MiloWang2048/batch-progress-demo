# Batch-ops-demo

This project demos a component `BatchProgress` which can track states of a group of promises.

Online demo site: https://demo-1258344804.cos-website.ap-nanjing.myqcloud.com

> This project is available for mobile devices.

## Getting started

```sh
yarn
yarn serve
```

## Structure

You may want to read [The component doc](src/components/batch-progress/README.md) for `BatchProgress`.

```
src
│  App.vue: Home page.
│  main.js: Bundle entry.
│
├─components
│  └─batch-progress
│          BatchProgress.vue: The target component.
│          PromiseState.js: An internal helper class.
│          README.md: Component doc.
│
├─lib
│      sdk.js: Exports the mock api.
│      utils.js: Exports a helper function.
│
└─plugins
        vuetify.js: Configurations for vuetify.
```

## Dependencies

- Vue
- Vuetify
- FontAwesome
