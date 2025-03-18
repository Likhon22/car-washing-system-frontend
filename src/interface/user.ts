export type TRegisterUserData = {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  area: string;
  profileImg?: string;
  houseNo: string;
  street: string;
  streetNo: string;
};
export type TLoginUser = {
  email: string;
  password: string;
};
