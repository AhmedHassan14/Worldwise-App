import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate],
  );
  return isAuthenticated ? children : null;

  // 2
  // if (!isAuthenticated) {
  //   return <Navigate to="/" />;
  // }
  // return isAuthenticated ? children : null;

  // 3
  //  const { isAuth } = useAuth();
  //  return isAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
