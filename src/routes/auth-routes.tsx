import { Routes, Route } from "react-router";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { NotFound } from "../pages/NotFound";

import { AuthLayout } from "../components/AuthLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
