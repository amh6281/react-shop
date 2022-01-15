import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CheckOut from "./components/Checkout/CheckOut";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
