import React from 'react'
import './ClearButton.css'
export const ClearButton=props=>(
    <div className="clearbutton" onClick={props.handleClear}>
        {props.children}
    </div>
)