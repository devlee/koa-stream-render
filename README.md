[![Travis CI Status](https://travis-ci.org/devlee/koa-stream-render.svg?branch=master)](https://travis-ci.org/devlee/koa-stream-render) [![codecov.io](https://codecov.io/github/devlee/koa-stream-render/coverage.svg?branch=master)](https://codecov.io/github/devlee/koa-stream-render?branch=master)

## Installation

```
$ npm install koa@next @types/koa koa-stream-render --save
```

## Introduction

This is a middleware for kao2 stream-render.

## Broken Update

Use 'ctx.streamRender'(v0.2.0) instead of 'ctx.render'(v0.1.0)

Use 'StreamRenderContext'(v0.2.0) instead of 'RenderContext'(v0.1.0)

## Example

```typescript
import * as Koa from 'koa';
import { StreamRender, StreamRenderContext } from 'koa-stream-render';

const app = new Koa();

app.use(StreamRender({
  ctxType: 'html', // default
}));

app.use((ctx: StreamRenderContext, next: () => Promise<any>) => {
  ctx.streamRender('hello world');
  next();
});

app.listen(3000);
```
