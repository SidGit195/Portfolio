import React from "react";
import PText from "./PText";
import FooterCol from "./FooterCol";
import { styled } from "styled-components";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Siddharth Ojha</h1>
          <PText>
            I am a freelance website designer and developer from Rajasthan,
            India. I always make websites that have unique designs and also has
            a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+91-7878879009",
                path: "tel:+91-7878879009",
              },
              {
                title: "sidojha195@gmail.com",
                path: "mailto:sidojha195@gmail.com",
              },
              {
                title: "Jassusar Gate, Bikaner, Rajasthan",
                path: "https://www.google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "GitHub",
                path: "https://github.com/SidGit195",
              },
              {
                title: "Twitter",
                path: "https://x.com/sid_ojha195",
              },
              {
                title: "Linkedin",
                path: "https://www.linkedin.com/in/siddharth-ojha-8a8068228/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2024 - All Rights Reserved | Developed By Siddharth Ojha
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
