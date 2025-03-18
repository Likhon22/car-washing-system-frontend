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
import FormFieldComponent from "@/hooks/FormFieldComponent/FormFieldComponent";
import { TLoginUser } from "@/interface/user";

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const form = useForm<TLoginUser>();
  const handleRegisterClick = () => {
    setOpen(false);
    setShowRegister(true);
  };
  const onSubmit: SubmitHandler<TLoginUser> = (data) => {
    // Handle form submission
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-blue-400 border-none cursor-pointer hover:bg-blue-500"
            onClick={() => {
              setOpen(true);
              setShowRegister(false);
            }}
          >
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login to your account</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your account
            </DialogDescription>
          </DialogHeader>
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
              <Button className="cursor-pointer" type="submit">
                Submit
              </Button>
            </form>
          </Form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              New to here?{" "}
              <span
                onClick={handleRegisterClick}
                className="text-blue-500 cursor-pointer hover:underline"
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
