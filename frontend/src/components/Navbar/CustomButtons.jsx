// import { useState, useEffect } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";


const CustomButtons = () => {
    const navigate = useNavigate();
    const handleUser = () => {
        navigate('/login');
    };

    return (
        <div className="relative flex justify-between items-center gap-6 text-2xl">
            <button className="text-black hover:text-[#175D00] transition ease-in relative">
                <IoSearch onClick={() => navigate('/search')}/>
            </button>
            {/* <div className="relative" ref={notificationsRef}>
                <button
                    className="text-white pt-2 hover:text-[#175D00] transition ease-in relative"
                    onClick={toggleNotifications}
                >
                    {unread && (
                        <span className="absolute top-2 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                    <IoMdNotificationsOutline />
                </button>
                {showNotifications && (
                    <div className="absolute right-0 flex mt-2 w-80 bg-white rounded shadow-lg">
                        <Notifications notifications={notifications} />
                    </div>
                )}
            </div> */}
            <button className="text-black hover:text-[#175D00] transition ease-in" onClick={handleUser}>
                <FaRegCircleUser />
            </button>
        </div>
    );
};

export default CustomButtons;