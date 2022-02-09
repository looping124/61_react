import React from 'react';
import { useParams } from 'react-router-dom';

function Profile(props) {
  const params = useParams()
  console.log("🚀 ~ file: Profile.jsx ~ line 6 ~ Profile ~ params", params)
  return (
    <div>
      <h1>Votre profil</h1>
    </div>
  );
}

export default Profile;