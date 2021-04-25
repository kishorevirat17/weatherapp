import React from 'react'
import {Input, Button} from '@material-ui/core'
import './Kishore.css'

const Kishore = ({input,setInput , find}) => {

    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const handleClick = (event) => {
        event.preventDefault()
        find()
    }

    return (
        <div className='inputbox'>
        <div className='inputfield'>
            <h1>Weather App</h1>
            <p>powered by</p>
            <img src="./images/downloads.png" alt="" />  <br /> 
            <form>
            <Input onChange={handleChange} value={input} placeholder="Enter City Name" inputProps={{ 'aria-label': 'description' }} />            <br /> 
            <Button variant="outlined" onClick={handleClick} color="primary" type='submit'>Search</Button>
            </form>
         </div>
         </div>
    )
}

export default Kishore

