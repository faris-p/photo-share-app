import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Navbar from '../navbar'
import { useSelector } from 'react-redux'
import UserWidget from '../widgets/Userwidget'
import MyPostWidgets from '../widgets/MyPostWidgets'
import PostsWidget from '../widgets/PostsWidget'
import AdvertWidget from '../widgets/AdvertWidgets'
import FriendsListWidget from '../widgets/FriendListWidget'


function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)")
  const {_id, picturePath } = useSelector((state)=>state.user)
  const button = document.querySelector("button")

    if (button) {
    if (window.pageYOffset > 20) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }
  
  return (
    <>
    <Box>
      <Navbar />
      <Box
        width="100%" 
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box  flexBasis={isNonMobileScreens ? "42%" : undefined }
        mt={isNonMobileScreens? undefined : "2rem"}
        > 
        <MyPostWidgets picturePath={picturePath} /> 
        <PostsWidget userId={_id} /> 
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%">
          <AdvertWidget />
          <Box m="2rem 0" />
          <FriendsListWidget userId={_id} />
        </Box>
        }
      </Box>
      <button  
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{
          position: "sticky",
          bottom: "30px",
          left: "1400px", 
          display: "flex",
          alignItems: "end",
          border:"none",
          borderRadius:"40px",
          color:"white",
          background:"rgb(66,209,245)",
          padding:"10px"
        }}
      >
        Top
      </button>
  
    </Box>
        
      </>
  )
}


export default HomePage