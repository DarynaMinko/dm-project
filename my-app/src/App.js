import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import People from "./People";
import Planets from "./Planets";
import Films from "./Films";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="People" element={<People />} />
        <Route path="Planets" element={<Planets />} />
        <Route path="Films" element={<Films />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
