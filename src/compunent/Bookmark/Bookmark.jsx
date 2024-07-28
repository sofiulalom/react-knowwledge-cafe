import React from 'react';

const Bookmark = ({ bookmark,  }) => {
    const { title } = bookmark;
   
    return (
        <div className='bg-white m-5 p-5 rounded-xl'>
            <h1 className='text-2xl'> {title} </h1>
        </div>
    );
};

export default Bookmark;