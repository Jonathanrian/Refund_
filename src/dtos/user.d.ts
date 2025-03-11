type UserAPIRole = "employee" | "manager";

type UserAPIResponse = {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: UserAPIRole;
  };
};
