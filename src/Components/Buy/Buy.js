import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import List from '../List/List';
import Player from '../Player/Player'
import Review from '../Review/Review';
import './Buy.css'

const Buy = () => {
    const first15 = fakeData.slice(0, 15);
    const [players, setPlayers] = useState(first15);
    const [lists, setLists] = useState([])
    const handleAddPlayer = (player) => {
        // console.log(player.name);
        const newList = [...lists, player];
        setLists(newList);
    }
    return (
        <Container><Row>
            <Col xs={12} md={8}>
                <div className="player-container">
                    {
                        players.map(plr => <Player
                            handleAddPlayer={handleAddPlayer}
                            player={plr}
                        ></Player>)
                    }
                </div>
            </Col>
            <Col xs={7} md={4}>
                <Container><div className="list-container">
                    <div>
                        <List list={lists}></List>
                    </div>
                    <div>
                        {
                            lists.map(lt => <Review
                                handleAddPlayer={handleAddPlayer}
                                list={lt}
                            ></Review>)
                        }
                    </div>
                </div></Container>
            </Col>
        </Row>

        </Container>
    );
};

export default Buy;