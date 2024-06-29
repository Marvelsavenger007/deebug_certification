import React, {useState} from 'react';
import "./courses.css"
import down from "../components/images/arrowdown.png";
import badge from "../components/images/DeebugBadge.png";
import backend from "../components/images/iosdev.webp";
import history from "../components/images/history.png";
import check from "../components/images/check.png";
import certificate from "../components/images/certificate.webp";
import git from "../components/images/github.png";
import flutter from "../components/images/flutter.png";
import dart from "../components/images/dart.png";
import kotlin from "../components/images/kotlin.png";


const IOSDeveloper = () => {
    const courses1 = [
      { course: "Introduction to iOS Development and Swift", content: ['Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1'] }, 
      { course: "Xcode Storyboards and Interface Builder", content: ['Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 3'] },
      { course: "Swift Programming Basics", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "User Interface Development", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Understanding Apple Documentation", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Intermediate Swift Programming", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "iOS App Design Patterns and Code Structuring", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Advanced Swift Programming", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Networking and JSON Parsing", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Auto Layout Efficiency", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Location Services", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Database Integration", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Table Views and CocoaPod Dependencies", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Command Line and Terminal", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "SwiftUI and Declarative Programming", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Version Control", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Local Data Persistence", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Grand Central Dispatch", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Testing", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Memory Management", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Dependency Manager", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "In-App Purchases and Apple StoreKit", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Core ML and Machine Learning", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "CreateML and Natural Language Processing", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "ARKit and Augmented Reality Apps", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "App Store Submission Process", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
    ];

    
    const courses = [
        {
            title: 'Deebug Institute Certified: Flutter Application Developer',
            category: 'app-development',
            icons: [flutter, dart, git],
            link: "/Certification/FlutterApplicationDevelopment"
        },
        {
            title: 'Deebug Institute Certified: Android Developer',
            category: 'app-development',
            icons: [kotlin],
            link: "/Certification/AndroidDevelopment"
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
                <h1>Deebug Institute Certified: iOS Developer</h1>
                <h2>Become a proficient IOS App Developer with our  complete comprehensive professional course.</h2>
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
                            <p> ₦250,000</p>
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
                        <li>Solid understanding of programming fundamentals.</li>
                        <li>Curiosity for learning new technologies.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='course-overview'>
            <h1>Course overview</h1>
            <p>
                Our comprehensive Swift Android Developer Professional 
                Certificate opens the door to mastering iOS development 
                with Swift. Whether you're starting fresh or aiming to 
                advance your skills, this course provides everything you 
                need to craft top-tier iOS apps. Dive into iOS development 
                with confidence and precision through our immersive learning 
                experience. Whether you're a newcomer eager to explore iOS 
                app creation or a seasoned developer aiming to refine your 
                expertise, our curriculum is tailored to meet your learning goals.
            </p>
            <p>
                Unleash the potential of Swift and leverage its capabilities 
                to build dynamic, feature-rich iOS apps that captivate and inspire. 
                Covering foundational concepts and advanced techniques, our course 
                equips you to create exceptional user experiences and fuel innovation 
                in the mobile landscape.
            </p>
        </div>
        <div className="course-content">
            <h1>Course content</h1>
            <p>26 Modules</p>
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
                <p>Craft native iOS applications using Xcode, Swift, and core functionalities like UI development, data management, and user interaction.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p> Integrate with APIs, parse JSON data, and implement data storage.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Gain a solid understanding of essential concepts like Auto Layout, memory management, and design patterns (MVC/MVVM) to write clean and maintainable code.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Utilize Git for effective code management, collaboration, and version control for your iOS development projects.</p>
            </div>
        </div>
        <div className='course-exam'>
            <h1>Certification exam</h1>
            <div className='course-exam-ctn'>
                <div className='course-exam-text'>
                    <h1>Exam: iOS Developer</h1>
                    <p>
                        This exam tests your expertise in building native iOS applications with Swift. 
                        Apple's development tools, frameworks, and best practices for creating engaging 
                        iOS experiences and earns you an industry-verified certificate from Deebug.
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


export default IOSDeveloper