'use client'
import Preview from '@/components/builder/Preview'
import Sidebar from '@/components/builder/Sidebar'
import { useBuilderProfile } from '@/hooks/useBuilderProfile'
import getToken from '@/lib/auth/getToken'
import { createCardProfile, getCardProfile } from '@/lib/localStorage'
import { useEffect } from 'react'
const BuilderContainer = () => {
  const {changeName, changePosition, changeBio, changeProfilePhoto, changeCoverPhoto} = useBuilderProfile((state) => state)
 
  useEffect(() => {
    if(!getCardProfile('card')){
      createCardProfile();
    } else if(getCardProfile('card').hasData) {
      const data = getCardProfile('card');
      changeName(data.profile.name);
      changePosition(data.profile.position);
      changeBio(data.profile.bio);
      changeProfilePhoto(data.profile.profilePhoto);
      changeCoverPhoto(data.profile.coverPhoto);
    } else {
      getToken().then((response) => changeName(response.user.name))
      console.log("getting token");
      
    }
  }, [])

  return (
    <>
      <Sidebar/>
      <Preview/>
    </>
  )
}

export default BuilderContainer