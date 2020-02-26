import React from 'react'
import './Result.css'

const Result = ({score,playAgain}) => {
    return (
        <div class='score-card'>
          <h2>{`you have scored ${score}/5 correct answers`}</h2>
          <button className='btn btn-success btn-block play-btn' type='click' onClick={playAgain}>Play Again</button>
        </div>
    )
}

export default Result;