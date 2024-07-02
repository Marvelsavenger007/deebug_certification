import React, {useState} from 'react';
import "./courses.css"
import down from "../components/images/arrowdown.png";
import badge from "../components/images/DeebugBadge.png";
import backend from "../components/images/flutterdevfull.webp";
import history from "../components/images/history.png";
import check from "../components/images/check.png";
import certificate from "../components/images/certificate.webp";
import adobe from "../components/images/adobe.png";
import adobexd from "../components/images/adobe-xd.png";
import sketch from "../components/images/sketch.png";
import figma from "../components/images/figma.png";
import node from "../components/images/nodejs.png";
import git from "../components/images/github.png";
import spring from "../components/images/spring.png";
import django from "../components/images/django.png";
import btn from "../components/images/btn.png"



const MobileDev = () => {
    const courses1 = [
      { course: "Introduction to Mobile App Development", content: ['Understanding mobile platforms (iOS, Android).', 'Differences between mobile and web applications.', 'Types of mobile apps (native, hybrid, web).', 'Introduction to frameworks like React Native and Swift.'] }, 
      { course: "Basics of Programming and Mobile Development Tools", content: ['Basics of programming languages (Java, Kotlin, Swift).', 'Introduction to IDEs (Android Studio, Xcode).', 'Overview of SDKs and APIs.', 'Introduction to React Native and Swift frameworks.'] },
      { course: "User Interface (UI) Design for Mobile Apps", content: ['Designing for different screen sizes and resolutions.', 'User interaction and navigation.', 'Introduction to wireframing and prototyping tools.', 'UI design in React Native and Swift.'] },
      { course: "Introduction to Mobile App Development Platforms", content: ['iOS app development ecosystem.', 'Android app development ecosystem.', 'Comparison between iOS and Android platforms.', 'Introduction to React Native and its advantages.'] },
      { course: "Building Your First Mobile App", content: ['Setting up a development environment.', 'Creating a basic user interface.', 'Implementing functionality and navigation.', 'Testing and debugging.', 'State management in React Native and Swift.'] },
      { course: "Advanced Topics in Mobile App Development", content: ['Advanced UI/UX design principles.', 'Data storage and management.', 'Security considerations in mobile app development.', 'Performance optimization.', 'Deep linking and navigation in React Native and Swift.'] },
      { course: "Working with APIs and Integrating Backend Services", content: ['Understanding RESTful APIs.', 'Making HTTP requests.', 'Authentication and authorization.', 'Handling JSON data.', 'Firebase integration with React Native and Swift.'] },
      { course: "Testing and Deployment", content: ['Different types of testing (unit testing, integration testing, user testing).', 'App deployment process.', 'Publishing apps to app stores (Google Play Store, Apple App Store).', 'Continuous integration and delivery.'] },
      { course: "Version Control and Collaboration", content: ['Version Control System Implementation with Git and GitHub', 'Collaboration Practices for Software Development', 'Branching Strategies and Pull Requests'] },
    ];

    
    const courses = [
        {
            title: 'Deebug Institute Certified: UI Design',
            category: 'design',
            icons: [adobe, adobexd, sketch, figma],
            link: "/certification/ui-design"
        },
        {
            title: 'Deebug Institute Certified: UX Design',
            category: 'design',
            icons: [adobe, adobexd, sketch, figma],
            link: "/certification/ux-design"
        },
        {
            title: 'Deebug Institute Certified: Backend (NodeJS & Express) Software Developer',
            category: 'software-development',
            icons: [node, spring, git, django],
            link: "/certification/backend-nodejs-express-software-development"
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
                <h1>Deebug Institute Certified: Complete Mobile Application Development</h1>
                <h2>Become a proficient Mobile App Developer with our  complete comprehensive professional course.</h2>
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
                This comprehensive course covers a wide range of topics essential for mobile 
                app development with Flutter. Participants will delve into iOS and Android app 
                design principles, app publishing processes, location-aware apps, software 
                development principles, app architecture, testing, state management, 
                platform-specific integrations, and deployment to app stores.
            </p>
            <p>
                Through hands-on projects and real-world examples, learners will gain 
                practical experience and develop the skills needed to build high-quality, 
                cross-platform mobile applications. By the end of the course, participants 
                will be equipped to create responsive and feature-rich mobile apps for both 
                Android and iOS platforms.
            </p>
        </div>
        <div className="course-content">
            <h1>Course content</h1>
            <p>9 Modules</p>
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
                <p>Understanding basic languages like Java, Kotlin, or Swift to implement app functionality</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Develop a wireframe or mockup showcasing user interface design principles for a mobile app screen</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Use tools like Android Studio or Xcode, create a simple app with UI, navigation, and core functionality</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Identify and explain different testing methods used to ensure a mobile app functions correctly </p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Demonstrate creating a Git repository, committing changes, and branching for a mobile app project</p>
            </div>
        </div>
        <div className='course-exam'>
            <h1>Certification exam</h1>
            <div className='course-exam-ctn'>
                <div className='course-exam-text'>
                    <h1>Exam: Complete Mobile Application Development</h1>
                    <p>
                        This exam assesses your expertise in both mobile app development 
                        and backend development for mobile applications. Use popular frameworks 
                        and best practices for native and cross-platform development and earns 
                        you an industry-verified certificate from Deebug.
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

export default MobileDev