import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
export default function Newsletter() {
  return (
    <Section id="newsletter">
      <div className="title">
        <h1>Obtenha Notícias</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas
          perferendis nesciunt illum, voluptas nulla laborum alias similique
          praesentium quam.
        </p>
      </div>
      <div className="container">
        <input type="email" placeholder="Insira o seu email..." />
        <button>Cadastra-se</button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #249e5b;
  border-radius: 30px;
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: #062b19;
    padding: 0.3vw;
    border: transparent;
    border-radius: 15px;
    input {
      border-radius: 30px;
      border: transparent;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
