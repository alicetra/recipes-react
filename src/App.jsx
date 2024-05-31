import { useState } from 'react'
import Homepage from './HomePage'
import 'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingePage from './SingePage';

function App() {
  return (
    <>
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