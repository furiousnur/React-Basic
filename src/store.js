import { createStore,applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./todos-services/reducers/todosReducers";
import counterReducer from "./services/reducers/counterReducer";

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    todosReducer: todosReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk)); 
export default store;