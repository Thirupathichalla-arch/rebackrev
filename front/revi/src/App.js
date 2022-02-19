import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Loginuser } from "./components/Loginuser.jsx";
import { Register } from "./components/Register.jsx";
import { Home } from "./components/Home.jsx";
import "./RegisterUser.css"
function App() {
  return (
    <div>
      <nav>
        <div class="nav">
              <a href="/register">Register</a>&nbsp;&nbsp;&nbsp;
              <a href="/login">Login</a>
          <input type="text" placeholder="Search the result" id="id" />
          <input type="submit" value="Go" id="id1"></input>
          <a href="" class="a">Profile</a>
          <a href="" class="a">Logout</a>
        </div>

          
        
      </nav>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={< Loginuser />}></Route>
        <Route path="/Home" element={< Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
