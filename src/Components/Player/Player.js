import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Player.css'
const Player = (props) => {
// console.log(props);
    const { image, name, team, age, category, salary } = props.player;
    
         

    return (
        <div className="player">
            <div>
                <img src={image} alt="" />
            </div>
            <Container className="player-name">
                <h4 className="name">{name}</h4>
                <br />
                <p>Team :{team}</p>
                <p>Age :{age}</p>
                <p>Category:{category}</p>
                <p><small>Salary:{salary} $</small></p>
                <Button 
                className="main-button" variant="outline-info"
                onClick={()=>props.handleAddPlayer(props.player)}
                >Select Player <FontAwesomeIcon icon={faUserPlus}>FontAwesomeIcon</FontAwesomeIcon></Button>
            </Container>
        </div>
    );
};

export default Player;