function Card(props) {
    console.log(props);
    return (<>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
            className="w-full"
            src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
            alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">{props.desc}</p>
        </div>
        </div>
    </>);
}

export default Card;