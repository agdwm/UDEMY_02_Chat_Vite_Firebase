import { Navigate, Outlet } from "react-router";
import { useSigninCheck } from "reactfire";

const AuthLayout = () => {
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

  // Mostrar loading mientras se verifica el estado de login
  if (status === "loading" || !hasEmitted) {
    return <div>Loading...</div>;
  }

  // Redireccionar al dashboard si está autenticado
  if (signInCheckResult.signedIn) {
    return <Navigate to="/admin" replace />;
  }

  // Usuario autenticado → mostrar rutas hijas
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default AuthLayout;
