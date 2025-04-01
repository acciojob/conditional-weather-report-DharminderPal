
import React from "react";
import './../styles/App.css';
import WeatchDisplay from "./WeatherDisplay"
const App = () => {
const  [data,setdata] = React.usestate(null)
  React.useEffect(()=>{
    setData({temperature :25 ,conditions:"smooky"})
  },[])




  
  return (
    <div>
        {/* Do not remove the main div */}
data&&  <WeatchDisplay data={data}/>}
    
    </div>
  )
}

export default App
