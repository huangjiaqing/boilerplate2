import Koa from 'koa';
import webpack from 'webpack';
import stream from 'stream';
import dev from 'webpack-dev-middleware';
import hot from 'webpack-hot-middleware';
import config from '../config/webpack/webpack.dev';
import fallback from './middlewares/historyApiFallback';

const app = new Koa();
const compiler = webpack(config);

const devMiddleware = (compiler, opts) => {
  const middleware = dev(compiler, opts);
  return async (ctx, next) => {
    await middleware(ctx.req, {
      end: (content) => {
          ctx.body = content
      },
      setHeader: (name, value) => {
        ctx.set(name, value)
      }
    }, next);
  };
};

const hotMiddleware = (compiler, opts) => {
  const middleware = hot(compiler, opts);
  return async (ctx, next) => {
      let pt = new stream.PassThrough()
      ctx.body = pt;
      await middleware(ctx.req, {
          write: pt.write.bind(pt),
          writeHead: (status, headers) => {
            ctx.status = status
            ctx.set(headers)
          }
      }, next);
  };
};

/**
 * 开发模式下，如何解决react-router 和 koa-router的冲突 ？
 * 1. 与前端约定，匹配 /api 返回 json 数据。
 * 2. 前后端两个端口，需解决跨域问题。
 */
app.use(fallback({
  // verbose: true,
  rewrites: [
    // {
    //   from: '/api',
    //   to: '/api'
    // }
  ],
}));

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.listen(3000, () => {
  console.log('前端监听中');
})