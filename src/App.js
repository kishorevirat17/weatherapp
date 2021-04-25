import Kishore from './components/Kishore'
import './App.css';
import React,{useState} from 'react'
import axios from 'axios';
import Result from './components/Result';


function App() {

  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("")
  const [desc, setDesc] = useState("")
  const [icon, setIcon] = useState("")

  const find = async() =>{
    const apiKey="8274a0d4821f15c671803e116fabfdfc"
    const unit ="metric"
    const url ="https://api.openweathermap.org/data/2.5/weather?q=" +input +"&appid=" + apiKey +"&units=" +unit;
    const response =await axios.get(url)
    const temp=await response.data.main.temp;
    const desc =await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL ="https://openweathermap.org/img/wn/" + icon +"@2x.png"
    console.log(temp,desc,imageURL)
    setTemp(temp)
    setDesc(desc)
    setIcon(imageURL)
    setInput('')
  }

  return (
    <div>
      {temp === '' ? (
     <Kishore input={input} setInput={setInput} find={find} />) :
     (<Result temp={temp}  desc={desc} icon={icon} setTemp={setTemp} />) }
    </div>
  );
}

export default App;
