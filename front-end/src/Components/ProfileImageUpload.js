import React, { useState } from 'react';

const ProfileImageUpload = ({setProfile}) => {
  const [image, setImage] = useState(null);


  const handleImageChange = (e) => {

    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      
    
      setProfile((old)=>{
        return {
          ...old,
          image:URL.createObjectURL(file)
        }
      })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('profile_image', e.target.profile_image.files[0]);

    try {
      const response = await fetch('http://localhost:8080/upload-profile-image', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        console.log(data);
       
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      alert('Error uploading image');
    }
  };

  return (
  
      <input type="file" name="profile_image" accept="image/*" onChange={handleImageChange} />
    
   
  );
};

export default ProfileImageUpload;
