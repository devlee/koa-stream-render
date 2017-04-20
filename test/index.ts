import * as Koa from 'koa';
import * as Chai from 'chai';
import * as request from 'supertest';

import { StreamRender, RenderContext } from '../dist/index';

const app = new Koa();
app.use(StreamRender());
app.use((ctx: RenderContext) => { ctx.render('test'); })

let server;
describe('render test', () => {
  before(() => {
    server = app.listen(3000)
  })
  after(() => {
    server.close();
  })
  it('should succeed', function (done) {
    request(server)
      .get('/')
      .expect(200, 'test', done);
  });
})



