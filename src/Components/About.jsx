import React from 'react';
import img1 from '../images/about us.png'

const About = () => {

    return (

        <>
            <div className="conatiner">

                <div className="row inline-flex">

                    <div className="col-sm-6 mt-5">
                        <img src={img1}></img>
                    </div>

                    <div className="col-sm-6 mt-5">
                        <h1>Who we are</h1>
                        <p>
                            ShopMart is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. ShopMart strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by ShopMart, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, ShopMart Echo, Alexa, Just Walk Out technology, ShopMart Studios, and The Climate Pledge are some of the things pioneered by ShopMart.
                        </p>

                        <h1>What we do</h1>
                        <p>

                            Although our business has evolved over the years, one constant is customers’ desire for lower prices, better selection, and convenient services. Today, Amazon shoppers can find what they’re looking for online and in person. From delivering fresh produce to their doorstep to creating and distributing movies, music, and more, we are always finding new ways to delight our customers..
                        </p>

                        <h1>Our Employees</h1>
                        <p>

                            We seek top talent from all industries and a range of backgrounds to join our offices and operations centers around the world. People who succeed at Amazon have something in common—they are customer-centric, they are leaders and they are innovators..
                        </p>

                    </div>



                    <div className="col-sm-6">


                    </div>


                </div>
            </div>

        </>


    )
}

export default About;