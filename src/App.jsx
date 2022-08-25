import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Navbar from "./components/navigation/navbar";
import Overview from './components/table';
//import Logout from './components/Logout';
//import Manage from './components/Manage';
//import Profile from './components/Profile';
//import Login from './login/Login';
//import Register from './register/register';
//import AddCar from "./components/manage/AddCar";

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>    
      <Route path="/" element={<Overview />} />
      {/* <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Overview />} /> 
      <Route path="/verwaltung" element={<Manage />} />
      <Route path="/verwaltung/add" element={<AddCar />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Logout />} />*/}
      
       
    </Routes>
  </BrowserRouter>,
    </>
  )
}

export default App