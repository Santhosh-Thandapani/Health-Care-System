import { Navigate } from "react-router";

function AdminProtected({token,children})
{
    token=localStorage.getItem("token");
    if(token!=null)
        return children;
    <Navigate to='/home' />
}

export default AdminProtected;