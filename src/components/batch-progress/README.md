# batch-progress

## Basic Usage

It's just a stateless component:

```vue

<template>
  <batch-progress :batch-states="states" :tooltip-mapper="myTooltipMapper" @state-clicked="alert"/>
</template>

<script>
import PromiseState from "./PromiseState";

export default {
  // let's assume range is just like the range function in python.
  data: () => ({
    states: [...range(10)].map(i => new PromiseState(Promise.resolve({message: i})))
  }),
  methods: {
    myTooltipMapper: state => state.data ? state.data.message : 'still on pending.'
  }
}
</script>
```

And you will see two rows of "indicators", which will spin when promises still pending.

> Note that the only argument of tooltip mapper is a `PromiseState` object.

## Props

1. `batchStates`: An array of `PromiseState`.
2. `columns`: Column count for indicator grid.
3. `cellSize`: Size of an indicator.
4. `gridGap`: Gap size of the indicator grid.
5. `tooltipMapper`: A mapper to extract message from the state. The message will be display as a tooltip when your mouse
   hovering on an indicator.

## Events

1. `click`: Triggered when an indicator was clicked. Event payload will be the corresponding `PromiseState`
   object.

## Internal classes

### PromiseState

A promise state captures the *state* of a `promise` literally.

Usage:

```js
const promise = Promise.resolve({message: 1});
const state = new PromiseState(promise);
```

Firstly, when the promise is still pending, the state will be likely:

```js
const state = {
    value: "pending",
    data: null,
    promise: {} // the promise reference
}
```

If the promise resolved/rejected, it will be likely:

```js
const state = {
    value: "resolved",
    data: {
        // the resolved/rejected value
        message: 1
    },
    promise: {}
}
```


