import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout"
import Scan from "./pages/Scan";
import Tip from "./pages/Tip";
import Select from "./pages/Select";
import Result from "./pages/Result";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Scan />} />
          <Route path="tip" element={<Tip />} />
          <Route path="select" element={<Select />} />
          <Route path="scan" element={<Scan />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
