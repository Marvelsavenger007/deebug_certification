import React, {useState} from 'react';
import "../courses.css"
import down from "../../components/images/arrowdown.png";
import badge from "../../components/images/DeebugBadge.png";
import backend from "../../components/images/backenddevfull.webp";
import history from "../../components/images/history.png";
import check from "../../components/images/check.png";
import certificate from "../../components/images/certificate.webp";
import node from "../../components/images/nodejs.png";
import react from "../../components/images/react.png";
import mongo from "../../components/images/mongodb.png";
import express from "../../components/images/express.png";
import git from "../../components/images/github.png";
import swift from "../../components/images/swift.png";
import xcode from "../../components/images/xcode.png";
import kotlin from "../../components/images/kotlin.png";


const BackendDevelopment = () => {
    const courses1 = [
      { course: "Fundamentals of Software Development", content: ['Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1'] },
      { course: "Backend Development Fundamentals", content: ['Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 2'] },
      { course: "DevOps Practices", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Database Management", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Backend Testing and Security", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Advanced Backend Development", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Version Control and Collaboration", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
    ];

    
    const courses = [
        {
            title: 'Deebug Institute Certified: Full Stack (MERN) Software Development',
            category: 'software-development',
            icons: [express, react, node, git, mongo]
        },
        {
            title: 'Deebug Institute Certified: Complete Mobile Application Developer',
            category: 'app-development',
            icons: [react, swift, xcode, kotlin]
        },
        {
            title: 'Deebug Institute Certified: Android Developer',
            category: 'app-development',
            icons: [kotlin]
        },
    ];


 
    const [openCourse, setOpenCourse] = useState(null);

    const toggleCourse = (course) => {
      setOpenCourse(openCourse === course ? null : course);
    };
  

  return (
    <div className='certification-main-ctn'>
        <div className='courses-bground'>
            <div className='course-bground-text'>
                <img
                    src={badge}
                    width="90px"
                    height='70px'
                    alt='icon'
                />
                <p>Certification</p>
                <h1>Deebug Institute Certified: Backend (NodeJS & Express) Software Developement</h1>
                <h2>Become a proficient Backend Software Developer with our comprehensive professional course.</h2>
                <button>Apply now</button>
            </div>
            <div className='course-bground-img'>
                <img
                    src={backend}
                    width="70%"
                    height='100%'
                    alt='icon'
                />
            </div>
        </div>
        <div className='course-details'>
            <h1>Course details</h1>
            <div className='course-duration'>
                <div className='course-duration-child'>
                    <div className='course-duration-props'>
                        <div className='course-duration-content'>
                            <img
                                src={history}
                                width="20px"
                                height="20px"
                                alt='icon'
                            />
                            <h1>Level</h1>
                        </div>
                        <div className='course-duration-props-child'>
                            <p> Beginner</p>
                        </div>
                    </div>
                    <div className='course-duration-props'>
                        <div className='course-duration-content'>
                            <img
                                src={history}
                                width="20px"
                                height="20px"
                                alt='icon'
                            />
                            <h1>Weekly commitment</h1>
                        </div>
                        <div className='course-duration-props-child'>
                            <p>6 hours</p>
                        </div>
                    </div>
                    <div className='course-duration-props'>
                        <div className='course-duration-content'>
                            <img
                                src={history}
                                width="20px"
                                height="20px"
                                alt='icon'
                            />
                            <h1>Price</h1>
                        </div>
                        <div className='course-duration-props-child'>
                            <p> 300,000</p>
                        </div>
                    </div>
                </div>
                <div className='course-duration-child'>
                    <div className='course-duration-props'>
                        <div className='course-duration-content'>
                            <img
                                src={history}
                                width="20px"
                                height="20px"
                                alt='icon'
                            />
                            <h1>Duration</h1>
                        </div>
                        <div className='course-duration-props-child'>
                            <p>4-5 months</p>
                        </div>
                    </div>
                    <div className='course-duration-props'>
                        <div className='course-duration-content'>
                            <img
                                src={history}
                                width="20px"
                                height="20px"
                                alt='icon'
                            />
                            <h1>Prerequisites</h1>
                        </div>
                        <div className='course-duration-props-child'>
                            <li>Basic knowledge of programming concepts.</li>
                            <li>Familiarity with at least one programming language is an advantage.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='course-overview'>
            <h1>Course overview</h1>
            <p>
                This comprehensive course covers a wide range of topics essential 
                for backend development and DevOps practices. Participants will 
                delve into data structures and algorithms, software development 
                methodologies, backend frameworks, containerization, cloud management, 
                and more.
            </p>
            <p>
                Through hands-on projects and real-world examples, learners will 
                gain practical experience and develop the skills needed to build 
                robust, scalable, and secure backend systems.
            </p>
        </div>
        <div className="course-content">
            <h1>Course content</h1>
            <p>7 Modules</p>
            {courses1.map((course) => (
                <div key={course.course} className="course-week">
                <div className="course-header" onClick={() => toggleCourse(course.course)}>
                    <span>{course.course}</span>
                    <img
                    src={down}
                    alt="Toggle"
                    className={`arrow-icon ${openCourse === course.course ? 'rotate-up' : 'rotate-down'}`}
                    />
                </div>
                {openCourse === course.course && (
                    <div className="course-content-detail">
                    {course.content.map((item, index) => (
                        <div key={index} className="course-item">{item}</div>
                    ))}
                    </div>
                )}
                </div>
            ))}
            <h2>View course curriculum</h2>
        </div>
        <div className='course-skill'>
            <h1>Skill measure</h1>
            <p>By successfully completing this comprehensive program, you will be well-equipped to:</p>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Create a basic API endpoint using a backend framework</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Write queries to retrieve and manipulate data using SQL or a document database like MongoDB.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Creating repositories, committing changes, branching, and merging code using Git.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>API Testing</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Implement Basic Security</p>
            </div>
        </div>
        <div className='course-exam'>
            <h1>Certification exam</h1>
            <div className='course-exam-ctn'>
                <div className='course-exam-text'>
                    <h1>Exam: Backend (NodeJS & Express) Software Developement</h1>
                    <p>
                        This exam tests your expertise in building robust backend 
                        applications using Node.js and Express. Master data handling, 
                        API creation, and best practices for clean, maintainable code 
                        and earns you an industry-verified certificate from Deebug.
                    </p>
                    <h2>Application ends in 03: 12: 50</h2>
                    <button>Apply for exam</button>
                </div>
                <div className='course-exam-img'>
                    <img
                        src={certificate}
                        width="100%"
                        height="100%"
                        alt='icon'
                    />                
                </div>
            </div>
        </div>
        <div className='course-renewal'>
            <h1> Renew your certificate for free</h1>
            <p>
                Keep your valuable software development skills sharp and stay 
                up-to-date with the latest advancements! We're offering 
                free/discounted renewal options for your [Certificate Name] certificate.
                Re-enroll now and ensure your credentials stay current without breaking the bank!
            </p>
            <a href='/CertificationRenewal'>Learn more about renewing</a>
        </div>
        <div className='course-related'>
            <h1>Related certifications</h1>
            <div className='courses-container'>
                {courses.map((course, index) => (
                    <div className='individual-courses' key={index}>
                        <h2>Certification</h2>
                        <h1><a href={course.link}>{course.title}</a></h1>
                        <div className='imagelevel'>
                            <p>Level <span>Beginner</span></p>
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
                        <p>Save course</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BackendDevelopment