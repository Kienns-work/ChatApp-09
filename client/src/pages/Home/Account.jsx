import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { errorToast, successToast } from "../../config/toastConfig";

const Account = () => {
    const { currentUser } = useContext(AuthContext);
    const [img, setImg] = useState(null);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        setImg(currentUser.photoURL);
    }, [currentUser.photoURL]);
    const handleEditUser = () => {
        successToast('Cập nhật thành công nha!');
    }
    // console.log(currentUser);
    return (
        <>
            <section className='account-section'>
                <div className='account__content grid wide'>
                    <header className='account__header'>
                        <div className='title'>
                            <h3>Cập nhật thông tin tài khoản</h3>
                        </div>
                        <div className='account__header--avatar'>
                            <img src={img} alt='' />
                            <label htmlFor="avatar" className='chane-avatar'>
                                <i className="fa-solid fa-camera"></i>
                            </label>
                            <input type="file" accept='image/*' id='avatar' hidden
                                onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} />
                        </div>
                        <div className='account__header--email'>
                            <p>{currentUser.email}</p>
                        </div>
                    </header>
                    <div className='account__body'>
                        <div className='account-form'>
                            <div className='form-row'>
                                <div className='form-col'>
                                    <label htmlFor='lastName'>Họ</label>
                                    <input className='form-input' type='text' id='lastName'
                                        value={lastName ? lastName : ''}
                                        onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className='form-col'>
                                    <label htmlFor='firstName'>Tên</label>
                                    <input className='form-input' type='text' id='firstName'
                                        value={firstName ? firstName : ''}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-col'>
                                    <label htmlFor='phoneNum'>Số điện thoại</label>
                                    <input className='form-input' type='text' id='phoneNum'
                                        value={phoneNumber ? phoneNumber : ''}
                                        onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                                <div className='form-col'>
                                    <label htmlFor='gender'>Giới tính</label>
                                    <select className='form-select' type='text' id='gender'
                                        onChange={(e) => setGender(e.target.value)}>
                                        <option value='male'>Nam</option>
                                        <option value='female'>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form-col'>
                                <label htmlFor='address'>Địa chỉ</label>
                                <input className='form-input' type='text' id='address'
                                    value={address ? address : ''}
                                    onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className='btn'>
                                <button onClick={() => navigate('/')}>Hủy</button>
                                <button onClick={() => handleEditUser()}>Cập nhật thông tin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Account;
