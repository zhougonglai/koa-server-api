const Router = require('koa-router');
const Mock = require('mockjs');
const router = new Router();

router
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
