interface StoreType {
  currentState: { data: number };
  listeners: any[];
  reducer: (action: any) => any;
  subscribe: (l: () => void) => () => void;
  getSnapshot: () => any;
  dispatch: (action: any) => any;
}
const store: StoreType = {
  currentState: { data: 0 },
  listeners: [],
  reducer(action) {
    switch (action.type) {
      case "ADD":
        return { data: store.currentState.data + 1 };
      default:
        return store.currentState;
    }
  },
  subscribe(l) {
    console.log(l, "l");

    store.listeners.push(l);
    return l;
  },
  getSnapshot() {
    return store.currentState;
  },
  dispatch(action) {
    store.currentState = store.reducer(action);
    console.log(store.listeners, "store.listeners");

    store.listeners.forEach((l) => l());
    return action;
  },
};
export default store;
