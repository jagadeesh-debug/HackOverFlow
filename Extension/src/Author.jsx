import React from "react";
import './Author.css';
import Image from './port.jpg';
import Review from "./Review";
export default function Author(){
 return (
    <div className="c11">
     <div className="d d1">
        <div className="g1">
        <img src={Image} className="c1"/>
        <h2 className="h1">Abhi</h2>
        <div className="h2">
            <h4 className="e1">Summary</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat doloremque magni inventore voluptatum quasi. Quo cumque quam numquam? Fugiat ducimus aliquam nemo asperiores doloremque quod dolore iste aperiam delectus illo.</p>
        </div>
        <div className="I1">
           <p>User's Social media links</p>
        </div>
        <div className="e2">
            <h3>BIO</h3>
                <ol className="j1">
                    <li>hero</li>
                    <li>hero</li>
                    <li>hero</li>
                </ol>
        </div>
        </div>         
    </div>
    <div className="d d2">
        <div className="faf">
        <h3 className="kk">reviews</h3>
    
      <Review/>
        </div>
    </div>
    </div>
 )
}

