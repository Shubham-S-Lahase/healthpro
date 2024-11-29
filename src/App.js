import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; 
import Layout from "./components/Layout";
import IVFSuccessRateCalculator from "./components/IVFSuccessRateCalculator";
import IVFResult from "./components/IVFresult";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ivf-success-rate-calculator" element={<IVFSuccessRateCalculator/>} />
            <Route path="/ivf-success-rate-calculator/result" element={<IVFResult />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;