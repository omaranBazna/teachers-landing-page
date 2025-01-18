import ProfileImageUpload from '../Components/ProfileImageUpload';
import { useState , useMemo } from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

import Select from 'react-select'
import countryList from 'react-select-country-list'



const cacheRtl = createCache({
    key: 'mui-rtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  
  const theme = createTheme({
    direction: 'rtl', // Set the direction to RTL
  });
  

const Pages = ({index,profile,setProfile})=>{
    const [phone, setPhone] = useState('');
    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

    if(index==0){
        return <>
        <form style={{
    width:"100%",
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:10,
    flexDirection:"column"
      }}>
        <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <TextField 
          value={profile.name}
          onChange={(e)=>{
           setProfile((old)=>{
            return {...old,name:e.target.value}
           })
          }}
          
          id="outlined-basic" label="الإسم الكامل" variant="outlined" />
        </div>

        <div dir="rtl">
     


        </div>
      </ThemeProvider>
    </CacheProvider>

       <PhoneInput
      country={'sa'}
      value={phone}
      onChange={(phone) => setPhone(phone)}
      inputStyle={{ width: '100%' }}
    />
    <Select options={options} value={value} onChange={changeHandler} />
          <ProfileImageUpload setProfile={setProfile}/>
    </form>
    </>
    }
}


const LandingPage = ({setProfile,profile})=>{

    const [index,setIndex] = useState(0);

    return <div style={{width:"100%"}}>
    <Pages profile={profile}  setProfile={setProfile}   index={index}/>
    <button onClick={()=>{
        setIndex((index)=>index+1);
    }}>Next page</button>
    </div>

   
}

export default LandingPage;