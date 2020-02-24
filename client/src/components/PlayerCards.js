import React from 'react';


function PlayerCard(props){

    return (
        <div className='players-container' data-testid='players-container'>
            <h1>Players of World Cup</h1>
            {props.playerData.map(player =>(
                <div className='playerCard' >
                    <h3 data-testid='playerNames'>{player.name} </h3>
                    <p>{player.country}</p>
                    <p># of Searches: {player.searches}</p>
                </div>
            ))}
        </div>
    )
}

export default PlayerCard;