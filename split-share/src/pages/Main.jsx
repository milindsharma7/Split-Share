import React from 'react'
import '../styles/Main.css'
import { Link } from 'react-router-dom';

function Main() {
    const url = 'https://www.researchgate.net/profile/Tom-Verhoeff/publication/220396130_Settling_Multiple_Debts_Efficiently_An_Invitation_to_Computing_Science/links/00463519f239f8a553000000/Settling-Multiple-Debts-Efficiently-An-Invitation-to-Computing-Science.pdf';
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
                    Visit the Working section to see the implementation.
                </p>
                <p>
                    For more details and in depth analysis of the Debt Sharing problem please visit
                    refer <Link to='https://medium.com/@mithunmk93/algorithm-behind-splitwises-debt-simplification-feature-8ac485e97688' target='_blank'>THIS</Link> amazing blog.
                </p>
                <p>
                    For more methods on Debt Simplification you can read <Link to={url} target='_blank'>THIS</Link> research paper.
                </p>
                <p>
                    The code behind the implementation can be found on my <Link to='https://github.com/milindsharma7/Split-Share/blob/master/Max_Flow_Modified.cpp' target='_blank'>GitHub</Link>.
                </p>
            </div>
        </div>
    )
}

export default Main