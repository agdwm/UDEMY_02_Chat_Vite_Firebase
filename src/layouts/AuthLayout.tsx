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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
