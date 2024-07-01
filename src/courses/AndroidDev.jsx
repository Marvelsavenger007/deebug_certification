import React, {useState} from 'react';
import "./courses.css"
import down from "../components/images/arrowdown.png";
import badge from "../components/images/DeebugBadge.png";
import backend from "../components/images/kotlin.webp";
import history from "../components/images/history.png";
import check from "../components/images/check.png";
import certificate from "../components/images/certificate.webp";
import git from "../components/images/github.png";
import xcode from "../components/images/xcode.png";
import flutter from "../components/images/flutter.png";
import dart from "../components/images/dart.png";
import btn from "../components/images/btn.png"


const AndroidDev = () => {
    const courses1 = [
      { course: "Introduction to Android Development", content: ['Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1', 'Content for Course 1'] }, 
      { course: "Android Components", content: ['Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 2', 'Content for Course 2'] },
      { course: "User Interface Design", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Fragments", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Support User Interface Components", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Data Storage", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Multithreading and Asynchronous Programming", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Debugging and Error Handling", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Context and 3rd Party Libraries", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Networking", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Data Format and HTTP", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Android Jetpack", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "UI Components and Enhancements", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Compose", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Design Patterns and Architecture", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Unit Testing and Firebase Integration", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
      { course: "Security and App Release", content: ['Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3', 'Content for Course 3'] },
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
                <h1>Deebug Institute Certified: Android Developer</h1>
                <h2>Become a proficient Android Developer with our  complete comprehensive professional course.</h2>
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
                The Kotlin Android Developer Professional Certificate is a comprehensive 
                program meticulously crafted to equip learners with the essential skills 
                and knowledge required to excel in Android app development using Kotlin. 
                Through a structured curriculum and hands-on learning approach, this course 
                empowers participants to build high-quality, feature-rich Android applications 
                that meet industry standards and user expectations.                
            </p>
            <p>
                This program is designed to cater to both beginners and experienced developers, 
                offering a seamless transition to Kotlin from other programming languages like 
                Java. By focusing on modern practices and industry-standard tools, learners will 
                delve into fundamental and advanced concepts in Android app development, ensuring 
                a solid foundation for their career in mobile application development.
            </p>
        </div>
        <div className="course-content">
            <h1>Course content</h1>
            <p>17 Modules</p>
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
                    <h1>Exam: Android Developer</h1>
                    <p>
                        This exam assesses your skills in developing native Android 
                        applications using Java or Kotlin. Master Android architecture,
                        user interface design, and the Android Studio development 
                        environment and earns you an industry-verified certificate from Deebug.
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

export default AndroidDev