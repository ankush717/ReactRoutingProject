import React from 'react';
import img1 from '../images/prodcutupcoming.png';

const Card = (Props) => {

    return (
        <>
           <div className="col-sm-3">
            <div className="card" >
            <img src={img1} className="card-img-top" alt="..."></img>

                <div className="card-body">
                <h5 className="card-title">{Props.name}</h5>
                <h5 className="card-title">{Props.price}</h5>
                <h5 className="card-title">{Props.cat}</h5>
                <h5 className="card-title">{Props.cmp}</h5>
                
                <a href="/" className="btn btn-primary">Buy now</a>
                </div>
            </div>
           </div>
        </>

    )

}
export default Card;