import styled from "styled-components";
import Day from "../../../assets/Dayimg.png";
import Sun from "../../../assets/sun.png";
import Moon from "../../../assets/Moon.png";
import Night from "../../../assets/Nightimg.png";
import Arrow from "../../../assets/arrow.png";
import { useState } from "react";

const SecDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-left: 200px;
  padding-top: 80px;
  gap: 150px;

  @media (max-width: 1100px) {
    padding-left: 150px;
    padding-top: 60px;
  }

  @media (max-width: 900px) {
    padding-left: 40px;
    padding-top: 40px;
    gap: 200px;
  }

  @media (max-width: 490px) {
    padding-left: 20px;
    padding-top: 20px;
    gap: 240px;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0px;
  vertical-align: bottom;
  color: #ffffff;
  max-width: 540px;
`;

const TxtDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`;

const DateDiv = styled.div`
  max-width: 1110px;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 30%;

  @media (max-width: 1200px) {
    gap: 10%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`;

const HelloDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 10px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 5px;

  @media (max-width: 900px) {
    width: 22px;
    height: 22px;
  }
`;

const HelloTxt = styled.h1`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 4px;
  vertical-align: bottom;
  text-transform: uppercase;
`;

const Hour = styled.p`
  font-weight: 700;
  font-size: 200px;
  line-height: 100%;
  letter-spacing: -5px;
  vertical-align: bottom;

  @media (max-width: 900px) {
    font-size: 160px;
  }

  @media (max-width: 490px) {
    font-size: 100px;
  }
`;

const BST = styled.span`
  font-weight: 300;
  font-size: 40px;
  line-height: 28px;
  letter-spacing: 0px;
  text-transform: uppercase;
`;

const Location = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 4.8px;
  vertical-align: bottom;
  text-transform: uppercase;
  color: white;
`;

const MoreDiv = styled.div`
  width: 146px;
  height: 56px;
  border-radius: 28px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 220px;
  gap: 10px;
  margin-right: 10%;
  padding: 10px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

const BlackDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const More = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.5;
`;

const Aimg = styled.img`
  width: 12px;
  height: 10px;
`;

const WhiteDiv = styled.div`
  width: 100%;
  height: 330px;
  background: white;
  opacity: 0.75;
  backdrop-filter: blur(40.77px);
  position: absolute;
  top: 55%;
  left: 0;
  padding: 100px;
  border-radius: 10px;
`;

function SecondDiv() {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  const hour = new Date().getHours();
  let greeting = "";
  let Background = "";
  let Star = "";

  if (hour >= 6 && hour < 18) {
    greeting = "Morning";
    Background = `url(${Day})`;
    Star = Sun;
  } else {
    greeting = "Evening";
    Background = `url(${Night})`;
    Star = Moon;
  }

  const [rotated, setRotated] = useState(false);
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setRotated(!rotated);
    setDisplay(!display);
  };

  return (
    <>
      <SecDiv
        style={{
          backgroundImage: Background,
        }}
      >
        <TxtDiv
          style={{
            display: display ? "flex" : "none",
          }}
        >
          <Text>
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </Text>
          <Text>Ada Lovelace</Text>
        </TxtDiv>
        <DateDiv>
          <Flex>
            <HelloDiv>
              <Img src={Star}></Img>
              <HelloTxt>GOOD {greeting}, IT’S CURRENTLY</HelloTxt>
            </HelloDiv>
            <Hour>{time}</Hour>
            <Location>In Tbilisi, Ge</Location>
          </Flex>

          <MoreDiv onClick={handleClick}>
            <More>{display ? "More" : "Less"}</More>
            <BlackDiv>
              <Aimg
                src={Arrow}
                style={{
                  transform: rotated ? "rotate(-90deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              ></Aimg>
            </BlackDiv>
          </MoreDiv>
        </DateDiv>
      </SecDiv>
      <WhiteDiv
        style={{
          display: display ? "none" : "flex",
        }}
      ></WhiteDiv>
    </>
  );
}

export default SecondDiv;
