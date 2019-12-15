Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: "Hello Vuex"
  },
  mutations: {
    updateMessage(state, message) {
      state.message = message;
    }
  }
});

new Vue({
  el: "#app",
  store,
  data: {},
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      }
    }
  },
  methods: {
    updateMessage(e) {
      this.$store.commit("updateMessage", e.target.value);
    }
  }
});
