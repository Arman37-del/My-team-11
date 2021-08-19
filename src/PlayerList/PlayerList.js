import React from 'react';
import './PlayerList.css'
const PlayerList = (props) => {

    const list = props.list;
    // console.log(List);
    // const total = List.reduce((total, plr) => total + plr.budget, 0);
    const totalPlayer = list.length;

    let budget = 0;
    for (let i = 0; i < list.length; i++) {
        const player = list[i];
        budget = budget + player.budget;
    }
    return (
        <div className="player-list">
            <h3 className="selected-player">My Selected Players</h3>
            <h4 className="list">Players :{totalPlayer}</h4>
            <h5 className="budget">Budget:{budget} $</h5>
        </div>
    );
};

export default PlayerList;