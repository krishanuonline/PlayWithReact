import {createSlice, nanoid} from "@reduxjs/toolkit";
//nano id is used to generate unique ids for todo items

//INITIAL STATE
const initialState = {
    todos: [{
        id:1, text: "Initial"
    }]
};

//creating slice
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo); //push todo in todos array (written in initial state)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }
});

//mandatory exports
export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
