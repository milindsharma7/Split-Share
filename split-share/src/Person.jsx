import React from 'react'
import './Person.css'

function Person({from, to, amount}) {

  return (
    <div id='personAdd'>
        <div id='personName'>
            {from}
        </div>
        <div id='personTo'>
            {to}
        </div>
        <div id='personAmount' ty>
            {amount}
        </div>
    </div>
  )
}

export default Person