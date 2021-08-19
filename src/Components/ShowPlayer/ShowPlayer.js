import React, { useState } from 'react';
import { Container, Row, Col, List } from 'react-bootstrap';
import fakeData from '../../fakeData';
import PlayerList from '../../PlayerList/PlayerList';
import MakeTeam from '../MakeTeam/MakeTeam';
import Player from '../Player/Player';
import './ShowPlayer.css';

const ShowPlayer = () => {
    const first15 = fakeData.slice(0, 15);
    const [players, setPlayers] = useState(first15);
    const [lists, setLists] = useState([])
    const handleAddPlayer = (player) => {
        // console.log(player.name);
        const newList = [...lists, player];
        setLists(newList);
    }
    return (
        <div>
            <Container><Row>
                <Col xs={7} md={4}>

                    <div>
                        <PlayerList list={lists}></PlayerList>
                    </div>
                    <div>
                        {
                            lists.map(lt => <MakeTeam
                                handleAddPlayer={handleAddPlayer}
                                list={lt}
                            ></MakeTeam>)
                        }
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <Container><div className="list-container">
                        <div className="player-container">
                            {
                                players.map(plr => <Player
                                    handleAddPlayer={handleAddPlayer}
                                    player={plr}
                                ></Player>)
                            }
                        </div>
                    </div></Container>
                </Col>
            </Row>

            </Container>
            );
        </div>
    );
};

export default ShowPlayer;