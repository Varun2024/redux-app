import { createSlice , nanoid } from "@reduxjs/toolkit";

// nanoid : generates uniqueid

const initialState = {
    todos : [{
        id:1,
        text:"hello world"
    }]
}


export const todoSlice = createSlice({
    name:"todo",
    initialState, //one can write the initial state here as well using colon(:) side by side
    // step2: reducers
    reducers:{
        // includes properties and fucntions
        addTodo : (state , action) => {
            const todo= {
                id:nanoid(),
                text:action.payload//payload is an object that can contain anything id,name,data etc
            }
            state.todos.push(todo)
        }, // state and action are always passed
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            )},

        // updateTodo: (state ,action) => {

        // }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions //used in components

export default todoSlice.reducer // mandatory as this is used in the store 