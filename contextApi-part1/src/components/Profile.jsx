import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile () {

    const {user} = useContext(UserContext); //check UserContextProvider.jsx for value names

    if(!user) return <h2>Please login first</h2>;

    return(
        <>
            <div>Welcome {user.username}</div>
        </>
    )
}

export default Profile;