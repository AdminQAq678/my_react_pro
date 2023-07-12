import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }: { children: JSX.Element }) {
	let auth = useAuth();
	let location = useLocation();
	console.log(auth, location);
	if (!auth) {
	  // 重定向至login页面，但是保存用户试图访问的location，这样我们可以把登陆后的用户重定向至那个页面
	  return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return children;
}

export default RequireAuth;

function useAuth() {
	return localStorage.getItem("user");
}
