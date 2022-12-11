import React from 'react';
import { useState, useEffect} from 'react';
import ReactStars from "react-rating-stars-component";
// import Rating from 'react-simple-star-rating';
// import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import './Ratingspage.css'
function Rate(){
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    

    return (
        <div>
            <h3> Like your stay! Show us how much...</h3>
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={50}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"  />,
        </div>

    );

}

// function Reviews(){

//     return();
// }




function Ratingspage(){

    return(
        <div>
            <Rate />
        </div>
    );
    
}

export default Ratingspage