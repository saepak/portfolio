import React from 'react'
import icon5 from './../../img/icon5.png'
import icon6 from './../../img/icon6.png'
import me from './../../img/me.png'

const Header = () => {
    return (
        <header className='headerBox'>
            <img className='me' src={me} alt='astronaut' />
            <img className='starIcon icon1' src={icon6} alt='star' />
            <img className='starIcon icon2' src={icon6} alt='star' />
            <img className='starIcon icon3' src={icon6} alt='star' />
            <img className='starIcon icon4' src={icon6} alt='star' />
            <img className='starIcon icon5' src={icon6} alt='star' />
            <img className='starIcon icon6' src={icon6} alt='star' />
            <img className='starIcon icon7' src={icon6} alt='star' />
            <img className='starIcon icon8' src={icon5} alt='star' />
        </header>
    )
}

export default Header

