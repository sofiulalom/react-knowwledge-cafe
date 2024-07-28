import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingtime }) => {

    return (
        
        <div className='ml-5'>

            <div className='bg-gray-300 p-4 rounded-xl border-2 border-purple-500 mb-5'>
                <h3 className='text-3xl text-center text-purple-500 '>spent time on read: {readingtime.length}</h3>
            </div>
            <div className='ml-5 pb-4 bg-gray-100 '>
                <h1 className='text-2xl text-center p-2'>
                    Bookmarked Blogs: {bookmarks.length}

                </h1>
                {
                    bookmarks.map((bookmark , idx) => <Bookmark key={idx}
                        bookmark={bookmark}

                    ></Bookmark>)
                }
            </div>

          
        </div>
    );
};

export default Bookmarks;