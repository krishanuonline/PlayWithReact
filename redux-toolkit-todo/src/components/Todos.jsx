import { useSelector, useDispatch } from "react-redux";
import {removeTodo} from "../features/todo/todoSlice";

function Todos() {
    
    const todos = useSelector((state) => state.todos); // useSelector is for accessing the value -  advantage is we can get state directly
    const dispatch = useDispatch();

    return (
        <>
            <div className="mt-8">
                <div className="text-2xl font-bold text-gray-100 mb-4 px-2">Tasks</div>
                <ul className="list-none space-y-3">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex items-center justify-between bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-200 group shadow-sm" >
                            <div className="text-gray-200 text-lg flex-grow truncate mr-4">{todo.id} - {todo.text}</div>
                            
                            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-gray-400 hover:text-white bg-gray-700 hover:bg-red-500 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-800" aria-label="Delete todo" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-1.816c0-1.107-.894-2.25-1.991-2.25H9.752c-1.107 0-1.991 1.143-1.991 2.25v1.816m7.5 0a48.667 48.667 0 00-7.5 0"/>
                            </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Todos;