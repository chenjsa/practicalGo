/**
 * Created by chenjunsheng on 2017/2/8.
 */
'use strict';

const qs = require('qs');
const mockjs = require('mockjs');

export default {

  'POST /api/article': function (req, res) {

    console.log(req.query);

    setTimeout(function () {
      res.json({
        success: true,
        msg: '成功'
      });
    }, 100);

  },

  'GET /api/article': function (req, res) {

    console.log(req.query);

    const { _page, _limit } = qs.parse(req.query);
    const startId = (_page - 1) * _limit + 1;

    const data = mockjs.mock({
      'articles|100': [{
        'id|+1': startId,
        title: '@cname',
        slug: '',
        text: '@region',
      }],
      page: {
        total: 100,
        current: parseInt(_page),
      }
    });

    res.json({
      success: true,
      data: {
        articles: data.articles,
        page: data.page
      },
      msg: "成功"
    });

  },

};
