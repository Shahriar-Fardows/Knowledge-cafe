import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";



const Blogs = () => {
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
                blog={blog}
               ></Blog>)
            }
        </div>
    );
};

export default Blogs;