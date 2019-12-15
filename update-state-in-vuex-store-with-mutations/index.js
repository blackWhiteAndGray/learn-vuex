Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementBy(state, payload) {
      state.count += payload.amount;
    }
  }
});

new Vue({
  el: "#app",
  store,
  data: {},
  computed: Vuex.mapState(["count"]),
  methods: Vuex.mapMutations(["increment", "incrementBy"])
});

// store.commit({
//   type: "incrementBy",
//   amount: 40
// });
// store.commit("incrementBy", { amount: 29 });
// console.log(store.state.count);

// Vue.set(obj, "new prop", 123);
// state.obj = { ...state.obj, newProp: 123 };
