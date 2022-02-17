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
    height: 350px;
    position: relative;
  }

  button {
    background: var(--darkPink);
    padding: 10px 40px;
    border-radius: 20px;
    border: none;
    font-size: 17px;
    cursor: pointer;
    position: absolute;
    left: 45%;
    top: 55%;
    
  }

  @media screen and (max-width: 500px) {
    img {
      width 100%;
    }
  }
`;