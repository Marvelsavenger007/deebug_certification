import React, {useState} from 'react';
import "./courses.css"
import down from "../components/images/arrowdown.png";
import badge from "../components/images/DeebugBadge.png";
import backend from "../components/images/frontendsnapshot.webp";
import history from "../components/images/history.png";
import check from "../components/images/check.png";
import certificate from "../components/images/certificate.webp";
import node from "../components/images/nodejs.png";
import react from "../components/images/react.png";
import mongo from "../components/images/mongodb.png";
import express from "../components/images/express.png";
import git from "../components/images/github.png";
import swift from "../components/images/swift.png";
import xcode from "../components/images/xcode.png";
import kotlin from "../components/images/kotlin.png";
import btn from "../components/images/btn.png"


const Fullstack = () => {
    const courses1 = [
      { course: "Fundamentals of Web Development", content: ['Introduction to HTML, CSS, and JavaScript', 'Understanding the Document Object Model (DOM)', 'Introduction to Version Control with Git and GitHub', 'Basics of Command Line and Bash (Unix Shell)'] }, 
      { course: "Frontend Development Essentials", content: ['Advanced JavaScript Techniques', 'Responsive Design Principles', 'Bootstrap for Application Customization', 'Leveraging Frontend Frameworks: React, Angular, Vue.js', 'Introduction to Redux and Context API for State Management'] },
      { course: "Data Structures and Algorithms", content: ['Introduction to Data Structures: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs', 'Understanding Time and Space Complexity', 'Searching and Sorting Algorithms', 'Algorithmic Problem Solving Techniques'] },
      { course: "Testing and Quality Assurance", content: ['Automation Testing Fundamentals', 'Testing React Applications with React Testing Library', 'Comprehensive Frontend Testing with JEST', 'Introduction to Test-Driven Development (TDD)',] },
      { course: "Agile Development and DevOps Practices", content: ['Introduction to Agile Software Development Methodologies', 'Understanding Scrum Framework', 'Continuous Integration and Continuous Deployment (CI/CD) Pipelines', 'DevOps Principles and Best Practices'] },
      { course: "Advanced Frontend Development", content: ['Implementing Reducers and Custom Hooks in React', 'Efficient API Calls in ReactJS using Fetch and Axios', 'JSX Transform and Code Optimization Techniques', 'Performance Optimization Strategies',] },
      { course: "Emerging Technologies and Specializations", content: ['Integration of Artificial Intelligence and Machine Learning in Web Applications', 'Introduction to Web3 and Building Decentralized Applications (DApps)', 'WebSocket Communication for Real-Time Web Applications', 'Internationalization (i18n) and Localization Techniques'] },
      { course: "Backend Development Fundamentals", content: ['Introduction to Backend Development', 'Backend Frameworks (e.g., Express.js, Django, Spring Boot)', 'RESTful API and GraphQL', 'Microservices Architecture'] },
      { course: "DevOps Practices", content: ['Agile Development Methodology (Scrum framework for project management)', 'Continuous Integration and Continuous Delivery (CI/CD)Containerization with Docker', 'Container Orchestration with Kubernetes', 'Cloud Management with Amazon S3'] },
      { course: "Database Management", content: ['Introduction to Database Technologies (relational vs. NoSQL)', 'MongoDB Shell (working with MongoDB databases)', 'Redis (in-memory data store for caching)', 'Caching Mechanisms (improving performance)', 'Message Brokers (e.g., RabbitMQ, Kafka) (communication between services)'] },
      { course: "Backend Testing and Security", content: ['Automation Testing', 'Testing Frameworks (e.g., Jest, Mocha)', 'Test-Driven Development (TDD) and Behavior-Driven Development (BDD)', 'Security Practices for Backend Development', 'Protecting Applications from Vulnerabilities'] },
      { course: "Advanced Backend Development", content: ['Internationalization (adapting backend for different languages)', 'Working with Open AI APIs in Node.js (integrating AI/ML into apps)', 'Scalability and Building Systems for Increased Load (handling high traffic)', 'Performance Optimization Techniques (optimizing backend code)', 'Using Redis for Caching (improving data retrieval speed)'] },
      { course: "Version Control and Collaboration", content: ['Version Control System Implementation with Git and GitHub', 'Collaboration Practices for Software Development', 'Branching Strategies and Pull Requests'] },
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
    const [showAll, setShowAll] = useState(false);
  
    const toggleCourse = (course) => {
      setOpenCourse(openCourse === course ? null : course);
    };
  
    const toggleShowAll = () => {
      setShowAll(!showAll);
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
                <h1>Deebug Institute Certified: Full Stack (MERN) Software Development</h1>
                <h2>Become a proficient Full Stack (MERN) Software Developer with our comprehensive professional course.</h2>
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
                            <li>Eager to master both frontend & backend</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='course-overview'>
            <h1>Course overview</h1>
            <p>
                This course covers all aspects of web development, from frontend essentials like 
                HTML, CSS, and JavaScript to backend fundamentals like RESTful API development 
                and database management. You'll learn to build responsive and scalable web applications 
                using popular frameworks like React.js and Express.js, along with mastering DevOps practices, 
                testing methodologies, and emerging technologies like AI integration and blockchain development.
            </p>
            <p>
                With hands-on projects, real-world case studies, and expert guidance, 
                you'll gain the skills and confidence to succeed as a Full Stack 
                Software Developer in today's competitive tech industry. By successfully 
                completing this comprehensive program, you'll be well-equipped to:
            </p>
        </div>
        <div className="course-content">
            <h1>Course content</h1>
            <p>13 Modules</p>
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
            <button onClick={toggleShowAll}>
                {showAll ? 'Show Less' : 'View More'}
                <img
                    src={down}
                    width="11px"
                    height="11px"
                    alt='icon'
                />
            </button>
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

export default Fullstack