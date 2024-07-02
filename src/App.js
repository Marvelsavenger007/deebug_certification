import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './home/Home';
import Landingpage from './landingpage/Landingpage';
import Application from './components/application/Application';
import ExamApplication from './components/application/ExamApplication';
import CertificationRenewal from './components/certification/CertificationRenewal';
import BackendDevelopment from './courses/backend/BackendDevelopment';
import Fullstack from './courses/Fullstack';
import Frontend from './courses/Frontend';
import UXDesign from './courses/UXDesign';
import UIDesign from './courses/UIDesign';
import MobileDev from './courses/MobileDev';
import FlutterDev from './courses/FlutterDev';
import AndroidDev from './courses/AndroidDev';
import IOSDeveloper from './courses/IOSDeveloper';
import SignIn from './components/login/SignIn';
import Profile from './components/profile/Profile';
import MyCertificates from './components/certification/MyCertificates';
import SavedCourses from './components/certification/SavedCourses';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <Routes>
      <Route exact path="" element={<Home />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="/sign-in" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
        <Route path="/course-application" element={<Application />} />
        <Route path='/exam-application' element={<ExamApplication />} />
        <Route path="/certification-renewal" element={<CertificationRenewal />} />
        <Route path='/certification/backend-nodejs-express-software-development' element={<BackendDevelopment />} />
        <Route path="/certification/fullstack-mern-software-development" element={<Fullstack />} />
        <Route path="/certification/frontend-reactjs-software-development" element={<Frontend />} />
        <Route path="/certification/ux-design" element={<UXDesign />} />
        <Route path="/certification/ui-design" element={<UIDesign />} />
        <Route path="/certification/mobile-application-development" element={<MobileDev />} />
        <Route path="/certification/flutter-application-development" element={<FlutterDev />} />
        <Route path="/certification/android-development" element={<AndroidDev />} />
        <Route path="/certification/ios-devlopment" element={<IOSDeveloper />} />
        <Route path="/profile" element={<Profile />} />
        <Route  path="/my-certificates" element={<MyCertificates />} />
        <Route path="/saved-courses" element={<SavedCourses />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
