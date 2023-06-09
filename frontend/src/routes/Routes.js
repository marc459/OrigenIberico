import * as React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Home } from "../pages/Home";
import { Cow } from "../pages/Cow";
import { Auth } from "../pages/Auth";
import { About } from "../pages/About";

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/OrigenIberico" element={<Auth />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cow/:id" element={<Cow />} />
                <Route path="/about" element={<About />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}