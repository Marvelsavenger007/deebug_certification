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
import btn from "../components/images/btn.png"


const IOSDeveloper = () => {
    const courses1 = [
      { course: "Introduction to iOS Development and Swift", content: ['Overview of iOS development ecosystem', 'Introduction to Swift programming language', 'Setting up Xcode IDE', 'Basics of Xcode playgrounds', 'Introduction to iOS app architecture'] }, 
      { course: "Xcode Storyboards and Interface Builder", content: ['Understanding Xcode Storyboards', 'Working with Interface Builder', 'Designing user interfaces visually', 'Creating Segues and Navigation Controllers', 'Implementing Auto Layout constraints'] },
      { course: "Swift Programming Basics", content: ['Swift syntax fundamentals', 'Constants and Variables', 'Data Types and Collections', 'Control Flow (if statements, loops, switch statements)', ''] },
      { course: "User Interface Development", content: ['UI Development using UIKit', 'Programmatic UI vs. Storyboards vs. SwiftUI', 'Working with Table Views', 'Creating responsive and adaptive UIs', ''] },
      { course: "Understanding Apple Documentation", content: ["Navigating Apple's official documentation", 'Utilizing documentation for Swift and iOS SDK', 'Learning best practices for using documentation effectively', '', ''] },
      { course: "Intermediate Swift Programming", content: ['Advanced control flow (Guard statements, error handling)', 'Functions and Closures', 'Understanding Optionals', 'Error Handling in Swift', ''] },
      { course: "iOS App Design Patterns and Code Structuring", content: ['Introduction to iOS design patterns (MVC, MVVM)', 'Organizing code in Xcode projects', 'Building scalable and maintainable iOS apps', '', ''] },
      { course: "Advanced Swift Programming", content: ['Classes, Structures, and Enums', 'Inheritance and Polymorphism', 'Advanced Optionals and Error Handling', '', ''] },
      { course: "Networking and JSON Parsing", content: ['Working with URLSession for networking', 'Incorporating third-party APIs', 'Parsing JSON data in Swift', '', ''] },
      { course: "Auto Layout Efficiency", content: ['Advanced Auto Layout techniques', 'Improving performance and efficiency in Auto Layout', 'Debugging Auto Layout issues', '', ''] },
      { course: "Location Services", content: ['Integrating Core Location framework', "Working with user's location and MapKit", 'Implementing location-based features in iOS apps', '', ''] },
      { course: "Database Integration", content: ['Introduction to database concepts in iOS', 'Working with Firebase for real-time data storage', 'Implementing database operations in iOS apps', '', ''] },
      { course: "Table Views and CocoaPod Dependencies", content: ['Advanced Table View techniques', 'Working with CocoaPods for dependency management', 'Integrating third-party libraries into iOS projects', '', ''] },
      { course: "Command Line and Terminal", content: ['Basics of command-line tools', 'Understanding terminal commands for iOS development', 'Automating tasks using command-line scripts', '', ''] },
      { course: "SwiftUI and Declarative Programming", content: ['Introduction to SwiftUI framework', 'Building UIs declaratively', 'Integrating SwiftUI with existing UIKit code', '', ''] },
      { course: "Version Control", content: ['Using Git for version control', 'Working with GitHub repositories', 'Understanding branching, merging, and pull requests', '', ''] },
      { course: "Local Data Persistence", content: ['Storing data using UserDefaults', 'Introduction to Core Data for data persistence', 'Using Realm for local data storage', '', ''] },
      { course: "Grand Central Dispatch", content: ['Understanding concurrency in iOS', 'Working with DispatchQueue', 'Implementing multithreading in iOS apps', '', ''] },
      { course: "Testing", content: ['Unit testing with XCTest framework', 'UI testing with XCUITest', 'Test-driven development (TDD) practices', '', ''] },
      { course: "Memory Management", content: ['Understanding memory management in iOS', 'Dealing with memory leaks and retain cycles', 'Utilizing ARC (Automatic Reference Counting)', '', ''] },
      { course: "Dependency Manager", content: ['Introduction to dependency management in iOS', 'Working with CocoaPods and Carthage', 'Managing project dependencies efficiently', '', ''] },
      { course: "In-App Purchases and Apple StoreKit", content: ['Implementing in-app purchases in iOS apps', 'Integrating Apple StoreKit framework', 'Handling transactions and managing products', '', ''] },
      { course: "Core ML and Machine Learning", content: ['Introduction to Core ML framework', 'Implementing machine learning models in iOS apps', 'Integrating Core ML with Vision framework', '', ''] },
      { course: "CreateML and Natural Language Processing", content: ['Creating custom machine learning models with CreateML', 'Implementing natural language processing features', 'Analyzing and processing text data in iOS apps', '', ''] },
      { course: "ARKit and Augmented Reality Apps", content: ['Introduction to ARKit framework', 'Building augmented reality experiences in iOS apps', 'Implementing AR features using SceneKit and RealityKit', '', ''] },
      { course: "App Store Submission Process", content: ['Preparing an iOS app for submission to the App Store', 'Understanding App Store guidelines and requirements', 'Uploading and submitting an app to the App Store Connect platform', '', ''] },
    ];

    
    const courses = [
        {
            title: 'Deebug Institute Certified: Flutter Application Developer',
            category: 'app-development',
            icons: [flutter, dart, git],
            link: "/certification/flutter-application-development"
        },
        {
            title: 'Deebug Institute Certified: Android Developer',
            category: 'app-development',
            icons: [kotlin],
            link: "/certification/android-development"
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


export default IOSDeveloper