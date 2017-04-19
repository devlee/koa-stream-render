"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const request = require("supertest");
const dist_1 = require("../dist");
const app = new Koa();
app.use(dist_1.default());
app.use((ctx) => { ctx.render('test'); });
let server;
describe('render test', () => {
    before(() => {
        server = app.listen(3000);
    });
    after(() => {
        server.close();
    });
    it('should succeed', function (done) {
        request(server)
            .get('/')
            .expect(200, 'test', done);
    });
});
//# sourceMappingURL=index.js.map