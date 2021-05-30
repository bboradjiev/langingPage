import React from 'react'

function FooterIcons() {
    return (
        <section className='footer__icons'>
            <div className='header__icons_section'>
                <p>Project © 2020</p>
                <button className='header__icons__'><img src='icons/facebook.png' alt='facebook'></img></button>
                <button className='header__icons__'><img src='icons/twitter.png' alt='twitter'></img></button>
                <button className='header__icons__'><img src='icons/instagram.png' alt='instagram'></img></button>
            </div>
        </section>
    )
}

export default FooterIcons
