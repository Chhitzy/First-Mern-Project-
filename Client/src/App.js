
import './App.css';
import Support from './Screens/Support.js';
import Home from './Screens/Home.js';
import Employee from './Screens/Employee.js';
import Contact from './Screens/Contact.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Screens/About.js';
import Header from './Screens/Header.js';
import Cal from './Screens/Cal.js';

function App() {
  return (
    <div className="App">
     <h2 className="text-primary">Welcome CS</h2>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path ="home" element ={<Home/>}></Route>
      <Route path ="contact" element={<Contact/>}></Route>
      <Route path ="about" element={<About/>}></Route>
      <Route path ="support" element={<Support/>}></Route>
      <Route path ="employee" element={<Employee/>}></Route>
      <Route path="" element={<Home/>}></Route>
      <Route path="cal" element={<Cal/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
