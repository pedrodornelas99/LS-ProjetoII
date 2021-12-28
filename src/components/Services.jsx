import React from "react";
import styled from "styled-components";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1>Serviços</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          incidunt magnam labore ipsam vero minima maxime doloribus dolores ipsa
          soluta.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <button>Leia Mais</button>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <button>Leia Mais</button>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <button>Leia Mais</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  color: white;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        color: white;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #12502e;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #249e5b;
        }
      }
    }
    .yellow {
      p {
        color: white;
      }
      button {
        background-color: #12502e;
        &:hover {
          background-color: #249e5b;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
