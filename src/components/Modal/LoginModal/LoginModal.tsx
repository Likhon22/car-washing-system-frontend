import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import FormFieldComponent from "@/components/FormFieldComponent/FormFieldComponent";

import loginSchema, { TLoginSchema } from "@/schemas/auth/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/authSlice";
import verifyToken from "@/utils/verifyToken";
import { TAuthUser } from "@/interface/user";
import { Loader2 } from "lucide-react";

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const [loginError, setLoginError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: { email: "student1@gmail.com", password: "user123" },
  });

  const handleRegisterClick = () => {
    setOpen(false);
    setShowRegister(true);
  };

  const onSubmit: SubmitHandler<TLoginSchema> = async (data) => {
    setLoginError(null);
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TAuthUser;

      const token = res?.data?.accessToken as string;
      const accessToken = token.replace(/^Bearer\s/, "");
      dispatch(setUser({ user, token: accessToken }));
      setOpen(false);
    } catch (err) {
      console.log(err);
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white shadow-md transform transition ease-in duration-200 hover:-translate-y-1 hover:shadow-lg"
            onClick={() => {
              setOpen(true);
              setShowRegister(false);
              setLoginError(null);
            }}
          >
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-2xl font-bold">Login</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your account
            </DialogDescription>
          </DialogHeader>

          {loginError && (
            <div className="bg-red-50 text-red-600 px-4 py-2 rounded-md text-sm mb-4">
              {loginError}
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormFieldComponent
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
                required={true}
              />
              <FormFieldComponent
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                required={true}
              />
              <Button
                disabled={isLoading}
                className="w-full py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors"
                type="submit"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              New to here?{" "}
              <span
                onClick={handleRegisterClick}
                className="text-blue-500 font-medium cursor-pointer hover:underline transition-colors"
              >
                Register
              </span>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {showRegister && (
        <RegisterModal
          showRegister={showRegister}
          setShowRegister={setShowRegister}
        />
      )}
    </>
  );
};

export default LoginModal;
