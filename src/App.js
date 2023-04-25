
import './App.css';
import HomeProper from './Component/HomeProper/HomeProper';

import { useState } from 'react';
import store from './Redux/Store';
function App() {
  const [mode,setMode] = useState(false);
  store.subscribe(()=>{
      setMode(store.getState().mode)
  })
   // 
  // 
  return (
    <div className="App" style={!mode ? {backgroundImage:'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80)',backgroundAttachment:'fixed',backgroundSize:'cover',backgroundPosition:'center'}:
    {backgroundImage:'url(https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600)',backgroundAttachment:'fixed',backgroundSize:'cover', backgroundRepeat:'no-repeat'}
   
   }>
      
   <HomeProper/>
    </div>
  );
}

export default App;
