import React from 'react';
import { Container } from 'react-bootstrap';
import "./Review.css"


const Review = (props) => {
    const{image,name,team}=props.list;
    
    // console.log(props.list)
    return (
        <div className="review">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="review-name">
                <Container>
                    <h4 className="name">{name}</h4>
                    <h6 className="country">Country :{team}</h6>
                </Container>
                </div>
        </div>
    );
};

export default Review;