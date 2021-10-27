import store from "./store/store";
import actions from "./store/actions";

// store.subscribe(()=>{
//     console.log("Store changed.", store.getState());
// })
store.dispatch(actions.bugAdded({description: "Bug 1"}));
store.dispatch(actions.bugResolved({id:1}));

console.log(store.getState());