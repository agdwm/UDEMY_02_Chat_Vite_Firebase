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
  { name: "Chat", href: "/admin/chat", icon: MessageCircle },
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
    <header className="shadow-md border-b w-full">
      <nav className="flex flex-wrap items-center px-4 py-3 gap-2 md:gap-4 w-full">
        <div className="flex flex-1 gap-3 md:gap-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                getNavLinkClasses(isActive) + " px-3 py-2 rounded-md"
              }
              end
            >
              <item.icon className="h-7 w-7" />
              <span className="hidden sm:inline">{item.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex-1 flex justify-end">
          <Button onClick={logout} className="flex items-center gap-2">
            <LogOut className="h-5 w-5" />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
