import React, {useState} from 'react';
import "./courses.css"
import down from "../components/images/arrowdown.png";
import badge from "../components/images/DeebugBadge.png";
import backend from "../components/images/fluttersingle.webp";
import history from "../components/images/history.png";
import check from "../components/images/check.png";
import certificate from "../components/images/certificate.webp";
import git from "../components/images/github.png";
import xcode from "../components/images/xcode.png";
import flutter from "../components/images/flutter.png";
import dart from "../components/images/dart.png";
import btn from "../components/images/btn.png"



const FlutterDev = () => {
    const courses1 = [
      { course: "Introduction to Flutter Development", content: ['Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1'] }, 
      { course: "Building User Interfaces with Flutter", content: ['Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 2'] },
      { course: "State Management in Flutter", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Navigation and Routing in Flutter", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Networking and Data Management", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Firebase Integration", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Push Notifications and Cloud Messaging", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Handling Device Features and Sensors", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Testing and Debugging Techniques", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Internationalization and Localization", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Introduction to Data Structures and Algorithms", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Agile Development and DevOps Practices", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Automation Testing", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Bash (Unix Shell)", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Security Considerations", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Deployment and Continuous Integration", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Version Control and Collaboration", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Advanced Topics and Integration", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
    ];

    
    const courses = [
        {
            title: 'Deebug Institute Certified: Flutter Application Developer',
            category: 'app-development',
            icons: [flutter, dart, git],
            link: "/Certification/FlutterApplicationDevelopment"
        },
        {
            title: 'Deebug Institute Certified: iOS Developer',
            category: 'app-development',
            icons: [xcode],
            link: "/Certification/iOSDevelopment"
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
                <h1>Deebug Institute Certified: Flutter Application Development</h1>
                <h2>Become a proficient Flutter App Developer with our  complete comprehensive professional course.</h2>
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
                The Flutter Application Developer Professional Certificate is designed 
                to equip learners with the skills and knowledge necessary to become 
                proficient Flutter developers. This comprehensive program covers everything 
                from the basics of Flutter to advanced topics in app development. By the 
                end of the course, learners will be able to develop cross-platform mobile 
                applications using Flutter, a popular UI toolkit from Google.
            </p>
        </div>
        <div className="course-content">
            <h1>Course content</h1>
            <p>18 Modules</p>
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
                <p>Create a simple app with UI elements (using Widgets), user interaction (Buttons, Text Fields), and state management </p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Make an HTTP request using Flutter to retrieve data from an API and display it within your app</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Set up Firebase and implement a feature like user authentication or real-time data synchronization </p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Create a unit test to ensure a specific Flutter widget behaves as expected </p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Prepare and deploy a Flutter app to an app store (Android or iOS) using tools like Git and CI/CD</p>
            </div>
        </div>
        <div className='course-exam'>
            <h1>Certification exam</h1>
            <div className='course-exam-ctn'>
                <div className='course-exam-text'>
                    <h1>Exam: Flutter Application Development</h1>
                    <p>
                        This exam tests your proficiency in building beautiful and performance
                        mobile apps using the Flutter framework, also its declarative UI, state 
                        management, and other platform-specific features and earns you an 
                        industry-verified certificate from Deebug.
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

export default FlutterDev