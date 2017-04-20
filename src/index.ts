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

export interface RenderContext extends Koa.Context {
  render: (str: string) => void
}

export const StreamRender = (options?: any) => {
  return (ctx: RenderContext, next: () => Promise<any>): void => {
    if (!ctx.render) {
      ctx.render = getStreamRender(ctx, Object.assign({}, defaultOptions, options || {}));
    }

    next();
  }
};
