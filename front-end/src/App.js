import './App.css';
import Profile from './Components/Profile';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
function App() {

  const [profile,setProfile]=useState({
    name:"",
    number:"",
    email:"",
    image:null,
    bio:"",
    YOE:0,
    resume:null
  })
  return (
    <div className="App" style={{
      display:"flex",
     alignItems:"start",
     justifyContent:"center",
     gap:20
    }}>
  
    <Profile profile={profile} />

    <div
    style={{width:10,height:"100vh",background:"rgb(50,50,50)"}}
    ></div>

    <LandingPage setProfile={setProfile} profile={profile} />



    </div>
  );
}

export default App;
