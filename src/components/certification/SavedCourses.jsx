import React, {useState} from 'react';
import add from "../images/add.png"
import node from "../images/nodejs.png";
import react from "../images/react.png";
import mongo from "../images/mongodb.png";
import express from "../images/express.png";
import git from "../images/github.png";
import bin from "../images/trash.png";
import btn from "../images/btn.png";

const SavedCourses = () => {
    const [hasCourses] = useState(false);

    const courses = [        
        {
            title: 'Deebug Institute Certified: Full Stack (MERN) Software Development',
            category: 'software-development',
            icons: [express, react, node, git, mongo],
            link: "/Certification/FullStack(MERN)SoftwareDevelopment"
        },
    ]

  return (
    <div className='my-certificate-main'>
        <div className='my-certificate-top'>
            <h1>Saved Courses</h1>
            <p>Added 12/05/2024 by purpose olikiabo-osagie</p>
        </div>
        <div className='my-certificate-sub'>
            <h1> 0 courses saved</h1>
            {!hasCourses ? (
                <button className='saved-courses-btn'>
                    <img
                        src={add}
                        width="20px"
                        height="20px"
                        alt='icon'
                    />
                    <a href="/">Add course</a>
                </button>
            ) : (
                <div className='courses-container'>
                    {courses.map((course, index) => (
                        <div className='saved-courses-ctn' key={index}>
                            <h2>Certification</h2>
                            <h1><a href={course.link}>{course.title}</a></h1>
                            <div className='imagelevel'>
                                <p> 
                                    Level 
                                    <img
                                        src={btn}
                                        width="5px"
                                        height="5px"
                                        alt='icon'
                                    />
                                    <span>Beginner</span>
                                    </p>
                                <div className='courses-images'>
                                    {course.icons.map((icon, i) => (
                                        <img
                                            key={i}
                                            src={icon}
                                            width="24px"
                                            height="24px"
                                            alt='icon'
                                        />
                                    ))}
                                </div>
                            </div>
                            <hr />
                            <button>
                                <img
                                    src={bin}
                                    width="18px"
                                    height="18px"
                                    alt='icon'
                                />
                                <p>Remove</p>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default SavedCourses