import React from "react";
import SectionTitle from "./SectionTitle";
import PText from "./PText";
import Button from "./Button";
import AboutImg from "../assets/images/12.png"
import { styled } from "styled-components";

const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .aboutSection__left, 
    .aboutSection__right {
        flex: 1;
    }
    .aboutSection__right{
        border: 2px solid var(--gray-1);
    }
    .section-title {
        text-align: left; 
    }
    .para{
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection__buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 950px) {
        .aboutSection__left{
            flex: 4;
        }
        .aboutSection__right {
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__left,
        .aboutSection__right{
            width: 100%;
        }
        .aboutSection__right{
            margin-top: 3rem;
        }
        .section-title{
            text-align: center;
        }
        .para {
            margin: 0 auto;
            margin-top: 2rem;
        }
        .aboutSection__buttons {
            flex-direction: column;
            gap: 0;
            .button-wrapper,
            a{
                width: 100%;
                text-align: center;
            }
        }
    }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
          I am a freelance website designer and developer from Rajasthan, India. I create professional websites. I love art and always try to show unique views to the audience through my design.
          </PText>
          <div className="aboutSection__buttons">
            <Button
                btnLink="/projects"
                btnText="Works"
                outline={false}
            />
            <Button
                btnLink="/about"
                btnText="Read More"
                outline={true}
            />
          </div>
        </div>
        <div className="aboutSection__right">
            <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
