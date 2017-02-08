import { message } from 'antd';
import { login, logout } from '../services/layout';

export default {

  namespace: 'layout',

  state: {
    account: 'admin',
    fold: true,
    logining: false,
    logined: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      if (localStorage.getItem('fold') === 'false') {
        dispatch({
          type: 'foldSuccess',
          payload: {
            fold: false,
          },
        });
      }
      if (localStorage.getItem('logined')) {
        const account = localStorage.getItem('account');
        dispatch({
          type: 'loginSuccess',
          payload: {
            account,
          },
        });
      }
    },
  },

  effects: {
    *fold({ payload }, { call, put }) {
      yield put({ type: 'foldSuccess', payload });
    },
    *login({ payload }, { call, put }) {
      yield put({ type: 'showLogining' });
      const { data } = yield call(login, payload);
      if (!data) {
        message.error('服务器异常！');
        yield put({ type: 'hideLogining' });
        return;
      }
      if (data.success) {
        message.success(data.msg);
        localStorage.setItem('logined', true);
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('account', data.data.account);
        yield put({ type: 'hideLogining' });
        yield put({ type: 'loginSuccess', payload: { account: data.data.account } });
      } else {
        message.error(data.msg);
        yield put({ type: 'hideLogining' });
      }
    },
    *logout({ payload }, { call, put }) {
      const { data } = yield call(logout, payload);
      if (!data) {
        message.error('服务器异常！');
        yield put({ type: 'hideLogining' });
        return;
      }
      if (data.success) {
        localStorage.removeItem('logined');
        localStorage.removeItem('token');
        localStorage.removeItem('account');
        message.success('注销成功！');
        yield put({ type: 'logoutSuccess' });
      } else {
        message.error(data.msg);
        yield put({ type: 'hideLogining' });
      }
    },
  },

  reducers: {
    foldSuccess(state, action) {
      localStorage.setItem('fold', action.payload.fold);
      return { ...state, ...action.payload };
    },
    showLogining(state) {
      return { ...state, logining: true };
    },
    hideLogining(state) {
      return { ...state, logining: false };
    },
    loginSuccess(state, action) {
      return { ...state, ...action.payload, logined: true };
    },
    logoutSuccess(state) {
      return { ...state, logined: false };
    },
  },

};
