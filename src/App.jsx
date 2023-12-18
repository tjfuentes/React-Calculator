import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
