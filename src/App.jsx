import { useState } from 'react'
import Homepage from './HomePage'
import 'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingePage from './SingePage';
import Navtest from './components/nav';

function App() {
  return (
    <>
    <Navtest/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path=":recipe_id" element={<SingePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App