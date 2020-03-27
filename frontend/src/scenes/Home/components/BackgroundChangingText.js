import React, {useState} from "react";
import styled from "styled-components";

import changingBackground1 from "../assets/home-changing-1.jpg";
import changingBackground2 from "../assets/home-changing-2.jpg";
import changingBackground3 from "../assets/home-changing-3.jpg";
import changingBackground4 from "../assets/home-changing-4.jpg";
import changingBackground5 from "../assets/home-changing-5.jpg";
import changingBackground6 from "../assets/home-changing-6.jpg";

const TEXT_PARTS = [{
    text: "Watch the ",
    highlight: "greatest performances.",
    backgroundImage: changingBackground1,
    url: "#"
}, {
    text: " Chill in a modern ",
    highlight: "VIP bar.",
    backgroundImage: changingBackground2,
    url: "#"
}, {
    text: " Get back to the ",
    highlight: "backstage.",
    backgroundImage: changingBackground3,
    url: "#"
}, {
    text: " Hang out with the ",
    highlight: "famous stars.",
    backgroundImage: changingBackground4,
    url: "#"
}, {
    text: " Discover your ",
    highlight: "new favourites.",
    backgroundImage: changingBackground5,
    url: "#"

}, {
    text: " Join in on our ",
    highlight: "amazing adventures.",
    backgroundImage: changingBackground6,
    url: "#"
}];

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const TextContainer = styled.div`
  padding: 7.5% 15%;
  position: relative;
  
  @media (max-width: 1180px){
    padding: 7.5% 10%;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Filter = styled.div`
  background-color: rgba(0,0,0,0.7);
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  max-width: 100%;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.5s;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => props.src ? `url(${props.src})` : ""};
`;

const Text = styled.span`
  font-size: 3.7em;
  font-weight: 700;
  line-height: 1.65em;
  letter-spacing: 1px;
  transition: color 0.3s, border-bottom-color 0.3s;
  color: ${props => props.disabled ? "black" : props.active ? "white" : "rgb(128, 128, 128)"};
  
  @media (max-width: 1180px){
    font-size: 3.1em;
  }
  @media (max-width: 870px){
    font-size: 2.7em;
  }
  @media (max-width: 595px){
    font-size: 2.3em;
  }
  @media (max-width: 410px){
    font-size: 2em;
  }
  @media (max-width: 320px){
    font-size: 1.7em;
  }
  @media (max-width: 230px){
    font-size: 1.4em;
  }
`;

const Highlight = styled(Text)`
  color ${props => props.disabled ? "rgb(125, 125, 125)" : props.active ? "white" : "rgb(128, 128, 128, 0.6)"};
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: ${props => props.disabled ? "rgb(125, 125, 125)" : props.active ? "white" : "rgb(128, 128, 128, 0.6)"};
  cursor: pointer;
`;

const BackgroundChangingText = () => {
    const [isBackgroundActive, setBackgroundActive] = useState(false);
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    return (
        <Container>
            <ImageContainer>
                {TEXT_PARTS.map((value, index) => (
                    <BackgroundImage src={value.backgroundImage} key={value.text}
                                     visible={isBackgroundActive && backgroundIndex === index}>
                        <Filter/>
                    </BackgroundImage>
                ))}
            </ImageContainer>
            <TextContainer>
                {TEXT_PARTS.map((value, index) => (
                    <React.Fragment key={value.text}>
                        <Text disabled={!isBackgroundActive} active={index === backgroundIndex}>
                            {value.text}
                        </Text>
                        <Highlight disabled={!isBackgroundActive}
                                   active={index === backgroundIndex}
                                   onMouseOver={() => {
                                       setBackgroundActive(true);
                                       setBackgroundIndex(index);
                                   }}
                                   onMouseOut={() => setBackgroundActive(false)}>
                            {value.highlight}
                        </Highlight>
                    </React.Fragment>
                ))}
            </TextContainer>
        </Container>
    )
};

export default BackgroundChangingText;
