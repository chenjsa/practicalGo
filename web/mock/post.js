/**
 * Created by chenjunsheng on 2017/2/8.
 */
'use strict';

export default {

  'POST /api/post': function (req, res) {

    console.log(req.query);

    if (req.query.account === 'admin' && req.query.password === 'admin'){
      setTimeout(function () {
        res.json({
          success: true,
          data: {
            account: req.query.account,
            token:'asdiwehjcuwoew1244bf8asf32bu9x3',
          },
          msg: '登录成功'
        });
      }, 500);
    }
    if(!req.query || req.query.account !== 'admin' || req.query.password !== 'admin') {
      setTimeout(function () {
        res.json({
          success: false,
          msg: '登录失败'
        });
      }, 500);
    }


  },

  'GET /api/post': function (req, res) {

    console.log(req.query);

    setTimeout(function () {
      res.json({
        success: true,
        msg: '注销成功'
      });
    }, 100);

  },

};
