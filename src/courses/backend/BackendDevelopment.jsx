import React, {useState} from 'react';
import "../courses.css"
import down from "../../components/images/arrowdown.png";
import badge from "../../components/images/DeebugBadge.png";
import backend from "../../components/images/backenddevfull.webp";
import history from "../../components/images/history.png";
import check from "../../components/images/check.png";
import certificate from "../../components/images/certificate.webp";
import react from "../../components/images/react.png";
import git from "../../components/images/github.png";
import adobe from "../../components/images/adobe.png";
import adobexd from "../../components/images/adobe-xd.png";
import sketch from "../../components/images/sketch.png";
import vue from "../../components/images/vuejs.png";
import angular from "../../components/images/angularjs.png";
import figma from "../../components/images/figma.png";
import btn from "../../components/images/btn.png"


const BackendDevelopment = () => {
    const courses1 = [
      { course: "Fundamentals of Software Development", content: ['Introduction to Programming', 'Data Structures and Algorithms', 'Understanding Time and Space Complexity'] },
      { course: "Backend Development Fundamentals", content: ['Introduction to Backend Development', 'Backend Frameworks (e.g., Express.js, Django, Spring Boot)', 'RESTful API and GraphQL', 'Microservices Architecture'] },
      { course: "DevOps Practices", content: ['Agile Development Methodology', 'Continuous Integration and Continuous Delivery (CI/CD)', 'Containerization with Docker', 'Container Orchestration with Kubernetes', 'Cloud Management with Amazon S3'] },
      { course: "Database Management", content: ['Introduction to Database Technologies', 'MongoDB Shell', 'Redis', 'Caching Mechanisms', 'Message Brokers (e.g., RabbitMQ, Kafka)'] },
      { course: "Backend Testing and Security", content: ['Automation Testing', 'Testing Frameworks (e.g., Jest, Mocha)', 'Test-Driven Development (TDD) and Behavior-Driven Development (BDD)', 'Security Practices for Backend Development', 'Protecting Applications from Vulnerabilities'] },
      { course: "Advanced Backend Development", content: ['Internationalization', 'Working with Open AI APIs in Node.js', 'Scalability and Building Systems for Increased Load', 'Performance Optimization Techniques', 'Using Redis for Caching'] },
      { course: "Version Control and Collaboration", content: ['Version Control System Implementation with Git and GitHub', 'Collaboration Practices for Software Development', 'Branching Strategies and Pull Requests',] },
    ];

    
    const courses = [
        {
            title: 'Deebug Institute Certified: UX Design',
            category: 'design',
            icons: [adobe, adobexd, sketch, figma],
            link: "/certification/ux-design"
        },
        {
            title: 'Deebug Institute Certified: UI Design',
            category: 'design',
            icons: [adobe, adobexd, sketch, figma],
            link: "/certification/ui-design"
        },
        {
            title: 'Deebug Institute Certified: Frontend (ReactJS) Software Developer',
            category: 'software-development',
            icons: [react, vue, git, angular],
            link: "/certification/frontend-reactjs-software-development"
        },
    ];


 
  
    const [openCourse, setOpenCourse] = useState(null);
    const [showAll] = useState(false);
  
    const toggleCourse = (course) => {
      setOpenCourse(openCourse === course ? null : course);
    };
  
    const displayedCourses = showAll ? courses1 : courses1.slice(0, 10);
  

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
                            <p>₦300,000</p>
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
            {displayedCourses.map((course) => (
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
            <a href='/certification-renewal'>Learn more about renewing</a>
        </div>
        <div className='course-related'>
            <h1>Related certifications</h1>
            <div className='courses-container'>
                {courses.map((course, index) => (
                    <div className='individual-courses' key={index}>
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
                        <p>Save course</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BackendDevelopment