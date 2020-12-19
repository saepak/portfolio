import React from 'react'
import me from './../../img/me.png'
import icon1 from './../../img/icon1.png'
import icon2 from './../../img/icon2.png'
import icon3 from './../../img/icon3.png'
import icon4 from './../../img/icon4.png'
import icon5 from './../../img/icon5.png'
import icon6 from './../../img/icon6.png'

const Splash = () => {
    return (
        <div className='splashWrapper'>
            <img className='me' src={me} alt='astronaut'/>
            <img className='icon icon1' src={icon1} alt='spaceship'/>
            <img className='icon icon2' src={icon2} alt='planet'/>
            <img className='icon icon3' src={icon3} alt='planet'/>
            <img className='icon icon4' src={icon4} alt='planet'/>
            <img className='icon icon5' src={icon5} alt='ufo'/>
            <img className='icon icon6' src={icon6} alt='star'/>
            <img className='icon icon7' src={icon6} alt='star'/>
            <img className='icon icon8' src={icon6} alt='star'/>
            <img className='icon icon9' src={icon6} alt='star'/>
            <img className='icon icon10' src={icon6} alt='star'/>
            <img className='icon icon11' src={icon6} alt='star'/>
            <div className='circle circle1'></div>
            <div className='circle circle2'></div>
            <div className='circle circle3'></div>
        </div>
    )
}

export default Splash

// astronaut icon is from https://www.flaticon.com/free-icon/astronaut_922645?term=astronaut&page=1&position=29&related_item_id=922645