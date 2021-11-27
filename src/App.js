import Nav from './Nav.js'
import styled from 'styled-components'

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
