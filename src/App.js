import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing/landing";
import Home from "./pages/home/home";
import React from 'react';
 

 

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
           <Routes>
          <Route path="/">
             <Route index element={<Landing />} />
           </Route>

           <Route path="/home">
             <Route index element={<Home />} />
           </Route>
        </Routes>
      </BrowserRouter>
        
      {/* <Lines /> */}
    </React.Fragment>
  );
}

export default App;
