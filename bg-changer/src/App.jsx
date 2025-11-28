import { useState } from "react";

function App() {
	const [color, setColor] = useState("black");
	return (
		<div className="w-full h-screen flex justify-center items-center" style={{ backgroundColor: color }}>
			<div className="fixed flex bg-white px-6 py-1 rounded-2xl shadow-3xl bottom-3">
				<button className="bg-red-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("red")}>Red</button>
				<button className="bg-green-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("green")}>Green</button>
				<button className="bg-yellow-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("yellow")}>Yellow</button>
				<button className="bg-orange-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("orange")}>Orange</button>
				<button className="bg-purple-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("purple")}>Purple</button>
				<button className="bg-pink-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("pink")}>Pink</button>
				<button className="bg-cyan-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("cyan")}>Cyan</button>
				<button className="bg-teal-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("teal")}>Teal</button>
				<button className="bg-indigo-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("indigo")}>Indigo</button>
				<button className="bg-lime-600 text-lg text-white px-6 py-2 m-2 rounded-2xl outline-0" onClick={() => setColor("lime")}>Lime</button>
			</div>
		</div>
	);
}
export default App;
