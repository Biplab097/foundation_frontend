import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import NavBar from './Components/Navbar.js';
import Display from './Components/Display.js';
import Login from './Components/Login';
import Register from './Components/Register';
function App() {
  return (
    <>
    {/* <NavBar class="Background"/> */}
    {/* <Display /> */}
    <Switch>
      <Route exact path="/" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={NavBar}/>
  </Switch>
  </>
  );
}

export default App;
