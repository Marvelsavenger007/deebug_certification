import React, {useState} from 'react';
import "./landingpage.css";
import deebug3d from "../components/images/deebug3d.webp";
import node from "../components/images/nodejs.png";
import react from "../components/images/react.png";
import mongo from "../components/images/mongodb.png";
import express from "../components/images/express.png";
import git from "../components/images/github.png";
import spring from "../components/images/spring.png";
import django from "../components/images/django.png";
import vue from "../components/images/vuejs.png";
import swift from "../components/images/swift.png";
import angular from "../components/images/angularjs.png";
import adobe from "../components/images/adobe.png";
import adobexd from "../components/images/adobe-xd.png";
import sketch from "../components/images/sketch.png";
import xcode from "../components/images/xcode.png";
import kotlin from "../components/images/kotlin.png";
import figma from "../components/images/figma.png";
import flutter from "../components/images/flutter.png";
import dart from "../components/images/dart.png";
import btn from "../components/images/btn.png"

const Landingpage = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const courses = [
        {
            title: 'Deebug Institute Certified: Full Stack (MERN) Software Development',
            category: 'software-development',
            icons: [express, react, node, git, mongo],
            link: "/Certification/FullStack(MERN)SoftwareDevelopment"
        },
        {
            title: 'Deebug Institute Certified: Backend (NodeJS & Express) Software Developer',
            category: 'software-development',
            icons: [node, spring, git, django],
            link: "/Certification/Backend(NodeJS&Express)SoftwareDevelopement"
        },
        {
            title: 'Deebug Institute Certified: Frontend (ReactJS) Software Developer',
            category: 'software-development',
            icons: [react, vue, git, angular],
            link: "/Certification/Frontend(ReactJS)SoftwareDevelopment"
        },
        {
            title: 'Deebug Institute Certified: UX Design',
            category: 'design',
            icons: [adobe, adobexd, sketch, figma],
            link: "/Certification/UXDesign"
        },
        {
            title: 'Deebug Institute Certified: UI Design',
            category: 'design',
            icons: [adobe, adobexd, sketch, figma],
            link: "/Certification/UIDesign"
        },
        {
            title: 'Deebug Institute Certified: Complete Mobile Application Developer',
            category: 'app-development',
            icons: [react, swift, xcode, kotlin],
            link: "/Certification/MobileApplicationDevelopment"
        },
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
        {
            title: 'Deebug Institute Certified: iOS Developer',
            category: 'app-development',
            icons: [xcode],
            link: "/Certification/iOSDevelopment"
        },
    ];

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

   

  return (
    <div>
        <div className='homepage-bground'>
            <div className='homepage-bground-text'>
                <h1>Deebug Certification</h1>
                <p>
                    Advance your skills and become indispensable in your chosen 
                    field of study with our industry-recognized and verified 
                    certifications.  Earning our certification demonstrates
                    your proficiency and sets you apart from the competition.
                </p>
            </div>
            <div className='homepage-bground-img'>
                <img
                    src={deebug3d}
                    width="900px"
                    height="170%"
                    alt='Deebug'
                />
            </div>
        </div>
        <div className='courses-main-ctn'>
            <label>Filter</label>
            <select id="course-filter" onChange={handleFilterChange} value={selectedFilter}>
                <option value="all">All Courses</option>
                <option value="app-development">App Development</option>
                <option value="design">Design</option>
                <option value="research">Research</option>
                <option value="software-development">Software Development</option>
            </select>
            <div className='courses-container'>
                {courses.map((course, index) => {
                    if (selectedFilter === 'all' || course.category === selectedFilter) {
                        return (
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
                        );
                    } else {
                        return null; 
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default Landingpage