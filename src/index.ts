import * as stream from 'stream';
import * as Koa from 'koa';

const defaultOptions = {
  ctxType: 'html',
};

function getStreamRender(ctx: Koa.Context, options: any): () => void {
  const pass = new stream.PassThrough();
  return ((str: string) => {
    const readStream = new stream.Readable({ read() {} });
    readStream.push(str);
    readStream.push(null);
    ctx.type = options.ctxType;
    ctx.body = readStream.pipe(pass);
  }).bind(pass);
}

export interface StreamRenderContext extends Koa.Context {
  streamRender: (str: string) => void
}

export const StreamRender = (options?: any) => {
  return (ctx: StreamRenderContext, next: () => Promise<any>): void => {
    if (!ctx.streamRender) {
      ctx.streamRender = getStreamRender(ctx, Object.assign({}, defaultOptions, options || {}));
    }

    next();
  }
};
