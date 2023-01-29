import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Scan from "./pages/Scan";
import Input from "./pages/Input"
import Tip from "./pages/Tip";
import Select from "./pages/Select";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Scan/>}/>
          <Route path="input" element={<Input/>}/>
          <Route path="tip" element={<Tip/>}/>
          <Route path="select" element={<Select/>}/>
          <Route path="result" element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
