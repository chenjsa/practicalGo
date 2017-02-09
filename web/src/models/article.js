import { query } from '../services/article';

export default {
  namespace: 'article',
  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/article') {
          dispatch({
            type: 'query',
            payload: {},
          });
        }
      });
    },
  },
  effects: {
    *query({ payload: { page = 1 } }, { call, put }) {
      yield put({ type: 'showLoading' });
      const { data } = yield call(query, page);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data.articles,
            total: data.data.page.total,
            current: data.data.page.current,
          },
        });
      }
    },
    // *create(){},
    // *'delete'(){},
    // *update(){},
  },
  reducers: {
    // 控制加载状态的 reducer
    showLoading(state) {
      return { ...state, loading: true };
    },
    // 查询
    querySuccess(state, action) {
      return { ...state, ...action.payload, loading: false };
    },
    // createSuccess(){},
    // deleteSuccess(){},
    // updateSuccess(){},
  },
};
