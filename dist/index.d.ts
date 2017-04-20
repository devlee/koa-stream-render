import * as Koa from 'koa';
export interface RenderContext extends Koa.Context {
    render: (str: string) => void;
}
export declare const StreamRender: (options?: any) => (ctx: RenderContext, next: () => Promise<any>) => void;
