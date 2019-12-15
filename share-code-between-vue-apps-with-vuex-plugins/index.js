Vue.use(Vuex);

// const logger = createLogger({
//   collapsed: false,
//   filter(mutation, stateBefore, stateAfter) {
//     return mutation.type !== "aBlacklistedMutation";
//   },
//   transformer(state) {
//     return state.subTree;
//   },
//   mutationTransformer(mutation) {
//     return mutation.type;
//   },
//   logger: console
// });

const myPlugin = store => {
  store.subscribe((mutation, state) => {});
};

function createWebSocketPlugin(socket) {
  return store => {
    socket.on("data", data => {
      store.commit("receiveData", data);
    });
    store.subscribe(mutation => {
      if (mutation.type === "UPDATE_DATA") {
        socket.emit("update", mutation.payload);
      }
    });
  };
}

// const myPluginWithSnapshot = store => {
//     let prevState = _.cloneDeep(store.state)
//     store.subscribe((mutation, state) => {
//         let nextState = _.cloneDeep(state)

//         // Compare prevState to nextState

//         // Save state for next mutation
//         prevState = nextState
//     })
// }

const store = new Vuex.Store({
  plugins: [myPlugin()]
});

new Vue({
  el: "#app",
  data: {}
});
