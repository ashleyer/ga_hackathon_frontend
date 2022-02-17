import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--lightPink);
  text-align: center;
  h1 {
    letter-spacing: 2px;
    padding: 40px;
    font-size: 40px;
    font-weight: 400;
  }
  

  img {
    height: 40vh;
    postition: relative;
    display: inline-block;
  }

  button {
    background: var(--darkPink);
    padding: 10px 40px;
    border-radius: 20px;
    position: fixed;
    top: 55%;
    left: 46%;
    border: none;
    font-size: 17px;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    img {
      width 100%;
    }
  }
`;