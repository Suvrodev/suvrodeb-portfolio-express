export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin" | "super-admin";
  deviceIp: string;
  isDeleted: boolean;
  isBlocked: boolean;
  passwordResetCode: string;
};
