import { fakeAccountLogin } from '../services/login';

export default {
  namespace: 'user',
  state: {
    icon: 'Welcome to zzh Bolg',
    name: '',
    isLogin: false,
    userid: '',
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if (response.status == 1) {
        delete response.status;
        yield put({
          type: 'saveUser',
          payload: {
            ...response,
            isLogin: true,
          },
        });
      }
    },
  },
  reducers: {
    changeTitle(state, { payload }) {
      return {
        ...state,
        title: payload,
      };
    },

    saveUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
};

//export default UserModel

// export default {
//   namespace: 'pageModel',
//   state: {
//     title: 'Welcome to Wise.Wrong\'s Bolg',
//     name: 'wise'
//   },
//   effects: {

//   },
//   reducers: {
//     changeTitle(state, { payload }) {
//       return {
//         ...state,
//         title: payload
//       };
//     },
//   },
// };
