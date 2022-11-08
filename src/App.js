import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Registration />} />
        <Route path="Login" element={<Login />} />
        <Route path="Registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
