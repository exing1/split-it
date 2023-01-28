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
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}/>
          <Route index element={<Scan />} />
          <Route path="tip" element={<Tip />} />
          <Route path="select" element={<Select />} />
          <Route path="scan" element={<Scan />} />
          <Route path="result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
