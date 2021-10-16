import React from 'react';
import { NavLink, useHistory} from 'react-router-dom';
const Navbar = () => {
 let history = useHistory();
  function handleclick() {

    history.push("/");
    
  }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink exact to="/" className="navbar-brand" activeClassName="active">Shop Mart</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink exact to="/" activeClassName="active" className="nav-link active">Home</NavLink>
                            <NavLink exact to="/About" activeClassName="active" className="nav-link active">About</NavLink>
                            <NavLink exact to="/Contact" activeClassName="active" className="nav-link active" >Contact</NavLink>
                            <NavLink exact to="/Adminlogin" activeClassName="active" className="nav-link active" >Adminlogin</NavLink>
                            <NavLink exact to="/Dashboard" activeClassName="active" className="nav-link active" >Dashboard</NavLink>
                            <NavLink exact to="/Product" activeClassName="active" className="nav-link active" >Product</NavLink>
                            <NavLink exact to="/Images" activeClassName="active" className="nav-link active" >Images</NavLink>

                            <button className="nav-link active btn-warning" onClick={handleclick}>back</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar;
