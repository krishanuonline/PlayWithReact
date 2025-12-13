import { useParams } from "react-router-dom";

function User () {

    const {id} = useParams();
    return (
        <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-3xl font-bold underline">
                User : {id}
            </h1>
        </div>
    )
}

export default User;