import styled from 'styled-components';
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import About from './About.js';
import Experience from './Experience.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Home from './Home.js';

function Nav() {
  return (
    <Router>
      <Wrapper>
        <Link to="/home">charlie</Link>
        <Link to="/about">about</Link>
        <Link to="/experience">experience</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
        <Link to="/resume">resume</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="resume" element={<Resume/>}/>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default Nav;

const Wrapper = styled.div`
float: right;
width: 50%;
`