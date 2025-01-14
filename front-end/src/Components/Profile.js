


const Profile = ({profile}) =>{


    return <div style={{width:"100%",height:"100vh"}}>
        <img style={{width:128,height:128}} src={profile.image}/>
        <h1>{profile.name}</h1>
        <div>{profile.bio}</div>
        <div>{profile.YOE}</div>
    </div>
}


export default Profile;