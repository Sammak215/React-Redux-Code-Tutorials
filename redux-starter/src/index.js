import store from './store';
import { bugAdded, bugResolved } from './actions';

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed" , store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

console.log(store.getState());


 /* add an action from reducer file to the store
 state = reducer(state, action)
 notify the subscribers

store.dispatch({type: actions.BUG_ADDED,
    payload: {
        description: "Bug 1"
    }
}); */

// remove store updating due to change in UI which donot reflect current state/

//unsubscribe();

/* 
store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id:1,
    }
}); */