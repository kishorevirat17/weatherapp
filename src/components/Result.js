import React from 'react'
import {Button} from '@material-ui/core'
import './Result.css'



const Result = ({temp,icon,desc,setTemp}) => {
    return (
        <div className='final'>
            <div className="restbox">
                <h1>Temp : {temp}</h1>
                <p>{desc}</p>
                <img src={icon} alt="logo" /><br />
                <Button variant="contained" color="primary" type='submit' onClick={()=>setTemp('')}> Back</Button>
            </div>
            
        </div>
    )
}

export default Result
