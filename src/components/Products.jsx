import React from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product1,
      name: "Almoço",
      price: "R$ 35,00 / por porção"
    },
    {
      image: product2,
      name: "Jantar",
      price: "R$ 35,00 / por porção"
    },
    {
      image: product3,
      name: "Sobremesa",
      price: "R$ 35,00 / por porção"
    },
    {
      image: product4,
      name: "Bebida",
      price: "R$ 35,00 / por porção"
    }
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>Favoritos do cardápio!</h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid quas perferendis nesciunt illum.
              </p>
              <button>Compre já</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      color: #30d179;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #249e5b;
      }
      p {
        text-align: center;
        color: #30d179;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        background: #12502e;
        text-transform: capitalize;
        &:hover {
          background: #249e5b;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
