import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import PageProgressBar from './Components/PageProgressBar'
import WelcomePortal from './Components/WelcomePortal'
import Home from './Pages/Home'
import About from './Pages/about'
import Skills from './Pages/skills'
import Projects from './Pages/projects'
import Certifications from './Pages/certifications'
import Contact from './Pages/Contact'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-wrapper page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  const [hasEntered, setHasEntered] = useState(() => {
    return sessionStorage.getItem('portfolio_entered') === 'true';
  });

  function handleEnter() {
    sessionStorage.setItem('portfolio_entered', 'true');
    setHasEntered(true);
  }

  function handleLock() {
    sessionStorage.removeItem('portfolio_entered');
    setHasEntered(false);
  }

  return (
    <>
      {!hasEntered && <WelcomePortal onEnter={handleEnter} />}
      <Router>
        <ScrollToTop />
        <Navbar onLock={handleLock} />
        <PageProgressBar />
        <main>
          <AnimatedRoutes />
        </main>
      </Router>
    </>
  )
}

export default App
