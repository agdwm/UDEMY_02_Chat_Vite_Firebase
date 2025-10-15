import { useAuth, useUser } from "reactfire";

const DashboardPage = () => {
  const auth = useAuth();
  const { data: user } = useUser();

  console.log(JSON.stringify(auth, null, 2));

  return (
    <div>
      <h1>DashboardPage</h1>
      <p>Welcome, {user?.displayName || "Invitado"}!</p>
      <p>Email: {user?.email || "No proporcionado"}</p>
      <button onClick={() => auth.signOut()}>Cerrar sesión</button>
    </div>
  );
};
export default DashboardPage;
