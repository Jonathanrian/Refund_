import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { Menager } from "./Menager";

export function Routes() {
  return (
    <BrowserRouter>
      <Menager />
    </BrowserRouter>
  );
}
