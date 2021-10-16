import React, { useEffect, useState } from 'react';
import Card from './Card';
import img1 from '../images/home.png';
const Home = () => {


    var [fdata, changefdata] = useState({ name: '', email: '', password: '', mobile: 0, dob: '', address: '' });

    function getData(event) {
        changefdata({ ...fdata, [event.target.name]: event.target.value });

    }

    function show(event) {

        event.preventDefault();
        console.log(fdata);

    }

    function msg(event) {
        window.alert("data sucessfully submited");
    }


    return (

        <>


            <div className="row inline-flex">

                <div className="col-sm-8 ">
                    <img src={img1} ></img>
                </div>


                <div className="col-sm-4">
                    <center><h1>SIGN UP</h1> </center>
                    <form action="" onSubmit={show} >

                        <div className="form-group">
                            <label> Name</label>
                            <input type="text" name="name" value={fdata.name} onChange={getData} placeholder="please enter your name" class="form-control" />
                        </div>
                        <div className="form-group">
                            <label> Email</label>
                            <input type="text" name="email" value={fdata.email} onChange={getData} placeholder="please enter your email" class="form-control" />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input type="password" name="password" value={fdata.password} onChange={getData} placeholder="please enter your password" class="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" name="mobile" value={fdata.mobile} onChange={getData} placeholder="please enter your mobile" class="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Dob</label>
                            <input type="text" name="dob" value={fdata.dob} onChange={getData} placeholder="please enter your dob" class="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" value={fdata.address} onChange={getData} placeholder="please enter your address" class="form-control" />
                        </div>


                        <br />
                        <br />
                        <center>  <button class="btn btn-primary" onClick={msg}> Submit</button> </center>
                    </form>


                </div>

            </div>
        </>


    )
}

export default Home;