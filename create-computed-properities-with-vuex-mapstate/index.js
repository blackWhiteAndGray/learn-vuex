Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 3
  }
});

new Vue({
  el: "#app",
  store,
  data() {
    return {
      localCount: 4
    };
  },
  //   computed: {
  //     count() {
  //       return this.$store.state.count;
  //     }
  //   },
  computed: Vuex.mapState(["count"])
});

// {
//     count: state => state.count,
//     countAlias: "count",
//     countPlusLocalState(state) {
//       return state.count + this.localCount;
//     }
//   }
