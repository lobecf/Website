import styled from 'styled-components';

function About () {
    return (
        <div>
            <h1>About</h1>
            <Img src="https://i.imgur.com/5RENSnt.jpeg"/>
            <p>Hello! My name is Charlie and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML and CSS!</p>
        </div>
    )
}

export default About;

const Img = styled.img`
width: 100%;
`