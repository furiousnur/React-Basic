import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios"; 

const fetchTodos = createAsyncThunk("todos/fetchTodos", async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");  
    return res.data;
});

 const todosSlice = createSlice({
    name: "todos",
    initialState:{
        isLoading: false,
        todos: [],
        error: null,
    },
    extraReducers:(builder)=>{
         builder.addCase(fetchTodos.pending, (state)=>{
             state.isLoading = true;
         });
         
         builder.addCase(fetchTodos.fulfilled, (state, action)=>{ 
             state.isLoading = false;
             state.todos = action.payload;
             state.error = null;
         });
         
         builder.addCase(fetchTodos.rejected, (state, action)=>{
             state.todos = [];
             state.isLoading = false;
             state.error = action.error.message;
         });
    }
});

export default todosSlice.reducer;