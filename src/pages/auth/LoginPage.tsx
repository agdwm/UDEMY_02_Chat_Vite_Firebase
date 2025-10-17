import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useAuthActions } from "@/hooks/use-auth-actions";
import CardFooterAuth from "@/components/CardFooterAuth";

const LoginPage = () => {
  const { loading } = useAuthActions();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Login to your account using email and password or Google
        </CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <CardFooterAuth type="login" loading={loading} />
    </Card>
  );
};
export default LoginPage;
