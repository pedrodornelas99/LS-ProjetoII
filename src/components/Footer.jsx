import React from "react";
import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="footer">
      <Section id="footer">
        <div className="brand container">
          <h3>Redes Sociais</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            repudiandae.
          </p>
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>Sobre nós</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            eligendi repellat laudantium blanditiis iure nulla, ut aliquam
            itaque unde nesciunt cum veritatis perferendis vel expedita! Nam
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contatos</h3>
          </div>
          <p>+83 99999-9999</p>
          <p>veganfood@gmail.com</p>
          <p>@veganfood</p>
          <p>Rua .... .... .... .......</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          &copy; 2021 - <span>Pedro Dornelas Medeiros de Sousa</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

/* footer */

const Section = styled.footer`
  margin: 0;
  background: #062b19;
  color: #249e5b;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 30px;
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: #249e5b;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #03180e;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    align-items: center;
    width: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-content: center;
    h3 {
      font-size: 2rem;
      text-align: center;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

/*lower footer*/

const LowerFooter = styled.div`
  margin: 0;
  position: relative;
  text-align: center;
  background-color: black;
  color: white;
  justify-content: center;
  padding: 1rem;
  h2 {
    span {
      color: #249e5b;
      text-transform: capitalize;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
