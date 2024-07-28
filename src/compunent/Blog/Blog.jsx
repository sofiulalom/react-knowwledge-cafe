import React from 'react';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAdToBookMarks, handleAddToReadingTime }) => {
    const { title, cover_img, author_img, author_name, date,time } = blog;
    
    return (
        <div className='bg-gray-50 p-5 rounded-xl'>
            <img className='w-full' src={cover_img} alt="" />
            <div className='flex justify-between
             items-center my-4 mx-4'>
                <div className='flex gap-1  '>
                <img className='w-[50px] rounded-full' src={author_img} alt="" />
                 <div>
                        <h5 className='font-bold'>{author_name} </h5>
                        <span>{date} </span>    
                 </div>
                </div>
                <div className='flex items-center gap-4'>
                    <span>{time}</span>
                    <button onClick={() =>handleAdToBookMarks (blog) }><FaBookmark /> </button> 

                </div>
             
              </div>
            <h1 className='text-4xl'>{title}</h1>
            
            {
                blog.hashtags.map((has, idx) =>
                    <span key={idx} > {has} </span>
                )
            }

            <p>
                <button className='text-2xl  text-purple-600 font-bold underline' onClick={() => handleAddToReadingTime(time)}>
                    Mark as Read
                </button>
           </p>

        </div>
    );
};

export default Blog;