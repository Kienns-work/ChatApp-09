import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const HomePage = () => {
    const {currentUser} = useContext(AuthContext);
  return (
    <div>Hi there, Bạn là <b>{currentUser.displayName}</b> và vừa đăng nhập từ Facebook...</div> 
  )
}

export default HomePage