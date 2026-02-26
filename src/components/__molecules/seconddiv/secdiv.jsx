import styled from "styled-components";
import Day from "../../../assets/Dayimg.png";
import Sun from "../../../assets/sun.png";
import Moon from "../../../assets/Moon.png";
import Night from "../../../assets/Nightimg.png";
import Arrow from "../../../assets/arrow.png";
import { useState, useEffect } from "react";

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

  @media (max-width: 480px) {
    gap: 30px;
  }
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
  color: white;
`;

const Hour = styled.p`
  font-weight: 700;
  font-size: 200px;
  line-height: 100%;
  letter-spacing: -5px;
  vertical-align: bottom;
  color: white;

  @media (max-width: 900px) {
    font-size: 160px;
  }

  @media (max-width: 490px) {
    font-size: 100px;
  }
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
  position: absolute;
  top: 55%;
  left: 0;
  padding: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;

  @media (max-width: 500px) {
    height: 100%-50%;
    flex-direction: column;
  }
`;

const LeftDiv = styled.div`
  max-width: 423px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20%;
  @media (max-width: 500px) {
    height: auto;
  }
`;

const CurrentDiv = styled.div`
  max-width: 423px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 500px) {
    flex-direction: row;
    max-width: 323px;
    justify-content: space-between;
  }
`;

const Header = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 13px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const Content = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 100%;
  letter-spacing: 0px;

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const DayDiv = styled.div`
  max-width: 176px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: row;
    max-width: 323px;
    justify-content: space-between;
  }
`;

const RightDiv = styled.div`
  max-width: 423px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20%;

  @media (max-width: 500px) {
    height: auto;
  }
`;

const WeekDiv = styled.div`
  max-width: 179px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: row;
    max-width: 323px;
    justify-content: space-between;
  }
`;

const WeekNumDiv = styled.div`
  max-width: 160px;
  width: 100%;
  gap: 15px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

  @media (max-width: 500px) {
    flex-direction: row;
    max-width: 323px;
    justify-content: space-between;
  }
`;

function SecondDiv() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const Divcolor =
    hour >= 6 && hour < 18
      ? "rgba(255, 255, 255, 0.75)"
      : "rgba(0, 0, 0, 0.75)";

  const Textcolor = hour >= 6 && hour < 18 ? "#303030" : "#FFFFF";

  const [rotated, setRotated] = useState(false);
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setRotated(!rotated);
    setDisplay(!display);
  };

  const timeZoneRaw = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const timezone =
    timeZoneRaw === "Asia/Tbilisi" ? "Europe/Tbilisi" : timeZoneRaw;

  const city = timezone.split("/")[1]?.replace("_", " ") || "Unknown";

  const now = new Date();

  const startOfYear = new Date(currentTime.getFullYear(), 0, 0);
  const diff = now - startOfYear;

  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const now1 = new Date();
  const dayNumber = currentTime.getDay() === 0 ? 7 : currentTime.getDay();

  const dayOfWeek = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const startOfYear1 = new Date(currentTime.getFullYear(), 0, 1);
  const pastDaysOfYear = (currentTime - startOfYear1) / 86400000;

  const weekNumber = Math.ceil(
    (pastDaysOfYear + startOfYear1.getDay() + 1) / 7,
  );

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
            <Location>In {city}</Location>
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
          background: Divcolor,
          color: Textcolor,
        }}
      >
        <LeftDiv>
          <CurrentDiv>
            <Header>CURRENT TIMEZONE</Header>
            <Content>{timezone}</Content>
          </CurrentDiv>
          <DayDiv>
            <Header>Day of the year</Header>
            <Content>{dayOfYear}</Content>
          </DayDiv>
        </LeftDiv>
        <RightDiv>
          <WeekDiv>
            <Header>Day of the week</Header>
            <Content>{dayNumber}</Content>
          </WeekDiv>
          <WeekNumDiv>
            <Header>Week number</Header>
            <Content>{weekNumber}</Content>
          </WeekNumDiv>
        </RightDiv>
      </WhiteDiv>
    </>
  );
}

export default SecondDiv;
