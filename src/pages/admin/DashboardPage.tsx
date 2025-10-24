import { Button } from "@/components/ui/button";
import { useAuthActions } from "@/hooks/use-auth-actions";
import { useUser } from "reactfire";

const DashboardPage = () => {
  const { data: user } = useUser();

  const { logout } = useAuthActions();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-sm flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Panel de usuario
        </h1>
        <div className="w-full text-center">
          <p className="text-lg font-medium mb-1">
            ¡Bienvenido, {user?.displayName || "Invitado"}!
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            {user?.email || "No proporcionado"}
          </p>
        </div>
        <Button onClick={logout} className="w-full" variant="destructive">
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
