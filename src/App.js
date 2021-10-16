import React, { createContext } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { Switch, Route, NavLink } from 'react-router-dom';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Adminlogin from './Components/Adminlogin';
import Dashboard from './Components/Dashboard';
import Product from './Components/Product';
import Rest from './Components/Rest';
import Images from './Components/Images';

const App=()=>{

  return(

    <>
      <Navbar />
     
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Contact" component={()=><Contact name="Ankush"/>}></Route>
        <Route exact path="/Adminlogin" component={Adminlogin}></Route>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
        <Route excat path="/Images/:iname" render={()=> <Images name="pp.jpg"></Images> }></Route>
        <Route exact path="/ahome" component={Rest}></Route>
        <Route exact path="/Product" component={Product}></Route>
        <Route component={Error} ></Route> 
      </Switch>

    </>


  );
}

export default App;

