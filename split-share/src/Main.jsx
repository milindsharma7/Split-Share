import React, { useState } from 'react'
import './Main.css'

function Main() {
    const [persons,setPersons] = useState([]);
    const [name,setName] = useState('');
    const addPerson = (e) => {
        e.preventDefault();
        setPersons([...persons,name]);
    }
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
                    Given below is the demonstration of the same, here you can enter your friends
                    name along with their total debts, and you will see the result minimizing the
                    total number of payments need to be made. It does not change the total amount 
                    that anyone owes, but it makes it easier to pay people back.
                </p>
                <p>
                    For more details and in depth analysis of the Debt Sharing problem please visit
                    the read more section of the website.
                </p>
            </div>
            <div id='formArea'>
                <h4>Add People:</h4> 
                <form onSubmit={addPerson}>
                    NAME: <input type="text" required placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                    <button type='submit'>ADD</button>
                </form>
                <div>
                    {persons.map(person => {
                        return <div>{person}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main