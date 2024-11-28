import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Your Home component
import Layout from "./components/Layout"; // Your Layout component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ivf-success-rate-calculator" element={<div>IVF Success Rate Calculator</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;