import { useParams } from "react-router-dom";

function User()
{   const {user_name} = useParams() ; 
    return (
        <div> User: {user_name} </div>
    )
}

export default User ; 