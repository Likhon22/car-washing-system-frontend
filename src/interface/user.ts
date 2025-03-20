export type TName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TAddress = {
  city: string;
  area: string;
  houseNo: string;
  street: string;
  streetNo: string;
};

export type TAppUser = {
  id?: string;
  name: TName;
  email: string;
  profileImg?: string;
  phone: string;
  address: TAddress;
  isDeleted?: boolean;
};

// auth user interface

export type TAuthUser = {
  email: string;
  role: "admin" | "user";
  iat: number;
  exp: number;
};
