import * as Koa from 'koa';
interface RenderContext extends Koa.Context {
    render: (str: string) => void;
}
export default RenderContext;
