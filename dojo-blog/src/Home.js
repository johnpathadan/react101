import { useState } from "react";

const Home = () => {
    const [blogs, serBlogs] = useState([
        {title: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    ]);
    return (
        <div className="homePage">
            {blogs.map((blog)=>(
                
                <div className="blog-preview" key={blog.id}>
                    
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;