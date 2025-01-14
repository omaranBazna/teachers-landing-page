import './App.css';
import Profile from './Components/Profile';
import { useState } from 'react';
import ProfileImageUpload from './Components/ProfileImageUpload';

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
    <form style={{
    width:"100%",
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:10,
    flexDirection:"column"
      }}>
      <input placeholder='name' value={profile.name} name="name" onChange={(e)=>{
        
        setProfile((old=>{
          return {
            ...old,
            [e.target.name]:e.target.value
          }
        }))
      }} />


<input placeholder='bio' value={profile.bio} name="bio" onChange={(e)=>{
        
        setProfile((old=>{
          return {
            ...old,
            [e.target.name]:e.target.value
          }
        }))
      }} />
          <ProfileImageUpload setProfile={setProfile}/>
    </form>


    </div>
  );
}

export default App;
