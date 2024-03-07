import React, { useEffect, useState } from "react";
function Review(){
    const [Review,SetReview]=useState([]); //it is a list which will be storing reviews as a list
    const [Input,SetInput]=useState(''); //it stores current input review from input bar 
    useEffect(()=>{
        const s =JSON.parse(localStorage.getItem('Review'));
        if(s)
        SetReview(s);
    },[]);// used to run sideEffects like when ever we open our interface it will fetch the data from local storage
    useEffect(()=>{
        localStorage.setItem('Review',JSON.stringify(Review));
    },[Review]);//used to store in local storage

    const klick=(e)=>{
      SetInput(e.target.value)//updates the input value whenever input field value changes
    }
    const handle = () => {//function adds new list to the array
        if (Input.trim() !== '') {//it first checks the input is empty or not
          SetReview([...Review, Input]);
          SetInput('');
        }
      };

    return(
        <div className="hh">
        <input type="text" value={Input} onChange={klick} className="inp" placeholder="Enter Your Review"/>
        <button type="submit" onClick={handle}>Add Your Review</button>
        <ul>
            {Review.map((review,i)=>
          <li key={i}>{review}</li>  )
            }
        </ul>
        </div>
    )
}
export default Review; 
