import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import ChatPage from './Home/ChatPage';
import ListUsesr from './Home/ListUser';

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {/* <div>Hi there, Bạn là <b>{currentUser.displayName}</b></div> */}
      <div className='home-container'>
        <div className="home-content grid wide" >
          <div className="row no-gutters">
            <ListUsesr />
            <ChatPage />
          </div>
        </div>
      </div>

    </>
  )
}

export default HomePage