import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import FormFieldComponent from "@/hooks/FormFieldComponent/FormFieldComponent";
import { TRegisterUserData } from "@/interface/user";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

const RegisterModal = ({
  showRegister,
  setShowRegister,
}: {
  showRegister: boolean;
  setShowRegister: (value: boolean) => void;
}) => {
  const [formStep, setFormStep] = useState(0);
  const form = useForm<TRegisterUserData>();

  const onSubmit: SubmitHandler<TRegisterUserData> = (data) => {
    const appUserInfo = {
      name: {
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.middleName || "",
      },
      email: data.email,
      password: data.password,
      phone: data.phone,
      profileImg: data.profileImg || "",
      address: {
        city: data.city,
        area: data.area,
        street: data.street,
        streetNo: data.streetNo,
        houseNo: data.houseNo,
      },
    };
    console.log(appUserInfo);

    setShowRegister(false);
  };

  // Handle next step validation
  const nextStep = async () => {
    let fieldsToValidate: Array<keyof TRegisterUserData> = [];

    if (formStep === 0) {
      fieldsToValidate = ["firstName", "lastName", "email", "password"];
      const isValid = await form.trigger(fieldsToValidate);
      if (isValid) setFormStep(formStep + 1);
    } else if (formStep === 1) {
      fieldsToValidate = ["phone"];
      const isValid = await form.trigger(fieldsToValidate);
      if (isValid) setFormStep(formStep + 1);
    } else {
      setFormStep(formStep + 1);
    }
  };

  return (
    <Dialog open={showRegister} onOpenChange={setShowRegister}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>Create a new account</DialogDescription>
        </DialogHeader>

        {/* Step indicator */}
        <div className="flex justify-between mb-4">
          <div
            className={`h-1 w-1/3 rounded ${
              formStep >= 0 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`h-1 w-1/3 rounded ${
              formStep >= 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`h-1 w-1/3 rounded ${
              formStep >= 2 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Step 1: Basic Information */}
            {formStep === 0 && (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <FormFieldComponent
                    control={form.control}
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                    required={true}
                  />
                  <FormFieldComponent
                    control={form.control}
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                    required={true}
                  />
                </div>

                <FormFieldComponent
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
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
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white w-full"
                >
                  Next
                </Button>
              </>
            )}

            {/* Step 2: Contact Information */}
            {formStep === 1 && (
              <>
                <FormFieldComponent
                  control={form.control}
                  name="middleName"
                  label="Middle Name (Optional)"
                  placeholder="Enter your middle name"
                />

                <FormFieldComponent
                  control={form.control}
                  name="profileImg"
                  label="Profile Image URL (Optional)"
                  placeholder="Enter your profile image URL"
                />

                <FormFieldComponent
                  control={form.control}
                  name="phone"
                  label="Phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  required={true}
                />

                <div className="flex justify-between gap-2">
                  <Button
                    type="button"
                    onClick={() => setFormStep(0)}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white flex-1"
                  >
                    Next
                  </Button>
                </div>
              </>
            )}

            {/* Step 3: Address Information */}
            {formStep === 2 && (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <FormFieldComponent
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                    required={true}
                  />
                  <FormFieldComponent
                    control={form.control}
                    name="area"
                    label="Area"
                    placeholder="Enter your area"
                    required={true}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <FormFieldComponent
                    control={form.control}
                    name="houseNo"
                    label="House No"
                    placeholder="Enter house number"
                    required={true}
                  />
                  <FormFieldComponent
                    control={form.control}
                    name="street"
                    label="Street"
                    placeholder="Enter street name"
                    required={true}
                  />
                  <FormFieldComponent
                    control={form.control}
                    name="streetNo"
                    label="Street No"
                    placeholder="Enter street number"
                    required={true}
                  />
                </div>

                <div className="flex justify-between gap-2 mt-4">
                  <Button
                    type="button"
                    onClick={() => setFormStep(1)}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white flex-1"
                  >
                    Register
                  </Button>
                </div>
              </>
            )}
          </form>
        </Form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => setShowRegister(false)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
