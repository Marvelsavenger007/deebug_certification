import React, {useState} from 'react';
import "./courses.css"
import down from "../components/images/arrowdown.png";
import badge from "../components/images/DeebugBadge.png";
import backend from "../components/images/UXdesign.webp";
import history from "../components/images/history.png";
import check from "../components/images/check.png";
import certificate from "../components/images/certificate.webp";
import react from "../components/images/react.png";
import git from "../components/images/github.png";
import adobe from "../components/images/adobe.png";
import adobexd from "../components/images/adobe-xd.png";
import sketch from "../components/images/sketch.png";
import figma from "../components/images/figma.png";
import vue from "../components/images/vuejs.png";
import angular from "../components/images/angularjs.png";
import btn from "../components/images/btn.png"


const UXDesign = () => {
    const courses1 = [
      { course: "Introduction to UX Design", content: ['Definition and importance of UX design', 'User-centered design principles', 'Design thinking process', 'UX design process'] }, 
      { course: "User Research", content: ['User research methods (interviews, surveys, usability testing)', 'User personas and user journeys', 'User research analysis and synthesis'] },
      { course: "User Experience Design", content: ['User experience mapping', 'Wireframing and prototyping', 'Interaction design', 'Visual design principles'] },
      { course: "Usability and Accessibility", content: ['Usability testing and evaluation', 'Accessibility principles and guidelines', 'Inclusive design'] },
      { course: "Interaction Design", content: ['Interaction design patterns', 'Micro-interactions', 'Designing for behavior change' ] },
      { course: "Visual Design", content: ['Visual design principles', 'Color theory and typography', 'Designing for digital products' ] },
      { course: "Design Tools and Software", content: ['Sketching and wireframing tools (Figma, Sketch, Adobe XD)', 'Prototyping tools (InVision, Figma, Adobe XD)', 'Design systems and style guides', 'Knowledge of iOS app design principles, including the Human Interface Guidelines.', 'Knowledge of Android app design principles, including the Material Guidelines.','Google workspace tools'] },
      { course: "Designing for Digital Health", content: ['Healthcare industry overview', 'Designing for patient engagement', 'Designing for healthcare professionals'] },
      { course: "Designing for Business", content: ['Designing for business goals', 'Designing for conversion and sales', 'Designing for user engagement'] },
      { course: "UX Design Best Practices", content: ['Design principles and guidelines', 'Designing for ethics and privacy', 'Designing for scalability and growth'] },
      { course: "Portfolio Development and Career Growth", content: ['Building a UX design portfolio', 'Resume and cover letter writing', 'Interview preparation and career growth'] },
      { course: "Capstone Project", content: ['Applying UX design principles to a real-world project', 'Developing a case study and presenting to stakeholders', 'Deebug Product Design (UX/UI) Professional Certificate (Deebug)'] },
    ];

    
    const courses = [
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
                <h1>Deebug Institute Certified: UX Design</h1>
                <h2>Become a proficient UX Designer with our comprehensive professional course.</h2>
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
                            <li>A passion for design and a commitment to mastering user experience principles.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='course-overview'>
            <h1>Course overview</h1>
            <p>
                Advance your career with our comprehensive Professional UX Design Certification, 
                designed to equip you with the expertise needed to excel in the dynamic field of 
                user experience design. This course delves into all critical aspects of UX design, 
                from foundational principles of user research, information architecture, and interaction design, 
                to advanced practices in usability testing, prototyping, and user interface design. 
            </p>
            <p>
                You will learn to create intuitive and engaging user experiences using industry-standard
                tools like Sketch, Figma, and Adobe XD, while mastering methodologies such as Design 
                Thinking and Lean UX. With hands-on projects, real-world case studies, and expert 
                mentorship, you will develop the skills and confidence to succeed as a UX Designer 
                in today’s competitive market.  By successfully completing this rigorous program, you will be well-equipped to:

            </p>
        </div>
        <div className="course-content">
            <h1>Course content</h1>
            <p>12 Modules</p>
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
                <p>Understand core UX design principles and user-centered design methodologies.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>WorkConduct effective user research and usability testing.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Develop wireframes, prototypes, and high-fidelity designs using leading design tools.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Create responsive and accessible interfaces that enhance user satisfaction.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Implement best practices for information architecture and interaction design.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Collaborate efficiently within cross-functional teams.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Confidently apply for UX Design positions and advance your career in the tech industry.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Build a design portfolio</p>
            </div>
        </div>
        <div className='course-exam'>
            <h1>Certification exam</h1>
            <div className='course-exam-ctn'>
                <div className='course-exam-text'>
                    <h1>Exam: UX Design</h1>
                    <p>
                        This exam tests your ability to design intuitive and engaging user 
                        experiences. Use of different user research methods, information 
                        architecture, and design principles and earns you an industry-verified 
                        certificate from Deebug.
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

export default UXDesign