import { Route, Routes } from "react-router";

import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";

import { AppLayout } from "../components/AppLayout";

export function Menager() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
