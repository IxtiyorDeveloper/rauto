import {Navigate, useLocation} from "react-router"


const RequireAuth = ({children}) => {
    let location = useLocation()
    if (!!localStorage.getItem('user_token') || !!localStorage.getItem('bank_token') || !!localStorage.getItem('admin_token'))
        return children
    else return <Navigate to="/" state={{from: location}}/>
}

export default RequireAuth
