const Router = require('koa-router');
const Mock = require('mockjs');
const router = new Router();

router
  .get('home', '/' , async (ctx, next) => {
    ctx.body = {
      state: true,
      message: 'sucess',
      data: "success",
      code: 200
    }
    await next();
  })
  .get('/lists', async (ctx, next) => {
      ctx.body = {
        ...ctx.body,
        data: Mock.mock({
          'list|1-10': [{
            'id|+1': 1
          }]
        })
      }
      await next();
  });

module.exports = router;
