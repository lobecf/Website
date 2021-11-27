import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Home from "./Home.js"
import styled from 'styled-components'

function Header() {
    return (
      <Router>
        <Wrapper>
        <Link to="/">charlie</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </Wrapper>
      </Router>
    );
  }
  
  export default Header;

const Wrapper = styled.div`
float: left;
width: 50%;
`