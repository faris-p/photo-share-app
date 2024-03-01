import React from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const { userId } = useParams();
  return (
    <div>
      ProfilePage {userId}
    </div>
  );
}

export default ProfilePage;