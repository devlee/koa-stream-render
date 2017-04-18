[![Travis CI Status](https://api.travis-ci.org/devlee/koa-stream-render.svg?branch=master)](https://travis-ci.org/devlee/koa-stream-render) [![codecov.io](https://codecov.io/github/devlee/koa-stream-render/coverage.svg?branch=master)](https://codecov.io/github/devlee/koa-stream-render?branch=master)
## Installation

```
$ npm install koa@next @types/koa devlee/koa-stream-render --save
```

## Introduction

This is a middleware for kao2 stream-render.

## Example

```typescript
import * as Koa from 'koa';
import KoaStreamRender from 'koa-stream-render';

const app = new Koa();

app.use(KoaStreamRender({
  ctxType: 'html', // default
}));

app.use((ctx, next) => {
  ctx.render('hello world');
  next();
});

app.listen(3000);
```
