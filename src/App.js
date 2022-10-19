import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing/landing";
import React from 'react';
// import { Lines } from 'react-preloaders';

 

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
           <Routes>
          <Route path="/">
             <Route index element={<Landing />} />
           </Route>
        </Routes>
      </BrowserRouter>
        
      {/* <Lines /> */}
    </React.Fragment>
  );
}

export default App;
