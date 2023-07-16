import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div id='mainContent'>
            <div id='headings'>
                <h1>
                    Understanding the Max Flow Algorithm:
                </h1>
                <p>
                    <p><i>"An algorithm must be seen to be believed"</i> — Donald Knuth </p>
                    Therefore to understand how Max Flow algorithm actually works,
                    we will create and test our own Debt Sharing algorithm.
                </p>
                <p>
                    This project is the demonstration of the same, here you can enter your friends
                    name along with their total debts, and you will see the result minimizing the
                    total number of payments need to be made.
                </p>
                <p>
                    It does not change the total amount 
                    that anyone owes, but it makes it easier to pay people back.
                </p>
                <p>
                    For more details and in depth analysis of the Debt Sharing problem please visit
                    the read more section of the website.
                </p>
                <p>
                    Visit the Working section to see the implementation.
                </p>
                <p>
                    The code behind the implementation can be found on my <Link to='https://github.com/milindsharma7/Split-Share/blob/master/Max_Flow_Modified.cpp' target='_blank'>GitHub</Link>.
                </p>
            </div>
        </div>
    )
}

export default Main