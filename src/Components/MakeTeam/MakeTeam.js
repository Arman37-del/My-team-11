import React from 'react';
import { Container } from 'react-bootstrap';
import './MakeTeam.css'

const MakeTeam = (props) => {
    
    const{image,name,team}=props.list;
    return (
        <div>
            <div className="team">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="team-name">
                <Container>
                    <h4 className="name">{name}</h4>
                    <h6 className="country">Country :{team}</h6>
                </Container>
                </div>
        </div>
        </div>
    );
};

export default MakeTeam;