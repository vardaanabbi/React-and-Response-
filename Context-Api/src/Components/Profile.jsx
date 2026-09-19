import React , {useState , useContext} from "react";
import context from "../Context/UserContext";

function Profile()
{
    const {user} = useContext(context)
        if(!user)
        {
            return (
                <h3> 
                    Please Login first !
                </h3>
            )
        }

    return (
        <>
        
        <h1> Welcome {user.username} </h1>

        </>
    )


}

export default Profile ;