import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Bllogs = ({ handleAdToBookMarks, handleAddToReadingTime }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])
    
    return (
        <div className='grid grid-cols-1 gap-6 justify-center items-center'>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAdToBookMarks={handleAdToBookMarks}
                    handleAddToReadingTime={handleAddToReadingTime}
                ></Blog>)
           }
        </div>
    );
};

export default Bllogs;