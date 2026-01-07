import { createContext, useContext } from "react";

// Create a context for Todo items
export const TodoContext = createContext({
    todos: [
        { id: 1, task: "Learn React Context", completed: false },

    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodoCompletion: (id) => {},
}); 


export const useTodo = () => {
    return useContext(TodoContext); // Custom hook for consuming the TodoContext
}

export const TodoProvider = TodoContext.Provider;