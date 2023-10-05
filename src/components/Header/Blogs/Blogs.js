import React,{useState} from 'react'
import Blog from './Blog'
import "./Blogs.css"
import blogData from './data'

export default function Blogs() {
    const [blogs , setBlogs] = useState(blogData)

  return (
    <div id="blogs-section" className="w-full flex items-center justify-center mt-60">
        <div className="w-[95%] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h4 className="header-text before:content-['Blogs'] before:mt-[-1rem] before:left-[2rem]">Our Blogs</h4>
                <p className="text-3xl mt-14">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="w-full flex items-center justify-center mt-20">
                <div className="w-[95%] h-auto grid grid-cols-3 gap-12">
                    {blogs.map(blog => (
                        <Blog key={blog.id} {...blog}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
