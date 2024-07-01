import React, {useState} from 'react';
import "./courses.css"
import down from "../components/images/arrowdown.png";
import badge from "../components/images/DeebugBadge.png";
import backend from "../components/images/frontendangular.webp";
import history from "../components/images/history.png";
import check from "../components/images/check.png";
import certificate from "../components/images/certificate.webp";
import adobe from "../components/images/adobe.png";
import adobexd from "../components/images/adobe-xd.png";
import sketch from "../components/images/sketch.png";
import figma from "../components/images/figma.png";
import btn from "../components/images/btn.png"


const Frontend = () => {
    const courses1 = [
      { course: "Fundamentals of Web Development", content: ['Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1'] }, 
      { course: "Frontend Development Essentials", content: ['Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 2'] },
      { course: "Data Structures and Algorithms", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Testing and Quality Assurance", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Agile Development and DevOps Practices", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Advanced Frontend Development", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Emerging Technologies and Specializations", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
    ];

    
    const courses = [
        {
            title: 'Deebug Institute Certified: UI Design',
            category: 'design',
            icons: [adobe, adobexd, sketch, figma],
            link: "/Certification/UIDesign"
        },
        {
            title: 'Deebug Institute Certified: UX Design',
            category: 'design',
            icons: [adobe, adobexd, sketch, figma],
            link: "/Certification/UXDesign"
        },
    ];


 
    const [openCourse, setOpenCourse] = useState(null);
    const [showAll] = useState(false);
  
    const toggleCourse = (course) => {
      setOpenCourse(openCourse === course ? null : course);
    };
  
    // const toggleShowAll = () => {
    //   setShowAll(!showAll);
    // };
  
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
                <h1>Deebug Institute Certified: Frontend (ReactJS) Software Development</h1>
                <h2>Become a proficient Frontend Software Developer with our comprehensive professional course.</h2>
                <button>Apply now</button>
            </div>
            <div className='course-bground-img'>
                <img
                    src={backend}
                    width="100%"
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
                            <p>Beginner</p>
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
                            <p> ₦480,000</p>
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
                            <li>A foundational understanding of programming concepts and basic web development is recommended.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='course-overview'>
            <h1>Course overview</h1>
            <p>
                This comprehensive certification course offers a deep dive into the 
                intersection of software development, frontend engineering, and 
                emerging technologies. Students will gain proficiency in advanced 
                JavaScript techniques, frontend frameworks like React, and essential 
                development tools and methodologies. 
            </p>
            <p>
                The course covers key concepts such as data structures and algorithms, 
                agile development, automation testing, and version control with Git. 
                Furthermore, students will explore cutting-edge topics like artificial 
                intelligence and machine learning integration, and internationalization.
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
                <p>Understanding programming concepts and web technologies</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Working with industry standard version control systems like Git and GitHub</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Capable of building full-fledged web applications from scratch using the MERN stack</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Understand both frontend and backend development concepts.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Utilize industry-standard tools and technologies for building modern web applications.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Implement best practices for testing, security, and version control.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Collaborate effectively within a software development team.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Confident in applying for Full-Stack Developer positions in the job market.</p>
            </div>
        </div>
        <div className='course-exam'>
            <h1>Certification exam</h1>
            <div className='course-exam-ctn'>
                <div className='course-exam-text'>
                    <h1>Exam: Full Stack (MERN) Software Development</h1>
                    <p>
                        This exam tests your MERN expertise: building React UIs, Node APIs, 
                        & MongoDB schemas. Implementing front & back-end logic, writing tests, 
                        and deploy apps. And earns you an industry-verified certificate from Deebug.
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

export default Frontend