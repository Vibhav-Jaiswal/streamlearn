import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenets/Header';
import Home from './componenets/Home';
import Footer from './componenets/Footer';
import Videos from './componenets/Videos';
import Upload from './componenets/Upload';
import Login from './componenets/Login';
import Singup from './componenets/Singup';



function App() {
  return (
   <Router>
    <Header />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/videos' element={<Videos />}/>
      <Route path='/upload' element={<Upload />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/singup' element={<Singup />}/>
     </Routes>
     <Footer />
   </Router>
  );
}

export default App;
