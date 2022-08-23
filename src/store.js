import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./todos-services/reducers/todosReducers";
import counterReducer from "./services/reducers/counterReducer";
// const store = createStore(counterReducer); 

const store = createStore(todosReducer, applyMiddleware(thunk));
export default store;