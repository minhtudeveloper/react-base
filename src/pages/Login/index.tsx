import { useAuth } from "@/states/auth/index.state";
import { FC, ReactElement, useEffect } from "react";

const Login: FC = (): ReactElement => {
  const { logInSuccess, currentUser } = useAuth();

  useEffect(() => {
    logInSuccess({
      accessToken: "accessToken",
      resultUser: { email: "email", id: "123" },
    });
  }, []);

  console.log({ currentUser });

  return <>Login</>;
};

export default Login;
