export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: "student" | "teacher";
}
