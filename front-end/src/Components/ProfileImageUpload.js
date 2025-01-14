import React, { useState } from 'react';

const ProfileImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('profile_image', e.target.profile_image.files[0]);

    try {
      const response = await fetch('https://608406ad-e8d6-4f28-9239-5a198bf56910-00-2y0f8a29cqdzy.janeway.replit.dev/upload-profile-image', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        alert('Image uploaded successfully');
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      alert('Error uploading image');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="profile_image" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Profile Preview" width="100" />}
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default ProfileImageUpload;
