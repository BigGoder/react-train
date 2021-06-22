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

    *subCart({ payload }, { call, put }) {
      yield put({
        type: 'sub',
        payload: payload,
      });
    },
  },
  reducers: {
    updateCart(state, { payload }) {
      let goods = state.goods;
      let isHas = false;
      for (let i = 0; i < goods.length; i++) {
        let good = goods[i];
        if (good.id == payload.id) {
          isHas = true;
          good.num++;
          break;
        }
      }
      if (!isHas) {
        payload.num = 1;
        goods.push(payload);
      }
      let newState = { ...state };
      newState.goods = goods;
      console.log('newState', newState);

      return newState;
    },

    sub(state, { payload }) {
      let goods = state.goods;
      for (let i = 0; i < goods.length; i++) {
        let good = goods[i];
        if (good.id == payload.id) {
          if (good.num > 1) good.num--;
          break;
        }
      }
      return {
        ...state,
        goods: goods,
      };
    },
  },
};
