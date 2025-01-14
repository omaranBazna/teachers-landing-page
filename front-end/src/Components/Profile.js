


const Profile = ({profile}) =>{


    return <div style={{width:"100%",height:"100vh"}}>
        <h1>{profile.name}</h1>
        <div>{profile.bio}</div>
    </div>
}


export default Profile;