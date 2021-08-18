import React from 'react'

import Line from '../components/line'

export default function footer() {
    return (
        <footer>
            <Line />
            <div className="footwrap percent">            
                <a href="https://github.com/wikidbrit" target="_blank" rel="noreferrer">GitHub</a><p> </p><a href="https://www.instagram.com/pfwikid/" target="_blank" rel="noreferrer">Instagram</a><p> </p><a href="https://www.linkedin.com/in/pflemingonline/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <p className="percent">paul.fleming@hyperisland.se</p>
            <p className="percent">©2021 Paul Fleming</p>
        </footer>
    )
}
