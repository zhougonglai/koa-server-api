const Koa = require('koa');
const json = require('koa-json');
const router = require('./src/routers');
const {
  errorLog,
  methodLog,
  timeLog
} = require('./src/utils/log');
const app = module.exports = new Koa();

app.keys = ['hello', 'world!'];
app
  .use(json())
  .on('error', errorLog)
  .use(methodLog)
  .use(timeLog)
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
