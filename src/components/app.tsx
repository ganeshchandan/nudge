import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StatsDashboard } from "@components/stats-dashboard";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StatsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
