import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosSlice from "../features/todos/todosSlice";

const store = configureStore({
   reducer: {
       // counter: counterReducer,
       todos: todosSlice,
   } 
});

export default store;