Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  }
});

new Vue({
  el: "#app",
  store,
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
});
