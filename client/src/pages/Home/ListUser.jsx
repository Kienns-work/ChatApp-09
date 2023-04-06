import React, { useState } from "react";

const ListUsesr = () => {
    return (
        <>
            <div className="listUser-container  l-4 m-4 c-4">
                <div className="account">
                    <div className="icon-chat">
                        <i className="fa-solid fa-comments"></i>
                    </div>
                    <div className="account-avatar"></div>
                </div>
                <div className="listUser-section">
                    <div className="listUser-header">
                        <div className="header-top">
                            <span className="title">Nhóm 9</span>
                            <div className="new-chat">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </div>
                        </div>
                        <div className="header-bottom">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="search" className="search-input" placeholder="Tìm kiếm..." />
                        </div>
                    </div>
                    <div className="listUser-content">
                        <div className="content-item active">
                            <div className="content-left">
                                <div className="listUser-avatar"></div>
                            </div>
                            <div className="content-center">
                                <span className="listUser-name">
                                    Đặng Đình Huy
                                </span>
                                <div className="listUser-message">
                                    Xin chào bạn!
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="listUser-time">
                                    01:13 PM
                                </div>
                                <div className="listUser-notifi">
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="content-left">
                                <div className="listUser-avatar"></div>
                            </div>
                            <div className="content-center">
                                <div className="listUser-name">
                                    Đặng Đình Huy
                                </div>
                                <div className="listUser-message">
                                    Xin chào bạn!
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="listUser-time">
                                    01:13 PM
                                </div>
                                <div className="listUser-notifi">
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ListUsesr;
