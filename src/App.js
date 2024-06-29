import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />}>
        <Route path="" element={<Landingpage />} />
        <Route path="/CourseApplication" element={<Application />} />
        <Route path='/ExamApplication' element={<ExamApplication />} />
        <Route path="/CertificationRenewal" element={<CertificationRenewal />} />
        <Route path='/Certification/Backend(NodeJS&Express)SoftwareDevelopement' element={<BackendDevelopment />} />
        <Route path="/Certification/FullStack(MERN)SoftwareDevelopment" element={<Fullstack />} />
        <Route path="/Certification/Frontend(ReactJS)SoftwareDevelopment" element={<Frontend />} />
        <Route path="/Certification/UXDesign" element={<UXDesign />} />
        <Route path="/Certification/UIDesign" element={<UIDesign />} />
        <Route path="/Certification/MobileApplicationDevelopment" element={<MobileDev />} />
        <Route path="/Certification/FlutterApplicationDevelopment" element={<FlutterDev />} />
        <Route path="/Certification/AndroidDevelopment" element={<AndroidDev />} />
        <Route path="/Certification/iOSDevelopment" element={<IOSDeveloper />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
