import { Button } from "@/components/ui/button";
import { useAuthActions } from "@/hooks/use-auth-actions";
import { useUser } from "reactfire";

const DashboardPage = () => {
  const { data: user } = useUser();

  const { logout } = useAuthActions();

  return (
    <div className="container mx-auto pe-4">
      <h1>DashboardPage</h1>
      <p>Welcome, {user?.displayName || "Invitado"}!</p>
      <p>Email: {user?.email || "No proporcionado"}</p>
      <Button onClick={logout}>Cerrar sesión</Button>
    </div>
  );
};
export default DashboardPage;
