import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <div className="bg-[#0C0043] w-full">
        <Router>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/Product"} element={<ProductPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
