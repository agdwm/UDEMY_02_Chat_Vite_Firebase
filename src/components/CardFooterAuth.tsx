import { Button } from "@/components/ui/button";
import { useAuthActions } from "@/hooks/use-auth-actions";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { CardFooter } from "@/components/ui/card";
import { Link } from "react-router";

interface Props {
  type: "login" | "register";
  loading: boolean;
}

const CardFooterAuth = ({ type, loading }: Props) => {
  const isLogin = type === "login";

  const { loginWithGoogle } = useAuthActions();

  const handleLoginWithGoogle = async () => {
    const result = await loginWithGoogle();
    if (result.success) {
      console.log("Login Successful");
    } else {
      console.log("Error signing in", result.error);
      toast.error("Login failed");
    }
  };

  return (
    <CardFooter className="flex flex-col gap-4 items-center">
      <Button
        onClick={handleLoginWithGoogle}
        className="w-full"
        disabled={loading}
        variant="outline"
      >
        <Mail className="mr-2" />
        {isLogin ? "Login with Google" : "Register with Google"}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <Link
          to={isLogin ? "/auth/register" : "/auth/login"}
          className="text-sm font-normal text-blue-600 hover:underline p-0 h-auto"
        >
          {isLogin ? "Register" : "Login"}
        </Link>
      </p>
    </CardFooter>
  );
};

export default CardFooterAuth;
