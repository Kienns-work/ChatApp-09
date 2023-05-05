import React from 'react'
import ChatPage from './Home/ChatPage';
import ListUsesr from './Home/ListUser';

const HomePage = () => {
  
  return (
    <>
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