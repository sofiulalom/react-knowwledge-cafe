import React from 'react';
import prifile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto border-b-2  border-gray-600 my-5 py-3 '>
            <h1 className='text-4xl '>knowledge cafe </h1>
            <img className='w-10' src={prifile}  />
        </div>
    );
};

export default Header;