import React from "react";



const ChatPage = () => {

    return (
        <>
            <div className="chatpage-container col l-8 m-8 c-8">
                <div className="chatpage-header">
                    <div className="header-left">
                        <div className="info-user">
                            <div className="chatpage-avatar"></div>
                            <span className="chatpage-name">Đặng Đình Huy</span>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="more-info">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                </div>
                <div className="chatpage-content">

                </div>
                <div className="chatpage-footer">
                    <div className="input-messsage">
                        <input type="text" className="text-message" placeholder="Nhập tin nhắn" />
                        <div className="file-message">
                            <label htmlFor="file" className="file-input">
                                <i className="fa-solid fa-paperclip"></i>
                            </label>
                            <input type="file" hidden id="file" />
                            <div className="icon">
                                <i className="fa-regular fa-face-smile"></i>
                            </div>
                        </div>
                    </div>
                    <div className="btn-send">
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPage;
