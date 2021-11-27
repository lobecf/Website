import Nav from './Nav.js'
import Header from './Header.js'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Wrapper>
      <Nav/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
width: 50%;
`
