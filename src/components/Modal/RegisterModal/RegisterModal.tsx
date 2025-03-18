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

const RegisterModal = ({
  showRegister,
  setShowRegister,
}: {
  showRegister: boolean;
  setShowRegister: (value: boolean) => void;
}) => {
  return (
    <Dialog open={showRegister} onOpenChange={setShowRegister}>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          New to here?
          <p className=" text-black border-none cursor-pointer">Register</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>Create a new account</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Name Fields */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <Label>First Name</Label>
              <Input placeholder="Enter first name" />
            </div>
            <div>
              <Label>Middle Name</Label>
              <Input placeholder="Enter middle name" />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input placeholder="Enter last name" />
            </div>
          </div>

          {/* Email & Profile Image */}
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter email" />
          </div>
          <div>
            <Label>Profile Image URL</Label>
            <Input type="url" placeholder="Enter profile image URL" />
          </div>

          {/* Phone Number */}
          <div>
            <Label>Phone</Label>
            <Input type="tel" placeholder="Enter phone number" />
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>City</Label>
              <Input placeholder="Enter city" />
            </div>
            <div>
              <Label>Area</Label>
              <Input placeholder="Enter area" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <Label>House No</Label>
              <Input placeholder="Enter house number" />
            </div>
            <div>
              <Label>Street</Label>
              <Input placeholder="Enter street" />
            </div>
            <div>
              <Label>Street No</Label>
              <Input placeholder="Enter street number" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button className="cursor-pointer">Register</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
