import * as Koa from 'koa';
import * as Chai from 'chai';
import * as request from 'supertest';

import KoaStreamRender from '../dist';
import RenderContex from '../dist/interface';

const app = new Koa();
app.use(KoaStreamRender());
app.use((ctx: RenderContex) => { ctx.render('test'); })

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



