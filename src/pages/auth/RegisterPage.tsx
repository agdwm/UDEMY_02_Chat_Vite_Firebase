import { useForm } from "react-hook-form";

import CardFooterAuth from "@/components/CardFooterAuth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuthActions } from "@/hooks/use-auth-actions";
import type { LoginZodSchemaType } from "@/lib/zod.schema";

const RegisterPage = () => {
  const { loading } = useAuthActions();
  const { register } = useForm<LoginZodSchemaType>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Register to your account using email and password or Google
        </CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>

      <CardFooterAuth type="register" loading={loading} />
    </Card>
  );
};
export default RegisterPage;
