import * as Koa from 'koa';
export interface StreamRenderContext extends Koa.Context {
    streamRender: (str: string) => void;
}
export declare const StreamRender: (options?: any) => (ctx: StreamRenderContext, next: () => Promise<any>) => void;
