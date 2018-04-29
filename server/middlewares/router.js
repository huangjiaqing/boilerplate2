import Router from 'koa-router';

const r = new Router();

r.get('/api', async (ctx) => {
  ctx.body = {
    msg: 'yohu!'
  };
});

export const router = (app) => {
  app.use(r.routes());
};