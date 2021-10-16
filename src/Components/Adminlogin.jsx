import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Rest from './Rest';
import img1 from '../images/login.png';



const Adminlogin = () => {

    let [data, updatedata] = useState({ id: '', pwd: '' })

    function getdata(event) {

        updatedata({ ...data, [event.target.name]: event.target.value });

    }

    function submits(event) {
        event.preventDefault();

        if (data.id === "admin" && data.pwd === "12345") {
            ReactDOM.render(


                <React.StrictMode>
                    <BrowserRouter>
                        <Rest></Rest>
                    </BrowserRouter>
                </React.StrictMode>,
                document.getElementById('root')

            );

        }



        else {

            alert("invliad id and password");

        }
    }

    return (


        <>

            <div className="container">

                <div className="row inline-flex">

                    <div className="col-sm-4 mt-5">

                        <div>
                            <img src={img1}></img>
                        </div>
                    </div>


                    <div className="col-sm-4 mt-5">
                    </div>

                    <div className="col-sm-4 mt-5">

                        <center> <h1>Admin login pannel</h1> </center>

                        <form action="" onSubmit={submits}>


                            <div className="form-group mt-5">
                                <label>ID</label>
                                <input type="text" name="id" value={data.id} onChange={getdata} className="form-control" placeholder="please enter id">

                                </input>
                            </div>

                            <div className="form-group mt-5">
                                <label>Password</label>
                                <input type="password" name="pwd" value={data.pwd} onChange={getdata} className="form-control" placeholder="please enter password">

                                </input>
                            </div>


                            <center><button className="btn btn-primary  mt-5"> LOGIN</button></center>
                        </form>

                    </div>
                </div>
            </div>

        </>

    )
}
export default Adminlogin;
