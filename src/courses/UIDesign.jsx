import React, {useState} from 'react';
import "./courses.css"
import down from "../components/images/arrowdown.png";
import badge from "../components/images/DeebugBadge.png";
import backend from "../components/images/uidesign.webp";
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


const UIDesign = () => {
    const courses1 = [
      { course: "Introduction to UI Design", content: ['Definition and importance of UI design', 'User-centered design principles', 'Design thinking process', 'UI design process'] }, 
      { course: "Design Fundamentals", content: ['Color theory and color systems', 'Typography and font selection', 'Layout and composition principles', 'Visual hierarchy and design principles'] },
      { course: "User Interface Design Patterns", content: ['Navigation patterns (tab bars, sidebars, dropdowns)', 'Search patterns (search bars, filters, facets)', 'Form patterns (input fields, buttons, labels)', 'Alert and notification patterns'] },
      { course: "Interaction Design", content: ['Interaction design principles', 'Micro-interactions and animations', 'Designing for behavior change', 'Persuasive design and nudges'] },
      { course: "Visual Design", content: ['Designing for digital products (screens, interactions, accessibility)', 'Designing for mobile and responsive design', 'Designing for wearables and emerging technologies',] },
      { course: "Design Tools and Software", content: ['Sketching and wireframing tools (Figma, Sketch, Adobe XD)', 'Prototyping tools (InVision, Figma, Adobe XD)', 'Design systems and style guides', 'Knowledge of iOS app design principles, including the Human Interface Guidelines.', 'Knowledge of Android app design principles, including the Material Guidelines.', 'Google workspace tools'] },
      { course: "Designing for Digital Health", content: ['Healthcare industry overview', 'Designing for patient engagement', 'Designing for healthcare professionals'] },
      { course: "Designing for Business", content: ['Designing for business goals (conversion rate optimization, sales funnel optimization)', 'Designing for user engagement (personalization, recommendations)', 'Designing for scalability and growth'] },
      { course: "UI Design Best Practices", content: ['Design principles and guidelines', 'Designing for ethics and privacy', 'Designing for accessibility and inclusive design'] },
      { course: "Portfolio Development and Career Growth", content: ['Building a UI design portfolio', 'Resume and cover letter writing', 'Interview preparation and career growth'] },
      { course: "Capstone Project", content: ['Applying UI design principles to a real-world project', 'Developing a case study and presenting to stakeholders'] },
      { course: "Advanced Topics in UI Design", content: ['Designing for emerging technologies (AR, VR, AI)', 'Designing for internationalization and localization', 'Designing for multiple devices and platforms', 'Designing for voice UI and conversational interfaces', 'Designing for accessibility and inclusive design', 'Designing for security and privacy', 'Designing for gamification and engagement', 'Designing for personalization and recommendations'] },
    ];

    
    const courses = [
        {
            title: 'Deebug Institute Certified: UX Design',
            category: 'design',
            icons: [adobe, adobexd, sketch, figma],
            link: "/certification/ux-design"
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
                <h1>Deebug Institute Certified: UI Design</h1>
                <h2>Become a proficient UI Designer with our comprehensive professional course.</h2>
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
                Elevate your design career with our comprehensive Professional UI 
                Design Certification, crafted to provide you with the skills and 
                knowledge necessary to excel in the field of user interface design.
                This course covers all essential aspects of UI design, from the 
                foundational principles of visual design, color theory, and typography 
                to advanced practices in creating interactive and responsive interfaces. 
                You will learn to design stunning and user-friendly interfaces using 
                industry-standard tools like Sketch, Figma, and Adobe XD, and gain proficiency 
                in prototyping and design systems.
            </p>
            <p>
                With hands-on projects, real-world case studies, and expert guidance, 
                you will develop the skills and confidence to succeed as a UI Designer 
                in today’s competitive market.
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
                <p>Understand core UI design principles and best practices.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Master visual design elements such as color, typography, and layout.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Create high-fidelity prototypes and interactive designs using leading design tools.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Implement and maintain design systems for consistent and scalable design.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Collaborate effectively within cross-functional design and development teams.</p>
            </div>
            <div className='course-skill-content'>
                <img
                    src={check}
                    width="22px"
                    height="15px"
                    alt='check'
                />
                <p>Confidently apply for UI Design positions and advance your career in the tech industry.</p>
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

export default UIDesign