import { fakeAccountLogin } from '../services/login';

export default {
  namespace: 'user',
  state: {
    title: 'Welcome to zzh Bolg',
    name: 'wise',
    isLogin: false,
  },
  effects: {
    *login({ payload }, { call }) {
      const response = yield call(fakeAccountLogin, payload);
    },
  },
  reducers: {
    changeTitle(state, { payload }) {
      return {
        ...state,
        title: payload,
      };
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
