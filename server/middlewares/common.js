import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';

export const addParser = (app) => {
  app.use(bodyparser());
};

export const addLogger = (app) => {
  app.use(logger());
};