import React from "react";
import PText from "../components/PText";
import AboutImg from "../assets/images/10.png";
import { styled } from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .btnn {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 2rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Siddharth Ojha</span>
            </p>
            <h2 className="about__heading">A freelance Web developer</h2>
            <div className="about__info">
              <PText>
                I am from Bikaner, Rajasthan. A place of beautiful forts. Since
                my childhood, i love art and design. I always try to design
                stuff with my unique point of view. I also love to create things
                that can be usefull to others.
                <br /> <br />
                I started coding since from my first year in College. Coding is
                also an art for me. I love it and now I have the opportunity to
                develop things along with the coding. I find it really
                interesting and I enjoyed the process a lot.
                <br /> <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>

            <a
              className="btnn"
              href="https://drive.google.com/file/d/1WLb1_7Iig09W9UbU_rRUrI0j0BonjQWs/view?usp=drive_link"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="Siddharth Ojha Img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={["Prince School, Sikar, Rajasthan"]}
            />
            <AboutInfoItem
              title="College"
              items={["Rajiv Gandhi Institute of Petroleum Technology"]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skill</h1>
            <AboutInfoItem title="Languages" items={["C", "C++"]} />
            <AboutInfoItem
              title="Frontend"
              items={["HTML", "CSS", "JavaScript", "React"]}
            />
            <AboutInfoItem title="Backend" items={["Node", "Express", "Php"]} />
            <AboutInfoItem title="DataBase" items={["SQL", "MongoDB"]} />
            <AboutInfoItem
              title="Tools"
              items={["Canva", "VsCode", "Postman", "Git"]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="05-07/2023"
              items={["Intern, developer at Decent Technologies"]}
            />
            <AboutInfoItem
              title="11/2023"
              items={["Event Management Head, Urjotsav (Tech Fest)"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
