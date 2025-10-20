import Navbar from "@/components/Navbar";
import { Navigate, Outlet } from "react-router";
import { useSigninCheck } from "reactfire";

const AdminLayout = () => {
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

  // Mostrar loading mientras se verifica autenticación
  if (status === "loading" || !hasEmitted) {
    return <div>Loading...</div>;
  }

  // Redireccionar al login si no está autenticado
  if (!signInCheckResult.signedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  // Usuario autenticado → mostrar rutas hijas
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
