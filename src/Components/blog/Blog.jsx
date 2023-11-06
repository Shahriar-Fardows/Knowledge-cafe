/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'; // ES6
import { useState } from 'react';
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog, addBookMarks, readingTimes}) => {

    const [isClick , setIsClick] = useState(false);
    const ButtonClick = () =>{
        setIsClick(!isClick)
    }

    const Event = () => {
        ButtonClick();
       if(!isClick){
        addBookMarks(blog);
       }
       
    }

    const Event2 = () =>{
        readingTimes( readingTime ,id );
        setIsClick(false);
    }

    const {id, cover, author_img, postedDate, title, author, readingTime, hashtags } = blog;
    
    return (
        <div>
            <img className='mb-[2rem]' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={author_img} alt="" />
                    <div>
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <span>{readingTime} min</span>
                    <button onClick={Event}>{isClick ? <BsFillBookmarkCheckFill /> : <CiBookmark/>  }</button>   
                </div>
            </div>
            <div className='my-[20px]'>
                <h1 className='text-3xl my-3'>{title}</h1>
                <p className='my-[2rem]'>
                    {
                        hashtags?.map((hashtag, idx) => <span className='mr-[2rem] text-[#111111]'
                            key={idx}
                        >
                            #{hashtag}
                        </span>)
                    }
                </p>
                <button onClick={Event2} className='text-[#6047EC] underline underline-offset-1' href="">Mark as read </button>
            </div>
            <hr /><br />

        </div>
    );
};


Blog.protoTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;