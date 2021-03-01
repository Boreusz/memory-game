import React from 'react'

const Card  = (props) => {

    return(
        <div id={props.id} className='card' clicked={props.status} onClick={(e) => props.handler(e)}>
            <span className='card-value'>{props.value}</span>
            <span className='card-description'>{props.description}</span>
        </div>
    )
}
export default Card