import React from 'react';


function PlayerCard(props){

    return (
        <div className='players-container' data-testid='players-container'>
            {props.playerData.map(player =>(
                <div className='playerCard' >
                    <h1 data-testid='playerNames'>{player.name} </h1>
                    <h4>{player.country}</h4>
                    <h4># of Searches: {player.searches}</h4>
                </div>
            ))}
        </div>
    )
}

export default PlayerCard;