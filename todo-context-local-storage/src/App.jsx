import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {

	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos((prev)=>[...prev, {id: Date.now(), ...todo}]); //if old values are needed
	};

	const updateTodo = (id, todo) => {
		setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
	};
	
	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};
	
	const toggleTodoCompletion = (id) => {
		setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo));
	};


	//Local storage logic
	useEffect(() => {
		const todos =  JSON.parse(localStorage.getItem("todos"));		
		if(todos && todos.length > 0){
			setTodos(todos);
		}
	},[])

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);


	return (
		<TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodoCompletion }}>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
					<div className="mb-4">
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{todos.length === 0 ? (
							<p className="text-center w-full text-gray-300">No Todos Available. Please add some todos.</p>
						) : (
							todos.map((todo) => (
								<TodoItem key={todo.id} todo={todo} />
							))
						)}
					</div>
				</div>
			</div>
		</TodoProvider>
	)
}

export default App
