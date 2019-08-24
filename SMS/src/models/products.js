export default {
  namespace: 'products',
  state: {
    islogin: false
  },
  reducers: {
    'login'(state, {
      payload: val
    }) {
      return {
        islogin: val
      }
    },
  }
}
