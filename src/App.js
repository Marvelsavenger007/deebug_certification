import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Landingpage from './landingpage/Landingpage';
import Application from './components/application/Application';
import ExamApplication from './components/application/ExamApplication';
import CertificationRenewal from './components/certification/CertificationRenewal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />}>
        <Route path="" element={<Landingpage />} />
        <Route path="/CourseApplication" element={<Application />} />
        <Route path='/ExamApplication' element={<ExamApplication />} />
        <Route path="/CertificationRenewal" element={<CertificationRenewal />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
