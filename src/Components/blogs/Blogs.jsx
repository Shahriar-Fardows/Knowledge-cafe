import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";



// eslint-disable-next-line react/prop-types
const Blogs = ({addBookMarks, readingTimes}) => {
    const [blogData , setBlogData] = useState([]);

    useEffect(()=> {
        fetch('api.json')
        .then(res => res.json())
        .then(data => setBlogData(data) )
    },[])

    return (
        <div className="w-2/3">
        
            {
               blogData.map(blog => <Blog
               key={blog.id}
               addBookMarks={addBookMarks}
                blog={blog}
                readingTimes={readingTimes}
               ></Blog>)
            }
        </div>
    );
};

export default Blogs;