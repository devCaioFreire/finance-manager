import { Route, Routes } from "react-router-dom";

import { BudgetTable } from "../screens/BudgetTable";
import Home from "../screens/Home";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/budget" element={<BudgetTable />} />
    </Routes>
  )
}