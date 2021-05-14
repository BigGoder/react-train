export default {
  namespace: 'cart',
  state: {
    goods: [],
  },
  effects: {
    *addCart({ payload }, { call, put }) {
      yield put({
        type: 'updateCart',
        payload: payload,
      });
    },
  },
  reducers: {
    updateCart(state, { payload }) {
      console.log(payload);
      return {
        ...state,
        goods: [...state.goods, payload],
      };
    },
  },
};
