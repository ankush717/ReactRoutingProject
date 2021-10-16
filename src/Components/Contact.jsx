import React from 'react';
import img1 from '../images/contact.png';

const Contact = (Props) => {

    return (

        <>

            <h1> {Props.name}</h1>

            <div className="container">

                <div className="row inline-flex">

                    <div className="col-sm-8 ">

                        <img src={img1}></img>

                    </div>


                    <div className="col-sm-4 mt-5">
                        <h1> Send us a message</h1>
                        <p >   Our email address is Shopmart@gmail.com</p>
                        <p > Contact :-7972422250 / 9595827837</p>
                        <p > Owner :-Ankush Sonone</p>
                        <p > Address :-Vijay nagar Indore</p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Contact;

