import { Button } from "@/components/ui/button";
import { useAuthActions } from "@/hooks/use-auth-actions";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageCircle,
  User,
  LogOut,
  ClipboardCheck,
} from "lucide-react";
import { NavLink } from "react-router";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Messages", href: "/admin/chat", icon: MessageCircle },
  { name: "Profile", href: "/admin/profile", icon: User },
  { name: "Tasks", href: "/admin/tasks", icon: ClipboardCheck },
];

const Navbar = () => {
  const { logout } = useAuthActions();

  // Clases CSS para los enlaces
  const baseLinkClasses = "flex items-center gap-2 text-sm transition-colors";
  const inactiveLinkClasses = "text-gray-700 hover:text-blue-800";
  const activeLinkClasses = "text-blue-800 font-semibold";

  // Función para generar las clases dinámicamente
  function getNavLinkClasses(isActive: boolean) {
    return cn(
      baseLinkClasses,
      isActive ? activeLinkClasses : inactiveLinkClasses
    );
  }

  return (
    <header className="shadow-md border-b">
      <nav className="p-4 flex gap-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => getNavLinkClasses(isActive)}
            end
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
        <Button onClick={logout} className="ml-auto">
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
