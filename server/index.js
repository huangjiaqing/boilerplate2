import R from 'ramda';
import Koa from 'koa';
// import Router from 'koa-router';
// import logger from 'koa-logger';
// import views from 'koa-views';
// import serve from 'koa-static';
import { resolve } from 'path';

const MIDDLEWARES = ['common', 'router'];

const useMiddleware = (app) => {
  R.map(
    R.compose(
      R.forEachObjIndexed(
        initWith => initWith(app)
      ),
      require,
      file => resolve(__dirname, `./middlewares/${file}`)
    )
  )(MIDDLEWARES);
};

(async () => {

  const app = new Koa();

  useMiddleware(app);

  if (R.equals(process.env.NODE_ENV, 'development')) {
    require('../tools/dev');
  }

  app.listen(4455, () => {
    console.log('\n==> 🌎  Server listen on 4455 ..');
  });

})(); 

// const r = (path='') => resolve(__dirname, `../${path}`);

// const app = new Koa();
// const router = new Router();

// router.get('/api', async (ctx, next) => {
//   ctx.body = {
//     msg: '你好呀'
//   };
// });

// app.use(logger());

// app.use(router.routes());

// app.use(serve(r('dist')));

// app.use(views(r('dist'), {
//   extension: 'html'
// }));

// app.use(async (ctx, next) => {
//   await ctx.render('index.html')
//   await next();
// });

// module.exports = app;