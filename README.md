[![Travis CI Status](https://travis-ci.org/devlee/koa-stream-render.svg?branch=master)](https://travis-ci.org/devlee/koa-stream-render) [![codecov.io](https://codecov.io/github/devlee/koa-stream-render/coverage.svg?branch=master)](https://codecov.io/github/devlee/koa-stream-render?branch=master)

## Installation

```
$ npm install koa@next @types/koa koa-stream-render --save
```

## Introduction

This is a middleware for kao2 stream-render.

## Example

```typescript
import * as Koa from 'koa';
import { StreamRender, RenderContext } from 'koa-stream-render';

const app = new Koa();

app.use(StreamRender({
  ctxType: 'html', // default
}));

app.use((ctx: RenderContext, next: () => Promise<any>) => {
  ctx.render('hello world');
  next();
});

app.listen(3000);
```
