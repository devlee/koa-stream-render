"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream = require("stream");
const defaultOptions = {
    ctxType: 'html',
};
function getStreamRender(ctx, options) {
    const pass = new stream.PassThrough();
    return ((str) => {
        const readStream = new stream.Readable({ read() { } });
        readStream.push(str);
        readStream.push(null);
        ctx.type = options.ctxType;
        ctx.body = readStream.pipe(pass);
    }).bind(pass);
}
exports.StreamRender = (options) => {
    return (ctx, next) => {
        if (!ctx.render) {
            ctx.render = getStreamRender(ctx, Object.assign({}, defaultOptions, options || {}));
        }
        next();
    };
};
//# sourceMappingURL=index.js.map