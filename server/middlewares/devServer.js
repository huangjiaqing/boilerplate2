import webpack from 'webpack';
import dev from 'webpack-dev-middleware';
import hot from 'webpack-hot-middleware';
import stream from 'stream';
import config from '../../config/webpack/webpack.dev';

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
            ctx.status = status;
            ctx.set(headers);
          }
      }, next);
  };
};

export const devServer = (app) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(devMiddleware(compiler, {
      publicPath: config.output.publicPath
    }));
    app.use(hotMiddleware(compiler));
  }
};
