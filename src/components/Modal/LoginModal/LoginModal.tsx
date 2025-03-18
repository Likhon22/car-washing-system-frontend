import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setOpen(false);
    setShowRegister(true);
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
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name..."
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password..."
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Login
            </Button>
          </DialogFooter>
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
